(function(e){function t(t){for(var a,o,i=t[0],u=t[1],l=t[2],p=0,f=[];p<i.length;p++)o=i[p],n[o]&&f.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"100d":function(e,t,r){},"51e1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("a026"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"right-align login"},[r("b-form",{attrs:{inline:""}},[r("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputName2"}},[e._v("User Name")]),r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{id:"inlineFormInputName2",placeholder:"User Name"}}),r("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroupUsername2"}},[e._v("Password")]),r("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[r("b-input",{attrs:{id:"inlineFormInputGroupUsername2",placeholder:"Password"}})],1),r("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e._v("Remember me")]),r("b-button",{attrs:{variant:"primary"}},[e._v("Login")])],1)],1),e._m(0),r("router-view")],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"brand"},[r("a",{attrs:{href:""}},[e._v("Quizr")])])}],o={name:"app"},i=o,u=(r("034f"),r("2877")),l=Object(u["a"])(i,n,s,!1,null,null,null),c=l.exports,p=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"quiz-writer"},[r("b-container",[r("h2",[e._v("Input")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.processText(t)}}},[r("label",{attrs:{for:"myFile"}},[r("p",[e._v("Choose File or paste text")]),r("input",{attrs:{type:"file",id:"myFile"}})]),r("b-form-textarea",{staticClass:"input-content",attrs:{id:"textarea1",placeholder:"Enter content to turn into quiz",rows:5,"max-rows":50},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),r("b-form-group",{attrs:{label:"Choose type of quiz question:"}},[r("b-form-checkbox-group",{attrs:{id:"type",name:"type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("b-form-checkbox",{attrs:{value:"fillin"}},[e._v("Fill in the blank")]),r("b-form-checkbox",{attrs:{value:"multichoice"}},[e._v("Multiple Choice")]),r("b-form-checkbox",{attrs:{value:"shortanswer"}},[e._v("Short Answer")])],1)],1),r("b-form-group",{attrs:{label:"Choose catagory:"}},[r("b-form-select",{staticClass:"mb-3 category-select",model:{value:e.category,callback:function(t){e.category=t},expression:"category"}},[r("option",{domProps:{value:null}},[e._v("Please select an option")]),r("option",{attrs:{value:"definitions"}},[e._v("Definitions")]),r("option",{attrs:{value:"activities"}},[e._v("Activities")]),r("option",{attrs:{value:"events/dates"}},[e._v("Events/Dates")]),r("option",{attrs:{value:"glossary"}},[e._v("Glossary")])])],1),r("div",[r("b-button",{attrs:{type:"submit",variant:"primary",size:"lg"}},[e._v("Create Quiz")])],1)],1)])],1)},m=[],d={name:"QuizWriter",data(){return{results:null,errors:[],text:"",quiz:"",type:"",category:"null"}},methods:{processText(){this.quiz=[{question:"One early example of a machine that could reproduce sets of instructions is the Jacquard Loom, invented by ____________ in 1804.\n",answer:"Joseph Marie Jacquard"},{question:"Later in the 19th Century, ____________ came up with the idea of the Difference Engine, which was a calculation device specifically designed to solve polynomial equations.",answer:"Charles Babbage"}],this.$router.push({name:"quiz",params:{results:this.quiz}})}}},v=d,b=(r("d9a5"),Object(u["a"])(v,f,m,!1,null,"a1eefe90",null)),h=b.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"quiz"},[r("b-container",[r("h2",[e._v("Quiz")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.gradeQuiz(t)}}},[r("ul",e._l(e.results,function(t,a){return r("li",{key:a},[r("p",[e._v(e._s(a+1)+". "+e._s(t.question))]),r("p",[r("b-form-input",{attrs:{type:"text",placeholder:"Enter answer"},model:{value:e.answers[a],callback:function(t){e.$set(e.answers,a,t)},expression:"answers[index]"}})],1),r("p",{directives:[{name:"show",rawName:"v-show",value:0===e.grade[a],expression:"grade[index] ===  0"}]},[r("i",{staticClass:"fas fa-times"})]),r("p",{directives:[{name:"show",rawName:"v-show",value:1===e.grade[a],expression:"grade[index] ===  1"}]},[r("i",{staticClass:"fas fa-check"})])])}),0),r("b-button",{staticClass:"submit",attrs:{type:"submit"}},[e._v("Submit")])],1)])],1)},y=[],g={name:"Quiz",data(){return{errors:[],results:null,answers:[],grade:[]}},mounted:function(){this.results=this.$route.params.results},methods:{gradeQuiz(){this.answers.forEach((e,t)=>{this.$route.params.results[t].answer.trim().toLowerCase()===e.trim().toLowerCase()?this.grade[t]=1:this.grade[t]=0}),console.log(this.grade)}}},w=g,x=(r("7b9a"),Object(u["a"])(w,_,y,!1,null,"e0ac4fa6",null)),C=x.exports;a["a"].use(p["a"]);var z=new p["a"]({routes:[{path:"/",name:"quizwriter",component:h},{path:"/quiz",name:"quiz",component:C,props:!0}]}),q=r("9f7b");r("f9e3"),r("2dd8");a["a"].use(q["a"]),a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:z,template:"<App/>",components:{App:c}})},"64a9":function(e,t,r){},"7b9a":function(e,t,r){"use strict";var a=r("100d"),n=r.n(a);n.a},d9a5:function(e,t,r){"use strict";var a=r("51e1"),n=r.n(a);n.a}});
//# sourceMappingURL=app.a3eeb31a.js.map