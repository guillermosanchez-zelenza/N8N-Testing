import{m as C}from"./pinia-aUqqC48i.js";import{u as L,m as v,_ as g,e as k,x as w}from"./n8n-_nNvRoCf.js";import{G as f,l as n,m as c,I as e,ag as s,u as _,p as l,R as $,T as i,Q as p,O as y,S as O,M as B,K as M}from"./vendor-NNwioulI.js";import{ax as U}from"./index-xP-VuMjv.js";const V=f({computed:{...C(v,L),basePath(){return this.rootStore.baseUrl},logoPath(){return this.basePath+this.uiStore.logo}}}),P="_img_rbqr8_5",T={img:P},N=["src"];function x(o,a,r,d,m,t){return n(),c("img",{src:o.logoPath,class:e(o.$style.img),alt:"n8n.io"},null,10,N)}const z={$style:T},A=g(V,[["render",x],["__cssModules",z]]),E=f({__name:"SSOLogin",setup(o){const a=w(),r=U(),d=k(),m=async()=>{try{window.location.href=await r.getSSORedirectUrl()}catch(t){d.showError(t,"Error",t.message)}};return(t,S)=>{const u=s("n8n-button");return _(r).showSsoLoginButton?(n(),c("div",{key:0,class:e(t.$style.ssoLogin)},[l("div",{class:e(t.$style.divider)},[l("span",null,$(_(a).baseText("sso.login.divider")),1)],2),i(u,{size:"large",type:"primary",outline:"",label:_(a).baseText("sso.login.button"),onClick:m},null,8,["label"])],2)):p("",!0)}}}),I="_ssoLogin_2d9uv_5",R="_divider_2d9uv_9",q={ssoLogin:I,divider:R},D={$style:q},G=g(E,[["__cssModules",D]]),K=f({name:"AuthView",components:{Logo:A,SSOLogin:G},props:{form:{},formLoading:{type:Boolean,default:!1},subtitle:{type:String},withSso:{type:Boolean,default:!1}},methods:{onUpdate(o){this.$emit("update",o)},onSubmit(o){this.$emit("submit",o)},onSecondaryClick(){this.$emit("secondaryClick")}}}),Q="_container_13abf_9",j="_logoContainer_13abf_20",F="_textContainer_13abf_25",H="_formContainer_13abf_29",J={container:Q,logoContainer:j,textContainer:F,formContainer:H};function W(o,a,r,d,m,t){const S=s("Logo"),u=s("n8n-text"),b=s("SSOLogin"),h=s("n8n-form-box");return n(),c("div",{class:e(o.$style.container)},[l("div",{class:e(o.$style.logoContainer)},[i(S)],2),o.subtitle?(n(),c("div",{key:0,class:e(o.$style.textContainer)},[i(u,{size:"large"},{default:y(()=>[O($(o.subtitle),1)]),_:1})],2)):p("",!0),l("div",{class:e(o.$style.formContainer)},[i(h,M(o.form,{"data-test-id":"auth-form","button-loading":o.formLoading,onSecondaryClick:o.onSecondaryClick,onSubmit:o.onSubmit,onUpdate:o.onUpdate}),{default:y(()=>[o.withSso?(n(),B(b,{key:0})):p("",!0)]),_:1},16,["button-loading","onSecondaryClick","onSubmit","onUpdate"])],2)],2)}const X={$style:J},eo=g(K,[["render",W],["__cssModules",X]]);export{eo as A,A as L};
//# sourceMappingURL=AuthView-kdo3aJG-.js.map
