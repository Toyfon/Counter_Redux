(this.webpackJsonpcounter_redux=this.webpackJsonpcounter_redux||[]).push([[0],{28:function(e,t,a){e.exports={container:"settings_container__cCrPE",value:"settings_value__2alja",maxInput:"settings_maxInput__ZV-dP",minInput:"settings_minInput__2XAkr",buttons:"settings_buttons__2Db0X"}},36:function(e,t,a){e.exports={container:"counter_container__YFK4P",value:"counter_value__1mFaD",warning:"counter_warning__1_RI9",redNumber:"counter_redNumber__13lef",buttons:"counter_buttons__1oyHJ",btn:"counter_btn__2yg86"}},75:function(e,t,a){},76:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(21),c=a.n(r),s=(a(75),a(76),a(36)),u=a.n(s),i=a(22),l=a(50),o=a(19),b={value:0,startValue:0,maxValue:3,isDisabled:!1,disableBtn:!0,error:!1},d=Object(l.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_VALUES":return Object(o.a)(Object(o.a)({},e),{},{value:t.value,startValue:t.startValue,maxValue:t.maxValue});case"CHANGE_COUNT":return Object(o.a)(Object(o.a)({},e),{},{value:t.value,error:t.error});case"RESET_COUNT":return Object(o.a)(Object(o.a)({},e),{},{value:e.startValue});case"CHANGE_MAX_VALUE":return Object(o.a)(Object(o.a)({},e),{},{maxValue:t.value,isDisabled:t.isDisabled,disableBtn:t.disableBtn});case"CHANGE_START_VALUE":return Object(o.a)(Object(o.a)({},e),{},{startValue:t.value,isDisabled:t.isDisabled,disableBtn:t.disableBtn});case"SET_VALUE":return Object(o.a)(Object(o.a)({},e),{},{value:e.startValue,isDisabled:t.isDisabled,disableBtn:t.disableBtn,error:t.error});case"SET_ERROR":return Object(o.a)(Object(o.a)({},e),{},{error:t.error});default:return e}}}),j=Object(l.b)(d),x=i.c,O=j,_=function(e){return{type:"SET_ERROR",error:e}},p=a(117),m=a(2),v=function(){var e=x((function(e){return e.counter.value})),t=x((function(e){return e.counter.startValue})),a=x((function(e){return e.counter.maxValue})),r=x((function(e){return e.counter.error})),c=x((function(e){return e.counter.isDisabled})),s=Object(i.b)(),l={backgroundColor:"#07575B",color:"#66A5AD",borderRadius:"20px",boxShadow:"0px 1px 5px 2px #07575B"};return Object(n.useEffect)((function(){s(_(e===a))}),[e]),Object(m.jsxs)("div",{className:u.a.container,children:[Object(m.jsx)("div",{className:u.a.value,children:Object(m.jsx)("h1",{className:r?u.a.redNumber:"",children:a===t||t<0||t>a?Object(m.jsx)("span",{style:{color:"red",fontSize:"30px"},children:'"Incorrect value"'}):e})}),Object(m.jsxs)("div",{className:u.a.buttons,children:[Object(m.jsx)(p.a,{sx:l,variant:"contained",color:"primary",size:"small",disabled:c||e>=a,onClick:function(){!isNaN(+e)&&e<a&&(s(function(e,t){return{type:"CHANGE_COUNT",value:e,error:t}}(+e+1,!1)),localStorage.setItem("counterValue",JSON.stringify(e+1)))},children:"Inc"}),Object(m.jsx)(p.a,{variant:"contained",color:"primary",size:"small",sx:l,disabled:c||e===t,onClick:function(){s({type:"RESET_COUNT"})},children:"Reset"})]})]})},f=a(28),h=a.n(f),N=a(116),g=function(){var e=x((function(e){return e.counter.disableBtn})),t=x((function(e){return e.counter.maxValue})),a=x((function(e){return e.counter.startValue})),n=Object(i.b)();return Object(m.jsxs)("div",{className:h.a.container,children:[Object(m.jsxs)("div",{className:h.a.value,children:[Object(m.jsx)("div",{className:h.a.maxInput,children:Object(m.jsxs)("span",{children:["max value:",Object(m.jsx)(N.a,{variant:"standard",color:t===a||a>t?"error":"primary",value:t,onChange:function(e){!function(e){n(function(e,t,a){return{type:"CHANGE_MAX_VALUE",value:e,isDisabled:!0,disableBtn:!1}}(e)),n(_(!1))}(e.currentTarget.valueAsNumber)},type:"number",sx:{input:{width:"100px",height:"15px"}}})]})}),Object(m.jsx)("div",{className:h.a.minInput,children:Object(m.jsxs)("span",{children:["start value:",Object(m.jsx)(N.a,{variant:"standard",color:t===a||a<0||a>t?"error":"primary",value:a,onChange:function(e){!function(e){n(function(e,t,a){return{type:"CHANGE_START_VALUE",value:e,isDisabled:!0,disableBtn:!1}}(e)),n(_(!1))}(e.currentTarget.valueAsNumber)},type:"number",sx:{input:{width:"100px",height:"15px"}}})]})})]}),Object(m.jsx)("div",{className:h.a.buttons,children:Object(m.jsx)(p.a,{variant:"contained",color:"primary",size:"small",className:h.a.btn,disabled:e,sx:{backgroundColor:"#07575B",color:"#66A5AD",borderRadius:"20px",boxShadow:"0px 1px 5px 2px #07575B"},onClick:function(){n(function(e,t,a){return{type:"SET_VALUE",isDisabled:e,disableBtn:t,error:a}}(!1,!0,!1)),localStorage.setItem("Settings",JSON.stringify({startValue:a,maxValue:t}))},children:"Set"})})]})},V=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){var t,a,n=localStorage.getItem("counterValue"),r=localStorage.getItem("Settings");if(null!==r&&null!==n){var c=JSON.parse(n),s=JSON.parse(r);e((t=s.startValue,a=s.maxValue,{type:"SET_INITIAL_VALUES",startValue:t,maxValue:a,value:c}))}}),[]),Object(m.jsxs)("div",{className:"Wrapper",children:[Object(m.jsx)("div",{className:"table",children:Object(m.jsx)(v,{})}),Object(m.jsx)("div",{children:Object(m.jsx)(g,{})})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,120)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},A=a(60),S=a(119),y=Object(A.a)({palette:{primary:{main:"#07575B"}}});c.a.render(Object(m.jsx)(i.a,{store:O,children:Object(m.jsx)(S.a,{theme:y,children:Object(m.jsx)(V,{})})}),document.getElementById("root")),E()}},[[83,1,2]]]);
//# sourceMappingURL=main.73a358e0.chunk.js.map