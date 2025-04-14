import{i as B,u as Z,_ as we}from"./http-h4_9HVzS.js";import{l as Se,m as Pe,u as K,_ as N,a as U,b as O,c as L,d as w}from"./SelectValue.vuevuetypescriptsetuptruelang-BY4OQCFv.js";import{u as X}from"./useMutation-CjNgqsLA.js";import{_ as W}from"./index-CQsLCJ-P.js";import{d as Q,z as d,u as ee,F as S,_ as P,a as x,b as V,c as E,t as te}from"./vee-validate-zod-BDdgvckB.js";import{d as I,g as ne,D as xe,a as $,o as i,m as q,c as h,v as le,F as H,O as Ve,w as l,r as ie,y as R,u as e,a1 as ke,N as Ee,I as he,J as $e,p as Fe,b as t,f as re,e as v,t as ae,M as A,j as n,h as G,i as M,G as Re,x as Ie,H as qe}from"./index-BFTjAVnI.js";import{L as D}from"./loader-CjbNRMlN.js";import{P as fe,c as pe,a as ue}from"./createLucideIcon-CAkG3pDG.js";import{_ as Te}from"./plugin-vueexport-helper-DlAUqK2U.js";import{s as Be,a as Ae,u as me,c as De,t as je}from"./PopperContent-DZG7HJSK.js";import{_ as Ne,a as z,b as J,c as Ue}from"./TabsTrigger.vuevuetypescriptsetuptruelang-ZHwx5Neo.js";const de=I({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(f){const s=f,{primitiveElement:r,currentElement:_}=Se(),p=ne(()=>s.checked??s.value);return xe(p,(o,m)=>{if(!_.value)return;const c=_.value,b=window.HTMLInputElement.prototype,g=Object.getOwnPropertyDescriptor(b,"value").set;if(g&&o!==m){const y=new Event("input",{bubbles:!0}),C=new Event("change",{bubbles:!0});g.call(c,o),c.dispatchEvent(y),c.dispatchEvent(C)}}),(o,m)=>(i(),$(Be,q({ref_key:"primitiveElement",ref:r},{...s,...o.$attrs},{as:"input"}),null,16))}}),Oe=I({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{},value:{},checked:{type:Boolean,default:void 0},required:{type:Boolean},disabled:{type:Boolean},feature:{default:"fully-hidden"}},setup(f){const s=f,r=ne(()=>typeof s.value=="object"&&Array.isArray(s.value)&&s.value.length===0&&s.required),_=ne(()=>typeof s.value=="string"||typeof s.value=="number"||typeof s.value=="boolean"?[{name:s.name,value:s.value}]:typeof s.value=="object"&&Array.isArray(s.value)?s.value.flatMap((p,o)=>typeof p=="object"?Object.entries(p).map(([m,c])=>({name:`[${s.name}][${o}][${m}]`,value:c})):{name:`[${s.name}][${o}]`,value:p}):s.value!==null&&typeof s.value=="object"&&!Array.isArray(s.value)?Object.entries(s.value).map(([p,o])=>({name:`[${s.name}][${p}]`,value:o})):[]);return(p,o)=>r.value?(i(),$(de,q({key:p.name},{...s,...p.$attrs},{name:p.name,value:p.value}),null,16,["name","value"])):(i(!0),h(H,{key:1},le(_.value,m=>(i(),$(de,q({key:m.name,ref_for:!0},{...s,...p.$attrs},{name:m.name,value:m.value}),null,16,["name","value"]))),128))}}),[Le,He]=De("SwitchRoot"),Qe=I({__name:"SwitchRoot",props:{defaultValue:{type:Boolean},modelValue:{type:[Boolean,null],default:void 0},disabled:{type:Boolean},id:{},value:{default:"on"},asChild:{type:Boolean},as:{default:"button"},name:{},required:{type:Boolean}},emits:["update:modelValue"],setup(f,{emit:s}){const r=f,_=s,{disabled:p}=Ve(r),o=Ae(r,"modelValue",_,{defaultValue:r.defaultValue,passive:r.modelValue===void 0});function m(){p.value||(o.value=!o.value)}const{forwardRef:c,currentElement:b}=me(),u=Pe(b),g=ne(()=>{var y;return r.id&&b.value?(y=document.querySelector(`[for="${r.id}"]`))==null?void 0:y.innerText:void 0});return He({modelValue:o,toggleCheck:m,disabled:p}),(y,C)=>(i(),$(e(fe),q(y.$attrs,{id:y.id,ref:e(c),role:"switch",type:y.as==="button"?"button":void 0,value:y.value,"aria-label":y.$attrs["aria-label"]||g.value,"aria-checked":e(o),"aria-required":y.required,"data-state":e(o)?"checked":"unchecked","data-disabled":e(p)?"":void 0,"as-child":y.asChild,as:y.as,disabled:e(p),onClick:m,onKeydown:ke(Ee(m,["prevent"]),["enter"])}),{default:l(()=>[ie(y.$slots,"default",{modelValue:e(o)}),e(u)&&y.name?(i(),$(e(Oe),{key:0,type:"checkbox",name:y.name,disabled:e(p),required:y.required,value:y.value,checked:!!e(o)},null,8,["name","disabled","required","value","checked"])):R("",!0)]),_:3},16,["id","type","value","aria-label","aria-checked","aria-required","data-state","data-disabled","as-child","as","disabled","onKeydown"]))}}),Ge=I({__name:"SwitchThumb",props:{asChild:{type:Boolean},as:{default:"span"}},setup(f){const s=Le();return me(),(r,_)=>{var p;return i(),$(e(fe),{"data-state":(p=e(s).modelValue)!=null&&p.value?"checked":"unchecked","data-disabled":e(s).disabled.value?"":void 0,"as-child":r.asChild,as:r.as},{default:l(()=>[ie(r.$slots,"default")]),_:3},8,["data-state","data-disabled","as-child","as"])}}});/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=pe("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=pe("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),We={class:"relative"},Ye={class:"sr-only"},ze=I({__name:"PasswordInput",props:he({disabled:{type:Boolean},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(f){const s=f,r=$e(f,"modelValue"),_=Fe(!1);function p(){_.value=!_.value}return(o,m)=>(i(),h("div",We,[t(e(Q),{modelValue:r.value,"onUpdate:modelValue":m[0]||(m[0]=c=>r.value=c),type:e(_)?"text":"password",class:re(e(ue)("pr-10 hide-password-toggle",s.class))},null,8,["modelValue","type","class"]),t(e(W),{type:"button",variant:"ghost",size:"sm",class:"absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent",onClick:p},{default:l(()=>[e(_)&&!s.disabled?(i(),$(e(Ke),{key:0,class:"w-4 h-4","aria-hidden":"true"})):(i(),$(e(Me),{key:1,class:"w-4 h-4","aria-hidden":"true"})),v("span",Ye,ae(e(_)?"Hide password":"Show password"),1)]),_:1})]))}}),oe=Te(ze,[["__scopeId","data-v-2606193e"]]),j={getLogConfig:()=>B.get("/configs/log"),updateLogConfig:f=>B.put("/configs/log",f),getHardwareConfig:()=>B.get("/configs/hardware"),updateHardwareConfig:f=>B.put("/configs/hardware",f),getCloudConfig:()=>B.get("/configs/cloud"),updateCloudConfig:f=>B.put("/configs/cloud",f),getHttpConfig:()=>B.get("/configs/http"),updateHttpConfig:f=>B.put("/configs/http",f),getGrpcConfig:()=>B.get("/configs/grpc"),updateGrpcConfig:f=>B.put("/configs/grpc",f),getCargoConfig:()=>B.get("/configs/cargo"),updateCargoConfig:f=>B.put("/configs/cargo",f),getWifiConfig:()=>B.get("/configs/wifi"),updateWifiConfig:f=>B.put("/configs/wifi",f)},ce="logConfig",ge="hardwareConfig",be="cloudConfig",_e="grpcConfig",ye="httpConfig",ve="cargoConfig",Ce="wifiConfig";function Je(){return K({queryKey:[ce],queryFn:j.getLogConfig})}function Ze(){return X({mutationFn:j.updateLogConfig})}function Xe(){return K({queryKey:[ge],queryFn:j.getHardwareConfig})}function et(){return X({mutationFn:j.updateHardwareConfig})}function tt(){return K({queryKey:[be],queryFn:j.getCloudConfig})}function lt(){return X({mutationFn:j.updateCloudConfig})}function at(){return K({queryKey:[_e],queryFn:j.getGrpcConfig})}function nt(){return X({mutationFn:j.updateGrpcConfig})}function st(){return K({queryKey:[ye],queryFn:j.getHttpConfig})}function ut(){return X({mutationFn:j.updateHttpConfig})}function ot(){return K({queryKey:[ve],queryFn:j.getCargoConfig})}function it(){return X({mutationFn:j.updateCargoConfig})}function dt(){return K({queryKey:[Ce],queryFn:j.getWifiConfig})}function rt(){return X({mutationFn:j.updateWifiConfig})}const ft=I({__name:"CargoConfigForm",props:{initialValues:{}},setup(f){const s=f,r=d.object({liftPosition:d.number().min(0,"Lift position must be at least 0"),lowerPosition:d.number().min(0,"Lower position must be at least 0")}).refine(b=>b.liftPosition<b.lowerPosition,{message:"Lift position must be less than lower position",path:["liftPosition"]}),_=Z(),{mutate:p,isPending:o}=it(),c=ee({validationSchema:te(r),initialValues:s.initialValues}).handleSubmit(b=>{p(b,{onSuccess:()=>{_.setQueryData([ve],b),A.success("Cargo configuration updated successfully!")},onError:()=>{A.error("Failed to update cargo configuration")}})});return(b,u)=>(i(),h("form",{class:"flex flex-col w-full max-w-lg space-y-6",onSubmit:u[0]||(u[0]=(...g)=>e(c)&&e(c)(...g))},[u[4]||(u[4]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," Cargo Configuration ",-1)),t(e(S),{name:"liftPosition"},{default:l(({componentField:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[1]||(u[1]=[n("Lift Position")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),q(g,{type:"number",placeholder:"Enter lift position",disabled:e(o)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"lowerPosition"},{default:l(({componentField:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[2]||(u[2]=[n("Lower Position")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),q(g,{type:"number",placeholder:"Enter lower position",disabled:e(o)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),v("div",null,[t(e(W),{type:"submit",disabled:e(o)},{default:l(()=>[e(o)?(i(),$(e(D),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):R("",!0),u[3]||(u[3]=n(" Save "))]),_:1},8,["disabled"])])],32))}}),pt={key:0,class:"flex items-center justify-center h-full"},mt=I({__name:"CargoConfigTab",setup(f){const{data:s,isPending:r}=ot();return(_,p)=>(i(),h(H,null,[e(r)?(i(),h("div",pt,[t(e(D),{class:"w-4 h-4 animate-spin"})])):R("",!0),e(s)?(i(),$(ft,{key:1,"initial-values":e(s)},null,8,["initial-values"])):R("",!0)],64))}}),ct=I({__name:"CloudConfigForm",props:{initialValues:{}},setup(f){const s=f,r=d.object({address:d.string().min(1,"Address is required"),token:d.string().min(1,"Token is required")}),_=Z(),{mutate:p,isPending:o}=lt(),c=ee({validationSchema:te(r),initialValues:s.initialValues}).handleSubmit(b=>{p(b,{onSuccess:()=>{_.setQueryData([be],b),A.success("Cloud configuration updated successfully!")},onError:()=>{A.error("Failed to update cloud configuration")}})});return(b,u)=>(i(),h("form",{class:"flex flex-col w-full max-w-lg space-y-6",onSubmit:u[0]||(u[0]=(...g)=>e(c)&&e(c)(...g))},[u[4]||(u[4]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," Cloud Configuration ",-1)),t(e(S),{name:"address"},{default:l(({componentField:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[1]||(u[1]=[n("Cloud Address")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),q(g,{type:"url",placeholder:"https://cloud.example.com",disabled:e(o)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"token"},{default:l(({componentField:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[2]||(u[2]=[n("Auth token")])),_:1}),t(e(V),null,{default:l(()=>[t(e(oe),q(g,{placeholder:"Enter your auth token",disabled:e(o)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),v("div",null,[t(e(W),{type:"submit",disabled:e(o)},{default:l(()=>[e(o)?(i(),$(e(D),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):R("",!0),u[3]||(u[3]=n(" Save "))]),_:1},8,["disabled"])])],32))}}),gt={key:0,class:"flex items-center justify-center h-full"},bt=I({__name:"CloudConfigTab",setup(f){const{data:s,isPending:r}=tt();return(_,p)=>(i(),h(H,null,[e(r)?(i(),h("div",gt,[t(e(D),{class:"w-4 h-4 animate-spin"})])):R("",!0),e(s)?(i(),$(ct,{key:1,"initial-values":e(s)},null,8,["initial-values"])):R("",!0)],64))}}),se=I({__name:"Switch",props:{defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean},id:{},value:{},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean},class:{}},emits:["update:modelValue"],setup(f,{emit:s}){const r=f,_=s,p=ne(()=>{const{class:m,...c}=r;return c}),o=je(p,_);return(m,c)=>(i(),$(e(Qe),q(e(o),{class:e(ue)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r.class)}),{default:l(()=>[t(e(Ge),{class:re(e(ue)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"))},{default:l(()=>[ie(m.$slots,"thumb")]),_:3},8,["class"])]),_:3},16,["class"]))}}),_t={class:"space-y-0.5"},yt=I({__name:"GRPCConfigForm",props:{initialValues:{}},setup(f){const s=f,r=d.object({port:d.number().int().min(1024,"Port must be at least 1024").max(65535,"Port must be at most 65535"),enable:d.boolean().default(!1)}),_=Z(),{mutate:p,isPending:o}=nt(),c=ee({validationSchema:te(r),initialValues:s.initialValues}).handleSubmit(b=>{p(b,{onSuccess:()=>{_.setQueryData([_e],b),A.success("gRPC configuration updated successfully!")},onError:()=>{A.error("Failed to update gRPC configuration")}})});return(b,u)=>(i(),h("form",{class:"flex flex-col w-full max-w-lg space-y-6",onSubmit:u[0]||(u[0]=(...g)=>e(c)&&e(c)(...g))},[u[4]||(u[4]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," gRPC Configuration ",-1)),t(e(S),{name:"port"},{default:l(({field:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[1]||(u[1]=[n("Port")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),{modelValue:g.value,"onUpdate:modelValue":y=>g.value=y,type:"number",placeholder:"Enter port number",disabled:e(o),class:"[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"enable"},{default:l(({value:g,handleChange:y})=>[t(e(P),{class:"flex flex-row items-center justify-between p-4 border rounded-lg"},{default:l(()=>[v("div",_t,[t(e(x),null,{default:l(()=>u[2]||(u[2]=[n("Enable server")])),_:1})]),t(e(V),null,{default:l(()=>[t(e(se),{"model-value":g,disabled:e(o),"aria-readonly":"","onUpdate:modelValue":y},null,8,["model-value","disabled","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:1}),v("div",null,[t(e(W),{type:"submit",disabled:e(o)},{default:l(()=>[e(o)?(i(),$(e(D),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):R("",!0),u[3]||(u[3]=n(" Save "))]),_:1},8,["disabled"])])],32))}}),vt={key:0,class:"flex items-center justify-center h-full"},Ct=I({__name:"GRPCConfigTab",setup(f){const{data:s,isPending:r}=at();return(_,p)=>(i(),h(H,null,[e(r)?(i(),h("div",vt,[t(e(D),{class:"w-4 h-4 animate-spin"})])):R("",!0),e(s)?(i(),$(yt,{key:1,"initial-values":e(s)},null,8,["initial-values"])):R("",!0)],64))}}),wt={listAvailableSerialPorts:f=>B.get("/peripherals/serials",f)};function St(f){return K({queryKey:["serial-ports"],queryFn:()=>wt.listAvailableSerialPorts(f),select:s=>s.items})}const Pt={class:"grid grid-cols-1 gap-8"},xt={class:"space-y-6"},Vt={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},kt={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"},Et={class:"space-y-6"},ht={class:"grid grid-cols-1 gap-4 md:grid-cols-2"},$t={class:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"},Ft=I({__name:"HardwareConfigForm",props:{initialValues:{}},setup(f){const s=f,r=[9600,19200,38400,57600,115200],_=d.object({port:d.string().min(1,"Port is required"),baudRate:d.number().int().positive("Baud rate must be positive"),parity:d.enum(["NONE","EVEN","ODD"]).default("NONE"),dataBits:d.union([d.literal(5),d.literal(6),d.literal(7),d.literal(8)]).default(8),stopBits:d.union([d.literal(1),d.literal(1.5),d.literal(2)]).default(1),readTimeout:d.number().int().nonnegative("Read timeout must be non-negative")}),p=d.object({esp:d.object({serial:_}),pic:d.object({serial:_})}).superRefine((F,a)=>{F.esp.serial.port===F.pic.serial.port&&(a.addIssue({code:d.ZodIssueCode.custom,message:"ESP and PIC cannot use the same port",path:["esp.serial.port"]}),a.addIssue({code:d.ZodIssueCode.custom,message:"ESP and PIC cannot use the same port",path:["pic.serial.port"]}))}),o=Z(),{mutate:m,isPending:c}=et(),{data:b,refetch:u}=St({doNotShowLoading:!0}),y=ee({validationSchema:te(p),initialValues:s.initialValues}).handleSubmit(F=>{m(F,{onSuccess:()=>{o.setQueryData([ge],F),A.success("Hardware configuration updated successfully!")},onError:()=>{A.error("Failed to update hardware configuration")}})});function C(F){F&&u()}return(F,a)=>(i(),h("form",{class:"flex flex-col w-full space-y-6",onSubmit:a[0]||(a[0]=(...k)=>e(y)&&e(y)(...k))},[v("div",Pt,[v("div",xt,[a[17]||(a[17]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," ESP Serial Configuration ",-1)),v("div",Vt,[t(e(S),{name:"esp.serial.port"},{default:l(({componentField:k,value:T})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[1]||(a[1]=[n("Port")])),_:1}),t(e(N),q(k,{required:"","onUpdate:open":C}),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:T},null,8,["placeholder"])]),_:2},1032,["disabled"])]),_:2},1024),e(b)?(i(),$(e(L),{key:0},{default:l(()=>[(i(!0),h(H,null,le(e(b),Y=>(i(),$(e(w),{key:Y.port,value:Y.port},{default:l(()=>[n(ae(Y.port),1)]),_:2},1032,["value"]))),128))]),_:1})):R("",!0)]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"esp.serial.readTimeout"},{default:l(({field:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[2]||(a[2]=[n("Read Timeout (s)")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),{modelValue:k.value,"onUpdate:modelValue":T=>k.value=T,type:"number",disabled:e(c),placeholder:"e.g. 1"},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1})]),v("div",kt,[t(e(S),{name:"esp.serial.baudRate"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[3]||(a[3]=[n("Baud Rate")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select baud rate"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[(i(),h(H,null,le(r,T=>t(e(w),{key:T,value:T},{default:l(()=>[n(ae(T),1)]),_:2},1032,["value"])),64))]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"esp.serial.parity"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[4]||(a[4]=[n("Parity")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select parity"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:"NONE"},{default:l(()=>a[5]||(a[5]=[n(" None ")])),_:1}),t(e(w),{value:"EVEN"},{default:l(()=>a[6]||(a[6]=[n(" Even ")])),_:1}),t(e(w),{value:"ODD"},{default:l(()=>a[7]||(a[7]=[n(" Odd ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"esp.serial.dataBits"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[8]||(a[8]=[n("Data Bits")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select data bits"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:5},{default:l(()=>a[9]||(a[9]=[n(" 5 ")])),_:1}),t(e(w),{value:6},{default:l(()=>a[10]||(a[10]=[n(" 6 ")])),_:1}),t(e(w),{value:7},{default:l(()=>a[11]||(a[11]=[n(" 7 ")])),_:1}),t(e(w),{value:8},{default:l(()=>a[12]||(a[12]=[n(" 8 ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"esp.serial.stopBits"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[13]||(a[13]=[n("Stop Bits")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select stop bits"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:1},{default:l(()=>a[14]||(a[14]=[n(" 1 ")])),_:1}),t(e(w),{value:1.5},{default:l(()=>a[15]||(a[15]=[n(" 1.5 ")])),_:1}),t(e(w),{value:2},{default:l(()=>a[16]||(a[16]=[n(" 2 ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1})])]),v("div",Et,[a[34]||(a[34]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," PIC Serial Configuration ",-1)),v("div",ht,[t(e(S),{name:"pic.serial.port"},{default:l(({componentField:k,value:T})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[18]||(a[18]=[n("Port")])),_:1}),t(e(N),q(k,{required:"","onUpdate:open":C}),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:T},null,8,["placeholder"])]),_:2},1032,["disabled"])]),_:2},1024),t(e(L),null,{default:l(()=>[(i(!0),h(H,null,le(e(b),Y=>(i(),$(e(w),{key:Y.port,value:Y.port},{default:l(()=>[n(ae(Y.port),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"pic.serial.readTimeout"},{default:l(({field:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[19]||(a[19]=[n("Read Timeout (s)")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),{modelValue:k.value,"onUpdate:modelValue":T=>k.value=T,type:"number",disabled:e(c),placeholder:"e.g. 1"},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1})]),v("div",$t,[t(e(S),{name:"pic.serial.baudRate"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[20]||(a[20]=[n("Baud Rate")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select baud rate"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[(i(),h(H,null,le(r,T=>t(e(w),{key:T,value:T},{default:l(()=>[n(ae(T),1)]),_:2},1032,["value"])),64))]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"pic.serial.parity"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[21]||(a[21]=[n("Parity")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select parity"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:"NONE"},{default:l(()=>a[22]||(a[22]=[n(" None ")])),_:1}),t(e(w),{value:"EVEN"},{default:l(()=>a[23]||(a[23]=[n(" Even ")])),_:1}),t(e(w),{value:"ODD"},{default:l(()=>a[24]||(a[24]=[n(" Odd ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"pic.serial.dataBits"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[25]||(a[25]=[n("Data Bits")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select data bits"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:5},{default:l(()=>a[26]||(a[26]=[n(" 5 ")])),_:1}),t(e(w),{value:6},{default:l(()=>a[27]||(a[27]=[n(" 6 ")])),_:1}),t(e(w),{value:7},{default:l(()=>a[28]||(a[28]=[n(" 7 ")])),_:1}),t(e(w),{value:8},{default:l(()=>a[29]||(a[29]=[n(" 8 ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"pic.serial.stopBits"},{default:l(({componentField:k})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>a[30]||(a[30]=[n("Stop Bits")])),_:1}),t(e(N),G(M(k)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(c)},{default:l(()=>[t(e(O),{placeholder:"Select stop bits"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:1},{default:l(()=>a[31]||(a[31]=[n(" 1 ")])),_:1}),t(e(w),{value:1.5},{default:l(()=>a[32]||(a[32]=[n(" 1.5 ")])),_:1}),t(e(w),{value:2},{default:l(()=>a[33]||(a[33]=[n(" 2 ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1})])])]),v("div",null,[t(e(W),{type:"submit",disabled:e(c)},{default:l(()=>[e(c)?(i(),$(e(D),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):R("",!0),a[35]||(a[35]=n(" Save "))]),_:1},8,["disabled"])])],32))}}),Rt={key:0,class:"flex items-center justify-center h-full"},It=I({__name:"HardwareConfigTab",setup(f){const{data:s,isPending:r}=Xe();return(_,p)=>(i(),h(H,null,[e(r)?(i(),h("div",Rt,[t(e(D),{class:"w-4 h-4 animate-spin"})])):R("",!0),e(s)?(i(),$(Ft,{key:1,"initial-values":e(s)},null,8,["initial-values"])):R("",!0)],64))}}),qt={class:"space-y-0.5"},Tt=I({__name:"HTTPConfigForm",props:{initialValues:{}},setup(f){const s=f,r=d.object({port:d.number().int().min(1024,"Port must be at least 1024").max(65535,"Port must be at most 65535"),swagger:d.boolean().default(!1)}),_=Z(),{mutate:p,isPending:o}=ut(),c=ee({validationSchema:te(r),initialValues:s.initialValues}).handleSubmit(b=>{p(b,{onSuccess:()=>{_.setQueryData([ye],b),A.success("HTTP configuration updated successfully!")},onError:()=>{A.error("Failed to update HTTP configuration")}})});return(b,u)=>(i(),h("form",{class:"flex flex-col w-full max-w-lg space-y-6",onSubmit:u[0]||(u[0]=(...g)=>e(c)&&e(c)(...g))},[u[4]||(u[4]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," HTTP Configuration ",-1)),t(e(S),{name:"port"},{default:l(({field:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[1]||(u[1]=[n("Port")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),{modelValue:g.value,"onUpdate:modelValue":y=>g.value=y,type:"number",placeholder:"Enter port number",disabled:e(o),class:"[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"swagger"},{default:l(({value:g,handleChange:y})=>[t(e(P),{class:"flex flex-row items-center justify-between p-4 border rounded-lg"},{default:l(()=>[v("div",qt,[t(e(x),null,{default:l(()=>u[2]||(u[2]=[n("Enable Swagger")])),_:1})]),t(e(V),null,{default:l(()=>[t(e(se),{"model-value":g,disabled:e(o),"aria-readonly":"","onUpdate:modelValue":y},null,8,["model-value","disabled","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:1}),v("div",null,[t(e(W),{type:"submit",disabled:e(o)},{default:l(()=>[e(o)?(i(),$(e(D),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):R("",!0),u[3]||(u[3]=n(" Save "))]),_:1},8,["disabled"])])],32))}}),Bt={key:0,class:"flex items-center justify-center h-full"},At=I({__name:"HTTPConfigTab",setup(f){const{data:s,isPending:r}=st();return(_,p)=>(i(),h(H,null,[e(r)?(i(),h("div",Bt,[t(e(D),{class:"w-4 h-4 animate-spin"})])):R("",!0),e(s)?(i(),$(Tt,{key:1,"initial-values":e(s)},null,8,["initial-values"])):R("",!0)],64))}}),Dt={class:"space-y-0.5"},jt=I({__name:"LogConfigForm",props:{initialValues:{}},setup(f){const s=f,r=d.object({level:d.union([d.literal("DEBUG"),d.literal("INFO"),d.literal("WARN"),d.literal("ERROR")]),format:d.union([d.literal("JSON"),d.literal("TEXT")]),addSource:d.boolean()}),_=Z(),{mutate:p,isPending:o}=Ze(),c=ee({validationSchema:te(r),initialValues:s.initialValues}).handleSubmit(b=>{p(b,{onSuccess:()=>{_.setQueryData([ce],b),A.success("Log configuration updated successfully!")},onError:()=>{A.error("Failed to update log configuration")}})});return(b,u)=>(i(),h("form",{class:"flex flex-col w-full max-w-lg space-y-6",onSubmit:u[0]||(u[0]=(...g)=>e(c)&&e(c)(...g))},[u[11]||(u[11]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," Log Configuration ",-1)),t(e(S),{name:"level"},{default:l(({componentField:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[1]||(u[1]=[n("Log Level")])),_:1}),t(e(N),G(M(g)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(o)},{default:l(()=>[t(e(O),{placeholder:"Select log level"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:"DEBUG"},{default:l(()=>u[2]||(u[2]=[n(" Debug ")])),_:1}),t(e(w),{value:"INFO"},{default:l(()=>u[3]||(u[3]=[n(" Info ")])),_:1}),t(e(w),{value:"WARN"},{default:l(()=>u[4]||(u[4]=[n(" Warning ")])),_:1}),t(e(w),{value:"ERROR"},{default:l(()=>u[5]||(u[5]=[n(" Error ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"format"},{default:l(({componentField:g})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>u[6]||(u[6]=[n("Log Format")])),_:1}),t(e(N),G(M(g)),{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(U),{disabled:e(o)},{default:l(()=>[t(e(O),{placeholder:"Select log format"})]),_:1},8,["disabled"])]),_:1}),t(e(L),null,{default:l(()=>[t(e(w),{value:"JSON"},{default:l(()=>u[7]||(u[7]=[n(" JSON ")])),_:1}),t(e(w),{value:"TEXT"},{default:l(()=>u[8]||(u[8]=[n(" Text ")])),_:1})]),_:1})]),_:2},1040),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{type:"checkbox",name:"addSource"},{default:l(({value:g,handleChange:y})=>[t(e(P),{class:"flex flex-row items-center justify-between p-4 border rounded-lg"},{default:l(()=>[v("div",Dt,[t(e(x),null,{default:l(()=>u[9]||(u[9]=[n("Add Source")])),_:1})]),t(e(V),null,{default:l(()=>[t(e(se),{"model-value":g,disabled:e(o),"aria-readonly":"","onUpdate:modelValue":y},null,8,["model-value","disabled","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:1}),v("div",null,[t(e(W),{type:"submit",disabled:e(o)},{default:l(()=>[e(o)?(i(),$(e(D),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):R("",!0),u[10]||(u[10]=n(" Save "))]),_:1},8,["disabled"])])],32))}}),Nt={key:0,class:"flex items-center justify-center h-full"},Ut=I({__name:"LogConfigTab",setup(f){const{data:s,isPending:r}=Je();return(_,p)=>(i(),h(H,null,[e(r)?(i(),h("div",Nt,[t(e(D),{class:"w-4 h-4 animate-spin"})])):R("",!0),e(s)?(i(),$(jt,{key:1,"initial-values":e(s)},null,8,["initial-values"])):R("",!0)],64))}}),Ot={class:"space-y-0.5"},Lt={class:"space-y-0.5"},Ht=I({__name:"WifiConfigForm",props:{initialValues:{}},setup(f){const s=f,r=/^[\w\s\-.]*$/,_=/^[\x21-\x7E]*$/,p=/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d{1,2})$/,o=d.object({ap:d.object({enable:d.boolean(),ssid:d.string().min(1,"SSID is required").max(32,"SSID must be at most 32 characters").regex(r,"SSID can only contain alphanumeric characters, spaces, hyphens, underscores, and dots"),password:d.string().min(8,"Password must be at least 8 characters").max(63,"Password must be at most 63 characters").regex(_,"Password can only contain printable characters"),ip:d.string().min(1,"IP address is required").regex(p,"Invalid IPv4 address format")}),sta:d.object({enable:d.boolean(),ssid:d.string().min(1,"SSID is required").max(32,"SSID must be at most 32 characters").regex(r,"SSID can only contain alphanumeric characters, spaces, hyphens, underscores, and dots"),password:d.string().min(8,"Password must be at least 8 characters").max(63,"Password must be at most 63 characters").regex(_,"Password can only contain printable characters")})}).superRefine((y,C)=>{(y.ap.enable&&y.sta.enable||!y.ap.enable&&!y.sta.enable)&&(C.addIssue({code:d.ZodIssueCode.custom,message:"AP and STA cannot be enabled or disabled at the same time",path:["ap.enable"]}),C.addIssue({code:d.ZodIssueCode.custom,message:"AP and STA cannot be enabled or disabled at the same time",path:["sta.enable"]}))}),m=Z(),{mutate:c,isPending:b}=rt(),g=ee({validationSchema:te(o),initialValues:s.initialValues}).handleSubmit(y=>{c(y,{onSuccess:()=>{m.setQueryData([Ce],y),A.success("WiFi configuration updated successfully!")},onError:()=>{A.error("Failed to update WiFi configuration")}})});return(y,C)=>(i(),h("form",{class:"flex flex-col w-full max-w-lg space-y-6",onSubmit:C[0]||(C[0]=(...F)=>e(g)&&e(g)(...F))},[C[9]||(C[9]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," AP Configuration ",-1)),t(e(S),{type:"checkbox",name:"ap.enable"},{default:l(({value:F,handleChange:a})=>[t(e(P),{class:"flex flex-row items-center justify-between p-4 border rounded-lg"},{default:l(()=>[v("div",Ot,[t(e(x),null,{default:l(()=>C[1]||(C[1]=[n("Enable AP")])),_:1})]),t(e(V),null,{default:l(()=>[t(e(se),{"model-value":F,disabled:e(b),"onUpdate:modelValue":a},null,8,["model-value","disabled","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),t(e(E))]),_:1}),t(e(S),{name:"ap.ssid"},{default:l(({componentField:F})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>C[2]||(C[2]=[n("SSID")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),q(F,{placeholder:"Enter SSID",disabled:e(b)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"ap.password"},{default:l(({componentField:F})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>C[3]||(C[3]=[n("Password")])),_:1}),t(e(V),null,{default:l(()=>[t(e(oe),q(F,{placeholder:"Enter password",disabled:e(b)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"ap.ip"},{default:l(({componentField:F})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>C[4]||(C[4]=[n("IP Address")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),q(F,{placeholder:"Enter IP address",disabled:e(b)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),C[10]||(C[10]=v("h3",{class:"pb-2 text-lg font-medium border-b"}," STA Configuration ",-1)),t(e(S),{type:"checkbox",name:"sta.enable"},{default:l(({value:F,handleChange:a})=>[t(e(P),{class:"flex flex-row items-center justify-between p-4 border rounded-lg"},{default:l(()=>[v("div",Lt,[t(e(x),null,{default:l(()=>C[5]||(C[5]=[n("Enable STA")])),_:1})]),t(e(V),null,{default:l(()=>[t(e(se),{"model-value":F,disabled:e(b),"onUpdate:modelValue":a},null,8,["model-value","disabled","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),t(e(E))]),_:1}),t(e(S),{name:"sta.ssid"},{default:l(({componentField:F})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>C[6]||(C[6]=[n("SSID")])),_:1}),t(e(V),null,{default:l(()=>[t(e(Q),q(F,{placeholder:"Enter SSID",disabled:e(b)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),t(e(S),{name:"sta.password"},{default:l(({componentField:F})=>[t(e(P),null,{default:l(()=>[t(e(x),null,{default:l(()=>C[7]||(C[7]=[n("Password")])),_:1}),t(e(V),null,{default:l(()=>[t(e(oe),q(F,{placeholder:"Enter password",disabled:e(b)}),null,16,["disabled"])]),_:2},1024),t(e(E))]),_:2},1024)]),_:1}),v("div",null,[t(e(W),{type:"submit",disabled:e(b)},{default:l(()=>[e(b)?(i(),$(e(D),{key:0,class:"w-4 h-4 mr-2 animate-spin"})):R("",!0),C[8]||(C[8]=n(" Save "))]),_:1},8,["disabled"])])],32))}}),Qt={key:0,class:"flex items-center justify-center h-full"},Gt=I({__name:"WifiConfigTab",setup(f){const{data:s,isPending:r}=dt();return(_,p)=>(i(),h(H,null,[e(r)?(i(),h("div",Qt,[t(e(D),{class:"w-4 h-4 animate-spin"})])):R("",!0),e(s)?(i(),$(Ht,{key:1,"initial-values":e(s)},null,8,["initial-values"])):R("",!0)],64))}}),Mt={class:"text-sm text-muted-foreground"},nl=I({__name:"SettingsView",setup(f){const s=Re(),r=qe(),_=s.query.tab??"log";function p(o){r.replace({query:{tab:o}})}return(o,m)=>{const c=Ie("RouterLink");return i(),$(we,null,{default:l(()=>[v("div",null,[m[2]||(m[2]=v("h1",{class:"text-xl font-semibold tracking-tight"}," Settings ",-1)),v("p",Mt,[m[1]||(m[1]=n(" Configure your robot's settings ")),t(c,{to:"/restart",class:"text-blue-500"},{default:l(()=>m[0]||(m[0]=[n(" (Restart to apply changes) ")])),_:1})])]),t(e(Ue),{"default-value":e(_),"onUpdate:modelValue":p},{default:l(()=>[t(e(Ne),null,{default:l(()=>[t(e(z),{value:"log"},{default:l(()=>m[3]||(m[3]=[n(" Log ")])),_:1}),t(e(z),{value:"hardware"},{default:l(()=>m[4]||(m[4]=[n(" Hardware ")])),_:1}),t(e(z),{value:"cloud"},{default:l(()=>m[5]||(m[5]=[n(" Cloud ")])),_:1}),t(e(z),{value:"grpc"},{default:l(()=>m[6]||(m[6]=[n(" GRPC ")])),_:1}),t(e(z),{value:"http"},{default:l(()=>m[7]||(m[7]=[n(" HTTP ")])),_:1}),t(e(z),{value:"cargo"},{default:l(()=>m[8]||(m[8]=[n(" Cargo ")])),_:1}),t(e(z),{value:"wifi"},{default:l(()=>m[9]||(m[9]=[n(" WiFi ")])),_:1})]),_:1}),t(e(J),{value:"log"},{default:l(()=>[t(Ut)]),_:1}),t(e(J),{value:"hardware"},{default:l(()=>[t(It)]),_:1}),t(e(J),{value:"cloud"},{default:l(()=>[t(bt)]),_:1}),t(e(J),{value:"grpc"},{default:l(()=>[t(Ct)]),_:1}),t(e(J),{value:"http"},{default:l(()=>[t(At)]),_:1}),t(e(J),{value:"cargo"},{default:l(()=>[t(mt)]),_:1}),t(e(J),{value:"wifi"},{default:l(()=>[t(Gt)]),_:1})]),_:1},8,["default-value"])]),_:1})}}});export{nl as default};
