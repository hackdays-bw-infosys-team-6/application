(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{290:function(e,t,n){var content=n(299);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(29).default)("5f5c73cc",content,!0,{sourceMap:!1})},298:function(e,t,n){"use strict";var o=n(290);n.n(o).a},299:function(e,t,n){(t=n(28)(!1)).push([e.i,".reject-btn{color:#fff!important}.actions{display:flex;justify-content:space-around;max-width:250px;margin:64px auto 0}.question:first-child{margin-top:100px}.question{margin-top:30vh;margin-bottom:30vh}",""]),e.exports=t},329:function(e,t,n){"use strict";n.r(t);n(45),n(62);var o=n(0).a.extend({layout:"setup",methods:{nextQuestion:function(){this.currentQuestion++,setTimeout((function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}),50)},filterQuestions:function(){return this.questions.slice(0,this.currentQuestion)}},data:function(){return{currentQuestion:1,questions:[{question:"Hi Thomas, we would like to get to know you better",answers:[{label:"No, Thanks",outlined:!0,leave:!0},{label:"Sure"}]},{question:"Are you currently employed?",answers:[{label:"Skip"},{label:"No"},{label:"Yes"}]},{question:"Are you urgently in need of a job?",answers:[{label:"Skip"},{label:"No"},{label:"Yes"}]},{question:"Thank you! We have prepared your profile.",answers:[]}]}}}),l=(n(298),n(44)),r=n(150),c=n.n(r),d=n(287),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",e._l(e.filterQuestions(),(function(t){return n("div",{key:t.question,staticClass:"question"},[n("h1",{staticClass:"title setup-title"},[e._v(e._s(t.question))]),e._v(" "),n("div",{staticClass:"actions"},[e.questions.length!==e.currentQuestion?e._l(t.answers,(function(t){return n("v-btn",{key:t.label,class:{"reject-btn":t.leave},attrs:{depressed:"",elevation:"2",rounded:"",outlined:t.outlined,to:t.leave?"/profile":void 0},on:{click:e.nextQuestion}},[e._v("\n            "+e._s(t.label)+"\n          ")])})):e._e(),e._v(" "),e.questions.length===e.currentQuestion?n("v-btn",{attrs:{depressed:"",elevation:"2",rounded:"",to:"/profile"}},[e._v("View Profile")]):e._e()],2)])})),0)])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a})}}]);