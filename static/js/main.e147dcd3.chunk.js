(this.webpackJsonpcounter_redux=this.webpackJsonpcounter_redux||[]).push([[0],{27:function(e,t,a){e.exports={container:"settings_container__cCrPE",value:"settings_value__2alja",maxInput:"settings_maxInput__ZV-dP",minInput:"settings_minInput__2XAkr",buttons:"settings_buttons__2Db0X",errValue:"settings_errValue__34fXa"}},36:function(e,t,a){e.exports={container:"counter_container__YFK4P",value:"counter_value__1mFaD",buttons:"counter_buttons__1oyHJ",errValue:"counter_errValue__192lF"}},75:function(e,t,a){},76:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(21),c=a.n(r),u=(a(75),a(76),a(36)),s=a.n(u),l=a(22),i=a(50),o=a(16),b={value:0,startValue:0,maxValue:3,isDisabled:!1,disableBtn:!0,error:!1},d=function(e){return{type:"SET_ERROR",payload:{error:e}}},j=Object(i.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_VALUES":case"CHANGE_COUNT":return Object(o.a)(Object(o.a)({},e),t.payload);case"RESET_COUNT":return Object(o.a)(Object(o.a)({},e),{},{value:e.startValue});case"CHANGE_MAX_VALUE":return Object(o.a)(Object(o.a)(Object(o.a)({},e),t.payload),{},{value:"enter values"});case"CHANGE_START_VALUE":return Object(o.a)(Object(o.a)(Object(o.a)({},e),t.payload),{},{value:"enter values "});case"SET_VALUE":return Object(o.a)(Object(o.a)({},e),{},{value:e.startValue},t.payload);case"SET_ERROR":return Object(o.a)(Object(o.a)({},e),t.payload);default:return e}}}),p=Object(i.b)(j),x=l.c,O=p,v=a(117),_=a(2),m=function(){var e=x((function(e){return e.counter.value})),t=x((function(e){return e.counter.startValue})),a=x((function(e){return e.counter.maxValue})),r=x((function(e){return e.counter.error})),c=x((function(e){return e.counter.isDisabled})),u=Object(l.b)(),i={backgroundColor:"#07575B",color:"#66A5AD",borderRadius:"20px",boxShadow:"0px 1px 5px 2px #07575B"};Object(n.useEffect)((function(){u(d(e===a))}),[e]);var o=a===t||t<0||t>a;return Object(_.jsxs)("div",{className:s.a.container,children:[Object(_.jsx)("div",{className:r?s.a.errValue:s.a.value,children:Object(_.jsx)("h1",{children:o?Object(_.jsx)("span",{style:{color:"red",fontSize:"30px",fontWeight:"lighter"},children:"Incorrect value"}):e})}),Object(_.jsxs)("div",{className:s.a.buttons,children:[Object(_.jsx)(v.a,{sx:i,variant:"contained",color:"primary",size:"small",disabled:c||e>=a,onClick:function(){e<a&&(u(function(e,t){return{type:"CHANGE_COUNT",payload:{value:e,error:t}}}(+e+1,!1)),localStorage.setItem("counterValue",JSON.stringify(+e+1)))},children:"Inc"}),Object(_.jsx)(v.a,{variant:"contained",color:"primary",size:"small",sx:i,disabled:c||e===t,onClick:function(){u({type:"RESET_COUNT"})},children:"Reset"})]})]})},f=a(27),h=a.n(f),g=a(116),V=function(){var e=x((function(e){return e.counter.disableBtn})),t=x((function(e){return e.counter.maxValue})),a=x((function(e){return e.counter.startValue})),n=Object(l.b)(),r=t===a||a>t||a<0;return Object(_.jsxs)("div",{className:h.a.container,children:[Object(_.jsxs)("div",{className:r?h.a.errValue:h.a.value,children:[Object(_.jsx)("div",{className:h.a.maxInput,children:Object(_.jsxs)("span",{children:["max value:",Object(_.jsx)(g.a,{variant:"standard",color:"primary",value:t,onChange:function(e){var t=e.currentTarget.valueAsNumber;n(function(e,t,a){return{type:"CHANGE_MAX_VALUE",payload:{maxValue:e,isDisabled:t,disableBtn:a}}}(t,!0,!1)),n(d(!1))},type:"number",sx:{input:{width:"60px",height:"15px"}}})]})}),Object(_.jsx)("div",{className:h.a.minInput,children:Object(_.jsxs)("span",{children:["start value:",Object(_.jsx)(g.a,{variant:"standard",color:"primary",value:a,onChange:function(e){var t=e.currentTarget.valueAsNumber;n(function(e,t,a){return{type:"CHANGE_START_VALUE",payload:{startValue:e,isDisabled:t,disableBtn:a}}}(t,!0,!1)),n(d(!1))},type:"number",sx:{input:{width:"60px",height:"15px"}}})]})})]}),Object(_.jsx)("div",{className:h.a.buttons,children:Object(_.jsx)(v.a,{variant:"contained",color:"primary",size:"small",className:h.a.btn,disabled:e,sx:{backgroundColor:"#07575B",color:"#66A5AD",borderRadius:"20px",boxShadow:"0px 1px 5px 2px #07575B"},onClick:function(){n(function(e,t,a){return{type:"SET_VALUE",payload:{isDisabled:e,disableBtn:t,error:a}}}(!1,!0,!1)),localStorage.setItem("Settings",JSON.stringify({startValue:a,maxValue:t}))},children:"Set"})})]})},y=function(){var e=Object(l.b)();return Object(n.useEffect)((function(){var t,a,n=localStorage.getItem("counterValue"),r=localStorage.getItem("Settings");if(null!==r&&null!==n){var c=JSON.parse(n),u=JSON.parse(r);e((t=u.startValue,a=u.maxValue,{type:"SET_INITIAL_VALUES",payload:{startValue:t,maxValue:a,value:c}}))}}),[]),Object(_.jsxs)("div",{className:"Wrapper",children:[Object(_.jsx)("div",{className:"table",children:Object(_.jsx)(m,{})}),Object(_.jsx)("div",{children:Object(_.jsx)(V,{})})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,u=t.getTTFB;a(e),n(e),r(e),c(e),u(e)}))},N=a(60),A=a(119),S=Object(N.a)({palette:{primary:{main:"#07575B"}}});c.a.render(Object(_.jsx)(l.a,{store:O,children:Object(_.jsx)(A.a,{theme:S,children:Object(_.jsx)(y,{})})}),document.getElementById("root")),E()}},[[83,1,2]]]);
//# sourceMappingURL=main.e147dcd3.chunk.js.map