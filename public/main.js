!function(){"use strict";var e,t={9945:function(e,t,n){var r=n(7294),o=n(745),u=n(5998),i=n(3727),c=n(5800);var a=function(e){var t=e.error,n=e.resetErrorBoundary;return r.createElement("div",{className:"error",role:"alert"},r.createElement("p",null," 💥 CABOOM 💥 Что-то пошло не так"),r.createElement("pre",null,t.message),r.createElement("button",{onClick:n},"Перезагрузка"))},f=n(5857),p=n(7469),l=n(6278),s=n(8500),d=n(3491),g=(0,d.EJ)("[Pending] ISignInRequest"),y=(0,d.EJ)("[Success] ISignInRequest"),b=(0,d.EJ)("[Pending] Зарегистрировать нового пользователя"),O=(0,d.EJ)("[Success] Зарегистрировать нового пользователя"),m=(0,d.EJ)("[Pending] Получить пользователя"),w=(0,d.EJ)("[Success] Получить пользователя"),E=(0,d.EJ)("[Pending] Разлогиниться"),S=(0,d.EJ)("[Success] Разлогиниться"),v=(0,d.EJ)("[Pending] Обновить данные пользователя"),h=(0,d.EJ)("[Success] Обновить данные пользователя"),j=(0,d.EJ)("[Pending] Обновить аватар пользователя"),P=(0,d.EJ)("[Success] Обновить аватар пользователя"),U=(0,d.EJ)("[Pending] Обновить пароль пользователя"),_=(0,d.EJ)("[Success] Обновить пароль пользователя");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A,G=(0,d.w1)([(0,d.iw)(y,(function(e,t){return J(J({},e),{},{isLoggedIn:"OK"===t.payload})})),(0,d.iw)(O,(function(e,t){return J(J({},e),t.payload)})),(0,d.iw)(w,(function(e,t){return J(J({},e),{},{user:t.payload,isLoggedIn:!0})})),(0,d.iw)(S,(function(e){return J(J({},e),{},{isLoggedIn:!1})})),(0,d.iw)(h,(function(e,t){return J(J({},e),{},{user:t.payload})})),(0,d.iw)(P,(function(e,t){return J(J({},e),{},{user:t.payload})})),(0,d.iw)(_,(function(e){return J({},e)}))],{id:null,user:null,isLoggedIn:!1}),T=n(9304),k=n(4978),D=n(9127),L=n(9878),C=n(2817),x=(0,d.EJ)("[Error]"),K=function(e){return 401===e.response.status&&(window.location.href="#/auth"),console.log(e.message),(0,C.of)(x())},N=n(7291),W=n.n(N),B="https://ya-praktikum.tech/api/v2";!function(e){e.SIGN_UP="/auth/signup",e.SIGN_IN="/auth/signin",e.GET_USER="/auth/user",e.LOG_OUT="/auth/logout",e.USER_PROFILE="/user/profile",e.USER_AVATAR="/user/profile/avatar",e.USER_PASSWORDS="/user/password"}(A||(A={}));var F={withCredentials:!0};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z,Y={withCredentials:!0},$=(0,d.EJ)("[Success] addGameWord"),H=(0,d.EJ)("[Success] addGameLetter"),Q=(0,d.EJ)("[Success] addErrorCounter"),X=(0,d.EJ)("[Success] addShowText"),Z=(0,d.EJ)("[Success] clearGameState"),ee=(0,d.EJ)("[Success] addGameStatus");function te(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e[e.inGame=0]="inGame",e[e.win=1]="win",e[e.fail=2]="fail"}(z||(z={}));var ie={gameWord:null,gameLetters:[],errorCount:0,showText:[],gameStatus:z.inGame},ce=(0,d.w1)([(0,d.iw)($,(function(e,t){return oe(oe({},e),{},{gameWord:t.payload})})),(0,d.iw)(H,(function(e,t){return oe(oe({},e),{},{gameLetters:[].concat(te(e.gameLetters),[t.payload])})})),(0,d.iw)(Q,(function(e,t){return oe(oe({},e),{},{errorCount:t.payload})})),(0,d.iw)(X,(function(e,t){return oe(oe({},e),{},{showText:t.payload})})),(0,d.iw)(Z,(function(e){return oe(oe({},e),{},{gameWord:null,gameLetters:[],errorCount:0,showText:[],gameStatus:z.inGame})})),(0,d.iw)(ee,(function(e,t){return oe(oe({},e),{},{gameStatus:t.payload})}))],ie),ae=(0,f.UY)({auth:G,game:ce}),fe=(0,p.k)(),pe=(0,f.MT)(ae,(0,s.Uo)((0,f.md)(fe)));fe.run((0,l.l)((function(e){return e.pipe((0,T.l)(g.toString()),(0,k.w)((function(e){return function(e){return W().post("".concat(B).concat(A.SIGN_IN),e,F).pipe((0,D.U)((function(e){return e.data})))}(e.payload).pipe((0,D.U)((function(e){return y(e)})),(0,L.K)(K))})))}),(function(e){return e.pipe((0,T.l)(b.toString()),(0,k.w)((function(e){return function(e){return W().post("".concat(B).concat(A.SIGN_UP),e,F).pipe((0,D.U)((function(e){return e.data})))}(e.payload).pipe((0,D.U)((function(e){return O(e)})),(0,L.K)(K))})))}),(function(e){return e.pipe((0,T.l)(m.toString()),(0,k.w)((function(){return W().get("".concat(B).concat(A.GET_USER),F).pipe((0,D.U)((function(e){return e.data}))).pipe((0,D.U)((function(e){return w(e)})),(0,L.K)(K))})))}),(function(e){return e.pipe((0,T.l)(E.toString()),(0,k.w)((function(){return W().post("".concat(B).concat(A.LOG_OUT),"",F).pipe((0,D.U)((function(e){return e.data}))).pipe((0,D.U)((function(){return S()})),(0,L.K)(K))})))}),(function(e){return e.pipe((0,T.l)(v.toString()),(0,k.w)((function(e){return function(e){return W().put("".concat(B).concat(A.USER_PROFILE),e,Y).pipe((0,D.U)((function(e){return e.data})))}(e.payload).pipe((0,D.U)((function(e){return h(e)})),(0,L.K)(K))})))}),(function(e){return e.pipe((0,T.l)(j.toString()),(0,k.w)((function(e){return function(e){return W().put("".concat(B).concat(A.USER_AVATAR),e,q(q({},Y),{},{headers:{"Content-Type":"multipart/form-data"}})).pipe((0,D.U)((function(e){return e.data})))}(e.payload).pipe((0,D.U)((function(e){return P(e)})),(0,L.K)(K))})))}),(function(e){return e.pipe((0,T.l)(U.toString()),(0,k.w)((function(e){return function(e){return W().put("".concat(B).concat(A.USER_PASSWORDS),e,Y).pipe((0,D.U)((function(e){return e.data})))}(e.payload).pipe((0,D.U)((function(){return _()})),(0,L.K)(K))})))})));var le=n(5977),se=function(){var e=(0,u.v9)((function(e){return e.auth})),t=e.isLoggedIn,n=(0,le.k6)(),o=(0,u.I0)();return(0,r.useEffect)((function(){o(m())}),[]),(0,r.useEffect)((function(){t||n.push("/auth")}),[t]),r.createElement("div",{className:"app"},r.createElement("div",null,"Здравствуйте"))},de=function(){return r.createElement(c.ErrorBoundary,{FallbackComponent:a,onReset:function(){}},r.createElement(u.zt,{store:pe},r.createElement(i.UT,null,r.createElement(se,null))))},ge=document.getElementById("root");(0,o.a)(ge,r.createElement(de,null))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e].call(u.exports,u,u.exports,r),u.exports}r.m=t,e=[],r.O=function(t,n,o,u){if(!n){var i=1/0;for(p=0;p<e.length;p++){n=e[p][0],o=e[p][1],u=e[p][2];for(var c=!0,a=0;a<n.length;a++)(!1&u||i>=u)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(c=!1,u<i&&(i=u));if(c){e.splice(p--,1);var f=o();void 0!==f&&(t=f)}}return t}u=u||0;for(var p=e.length;p>0&&e[p-1][2]>u;p--)e[p]=e[p-1];e[p]=[n,o,u]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,u,i=n[0],c=n[1],a=n[2],f=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(a)var p=a(r)}for(t&&t(n);f<i.length;f++)u=i[f],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(p)},n=self.webpackChunkyandex_practicum_2_mega_game=self.webpackChunkyandex_practicum_2_mega_game||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[593],(function(){return r(9945)}));o=r.O(o)}();