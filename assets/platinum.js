(()=>{
 const home=document.body.dataset.home==='true'||document.body.classList.contains('home-page');
 if(!home&&document.body.dataset.reader==='true'){
  const bar=document.createElement('aside');bar.id='page-tools';bar.setAttribute('aria-label','i.e. Reading Bar');
  bar.innerHTML='<button class="light-toggle" type="button"></button><div class="reader-utilities"></div><div class="reader-right"></div>';
  document.body.append(bar);
  const footer=document.querySelector('footer');let queued=false;
  function place(){queued=false;const top=footer?footer.getBoundingClientRect().top:innerHeight;bar.style.setProperty('--tools-footer-offset',Math.max(0,innerHeight-top)+'px');bar.hidden=top<=0;document.documentElement.style.setProperty('--reader-bottom',Math.max(0,innerHeight-top)+(bar.hidden?0:bar.getBoundingClientRect().height)+8+'px')}
  window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(place)}},{passive:true});window.addEventListener('resize',place);place();
  if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(place);[footer,document.querySelector('main'),bar].filter(Boolean).forEach(n=>observer.observe(n))}
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

 document.querySelectorAll('#inquiry-form:not([data-guided]) select').forEach(select=>{
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


(()=>{
const tooltip=document.createElement('div');tooltip.className='ie-tooltip';tooltip.id='ie-control-tip';tooltip.setAttribute('role','tooltip');tooltip.hidden=true;document.body.append(tooltip);let owner=null;
function candidate(target){if(target.closest?.('.site-app-footer-text'))return null;return target.closest?.('[data-tooltip],header button[aria-label],header summary[aria-label],footer a[aria-label],footer button[aria-label]')}
function show(n){if(!n)return;if(n.title){n.dataset.tooltip=n.title;n.removeAttribute('title')}owner=n;tooltip.textContent=n.dataset.tooltip||n.getAttribute('aria-label');tooltip.hidden=false;const r=n.getBoundingClientRect(),t=tooltip.getBoundingClientRect();tooltip.style.left=Math.max(6,Math.min(innerWidth-t.width-6,r.left+r.width/2-t.width/2))+'px';tooltip.style.top=Math.max(2,r.top-t.height-8)+'px';n.setAttribute('aria-describedby',tooltip.id)}
function hide(){owner?.removeAttribute('aria-describedby');owner=null;tooltip.hidden=true}
document.querySelectorAll('header [title],footer [title]').forEach(n=>{if(!n.dataset.tooltip)n.dataset.tooltip=n.title;n.removeAttribute('title')});
document.addEventListener('pointerover',e=>{if(e.pointerType==='mouse'){const n=candidate(e.target);if(n&&n!==owner)show(n)}});document.addEventListener('pointerout',e=>{if(owner&&!owner.contains(e.relatedTarget))hide()});document.addEventListener('focusin',e=>show(candidate(e.target)));document.addEventListener('focusout',hide);document.addEventListener('pointerdown',hide);window.addEventListener('scroll',hide,{passive:true});document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
})();
