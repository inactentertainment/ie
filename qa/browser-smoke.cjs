/* Release gate: real Chromium browser smoke test for all nine website branches.
 * Runs locally served public repository branches. No customer sign-in, payments,
 * Supabase writes, or live deployments. Browser errors are recorded, not hidden.
 */
'use strict';
const {chromium}=require('playwright');
const {spawn,execFileSync}=require('node:child_process');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const sites=[
 ['PerennialHomeAndGardens/perennial-home-and-gardens','feature/free-first-transition-2026','perennial'],
 ['wdwedu/WDW-LLC','feature/free-first-transition-2026','wdw'],
 ['wdwedu/examine-the-past-home','feature/free-first-transition-2026','examine'],
 ['cannabisbasics/cannabis-basics','feature/free-first-transition-2026','cannabis'],
 ['inactentertainment/basketball-brilliance','feature/free-coach-platform-2026','basketball'],
 ['inactentertainment/MentalHealthDiscussions','feature/free-first-transition-2026','mentalhealth'],
 ['inactentertainment/ie','feature/free-first-transition-2026','inact'],
 ['inactentertainment/livefit-info','feature/free-first-transition-2026','livefit'],
 ['inactentertainment/divine-shades-of-brown','feature/free-first-transition-2026','divine']
];
const out=path.resolve('qa/browser-smoke-results');
fs.mkdirSync(out,{recursive:true});
const browserErrors=[];
const results=[];
async function ensureReady(url){
 for(let i=0;i<35;i++){
  try{const r=await fetch(url,{signal:AbortSignal.timeout(1200)});if(r.ok)return;}catch{}
  await new Promise(r=>setTimeout(r,180));
 }
 throw Error('Local development server did not start');
}
async function run(){
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 try{
 for(let index=0;index<sites.length;index++){
  const [repo,branch,label]=sites[index],root=path.join(os.tmpdir(),'nine-site-qa-'+label);
  let server;
  const report={site:label,repository:repo,branch,checks:[],issues:[],browserErrors:[],screenshots:[]};
  results.push(report);
  try{
   execFileSync('git',['clone','--quiet','--depth','1','--branch',branch,'https://github.com/'+repo+'.git',root],{timeout:80000,stdio:'pipe'});
   const port=18200+index;
   server=spawn('python3',['-m','http.server',String(port),'--bind','127.0.0.1','--directory',root],{stdio:'ignore'});
   const url='http://127.0.0.1:'+port+'/';
   await ensureReady(url);
   for(const view of [
    {name:'desktop',width:1366,height:900,isMobile:false},
    {name:'mobile',width:390,height:844,isMobile:true} ]){
    const page=await browser.newPage({viewport:{width:view.width,height:view.height},isMobile:view.isMobile,deviceScaleFactor:1,hasTouch:view.isMobile});
    const errs=[];page.on('pageerror',e=>errs.push(String(e.message).slice(0,210)));
    try{
     const response=await page.goto(url,{waitUntil:'domcontentloaded',timeout:45000});
     await page.waitForTimeout(1300);
     const info=await page.evaluate(()=>{
      const images=[...document.querySelectorAll('img')];
      return{
       title:document.title,
       width:document.documentElement.scrollWidth,
       viewport:innerWidth,
       h1:(document.querySelector('h1')?.textContent||'').trim().slice(0,95),
       brokenImages:images.filter(img=>img.complete&&img.naturalWidth===0).slice(0,6).map(img=>img.getAttribute('src')),
       imageCount:images.length,
       buttons:document.querySelectorAll('button').length,
       links:document.querySelectorAll('a[href]').length
      }
     });
     report.checks.push({view:view.name,status:response?.status(),...info});
     if(response?.status()!==200)report.issues.push(view.name+': HTTP '+response?.status());
     if(info.width>info.viewport+40)report.issues.push(view.name+': horizontal overflow '+info.width+'/'+info.viewport);
     if(info.brokenImages.length)report.issues.push(view.name+': broken image sources '+info.brokenImages.join(','));
     if(errs.length)report.issues.push(view.name+': '+errs.length+' uncaught browser errors');
     report.browserErrors.push(...errs.map(e=>view.name+': '+e));
     await page.screenshot({path:path.join(out,label+'-'+view.name+'.png'),fullPage:false,timeout:12000});
     report.screenshots.push(label+'-'+view.name+'.png');
     if(label==='livefit'&&view.name==='desktop'){
      const roadmap=await page.goto(url+'roadmap.html',{waitUntil:'domcontentloaded',timeout:30000});
      report.checks.push({view:'one-time-product',status:roadmap?.status(),hasPrice:await page.locator('text=$7').count()>0,hasCheckout:await page.locator('text=Review My Order').count()>0});
     }
     if(label==='basketball'&&view.name==='desktop'){
      report.checks.push({view:'free-account-source',status:200,freeWorkspace:(await page.content()).includes('Free Coach Workspace'),hasSupabaseCode:(await page.content()).includes('bb-auth.js')});
     }
    }catch(e){report.issues.push(view.name+': '+String(e.message).slice(0,240))}
    finally{await page.close();}
   }
  }catch(e){report.issues.push('Clone/server error: '+String(e.message).slice(0,220))}
  finally{if(server)server.kill('SIGTERM')}
  console.log(JSON.stringify({site:label,checks:report.checks.map(x=>({view:x.view,status:x.status})),issues:report.issues,errors:report.browserErrors.slice(0,5)}));
 }
 }finally{await browser.close();}
 fs.writeFileSync(path.join(out,'results.json'),JSON.stringify(results,null,2));
 const issueSites=results.filter(x=>x.issues.length).map(x=>x.site);
 console.log('REPORT_SITES='+results.length+' ISSUE_SITES='+JSON.stringify(issueSites));
 if(process.env.GITHUB_STEP_SUMMARY){
  let text='## Nine-site browser smoke tests\n\n';
  text+='These are locally served development branches. **No production payment, authentication or cross-account integration tests** were performed.\n\n';
  text+='| Site | Desktop | Mobile | Issues |\n|---|---|---|---|\n';
  for(const r of results){
   const d=r.checks.find(x=>x.view==='desktop'),m=r.checks.find(x=>x.view==='mobile');
   text+='| '+r.site+' | '+(d?.status||'blocked')+' | '+(m?.status||'blocked')+' | '+(r.issues.join('; ').replace(/\|/g,'/')||'None detected in smoke tests')+' |\n';
  }
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY,text);
 }
 // Don't give a false green to release gate when any site has browser failures.
 if(issueSites.length)process.exitCode=1;
}
run().catch(e=>{console.error(e);process.exitCode=1});
