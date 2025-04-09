import{_ as x,a as b,T as ot}from"./CardContent.vuevuetypescriptsetuptruelang-Dd2-Q0sp.js";import{P as I,c as $,a as j}from"./createLucideIcon-DWP4JGYy.js";import{d as v,u as O,q as T,p as N,c as _,e as c,w as a,a as P,b as e,O as nt,m as z,D as g,G as m,f as n,E as H,y as u,F as t,z as l,H as Q,J as Z,g as S,P as at,Q as lt,r as rt,N as it}from"./index-CbVa2xud.js";import{u as G,c as dt}from"./PopperContent-C0qQN3NX.js";import{i as X,u as ut,_ as ct,a as pt,b as B,c as ft,d as mt}from"./SelectValue.vuevuetypescriptsetuptruelang-kV1XYRcF.js";import{f as Y,_ as w,a as M,A as _t,C as F,b as xt}from"./SelectGroup.vuevuetypescriptsetuptruelang-Ljew3A6X.js";import{_ as gt,a as R,b as A,c as vt}from"./TabsTrigger.vuevuetypescriptsetuptruelang-CWyv4Kqf.js";import{_ as bt}from"./Separator.vuevuetypescriptsetuptruelang-CAYN1Iaf.js";import{i as yt,_ as Ct,L as ht}from"./http-XhGcrbxx.js";const L=100,[$t,wt]=dt("ProgressRoot"),E=r=>typeof r=="number";function Mt(r,o){return X(r)||E(r)&&!Number.isNaN(r)&&r<=o&&r>=0?r:(console.error(`Invalid prop \`value\` of value \`${r}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${L} if no \`max\` prop is set)
  - \`null\`  or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`),null)}function St(r){return E(r)&&!Number.isNaN(r)&&r>0?r:(console.error(`Invalid prop \`max\` of value \`${r}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${L}\`.`),L)}const kt=v({__name:"ProgressRoot",props:{modelValue:{},max:{default:L},getValueLabel:{type:Function,default:(r,o)=>`${Math.round(r/o*L)}%`},asChild:{type:Boolean},as:{}},emits:["update:modelValue","update:max"],setup(r,{emit:o}){const i=r,s=o;G();const d=O(i,"modelValue",s,{passive:i.modelValue===void 0}),f=O(i,"max",s,{passive:i.max===void 0});T(()=>d.value,async p=>{const h=Mt(p,i.max);h!==p&&(await nt(),d.value=h)},{immediate:!0}),T(()=>i.max,p=>{const h=St(i.max);h!==p&&(f.value=h)},{immediate:!0});const k=N(()=>X(d.value)?"indeterminate":d.value===f.value?"complete":"loading");return wt({modelValue:d,max:f,progressState:k}),(p,h)=>(c(),_(e(I),{"as-child":p.asChild,as:p.as,"aria-valuemax":e(f),"aria-valuemin":0,"aria-valuenow":E(e(d))?e(d):void 0,"aria-valuetext":p.getValueLabel(e(d),e(f)),"aria-label":p.getValueLabel(e(d),e(f)),role:"progressbar","data-state":k.value,"data-value":e(d)??void 0,"data-max":e(f)},{default:a(()=>[P(p.$slots,"default",{modelValue:e(d)})]),_:3},8,["as-child","as","aria-valuemax","aria-valuenow","aria-valuetext","aria-label","data-state","data-value","data-max"]))}}),Dt=v({__name:"ProgressIndicator",props:{asChild:{type:Boolean},as:{}},setup(r){const o=r,i=$t();return G(),(s,d)=>{var f;return c(),_(e(I),z(o,{"data-state":e(i).progressState.value,"data-value":((f=e(i).modelValue)==null?void 0:f.value)??void 0,"data-max":e(i).max.value}),{default:a(()=>[P(s.$slots,"default")]),_:3},16,["data-state","data-value","data-max"])}}});/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=$("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=$("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=$("battery-full",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=$("cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=$("cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=$("gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=$("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=$("lock-open",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=$("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=$("package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=$("thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=$("usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=$("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),V=v({__name:"CardDescription",props:{class:{}},setup(r){const o=r;return(i,s)=>(c(),g("p",{class:m(e(j)("text-sm text-muted-foreground",o.class))},[P(i.$slots,"default")],2))}}),y=v({__name:"CardHeader",props:{class:{}},setup(r){const o=r;return(i,s)=>(c(),g("div",{class:m(e(j)("flex flex-col gap-y-1.5 p-6",o.class))},[P(i.$slots,"default")],2))}}),C=v({__name:"CardTitle",props:{class:{}},setup(r){const o=r;return(i,s)=>(c(),g("h3",{class:m(e(j)("font-semibold leading-none tracking-tight",o.class))},[P(i.$slots,"default")],2))}}),D=v({__name:"Progress",props:{modelValue:{default:0},max:{},getValueLabel:{},asChild:{type:Boolean},as:{},class:{}},setup(r){const o=r,i=N(()=>{const{class:s,...d}=o;return d});return(s,d)=>(c(),_(e(kt),z(i.value,{class:e(j)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",o.class)}),{default:a(()=>[n(e(Dt),{class:"h-full w-full flex-1 bg-primary transition-all",style:H(`transform: translateX(-${100-(o.modelValue??0)}%);`)},null,8,["style"])]),_:1},16,["class"]))}}),Nt={class:"mt-2 text-xs text-muted-foreground"},jt=v({__name:"BatteryCard",props:{battery:{}},setup(r){const o=r;function i(d){return d<20?"text-destructive":d<40?"text-warning":d<60?"text-yellow-500":"text-success"}function s(d){return d<20?"destructive":d<40?"warning":d<60?"default":"success"}return(d,f)=>(c(),_(e(x),null,{default:a(()=>[n(e(y),{class:"pb-2"},{default:a(()=>[n(e(C),{class:"flex items-center gap-2 text-sm font-medium"},{default:a(()=>[n(e(W),{class:"w-8 h-8"}),f[0]||(f[0]=u(" Battery "))]),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",{class:m(["text-2xl font-bold",i(o.battery.percent)])},l(o.battery.percent)+"% ",3),n(e(D),{value:o.battery.percent,variant:s(o.battery.percent),class:"mt-2"},null,8,["value","variant"]),t("p",Nt," Health: "+l(o.battery.health)+"% ",1)]),_:1})]),_:1}))}}),Et={class:"space-y-4"},Ot={class:"flex items-center gap-4"},Tt={class:"flex-1"},Bt={class:"text-xs text-muted-foreground"},Ft=v({__name:"ConnectionsCard",props:{appConnection:{}},setup(r){const o=r,i=N(()=>{let d=0;return o.appConnection.espSerialConnection.connected&&d++,o.appConnection.picSerialConnection.connected&&d++,o.appConnection.rfidUsbConnection.connected&&d++,d}),s=N(()=>3);return(d,f)=>(c(),_(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),null,{default:a(()=>f[0]||(f[0]=[u("Connections")])),_:1}),n(e(V),null,{default:a(()=>[u(l(e(i))+" of "+l(e(s))+" peripherals connected ",1)]),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",Et,[t("div",Ot,[t("div",{class:m(["p-2 rounded-full",o.appConnection.cloudConnection.connected?"bg-success/10":"bg-destructive/10"])},[n(e(tt),{class:m(["w-4 h-4",o.appConnection.cloudConnection.connected?"text-success":"text-destructive"])},null,8,["class"])],2),t("div",Tt,[f[1]||(f[1]=t("p",{class:"text-sm font-medium"}," Cloud connection ",-1)),t("p",Bt," Uptime: "+l(e(Y)(o.appConnection.cloudConnection.uptime)),1)]),n(e(w),{variant:o.appConnection.cloudConnection.connected?"default":"destructive"},{default:a(()=>[u(l(o.appConnection.cloudConnection.connected?"Online":"Offline"),1)]),_:1},8,["variant"])])])]),_:1})]),_:1}))}}),Ut={class:"text-lg font-medium"},qt={class:"mt-2 text-xs text-muted-foreground"},It=v({__name:"LocationCard",props:{location:{}},setup(r){const o=r;return(i,s)=>(c(),_(e(x),null,{default:a(()=>[n(e(y),{class:"pb-2"},{default:a(()=>[n(e(C),{class:"flex items-center gap-2 text-sm font-medium"},{default:a(()=>[n(e(Rt),{class:"w-6 h-6"}),s[0]||(s[0]=u(" Location "))]),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",Ut,l(o.location.currentLocation===""?"N/A":o.location.currentLocation),1),t("p",qt," Updated: "+l(e(M)(o.location.updatedAt)),1)]),_:1})]),_:1}))}}),zt={class:"space-y-2"},Ht={class:"flex items-center justify-between"},Qt={class:"flex items-center justify-between"},Zt={class:"flex items-center justify-between"},Gt=v({__name:"MotorsCard",props:{liftMotor:{},driveMotor:{},cargoDoorMotor:{}},setup(r){const o=r;function i(s){return{variant:s?"default":"secondary",label:s?"Active":"Idle"}}return(s,d)=>(c(),_(e(x),null,{default:a(()=>[n(e(y),{class:"pb-2"},{default:a(()=>[n(e(C),{class:"flex items-center gap-2 text-sm font-medium"},{default:a(()=>[n(e(Vt),{class:"w-6 h-6"}),d[0]||(d[0]=u(" Motors "))]),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",zt,[t("div",Ht,[d[1]||(d[1]=t("span",{class:"text-sm"},"Lift motor",-1)),n(e(w),{variant:i(o.liftMotor.isRunning).variant},{default:a(()=>[u(l(i(o.liftMotor.isRunning).label),1)]),_:1},8,["variant"])]),t("div",Qt,[d[2]||(d[2]=t("span",{class:"text-sm"},"Drive motor",-1)),n(e(w),{variant:i(o.driveMotor.isRunning).variant},{default:a(()=>[u(l(i(o.driveMotor.isRunning).label),1)]),_:1},8,["variant"])]),t("div",Zt,[d[3]||(d[3]=t("span",{class:"text-sm"},"Cargo door motor",-1)),n(e(w),{variant:i(o.cargoDoorMotor.isRunning).variant},{default:a(()=>[u(l(i(o.cargoDoorMotor.isRunning).label),1)]),_:1},8,["variant"])])])]),_:1})]),_:1}))}}),Xt={class:"grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 lg:grid-cols-4"},Yt=v({__name:"StateOverview",props:{robotState:{}},setup(r){const o=r;return(i,s)=>(c(),g("div",Xt,[n(jt,{battery:o.robotState.battery},null,8,["battery"]),n(Gt,{"lift-motor":o.robotState.liftMotor,"drive-motor":o.robotState.driveMotor,"cargo-door-motor":o.robotState.cargoDoorMotor},null,8,["lift-motor","drive-motor","cargo-door-motor"]),n(It,{location:o.robotState.location},null,8,["location"]),n(Ft,{"app-connection":o.robotState.appConnection},null,8,["app-connection"])]))}}),Jt={class:"space-y-4"},Kt={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},Wt={class:"space-y-4"},te={class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},ee={class:"flex items-center gap-2"},se={class:"text-xl font-bold"},oe={class:"flex items-center gap-2"},ne={class:"text-xl font-bold"},ae={class:"flex items-center gap-2"},le={class:"text-xl font-bold"},re={class:"flex items-center gap-2"},ie={class:"text-xl font-bold"},de={class:"grid grid-cols-2 gap-4"},ue={class:"text-xs text-muted-foreground"},ce={class:"text-lg font-medium"},pe={class:"space-y-4"},fe={class:"flex justify-between mb-4"},me={class:"flex justify-between mb-4"},_e={class:"text-sm"},xe={class:"flex justify-between"},ge={class:"text-sm"},ve={class:"flex justify-between mb-4"},be={class:"flex justify-between"},ye={class:"text-sm"},Ce={class:"flex items-center gap-2"},he={key:0,class:"mt-2 text-sm text-destructive"},$e=v({__name:"BatteryTabContent",props:{battery:{},charge:{},discharge:{}},setup(r){const o=r;return(i,s)=>(c(),g("div",Jt,[n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),null,{default:a(()=>s[0]||(s[0]=[u("Battery Details")])),_:1}),n(e(V),null,{default:a(()=>s[1]||(s[1]=[u("Current battery status and power management")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",Kt,[t("div",Wt,[t("div",null,[s[6]||(s[6]=t("h3",{class:"mb-2 font-medium"}," Battery Status ",-1)),t("div",te,[t("div",ee,[n(e(W),{class:"w-5 h-5 text-muted-foreground"}),t("div",null,[s[2]||(s[2]=t("p",{class:"text-sm font-medium"}," Charge ",-1)),t("p",se,l(i.battery.percent)+"% ",1)])]),t("div",oe,[n(e(Lt),{class:"w-5 h-5 text-muted-foreground"}),t("div",null,[s[3]||(s[3]=t("p",{class:"text-sm font-medium"}," Temperature ",-1)),t("p",ne,l(i.battery.temp)+"°C ",1)])]),t("div",ae,[n(e(q),{class:"w-5 h-5 text-muted-foreground"}),t("div",null,[s[4]||(s[4]=t("p",{class:"text-sm font-medium"}," Voltage ",-1)),t("p",le,l(i.battery.voltage)+" V ",1)])]),t("div",re,[n(e(q),{class:"w-5 h-5 text-muted-foreground"}),t("div",null,[s[5]||(s[5]=t("p",{class:"text-sm font-medium"}," Current ",-1)),t("p",ie,l(i.battery.current)+" mA ",1)])])])]),t("div",null,[s[7]||(s[7]=t("h3",{class:"mb-2 font-medium"}," Cell Voltages ",-1)),t("div",de,[(c(!0),g(Q,null,Z(i.battery.cellVoltages,(d,f)=>(c(),_(e(x),{key:f},{default:a(()=>[n(e(b),{class:"p-2"},{default:a(()=>[t("p",ue," Cell "+l(f+1),1),t("p",ce,l(d)+" V ",1)]),_:2},1024)]),_:2},1024))),128))])])]),t("div",pe,[n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),{class:"text-base"},{default:a(()=>s[8]||(s[8]=[u(" Charging Status ")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",fe,[s[9]||(s[9]=t("span",{class:"text-sm font-medium"},"Status",-1)),n(e(w),{variant:i.charge.enabled?"default":"secondary"},{default:a(()=>[u(l(i.charge.enabled?"Charging":"Not Charging"),1)]),_:1},8,["variant"])]),t("div",me,[s[10]||(s[10]=t("span",{class:"text-sm font-medium"},"Health",-1)),t("span",_e,l(i.battery.health)+"%",1)]),t("div",xe,[s[11]||(s[11]=t("span",{class:"text-sm font-medium"},"Limit",-1)),t("span",ge,l(i.charge.currentLimit)+" mA",1)])]),_:1})]),_:1}),n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),{class:"text-base"},{default:a(()=>s[12]||(s[12]=[u(" Discharge Status ")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",ve,[s[13]||(s[13]=t("span",{class:"text-sm font-medium"},"Status",-1)),n(e(w),{variant:i.discharge.enabled?"default":"secondary"},{default:a(()=>[u(l(i.discharge.enabled?"Discharging":"Not Discharging"),1)]),_:1},8,["variant"])]),t("div",be,[s[14]||(s[14]=t("span",{class:"text-sm font-medium"},"Limit",-1)),t("span",ye,l(o.discharge.currentLimit)+" mA",1)])]),_:1})]),_:1}),n(e(x),{class:m(i.battery.fault>0?"border-destructive":"border-success")},{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),{class:"text-base"},{default:a(()=>s[15]||(s[15]=[u(" Fault Status ")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",Ce,[n(e(ot),{class:"w-5 h-5 text-destructive"}),t("span",{class:m(["text-sm font-medium",o.battery.fault>0?"text-destructive":"text-success"])},l(o.battery.fault>0?"Fault Detected":"No Faults"),3)]),o.battery.fault>0?(c(),g("p",he," Fault code: "+l(o.battery.fault),1)):S("",!0)]),_:1})]),_:1},8,["class"])])])]),_:1})]),_:1})]))}}),we={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},Me={class:"space-y-4"},Se={class:"flex items-center gap-4"},ke={class:"text-xl font-bold"},De={class:"space-y-2"},Ve={class:"grid grid-cols-2 gap-4"},Re={class:"text-lg font-medium"},Ae={class:"text-lg font-medium"},Le={class:"text-xs text-muted-foreground"},Pe={class:"space-y-4"},Ne={class:"flex items-center gap-4"},je={class:"text-xl font-bold"},Ee={class:"space-y-2"},Oe={class:"grid grid-cols-2 gap-4"},Te={class:"text-lg font-medium"},Be={class:"text-xs text-muted-foreground"},Fe=v({__name:"CargoTabContent",props:{cargo:{},cargoDoorMotor:{}},setup(r){const o=r;return(i,s)=>(c(),_(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),null,{default:a(()=>s[0]||(s[0]=[u("Cargo Status")])),_:1}),n(e(V),null,{default:a(()=>s[1]||(s[1]=[u("Current cargo information")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",we,[t("div",Me,[t("div",Se,[t("div",{class:m(["p-3 rounded-full",o.cargo.isOpen?"bg-green-100":"bg-muted"])},[n(e(At),{class:m(["w-6 h-6",o.cargo.isOpen?"text-green-600":"text-muted-foreground"])},null,8,["class"])],2),t("div",null,[s[2]||(s[2]=t("p",{class:"text-sm text-muted-foreground"}," Cargo Status ",-1)),t("p",ke,l(o.cargo.isOpen?"Open":"Closed"),1)])]),t("div",De,[s[5]||(s[5]=t("h3",{class:"text-sm font-medium"}," Cargo Details ",-1)),t("div",Ve,[t("div",null,[s[3]||(s[3]=t("p",{class:"text-sm text-muted-foreground"}," QR Code ",-1)),t("p",Re,l(o.cargo.qrCode||"No QR Code"),1)]),t("div",null,[s[4]||(s[4]=t("p",{class:"text-sm text-muted-foreground"}," Bottom Distance ",-1)),t("p",Ae,l(o.cargo.bottomDistance)+" cm ",1)])])]),t("div",Le," Last updated: "+l(e(M)(o.cargo.updatedAt)),1)]),t("div",Pe,[t("div",Ne,[t("div",{class:m(["p-3 rounded-full",o.cargoDoorMotor.direction==="OPEN"?"bg-green-100":"bg-yellow-100"])},[o.cargoDoorMotor.direction==="OPEN"?(c(),_(e(st),{key:0,class:"w-6 h-6 text-green-600"})):(c(),_(e(et),{key:1,class:"w-6 h-6 text-yellow-600"}))],2),t("div",null,[s[6]||(s[6]=t("p",{class:"text-sm text-muted-foreground"}," Cargo Door ",-1)),t("p",je,l(o.cargoDoorMotor.direction==="OPEN"?"Open":"Closed"),1)])]),t("div",Ee,[s[9]||(s[9]=t("h3",{class:"text-sm font-medium"}," Motor Status ",-1)),t("div",Oe,[t("div",null,[s[7]||(s[7]=t("p",{class:"text-sm text-muted-foreground"}," Speed ",-1)),t("p",Te,l(o.cargoDoorMotor.speed)+"% ",1)]),t("div",null,[s[8]||(s[8]=t("p",{class:"text-sm text-muted-foreground"}," Status ",-1)),n(e(w),{variant:o.cargoDoorMotor.isRunning?"default":"outline"},{default:a(()=>[u(l(o.cargoDoorMotor.isRunning?"Running":"Idle"),1)]),_:1},8,["variant"])])])]),t("div",Be," Last updated: "+l(e(M)(o.cargoDoorMotor.updatedAt)),1)])])]),_:1})]),_:1}))}}),Ue={class:"space-y-4"},qe={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},Ie={class:"space-y-4"},ze={class:"flex items-center gap-4 mb-4"},He={class:"text-lg font-bold"},Qe={class:"space-y-2"},Ze={class:"flex justify-between text-sm"},Ge={class:"flex justify-between text-sm"},Xe={key:0,class:"mt-2 text-xs text-destructive"},Ye={class:"flex items-center gap-4 mb-4"},Je={class:"text-lg font-bold"},Ke={class:"space-y-2"},We={class:"flex justify-between text-sm"},ts={key:0,class:"mt-2 text-xs text-destructive"},es={class:"space-y-4"},ss={class:"flex items-center gap-4 mb-4"},os={class:"text-lg font-bold"},ns={class:"space-y-2"},as={class:"flex justify-between text-sm"},ls={key:0,class:"mt-2 text-xs text-destructive"},rs={class:"flex items-center gap-4 mb-4"},is={class:"text-lg font-bold"},ds={class:"space-y-2"},us={class:"flex justify-between text-sm"},cs={key:0,class:"mt-2 text-xs text-destructive"},ps=v({__name:"ConnectionsTabContent",props:{appConnection:{}},setup(r){const o=r;return(i,s)=>(c(),g("div",Ue,[n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),null,{default:a(()=>s[0]||(s[0]=[u("Connection Details")])),_:1}),n(e(V),null,{default:a(()=>s[1]||(s[1]=[u("Current connection status and details")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",qe,[t("div",Ie,[n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),{class:"text-base"},{default:a(()=>s[2]||(s[2]=[u(" Cloud Connection ")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",ze,[t("div",{class:m(["p-2 rounded-full",o.appConnection.cloudConnection.connected?"bg-green-100":"bg-destructive/10"])},[n(e(tt),{class:m(["w-5 h-5",o.appConnection.cloudConnection.connected?"text-green-600":"text-destructive"])},null,8,["class"])],2),t("div",null,[s[3]||(s[3]=t("p",{class:"text-sm font-medium"}," Status ",-1)),t("p",He,l(o.appConnection.cloudConnection.connected?"Connected":"Disconnected"),1)])]),t("div",Qe,[t("div",Ze,[s[4]||(s[4]=t("span",{class:"text-muted-foreground"},"Uptime",-1)),t("span",null,l(e(Y)(o.appConnection.cloudConnection.uptime)),1)]),t("div",Ge,[s[5]||(s[5]=t("span",{class:"text-muted-foreground"},"Last Connected",-1)),t("span",null,l(o.appConnection.cloudConnection.lastConnectedAt?e(M)(o.appConnection.cloudConnection.lastConnectedAt):"Never"),1)])]),o.appConnection.cloudConnection.error?(c(),g("div",Xe," Error: "+l(o.appConnection.cloudConnection.error),1)):S("",!0)]),_:1})]),_:1}),n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),{class:"text-base"},{default:a(()=>s[6]||(s[6]=[u(" ESP Serial Connection ")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",Ye,[t("div",{class:m(["p-2 rounded-full",o.appConnection.espSerialConnection.connected?"bg-green-100":"bg-destructive/10"])},[n(e(U),{class:m(["w-5 h-5",o.appConnection.espSerialConnection.connected?"text-green-600":"text-destructive"])},null,8,["class"])],2),t("div",null,[s[7]||(s[7]=t("p",{class:"text-sm font-medium"}," Status ",-1)),t("p",Je,l(o.appConnection.espSerialConnection.connected?"Connected":"Disconnected"),1)])]),t("div",Ke,[t("div",We,[s[8]||(s[8]=t("span",{class:"text-muted-foreground"},"Last Connected",-1)),t("span",null,l(o.appConnection.espSerialConnection.lastConnectedAt?e(M)(o.appConnection.espSerialConnection.lastConnectedAt):"Never"),1)])]),o.appConnection.espSerialConnection.error?(c(),g("div",ts," Error: "+l(o.appConnection.espSerialConnection.error),1)):S("",!0)]),_:1})]),_:1})]),t("div",es,[n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),{class:"text-base"},{default:a(()=>s[9]||(s[9]=[u(" PIC Serial Connection ")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",ss,[t("div",{class:m(["p-2 rounded-full",o.appConnection.picSerialConnection.connected?"bg-green-100":"bg-destructive/10"])},[n(e(U),{class:m(["w-5 h-5",o.appConnection.picSerialConnection.connected?"text-green-600":"text-destructive"])},null,8,["class"])],2),t("div",null,[s[10]||(s[10]=t("p",{class:"text-sm font-medium"}," Status ",-1)),t("p",os,l(o.appConnection.picSerialConnection.connected?"Connected":"Disconnected"),1)])]),t("div",ns,[t("div",as,[s[11]||(s[11]=t("span",{class:"text-muted-foreground"},"Last Connected",-1)),t("span",null,l(o.appConnection.picSerialConnection.lastConnectedAt?e(M)(o.appConnection.picSerialConnection.lastConnectedAt):"Never"),1)])]),o.appConnection.picSerialConnection.error?(c(),g("div",ls," Error: "+l(o.appConnection.picSerialConnection.error),1)):S("",!0)]),_:1})]),_:1}),n(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),{class:"text-base"},{default:a(()=>s[12]||(s[12]=[u(" RFID USB Connection ")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",rs,[t("div",{class:m(["p-2 rounded-full",o.appConnection.rfidUsbConnection.connected?"bg-green-100":"bg-destructive/10"])},[n(e(Pt),{class:m(["w-5 h-5",o.appConnection.rfidUsbConnection.connected?"text-green-600":"text-destructive"])},null,8,["class"])],2),t("div",null,[s[13]||(s[13]=t("p",{class:"text-sm font-medium"}," Status ",-1)),t("p",is,l(o.appConnection.rfidUsbConnection.connected?"Connected":"Disconnected"),1)])]),t("div",ds,[t("div",us,[s[14]||(s[14]=t("span",{class:"text-muted-foreground"},"Last Connected",-1)),t("span",null,l(o.appConnection.rfidUsbConnection.lastConnectedAt?e(M)(o.appConnection.rfidUsbConnection.lastConnectedAt):"Never"),1)])]),o.appConnection.rfidUsbConnection.error?(c(),g("div",cs," Error: "+l(o.appConnection.rfidUsbConnection.error),1)):S("",!0)]),_:1})]),_:1})])])]),_:1})]),_:1})]))}}),fs={class:"grid grid-cols-1 gap-6 md:grid-cols-3"},ms={class:"space-y-2"},_s={class:"flex items-center gap-2"},xs={class:"text-3xl font-bold"},gs={class:"space-y-2"},vs={class:"flex items-center gap-2"},bs={class:"text-3xl font-bold"},ys={class:"space-y-2"},Cs={class:"flex items-center gap-2"},hs={class:"text-3xl font-bold"},$s={class:"mt-6 text-xs text-muted-foreground"},ws=v({__name:"DistanceSensorsTabContent",props:{distanceSensor:{}},setup(r){const o=r;return(i,s)=>(c(),_(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),null,{default:a(()=>s[0]||(s[0]=[u("Distance Sensors")])),_:1}),n(e(V),null,{default:a(()=>s[1]||(s[1]=[u("Proximity sensor readings")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",fs,[t("div",ms,[t("div",_s,[n(e(J),{class:"w-5 h-5 text-muted-foreground"}),s[2]||(s[2]=t("h3",{class:"font-medium"}," Front Distance ",-1))]),t("div",xs,l(o.distanceSensor.frontDistance)+" cm ",1),n(e(D),{value:Math.min(100,o.distanceSensor.frontDistance/200*100),class:"h-2"},null,8,["value"])]),t("div",gs,[t("div",vs,[n(e(K),{class:"w-5 h-5 text-muted-foreground"}),s[3]||(s[3]=t("h3",{class:"font-medium"}," Back Distance ",-1))]),t("div",bs,l(o.distanceSensor.backDistance)+" cm ",1),n(e(D),{value:Math.min(100,o.distanceSensor.backDistance/200*100),class:"h-2"},null,8,["value"])]),t("div",ys,[t("div",Cs,[n(e(_t),{class:"w-5 h-5 text-muted-foreground"}),s[4]||(s[4]=t("h3",{class:"font-medium"}," Down Distance ",-1))]),t("div",hs,l(o.distanceSensor.downDistance)+" cm ",1),n(e(D),{value:Math.min(100,o.distanceSensor.downDistance/50*100),class:"h-2"},null,8,["value"])])]),t("div",$s," Last updated: "+l(e(M)(o.distanceSensor.updatedAt)),1)]),_:1})]),_:1}))}}),Ms={class:"grid grid-cols-1 gap-6 md:grid-cols-2"},Ss={class:"space-y-4"},ks={class:"space-y-4"},Ds={class:"flex items-center justify-between"},Vs={class:"space-y-1"},Rs={class:"flex justify-between text-sm"},As={class:"space-y-1"},Ls={class:"flex justify-between text-sm"},Ps={class:"relative h-2 rounded-full bg-muted"},Ns={class:"flex items-center justify-between"},js={class:"text-xs text-muted-foreground"},Es={class:"space-y-4"},Os={class:"space-y-4"},Ts={class:"flex items-center justify-between"},Bs={class:"flex items-center justify-between"},Fs={class:"flex items-center gap-2"},Us={class:"space-y-1"},qs={class:"flex justify-between text-sm"},Is={class:"flex items-center justify-between"},zs={class:"text-xs text-muted-foreground"},Hs={class:"flex flex-col gap-6 sm:flex-row"},Qs={class:"flex items-center gap-4"},Zs={class:"text-lg"},Gs={class:"self-end text-xs text-muted-foreground"},Xs=v({__name:"MotorsTabContent",props:{liftMotor:{},driveMotor:{},cargoDoorMotor:{}},setup(r){const o=r;return(i,s)=>(c(),_(e(x),null,{default:a(()=>[n(e(y),null,{default:a(()=>[n(e(C),null,{default:a(()=>s[0]||(s[0]=[u("Motor Status")])),_:1}),n(e(V),null,{default:a(()=>s[1]||(s[1]=[u("Lift and drive motor information")])),_:1})]),_:1}),n(e(b),null,{default:a(()=>[t("div",Ms,[t("div",Ss,[s[6]||(s[6]=t("h3",{class:"font-medium"}," Lift Motor ",-1)),t("div",ks,[t("div",Ds,[s[2]||(s[2]=t("span",{class:"text-sm font-medium"},"Status",-1)),n(e(w),{variant:o.liftMotor.isRunning?"default":"outline"},{default:a(()=>[u(l(o.liftMotor.isRunning?"Running":"Idle"),1)]),_:1},8,["variant"])]),t("div",Vs,[t("div",Rs,[s[3]||(s[3]=t("span",null,"Current Position",-1)),t("span",null,l(o.liftMotor.currentPosition)+"cm",1)]),n(e(D),{value:o.liftMotor.currentPosition,max:100,class:"h-2"},null,8,["value"])]),t("div",As,[t("div",Ls,[s[4]||(s[4]=t("span",null,"Target Position",-1)),t("span",null,l(o.liftMotor.targetPosition)+"cm",1)]),t("div",Ps,[t("div",{class:"absolute w-1 h-4 -translate-y-1/2 rounded-full bg-primary top-1/2",style:H({left:`${o.liftMotor.targetPosition}%`})},null,4)])]),t("div",Ns,[s[5]||(s[5]=t("span",{class:"text-sm font-medium"},"Enabled",-1)),n(e(w),{variant:o.liftMotor.enabled?"default":"destructive"},{default:a(()=>[u(l(o.liftMotor.enabled?"Yes":"No"),1)]),_:1},8,["variant"])]),t("div",js," Last updated: "+l(e(M)(o.liftMotor.updatedAt)),1)])]),t("div",Es,[s[11]||(s[11]=t("h3",{class:"font-medium"}," Drive Motor ",-1)),t("div",Os,[t("div",Ts,[s[7]||(s[7]=t("span",{class:"text-sm font-medium"},"Status",-1)),n(e(w),{variant:o.driveMotor.isRunning?"default":"outline"},{default:a(()=>[u(l(o.driveMotor.isRunning?"Running":"Idle"),1)]),_:1},8,["variant"])]),t("div",Bs,[s[8]||(s[8]=t("span",{class:"text-sm font-medium"},"Direction",-1)),t("div",Fs,[o.driveMotor.direction==="FORWARD"?(c(),_(e(K),{key:0,class:"w-4 h-4 text-success"})):(c(),_(e(J),{key:1,class:"w-4 h-4 text-warning"})),t("span",null,l(o.driveMotor.direction),1)])]),t("div",Us,[t("div",qs,[s[9]||(s[9]=t("span",null,"Speed",-1)),t("span",null,l((o.driveMotor.speed*100).toFixed(0))+"%",1)]),n(e(D),{value:o.driveMotor.speed*100,class:"h-2"},null,8,["value"])]),t("div",Is,[s[10]||(s[10]=t("span",{class:"text-sm font-medium"},"Enabled",-1)),n(e(w),{variant:o.driveMotor.enabled?"default":"destructive"},{default:a(()=>[u(l(o.driveMotor.enabled?"Yes":"No"),1)]),_:1},8,["variant"])]),t("div",zs," Last updated: "+l(e(M)(o.driveMotor.updatedAt)),1)])])]),n(e(bt),{class:"my-6"}),t("div",null,[s[13]||(s[13]=t("h3",{class:"mb-4 font-medium"}," Cargo Door Motor ",-1)),t("div",Hs,[t("div",Qs,[t("div",{class:m(["p-3 rounded-full",o.cargoDoorMotor.direction==="OPEN"?"bg-green-100":"bg-yellow-100"])},[o.cargoDoorMotor.direction==="OPEN"?(c(),_(e(st),{key:0,class:"w-6 h-6 text-green-600"})):(c(),_(e(et),{key:1,class:"w-6 h-6 text-yellow-600"}))],2),t("div",null,[s[12]||(s[12]=t("p",{class:"font-medium"}," Door Status ",-1)),t("p",Zs,l(o.cargoDoorMotor.direction==="OPEN"?"Open":"Closed"),1)]),t("div",Gs," Last updated: "+l(e(M)(o.cargoDoorMotor.updatedAt)),1)])])])]),_:1})]),_:1}))}}),Ys={class:"w-full"},Js=v({__name:"TabContent",props:{robotState:{}},setup(r){const o=r,i=at(),s=lt(),d=i.query.tab??"battery";function f(k){s.replace({query:{tab:k}})}return(k,p)=>(c(),g("div",Ys,[n(e(vt),{"default-value":e(d),"onUpdate:modelValue":f},{default:a(()=>[n(e(gt),{class:"mb-4"},{default:a(()=>[n(e(R),{value:"battery"},{default:a(()=>p[0]||(p[0]=[u(" Battery ")])),_:1}),n(e(R),{value:"motors"},{default:a(()=>p[1]||(p[1]=[u(" Motors ")])),_:1}),n(e(R),{value:"sensors"},{default:a(()=>p[2]||(p[2]=[u(" Sensors ")])),_:1}),n(e(R),{value:"cargo"},{default:a(()=>p[3]||(p[3]=[u(" Cargo ")])),_:1}),n(e(R),{value:"connections"},{default:a(()=>p[4]||(p[4]=[u(" Connections ")])),_:1})]),_:1}),n(e(A),{value:"battery"},{default:a(()=>[n($e,{battery:o.robotState.battery,charge:o.robotState.charge,discharge:o.robotState.discharge},null,8,["battery","charge","discharge"])]),_:1}),n(e(A),{value:"motors"},{default:a(()=>[n(Xs,{"lift-motor":o.robotState.liftMotor,"drive-motor":o.robotState.driveMotor,"cargo-door-motor":o.robotState.cargoDoorMotor},null,8,["lift-motor","drive-motor","cargo-door-motor"])]),_:1}),n(e(A),{value:"sensors"},{default:a(()=>[n(ws,{"distance-sensor":o.robotState.distanceSensor},null,8,["distance-sensor"])]),_:1}),n(e(A),{value:"cargo"},{default:a(()=>[n(Fe,{cargo:o.robotState.cargo,"cargo-door-motor":o.robotState.cargoDoorMotor},null,8,["cargo","cargo-door-motor"])]),_:1}),n(e(A),{value:"connections"},{default:a(()=>[n(ps,{"app-connection":o.robotState.appConnection},null,8,["app-connection"])]),_:1})]),_:1},8,["default-value"])]))}}),Ks={getRobotState(r){return yt.get("/robot-state",r)}};function Ws(r){return ut({queryKey:["robotState"],queryFn:()=>Ks.getRobotState(r==null?void 0:r.axiosOpts),refetchInterval:r==null?void 0:r.refetchInterval})}const to={key:0,class:"flex flex-col items-center justify-center gap-4 pt-20"},eo={class:"flex items-center gap-4"},so={key:1,class:"flex flex-col items-center justify-center gap-4 pt-20"},oo={class:"space-y-2 text-center"},no={class:"text-sm text-muted-foreground"},ao={key:2,class:"flex flex-col items-center justify-center gap-4 pt-20"},lo={key:3,class:"flex flex-col w-full"},ro={class:"flex items-center justify-between mb-6"},io={class:"flex items-center gap-2"},uo=1e3,yo=v({__name:"StateView",setup(r){const o=rt(uo),{data:i,isPending:s,isError:d,error:f}=Ws({axiosOpts:{doNotShowLoading:!0},refetchInterval:o});return(k,p)=>(c(),_(Ct,null,{default:a(()=>[e(s)?(c(),g("div",to,[t("div",eo,[n(e(ht),{class:"w-8 h-8 animate-spin text-muted-foreground"})]),p[1]||(p[1]=t("p",{class:"text-lg text-muted-foreground"}," Loading state... ",-1))])):e(d)?(c(),g("div",so,[n(e(x),{class:"flex flex-col items-center gap-4 p-6 text-destructive"},{default:a(()=>{var h;return[n(e(F),{class:"w-8 h-8"}),t("div",oo,[p[2]||(p[2]=t("h2",{class:"text-lg font-semibold"}," Failed to load state ",-1)),t("p",no,l(((h=e(f))==null?void 0:h.message)||"An unexpected error occurred"),1)])]}),_:1})])):e(i)?(c(),g("div",lo,[t("div",ro,[p[6]||(p[6]=t("div",null,[t("h1",{class:"text-xl font-semibold"}," Robot Status Dashboard "),t("p",{class:"text-sm text-muted-foreground"}," The current state of the robot is continuously updated. ")],-1)),t("div",io,[p[4]||(p[4]=t("span",{class:"whitespace-nowrap"},"Refresh rate: ",-1)),n(e(ct),{modelValue:e(o),"onUpdate:modelValue":p[0]||(p[0]=h=>it(o)?o.value=h:null)},{default:a(()=>[n(e(pt),null,{default:a(()=>[n(e(B),{class:"w-5"})]),_:1}),n(e(ft),null,{default:a(()=>[n(e(xt),null,{default:a(()=>[(c(),g(Q,null,Z([1e3,3e3,5e3,1e4],h=>n(e(mt),{key:h,value:h},{default:a(()=>[n(e(B),null,{default:a(()=>[u(l(h/1e3),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1},8,["modelValue"]),p[5]||(p[5]=t("span",null,"seconds",-1))])]),e(i)?(c(),_(Yt,{key:0,"robot-state":e(i)},null,8,["robot-state"])):S("",!0),e(i)?(c(),_(Js,{key:1,"robot-state":e(i)},null,8,["robot-state"])):S("",!0)])):(c(),g("div",ao,[n(e(x),{class:"flex flex-col items-center gap-4 p-6"},{default:a(()=>[n(e(F),{class:"w-8 h-8 text-muted-foreground"}),p[3]||(p[3]=t("div",{class:"space-y-2 text-center"},[t("h2",{class:"text-lg font-semibold"}," Robot state not found "),t("p",{class:"text-sm text-muted-foreground"}," The robot state appears to be empty ")],-1))]),_:1})]))]),_:1}))}});export{yo as default};
