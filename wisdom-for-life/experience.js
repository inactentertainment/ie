/* Public pilot: no paid API, no cookies, no network request from this script. */
(function(){
 const key='wfl-theme-choice-v1';
 const body=document.body;
 const btn=document.getElementById('comfortToggle');
 const read=document.getElementById('readControl');
 let mode='comfort';
 try{const saved=localStorage.getItem(key);if(saved==='midnight'||saved==='comfort')mode=saved;}catch(e){}
 function setMode(next){mode=next;body.classList.toggle('theme-comfort',mode==='comfort');if(btn){btn.setAttribute('aria-pressed',String(mode==='comfort'));btn.textContent=mode==='comfort'?'☾ Midnight':'☀ Morning';btn.setAttribute('aria-label',mode==='comfort'?'Switch to midnight-blue design':'Switch to comforting cream design');btn.title=mode==='comfort'?'Show the original midnight-blue theme':'Show the warm cream theme';}try{localStorage.setItem(key,mode)}catch(e){}}
 setMode(mode);
 if(btn)btn.addEventListener('click',()=>setMode(mode==='comfort'?'midnight':'comfort'));

 let active=false,speech=null;
 const voiceSelect=document.getElementById('voiceSelect');
 const audio=window.speechSynthesis;
 function availableVoices(){try{return audio&&audio.getVoices?audio.getVoices():[]}catch(e){return []}}
 const maleNames=/\\b(male|daniel|david|george|guy|ryan|thomas|james|arthur|oliver|brian|michael|eric|christopher|fred|mark|paul|jon|alex|lee|ravi)\\b/i;
 function voiceRank(v){const lang=(v.lang||'').toLowerCase(),name=(v.name||'').toLowerCase();let score=0;
 if(/^en-ng/.test(lang))score+=180;
 if(/nigeria|nigerian|lagos/.test(name))score+=140;
 if(/^en-(gb|za|gh|ke)/.test(lang))score+=55;
 if(/^en/.test(lang))score+=35;
 if(maleNames.test(name))score+=100;
 if(/(neural|natural|enhanced|premium|high quality)/.test(name))score+=15;
 if(/female|woman|samantha|victoria|karen|zira|susan|heather/.test(name))score-=70;
 return score}
 let remembered='';
 try{remembered=localStorage.getItem('wfl-voice-choice-v1')||''}catch(e){}
 function chooseVoice(){const voices=availableVoices();if(!voices.length)return null;
 const saved=voices.find(v=>v.voiceURI===remembered);if(saved)return saved;
 return [...voices].filter(v=>/^en/i.test(v.lang||'')).sort((a,b)=>voiceRank(b)-voiceRank(a))[0]||voices[0]}
 function refreshVoices(){if(!voiceSelect)return;const voices=availableVoices();voiceSelect.replaceChildren();
 const automatic=document.createElement('option');automatic.value='';automatic.textContent='Automatic — best available voice';voiceSelect.appendChild(automatic);
 voices.filter(v=>/^en/i.test(v.lang||'')).sort((a,b)=>voiceRank(b)-voiceRank(a)).forEach(v=>{const option=document.createElement('option');option.value=v.voiceURI;option.textContent=v.name+' ('+v.lang+')';voiceSelect.appendChild(option)});
 voiceSelect.value=voices.some(v=>v.voiceURI===remembered)?remembered:''}
 refreshVoices();
 if(audio&&'onvoiceschanged' in audio)audio.addEventListener('voiceschanged',refreshVoices);
 if(voiceSelect)voiceSelect.addEventListener('change',()=>{remembered=voiceSelect.value;try{localStorage.setItem('wfl-voice-choice-v1',remembered)}catch(e){}});
 function stop(){if(audio)try{audio.cancel()}catch(e){}active=false;if(read){read.textContent='▶ Read';read.setAttribute('aria-pressed','false');read.setAttribute('aria-label','Read page aloud')}}
 window.WFL_STOP_VOICE=stop;
 function speakWords(words,button){if(!audio||!window.SpeechSynthesisUtterance)return false;try{
 audio.cancel();speech=new SpeechSynthesisUtterance(words);speech.rate=.84;speech.pitch=.88;speech.lang='en-US';
 const selected=chooseVoice();if(selected){speech.voice=selected;speech.lang=selected.lang||'en-US'}
 speech.onend=stop;speech.onerror=stop;active=true;
 if(button===read){read.textContent='■ Stop';read.setAttribute('aria-pressed','true');read.setAttribute('aria-label','Stop reading aloud')}
 audio.speak(speech);return true}catch(e){stop();return false}}
 window.WFL_SPEAK=speakWords;
 if(read){read.addEventListener('click',()=>{if(active){stop();return}const main=document.querySelector('main');if(!main)return;
 const clone=main.cloneNode(true);
 clone.querySelectorAll('script,button,nav,textarea,form,[aria-hidden="true"],.quiz,.actions,#status,details:not([open])').forEach(el=>el.remove());
 const text=(clone.innerText||clone.textContent||'').replace(/\\s+/g,' ').trim().slice(0,25000);
 if(!text)return;
 if(!speakWords(text,read))read.textContent='Read unavailable';
 });window.addEventListener('pagehide',stop)}

})();
