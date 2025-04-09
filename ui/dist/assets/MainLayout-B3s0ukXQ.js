import{_ as be}from"./Separator.vuevuetypescriptsetuptruelang-DBEF1mAU.js";import{d as v,u as q,r as O,t as se,a as h,b as t,o as U,c as b,e as g,w as u,f as m,m as w,g as ne,n as S,h as R,i as ye,j as te,k as _e,l as re,p as $,q as we,s as Ce,v as $e,C as ke,x as V,y as ie,z as W,A as Be,B as X,D,E as xe,F as C,G as M,H as Y,I as Oe,J as De,K as le,L as Te,M as Pe,_ as Me,N as Ee,O as Ae}from"./index-X0gdIGWG.js";import{P as H,c as E,a as k,b as de}from"./createLucideIcon-BCaKbTyy.js";import{c as K,u as x,a as j,g as ae,_ as ue,b as Se,d as Ie,e as J,f as Re,P as Q,h as Fe,i as ce,j as Le,k as ze,l as He,m as Ke,n as Ne,o as L}from"./PopperContent-CE4NgBCr.js";import{_ as G}from"./index-KSyAhDkd.js";const[I,Ve]=K("DialogRoot"),je=v({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,default:void 0},defaultOpen:{type:Boolean,default:!1},modal:{type:Boolean,default:!0}},emits:["update:open"],setup(o,{emit:a}){const e=o,n=q(e,"open",a,{defaultValue:e.defaultOpen,passive:e.open===void 0}),i=O(),r=O(),{modal:c}=se(e);return Ve({open:n,modal:c,openModal:()=>{n.value=!0},onOpenChange:p=>{n.value=p},onOpenToggle:()=>{n.value=!n.value},contentId:"",titleId:"",descriptionId:"",triggerElement:i,contentElement:r}),(p,f)=>h(p.$slots,"default",{open:t(n)})}}),pe=v({__name:"DialogContentImpl",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:a}){const e=o,s=a,n=I(),{forwardRef:i,currentElement:r}=x();return n.titleId||(n.titleId=j(void 0,"reka-dialog-title")),n.descriptionId||(n.descriptionId=j(void 0,"reka-dialog-description")),U(()=>{n.contentElement=r,ae()!==document.body&&(n.triggerElement.value=ae())}),(c,p)=>(g(),b(t(Ie),{"as-child":"",loop:"",trapped:e.trapFocus,onMountAutoFocus:p[5]||(p[5]=f=>s("openAutoFocus",f)),onUnmountAutoFocus:p[6]||(p[6]=f=>s("closeAutoFocus",f))},{default:u(()=>[m(t(ue),w({id:t(n).contentId,ref:t(i),as:c.as,"as-child":c.asChild,"disable-outside-pointer-events":c.disableOutsidePointerEvents,role:"dialog","aria-describedby":t(n).descriptionId,"aria-labelledby":t(n).titleId,"data-state":t(Se)(t(n).open.value)},c.$attrs,{onDismiss:p[0]||(p[0]=f=>t(n).onOpenChange(!1)),onEscapeKeyDown:p[1]||(p[1]=f=>s("escapeKeyDown",f)),onFocusOutside:p[2]||(p[2]=f=>s("focusOutside",f)),onInteractOutside:p[3]||(p[3]=f=>s("interactOutside",f)),onPointerDownOutside:p[4]||(p[4]=f=>s("pointerDownOutside",f))}),{default:u(()=>[h(c.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),Ge=v({__name:"DialogContentModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:a}){const e=o,s=a,n=I(),i=J(s),{forwardRef:r,currentElement:c}=x();return Re(c),(p,f)=>(g(),b(pe,w({...e,...t(i)},{ref:t(r),"trap-focus":t(n).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:f[0]||(f[0]=l=>{var d;l.defaultPrevented||(l.preventDefault(),(d=t(n).triggerElement.value)==null||d.focus())}),onPointerDownOutside:f[1]||(f[1]=l=>{const d=l.detail.originalEvent,y=d.button===0&&d.ctrlKey===!0;(d.button===2||y)&&l.preventDefault()}),onFocusOutside:f[2]||(f[2]=l=>{l.preventDefault()})}),{default:u(()=>[h(p.$slots,"default")]),_:3},16,["trap-focus"]))}}),qe=v({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:a}){const e=o,n=J(a);x();const i=I(),r=O(!1),c=O(!1);return(p,f)=>(g(),b(pe,w({...e,...t(n)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:f[0]||(f[0]=l=>{var d;l.defaultPrevented||(r.value||(d=t(i).triggerElement.value)==null||d.focus(),l.preventDefault()),r.value=!1,c.value=!1}),onInteractOutside:f[1]||(f[1]=l=>{var _;l.defaultPrevented||(r.value=!0,l.detail.originalEvent.type==="pointerdown"&&(c.value=!0));const d=l.target;((_=t(i).triggerElement.value)==null?void 0:_.contains(d))&&l.preventDefault(),l.detail.originalEvent.type==="focusin"&&c.value&&l.preventDefault()})}),{default:u(()=>[h(p.$slots,"default")]),_:3},16))}}),Ue=v({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:a}){const e=o,s=a,n=I(),i=J(s),{forwardRef:r}=x();return(c,p)=>(g(),b(t(Q),{present:c.forceMount||t(n).open.value},{default:u(()=>[t(n).modal.value?(g(),b(Ge,w({key:0,ref:t(r)},{...e,...t(i),...c.$attrs}),{default:u(()=>[h(c.$slots,"default")]),_:3},16)):(g(),b(qe,w({key:1,ref:t(r)},{...e,...t(i),...c.$attrs}),{default:u(()=>[h(c.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),We=v({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean},as:{}},setup(o){const a=I();return Fe(!0),x(),(e,s)=>(g(),b(t(H),{as:e.as,"as-child":e.asChild,"data-state":t(a).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:u(()=>[h(e.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),Xe=v({__name:"DialogOverlay",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(o){const a=I(),{forwardRef:e}=x();return(s,n)=>{var i;return(i=t(a))!=null&&i.modal.value?(g(),b(t(Q),{key:0,present:s.forceMount||t(a).open.value},{default:u(()=>[m(We,w(s.$attrs,{ref:t(e),as:s.as,"as-child":s.asChild}),{default:u(()=>[h(s.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):ne("",!0)}}}),Ye=v({__name:"DialogClose",props:{asChild:{type:Boolean},as:{default:"button"}},setup(o){const a=o;x();const e=I();return(s,n)=>(g(),b(t(H),w(a,{type:s.as==="button"?"button":void 0,onClick:n[0]||(n[0]=i=>t(e).onOpenChange(!1))}),{default:u(()=>[h(s.$slots,"default")]),_:3},16,["type"]))}}),Je=v({__name:"DialogPortal",props:{to:{},disabled:{type:Boolean},defer:{type:Boolean},forceMount:{type:Boolean}},setup(o){const a=o;return(e,s)=>(g(),b(t(ce),S(R(a)),{default:u(()=>[h(e.$slots,"default")]),_:3},16))}});function Qe(o,a){const e=ye(!1,300),s=O(null),n=_e();function i(){s.value=null,e.value=!1}function r(c,p){const f=c.currentTarget,l={x:c.clientX,y:c.clientY},d=Ze(l,f.getBoundingClientRect()),y=et(l,d),_=tt(p.getBoundingClientRect()),T=ot([...y,..._]);s.value=T,e.value=!0}return te(c=>{if(o.value&&a.value){const p=l=>r(l,a.value),f=l=>r(l,o.value);o.value.addEventListener("pointerleave",p),a.value.addEventListener("pointerleave",f),c(()=>{var l,d;(l=o.value)==null||l.removeEventListener("pointerleave",p),(d=a.value)==null||d.removeEventListener("pointerleave",f)})}}),te(c=>{var p;if(s.value){const f=l=>{var B,P;if(!s.value||!(l.target instanceof HTMLElement))return;const d=l.target,y={x:l.clientX,y:l.clientY},_=((B=o.value)==null?void 0:B.contains(d))||((P=a.value)==null?void 0:P.contains(d)),T=!at(y,s.value),A=!!d.closest("[data-grace-area-trigger]");_?i():(T||A)&&(i(),n.trigger())};(p=o.value)==null||p.ownerDocument.addEventListener("pointermove",f),c(()=>{var l;return(l=o.value)==null?void 0:l.ownerDocument.removeEventListener("pointermove",f)})}}),{isPointerInTransit:e,onPointerExit:n.on}}function Ze(o,a){const e=Math.abs(a.top-o.y),s=Math.abs(a.bottom-o.y),n=Math.abs(a.right-o.x),i=Math.abs(a.left-o.x);switch(Math.min(e,s,n,i)){case i:return"left";case n:return"right";case e:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function et(o,a,e=5){const s=[];switch(a){case"top":s.push({x:o.x-e,y:o.y+e},{x:o.x+e,y:o.y+e});break;case"bottom":s.push({x:o.x-e,y:o.y-e},{x:o.x+e,y:o.y-e});break;case"left":s.push({x:o.x+e,y:o.y-e},{x:o.x+e,y:o.y+e});break;case"right":s.push({x:o.x-e,y:o.y-e},{x:o.x-e,y:o.y+e});break}return s}function tt(o){const{top:a,right:e,bottom:s,left:n}=o;return[{x:n,y:a},{x:e,y:a},{x:e,y:s},{x:n,y:s}]}function at(o,a){const{x:e,y:s}=o;let n=!1;for(let i=0,r=a.length-1;i<a.length;r=i++){const c=a[i].x,p=a[i].y,f=a[r].x,l=a[r].y;p>s!=l>s&&e<(f-c)*(s-p)/(l-p)+c&&(n=!n)}return n}function ot(o){const a=o.slice();return a.sort((e,s)=>e.x<s.x?-1:e.x>s.x?1:e.y<s.y?-1:e.y>s.y?1:0),st(a)}function st(o){if(o.length<=1)return o.slice();const a=[];for(let s=0;s<o.length;s++){const n=o[s];for(;a.length>=2;){const i=a[a.length-1],r=a[a.length-2];if((i.x-r.x)*(n.y-r.y)>=(i.y-r.y)*(n.x-r.x))a.pop();else break}a.push(n)}a.pop();const e=[];for(let s=o.length-1;s>=0;s--){const n=o[s];for(;e.length>=2;){const i=e[e.length-1],r=e[e.length-2];if((i.x-r.x)*(n.y-r.y)>=(i.y-r.y)*(n.x-r.x))e.pop();else break}e.push(n)}return e.pop(),a.length===1&&e.length===1&&a[0].x===e[0].x&&a[0].y===e[0].y?a:a.concat(e)}const fe="tooltip.open",[Z,nt]=K("TooltipProvider"),rt=v({inheritAttrs:!1,__name:"TooltipProvider",props:{delayDuration:{default:700},skipDelayDuration:{default:300},disableHoverableContent:{type:Boolean,default:!1},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean,default:!1}},setup(o){const a=o,{delayDuration:e,skipDelayDuration:s,disableHoverableContent:n,disableClosingTrigger:i,ignoreNonKeyboardFocus:r,disabled:c}=se(a);x();const p=O(!0),f=O(!1),{start:l,stop:d}=re(()=>{p.value=!0},s,{immediate:!1});return nt({isOpenDelayed:p,delayDuration:e,onOpen(){d(),p.value=!1},onClose(){l()},isPointerInTransitRef:f,disableHoverableContent:n,disableClosingTrigger:i,disabled:c,ignoreNonKeyboardFocus:r}),(y,_)=>h(y.$slots,"default")}}),[N,it]=K("TooltipRoot"),lt=v({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,default:!1},open:{type:Boolean,default:void 0},delayDuration:{default:void 0},disableHoverableContent:{type:Boolean,default:void 0},disableClosingTrigger:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,default:void 0}},emits:["update:open"],setup(o,{emit:a}){const e=o,s=a;x();const n=Z(),i=$(()=>e.disableHoverableContent??n.disableHoverableContent.value),r=$(()=>e.disableClosingTrigger??n.disableClosingTrigger.value),c=$(()=>e.disabled??n.disabled.value),p=$(()=>e.delayDuration??n.delayDuration.value),f=$(()=>e.ignoreNonKeyboardFocus??n.ignoreNonKeyboardFocus.value),l=q(e,"open",s,{defaultValue:e.defaultOpen,passive:e.open===void 0});we(l,F=>{n.onClose&&(F?(n.onOpen(),document.dispatchEvent(new CustomEvent(fe))):n.onClose())});const d=O(!1),y=O(),_=$(()=>l.value?d.value?"delayed-open":"instant-open":"closed"),{start:T,stop:A}=re(()=>{d.value=!0,l.value=!0},p,{immediate:!1});function B(){A(),d.value=!1,l.value=!0}function P(){A(),l.value=!1}function z(){T()}return it({contentId:"",open:l,stateAttribute:_,trigger:y,onTriggerChange(F){y.value=F},onTriggerEnter(){n.isOpenDelayed.value?z():B()},onTriggerLeave(){i.value?P():A()},onOpen:B,onClose:P,disableHoverableContent:i,disableClosingTrigger:r,disabled:c,ignoreNonKeyboardFocus:f}),(F,ea)=>(g(),b(t(Le),null,{default:u(()=>[h(F.$slots,"default",{open:t(l)})]),_:3}))}}),dt=v({__name:"TooltipTrigger",props:{reference:{},asChild:{type:Boolean},as:{default:"button"}},setup(o){const a=o,e=N(),s=Z();e.contentId||(e.contentId=j(void 0,"reka-tooltip-content"));const{forwardRef:n,currentElement:i}=x(),r=O(!1),c=O(!1),p=$(()=>e.disabled.value?{}:{click:A,focus:_,pointermove:d,pointerleave:y,pointerdown:l,blur:T});U(()=>{e.onTriggerChange(i.value)});function f(){setTimeout(()=>{r.value=!1},1)}function l(){r.value=!0,document.addEventListener("pointerup",f,{once:!0})}function d(B){B.pointerType!=="touch"&&!c.value&&!s.isPointerInTransitRef.value&&(e.onTriggerEnter(),c.value=!0)}function y(){e.onTriggerLeave(),c.value=!1}function _(B){var P,z;r.value||e.ignoreNonKeyboardFocus.value&&!((z=(P=B.target).matches)!=null&&z.call(P,":focus-visible"))||e.onOpen()}function T(){e.onClose()}function A(){e.disableClosingTrigger.value||e.onClose()}return(B,P)=>(g(),b(t(ze),{"as-child":"",reference:B.reference},{default:u(()=>[m(t(H),w({ref:t(n),"aria-describedby":t(e).open.value?t(e).contentId:void 0,"data-state":t(e).stateAttribute.value,as:B.as,"as-child":a.asChild,"data-grace-area-trigger":""},Ce(p.value)),{default:u(()=>[h(B.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),ge=v({__name:"TooltipContentImpl",props:{ariaLabel:{},asChild:{type:Boolean},as:{},side:{default:"top"},sideOffset:{default:0},align:{default:"center"},alignOffset:{},avoidCollisions:{type:Boolean,default:!0},collisionBoundary:{default:()=>[]},collisionPadding:{default:0},arrowPadding:{default:0},sticky:{default:"partial"},hideWhenDetached:{type:Boolean,default:!1},positionStrategy:{},updatePositionStrategy:{}},emits:["escapeKeyDown","pointerDownOutside"],setup(o,{emit:a}){const e=o,s=a,n=N(),{forwardRef:i}=x(),r=$e(),c=$(()=>{var l;return(l=r.default)==null?void 0:l.call(r,{})}),p=$(()=>{var y;if(e.ariaLabel)return e.ariaLabel;let l="";function d(_){typeof _.children=="string"&&_.type!==ke?l+=_.children:Array.isArray(_.children)&&_.children.forEach(T=>d(T))}return(y=c.value)==null||y.forEach(_=>d(_)),l}),f=$(()=>{const{ariaLabel:l,...d}=e;return d});return U(()=>{V(window,"scroll",l=>{const d=l.target;d!=null&&d.contains(n.trigger.value)&&n.onClose()}),V(window,fe,n.onClose)}),(l,d)=>(g(),b(t(ue),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:d[0]||(d[0]=y=>s("escapeKeyDown",y)),onPointerDownOutside:d[1]||(d[1]=y=>{var _;t(n).disableClosingTrigger.value&&((_=t(n).trigger.value)!=null&&_.contains(y.target))&&y.preventDefault(),s("pointerDownOutside",y)}),onFocusOutside:d[2]||(d[2]=Be(()=>{},["prevent"])),onDismiss:d[3]||(d[3]=y=>t(n).onClose())},{default:u(()=>[m(t(He),w({ref:t(i),"data-state":t(n).stateAttribute.value},{...l.$attrs,...f.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:u(()=>[h(l.$slots,"default"),m(t(Ke),{id:t(n).contentId,role:"tooltip"},{default:u(()=>[ie(W(p.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),ut=v({__name:"TooltipContentHoverable",props:{ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{}},setup(o){const e=Ne(o),{forwardRef:s,currentElement:n}=x(),{trigger:i,onClose:r}=N(),c=Z(),{isPointerInTransit:p,onPointerExit:f}=Qe(i,n);return c.isPointerInTransitRef=p,f(()=>{r()}),(l,d)=>(g(),b(ge,w({ref:t(s)},t(e)),{default:u(()=>[h(l.$slots,"default")]),_:3},16))}}),ct=v({__name:"TooltipContent",props:{forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{default:"top"},sideOffset:{},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{}},emits:["escapeKeyDown","pointerDownOutside"],setup(o,{emit:a}){const e=o,s=a,n=N(),i=L(e,s),{forwardRef:r}=x();return(c,p)=>(g(),b(t(Q),{present:c.forceMount||t(n).open.value},{default:u(()=>[(g(),b(X(t(n).disableHoverableContent.value?ge:ut),w({ref:t(r)},t(i)),{default:u(()=>[h(c.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),pt=v({__name:"TooltipPortal",props:{to:{},disabled:{type:Boolean},defer:{type:Boolean},forceMount:{type:Boolean}},setup(o){const a=o;return(e,s)=>(g(),b(t(ce),S(R(a)),{default:u(()=>[h(e.$slots,"default")]),_:3},16))}}),ft=v({__name:"Sheet",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(o,{emit:a}){const n=L(o,a);return(i,r)=>(g(),b(t(je),S(R(t(n))),{default:u(()=>[h(i.$slots,"default")]),_:3},16))}});/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=E("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=E("chart-bar-big",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=E("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=E("panel-left",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=E("power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=E("settings-2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=E("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=E("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ct=v({inheritAttrs:!1,__name:"SheetContent",props:{class:{},side:{},forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(o,{emit:a}){const e=o,s=a,n=$(()=>{const{class:r,side:c,...p}=e;return p}),i=L(n,s);return(r,c)=>(g(),b(t(Je),null,{default:u(()=>[m(t(Xe),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),m(t(Ue),w({class:t(k)(t($t)({side:r.side}),e.class)},{...t(i),...r.$attrs}),{default:u(()=>[h(r.$slots,"default"),m(t(Ye),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"},{default:u(()=>[m(t(wt),{class:"w-4 h-4"})]),_:1})]),_:3},16,["class"])]),_:3}))}}),$t=de("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),kt="sidebar:state",Bt=60*60*24*7,xt="14rem",Ot="16rem",Dt="3rem",Tt="b",[ee,Pt]=K("Sidebar"),Mt={class:"flex flex-col w-full h-full"},Et=["data-state","data-collapsible","data-variant","data-side"],At={"data-sidebar":"sidebar",class:"flex h-full w-full flex-col text-sidebar-foreground bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"},St=v({inheritAttrs:!1,__name:"Sidebar",props:{side:{default:"left"},variant:{default:"sidebar"},collapsible:{default:"offcanvas"},class:{}},setup(o){const a=o,{isMobile:e,state:s,openMobile:n,setOpenMobile:i}=ee();return(r,c)=>r.collapsible==="none"?(g(),D("div",w({key:0,class:t(k)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",a.class)},r.$attrs),[h(r.$slots,"default")],16)):t(e)?(g(),b(t(ft),w({key:1,open:t(n)},r.$attrs,{"onUpdate:open":t(i)}),{default:u(()=>[m(t(Ct),{"data-sidebar":"sidebar","data-mobile":"true",side:r.side,class:"w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",style:xe({"--sidebar-width":t(Ot)})},{default:u(()=>[C("div",Mt,[h(r.$slots,"default")])]),_:3},8,["side","style"])]),_:3},16,["open","onUpdate:open"])):(g(),D("div",{key:2,class:"hidden group peer md:block","data-state":t(s),"data-collapsible":t(s)==="collapsed"?r.collapsible:"","data-variant":r.variant,"data-side":r.side},[C("div",{class:M(t(k)("duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",r.variant==="floating"||r.variant==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon]"))},null,2),C("div",w({class:t(k)("duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",r.side==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",r.variant==="floating"||r.variant==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",a.class)},r.$attrs),[C("div",At,[h(r.$slots,"default")])],16)],8,Et))}}),It=v({__name:"SidebarContent",props:{class:{}},setup(o){const a=o;return(e,s)=>(g(),D("div",{"data-sidebar":"content",class:M(t(k)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",a.class))},[h(e.$slots,"default")],2))}}),Rt=v({__name:"SidebarGroup",props:{class:{}},setup(o){const a=o;return(e,s)=>(g(),D("div",{"data-sidebar":"group",class:M(t(k)("relative flex w-full min-w-0 flex-col p-2",a.class))},[h(e.$slots,"default")],2))}}),Ft=v({__name:"SidebarHeader",props:{class:{}},setup(o){const a=o;return(e,s)=>(g(),D("div",{"data-sidebar":"header",class:M(t(k)("flex flex-col gap-2 p-2",a.class))},[h(e.$slots,"default")],2))}}),Lt=v({__name:"SidebarInset",props:{class:{}},setup(o){const a=o;return(e,s)=>(g(),D("main",{class:M(t(k)("relative flex min-h-svh flex-1 flex-col bg-background","peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",a.class))},[h(e.$slots,"default")],2))}}),me=v({__name:"SidebarMenu",props:{class:{}},setup(o){const a=o;return(e,s)=>(g(),D("ul",{"data-sidebar":"menu",class:M(t(k)("flex w-full min-w-0 flex-col gap-1",a.class))},[h(e.$slots,"default")],2))}}),zt=v({__name:"Tooltip",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean}},emits:["update:open"],setup(o,{emit:a}){const n=L(o,a);return(i,r)=>(g(),b(t(lt),S(R(t(n))),{default:u(()=>[h(i.$slots,"default")]),_:3},16))}}),Ht=v({inheritAttrs:!1,__name:"TooltipContent",props:{forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},class:{}},emits:["escapeKeyDown","pointerDownOutside"],setup(o,{emit:a}){const e=o,s=a,n=$(()=>{const{class:r,...c}=e;return c}),i=L(n,s);return(r,c)=>(g(),b(t(pt),null,{default:u(()=>[m(t(ct),w({...t(i),...r.$attrs},{class:t(k)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e.class)}),{default:u(()=>[h(r.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),Kt=v({__name:"TooltipTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(o){const a=o;return(e,s)=>(g(),b(t(dt),S(R(a)),{default:u(()=>[h(e.$slots,"default")]),_:3},16))}}),oe=v({__name:"SidebarMenuButtonChild",props:{variant:{default:"default"},size:{default:"default"},isActive:{type:Boolean},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(o){const a=o;return(e,s)=>(g(),b(t(H),w({"data-sidebar":"menu-button","data-size":e.size,"data-active":e.isActive,class:t(k)(t(jt)({variant:e.variant,size:e.size}),a.class),as:e.as,"as-child":e.asChild},e.$attrs),{default:u(()=>[h(e.$slots,"default")]),_:3},16,["data-size","data-active","class","as","as-child"]))}}),ve=v({inheritAttrs:!1,__name:"SidebarMenuButton",props:{variant:{default:"default"},size:{default:"default"},isActive:{type:Boolean},class:{},asChild:{type:Boolean},as:{default:"button"},tooltip:{}},setup(o){const a=o,{isMobile:e,state:s}=ee(),n=$(()=>{const{tooltip:i,...r}=a;return r});return(i,r)=>i.tooltip?(g(),b(t(zt),{key:1},{default:u(()=>[m(t(Kt),{"as-child":""},{default:u(()=>[m(oe,S(R({...n.value,...i.$attrs})),{default:u(()=>[h(i.$slots,"default")]),_:3},16)]),_:3}),m(t(Ht),{side:"right",align:"center",hidden:t(s)!=="collapsed"||t(e)},{default:u(()=>[typeof i.tooltip=="string"?(g(),D(Y,{key:0},[ie(W(i.tooltip),1)],64)):(g(),b(X(i.tooltip),{key:1}))]),_:1},8,["hidden"])]),_:3})):(g(),b(oe,S(w({key:0},{...n.value,...i.$attrs})),{default:u(()=>[h(i.$slots,"default")]),_:3},16))}}),he=v({__name:"SidebarMenuItem",props:{class:{}},setup(o){const a=o;return(e,s)=>(g(),D("li",{"data-sidebar":"menu-item",class:M(t(k)("group/menu-item relative",a.class))},[h(e.$slots,"default")],2))}}),Nt=v({__name:"SidebarProvider",props:{defaultOpen:{type:Boolean,default:!0},open:{type:Boolean,default:void 0},class:{}},emits:["update:open"],setup(o,{emit:a}){const e=o,s=a,n=Oe("(max-width: 768px)"),i=O(!1),r=q(e,"open",s,{defaultValue:e.defaultOpen??!1,passive:e.open===void 0});function c(d){r.value=d,document.cookie=`${kt}=${r.value}; path=/; max-age=${Bt}`}function p(d){i.value=d}function f(){return n.value?p(!i.value):c(!r.value)}V("keydown",d=>{d.key===Tt&&(d.metaKey||d.ctrlKey)&&(d.preventDefault(),f())});const l=$(()=>r.value?"expanded":"collapsed");return Pt({state:l,open:r,setOpen:c,isMobile:n,openMobile:i,setOpenMobile:p,toggleSidebar:f}),(d,y)=>(g(),b(t(rt),{"delay-duration":0},{default:u(()=>[C("div",w({style:{"--sidebar-width":t(xt),"--sidebar-width-icon":t(Dt)},class:t(k)("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",e.class)},d.$attrs),[h(d.$slots,"default")],16)]),_:3}))}}),Vt=v({__name:"SidebarTrigger",props:{class:{}},setup(o){const a=o,{toggleSidebar:e}=ee();return(s,n)=>(g(),b(t(G),{"data-sidebar":"trigger",variant:"ghost",size:"icon",class:M(t(k)("h-7 w-7",a.class)),onClick:t(e)},{default:u(()=>[m(t(ht)),n[0]||(n[0]=C("span",{class:"sr-only"},"Toggle Sidebar",-1))]),_:1},8,["class","onClick"]))}}),jt=de("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",{variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:!p-0"}},defaultVariants:{variant:"default",size:"default"}}),Gt=[{title:"State",path:"/state",icon:mt},{title:"Settings",path:"/settings",icon:yt},{title:"Restart",path:"/restart",icon:bt}],qt=v({__name:"Navigation",props:{items:{}},setup(o){const a=o;return(e,s)=>{const n=le("RouterLink");return g(),b(t(Rt),null,{default:u(()=>[m(t(me),null,{default:u(()=>[(g(!0),D(Y,null,De(a.items,i=>(g(),b(t(he),{key:i.title},{default:u(()=>[m(t(ve),{"as-child":"","is-active":i.isActive},{default:u(()=>[m(n,{to:i.path,"active-class":"font-semibold bg-muted"},{default:u(()=>[i.icon?(g(),b(X(i.icon),{key:0})):ne("",!0),C("span",null,W(i.title),1)]),_:2},1032,["to"])]),_:2},1032,["is-active"])]),_:2},1024))),128))]),_:1})]),_:1})}}}),Ut={class:"flex items-center justify-center bg-blue-600 rounded-lg aspect-square size-8 text-sidebar-primary-foreground"},Wt=v({__name:"AppSidebar",props:{side:{},variant:{},collapsible:{default:"icon"},class:{}},setup(o){const a=o;return(e,s)=>(g(),b(t(St),w(a,{class:"bg-popover"}),{default:u(()=>[m(t(Ft),null,{default:u(()=>[m(t(me),null,{default:u(()=>[m(t(he),null,{default:u(()=>[m(t(ve),{size:"lg",class:"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-transparent"},{default:u(()=>[C("div",Ut,[m(t(gt),{class:"size-4"})]),s[0]||(s[0]=C("span",{class:"font-semibold truncate"},"Raybot UI",-1))]),_:1})]),_:1})]),_:1})]),_:1}),m(t(It),null,{default:u(()=>[m(qt,{items:t(Gt)},null,8,["items"])]),_:1})]),_:1},16))}}),Xt={class:"flex items-center gap-2"},Yt=v({__name:"HeaderActions",setup(o){const{store:a}=Te();return(e,s)=>(g(),D("div",Xt,[m(t(G),{class:"rounded-lg bg-muted hover:bg-muted-hover",variant:"ghost",size:"icon","as-child":""},{default:u(()=>s[1]||(s[1]=[C("a",{href:"https://github.com/tbe-team/raybot",target:"_blank",rel:"noopener noreferrer",class:"text-foreground"},[C("svg",{role:"img",viewBox:"0 0 24 24"},[C("path",{fill:"currentColor",d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]),C("span",{class:"sr-only"},"GitHub")],-1)])),_:1}),m(t(G),{variant:"ghost",size:"icon",class:"rounded-lg bg-muted hover:bg-muted-hover",onClick:s[0]||(s[0]=n=>a.value=t(a)==="light"?"dark":"light")},{default:u(()=>[t(a)==="light"?(g(),b(t(_t),{key:0,class:"w-5 h-5"})):(g(),b(t(vt),{key:1,class:"w-5 h-5"})),s[2]||(s[2]=C("span",{class:"sr-only"},"Toggle theme",-1))]),_:1})]))}}),Jt={class:"flex items-center justify-between h-12 border-b shrink-0"},Qt={class:"flex items-center gap-2 px-4"},Zt={class:"flex flex-col flex-1"},ra=v({__name:"MainLayout",setup(o){const a=Pe("sidebar",!0);return(e,s)=>{const n=le("RouterView");return g(),D(Y,null,[m(t(Me),null,{default:u(i=>[m(t(Ae),{item:i},null,8,["item"])]),_:1}),m(t(Nt),{open:t(a),"onUpdate:open":s[0]||(s[0]=i=>Ee(a)?a.value=i:null)},{default:u(()=>[m(Wt),m(t(Lt),null,{default:u(()=>[C("header",Jt,[C("div",Qt,[m(t(Vt),{class:"-ml-1"}),m(t(be),{orientation:"vertical",class:"h-4 mr-2"})]),m(Yt,{class:"mr-4"})]),C("main",Zt,[m(n)])]),_:1})]),_:1},8,["open"])],64)}}});export{ra as default};
