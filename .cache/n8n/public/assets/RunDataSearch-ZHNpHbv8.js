import{x,_ as E}from"./n8n-_nNvRoCf.js";import{G as g,r as l,e as A,b as M,Y as V,ag as h,l as b,M as k,O as L,I as f,T as O,J as H}from"./vendor-NNwioulI.js";import"./lodash-es-5z_C16pm.js";import"./axios-s2RMMPhA.js";import"./flatted-jPn12Tq4.js";import"./esprima-next-ulPLCZ1Z.js";import"./luxon-ZRIU05qF.js";import"./pinia-aUqqC48i.js";import"./@vueuse/core-8g26_cc0.js";import"./uuid-McvpxQtQ.js";import"./vue-i18n-1PEMRmUU.js";import"./@n8n/permissions-8yMqUF1Y.js";const _="34px",B=g({__name:"RunDataSearch",props:{modelValue:{},paneType:{default:"output"},isAreaActive:{type:Boolean,default:!1}},emits:["update:modelValue","focus"],setup(v,{emit:r}){const n=v,u=x(),o=l(null),s=l(_),c=l(!1),y=A(()=>n.paneType==="input"?u.baseText("ndv.search.placeholder.input"):u.baseText("ndv.search.placeholder.output")),i=e=>{var t,a,d,m;const p=e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement||((a=(t=e.target)==null?void 0:t.getAttribute)==null?void 0:a.call(t,"contentEditable"))==="true";e.key==="/"&&n.isAreaActive&&!p&&((d=o.value)==null||d.focus(),(m=o.value)==null||m.select())},S=e=>{r("update:modelValue",e)},T=()=>{var e;c.value=!0,s.value="30%",(e=o.value)==null||e.select(),r("focus")},I=()=>{n.modelValue||(c.value=!1,s.value=_)};return M(()=>{document.addEventListener("keyup",i)}),V(()=>{document.removeEventListener("keyup",i)}),(e,p)=>{const t=h("n8n-icon"),a=h("n8n-input");return b(),k(a,{ref_key:"inputRef",ref:o,"data-test-id":"ndv-search",class:f({[e.$style.ioSearch]:!0,[e.$style.ioSearchOpened]:c.value}),style:H({maxWidth:s.value}),"model-value":e.modelValue,placeholder:y.value,size:"small","onUpdate:modelValue":S,onFocus:T,onBlur:I},{prefix:L(()=>[O(t,{class:f(e.$style.ioSearchIcon),icon:"search"},null,8,["class"])]),_:1},8,["class","style","model-value","placeholder"])}}}),C="_ioSearch_vv4ys_5",R="_ioSearchIcon_vv4ys_9",$="_ioSearchOpened_vv4ys_19",z={ioSearch:C,ioSearchIcon:R,ioSearchOpened:$},D={$style:z},Q=E(B,[["__cssModules",D]]);export{Q as default};
//# sourceMappingURL=RunDataSearch-ZHNpHbv8.js.map
