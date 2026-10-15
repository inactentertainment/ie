/* Shared lightweight journeys. Native links remain the fallback. */
(()=>{
 const durations={time:5900,smoke:5400,dunk:5600,canvas:5800,garden:6000,calm:5800,casino:5800,pulse:5300,architect:5600,music:5500,market:5300,funding:5700,portal:4200,sweep:4200,fade:650};
 function safeURL(value,base){try{const u=new URL(value,base);return ['https:','http:'].includes(u.protocol)?u.href:null}catch{return null}}
 function effectFor(brand,index){const effects={ep:'time',cb:'smoke',bb:'dunk',dsb:'canvas',phg:'garden',mhd:'calm',casino:'casino',lf:'pulse',wdw:'architect',music:'music',funding:'funding',ie:'market'};return effects[brand]||(index%2?'sweep':'portal')}
 if(typeof module!=='undefined'&&module.exports)module.exports={safeURL,effectFor,durations};
 if(typeof document==='undefined')return;
 const source=document.currentScript?.src||new URL('assets/card-transitions.js',location.href).href;
 const stageURL=new URL('../card-transition.html',source),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let sound=null,cleanup=()=>{},counter=0;
 try{counter=Number(sessionStorage.getItem('ie-card-transition-turn'))||0}catch{}
 function stopSound(){try{sound?.close()}catch{}sound=null}
 function playSound(type,duration){if(type==='fade'||reduced.matches)return;stopSound();try{const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;const ctx=new Audio();sound=ctx;ctx.resume().catch(()=>{});const now=ctx.currentTime,end=duration/1000,gain=ctx.createGain();gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(.025,now+.18);gain.gain.linearRampToValueAtTime(.025,now+end-.45);gain.gain.linearRampToValueAtTime(0,now+end);gain.connect(ctx.destination);
  if(type==='time'){for(let n=0;n<12;n++){const o=ctx.createOscillator(),g=ctx.createGain(),t=now+n*(end-.5)/12;o.type='sine';o.frequency.setValueAtTime(390-n*12,t);o.frequency.exponentialRampToValueAtTime(75,t+.28);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.6,t+.04);g.gain.linearRampToValueAtTime(0,t+.3);o.connect(g);g.connect(gain);o.start(t);o.stop(t+.32)}}else if(!['portal','sweep','smoke'].includes(type)){const notes={dunk:[95,125,65],canvas:[220,330,440],garden:[294,392,523],calm:[174,261,349],casino:[392,523,784],pulse:[87,174,261],architect:[196,294,392],music:[110,220,330],market:[330,494,659],funding:[220,330,554]}[type]||[180,260,390];for(let n=0;n<9;n++){const o=ctx.createOscillator(),g=ctx.createGain(),t=now+n*end/11;o.type=['dunk','pulse','casino'].includes(type)?'triangle':'sine';o.frequency.setValueAtTime(notes[n%3],t);o.frequency.exponentialRampToValueAtTime(notes[n%3]*(type==='dunk'?.55:1.12),t+.3);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.45,t+.045);g.gain.exponentialRampToValueAtTime(.001,t+.42);o.connect(g);g.connect(gain);o.start(t);o.stop(t+.44)}}else{const count=Math.floor(ctx.sampleRate*end),buffer=ctx.createBuffer(1,count,ctx.sampleRate),data=buffer.getChannelData(0);for(let n=0;n<count;n++)data[n]=Math.random()*2-1;const input=ctx.createBufferSource(),filter=ctx.createBiquadFilter();input.buffer=buffer;filter.type='bandpass';filter.Q.value=.65;filter.frequency.setValueAtTime(type==='portal'?180:1100,now);filter.frequency.exponentialRampToValueAtTime(type==='portal'?1500:220,now+end-.3);input.connect(filter);filter.connect(gain);input.start(now);input.stop(now+end)}setTimeout(()=>{if(sound===ctx)stopSound()},duration+100)}catch{stopSound()}}
 function art(type){return '<div class="journey-art" aria-hidden="true"><div class="journey-scene">'+Array.from({length:24},(_,i)=>'<i style="--i:'+i+';--a:'+(i*15)+'deg"></i>').join('')+'</div><svg viewBox="0 0 400 400"><g class="journey-rings"><circle cx="200" cy="200" r="175"/><circle cx="200" cy="200" r="145"/><circle cx="200" cy="200" r="110"/><circle cx="200" cy="200" r="72"/><path d="M200 18v38m0 288v38M18 200h38m288 0h38M72 72l27 27m202 202 27 27M72 328l27-27m202-202 27-27"/></g><g class="journey-orbit"><ellipse cx="200" cy="200" rx="175" ry="58"/><ellipse cx="200" cy="200" rx="58" ry="175"/></g></svg></div>'}
 function populate(host,title,logo,type,duration){host.dataset.effect=type;host.style.setProperty('--journey-duration',duration+'ms');host.innerHTML=art(type)+'<div class="journey-brand"><img alt="" hidden><h1></h1></div><div class="journey-black" aria-hidden="true"></div><div class="journey-controls"></div>';host.querySelector('h1').textContent=title;const image=host.querySelector('img');if(logo){try{const u=new URL(logo,location.href);if(u.origin===location.origin&&u.pathname.includes('/assets/')){image.src=u.href;image.hidden=false;image.onerror=()=>image.hidden=true}}catch{}}}
 function reset(){cleanup();stopSound()}
 window.addEventListener('pagehide',reset);window.addEventListener('pageshow',e=>{if(e.persisted)reset()});
 if(document.body.dataset.cardJourney==='true'){
  const params=new URLSearchParams(location.search),destination=safeURL(params.get('url'),location.href),host=document.getElementById('card-journey');
  if(!destination||!params.get('url')||new URL(destination).pathname.endsWith('/card-transition.html')){host.textContent='Choose a website from Our World.';const a=document.createElement('a');a.href='index.html';a.textContent='Return to Our World';host.append(a);return}
  const type=reduced.matches?'fade':Object.hasOwn(durations,params.get('effect'))?params.get('effect'):'portal',duration=reduced.matches?180:durations[type];
  let finished=false,timer,safety;const finish=()=>{if(finished)return;finished=true;clearTimeout(timer);clearTimeout(safety);stopSound();location.replace(destination)};
  populate(host,params.get('title')||'Explore',params.get('logo'),type,duration);playSound(type,duration);
  const controls=host.querySelector('.journey-controls'),back=document.createElement('button'),skip=document.createElement('a');back.type='button';back.textContent='‹ Back';back.onclick=()=>{finished=true;clearTimeout(timer);clearTimeout(safety);stopSound();if(history.length>1)history.back();else location.replace('index.html')};skip.href=destination;skip.textContent='Continue now ↗';skip.onclick=()=>{finished=true;clearTimeout(timer);clearTimeout(safety);stopSound()};controls.append(back,skip);
  cleanup=()=>{clearTimeout(timer);clearTimeout(safety)};timer=setTimeout(finish,duration);safety=setTimeout(finish,duration+1000);clearTimeout(window.ieJourneyFallback);
  const connection=document.createElement('link');connection.rel='preconnect';connection.href=new URL(destination).origin;document.head.append(connection);return;
 }
 const card=document.getElementById('detail');if(!card)return;
 function localJourney(a,e,type,title,logo,duration){const handler=a.onclick,destination=safeURL(a.href,location.href);if(!destination)return;const overlay=document.createElement('dialog');overlay.className='card-journey-dialog';overlay.setAttribute('aria-label','Opening '+title);populate(overlay,title,logo,type,duration);document.body.append(overlay);let settled=false,timer,safety;
  const clear=()=>{clearTimeout(timer);clearTimeout(safety);if(overlay.open)overlay.close();overlay.remove();stopSound();cleanup=()=>{}};
  const finish=()=>{if(settled)return;settled=true;clear();if(typeof handler==='function')handler.call(a,e);else location.assign(destination)};
  const cancel=()=>{if(settled)return;settled=true;clear();a.focus({preventScroll:true})};
  const controls=overlay.querySelector('.journey-controls'),back=document.createElement('button'),skip=document.createElement('button');back.type=skip.type='button';back.textContent='‹ Back';back.onclick=cancel;skip.textContent='Continue now ↗';skip.onclick=finish;controls.append(back,skip);overlay.addEventListener('cancel',e=>{e.preventDefault();cancel()});cleanup=cancel;
  try{overlay.showModal()}catch{overlay.remove();finish();return}playSound(type,duration);timer=setTimeout(finish,duration);safety=setTimeout(finish,duration+1000);
 }
 document.addEventListener('click',e=>{
  if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
  const a=e.target.closest?.('#detail-link,#detail-social a');if(!a||a.hasAttribute('download'))return;
  const social=a.closest('#detail-social'),title=social?a.title||'Explore':document.getElementById('detail-title').textContent,logo=card.querySelector('#detail-icon img')?.src,destination=safeURL(a.href,location.href);if(!destination)return;
  const type=reduced.matches?'fade':social?'fade':effectFor(a.dataset.brand,counter),duration=reduced.matches?180:durations[type];
  if(!social&&a.dataset.brand!=='ep'){counter++;try{sessionStorage.setItem('ie-card-transition-turn',String(counter))}catch{}}
  if(a.target==='_blank'){
   // Preserve the immediate native click, target, and browser popup rules.
   const original=a.href,url=new URL(stageURL);url.searchParams.set('url',destination);url.searchParams.set('effect',type);url.searchParams.set('title',title);if(logo&&!social)url.searchParams.set('logo',logo);a.href=url.href;setTimeout(()=>{if(a.href===url.href)a.href=original},0);return;
  }
  e.preventDefault();e.stopImmediatePropagation();try{localJourney(a,e,type,title,logo,duration)}catch{stopSound();if(typeof a.onclick==='function')a.onclick.call(a,e);else location.assign(destination)};
 },true);
})();
