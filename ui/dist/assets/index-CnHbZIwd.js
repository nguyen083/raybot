import{b as C,P as w,a as V}from"./createLucideIcon-BY_K5xgS.js";import{d as k,c as _,e as z,b as u,G as p,w as N,a as j}from"./index-Dj0e6RvW.js";const f=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,h=C,B=(n,a)=>e=>{var d;if((a==null?void 0:a.variants)==null)return h(n,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:c,defaultVariants:i}=a,b=Object.keys(c).map(t=>{const s=e==null?void 0:e[t],o=i==null?void 0:i[t];if(s===null)return null;const r=f(s)||f(o);return c[t][r]}),v=e&&Object.entries(e).reduce((t,s)=>{let[o,r]=s;return r===void 0||(t[o]=r),t},{}),g=a==null||(d=a.compoundVariants)===null||d===void 0?void 0:d.reduce((t,s)=>{let{class:o,className:r,...y}=s;return Object.entries(y).every(x=>{let[m,l]=x;return Array.isArray(l)?l.includes({...i,...v}[m]):{...i,...v}[m]===l})?[...t,o,r]:t},[]);return h(n,b,g,e==null?void 0:e.class,e==null?void 0:e.className)},S=k({__name:"Button",props:{variant:{},size:{},class:{},asChild:{type:Boolean},as:{default:"button"}},setup(n){const a=n;return(e,d)=>(z(),_(u(w),{as:e.as,"as-child":e.asChild,class:p(u(V)(u(O)({variant:e.variant,size:e.size}),a.class))},{default:N(()=>[j(e.$slots,"default")]),_:3},8,["as","as-child","class"]))}}),O=B("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});export{S as _,B as c};
