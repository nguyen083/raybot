import{aP as i,a7 as c,aQ as u,d as p,D as d,F as l,a as y,G as h,b as m,e as f,aR as k,aS as j,aT as g,aU as w,aV as C}from"./index-CbVa2xud.js";import{c as P,a as x}from"./createLucideIcon-DWP4JGYy.js";function E(e=""){if(!i())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const s=u(e),t=c(s);if(!t)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return t}/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=P("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]),v={class:"container p-6"},L=p({__name:"PageContainer",props:{spacing:{type:Boolean,default:!0},class:{}},setup(e){const s=e;return(t,n)=>(f(),d("div",v,[l("div",{class:h(m(x)(s.spacing&&"space-y-6",s.class))},[y(t.$slots,"default")],2)]))}}),a=k(),r=j.create({baseURL:"/api/v1",timeout:2e4,headers:{"Content-Type":"application/json"},withCredentials:!0});r.interceptors.request.use(e=>(e.doNotShowLoading||a.start(),e),e=>Promise.reject(e));r.interceptors.response.use(e=>(a.done(),Promise.resolve(e.data)),e=>{if(a.done(),g(e)&&e.response&&e.response.data){const{status:s}=e.response,{message:t,code:n,details:o}=e.response.data;return s>=400&&s<500?Promise.reject(new w(t,s,n,o)):Promise.reject(new C(t||"Unexpected error",s))}return Promise.reject(e)});export{q as L,L as _,r as i,E as u};
