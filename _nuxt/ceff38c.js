(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{204:function(e,t,n){var content=n(209);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("eac2e80c",content,!0,{sourceMap:!1})},208:function(e,t,n){"use strict";var o=n(204);n.n(o).a},209:function(e,t,n){(t=n(36)(!1)).push([e.i,".profile-section{margin-top:32px}.profile-image{border-radius:50%;height:60px;width:60px}",""]),e.exports=t},219:function(e,t,n){"use strict";n.r(t);var o=n(1).a.extend({data:function(){return{showFutureProfile:!1,profile:{name:"Thomas Müller",email:"thomas.m@hotmail.com",workexperience:[{description:"Senior Machine Operator | Schäffler | 2005 - 2020"},{description:"Technician Apprenticeship | FAG | 2002 - 2005"}],skills:["G-code programming","CNC programming","Quality Control","Maintenance & Repair","Welding","Plan Management"],futureSkills:["Rapid tooling","3D printing","Adaptive Manufacturing"],education:["Vocational training in machine technology"],futureEducation:["Generative Design for Additive Manufacturing","Rapid Manufacturing","Designing for 3D Printing with Fusion 360"],suggestedJobs:[{title:"Additive Manufacturing Technican",company:"Tesla",logo:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",location:"Berlin",posted:"3 days ago",liked:!1}]}}},methods:{setShowFutureProfile:function(e){this.showFutureProfile=e}}}),r=(n(208),n(15)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("div",[n("button",{on:{click:function(t){e.showFutureProfile=!1}}},[e._v("Current Profile")]),e._v(" "),n("button",{on:{click:function(t){e.showFutureProfile=!0}}},[e._v("Future Profile")])]),e._v(" "),n("div",[n("img",{staticClass:"profile-image",attrs:{src:"https://image.shutterstock.com/image-photo/portrait-mature-blond-man-smiling-600w-682038574.jpg",alt:"profile"}}),e._v(" "),n("p",[e._v(e._s(e.profile.name))]),e._v(" "),n("p",[e._v(e._s(e.profile.email))])]),e._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[e._v("WORK EXPERIENCE")]),e._v(" "),n("ul",e._l(e.profile.workexperience,(function(t){return n("li",{key:t.description},[e._v(e._s(t.description))])})),0)]),e._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[e._v("SKILLS")]),e._v(" "),n("p",[e._l(e.profile.skills,(function(t){return n("span",{key:t},[e._v(e._s(t))])})),e._v(" "),e.showFutureProfile?e._l(e.profile.futureSkills,(function(t){return n("span",{key:t},[e._v(e._s(t))])})):e._e()],2)]),e._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[e._v("EDUCATION")]),e._v(" "),n("ul",[e._l(e.profile.education,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),e._v(" "),e.showFutureProfile?e._l(e.profile.futureEducation,(function(t){return n("li",{key:t},[e._v(e._s(t))])})):e._e()],2)]),e._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[e._v("SUGGESTED JOBS")]),e._v(" "),n("ul",e._l(e.profile.suggestedJobs,(function(t){return n("li",{key:t.title},[e._v(e._s(t.title))])})),0)])])])}),[],!1,null,null,null);t.default=component.exports}}]);