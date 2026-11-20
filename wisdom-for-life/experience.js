/* Wisdom for Life: free, on-device voice choices and two visual themes.
No streaming voice API or paid narration service is used. */
(()=>{
 const doc=document,body=doc.body;
 const themeButton=doc.getElementById('comfortToggle');
 let theme='comfort';
 try{const t=localStorage.getItem('wfl-theme-choice-v1');if(['comfort','midnight'].includes(t))theme=t}catch(e){}
 function setTheme(t){theme=t;body.classList.toggle('theme-comfort',t==='comfort');
  if(themeButton){themeButton.textContent=t==='comfort'?'☾ Midnight':'☀ Morning';themeButton.setAttribute('aria-pressed',String(t==='comfort'));themeButton.setAttribute('aria-label',t==='comfort'?'Switch to Midnight theme':'Switch to Morning theme')}
  try{localStorage.setItem('wfl-theme-choice-v1',t)}catch(e){}}
 setTheme(theme);
 themeButton?.addEventListener('click',()=>setTheme(theme==='comfort'?'midnight':'comfort'));
 const read=doc.getElementById('readControl'),menu=doc.getElementById('readMenu'),select=doc.getElementById('readVoiceChoice'),play=doc.getElementById('readPage'),stopButton=doc.getElementById('stopReading'),status=doc.getElementById('voiceStatus');
 const synth=window.speechSynthesis;
 const male=/\b(male|daniel|george|guy|ryan|thomas|james|arthur|oliver|brian|michael|eric|christopher|fred|mark|paul|alex|lee|david)\b/i;
 const notMale=/karen|samantha|victoria|zira|female|woman|susan|heather/i;
 const rank=v=>{let score=0;let lang=(v.lang||'').toLowerCase(),name=(v.name||'').toLowerCase();
 if(/^en-gb/.test(lang))score+=200;else if(/^en-us/.test(lang))score+=100;else if(/^en/.test(lang))score+=70;
 if(male.test(name))score+=80;if(notMale.test(name))score-=120;
 if(/natural|premium|enhanced|neural|google uk english male/.test(name))score+=25;return score};
 function voices(){try{return synth?.getVoices()||[]}catch(e){return []}}
 function englishVoices(){return voices().filter(v=>/^en/i.test(v.lang||''))}
 function preferred(pool,kind){let match=pool.filter(v=>kind==='nigerian'?(/^en-ng/i.test(v.lang)||/nigeria|nigerian/i.test(v.name)):kind==='uk'?(/^en-gb/i.test(v.lang)||/google uk english/i.test(v.name)):kind==='us'?/^en-us/i.test(v.lang):true);
 return match.sort((a,b)=>rank(b)-rank(a))[0]||null}
 let selection='uk';
 try{selection=localStorage.getItem('wfl-reading-preset-v2')||'uk'}catch(e){}
 const presetLabels={uk:'UK English · preferred',ng:'Nigerian English · if available',us:'US English · male preferred'};
 function refresh(){if(!select)return;const existing=select.value||selection;select.replaceChildren();
  for(const [value,label] of Object.entries(presetLabels)){const item=new Option(label,value);select.add(item)}
  const others=englishVoices().sort((a,b)=>rank(b)-rank(a));
  for(const v of others){select.add(new Option(v.name+' ('+v.lang+')','voice:'+v.voiceURI))}
  select.value=[...select.options].some(o=>o.value===existing)?existing:'uk';
  const ng=preferred(others,'nigerian');
  const ngopt=[...select.options].find(o=>o.value==='ng');
  if(ngopt)ngopt.textContent=ng?'Nigerian English · '+ng.name:'Nigerian English · not installed';
  const uk=preferred(others,'uk');
  const ukopt=[...select.options].find(o=>o.value==='uk');
  if(ukopt)ukopt.textContent=uk?'UK English · '+uk.name:'UK English · not installed';
  const us=preferred(others,'us');
  const usopt=[...select.options].find(o=>o.value==='us');
  if(usopt)usopt.textContent=us?'US English · '+us.name:'US English · not installed';
 }
 refresh();synth?.addEventListener?.('voiceschanged',refresh);
 select?.addEventListener('change',()=>{selection=select.value;try{localStorage.setItem('wfl-reading-preset-v2',selection)}catch(e){};if(status)status.textContent='Voice selected. Tap Read this page to begin.'});
 function choose(kind,forceNigerian){const list=englishVoices();
  if(forceNigerian){const ng=preferred(list,'nigerian');if(ng)return ng}
  if(kind?.startsWith('voice:'))return voices().find(v=>v.voiceURI===kind.slice(6))||preferred(list,'uk')||preferred(list,'us');
  if(kind==='ng')return preferred(list,'nigerian')||preferred(list,'uk')||preferred(list,'us');
  if(kind==='us')return preferred(list,'us')||preferred(list,'uk');
  return preferred(list,'uk')||preferred(list,'us')||list[0]||null;
 }
 function closeMenu(){if(!menu||!read)return;menu.hidden=true;read.setAttribute('aria-expanded','false')}
 function toggleMenu(){if(!menu||!read)return;const open=menu.hidden;menu.hidden=!open;read.setAttribute('aria-expanded',String(open));if(open)select?.focus()}
 read?.addEventListener('click',toggleMenu);
 doc.addEventListener('pointerdown',e=>{if(!menu?.hidden&&!menu.contains(e.target)&&e.target!==read)closeMenu()});
 doc.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
 let talking=false;
 function stopReading(){try{synth?.cancel()}catch(e){} talking=false;if(stopButton)stopButton.disabled=true;if(play)play.disabled=false;if(status)status.textContent='Reading stopped.'}
 function speak(text,options={}){if(!synth||!window.SpeechSynthesisUtterance){if(status)status.textContent='No reading voice is available in this browser.';return false}
  const preferredVoice=choose(options.preset||selection,!!options.nigerian);
  if(!preferredVoice&&status)status.textContent='Using the browser default voice; preferred voices are not installed.';
  else if(status)status.textContent='Reading with '+(preferredVoice?.name||'the default voice')+'.';
  try{synth.cancel();const u=new SpeechSynthesisUtterance(text);u.rate=.88;u.pitch=.91;u.lang=preferredVoice?.lang||'en-GB';if(preferredVoice)u.voice=preferredVoice;
    u.onend=()=>{talking=false;if(stopButton)stopButton.disabled=true;if(play)play.disabled=false;if(status)status.textContent='Reading complete.'};
    u.onerror=e=>{talking=false;if(stopButton)stopButton.disabled=true;if(play)play.disabled=false;if(status)status.textContent='Reading could not continue in this browser.'};
    talking=true;if(stopButton)stopButton.disabled=false;if(play)play.disabled=true;synth.speak(u);return true
  }catch(e){if(status)status.textContent='Reading could not start.';return false}}
 window.WFL_SPEAK=(text,button,options)=>speak(text,options);
 window.WFL_STOP_VOICE=stopReading;
 function bodyText(){const main=doc.querySelector('main');if(!main)return '';
  const copy=main.cloneNode(true);copy.querySelectorAll('button,textarea,select,input,nav,script,style,details:not([open]),.quiz,.actions,#status').forEach(el=>el.remove());
  return (copy.innerText||copy.textContent||'').replace(/\s+/g,' ').trim().slice(0,25000)}
 play?.addEventListener('click',()=>{const content=bodyText();if(!content){if(status)status.textContent='Nothing to read on this page.';return}
  const faith=new URLSearchParams(location.search).get('tradition');
  speak(content,{nigerian:faith==='yoruba'&&!(select?.value||'').startsWith('voice:')});
  closeMenu()});
 stopButton?.addEventListener('click',stopReading);
 window.addEventListener('pagehide',()=>{try{synth?.cancel()}catch(e){}});
})();
