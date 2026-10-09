(()=>{
 const wheel=document.querySelector('.network'),control=document.querySelector('#wheel-control');if(!wheel)return;
 const nodes=[...wheel.querySelectorAll('.node')];if(!nodes.length)return;
 // Uniform distance along the ellipse avoids crowding around its narrow mobile ends.
 nodes.sort((a,b)=>{const angle=n=>{const x=parseFloat(n.style.getPropertyValue('--x'))-50,y=parseFloat(n.style.getPropertyValue('--y'))-50;return(Math.atan2(y,x)+Math.PI/2+Math.PI*2)%(Math.PI*2)};return angle(a)-angle(b)});
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');let manualPause=reduce.matches,visible=true,phase=0,last=0,drawn=0,points=[],length=0;
 function paused(){return wheel.dataset.pointerHold==='true'||manualPause||document.hidden||!visible||!!document.querySelector('#detail[open]')}
 function label(){wheel.dataset.rotation=paused()?'paused':'moving'}
 function measure(){const w=wheel.clientWidth,h=wheel.clientHeight,pad=w<650?55:100,rx=Math.max(60,w/2-pad),ry=h/2-(w<650?76:95);points=[];length=0;let prev;for(let i=0;i<=720;i++){const a=-Math.PI/2+i/720*Math.PI*2,p={x:w/2+rx*Math.cos(a),y:h/2+ry*Math.sin(a)};if(prev)length+=Math.hypot(p.x-prev.x,p.y-prev.y);p.distance=length;points.push(p);prev=p}const ellipses=wheel.querySelectorAll('svg>.orbit');ellipses.forEach((e,i)=>{e.setAttribute('cx','500');e.setAttribute('cy','345');e.setAttribute('rx',String(rx/w*1000*(1-i*.12)));e.setAttribute('ry',String(ry/h*690*(1-i*.12)))});place()}
 function pointAt(distance){let lo=0,hi=points.length-1;while(lo<hi){const mid=(lo+hi)>>1;if(points[mid].distance<distance)lo=mid+1;else hi=mid}const b=points[lo],a=points[Math.max(0,lo-1)],t=(distance-a.distance)/(b.distance-a.distance||1);return{x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t}}
 function place(){if(!length)return;nodes.forEach((n,i)=>{const p=pointAt(((i/nodes.length+phase)%1)*length);n.style.left=p.x+'px';n.style.top=p.y+'px'});if(typeof updateConnectors==='function')updateConnectors();label()}
 function tick(now){const elapsed=last?Math.min(now-last,100):0;last=now;if(wheel.dataset.rotation!==(paused()?'paused':'moving'))label();if(!paused()){phase=(phase+elapsed/240000)%1;if(now-drawn>32){place();drawn=now}}requestAnimationFrame(tick)}
 reduce.addEventListener('change',e=>{manualPause=e.matches;label()});new ResizeObserver(measure).observe(wheel);new IntersectionObserver(es=>{visible=es[0].isIntersecting;last=0;label()},{rootMargin:'150px'}).observe(wheel);document.addEventListener('visibilitychange',()=>{last=0;label()});wheel.querySelectorAll('img').forEach(img=>img.addEventListener('load',place));window.addEventListener('pointerup',()=>{delete wheel.dataset.pointerHold});window.addEventListener('pointercancel',()=>{delete wheel.dataset.pointerHold});measure();requestAnimationFrame(tick);
})();
