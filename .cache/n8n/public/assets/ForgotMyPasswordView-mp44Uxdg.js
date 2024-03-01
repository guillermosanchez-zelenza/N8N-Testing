import{A as i}from"./AuthView-kdo3aJG-.js";import{e as a,f as n,l as m,_ as p}from"./n8n-_nNvRoCf.js";import{m as l}from"./pinia-aUqqC48i.js";import{G as c,ag as u,l as d,M as f}from"./vendor-NNwioulI.js";import"./index-xP-VuMjv.js";import"./@n8n/codemirror-lang-sql-feLn5IS9.js";import"./@lezer/common-1hBQ1gIF.js";import"./codemirror-lang-html-n8n-wWQLhhqk.js";import"./prettier-s3fE3Qyr.js";import"./@jsplumb/util-DR0SB56A.js";import"./@jsplumb/core-MKwKlGip.js";import"./@jsplumb/common-Q5_tv_GT.js";import"./@jsplumb/connector-bezier-3dWY17R5.js";import"./lodash-es-5z_C16pm.js";import"./@jsplumb/browser-ui-AlqFM-P6.js";import"./uuid-McvpxQtQ.js";import"./luxon-ZRIU05qF.js";import"./esprima-next-ulPLCZ1Z.js";import"./@vueuse/core-8g26_cc0.js";import"./codemirror-lang-n8n-expression-HpIZnV_9.js";import"./fast-json-stable-stringify-eHEaCv8s.js";import"./timeago.js--Bumj2r9.js";import"./qrcode.vue-UdCmS1Sj.js";import"./vue3-touch-events-_RfbPMOD.js";import"./chart.js-JtqvIvkt.js";import"./axios-s2RMMPhA.js";import"./flatted-jPn12Tq4.js";import"./vue-i18n-1PEMRmUU.js";import"./@n8n/permissions-8yMqUF1Y.js";const g=c({name:"ForgotMyPasswordView",components:{AuthView:i},setup(){return{...a()}},data(){return{loading:!1}},computed:{...l(m,n),formConfig(){const t=[{name:"email",properties:{label:this.$locale.baseText("auth.email"),type:"email",required:!0,validationRules:[{name:"VALID_EMAIL"}],autocomplete:"email",capitalize:!0}}],o=[{name:"no-smtp-warning",properties:{label:this.$locale.baseText("forgotPassword.noSMTPToSendEmailWarning"),type:"info"}}],e={title:this.$locale.baseText("forgotPassword.recoverPassword"),redirectText:this.$locale.baseText("forgotPassword.returnToSignIn"),redirectLink:"/signin"};return this.settingsStore.isSmtpSetup?{...e,buttonText:this.$locale.baseText("forgotPassword.getRecoveryLink"),inputs:t}:{...e,inputs:o}}},methods:{async onSubmit(t){try{this.loading=!0,await this.usersStore.sendForgotPasswordEmail(t),this.showMessage({type:"success",title:this.$locale.baseText("forgotPassword.recoveryEmailSent"),message:this.$locale.baseText("forgotPassword.emailSentIfExists",{interpolate:{email:t.email}})})}catch(o){let e=this.$locale.baseText("forgotPassword.smtpErrorContactAdministrator");if(o.httpStatusCode){const{httpStatusCode:s}=o;s===429?e=this.$locale.baseText("forgotPassword.tooManyRequests"):o.httpStatusCode===422&&(e=this.$locale.baseText(o.message)),this.showMessage({type:"error",title:this.$locale.baseText("forgotPassword.sendingEmailError"),message:e})}}this.loading=!1}}});function h(t,o,e,s,S,w){const r=u("AuthView");return d(),f(r,{form:t.formConfig,"form-loading":t.loading,onSubmit:t.onSubmit},null,8,["form","form-loading","onSubmit"])}const J=p(g,[["render",h]]);export{J as default};
//# sourceMappingURL=ForgotMyPasswordView-mp44Uxdg.js.map
