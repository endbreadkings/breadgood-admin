(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-007f212c":"2ac437bc","chunk-3c162d76":"ca0ba858","chunk-53b8e508":"fbfc1e40","chunk-ccbe9772":"7f3bb827"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-007f212c":1,"chunk-3c162d76":1,"chunk-53b8e508":1,"chunk-ccbe9772":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-007f212c":"29c51e76","chunk-3c162d76":"e2ce96b1","chunk-53b8e508":"c9f5a90d","chunk-ccbe9772":"817a234a"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"078a":function(e,t,n){"use strict";n("c223")},3519:function(e,t,n){e.exports=n.p+"img/login-hello.d1b536bf.png"},4360:function(e,t,n){"use strict";var r=n("1da1"),o=(n("96cf"),n("99af"),n("2b0e")),a=n("2f62"),c=n("0e44"),i=n("bc3a"),s=n.n(i);n("d3b7");function u(e){return e.interceptors.request.use((function(e){return e.headers.Authorization=h.getters["accessToken"],e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),e}function l(){return s.a.create({baseURL:"https://api.breadgood.com/api/v1/"})}function f(e){var t=s.a.create({baseURL:"".concat("https://api.breadgood.com/api/v1/").concat(e)});return u(t)}var p=l();f("posts");function d(e){return p.post("user/signin",e)}o["a"].use(a["a"]);var h=t["a"]=new a["a"].Store({plugins:[Object(c["a"])()],state:{accessToken:"",refreshToken:""},getters:{isLogin:function(e){return""!==e.accessToken&&""!==e.refreshToken},getAccessToken:function(e){return e.accessToken},getRefreshToken:function(e){return e.refreshToken}},mutations:{SET_TOKEN:function(e,t){e.accessToken="".concat(t.tokenType," ").concat(t.accessToken),e.refreshToken="".concat(t.tokenType," ").concat(t.refreshToken)},LOGOUT:function(e){e.accessToken="",e.refreshToken=""}},actions:{LOGIN:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,d(t);case 3:return o=n.sent,a=o.data,console.log("LOGIN",a),r("SET_TOKEN",a),n.abrupt("return",a);case 8:case"end":return n.stop()}}),n)})))()}}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.isLogin?[r("v-app-bar",{attrs:{app:"",color:"grey900",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),r("div",{staticClass:"d-flex align-center",on:{click:function(t){e.drawer=!0}}}),r("v-spacer"),r("span",{staticClass:"mr-2"},[r("b",[e._v("빵긋 관리자")])]),r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("3519"),transition:"scale-transition",width:"40"}})],1),r("v-navigation-drawer",{staticClass:"primary accent-4",attrs:{dark:"",color:"grey900",absolute:"",temporary:"",height:"100vh"},scopedSlots:e._u([{key:"append",fn:function(){return[r("div",{staticClass:"pa-2"},[r("v-btn",{attrs:{block:"",color:"grey700"},on:{click:e.logout}},[r("span",{staticStyle:{"font-size":"16px"}},[e._v("나가기")])])],1)]},proxy:!0}],null,!1,1679244933),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{link:""}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1),r("v-spacer")],1)]:e._e(),r("v-main",[r("router-view")],1)],2)},a=[],c=n("1da1"),i=n("5530"),s=(n("96cf"),n("2f62")),u={computed:Object(i["a"])({},Object(s["b"])(["isLogin"])),name:"App",data:function(){return{drawer:!1,group:null,items:[{title:"대시보드",icon:"mdi-view-dashboard",link:"/"},{title:"약관 관리",icon:"mdi-account-box",link:"/terms"},{title:"최애빵 관리",icon:"mdi-folder-heart",link:"/favorite"},{title:"리뷰 이모지 관리",icon:"mdi-emoticon",link:"/bakery/emoji"},{title:"빵집 카테고리 관리",icon:"mdi-shape",link:"/bakery/category"}]}},methods:{logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.commit("LOGOUT"),e.$router.push("/login");case 2:case"end":return t.stop()}}),t)})))()}}},l=u,f=(n("078a"),n("2877")),p=n("6544"),d=n.n(p),h=n("7496"),m=n("40dc"),v=n("5bc1"),b=n("8336"),g=n("132d"),k=n("adda"),y=n("8860"),w=n("da13"),T=n("5d23"),O=n("34c3"),L=n("f6c4"),_=n("f774"),j=n("2fa4"),E=Object(f["a"])(l,o,a,!1,null,"1d925428",null),x=E.exports;d()(E,{VApp:h["a"],VAppBar:m["a"],VAppBarNavIcon:v["a"],VBtn:b["a"],VIcon:g["a"],VImg:k["a"],VList:y["a"],VListItem:w["a"],VListItemContent:T["a"],VListItemIcon:O["a"],VListItemTitle:T["b"],VMain:L["a"],VNavigationDrawer:_["a"],VSpacer:j["a"]});var C=n("a18c"),S=(n("5363"),n("f309"));r["a"].use(S["a"]);var V=new S["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#4579FF",secondary:"#FEBE52",accent:"#80A3FF",error:"#FF0000",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",grey900:"#333333",grey700:"#707070"}}}}),A=n("4360");r["a"].config.productionTip=!1,new r["a"]({router:C["a"],vuetify:V,store:A["a"],render:function(e){return e(x)}}).$mount("#app")},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var r=n("2b0e"),o=n("8c4f"),a=n("4360");r["a"].use(o["a"]);var c=[{path:"/",name:"DashBoard",component:function(){return Promise.all([n.e("chunk-007f212c"),n.e("chunk-3c162d76")]).then(n.bind(null,"7e48"))},beforeEnter:s},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-007f212c"),n.e("chunk-53b8e508")]).then(n.bind(null,"a55b"))},beforeEnter:function(e,t,n){a["a"].getters["isLogin"]?n("/"):n()}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-ccbe9772").then(n.bind(null,"9703"))}}],i=new o["a"]({mode:"history",base:"/",routes:c});function s(e,t,n){a["a"].getters["isLogin"]?n():(alert("로그인 해주세요. 😊"),n("/login"))}t["a"]=i},c223:function(e,t,n){}});
//# sourceMappingURL=app.58471622.js.map