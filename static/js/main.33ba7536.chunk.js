(this["webpackJsonpfb-messenger"]=this["webpackJsonpfb-messenger"]||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(13),o=t.n(r),c=(t(47),t(28)),m=(t(48),t(49),t(88)),i=t(83),l=t(84),u=Object(n.forwardRef)((function(e,a){var t=e.message,n=e.username===t.username;return s.a.createElement("div",{ref:a,className:"message ".concat(n&&"message__user")},s.a.createElement(m.a,{className:n?"message__userCard":"message__guestCard"},s.a.createElement(i.a,null,s.a.createElement(l.a,{color:"initial",variant:"h5",component:"h2"},!n&&"".concat(t.username||"Unknown User",":")," ",t.message))))})),p=t(87),d=t(86),f=t(27),g=t.n(f),b=g.a.initializeApp({apiKey:"AIzaSyCe6UGokmPzdLnULUAAriwd7IvKAOJGkX4",authDomain:"facebook-messenger-dec35.firebaseapp.com",databaseURL:"https://facebook-messenger-dec35.firebaseio.com",projectId:"facebook-messenger-dec35",storageBucket:"facebook-messenger-dec35.appspot.com",messagingSenderId:"551517364093",appId:"1:551517364093:web:4f32fbd8096ecad7823614",measurementId:"G-7790LVSNWL"}).firestore(),h=t(39),E=t(85),v=t(38),k=t.n(v);var w=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),m=Object(c.a)(o,2),i=m[0],l=m[1],f=Object(n.useState)(""),v=Object(c.a)(f,2),w=v[0],_=v[1];return Object(n.useEffect)((function(){b.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[t]),Object(n.useEffect)((function(){_(prompt("Please enter your name"))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100",alt:"No Image"}),s.a.createElement("h2",null,"Welcome ",w),s.a.createElement("form",{className:"app__form"},s.a.createElement(p.a,{className:"app__formControl"},s.a.createElement(d.a,{className:"app__input",placeholder:"Enter message...",value:t,onChange:function(e){return r(e.target.value)}}),s.a.createElement(E.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),b.collection("messages").add({message:t,username:w,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),r("")}},s.a.createElement(k.a,null)))),s.a.createElement(h.a,null,i.map((function(e){var a=e.message,t=e.id;return s.a.createElement(u,{key:t,username:w,message:a})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.33ba7536.chunk.js.map