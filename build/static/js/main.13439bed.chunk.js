(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(t,n,e){},48:function(t,n,e){"use strict";e.r(n);var c=e(0),i=e(1),a=e.n(i),r=e(22),o=e.n(r),s=e(24),u=e(13),d=function(t){var n=t.name,e=["#e6194B","#3cb44b","#4363d8","#f58231","#911eb4","#42d4f4","#f032e6","#bfef45","#fabed4","#469990","#dcbeff","#9A6324","#800000","#aaffc3","#808000","#ffd8b1","#000075","#a9a9a9"],i=e[Math.floor(Math.random()*e.length)];return Object(c.jsxs)("h1",{id:"question",children:["Do you want to ",Object(c.jsx)("span",{id:"suggestedActivity",style:{color:"".concat(i)},children:n})," today?"]})},j=function(t){var n=t.handleNewActivity,e=t.handleAddActivity,i=t.name;return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{id:"primary-btn",onClick:function(){return n()},children:"No thanks..."}),Object(c.jsx)("button",{id:"success-btn",onClick:function(){return e(i)},children:"Sounds fun!"})]})},f=function(t){var n=t.info;return Object(c.jsx)("li",{children:n.activity})},h=function(t){return t.list.map((function(t,n){return Object(c.jsx)(f,{info:t},"".concat(n,"-activity-").concat(t))}))},l=function(t){var n=t.handleDeleteActivities;return Object(c.jsx)("button",{id:"danger-btn",onClick:function(){return n()},children:"Clear Activities"})},b=e(7),O=e.n(b);O.a.defaults.headers.common={"Content-Type":"application/json"};var v="api/activities",x=function(){return O.a.get(v).then((function(t){return t.data}))},y=function(){return O.a.get("".concat(v,"/new")).then((function(t){return t.data}))},m=function(t){return O.a.post(v,t).then((function(t){return console.log("this got sent back from the backend",t),t.data}))},p=function(){return O.a.get("".concat(v,"/delete")).then((function(t){return t.data}))},A=e(23),g=e(9),w=e(10);var k=function(){var t=Object(i.useState)([]),n=Object(u.a)(t,2),e=n[0],a=n[1],r=Object(i.useState)(""),o=Object(u.a)(r,2),f=o[0],b=o[1];return Object(i.useEffect)((function(){x().then((function(t){a(t.activities)})),y().then((function(t){b(t.activity)}))}),[]),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(g.a,{id:"first-row",children:Object(c.jsx)(w.a,{children:Object(c.jsx)(d,{name:f})})}),Object(c.jsx)(g.a,{id:"second-row",children:Object(c.jsx)(w.a,{children:Object(c.jsx)(j,{handleNewActivity:function(){y().then((function(t){b(t.activity)}))},handleAddActivity:function(t){m({activity:t}).then((function(){a([].concat(Object(s.a)(e),[{activity:t}]))})),y().then((function(t){b(t.activity)}))},name:f})})}),Object(c.jsx)(g.a,{children:Object(c.jsx)(w.a,{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("h2",{children:["Today's Activities: ",e.length]}),Object(c.jsx)(h,{list:e})]})})}),Object(c.jsx)(g.a,{id:"fourth-row",children:Object(c.jsx)(w.a,{children:Object(c.jsx)(l,{handleDeleteActivities:function(){p().then((function(){a([])}))}})})})]})})};e(47);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.13439bed.chunk.js.map