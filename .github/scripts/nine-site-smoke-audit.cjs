/* Read-only multi-site transition smoke tests.
 * Checks repository source, not live hosted behavior or real customer accounts.
 * All nine are public GitHub repositories; this script uses public GitHub APIs.
 */
'use strict';
const fs=require('node:fs');
const list=[
 ['PerennialHomeAndGardens/perennial-home-and-gardens','feature/free-first-transition-2026','Perennial Home & Gardens'],
 ['wdwedu/WDW-LLC','feature/free-first-transition-2026','WDW LLC'],
 ['wdwedu/examine-the-past-home','feature/free-first-transition-2026','Examine the Past'],
 ['cannabisbasics/cannabis-basics','feature/free-first-transition-2026','Cannabis Basics'],
 ['inactentertainment/basketball-brilliance','feature/free-coach-platform-2026','Basketball Brilliance'],
 ['inactentertainment/MentalHealthDiscussions','feature/free-first-transition-2026','Mental Health Discussions'],
 ['inactentertainment/ie','feature/free-first-transition-2026','InAct Entertainment'],
 ['inactentertainment/livefit-info','feature/free-first-transition-2026','LiveFit'],
 ['inactentertainment/divine-shades-of-brown','feature/free-first-transition-2026','Divine Shades of Brown']
];
async function read(url){
 const r=await fetch(url,{headers:{Accept:'application/vnd.github+json','User-Agent':'InAct-nine-site-smoke-audit',...(process.env.GITHUB_TOKEN?{Authorization:'Bearer '+process.env.GITHUB_TOKEN}:{})}});
 if(!r.ok)throw Error(r.status+' '+url);return r;
}
const api=(r,path)=>'https://api.github.com/repos/'+r+'/'+path;
const raw=(r,sha,p)=>'https://raw.githubusercontent.com/'+r+'/'+sha+'/'+p;
function analyze(doc,paths){
 const missing=[];
 for(const [,tag] of doc.matchAll(/(<(?:a|img|script|link|audio|video|source|iframe|form)\b[^>]*>)/gi)){
  const attr=tag.match(/\b(?:href|src|action)\s*=\s*["']([^"']+)["']/i);
  if(!attr)continue;
  const u=attr[1];
  if(!u || /^(?:#|https?:|mailto:|tel:|sms:|javascript:|data:|\/\/)/i.test(u)||/[<>\{}]/.test(u))continue;
  let p=u.split(/[?#]/)[0];try{p=decodeURIComponent(p)}catch{}
  p=p.replace(/^\/|^\.\//g,'');
  if(!p||p.startsWith('../')||/\$/.test(p))continue;
  if(!paths.has(p)&&!paths.has(p+'/index.html')&&!paths.has(p+'index.html'))missing.push(u);
 }
 const syntax=[];
 const matches=[...doc.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
 for(const [i,m] of matches.entries()){
  if(/\bsrc\s*=|application\/ld\+json|application\/json/i.test(m[1]))continue;
  try{new Function(m[2])}catch(e){syntax.push('inline script '+i+': '+String(e))}
 }
 return {missing:[...new Set(missing)],syntax,inline:matches.length};
}
(async()=>{
 const results=[];
 for(const [repo,branch,title] of list){
  try{
   const head=await(await read(api(repo,'branches/'+branch))).json();
   const sha=head.commit.sha;
   const tree=await(await read(api(repo,'git/trees/'+sha+'?recursive=1'))).json();
   if(tree.truncated)throw Error('GitHub tree listing truncated');
   const files=new Set(tree.tree.filter(f=>f.type==='blob').map(f=>f.path));
   const html=await(await read(raw(repo,sha,'index.html'))).text();
   const q=analyze(html,files);
   const blockers=[],notes=[];
   if(title==='Basketball Brilliance'){
    const billing=await(await read(raw(repo,sha,'assets/js/bb-billing.js'))).text();
    const auth=await(await read(raw(repo,sha,'assets/js/bb-auth.js'))).text();
    if(/buy\.stripe\.com/.test(billing)||!billing.includes("mode:'free'"))blockers.push('Free-account conversion is incomplete');
    if(!auth.includes('team_memberships'))blockers.push('Active team authorization source missing');
    notes.push('Coach/Player/Parent real-account and minor-safety tests still required');
   }
   if(title==='LiveFit'){
    const roadmap=await(await read(raw(repo,sha,'roadmap.html'))).text();
    const success=await(await read(raw(repo,sha,'success.html'))).text();
    if(!/buy\.stripe\.com/.test(roadmap))blockers.push('One-time Stripe checkout link missing');
    if(/params\.get\(['"]paid['"]\)\s*===\s*['"]1['"]/.test(success)&&success.includes('grantPaidAccess'))blockers.push('Unverified paid=1 query can grant local paid access');
    notes.push('Preserve $7 one-time purchase and legitimate customer entitlement');
   }
   if(title==='Cannabis Basics'){
    if(files.has('join.html')&&files.has('members.html'))notes.push('Legacy signup/member routes still exist and require safe free-access migration');
   }
   if(title==='InAct Entertainment'){
    if(files.has('membership.html'))notes.push('Lifetime paid offer still on separate page; confirm entitlement policy');
   }
   if(title==='Divine Shades of Brown'){
    notes.push('Existing lifetime purchase routes must be verified without deleting sales');
   }
   if(title==='Perennial Home & Gardens')notes.push('Preserved development branch created; no changes to live website');
   if(q.missing.length)blockers.push('Unresolved local references: '+q.missing.slice(0,4).join(', '));
   if(q.syntax.length)blockers.push('Inline JavaScript syntax: '+q.syntax.slice(0,2).join(', '));
   results.push({title,repo,branch,sha,missing:q.missing,inlineErrors:q.syntax,blockers,notes});
  }catch(e){results.push({title,repo,branch,blockers:['Audit unavailable: '+String(e)],notes:[]})}
 }
 let md='# Nine Website — Session 4 Repository QA\n\n';
 md+='Read-only source checks. **Passing this audit does not mean live browser, payment, privacy or account tests have passed.**\n\n';
 md+='| Site | Local link + syntax checks | Release blockers / notes |\n|---|---|---|\n';
 for(const r of results){
  const ok=!r.missing?.length&&!r.inlineErrors?.length&&!r.blockers?.length;
  const messages=[...r.blockers,...r.notes].map(s=>s.replace(/\|/g,'/')).join('; ')||'Further functional browser testing needed';
  md+='| '+r.title+' | '+(ok?'Passed':'Needs review')+' | '+messages+' |\n';
 }
 md+='\nRepository snapshots / exact results:\n\n\`\`\`json\n'+JSON.stringify(results,null,2)+'\n\`\`\`\n';
 console.log(md);
 if(process.env.GITHUB_STEP_SUMMARY)fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,md);
 fs.writeFileSync('session-4-audit-result.md',md);
 if(results.some(x=>x.blockers?.some(y=>y.startsWith('Audit unavailable'))))process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
