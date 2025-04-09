import{_ as x}from"./index-BFIQSZWf.js";import{i as _,_ as g,L as y}from"./http-XhGcrbxx.js";import{a as w,T as h,_ as k}from"./CardContent.vuevuetypescriptsetuptruelang-Dd2-Q0sp.js";import{a as v}from"./createLucideIcon-DWP4JGYy.js";import{d as f,D as R,e as i,a as S,G as C,b as t,r as $,c as d,w as r,F as e,f as a,y as A,ab as c}from"./index-CbVa2xud.js";import{u as B}from"./useMutation-DEf9p6-8.js";import{R as p}from"./refresh-cw-CGTFkwEt.js";const T=f({__name:"CardFooter",props:{class:{}},setup(m){const n=m;return(o,l)=>(i(),R("div",{class:C(t(v)("flex items-center p-6 pt-0",n.class))},[S(o.$slots,"default")],2))}}),V={restartSystem(){return _.post("/system/restart")}};function E(){return B({mutationFn:V.restartSystem})}const F={class:"flex flex-col w-full"},M={class:"flex flex-col gap-4"},N={class:"flex items-start gap-3 p-4 border border-yellow-200 rounded-lg bg-yellow-50 dark:bg-yellow-950/50 dark:border-yellow-800"},P={class:"flex items-start gap-3 p-4 border border-blue-200 rounded-lg bg-blue-50 dark:bg-blue-950/50 dark:border-blue-800"},q=f({__name:"RestartView",setup(m){const{mutate:n,isPending:o}=E(),l=$(!1);function b(){l.value||(l.value=!0,n(void 0,{onSuccess:()=>{c.success({message:"System will restart in 3 seconds. Please refresh the page after a moment.",title:"Restarting"})},onError:u=>{l.value=!1,c.error({message:u.message,title:"Error"})}}))}return(u,s)=>(i(),d(t(g),null,{default:r(()=>[e("div",F,[s[3]||(s[3]=e("div",{class:"mb-6"},[e("h1",{class:"text-xl font-semibold"}," Application Restart "),e("p",{class:"text-sm text-muted-foreground"}," Restart the application to apply configuration changes ")],-1)),a(t(k),null,{default:r(()=>[a(t(w),{class:"pt-6"},{default:r(()=>[e("div",M,[e("div",N,[a(t(h),{class:"w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5"}),s[0]||(s[0]=e("div",null,[e("h3",{class:"mb-1 text-sm font-medium text-yellow-800 dark:text-yellow-300"}," Warning "),e("p",{class:"text-sm text-yellow-600 dark:text-yellow-400"}," Restarting the application will temporarily interrupt all services. Make sure all important operations are completed before proceeding. ")],-1))]),e("div",P,[a(t(p),{class:"w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5"}),s[1]||(s[1]=e("div",null,[e("h3",{class:"mb-1 text-sm font-medium text-blue-800 dark:text-blue-300"}," What happens during restart "),e("ul",{class:"ml-4 space-y-1 text-sm text-blue-600 list-disc dark:text-blue-400"},[e("li",null,"All system services will be stopped"),e("li",null,"Configuration changes will be applied"),e("li",null,"Services will be restarted with new settings"),e("li",null,"The process typically takes 3 seconds")])],-1))])])]),_:1}),a(t(T),{class:"flex justify-end pt-2 pb-6"},{default:r(()=>[a(t(x),{variant:"destructive",size:"lg",disabled:t(o)||t(l),onClick:b},{default:r(()=>[t(o)?(i(),d(t(y),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):(i(),d(t(p),{key:1,class:"w-4 h-4 mr-2"})),s[2]||(s[2]=A(" Restart System "))]),_:1},8,["disabled"])]),_:1})]),_:1})])]),_:1}))}});export{q as default};
