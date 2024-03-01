import{u as X,e as j,x as J,a6 as U,_ as Y}from"./n8n-_nNvRoCf.js";import{c as ee,e as te,C as se,a as oe}from"./index-xP-VuMjv.js";import{G as ne,r as re,e as V,b as ae,Z as ce,ag as g,l as m,m as C,T as c,O as a,S as y,R as r,u as s,p as n,I as l,M as _,Q as h}from"./vendor-NNwioulI.js";import"./lodash-es-5z_C16pm.js";import"./axios-s2RMMPhA.js";import"./flatted-jPn12Tq4.js";import"./esprima-next-ulPLCZ1Z.js";import"./luxon-ZRIU05qF.js";import"./pinia-aUqqC48i.js";import"./@vueuse/core-8g26_cc0.js";import"./uuid-McvpxQtQ.js";import"./vue-i18n-1PEMRmUU.js";import"./@n8n/permissions-8yMqUF1Y.js";import"./@n8n/codemirror-lang-sql-feLn5IS9.js";import"./@lezer/common-1hBQ1gIF.js";import"./codemirror-lang-html-n8n-wWQLhhqk.js";import"./prettier-s3fE3Qyr.js";import"./@jsplumb/util-DR0SB56A.js";import"./@jsplumb/core-MKwKlGip.js";import"./@jsplumb/common-Q5_tv_GT.js";import"./@jsplumb/connector-bezier-3dWY17R5.js";import"./@jsplumb/browser-ui-AlqFM-P6.js";import"./codemirror-lang-n8n-expression-HpIZnV_9.js";import"./fast-json-stable-stringify-eHEaCv8s.js";import"./timeago.js--Bumj2r9.js";import"./qrcode.vue-UdCmS1Sj.js";import"./vue3-touch-events-_RfbPMOD.js";import"./chart.js-JtqvIvkt.js";const le={key:0,"data-test-id":"source-control-content-licensed"},ie=["href"],ue={for:"repoUrl"},pe=["href"],de={key:2,"data-test-id":"source-control-connected-content"},ge=n("hr",null,null,-1),me=["href"],ye=ne({__name:"SettingsSourceControl",setup(we){const e=J(),o=ee(),w=X(),p=j(),S=oe(),b=te(),d=re(!1),K=V(()=>o.preferences.branches.map(t=>({value:t,label:t}))),E=async()=>{b.startLoading(),b.setLoadingText(e.baseText("settings.sourceControl.loading.connecting"));try{await o.savePreferences({repositoryUrl:o.preferences.repositoryUrl}),await o.getBranches(),d.value=!0,p.showMessage({title:e.baseText("settings.sourceControl.toast.connected.title"),message:e.baseText("settings.sourceControl.toast.connected.message"),type:"success"})}catch(t){p.showError(t,e.baseText("settings.sourceControl.toast.connected.error"))}b.stopLoading()},I=async()=>{try{await S.confirm(e.baseText("settings.sourceControl.modals.disconnect.message"),e.baseText("settings.sourceControl.modals.disconnect.title"),{confirmButtonText:e.baseText("settings.sourceControl.modals.disconnect.confirm"),cancelButtonText:e.baseText("settings.sourceControl.modals.disconnect.cancel")})===U&&(b.startLoading(),await o.disconnect(!0),d.value=!1,p.showMessage({title:e.baseText("settings.sourceControl.toast.disconnected.title"),message:e.baseText("settings.sourceControl.toast.disconnected.message"),type:"success"}))}catch(t){p.showError(t,e.baseText("settings.sourceControl.toast.disconnected.error"))}b.stopLoading()},$=async()=>{b.startLoading();try{await o.updatePreferences({branchName:o.preferences.branchName,branchReadOnly:o.preferences.branchReadOnly,branchColor:o.preferences.branchColor}),p.showMessage({title:e.baseText("settings.sourceControl.saved.title"),type:"success"})}catch(t){p.showError(t,"Error setting branch")}b.stopLoading()},z=async t=>{t!==o.preferences.branchName&&(o.preferences.branchName=t)},N=()=>{w.goToUpgrade("source-control","upgrade-source-control")},R=async()=>{await o.getPreferences(),o.preferences.connected&&(d.value=!0,o.getBranches())};ae(async()=>{await R()});const B=ce({repoUrl:!1,keyGeneratorType:!1});function T(t,i){B[t]=i}const M=[{name:"REQUIRED"},{name:"MATCH_REGEX",config:{regex:/^(ssh:\/\/)?git@(?:\[[0-9a-fA-F:]+\]|(?:[a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+)(?::[0-9]+)*:(?:v[0-9]+\/)?[a-zA-Z0-9_.\-\/]+(\.git)?(?:\/[a-zA-Z0-9_.\-\/]+)*$/,message:e.baseText("settings.sourceControl.repoUrlInvalid")}}],q=[{name:"REQUIRED"}],O=V(()=>B.repoUrl),G=[{name:"REQUIRED"}];async function L(){try{await S.confirm(e.baseText("settings.sourceControl.modals.refreshSshKey.message"),e.baseText("settings.sourceControl.modals.refreshSshKey.title"),{confirmButtonText:e.baseText("settings.sourceControl.modals.refreshSshKey.confirm"),cancelButtonText:e.baseText("settings.sourceControl.modals.refreshSshKey.cancel")})===U&&(await o.generateKeyPair(o.preferences.keyGeneratorType),p.showMessage({title:e.baseText("settings.sourceControl.refreshSshKey.successful.title"),type:"success"}))}catch(t){p.showError(t,e.baseText("settings.sourceControl.refreshSshKey.error.title"))}}const D=async()=>{try{await o.getBranches(),p.showMessage({title:e.baseText("settings.sourceControl.refreshBranches.success"),type:"success"})}catch(t){p.showError(t,e.baseText("settings.sourceControl.refreshBranches.error"))}},A=async t=>{t!==o.preferences.keyGeneratorType&&(o.preferences.keyGeneratorType=t)};return(t,i)=>{const x=g("n8n-heading"),v=g("i18n-t"),F=g("n8n-callout"),k=g("n8n-form-input"),f=g("n8n-button"),P=g("n8n-notice"),Z=g("n8n-tooltip"),Q=g("n8n-checkbox"),H=g("n8n-color-picker"),W=g("n8n-action-box");return m(),C("div",null,[c(x,{size:"2xlarge",tag:"h1"},{default:a(()=>[y(r(s(e).baseText("settings.sourceControl.title")),1)]),_:1}),s(o).isEnterpriseSourceControlEnabled?(m(),C("div",le,[c(F,{theme:"secondary",icon:"info-circle",class:"mt-2xl mb-l"},{default:a(()=>[c(v,{keypath:"settings.sourceControl.description",tag:"span"},{link:a(()=>[n("a",{href:s(e).baseText("settings.sourceControl.docs.url"),target:"_blank"},r(s(e).baseText("settings.sourceControl.description.link")),9,ie)]),_:1})]),_:1}),c(x,{size:"xlarge",tag:"h2",class:"mb-s"},{default:a(()=>[y(r(s(e).baseText("settings.sourceControl.gitConfig")),1)]),_:1}),n("div",{class:l(t.$style.group)},[n("label",ue,r(s(e).baseText("settings.sourceControl.repoUrl")),1),n("div",{class:l(t.$style.groupFlex)},[c(k,{id:"repoUrl",modelValue:s(o).preferences.repositoryUrl,"onUpdate:modelValue":i[0]||(i[0]=u=>s(o).preferences.repositoryUrl=u),label:"",class:"ml-0",name:"repoUrl","validate-on-blur":"","validation-rules":M,disabled:d.value,placeholder:s(e).baseText("settings.sourceControl.repoUrlPlaceholder"),onValidate:i[1]||(i[1]=u=>T("repoUrl",u))},null,8,["modelValue","disabled","placeholder"]),d.value?(m(),_(f,{key:0,class:l(t.$style.disconnectButton),type:"tertiary",size:"large",icon:"trash","data-test-id":"source-control-disconnect-button",onClick:I},{default:a(()=>[y(r(s(e).baseText("settings.sourceControl.button.disconnect")),1)]),_:1},8,["class"])):h("",!0)],2)],2),s(o).preferences.publicKey?(m(),C("div",{key:0,class:l(t.$style.group)},[n("label",null,r(s(e).baseText("settings.sourceControl.sshKey")),1),n("div",{class:l({[t.$style.sshInput]:!d.value})},[d.value?h("",!0):(m(),_(k,{key:0,id:"keyGeneratorType",class:l(t.$style.sshKeyTypeSelect),label:"",type:"select",name:"keyGeneratorType","data-test-id":"source-control-ssh-key-type-select","validate-on-blur":"","validation-rules":q,options:s(o).sshKeyTypesWithLabel,"model-value":s(o).preferences.keyGeneratorType,onValidate:i[2]||(i[2]=u=>T("keyGeneratorType",u)),"onUpdate:modelValue":A},null,8,["class","options","model-value"])),c(se,{class:l(t.$style.copyInput),collapse:"",size:"medium",value:s(o).preferences.publicKey,"copy-button-text":s(e).baseText("generic.clickToCopy")},null,8,["class","value","copy-button-text"]),d.value?h("",!0):(m(),_(f,{key:1,size:"large",type:"tertiary",icon:"sync","data-test-id":"source-control-refresh-ssh-key-button",onClick:L},{default:a(()=>[y(r(s(e).baseText("settings.sourceControl.refreshSshKey")),1)]),_:1}))],2),c(P,{type:"info",class:"mt-s"},{default:a(()=>[c(v,{keypath:"settings.sourceControl.sshKeyDescription",tag:"span"},{link:a(()=>[n("a",{href:s(e).baseText("settings.sourceControl.docs.setup.ssh.url"),target:"_blank"},r(s(e).baseText("settings.sourceControl.sshKeyDescriptionLink")),9,pe)]),_:1})]),_:1})],2)):h("",!0),d.value?h("",!0):(m(),_(f,{key:1,size:"large",disabled:!O.value,class:l(t.$style.connect),"data-test-id":"source-control-connect-button",onClick:E},{default:a(()=>[y(r(s(e).baseText("settings.sourceControl.button.connect")),1)]),_:1},8,["disabled","class"])),d.value?(m(),C("div",de,[n("div",{class:l(t.$style.group)},[ge,c(x,{size:"xlarge",tag:"h2",class:"mb-s"},{default:a(()=>[y(r(s(e).baseText("settings.sourceControl.instanceSettings")),1)]),_:1}),n("label",null,r(s(e).baseText("settings.sourceControl.branches")),1),n("div",{class:l(t.$style.branchSelection)},[c(k,{id:"branchName",label:"",type:"select",name:"branchName",class:"mb-s","data-test-id":"source-control-branch-select","validate-on-blur":"","validation-rules":G,options:K.value,"model-value":s(o).preferences.branchName,onValidate:i[3]||(i[3]=u=>T("branchName",u)),"onUpdate:modelValue":z},null,8,["options","model-value"]),c(Z,{placement:"top"},{content:a(()=>[n("span",null,r(s(e).baseText("settings.sourceControl.refreshBranches.tooltip")),1)]),default:a(()=>[c(f,{size:"small",type:"tertiary",icon:"sync",square:"",class:l(t.$style.refreshBranches),"data-test-id":"source-control-refresh-branches-button",onClick:D},null,8,["class"])]),_:1})],2),c(Q,{modelValue:s(o).preferences.branchReadOnly,"onUpdate:modelValue":i[4]||(i[4]=u=>s(o).preferences.branchReadOnly=u),class:l(t.$style.readOnly)},{default:a(()=>[c(v,{keypath:"settings.sourceControl.protected",tag:"span"},{bold:a(()=>[n("strong",null,r(s(e).baseText("settings.sourceControl.protected.bold")),1)]),_:1})]),_:1},8,["modelValue","class"])],2),n("div",{class:l(t.$style.group)},[n("label",null,r(s(e).baseText("settings.sourceControl.color")),1),n("div",null,[c(H,{modelValue:s(o).preferences.branchColor,"onUpdate:modelValue":i[5]||(i[5]=u=>s(o).preferences.branchColor=u),size:"small"},null,8,["modelValue"])])],2),n("div",{class:l([t.$style.group,"pt-s"])},[c(f,{size:"large",disabled:!s(o).preferences.branchName,"data-test-id":"source-control-save-settings-button",onClick:$},{default:a(()=>[y(r(s(e).baseText("settings.sourceControl.button.save")),1)]),_:1},8,["disabled"])],2)])):h("",!0)])):(m(),_(W,{key:1,"data-test-id":"source-control-content-unlicensed",class:l(t.$style.actionBox),description:s(e).baseText("settings.sourceControl.actionBox.description"),"button-text":s(e).baseText("settings.sourceControl.actionBox.buttonText"),"onClick:button":N},{heading:a(()=>[n("span",null,r(s(e).baseText("settings.sourceControl.actionBox.title")),1)]),description:a(()=>[y(r(s(e).baseText("settings.sourceControl.actionBox.description"))+" ",1),n("a",{href:s(e).baseText("settings.sourceControl.docs.url"),target:"_blank"},r(s(e).baseText("settings.sourceControl.actionBox.description.link")),9,me)]),_:1},8,["class","description","button-text"]))])}}}),be="_group_1qvoi_5",he="_readOnly_1qvoi_26",fe="_groupFlex_1qvoi_30",_e="_connect_1qvoi_44",Ce="_disconnectButton_1qvoi_48",Te="_actionBox_1qvoi_53",xe="_sshInput_1qvoi_57",ve="_copyInput_1qvoi_68",ke="_sshKeyTypeSelect_1qvoi_72",Se="_branchSelection_1qvoi_80",Be="_refreshBranches_1qvoi_89",Ue={group:be,readOnly:he,groupFlex:fe,connect:_e,disconnectButton:Ce,actionBox:Te,sshInput:xe,copyInput:ve,sshKeyTypeSelect:ke,branchSelection:Se,refreshBranches:Be},Ve={$style:Ue},nt=Y(ye,[["__cssModules",Ve]]);export{nt as default};
//# sourceMappingURL=SettingsSourceControl-Z8h7BFIG.js.map
