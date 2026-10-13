const fs=require('fs'),vm=require('vm'),assert=require('assert');
const source=fs.readFileSync('assets/card-transitions.js','utf8');
class Element{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.dataset={};this.children=[];this.style={setProperty(){}};this.slots={};this.open=false}
 set innerHTML(value){this.html=value;this.slots={'h1':new Element('h1'),'img':new Element('img'),'.journey-controls':new Element()}}
 get innerHTML(){return this.html}
 querySelector(key){return this.slots[key]||null}
 append(...nodes){this.children.push(...nodes)}setAttribute(key,value){this[key]=value}
 hasAttribute(){return false}close(){this.open=false}showModal(){this.open=true}remove(){this.removed=true}focus(){this.focused=true}
 addEventListener(name,fn){this['on'+name]=fn}
}
function browser(stage=false,search=''){
 const timers=new Map(),events={},navigation=[],body=new Element('body'),head=new Element(),card=new Element(),title=new Element(),host=new Element();let next=0;
 body.dataset.cardJourney=stage?'true':undefined;title.textContent='Examine the Past';card.slots['#detail-icon img']={src:'https://ieplr.com/assets/brand-ep.png'};
 const window={addEventListener(name,fn){events[name]=fn}},ctx={window,location:{href:'https://ieplr.com/'+(stage?'card-transition.html'+search:''),search,origin:'https://ieplr.com',assign:u=>navigation.push(['assign',u]),replace:u=>navigation.push(['replace',u])},history:{length:1,back:()=>navigation.push(['back'])},URL,URLSearchParams,matchMedia:()=>({matches:false}),sessionStorage:{getItem:()=>null,setItem(){}},setTimeout:(fn,ms)=>{timers.set(++next,{fn,ms});return next},clearTimeout:id=>timers.delete(id),document:{currentScript:{src:'https://ieplr.com/assets/card-transitions.js'},body,head,getElementById:id=>({'detail':card,'detail-title':title,'card-journey':host})[id],createElement:tag=>new Element(tag),addEventListener(name,fn){events[name]=fn}}};
 vm.runInNewContext(source,ctx);return {timers,events,navigation,body,host,ctx};
}
function link(brand,target='_blank',social=false){const a=new Element('a');a.dataset.brand=brand;a.target=target;a.href='https://example.com/website';a.title='Pinterest';a.closest=selector=>selector==='#detail-social'?(social?{}:null):a;return a}
function click(b,a,extra={}){const event={button:0,defaultPrevented:false,target:{closest:()=>a},preventDefault(){this.defaultPrevented=true},stopImmediatePropagation(){this.stopped=true},...extra};b.events.click(event);return event}
const native=browser(),ep=link('ep');const e=click(native,ep);assert(!e.defaultPrevented);assert.equal(ep.target,'_blank');assert.equal(new URL(ep.href).searchParams.get('effect'),'time');assert.equal(new URL(ep.href).searchParams.get('url'),'https://example.com/website');for(const t of native.timers.values())t.fn();assert.equal(ep.href,'https://example.com/website');
const other=browser(),a=link('bb'),b=link('lf');click(other,a);assert.equal(new URL(a.href).searchParams.get('effect'),'portal');click(other,b);assert.equal(new URL(b.href).searchParams.get('effect'),'sweep');const social=link('phg','_blank',true);click(other,social);assert.equal(new URL(social.href).searchParams.get('effect'),'fade');
const modified=browser(),m=link('ep');click(modified,m,{ctrlKey:true});assert.equal(m.href,'https://example.com/website');assert.equal(modified.timers.size,0);
const local=browser(),funding=link('funding','_self');let calls=0;funding.onclick=()=>calls++;const le=click(local,funding);assert(le.defaultPrevented);assert.equal(calls,0);const localFinish=[...local.timers.values()].find(t=>t.ms===3800);localFinish.fn();assert.equal(calls,1);localFinish.fn();assert.equal(calls,1);assert(local.body.children[0].removed);
const canceled=browser(),c=link('ie','_self');click(canceled,c);canceled.body.children[0].querySelector('.journey-controls').children[0].onclick();assert.equal(canceled.timers.size,0);assert.equal(canceled.navigation.length,0);assert(c.focused);
const stage=browser(true,'?url=https%3A%2F%2Fexample.com%2Fwebsite&effect=time');assert.equal(stage.host.dataset.effect,'time');const finish=[...stage.timers.values()].find(t=>t.ms===4600);finish.fn();finish.fn();assert.deepEqual(stage.navigation,[['replace','https://example.com/website']]);assert.equal(stage.timers.size,0);
const back=browser(true,'?url=https%3A%2F%2Fexample.com%2Fwebsite');back.host.querySelector('.journey-controls').children[0].onclick();assert.equal(back.timers.size,0);assert.deepEqual(back.navigation,[['replace','index.html']]);
const leave=browser(true,'?url=https%3A%2F%2Fexample.com%2Fwebsite');leave.events.pagehide();assert.equal(leave.timers.size,0);
const {safeURL,effectFor}=require('../assets/card-transitions.js');assert.equal(safeURL('javascript:alert(1)','https://ieplr.com'),null);for(let i=0;i<12;i++)assert.equal(effectFor('ep',i),'time');
console.log('Native tabs, link restoration, rotation, social fade, modifier clicks, funding callback, cancel, one-time navigation, Back, and lifecycle cleanup passed.');
