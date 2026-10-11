/* One light follows the five card borders and their connecting lines. */
(()=>{
 const grid=document.querySelector('.home-page .destination-section .capabilities');if(!grid)return;
 const cards=[...grid.children].filter(el=>el.tagName==='DIV');const caption=grid.parentElement.querySelector('.network-caption');
 const ns='http://www.w3.org/2000/svg';const svg=document.createElementNS(ns,'svg');svg.classList.add('capability-flow');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');
 const track=document.createElementNS(ns,'path'),pulse=document.createElementNS(ns,'path');track.classList.add('capability-flow-track');pulse.classList.add('capability-flow-pulse');pulse.setAttribute('pathLength','1000');svg.append(track,pulse);grid.append(svg);
 function layout(){
  const bounds=grid.getBoundingClientRect();if(!bounds.width)return;svg.setAttribute('viewBox',`0 0 ${bounds.width+10} ${bounds.height+10}`);
  let path='';cards.forEach((card,i)=>{const rect=card.getBoundingClientRect(),x=rect.left-bounds.left+3,y=rect.top-bounds.top+3,w=rect.width+4,h=rect.height+4,r=8,mid=y+h/2;
   path+=`${i?'L':'M'} ${x} ${mid} L ${x} ${y+r} Q ${x} ${y} ${x+r} ${y} L ${x+w-r} ${y} Q ${x+w} ${y} ${x+w} ${y+r} L ${x+w} ${y+h-r} Q ${x+w} ${y+h} ${x+w-r} ${y+h} L ${x+r} ${y+h} Q ${x} ${y+h} ${x} ${y+h-r} L ${x} ${mid} L ${x+w} ${mid} `;
  });track.setAttribute('d',path);pulse.setAttribute('d',path);
  if(caption){caption.style.fontSize='';const size=parseFloat(getComputedStyle(caption).fontSize);if(caption.scrollWidth>caption.clientWidth)caption.style.setProperty('font-size',(size*caption.clientWidth/caption.scrollWidth*.98)+'px','important')}
 }
 let queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;layout()})}
 if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(schedule);observer.observe(grid);cards.forEach(card=>observer.observe(card));if(caption)observer.observe(caption.parentElement)}window.addEventListener('resize',schedule);document.fonts?.ready.then(schedule);schedule();
})();
