(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("42bf1c40",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var o=n(196);n.n(o).a},198:function(t,e,n){(e=n(73)(!1)).push([t.i,".navigation-links{position:fixed;bottom:0;width:100%;height:32px}",""]),t.exports=e},199:function(t,e,n){"use strict";n.r(e);n(197);var o=n(28),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-links"},[n("nuxt-link",{attrs:{to:"/find-jobs"}},[t._v("Find")]),t._v(" "),n("nuxt-link",{attrs:{to:"/inspirations"}},[t._v("Inspirations")]),t._v(" "),n("nuxt-link",{attrs:{to:"/saved-jobs"}},[t._v("Saved")]),t._v(" "),n("nuxt-link",{attrs:{to:"/learn"}},[t._v("Learn")]),t._v(" "),n("nuxt-link",{attrs:{to:"/profile"}},[t._v("Profile")])],1)}),[],!1,null,null,null);e.default=component.exports},200:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(74).default)("eac2e80c",content,!0,{sourceMap:!1})},204:function(t,e,n){"use strict";var o=n(200);n.n(o).a},205:function(t,e,n){(e=n(73)(!1)).push([t.i,".profile-section{margin-top:32px}.profile-image{border-radius:50%;height:60px;width:60px}",""]),t.exports=e},215:function(t,e,n){"use strict";n.r(e);var o=n(1).a.extend({data:function(){return{showFutureProfile:!1,profile:{name:"Thomas Müller",email:"thomas.m@hotmail.com",workexperience:[{description:"Senior Machine Operator | Schäffler | 2005 - 2020"},{description:"Technician Apprenticeship | FAG | 2002 - 2005"}],skills:["G-code programming","CNC programming","Quality Control","Maintenance & Repair","Welding","Plan Management"],futureSkills:["Rapid tooling","3D printing","Adaptive Manufacturing"],education:["Vocational training in machine technology"],futureEducation:["Generative Design for Additive Manufacturing","Rapid Manufacturing","Designing for 3D Printing with Fusion 360"],suggestedJobs:[{title:"Additive Manufacturing Technican",company:"Tesla",logo:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",location:"Berlin",posted:"3 days ago",liked:!1}]}}},methods:{setShowFutureProfile:function(t){this.showFutureProfile=t}}}),r=(n(204),n(28)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("div",[n("button",{on:{click:function(e){t.showFutureProfile=!1}}},[t._v("Current Profile")]),t._v(" "),n("button",{on:{click:function(e){t.showFutureProfile=!0}}},[t._v("Future Profile")])]),t._v(" "),n("div",[n("img",{staticClass:"profile-image",attrs:{src:"https://image.shutterstock.com/image-photo/portrait-mature-blond-man-smiling-600w-682038574.jpg",alt:"profile"}}),t._v(" "),n("p",[t._v(t._s(t.profile.name))]),t._v(" "),n("p",[t._v(t._s(t.profile.email))])]),t._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[t._v("WORK EXPERIENCE")]),t._v(" "),n("ul",t._l(t.profile.workexperience,(function(e){return n("li",{key:e.description},[t._v(t._s(e.description))])})),0)]),t._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[t._v("SKILLS")]),t._v(" "),n("p",[t._l(t.profile.skills,(function(e){return n("span",{key:e},[t._v(t._s(e))])})),t._v(" "),t.showFutureProfile?t._l(t.profile.futureSkills,(function(e){return n("span",{key:e},[t._v(t._s(e))])})):t._e()],2)]),t._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[t._v("EDUCATION")]),t._v(" "),n("ul",[t._l(t.profile.education,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),t._v(" "),t.showFutureProfile?t._l(t.profile.futureEducation,(function(e){return n("li",{key:e},[t._v(t._s(e))])})):t._e()],2)]),t._v(" "),n("div",{staticClass:"profile-section"},[n("h2",[t._v("SUGGESTED JOBS")]),t._v(" "),n("ul",t._l(t.profile.suggestedJobs,(function(e){return n("li",{key:e.title},[t._v(t._s(e.title))])})),0)])]),t._v(" "),n("Navigation")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(199).default})}}]);