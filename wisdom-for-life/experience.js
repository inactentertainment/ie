/* Public pilot: no paid API, no cookies, no network request from this script. */
(function(){
 const key='wfl-theme-choice-v1';
 const body=document.body;
 const btn=document.getElementById('comfortToggle');
 const read=document.getElementById('readControl');
 let mode='comfort';
 try{const saved=localStorage.getItem(key);if(saved==='midnight'||saved==='comfort')mode=saved;}catch(e){}
 function setMode(next){mode=next;body.classList.toggle('theme-comfort',mode==='comfort');if(btn){btn.setAttribute('aria-pressed',String(mode==='comfort'));btn.textContent=mode==='comfort'?'☾ Midnight':'☀ Comfort';btn.setAttribute('aria-label',mode==='comfort'?'Switch to midnight-blue design':'Switch to comforting cream design');btn.title=mode==='comfort'?'Show the original midnight-blue theme':'Show the warm cream theme';}try{localStorage.setItem(key,mode)}catch(e){}}
 setMode(mode);
 if(btn)btn.addEventListener('click',()=>setMode(mode==='comfort'?'midnight':'comfort'));
 let active=false;let speech=null;
 function stop(){try{speechSynthesis.cancel()}catch(e){}active=false;if(read){read.textContent='▶ Read';read.setAttribute('aria-pressed','false');read.setAttribute('aria-label','Read the main page aloud')}}
 if(read){read.addEventListener('click',()=>{if(active){stop();return}if(!('speechSynthesis' in window)){read.textContent='Read unavailable';return}const main=document.querySelector('main');if(!main)return;
 const clone=main.cloneNode(true);clone.querySelectorAll('script,button,nav,textarea,form,[aria-hidden="true"],.quiz,.actions,#status').forEach(el=>el.remove());
 const text=(clone.innerText||clone.textContent||'').replace(/\s+/g,' ').trim().slice(0,25000);
 if(!text)return;
 try{speechSynthesis.cancel();speech=new SpeechSynthesisUtterance(text);speech.rate=.88;speech.pitch=1;speech.lang='en-US';speech.onend=stop;speech.onerror=stop;active=true;read.textContent='■ Stop';read.setAttribute('aria-pressed','true');read.setAttribute('aria-label','Stop reading aloud');speechSynthesis.speak(speech)}catch(e){stop()}});window.addEventListener('pagehide',stop)}
})();
