import{V as B,_ as l}from"./n8n-_nNvRoCf.js";import{G as i,ag as p,l as a,m as r,T as d,I as t,p as o,R as y,Q as k,H as c}from"./vendor-NNwioulI.js";const h=i({name:"GoBackButton",data(){return{routeHasHistory:!1}},mounted(){window.history.state?this.routeHasHistory=!0:this.routeHasHistory=!1},methods:{navigateTo(){this.routeHasHistory?this.$router.go(-1):this.$router.push({name:B.TEMPLATES})}}}),g="_wrapper_8n8b4_5",v="_icon_8n8b4_10",b="_text_8n8b4_11",w={wrapper:g,icon:v,text:b},T=["textContent"];function H(e,s,_,u,m,$){const n=p("font-awesome-icon");return a(),r("div",{class:t(e.$style.wrapper),onClick:s[0]||(s[0]=(...f)=>e.navigateTo&&e.navigateTo(...f))},[d(n,{class:t(e.$style.icon),icon:"arrow-left"},null,8,["class"]),o("div",{class:t(e.$style.text),textContent:y(e.$locale.baseText("template.buttons.goBackButton"))},null,10,T)],2)}const C={$style:w},V=l(h,[["render",H],["__cssModules",C]]),E=i({name:"TemplatesView",components:{GoBackButton:V},props:{goBackEnabled:{type:Boolean,default:!1}}}),z="_template_zfb12_5",G="_container_zfb12_18",M="_header_zfb12_22",S="_goBack_zfb12_28",N={template:z,container:G,header:M,goBack:S};function I(e,s,_,u,m,$){const n=p("GoBackButton");return a(),r("div",{class:t(e.$style.template)},[o("div",{class:t(e.$style.container)},[o("div",{class:t(e.$style.header)},[e.goBackEnabled?(a(),r("div",{key:0,class:t(e.$style.goBack)},[d(n)],2)):k("",!0),c(e.$slots,"header")],2),o("div",null,[c(e.$slots,"content")])],2)],2)}const A={$style:N},P=l(E,[["render",I],["__cssModules",A]]);export{P as T};
//# sourceMappingURL=TemplatesView-iIGCTbv6.js.map
