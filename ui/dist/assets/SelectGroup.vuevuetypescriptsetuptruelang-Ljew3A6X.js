import{P as h,c as u,a as d,b as g}from"./createLucideIcon-DWP4JGYy.js";import{d as c,c as p,e as i,w as f,a as l,m,b as n,D as y,G as v,p as b}from"./index-CbVa2xud.js";import{a as x,c as _}from"./PopperContent-C0qQN3NX.js";const[G,$]=_("SelectGroup"),w=c({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e,r=x(void 0,"reka-select-group");return $({id:r}),(a,s)=>(i(),p(n(h),m({role:"group"},t,{"aria-labelledby":n(r)}),{default:f(()=>[l(a.$slots,"default")]),_:3},16,["aria-labelledby"]))}});/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=u("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=u("circle-alert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),I=c({__name:"Badge",props:{variant:{},class:{}},setup(e){const t=e;return(r,a)=>(i(),y("div",{class:v(n(d)(n(k)({variant:r.variant}),t.class))},[l(r.$slots,"default")],2))}}),k=g("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function M(e){if(!e)return"N/A";const t=new Date(e);return Number.isNaN(t.getTime())?"Invalid date":new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1,year:"numeric",month:"short",day:"numeric"}).format(t)}function N(e){const t=Math.floor(e/86400),r=Math.floor(e%(24*60*60)/(60*60)),a=Math.floor(e%(60*60)/60),s=e%60,o=[];return t>0&&o.push(`${t} day${t>1?"s":""}`),r>0&&o.push(`${r} hour${r>1?"s":""}`),a>0&&o.push(`${a} minute${a>1?"s":""}`),(s>0||o.length===0)&&o.push(`${s.toFixed(0)} second${s!==1?"s":""}`),o.join(" ")}const P=c({__name:"SelectGroup",props:{asChild:{type:Boolean},as:{},class:{}},setup(e){const t=e,r=b(()=>{const{class:a,...s}=t;return s});return(a,s)=>(i(),p(n(w),m({class:n(d)("p-1 w-full",t.class)},r.value),{default:f(()=>[l(a.$slots,"default")]),_:3},16,["class"]))}});export{D as A,A as C,I as _,M as a,P as b,N as f};
