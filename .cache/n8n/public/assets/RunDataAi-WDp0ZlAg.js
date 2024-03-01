import{N as _,fV as Y,e as Z,fW as P,x as ee,_ as J,y as K,v as G,fX as te}from"./n8n-_nNvRoCf.js";import{j as ne,N as Q}from"./index-xP-VuMjv.js";import{G as F,r as O,b as oe,ag as R,l as y,m as k,p as w,I as p,T as $,R as v,u as E,M as z,a2 as se,Q as S,F as H,a7 as U,e as V,O as D,S as x,d as ae,J as re}from"./vendor-NNwioulI.js";import{A as le}from"./lodash-es-5z_C16pm.js";import"./axios-s2RMMPhA.js";import"./flatted-jPn12Tq4.js";import"./esprima-next-ulPLCZ1Z.js";import"./luxon-ZRIU05qF.js";import"./pinia-aUqqC48i.js";import"./@vueuse/core-8g26_cc0.js";import"./uuid-McvpxQtQ.js";import"./vue-i18n-1PEMRmUU.js";import"./@n8n/permissions-8yMqUF1Y.js";import"./@n8n/codemirror-lang-sql-feLn5IS9.js";import"./@lezer/common-1hBQ1gIF.js";import"./codemirror-lang-html-n8n-wWQLhhqk.js";import"./prettier-s3fE3Qyr.js";import"./@jsplumb/util-DR0SB56A.js";import"./@jsplumb/core-MKwKlGip.js";import"./@jsplumb/common-Q5_tv_GT.js";import"./@jsplumb/connector-bezier-3dWY17R5.js";import"./@jsplumb/browser-ui-AlqFM-P6.js";import"./codemirror-lang-n8n-expression-HpIZnV_9.js";import"./fast-json-stable-stringify-eHEaCv8s.js";import"./timeago.js--Bumj2r9.js";import"./qrcode.vue-UdCmS1Sj.js";import"./vue3-touch-events-_RfbPMOD.js";import"./chart.js-JtqvIvkt.js";const B=o=>({type:"json",data:o,parsed:!1}),X={[_.AiLanguageModel](o){const s=o.response??o;if(!s)throw new Error("No response from Language Model");return Array.isArray(s==null?void 0:s.messages)&&(s==null?void 0:s.messages.length)===1&&typeof(s==null?void 0:s.messages[0])=="string"?{type:"text",data:s.messages[0],parsed:!0}:s.messages&&Array.isArray(s.messages)?X[_.AiMemory](o):s.generations?{type:"json",data:s.generations.map(a=>a!=null&&a.text?a.text:Array.isArray(a)?a.map(C=>C.text??C).join(`

`).trim():a),parsed:!0}:{type:"json",data:s,parsed:!0}},[_.AiTool]:B,[_.AiAgent]:B,[_.AiMemory](o){var T;const s=o.chatHistory??o.messages??((T=o==null?void 0:o.response)==null?void 0:T.chat_history);return Array.isArray(s)?{type:"markdown",data:s.map(a=>{var C,d;if(a.type==="constructor"&&((C=a.id)!=null&&C.includes("messages"))&&a.kwargs){let l=a.kwargs.content;if(Array.isArray(l)){const r=l[0];(r==null?void 0:r.type)==="image_url"&&(l=`![Input image](${(d=r.image_url)==null?void 0:d.url})`),l=l}return Object.keys(a.kwargs.additional_kwargs).length&&(l+=` (${JSON.stringify(a.kwargs.additional_kwargs)})`),a.id.includes("HumanMessage")?l=`**Human:** ${l.trim()}`:a.id.includes("AIMessage")?l=`**AI:** ${l}`:a.id.includes("SystemMessage")&&(l=`**System Message:** ${l}`),o.action&&o.action!=="getMessages"&&(l=`## Action: ${o.action}

${l}`),l}return""}).join(`

`),parsed:!0}:B(o)},[_.AiOutputParser]:B,[_.AiRetriever]:B,[_.AiVectorStore](o){return o.documents?{type:"json",data:o.documents,parsed:!0}:B(o)},[_.AiEmbedding](o){return o.documents?{type:"json",data:o.documents,parsed:!0}:B(o)},[_.AiDocument](o){return o.documents?{type:"json",data:o.documents,parsed:!0}:B(o)},[_.AiTextSplitter](o){return{type:"text",data:(Array.isArray(o.response)?o.response:[o.textSplitter]).join(`

`),parsed:!0}}},ie=()=>({parseAiRunData:(s,T)=>{if([_.AiChain,_.Main].includes(T))return s.map(d=>({raw:d.json,parsedContent:null}));const I=s.map(d=>!Y(d.binary)?d.binary:d.json),a=X[T];return a?I.filter(d=>d!==void 0).map(d=>({raw:d,parsedContent:a(d)})):[{raw:I.filter(d=>d!==void 0),parsedContent:null}]}}),ue=["data-content-type"],ce=["textContent"],de=F({__name:"AiRunContentBlock",props:{runData:{}},setup(o){const s=o,T=ee(),I=ne(),{showMessage:a}=Z(),C=ie(),d=O(N()),l=O(!1),r=O(!1),b=O(void 0);function N(){return!{input:[_.AiDocument,_.AiTextSplitter],output:[_.AiDocument,_.AiEmbedding,_.AiTextSplitter,_.AiVectorStore]}[s.runData.inOut].includes(s.runData.type)}function h(e){return e.data?C.parseAiRunData(e.data,e.type):void 0}function q(e){return typeof e!="string"?!1:[/^# .+/gm,/\*{1,2}.+\*{1,2}/g,/\[.+\]\(.+\)/g,/```[\s\S]+```/g].some(u=>u.test(e))}function A(e){return"```json\n"+e+"\n```"}function g(e){return q(e)?e:Array.isArray(e)&&e.length&&typeof e[0]!="number"?e.map(u=>g(u)).join(`

`).trim():A(typeof e=="string"?e:JSON.stringify(e,null,2))}function t(e){r.value=!!e.find(n=>{var u;return((u=n.parsedContent)==null?void 0:u.parsed)===!0})}function i(){d.value=!d.value}function m(e){try{I.copy(JSON.stringify(e,void 0,2)),a({title:T.baseText("generic.copiedToClipboard"),type:"success"})}catch{}}return oe(()=>{b.value=h(s.runData),b.value&&t(b.value)}),(e,n)=>{const u=R("font-awesome-icon"),f=R("el-switch"),j=R("n8n-icon-button");return y(),k("div",{class:p(e.$style.block)},[w("header",{class:p(e.$style.blockHeader),onClick:i},[w("button",{class:p(e.$style.blockToggle)},[$(u,{icon:d.value?"angle-down":"angle-up",size:"lg"},null,8,["icon"])],2),w("p",{class:p(e.$style.blockTitle)},v(E(le)(e.runData.inOut)),3),r.value?(y(),z(f,{key:0,modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=c=>l.value=c),class:p(e.$style.rawSwitch),"active-text":"RAW JSON",onClick:n[1]||(n[1]=se(()=>{},["stop"]))},null,8,["modelValue","class"])):S("",!0)],2),w("main",{class:p({[e.$style.blockContent]:!0,[e.$style.blockContentExpanded]:d.value})},[(y(!0),k(H,null,U(b.value,({parsedContent:c,raw:M},W)=>(y(),k("div",{key:W,class:p(e.$style.contentText),"data-content-type":c==null?void 0:c.type},[c&&!l.value?(y(),k(H,{key:0},[c.type==="json"?(y(),z(E(P),{key:0,source:g(c.data),class:p(e.$style.markdown)},null,8,["source","class"])):S("",!0),c.type==="markdown"?(y(),z(E(P),{key:1,source:c.data,class:p(e.$style.markdown)},null,8,["source","class"])):S("",!0),c.type==="text"?(y(),k("p",{key:2,class:p(e.$style.runText),textContent:v(c.data)},null,10,ce)):S("",!0)],64)):(y(),k("div",{key:1,class:p(e.$style.rawContent)},[$(j,{size:"small",class:p(e.$style.copyToClipboard),type:"secondary",title:e.$locale.baseText("nodeErrorView.copyToClipboard"),icon:"copy",onClick:L=>m(M)},null,8,["class","title","onClick"]),$(E(P),{source:g(M),class:p(e.$style.markdown)},null,8,["source","class"])],2))],10,ue))),128))],2)],2)}}}),pe="_copyToClipboard_8qn1s_5",me="_rawContent_8qn1s_11",ye="_markdown_8qn1s_15",_e="_contentText_8qn1s_39",fe="_block_8qn1s_44",ke="_blockContent_8qn1s_52",ge="_blockContentExpanded_8qn1s_56",Te="_runText_8qn1s_60",be="_rawSwitch_8qn1s_65",he="_blockHeader_8qn1s_72",ve="_blockTitle_8qn1s_84",$e="_blockToggle_8qn1s_89",we={copyToClipboard:pe,rawContent:me,markdown:ye,contentText:_e,block:fe,blockContent:ke,blockContentExpanded:ge,runText:Te,rawSwitch:be,blockHeader:he,blockTitle:ve,blockToggle:$e},Ae={$style:we},Ce=J(de,[["__cssModules",Ae]]),Me={key:0},Se={key:1},je={key:2},Ie=w("br",null,null,-1),Ne=F({__name:"RunDataAiContent",props:{inputData:{},contentIndex:{}},setup(o){const s=o,T=K(),I=G(),a=V(()=>{var b,N;return(N=(b=d.value)==null?void 0:b.data)==null?void 0:N.reduce((h,q)=>{var t,i;const A=(t=q.json)==null?void 0:t.response,g=(i=A==null?void 0:A.llmOutput)==null?void 0:i.tokenUsage;return g?{completionTokens:h.completionTokens+g.completionTokens,promptTokens:h.promptTokens+g.promptTokens,totalTokens:h.totalTokens+g.totalTokens}:h},{completionTokens:0,promptTokens:0,totalTokens:0})});function C(r){const b=I.getNodeByName(s.inputData.node),N=T.getNodeType((b==null?void 0:b.type)??"");return{startTimeMs:r.metadata.startTime,executionTimeMs:r.metadata.executionTime,node:N,type:r.inOut,connectionType:r.type}}const d=V(()=>s.inputData.data.find(r=>r.inOut==="output")),l=V(()=>{if(d.value!==void 0)return C(d.value)});return(r,b)=>{var A,g,t,i,m,e;const N=R("n8n-tooltip"),h=R("n8n-text"),q=R("n8n-info-tip");return y(),k("div",{class:p(r.$style.container)},[w("header",{class:p(r.$style.header)},[(A=l.value)!=null&&A.node?(y(),z(Q,{key:0,class:p(r.$style.nodeIcon),"node-type":l.value.node,size:20},null,8,["class","node-type"])):S("",!0),w("div",{class:p(r.$style.headerWrap)},[w("p",{class:p(r.$style.title)},v(r.inputData.node),3),w("ul",{class:p(r.$style.meta)},[(g=l.value)!=null&&g.startTimeMs?(y(),k("li",Me,v((t=l.value)==null?void 0:t.executionTimeMs)+"ms",1)):S("",!0),(i=l.value)!=null&&i.startTimeMs?(y(),k("li",Se,[$(N,null,{content:D(()=>{var n;return[x(v(new Date((n=l.value)==null?void 0:n.startTimeMs).toLocaleString()),1)]}),default:D(()=>{var n;return[x(" "+v(r.$locale.baseText("runData.aiContentBlock.startedAt",{interpolate:{startTime:new Date((n=l.value)==null?void 0:n.startTimeMs).toLocaleTimeString()}})),1)]}),_:1})])):S("",!0),(((m=a.value)==null?void 0:m.totalTokens)??0)>0?(y(),k("li",je,[x(v(r.$locale.baseText("runData.aiContentBlock.tokens",{interpolate:{count:(e=a.value)==null?void 0:e.totalTokens.toString()}}))+" ",1),$(q,{type:"tooltip",theme:"info-light","tooltip-placement":"right"},{default:D(()=>[w("div",null,[$(h,{bold:!0,size:"small"},{default:D(()=>{var n;return[x(v(r.$locale.baseText("runData.aiContentBlock.tokens.prompt"))+" "+v(r.$locale.baseText("runData.aiContentBlock.tokens",{interpolate:{count:(n=a.value)==null?void 0:n.promptTokens.toString()}})),1)]}),_:1}),Ie,$(h,{bold:!0,size:"small"},{default:D(()=>{var n;return[x(v(r.$locale.baseText("runData.aiContentBlock.tokens.completion"))+" "+v(r.$locale.baseText("runData.aiContentBlock.tokens",{interpolate:{count:(n=a.value)==null?void 0:n.completionTokens.toString()}})),1)]}),_:1})])]),_:1})])):S("",!0)],2)],2)],2),(y(!0),k(H,null,U(s.inputData.data,(n,u)=>(y(),k("main",{key:u,class:p(r.$style.content)},[$(Ce,{"run-data":n},null,8,["run-data"])],2))),128))],2)}}}),De="_container_160yh_2",Re="_nodeIcon_160yh_5",qe="_header_160yh_8",Be="_headerWrap_160yh_14",xe="_title_160yh_18",Oe="_meta_160yh_25",Ee={container:De,nodeIcon:Re,header:qe,headerWrap:Be,title:xe,meta:Oe},Ve={$style:Ee},We=J(Ne,[["__cssModules",Ve]]),ze=["data-tree-depth"],He=["onClick"],Le=["textContent"],Pe=F({__name:"RunDataAi",props:{node:{},runIndex:{default:0},hideTitle:{type:Boolean},slim:{type:Boolean}},setup(o){const s=o,T=G(),I=K(),a=O([]);function C(t){return a.value.some(i=>i.node===t.node&&i.runIndex===t.runIndex)}function d(t,i,m){const e=T.getWorkflowResultDataByNodeName(t.node);if(!(e!=null&&e[t.runIndex]))return[];const n=e[t.runIndex];if(!n)return[];const u=[];function f(j,c){j&&Object.keys(j).map(M=>{u.push({data:j[M][0],inOut:c,type:M,metadata:{executionTime:n.executionTime,startTime:n.startTime}})})}return i&&f(n.inputOverride,"input"),m&&f(n.data,"output"),u}function l(t){t.expanded=!t.expanded}function r(t){var m;if(!((m=A.value)==null?void 0:m.find(e=>e.node===t.node&&e.runIndex===t.runIndex))){a.value=[];return}a.value=[{node:t.node,runIndex:t.runIndex,data:d({node:t.node,runIndex:t.runIndex},!0,!0)}]}function b(t){const i=T.getNodeByName(t);return i?I.getNodeType(i==null?void 0:i.type):null}function N(){g.value.length&&g.value[0].children.length&&r(g.value[0].children[0])}const h=(t,i,m,e=[])=>{var n,u;return{node:t,id:t,depth:i,startTime:((u=(n=m==null?void 0:m.data)==null?void 0:n.metadata)==null?void 0:u.startTime)??0,runIndex:(m==null?void 0:m.runIndex)??0,children:e}};function q(t,i){var j;const{connectionsByDestinationNode:m}=T.getCurrentWorkflow(),e=m[t],n=((j=A.value)==null?void 0:j.filter(c=>c.node===t))??[];if(!e)return n.map(c=>h(t,i,c));const f=Object.keys(e).filter(c=>c!==_.Main).flatMap(c=>e[c][0].flatMap(M=>q(M.node,i+1)));return n.length?n.map(c=>h(t,i,c,f)):(f.sort((c,M)=>c.startTime-M.startTime),[h(t,i,void 0,f)])}const A=V(()=>{var e;const t=T.getWorkflowResultDataByNodeName(s.node.name);if(!t||!Array.isArray(t))return;const i=(e=t[s.runIndex].metadata)==null?void 0:e.subRun;if(!Array.isArray(i))return;const m=i.flatMap(n=>d(n,!1,!0).map(u=>({...n,data:u})));return m.sort((n,u)=>{var c,M,W,L;const f=((M=(c=n.data)==null?void 0:c.metadata)==null?void 0:M.startTime)||0,j=((L=(W=u.data)==null?void 0:W.metadata)==null?void 0:L.startTime)||0;return f-j}),m}),g=V(()=>{const t=s.node;return q(t.name,0)||[]});return ae(()=>s.runIndex,N,{immediate:!0}),(t,i)=>{const m=R("font-awesome-icon"),e=R("n8n-tooltip"),n=R("n8n-text");return A.value?(y(),k("div",{key:0,class:p(t.$style.container)},[w("div",{class:p({[t.$style.tree]:!0,[t.$style.slim]:t.slim})},[$(E(te),{data:g.value,props:{label:"node"},"default-expand-all":"",indent:12,"expand-on-click-node":!1,"data-test-id":"lm-chat-logs-tree",onNodeClick:r},{default:D(({node:u,data:f})=>[w("div",{class:p({[t.$style.treeNode]:!0,[t.$style.isSelected]:C(f)}),"data-tree-depth":f.depth,style:re({"--item-depth":f.depth})},[f.children.length?(y(),k("button",{key:0,class:p(t.$style.treeToggle),onClick:j=>l(u)},[$(m,{icon:u.expanded?"angle-down":"angle-up"},null,8,["icon"])],10,He)):S("",!0),$(e,{disabled:!t.slim,placement:"right"},{content:D(()=>[x(v(u.label),1)]),default:D(()=>[w("span",{class:p(t.$style.leafLabel)},[$(Q,{"node-type":b(f.node),size:17},null,8,["node-type"]),t.slim?S("",!0):(y(),k("span",{key:0,textContent:v(u.label)},null,8,Le))],2)]),_:2},1032,["disabled"])],14,ze)]),_:1},8,["data"])],2),w("div",{class:p(t.$style.runData)},[a.value.length===0?(y(),k("div",{key:0,class:p(t.$style.empty)},[$(n,{size:"large"},{default:D(()=>[x(v(t.$locale.baseText("ndv.output.ai.empty",{interpolate:{node:s.node.name}})),1)]),_:1})],2)):S("",!0),(y(!0),k(H,null,U(a.value,(u,f)=>(y(),k("div",{key:`${u.node}__${u.runIndex}__index`,"data-test-id":"lm-chat-logs-entry"},[$(We,{"input-data":u,"content-index":f},null,8,["input-data","content-index"])]))),128))],2)],2)):S("",!0)}}}),Je="_treeToggle_gjbqy_5",Fe="_leafLabel_gjbqy_13",Ue="_empty_gjbqy_19",Ke="_title_gjbqy_23",Ge="_tree_gjbqy_5",Qe="_slim_gjbqy_36",Xe="_runData_gjbqy_40",Ye="_container_gjbqy_46",Ze="_isSelected_gjbqy_73",et="_treeNode_gjbqy_77",tt={treeToggle:Je,leafLabel:Fe,empty:Ue,title:Ke,tree:Ge,slim:Qe,runData:Xe,container:Ye,isSelected:Ze,treeNode:et},nt={$style:tt},Nt=J(Pe,[["__cssModules",nt]]);export{Nt as default};
//# sourceMappingURL=RunDataAi-WDp0ZlAg.js.map
