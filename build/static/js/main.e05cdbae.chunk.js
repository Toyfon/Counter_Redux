(this.webpackJsonpcounter_redux=this.webpackJsonpcounter_redux||[]).push([[0],{10:function(e,t,n){e.exports={container:"counter_container__YFK4P",value:"counter_value__1mFaD",warning:"counter_warning__1_RI9",redNumber:"counter_redNumber__13lef",buttons:"counter_buttons__1oyHJ",btn:"counter_btn__2yg86"}},32:function(e,t,n){},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(15),c=n.n(a),s=(n(32),n(33),n(10)),u=n.n(s),i=n(8),l=n(19),o=n(6),b="CHANGE_COUNT",d="RESET_COUNT",j="CHANGE_MAX_VALUE",_="CHANGE_START_VALUE",v="SET_VALUE",O="SET_ERROR",m=function(e){return{type:O,error:e}},x={value:0,startValue:0,maxValue:5,isDisabled:!1,disableBtn:!0,error:!1},f=Object(l.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(o.a)(Object(o.a)({},e),{},{value:t.value,error:t.error});case d:return Object(o.a)(Object(o.a)({},e),{},{value:e.startValue,error:e.error});case j:return Object(o.a)(Object(o.a)({},e),{},{maxValue:t.value,isDisabled:t.isDisabled,disableBtn:t.disableBtn});case _:return Object(o.a)(Object(o.a)({},e),{},{startValue:t.value,isDisabled:t.isDisabled,disableBtn:t.disableBtn});case v:return Object(o.a)(Object(o.a)({},e),{},{value:e.startValue,isDisabled:t.isDisabled,disableBtn:t.disableBtn,error:t.error});case O:return Object(o.a)(Object(o.a)({},e),{},{error:t.error});default:return e}}}),p=Object(l.b)(f),h=i.c,N=p,g=n(49),V=n(2),E=function(){var e=h((function(e){return e.counter.value})),t=h((function(e){return e.counter.startValue})),n=h((function(e){return e.counter.maxValue})),a=h((function(e){return e.counter.error})),c=h((function(e){return e.counter.isDisabled})),s=Object(i.b)();return Object(r.useEffect)((function(){console.log(a),s(m(e===n))}),[e]),Object(V.jsxs)("div",{className:u.a.container,children:[Object(V.jsx)("div",{className:u.a.value,children:Object(V.jsx)("h1",{className:a?u.a.redNumber:"",children:n===t||t<0||t>n?Object(V.jsx)("span",{style:{color:"red",fontSize:"30px"},children:'"Incorrect value"'}):e})}),Object(V.jsxs)("div",{className:u.a.buttons,children:[Object(V.jsx)(g.a,{variant:"contained",color:"secondary",size:"small",className:u.a.btn,disabled:c||e>=n,onClick:function(){!isNaN(+e)&&e<n&&s(function(e,t){return{type:b,value:e,error:t}}(+e+1,!1))},name:"Inc",children:"Inc"}),Object(V.jsx)(g.a,{variant:"outlined",color:"secondary",size:"small",className:u.a.btn,disabled:c||e===t,onClick:function(){s({type:d})},name:"Inc",children:"Reset"})]})]})},B=n(7),y=n.n(B),D=n(25),C=function(e){var t=e.value,n=e.callBack,r=(e.error,e.maxValue),a=e.startValue,c=(Object(D.a)(e,["value","callBack","error","maxValue","startValue"]),r===a||a<0||a>r?y.a.inputError:"");return Object(V.jsx)("input",{className:c,type:"number",value:t,onChange:function(e){var t=e.currentTarget.valueAsNumber;n(t)}})},I=function(){var e=h((function(e){return e.counter.disableBtn})),t=h((function(e){return e.counter.maxValue})),n=h((function(e){return e.counter.startValue})),r=h((function(e){return e.counter.error})),a=Object(i.b)();return Object(V.jsxs)("div",{className:y.a.container,children:[Object(V.jsxs)("div",{className:y.a.value,children:[Object(V.jsx)("div",{className:y.a.maxInput,children:Object(V.jsxs)("span",{children:["max value:",Object(V.jsx)(C,{value:t,callBack:function(e){a(function(e,t,n){return{type:j,value:e,isDisabled:t,disableBtn:n}}(e,!0,!1)),a(m(!1))},error:r,maxValue:t,startValue:n})]})}),Object(V.jsx)("div",{className:y.a.minInput,children:Object(V.jsxs)("span",{children:["start value:",Object(V.jsx)(C,{value:n,callBack:function(e){a(function(e,t,n){return{type:_,value:e,isDisabled:t,disableBtn:n}}(e,!0,!1)),a(m(!1))},error:r,maxValue:t,startValue:n})]})})]}),Object(V.jsx)("div",{className:y.a.buttons,children:Object(V.jsx)(g.a,{variant:"outlined",color:"error",size:"small",className:y.a.btn,disabled:e,onClick:function(){a(function(e,t,n){return{type:v,isDisabled:e,disableBtn:t,error:n}}(!1,!0,!1))},name:"Set",children:"Set"})})]})},T=function(){return Object(V.jsxs)("div",{className:"Wrapper",children:[Object(V.jsx)("div",{className:"table",children:Object(V.jsx)(E,{})}),Object(V.jsx)("div",{className:"settings",children:Object(V.jsx)(I,{})})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};c.a.render(Object(V.jsx)(i.a,{store:N,children:Object(V.jsx)(T,{})}),document.getElementById("root")),k()},7:function(e,t,n){e.exports={container:"settings_container__cCrPE",value:"settings_value__2alja",maxInput:"settings_maxInput__ZV-dP",minInput:"settings_minInput__2XAkr",buttons:"settings_buttons__2Db0X",btn:"settings_btn__lh9TF",error:"settings_error__1VcTW",inputError:"settings_inputError__1EKwG"}}},[[40,1,2]]]);
//# sourceMappingURL=main.e05cdbae.chunk.js.map