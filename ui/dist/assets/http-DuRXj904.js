var ut=i=>{throw TypeError(i)};var J=(i,t,e)=>t.has(i)||ut("Cannot "+e);var s=(i,t,e)=>(J(i,t,"read from private field"),e?e.call(i):t.get(i)),p=(i,t,e)=>t.has(i)?ut("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),u=(i,t,e,a)=>(J(i,t,"write to private field"),a?a.call(i,e):t.set(i,e),e),d=(i,t,e)=>(J(i,t,"access private method"),e);import{aB as Ot,aK as lt,aL as C,aC as X,aM as G,aN as wt,aO as dt,aP as ft,aQ as St,aR as Et,aS as It,aT as pt,aF as Qt,aU as Ut,aa as Pt,aV as Tt,p as jt,aG as kt,aH as xt,q as K,t as Ft,aJ as bt,aI as yt,ao as Dt,d as Lt,D as Mt,F as _t,a as Bt,G as At,b as zt,e as Nt,aW as Vt,aX as Wt,aY as Ht,ae as Kt,ag as Gt}from"./index-CTlbARFt.js";import{c as qt,a as Jt}from"./createLucideIcon-D9hqd8Td.js";var m,r,N,y,U,L,S,R,V,M,_,P,T,E,B,o,z,Y,$,Z,tt,et,st,it,Rt,gt,Xt=(gt=class extends Ot{constructor(t,e){super();p(this,o);p(this,m);p(this,r);p(this,N);p(this,y);p(this,U);p(this,L);p(this,S);p(this,R);p(this,V);p(this,M);p(this,_);p(this,P);p(this,T);p(this,E);p(this,B,new Set);this.options=e,u(this,m,t),u(this,R,null),u(this,S,lt()),this.options.experimental_prefetchInRender||s(this,S).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(s(this,r).addObserver(this),mt(s(this,r),this.options)?d(this,o,z).call(this):this.updateResult(),d(this,o,tt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return at(s(this,r),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return at(s(this,r),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,d(this,o,et).call(this),d(this,o,st).call(this),s(this,r).removeObserver(this)}setOptions(t){const e=this.options,a=s(this,r);if(this.options=s(this,m).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof C(this.options.enabled,s(this,r))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");d(this,o,it).call(this),s(this,r).setOptions(this.options),e._defaulted&&!X(this.options,e)&&s(this,m).getQueryCache().notify({type:"observerOptionsUpdated",query:s(this,r),observer:this});const c=this.hasListeners();c&&vt(s(this,r),a,this.options,e)&&d(this,o,z).call(this),this.updateResult(),c&&(s(this,r)!==a||C(this.options.enabled,s(this,r))!==C(e.enabled,s(this,r))||G(this.options.staleTime,s(this,r))!==G(e.staleTime,s(this,r)))&&d(this,o,Y).call(this);const h=d(this,o,$).call(this);c&&(s(this,r)!==a||C(this.options.enabled,s(this,r))!==C(e.enabled,s(this,r))||h!==s(this,E))&&d(this,o,Z).call(this,h)}getOptimisticResult(t){const e=s(this,m).getQueryCache().build(s(this,m),t),a=this.createResult(e,t);return $t(this,a)&&(u(this,y,a),u(this,L,this.options),u(this,U,s(this,r).state)),a}getCurrentResult(){return s(this,y)}trackResult(t,e){const a={};return Object.keys(t).forEach(c=>{Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(c),e==null||e(c),t[c])})}),a}trackProp(t){s(this,B).add(t)}getCurrentQuery(){return s(this,r)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=s(this,m).defaultQueryOptions(t),a=s(this,m).getQueryCache().build(s(this,m),e);return a.fetch().then(()=>this.createResult(a,e))}fetch(t){return d(this,o,z).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),s(this,y)))}createResult(t,e){var ct;const a=s(this,r),c=this.options,h=s(this,y),f=s(this,U),O=s(this,L),A=t!==a?t.state:s(this,N),{state:W}=t;let l={...W},Q=!1,n;if(e._optimisticResults){const b=this.hasListeners(),F=!b&&mt(t,e),D=b&&vt(t,a,e,c);(F||D)&&(l={...l,...It(W.data,t.options)}),e._optimisticResults==="isRestoring"&&(l.fetchStatus="idle")}let{error:w,errorUpdatedAt:j,status:v}=l;if(e.select&&l.data!==void 0)if(h&&l.data===(f==null?void 0:f.data)&&e.select===s(this,V))n=s(this,M);else try{u(this,V,e.select),n=e.select(l.data),n=pt(h==null?void 0:h.data,n,e),u(this,M,n),u(this,R,null)}catch(b){u(this,R,b)}else n=l.data;if(e.placeholderData!==void 0&&n===void 0&&v==="pending"){let b;if(h!=null&&h.isPlaceholderData&&e.placeholderData===(O==null?void 0:O.placeholderData))b=h.data;else if(b=typeof e.placeholderData=="function"?e.placeholderData((ct=s(this,_))==null?void 0:ct.state.data,s(this,_)):e.placeholderData,e.select&&b!==void 0)try{b=e.select(b),u(this,R,null)}catch(F){u(this,R,F)}b!==void 0&&(v="success",n=pt(h==null?void 0:h.data,b,e),Q=!0)}s(this,R)&&(w=s(this,R),n=s(this,M),j=Date.now(),v="error");const k=l.fetchStatus==="fetching",x=v==="pending",q=v==="error",ot=x&&k,ht=n!==void 0,g={status:v,fetchStatus:l.fetchStatus,isPending:x,isSuccess:v==="success",isError:q,isInitialLoading:ot,isLoading:ot,data:n,dataUpdatedAt:l.dataUpdatedAt,error:w,errorUpdatedAt:j,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>A.dataUpdateCount||l.errorUpdateCount>A.errorUpdateCount,isFetching:k,isRefetching:k&&!x,isLoadingError:q&&!ht,isPaused:l.fetchStatus==="paused",isPlaceholderData:Q,isRefetchError:q&&ht,isStale:nt(t,e),refetch:this.refetch,promise:s(this,S)};if(this.options.experimental_prefetchInRender){const b=H=>{g.status==="error"?H.reject(g.error):g.data!==void 0&&H.resolve(g.data)},F=()=>{const H=u(this,S,g.promise=lt());b(H)},D=s(this,S);switch(D.status){case"pending":t.queryHash===a.queryHash&&b(D);break;case"fulfilled":(g.status==="error"||g.data!==D.value)&&F();break;case"rejected":(g.status!=="error"||g.error!==D.reason)&&F();break}}return g}updateResult(){const t=s(this,y),e=this.createResult(s(this,r),this.options);if(u(this,U,s(this,r).state),u(this,L,this.options),s(this,U).data!==void 0&&u(this,_,s(this,r)),X(e,t))return;u(this,y,e);const a=()=>{if(!t)return!0;const{notifyOnChangeProps:c}=this.options,h=typeof c=="function"?c():c;if(h==="all"||!h&&!s(this,B).size)return!0;const f=new Set(h??s(this,B));return this.options.throwOnError&&f.add("error"),Object.keys(s(this,y)).some(O=>{const I=O;return s(this,y)[I]!==t[I]&&f.has(I)})};d(this,o,Rt).call(this,{listeners:a()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&d(this,o,tt).call(this)}},m=new WeakMap,r=new WeakMap,N=new WeakMap,y=new WeakMap,U=new WeakMap,L=new WeakMap,S=new WeakMap,R=new WeakMap,V=new WeakMap,M=new WeakMap,_=new WeakMap,P=new WeakMap,T=new WeakMap,E=new WeakMap,B=new WeakMap,o=new WeakSet,z=function(t){d(this,o,it).call(this);let e=s(this,r).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(wt)),e},Y=function(){d(this,o,et).call(this);const t=G(this.options.staleTime,s(this,r));if(dt||s(this,y).isStale||!ft(t))return;const a=St(s(this,y).dataUpdatedAt,t)+1;u(this,P,setTimeout(()=>{s(this,y).isStale||this.updateResult()},a))},$=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(s(this,r)):this.options.refetchInterval)??!1},Z=function(t){d(this,o,st).call(this),u(this,E,t),!(dt||C(this.options.enabled,s(this,r))===!1||!ft(s(this,E))||s(this,E)===0)&&u(this,T,setInterval(()=>{(this.options.refetchIntervalInBackground||Et.isFocused())&&d(this,o,z).call(this)},s(this,E)))},tt=function(){d(this,o,Y).call(this),d(this,o,Z).call(this,d(this,o,$).call(this))},et=function(){s(this,P)&&(clearTimeout(s(this,P)),u(this,P,void 0))},st=function(){s(this,T)&&(clearInterval(s(this,T)),u(this,T,void 0))},it=function(){const t=s(this,m).getQueryCache().build(s(this,m),this.options);if(t===s(this,r))return;const e=s(this,r);u(this,r,t),u(this,N,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},Rt=function(t){Qt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(s(this,y))}),s(this,m).getQueryCache().notify({query:s(this,r),type:"observerResultsUpdated"})})},gt);function Yt(i,t){return C(t.enabled,i)!==!1&&i.state.data===void 0&&!(i.state.status==="error"&&t.retryOnMount===!1)}function mt(i,t){return Yt(i,t)||i.state.data!==void 0&&at(i,t,t.refetchOnMount)}function at(i,t,e){if(C(t.enabled,i)!==!1){const a=typeof e=="function"?e(i):e;return a==="always"||a!==!1&&nt(i,t)}return!1}function vt(i,t,e,a){return(i!==t||C(a.enabled,i)===!1)&&(!e.suspense||i.state.status!=="error")&&nt(i,e)}function nt(i,t){return C(t.enabled,i)!==!1&&i.isStaleByTime(G(t.staleTime,i))}function $t(i,t){return!X(i.getCurrentResult(),t)}function Zt(i=""){if(!Ut())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const t=Tt(i),e=Pt(t);if(!e)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return e}function te(i,t,e){const a=Zt(),c=jt(()=>{const n=kt(t);typeof n.enabled=="function"&&(n.enabled=n.enabled());const w=a.defaultQueryOptions(n);return w._optimisticResults=a.isRestoring.value?"isRestoring":"optimistic",w}),h=new i(a,c.value),f=xt(h.getCurrentResult());let O=()=>{};K(a.isRestoring,n=>{n||(O(),O=h.subscribe(w=>{yt(f,w)}))},{immediate:!0});const I=()=>{h.setOptions(c.value),yt(f,h.getCurrentResult())};K(c,I),Dt(()=>{O()});const A=(...n)=>(I(),f.refetch(...n)),W=()=>new Promise((n,w)=>{let j=()=>{};const v=()=>{if(c.value.enabled!==!1){h.setOptions(c.value);const k=h.getOptimisticResult(c.value);k.isStale?(j(),h.fetchOptimistic(c.value).then(n,x=>{bt(c.value.throwOnError,[x,h.getCurrentQuery()])?w(x):n(h.getCurrentResult())})):(j(),n(k))}};v(),j=K(c,v)});K(()=>f.error,n=>{if(f.isError&&!f.isFetching&&bt(c.value.throwOnError,[n,h.getCurrentQuery()]))throw n});const Q=Ft(f);for(const n in f)typeof f[n]=="function"&&(Q[n]=f[n]);return Q.suspense=W,Q.refetch=A,Q}function ne(i,t){return te(Xt,i)}/**
 * @license lucide-vue-next v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=qt("loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]),ee={class:"container p-6"},he=Lt({__name:"PageContainer",props:{spacing:{type:Boolean,default:!0},class:{}},setup(i){const t=i;return(e,a)=>(Nt(),Mt("div",ee,[_t("div",{class:At(zt(Jt)(t.spacing&&"space-y-6",t.class))},[Bt(e.$slots,"default")],2)]))}}),rt=Vt(),Ct=Wt.create({baseURL:"/api/v1",timeout:2e4,headers:{"Content-Type":"application/json"},withCredentials:!0});Ct.interceptors.request.use(i=>(i.doNotShowLoading||rt.start(),i),i=>Promise.reject(i));Ct.interceptors.response.use(i=>(rt.done(),Promise.resolve(i.data)),i=>{if(rt.done(),Ht(i)&&i.response&&i.response.data){const{status:t}=i.response,{message:e,code:a,details:c}=i.response.data;return t>=400&&t<500?Promise.reject(new Kt(e,t,a,c)):Promise.reject(new Gt(e||"Unexpected error",t))}return Promise.reject(i)});export{oe as L,he as _,Zt as a,Ct as i,ne as u};
