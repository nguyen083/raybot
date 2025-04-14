import{e as V,c as K,u as C,a as k,P as S,t as A,d as D}from"./PopperContent-D3nZhBrS.js";import{d as v,g as m,Q as T,O,a as b,o as y,w as f,b as I,u as e,r as g,E as j,P as M,p as P,n as N,y as E,a1 as H,N as L,h as z,i as x,m as $,e as q}from"./index-C4xk3hCt.js";import{P as _,a as w}from"./createLucideIcon-uuuZHjQh.js";import{n as G,k as Q,o as U,w as J,p as W,f as X,j as Y}from"./SelectValue.vuevuetypescriptsetuptruelang-DagLmEJ8.js";const Z=v({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(l){const a=l,t=G(),o=V(),n=m(()=>a.tabStopId||o),d=m(()=>t.currentTabStopId.value===n.value),{getItems:u,CollectionItem:i}=Q();T(()=>{a.focusable&&t.onFocusableItemAdd()}),O(()=>{a.focusable&&t.onFocusableItemRemove()});function c(s){if(s.key==="Tab"&&s.shiftKey){t.onItemShiftTab();return}if(s.target!==s.currentTarget)return;const r=U(s,t.orientation.value,t.dir.value);if(r!==void 0){if(s.metaKey||s.ctrlKey||s.altKey||!a.allowShiftKey&&s.shiftKey)return;s.preventDefault();let p=[...u().map(h=>h.ref).filter(h=>h.dataset.disabled!=="")];if(r==="last")p.reverse();else if(r==="prev"||r==="next"){r==="prev"&&p.reverse();const h=p.indexOf(s.currentTarget);p=t.loop.value?J(p,h+1):p.slice(h+1)}j(()=>W(p))}}return(s,r)=>(y(),b(e(i),null,{default:f(()=>[I(e(_),{tabindex:d.value?0:-1,"data-orientation":e(t).orientation.value,"data-active":s.active?"":void 0,"data-disabled":s.focusable?void 0:"",as:s.as,"as-child":s.asChild,onMousedown:r[0]||(r[0]=p=>{s.focusable?e(t).onItemFocus(n.value):p.preventDefault()}),onFocus:r[1]||(r[1]=p=>e(t).onItemFocus(n.value)),onKeydown:c},{default:f(()=>[g(s.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),[B,ee]=K("TabsRoot"),ae=v({__name:"TabsRoot",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{default:"automatic"},modelValue:{},unmountOnHide:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(l,{emit:a}){const t=l,o=a,{orientation:n,unmountOnHide:d,dir:u}=M(t),i=X(u);C();const c=k(t,"modelValue",o,{defaultValue:t.defaultValue,passive:t.modelValue===void 0}),s=P();return ee({modelValue:c,changeModelValue:r=>{c.value=r},orientation:n,dir:i,unmountOnHide:d,activationMode:t.activationMode,baseId:V(void 0,"reka-tabs"),tabsList:s}),(r,p)=>(y(),b(e(_),{dir:e(i),"data-orientation":e(n),"as-child":r.asChild,as:r.as},{default:f(()=>[g(r.$slots,"default",{modelValue:e(c)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),te=v({__name:"TabsList",props:{loop:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},setup(l){const a=l,{loop:t}=M(a),{forwardRef:o,currentElement:n}=C(),d=B();return d.tabsList=n,(u,i)=>(y(),b(e(Y),{"as-child":"",orientation:e(d).orientation.value,dir:e(d).dir.value,loop:e(t)},{default:f(()=>[I(e(_),{ref:e(o),role:"tablist","as-child":u.asChild,as:u.as,"aria-orientation":e(d).orientation.value},{default:f(()=>[g(u.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}});function F(l,a){return`${l}-trigger-${a}`}function R(l,a){return`${l}-content-${a}`}const oe=v({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(l){const a=l,{forwardRef:t}=C(),o=B(),n=m(()=>F(o.baseId,a.value)),d=m(()=>R(o.baseId,a.value)),u=m(()=>a.value===o.modelValue.value),i=P(u.value);return T(()=>{requestAnimationFrame(()=>{i.value=!1})}),(c,s)=>(y(),b(e(S),{present:c.forceMount||u.value,"force-mount":""},{default:f(({present:r})=>[I(e(_),{id:d.value,ref:e(t),"as-child":c.asChild,as:c.as,role:"tabpanel","data-state":u.value?"active":"inactive","data-orientation":e(o).orientation.value,"aria-labelledby":n.value,hidden:!r,tabindex:"0",style:N({animationDuration:i.value?"0s":void 0})},{default:f(()=>[!e(o).unmountOnHide.value||r?g(c.$slots,"default",{key:0}):E("",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),se=v({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"button"}},setup(l){const a=l,{forwardRef:t}=C(),o=B(),n=m(()=>F(o.baseId,a.value)),d=m(()=>R(o.baseId,a.value)),u=m(()=>a.value===o.modelValue.value);return(i,c)=>(y(),b(e(Z),{"as-child":"",focusable:!i.disabled,active:u.value},{default:f(()=>[I(e(_),{id:n.value,ref:e(t),role:"tab",type:i.as==="button"?"button":void 0,as:i.as,"as-child":i.asChild,"aria-selected":u.value?"true":"false","aria-controls":d.value,"data-state":u.value?"active":"inactive",disabled:i.disabled,"data-disabled":i.disabled?"":void 0,"data-orientation":e(o).orientation.value,onMousedown:c[0]||(c[0]=L(s=>{!i.disabled&&s.ctrlKey===!1?e(o).changeModelValue(i.value):s.preventDefault()},["left"])),onKeydown:c[1]||(c[1]=H(s=>e(o).changeModelValue(i.value),["enter","space"])),onFocus:c[2]||(c[2]=()=>{const s=e(o).activationMode!=="manual";!u.value&&!i.disabled&&s&&e(o).changeModelValue(i.value)})},{default:f(()=>[g(i.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),ue=v({__name:"Tabs",props:{defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(l,{emit:a}){const n=A(l,a);return(d,u)=>(y(),b(e(ae),z(x(e(n))),{default:f(()=>[g(d.$slots,"default")]),_:3},16))}}),ce=v({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,t=m(()=>{const{class:o,...n}=a;return n});return(o,n)=>(y(),b(e(oe),$({class:e(w)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a.class)},t.value),{default:f(()=>[g(o.$slots,"default")]),_:3},16,["class"]))}}),fe=v({__name:"TabsList",props:{loop:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,t=m(()=>{const{class:o,...n}=a;return n});return(o,n)=>(y(),b(e(te),$(t.value,{class:e(w)("inline-flex items-center justify-center p-1 text-muted-foreground",a.class)}),{default:f(()=>[g(o.$slots,"default")]),_:3},16,["class"]))}}),ne={class:"truncate"},pe=v({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(l){const a=l,t=m(()=>{const{class:n,...d}=a;return d}),o=D(t);return(n,d)=>(y(),b(e(se),$(e(o),{class:e(w)("border-b-2 hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",a.class)}),{default:f(()=>[q("span",ne,[g(n.$slots,"default")])]),_:3},16,["class"]))}});export{fe as _,pe as a,ce as b,ue as c};
