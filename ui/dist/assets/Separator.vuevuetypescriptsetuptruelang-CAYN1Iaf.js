import{P as v,a as u}from"./createLucideIcon-DWP4JGYy.js";import{d as c,p as s,c as p,e as l,w as d,a as m,m as f,b as i,n as x,h as y,D as g,g as B,z as b,G as C}from"./index-CbVa2xud.js";const z=c({__name:"BaseSeparator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(a){const e=a,t=["horizontal","vertical"];function n(r){return t.includes(r)}const o=s(()=>n(e.orientation)?e.orientation:"horizontal"),h=s(()=>o.value==="vertical"?e.orientation:void 0),_=s(()=>e.decorative?{role:"none"}:{"aria-orientation":h.value,role:"separator"});return(r,k)=>(l(),p(i(v),f({as:r.as,"as-child":r.asChild,"data-orientation":o.value},_.value),{default:d(()=>[m(r.$slots,"default")]),_:3},16,["as","as-child","data-orientation"]))}}),P=c({__name:"Separator",props:{orientation:{default:"horizontal"},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(a){const e=a;return(t,n)=>(l(),p(z,x(y(e)),{default:d(()=>[m(t.$slots,"default")]),_:3},16))}}),O=c({__name:"Separator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{},class:{},label:{}},setup(a){const e=a,t=s(()=>{const{class:n,...o}=e;return o});return(n,o)=>(l(),p(i(P),f(t.value,{class:i(u)("shrink-0 bg-border relative",e.orientation==="vertical"?"w-px h-full":"h-px w-full",e.class)}),{default:d(()=>[e.label?(l(),g("span",{key:0,class:C(i(u)("text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",e.orientation==="vertical"?"w-[1px] px-1 py-2":"h-[1px] py-1 px-2"))},b(e.label),3)):B("",!0)]),_:1},16,["class"]))}});export{O as _};
