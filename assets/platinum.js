(()=>{
 const home=document.body.dataset.home==='true'||document.body.classList.contains('home-page');
 if(!home){
  let light=false;document.body.classList.remove('lights-on');
  const bar=document.createElement('aside');bar.id='page-tools';bar.setAttribute('aria-label','Page controls');
  const button=document.createElement('button');button.className='light-toggle';
  function paint(){button.textContent=light?'lights off':'lights on';button.setAttribute('aria-label',light?'Switch lights off':'Switch lights on');button.setAttribute('aria-pressed',String(light))}
  button.onclick=()=>{light=!light;document.body.classList.toggle('lights-on',light);paint()};paint();bar.append(button);document.body.append(bar);
  const read=document.querySelector('.read-aloud');if(read)bar.append(read);
  const extra=document.createElement('div');extra.className='reader-utilities';bar.insertBefore(extra,read||null);
  const popup=document.createElement('div');popup.className='reader-utility-popup';popup.hidden=true;bar.append(popup);
  let active='';const main=document.querySelector('main'),bases=new WeakMap();let scale=1;
  function tool(text,label,action){const b=document.createElement('button');b.type='button';b.textContent=text;b.title=label;b.setAttribute('aria-label',label);b.onclick=action;extra.append(b);return b}
  function close(){popup.hidden=true;extra.querySelectorAll('button').forEach(b=>b.setAttribute('aria-expanded','false'));active=''}
  function option(label,action){const b=document.createElement('button');b.type='button';b.textContent=label;b.onclick=action;popup.append(b)}
  function open(kind,trigger,title,build){if(active===kind){close();return}close();active=kind;popup.replaceChildren();const heading=document.createElement('p');heading.textContent=title;popup.append(heading);build();option('Close',()=>{close();trigger.focus()});popup.hidden=false;trigger.setAttribute('aria-expanded','true');popup.querySelector('button')?.focus()}
  function resizeText(value){const nodes=[...(main?.querySelectorAll('p,li,dt,dd,figcaption,blockquote')||[])].filter(el=>!el.closest('form,nav,dialog')&&!el.querySelector('p,li,dt,dd,figcaption,blockquote'));nodes.forEach(el=>{if(!bases.has(el))bases.set(el,parseFloat(getComputedStyle(el).fontSize))});scale=value;nodes.forEach(el=>el.style.fontSize=bases.get(el)*scale+'px')}
  const size=tool('Aa','Text size',()=>open('size',size,'Text size',()=>{[['Smaller',.9],['Normal',1],['Larger',1.15],['Largest',1.3]].forEach(([label,value])=>option(label,()=>{resizeText(value);close();size.focus()}))}));size.setAttribute('aria-haspopup','true');size.setAttribute('aria-expanded','false');
  const key='ie-reading-place:'+location.pathname;
  const saved=tool('◇','Save or return to your reading place',()=>open('place',saved,'Your reading place',()=>{
   const status=document.createElement('p');status.setAttribute('role','status');popup.append(status);
   option('Save here',()=>{try{const nodes=[...(main?.querySelectorAll('h1,h2,h3,p,li')||[])];const index=nodes.findIndex(el=>el.getBoundingClientRect().bottom>120);const el=nodes[index];localStorage.setItem(key,JSON.stringify({index,offset:el?.getBoundingClientRect().top||0,scroll:scrollY}));status.textContent='Reading place saved on this device.'}catch{status.textContent='Saving is unavailable in this browser.'}});
   option('Return to saved place',()=>{try{const value=JSON.parse(localStorage.getItem(key)||'null');if(!value){status.textContent='Save a place first.';return}document.getElementById('read-stop')?.click();const el=main?.querySelectorAll('h1,h2,h3,p,li')[value.index];window.scrollTo({top:el?scrollY+el.getBoundingClientRect().top-value.offset:value.scroll,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});close();saved.focus({preventScroll:true})}catch{status.textContent='No saved place is available.'}});
  }));saved.setAttribute('aria-haspopup','true');saved.setAttribute('aria-expanded','false');
  tool('↑','Back to top',()=>{document.getElementById('read-stop')?.click();window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!popup.hidden){const trigger=active==='size'?size:saved;close();trigger.focus()}});document.addEventListener('click',e=>{if(!bar.contains(e.target))close()});

  const footer=document.querySelector('footer');let placing=false;
  const place=()=>{placing=false;const top=footer?footer.getBoundingClientRect().top:innerHeight;bar.style.setProperty('--tools-footer-offset',Math.max(0,innerHeight-top)+'px');bar.hidden=top<=0;document.documentElement.style.setProperty('--reader-bottom',Math.max(0,innerHeight-top)+(bar.hidden?0:bar.getBoundingClientRect().height)+8+'px')};
  window.addEventListener('scroll',()=>{if(!placing){placing=true;requestAnimationFrame(place)}},{passive:true});window.addEventListener('resize',place);place();
  if(footer&&typeof ResizeObserver!=='undefined')new ResizeObserver(place).observe(footer);
 }

 const revealFooter=document.querySelector('.site-footer');
 if(revealFooter&&typeof IntersectionObserver==='function'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const bounds=revealFooter.getBoundingClientRect();
  if(bounds.top<innerHeight&&bounds.bottom>0)revealFooter.classList.add('footer-visible');
  revealFooter.classList.add('footer-reveal');
  const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){revealFooter.classList.add('footer-visible');observer.disconnect()}},{threshold:0,rootMargin:'0px 0px -12px 0px'});observer.observe(revealFooter);
 }

 document.querySelectorAll('.word-menu').forEach(menu=>{const trigger=menu.querySelector('summary');const sync=()=>{menu.closest('header').classList.toggle('nav-open',menu.open);trigger.setAttribute('aria-expanded',String(menu.open));trigger.setAttribute('aria-label',menu.open?'Close navigation':'Open navigation');trigger.title=menu.open?'Close navigation':'Open navigation'};menu.addEventListener('toggle',sync);sync();const current=location.pathname.replace(/\/index\.html$/,'/');menu.querySelectorAll('nav a').forEach(link=>{const target=new URL(link.href,location.href);if(target.origin===location.origin&&!target.hash&&target.pathname.replace(/\/index\.html$/,'/')===current)link.setAttribute('aria-current','page')});document.addEventListener('click',e=>{if(!menu.contains(e.target))menu.open=false});menu.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.open=false;menu.querySelector('summary').focus()}})});
 const service=document.querySelector('#inquiry-service');const route=document.querySelector('#department-route');
 if(service&&route){const departments={'Website & interactive app':'Digital Experiences','AI & business workflow':'AI & Business Systems','Instructional design & learning':'Learning & Instructional Design','Digital marketing & branding':'Branding & Marketing','Music & creative media':'Music & Creative Studio','Commercial funding':'Strategic Funding','Partnership or general inquiry':'Partnerships & Visitor Support'};const render=()=>{route.textContent=[...service.selectedOptions].some(o=>o.value)?'Recommended departments: '+[...service.selectedOptions].filter(o=>o.value).map(o=>departments[o.value]).join(', ')+'. Your selections and project brief travel together.':'Your department recommendation will appear here.'};service.addEventListener('change',render);render();const selected=new URLSearchParams(location.search).get('service');if(selected&&[...service.options].some(x=>x.value===selected)){service.value=selected;service.dispatchEvent(new Event('change'))}}

 document.querySelectorAll('#inquiry-form select').forEach(select=>{
  const multi=select.id==='inquiry-service';if(multi)select.multiple=true;
  const label=document.querySelector('label[for="'+select.id+'"]');
  const picker=document.createElement('button');picker.type='button';picker.id=select.id+'-picker';picker.className='contact-picker';picker.setAttribute('aria-haspopup','dialog');picker.setAttribute('aria-controls',select.id+'-dialog');select.hidden=true;select.insertAdjacentElement('afterend',picker);if(label)label.htmlFor=picker.id;
  const dialog=document.createElement('dialog');dialog.id=select.id+'-dialog';dialog.className='contact-choice-dialog';dialog.setAttribute('aria-labelledby',select.id+'-title');
  const heading=document.createElement('h2');heading.id=select.id+'-title';heading.textContent=label?.textContent||'Choose an option';
  const note=document.createElement('p');note.textContent=multi?'Choose one or more services.':'Choose the option that fits.';
  const options=document.createElement('div');options.className='contact-choice-options';
  const done=document.createElement('button');done.type='button';done.className='choice-done';done.textContent='Done';done.onclick=()=>dialog.close();dialog.append(heading,note,options,done);document.body.append(dialog);
  const paint=()=>{const values=[...select.selectedOptions].filter(o=>o.value);picker.textContent=(values.map(o=>o.textContent).join(' · ')||'Select one or more services')+' ▾';picker.setAttribute('aria-label',(label?.textContent||'Choose')+': '+picker.textContent);options.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String([...select.selectedOptions].some(o=>o.value===b.dataset.value))))};
  [...select.options].filter(o=>o.value).forEach(option=>{const button=document.createElement('button');button.type='button';button.dataset.value=option.value;button.textContent=option.textContent;button.onclick=()=>{if(multi)option.selected=!option.selected;else select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));paint()};options.append(button)});
  picker.onclick=()=>{paint();dialog.showModal()};dialog.addEventListener('close',()=>picker.focus({preventScroll:true}));dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});select.addEventListener('change',paint);paint();
 });
})();
