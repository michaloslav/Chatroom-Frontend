(function(e){function t(t){for(var o,r,i=t[0],c=t[1],u=t[2],m=0,f=[];m<i.length;m++)r=i[m],s[r]&&f.push(s[r][0]),s[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},s={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Chatroom-Frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cfb":function(e,t,n){},"28ac":function(e,t,n){"use strict";var o=n("d52f"),s=n.n(o);s.a},3119:function(e,t,n){"use strict";var o=n("8c77"),s=n.n(o);s.a},"3b75":function(e,t,n){},"47fb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("router-view")],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("router-link",{staticClass:"brand",attrs:{to:"/",tag:"span"}},[e._v("Chatroom")]),n("div",{staticClass:"floatRight"},[e.showUsernameAndRoom?n("div",{staticClass:"usernameAndRoom",on:{click:e.openModal}},[n("span",{staticClass:"username"},[e._v(e._s(e.$store.state.username))]),n("span",{staticClass:"separator"},[e._v(" | ")]),n("span",{staticClass:"room"},[e._v(e._s(e.$store.state.room))])]):e._e(),n("router-link",{staticClass:"settings fas fa-cog",attrs:{to:"/settings",tag:"i"}})],1)],1)},i=[],c={name:"AppHeader",computed:{showUsernameAndRoom:function(){return""!==this.$store.state.username}},methods:{openModal:function(){this.$store.commit("setShowModalUsernameRoom",!0)}}},u=c,l=(n("6521"),n("2877")),m=Object(l["a"])(u,r,i,!1,null,null,null),f=m.exports,d={name:"App",components:{"app-header":f},beforeCreate:function(){localStorage.username&&""!==localStorage.username&&localStorage.room&&""!==localStorage.room?this.$store.dispatch("getMessages"):this.$store.commit("setShowModalUsernameRoom",!0)}},p=d,h=(n("cf25"),Object(l["a"])(p,s,a,!1,null,null,null)),g=h.exports,v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("messages-container"),n("message-typer"),e.$store.state.showModalUsernameRoom?n("modal-username-room"):e._e()],1)},w=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MessagesContainer"},e._l(e.$store.state.messages,function(e){return n("message-display",{attrs:{message:e}})}),1)},y=[],M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MessageDisplay",class:{fromUser:e.fromUser}},[n("span",{staticClass:"username"},[e._v(e._s(e.message.username))]),n("div",{on:{click:e.toggleShowTime}},[n("div",{staticClass:"message"},[e._v(e._s(e.message.text))]),n("transition",{attrs:{name:"slide"}},[e.showTime?n("div",{staticClass:"time"},[n("span",[e._v(e._s(e.localeTime))])]):e._e()])],1)])},k=[],C={name:"MessageDisplay",data:function(){return{showTime:!1}},props:{message:Object},computed:{fromUser:function(){return this.message.username===this.$store.state.username},localeTime:function(){return this.message.time.toLocaleTimeString()}},methods:{toggleShowTime:function(){this.showTime=!this.showTime}}},x=C,O=(n("28ac"),Object(l["a"])(x,M,k,!1,null,null,null)),$=O.exports,j={name:"MessagesContainer",components:{"message-display":$}},R=j,S=(n("5bfa"),Object(l["a"])(R,_,y,!1,null,null,null)),U=S.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MessageTyper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"},{name:"focus",rawName:"v-focus",value:!e.$store.state.showModalUsernameRoom,expression:"!$store.state.showModalUsernameRoom"}],domProps:{value:e.message},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.send(t)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{on:{click:e.send}},[n("i",{staticClass:"fas fa-paper-plane"})])])},E=[],A={name:"MessageTyper",data:function(){return{message:""}},methods:{send:function(){this.message.length&&this.$store.dispatch("send",this.message)}}},P=A,N=(n("9f8f"),Object(l["a"])(P,T,E,!1,null,null,null)),B=N.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-modal",{staticClass:"ModalUsernameRoom",on:{close:e.close}},[n("table",[n("tbody",[n("tr",[n("td",[n("label",{attrs:{for:"usernameInput"}},[e._v("Username:")])]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"},{name:"focus",rawName:"v-focus"}],attrs:{id:"usernameInput"},domProps:{value:e.username},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.focusOnRoom(t)},input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),n("tr",[n("td",[n("label",{attrs:{for:"roomInput"}},[e._v("Room:")])]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.room,expression:"room"}],ref:"room",attrs:{id:"roomInput"},domProps:{value:e.room},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)},input:function(t){t.target.composing||(e.room=t.target.value)}}})])]),n("tr",[n("td",{attrs:{colspan:"2"}},[n("button",{on:{click:e.submit}},[e._v("Go!")])])])])])])},F=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modalRoot"},[n("div",{staticClass:"content"},[e._t("default")],2),e.dontBlur?e._e():n("div",{staticClass:"blur",on:{click:e.close}})])},J=[],q={name:"BaseModal",props:{dontBlur:Boolean},methods:{close:function(){this.$emit("close")}}},G=q,H=(n("3119"),Object(l["a"])(G,I,J,!1,null,null,null)),L=H.exports,z={name:"ModalUsernameRoom",data:function(){var e=this.$store.state,t=e.username,n=e.room;return{username:t,room:n}},methods:{focusOnRoom:function(){""!==this.username&&this.$refs.room.focus()},submit:function(){var e=this.username,t=this.room;""!==e&&""!==t&&(this.$store.commit("updateUsernameAndRoom",{username:e,room:t,hideModal:!0}),this.$store.dispatch("getMessages"))},close:function(){var e=this.$store.state,t=e.username,n=e.room;""!==t&&""!==n&&this.$store.commit("setShowModalUsernameRoom",!1)}},components:{"base-modal":L}},K=z,Q=(n("5e29"),Object(l["a"])(K,D,F,!1,null,null,null)),V=Q.exports,W={name:"home",components:{"messages-container":U,"message-typer":B,"modal-username-room":V}},X=W,Y=Object(l["a"])(X,b,w,!1,null,null,null),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("Coming soon")])},te=[],ne={name:"Settings"},oe=ne,se=Object(l["a"])(oe,ee,te,!1,null,null,null),ae=se.exports;o["a"].use(v["a"]);var re=new v["a"]({routes:[{path:"/",name:"home",component:Z},{path:"/settings",name:"settings",component:ae}]}),ie=(n("96cf"),n("3b8d")),ce=(n("ac6a"),n("2f62"));o["a"].use(ce["a"]);var ue="http://localhost:8000/chatmessages/",le=new ce["a"].Store({state:{messages:[],username:localStorage.username||"",room:localStorage.room||"",showModalUsernameRoom:!1},mutations:{setMessages:function(e,t){t.forEach(function(e){e.time=new Date(e.time)}),e.messages=t},addMessage:function(e,t){e.messages.push(t)},updateUsernameAndRoom:function(e,t){var n=t.username,o=t.room,s=t.hideModal;e.username!==n&&(e.username=n,localStorage.username=n),e.room!==o&&(e.room=o,localStorage.room=o),s&&(e.showModalUsernameRoom=!1)},setShowModalUsernameRoom:function(e,t){e.showModalUsernameRoom=t}},actions:{getMessages:function(){var e=Object(ie["a"])(regeneratorRuntime.mark(function e(t){var n,o,s,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,o=t.state,e.next=3,fetch(ue+"?room="+o.room);case 3:return s=e.sent,e.next=6,s.json();case 6:a=e.sent,n("setMessages",a);case 8:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),send:function(){var e=Object(ie["a"])(regeneratorRuntime.mark(function e(t,n){var o,s,a,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,s=t.state,a={username:s.username,text:n,time:new Date},o("addMessage",a),e.next=5,fetch(ue,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 5:return r=e.sent,e.next=8,r.json();case 8:i=e.sent,i.error&&console.warn(i.error);case 10:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()}}),me=n("9483");Object(me["a"])("".concat("/Chatroom-Frontend/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,o["a"].directive("focus",{inserted:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&e.focus()}}),new o["a"]({router:re,store:le,render:function(e){return e(g)}}).$mount("#app")},"5bfa":function(e,t,n){"use strict";var o=n("ab65"),s=n.n(o);s.a},"5e29":function(e,t,n){"use strict";var o=n("47fb"),s=n.n(o);s.a},6434:function(e,t,n){},6521:function(e,t,n){"use strict";var o=n("6434"),s=n.n(o);s.a},"8c77":function(e,t,n){},"9f8f":function(e,t,n){"use strict";var o=n("3b75"),s=n.n(o);s.a},ab65:function(e,t,n){},cf25:function(e,t,n){"use strict";var o=n("0cfb"),s=n.n(o);s.a},d52f:function(e,t,n){}});
//# sourceMappingURL=app.89f4a60d.js.map