window.OpenStadComponents=function(n){var r={};function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=34)}([function(t,e){t.exports=window.React},function(t,e,n){(function(t){function e(t,e,n){var r=n[0],o=n.length;!t&&"object"===c(r)||(r={});for(var i=0;i<o;++i){var a,u=n[i];if("object"===c(u))for(var s in u){"__proto__"!==s&&(a=t?f.clone(u[s]):u[s],r[s]=e?function t(e,n){if("object"!==c(e))return n;for(var r in n)"object"===c(e[r])&&"object"===c(n[r])?e[r]=t(e[r],n[r]):e[r]=n[r];return e}(r[s],a):a)}}return r}function c(t){return{}.toString.call(t).slice(8,-1).toLowerCase()}var n,f;n=t&&"object"==typeof t.exports&&t.exports,(f=function(t){return e(!0===t,!1,arguments)}).recursive=function(t){return e(!0===t,!0,arguments)},f.clone=function(t){var e,n,r=t,o=c(t);if("array"===o)for(r=[],n=t.length,e=0;e<n;++e)r[e]=f.clone(t[e]);else if("object"===o)for(e in r={},t)r[e]=f.clone(t[e]);return r},n?t.exports=f:window.merge=f}).call(this,n(20)(t))},,function(t,e){t.exports=window.ReactDOM},,,function(t,e,n){"use strict";(function(i){var e,n,r="URLSearchParams"in self,o="Symbol"in self&&"iterator"in Symbol,u="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in self,s="ArrayBuffer"in self;function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function f(t){return"string"!=typeof t&&(t=String(t)),t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function p(t){if(t.bodyUsed)return i.reject(new TypeError("Already read"));t.bodyUsed=!0}function h(n){return new i(function(t,e){n.onload=function(){t(n.result)},n.onerror=function(){e(n.error)}})}function d(t){var e=new FileReader,n=h(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&u&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||n(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=p(this);if(t)return t;if(this._bodyBlob)return i.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return i.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return i.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||i.resolve(this._bodyArrayBuffer):this.blob().then(d)}),this.text=function(){var t,e,n,r=p(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,n=h(e),e.readAsText(t),n;if(this._bodyArrayBuffer)return i.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return i.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}s&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],n=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),l.prototype.append=function(t,e){t=c(t),e=f(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=f(e)},l.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},l.prototype.keys=function(){var n=[];return this.forEach(function(t,e){n.push(e)}),t(n)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var n=[];return this.forEach(function(t,e){n.push([e,t])}),t(n)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function v(t,e){var n,r,o=(e=e||{}).body;if(t instanceof v){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(n=e.method||this.method||"GET",r=n.toUpperCase(),-1<m.indexOf(r)?r:n),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function b(t){var o=new FormData;return t.trim().split("&").forEach(function(t){var e,n,r;t&&(n=(e=t.split("=")).shift().replace(/\+/g," "),r=e.join("=").replace(/\+/g," "),o.append(decodeURIComponent(n),decodeURIComponent(r)))}),o}function g(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},_.call(v.prototype),_.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var w=[301,302,303,307,308];g.redirect=function(t,e){if(-1===w.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var x=self.DOMException;try{new x}catch(t){(x=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack}).prototype=Object.create(Error.prototype),x.prototype.constructor=x}function E(o,a){return new i(function(r,t){var e=new v(o,a);if(e.signal&&e.signal.aborted)return t(new x("Aborted","AbortError"));var i=new XMLHttpRequest;function n(){i.abort()}i.onload=function(){var t,o,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",o=new l,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e,n=t.split(":"),r=n.shift().trim();r&&(e=n.join(":").trim(),o.append(r,e))}),o)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var n="response"in i?i.response:i.responseText;r(new g(n,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.onabort=function(){t(new x("Aborted","AbortError"))},i.open(e.method,e.url,!0),"include"===e.credentials?i.withCredentials=!0:"omit"===e.credentials&&(i.withCredentials=!1),"responseType"in i&&u&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",n),i.onreadystatechange=function(){4===i.readyState&&e.signal.removeEventListener("abort",n)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})}E.polyfill=!0,self.fetch||(self.fetch=E,self.Headers=l,self.Request=v,self.Response=g)}).call(this,n(12))},function(n,t,e){(function(t){function e(t){return t&&t.Math==Math&&t}n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")()}).call(this,e(9))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(11);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){t.exports=n(14).Promise},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,lt){(function(st,ct){var ft;t.exports=function(){"use strict";function n(t){return typeof t==="function"||typeof t==="object"&&t!==null}function c(t){return typeof t==="function"}var t=undefined;if(!Array.isArray){t=function(t){return Object.prototype.toString.call(t)==="[object Array]"}}else{t=Array.isArray}var r=t,o=0,i=undefined,a=undefined,u=function t(e,n){g[o]=e;g[o+1]=n;o+=2;if(o===2){if(a){a(w)}else{E()}}};function e(t){a=t}function s(t){u=t}var f=typeof window!=="undefined"?window:undefined,l=f||{},p=l.MutationObserver||l.WebKitMutationObserver,h=typeof self==="undefined"&&typeof st!=="undefined"&&{}.toString.call(st)==="[object process]",d=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function y(){return function(){return st.nextTick(w)}}function _(){return function(){i(w)}}function m(){var t=0;var e=new p(w);var n=document.createTextNode("");e.observe(n,{characterData:true});return function(){n.data=t=++t%2}}function v(){var t=new MessageChannel;t.port1.onmessage=w;return function(){return t.port2.postMessage(0)}}function b(){var t=setTimeout;return function(){return t(w,1)}}var g=new Array(1e3);function w(){for(var t=0;t<o;t+=2){var e=g[t];var n=g[t+1];e(n);g[t]=undefined;g[t+1]=undefined}o=0}function x(){try{var t=ft;var e=lt(16);i=e.runOnLoop||e.runOnContext;return _()}catch(t){return b()}}var E=undefined;if(h){E=y()}else if(p){E=m()}else if(d){E=v()}else if(f===undefined&&"function"==="function"){E=x()}else{E=b()}function O(t,e){var n=arguments;var r=this;var o=new this.constructor(A);if(o[T]===undefined){Q(o)}var i=r._state;if(i){(function(){var t=n[i-1];u(function(){return V(i,o,t,r._result)})})()}else{q(r,o,t,e)}return o}function P(t){var e=this;if(t&&typeof t==="object"&&t.constructor===e){return t}var n=new e(A);W(n,t);return n}var T=Math.random().toString(36).substring(16);function A(){}var S=void 0,C=1,j=2,I=new H;function R(){return new TypeError("You cannot resolve a promise with itself")}function M(){return new TypeError("A promises callback cannot return that same promise.")}function D(t){try{return t.then}catch(t){I.error=t;return I}}function L(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}function B(t,r,o){u(function(e){var n=false;var t=L(o,r,function(t){if(n){return}n=true;if(r!==t){W(e,t)}else{K(e,t)}},function(t){if(n){return}n=true;N(e,t)},"Settle: "+(e._label||" unknown promise"));if(!n&&t){n=true;N(e,t)}},t)}function k(e,t){if(t._state===C){K(e,t._result)}else if(t._state===j){N(e,t._result)}else{q(t,undefined,function(t){return W(e,t)},function(t){return N(e,t)})}}function U(t,e,n){if(e.constructor===t.constructor&&n===O&&e.constructor.resolve===P){k(t,e)}else{if(n===I){N(t,I.error)}else if(n===undefined){K(t,e)}else if(c(n)){B(t,e,n)}else{K(t,e)}}}function W(t,e){if(t===e){N(t,R())}else if(n(e)){U(t,e,D(e))}else{K(t,e)}}function F(t){if(t._onerror){t._onerror(t._result)}z(t)}function K(t,e){if(t._state!==S){return}t._result=e;t._state=C;if(t._subscribers.length!==0){u(z,t)}}function N(t,e){if(t._state!==S){return}t._state=j;t._result=e;u(F,t)}function q(t,e,n,r){var o=t._subscribers;var i=o.length;t._onerror=null;o[i]=e;o[i+C]=n;o[i+j]=r;if(i===0&&t._state){u(z,t)}}function z(t){var e=t._subscribers;var n=t._state;if(e.length===0){return}var r=undefined,o=undefined,i=t._result;for(var a=0;a<e.length;a+=3){r=e[a];o=e[a+n];if(r){V(n,r,o,i)}else{o(i)}}t._subscribers.length=0}function H(){this.error=null}var G=new H;function Y(t,e){try{return t(e)}catch(t){G.error=t;return G}}function V(t,e,n,r){var o=c(n),i=undefined,a=undefined,u=undefined,s=undefined;if(o){i=Y(n,r);if(i===G){s=true;a=i.error;i=null}else{u=true}if(e===i){N(e,M());return}}else{i=r;u=true}if(e._state!==S){}else if(o&&u){W(e,i)}else if(s){N(e,a)}else if(t===C){K(e,i)}else if(t===j){N(e,i)}}function X(n,t){try{t(function t(e){W(n,e)},function t(e){N(n,e)})}catch(t){N(n,t)}}var $=0;function J(){return $++}function Q(t){t[T]=$++;t._state=undefined;t._result=undefined;t._subscribers=[]}function Z(t,e){this._instanceConstructor=t;this.promise=new t(A);if(!this.promise[T]){Q(this.promise)}if(r(e)){this._input=e;this.length=e.length;this._remaining=e.length;this._result=new Array(this.length);if(this.length===0){K(this.promise,this._result)}else{this.length=this.length||0;this._enumerate();if(this._remaining===0){K(this.promise,this._result)}}}else{N(this.promise,tt())}}function tt(){return new Error("Array Methods must be provided an Array")}function et(t){return new Z(this,t).promise}function nt(o){var i=this;if(r(o))return new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)});else return new i(function(t,e){return e(new TypeError("You must pass an array to race."))})}function rt(t){var e=new this(A);return N(e,t),e}function ot(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function it(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function at(t){this[T]=J();this._result=this._state=undefined;this._subscribers=[];if(A!==t){typeof t!=="function"&&ot();this instanceof at?X(this,t):it()}}function ut(){var t=undefined;if(typeof ct!=="undefined"){t=ct}else if(typeof self!=="undefined"){t=self}else{try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if(n==="[object Promise]"&&!e.cast){return}}t.Promise=at}return Z.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===S&&n<t;n++)this._eachEntry(e[n],n)},Z.prototype._eachEntry=function(e,t){var n,r,o=this._instanceConstructor,i=o.resolve;i===P?(n=D(e))===O&&e._state!==S?this._settledAt(e._state,t,e._result):"function"!=typeof n?(this._remaining--,this._result[t]=e):o===at?(U(r=new o(A),e,n),this._willSettleAt(r,t)):this._willSettleAt(new o(function(t){return t(e)}),t):this._willSettleAt(i(e),t)},Z.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===S&&(this._remaining--,t===j?N(r,n):this._result[e]=n),0===this._remaining&&K(r,this._result)},Z.prototype._willSettleAt=function(t,e){var n=this;q(t,void 0,function(t){return n._settledAt(C,e,t)},function(t){return n._settledAt(j,e,t)})},at.all=function(t){return new Z(this,t).promise},at.race=function(o){var i=this;return r(o)?new i(function(t,e){for(var n=o.length,r=0;r<n;r++)i.resolve(o[r]).then(t,e)}):new i(function(t,e){return e(new TypeError("You must pass an array to race."))})},at.resolve=P,at.reject=function(t){var e=new this(A);return N(e,t),e},at._setScheduler=function(t){a=t},at._setAsap=function(t){u=t},at._asap=u,at.prototype={constructor:at,then:O,catch:function(t){return this.then(null,t)}},ut(),at.polyfill=ut,at.Promise=at}()}).call(this,lt(15),lt(9))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,c=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&h())}function h(){if(!f){var t=u(p);f=!0;for(var e=c.length;e;){for(s=c,c=[];++l<e;)s&&s[l].run();l=-1,e=c.length}s=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||f||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return OpenStadComponentLightbox});var merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),merge__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(merge__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react_dom__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var OpenStadComponentLightbox=function(_React$Component){_inherits(OpenStadComponentLightbox,_React$Component);var _super=_createSuper(OpenStadComponentLightbox);function OpenStadComponentLightbox(t){var e;return _classCallCheck(this,OpenStadComponentLightbox),(e=_super.call(this,t)).defaultConfig={},e.config=merge__WEBPACK_IMPORTED_MODULE_0___default.a.recursive(e.defaultConfig,e.config,t.config||{}),e.state={images:[],startIndex:0},e.recalcSizes=e.recalcSizes.bind(_assertThisInitialized(e)),e}return _createClass(OpenStadComponentLightbox,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("osc-show-light-box",function(t){e.showLightbox(t.detail)}),document.body.appendChild(this.instance)}},{key:"showLightbox",value:function showLightbox(data){var self=this,aspectRatio;try{aspectRatio=eval(data.aspectRatio.replace&&data.aspectRatio.replace("x","/"))}catch(t){}"number"!=typeof aspectRatio&&(aspectRatio=16/9),self.setState({images:data.images,startIndex:data.startIndex,aspectRatio:aspectRatio},function(){self.instance.style.display="block",self.recalcSizes()}),window.addEventListener("resize",self.recalcSizes)}},{key:"hideLightbox",value:function(){this.instance.style.display="none",window.removeEventListener("resize",self.recalcSizes)}},{key:"showImage",value:function(t,e){t.stopPropagation(),this.mainImage.src=e}},{key:"recalcSizes",value:function(){var t,e,n,r,o,i,a=this;a.mainContainer&&((t=a.mainContainer.offsetWidth)/(e=a.mainContainer.offsetHeight)>a.state.aspectRatio?(n=.8*e,a.mainImageContainer.style.height=n+"px",a.mainImageContainer.style.width=a.state.aspectRatio*n+"px",a.mainImageContainer.style.top=(e-n)/2+"px",a.mainImageContainer.style.left=(t-a.state.aspectRatio*n)/2+"px"):(r=t,a.mainImageContainer.style.width=r+"px",a.mainImageContainer.style.height=1/a.state.aspectRatio*r+"px",a.mainImageContainer.style.top=(e-1/a.state.aspectRatio*r)/2+"px",a.mainImageContainer.style.left=0),a.mainImage.style.width=a.mainImageContainer.style.width,a.mainImage.style.height=a.mainImageContainer.style.height,o=a.state.aspectRatio*a.navigationContainer.offsetHeight,(i=a.state.images.length*o+20*a.state.images.length)>a.navigationContainer.offsetWidth&&(i=a.navigationContainer.offsetWidth,o=i/a.state.images.length-20),a.navigationContainer.style.width=i+"px",a.state.images.map(function(t,e){var n=parseInt(o);a["lighbox-image-container-".concat(e)].style.width=n+"px",a["lighbox-image-container-".concat(e)].style.height=parseInt(1/a.state.aspectRatio*n)+"px",a["lighbox-image-".concat(e)].style.width=a["lighbox-image-container-".concat(e)].style.width,a["lighbox-image-".concat(e)].style.height=a["lighbox-image-container-".concat(e)].style.height}))}},{key:"render",value:function(){var t=this,r=this;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox",onClick:function(){t.hideLightbox()},ref:function(t){return r.instance=t}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-close-button",onClick:function(t){return r.hideLightbox(t)}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-main-container",ref:function(t){return r.mainContainer=t}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-image-container",ref:function(t){return r.mainImageContainer=t}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:r.state.images[r.state.startIndex]&&r.state.images[r.state.startIndex].src,ref:function(t){return r.mainImage=t}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-navigation-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-lightbox-navigation",ref:function(t){return r.navigationContainer=t}},r.state.images.map(function(e,n){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"osc-image-container",style:{backgroundImage:"url(".concat(e.src,")")},onClick:function(t){return r.showImage(t,e.src)},key:"lighbox-image-container-".concat(n),ref:function(t){return r["lighbox-image-container-".concat(n)]=t}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:e.src,ref:function(t){return r["lighbox-image-".concat(n)]=t}}))}))))}}]),OpenStadComponentLightbox}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)},,,function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){var r=n(10),o=n(22),i=n(38);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(10),o=n(43),i=n(23),a=n(42),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},,,,function(t,e,n){var r=n(39),o=n(41);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(7),o=n(21);t.exports=function(e,n){try{o(r,e,n)}catch(t){r[e]=n}return n}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},,,,function(t,e,n){"use strict";n.r(e);n(6),n(92);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),u=(n(94),n(17));n.d(e,"default",function(){return u.a}),n.d(e,"Lightbox",function(){return u.a}),u.a.renderElement=function(t,e){var n=t.attributes;a.a.render(o.a.createElement(u.a,{attributes:n,config:e}),t)}},,,function(t,e,n){var r=n(10),o=n(69),i=n(38),a=n(27),u=n(42),s=n(8),c=n(43),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=u(e,!0),c)try{return f(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(11),o=n(40),i="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(10),o=n(11),i=n(44);t.exports=!r&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(7),o=n(13),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var r=n(46),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(7),o=n(28),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},function(t,e,n){var r=n(48),o=n(49),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(73),o=n(46);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){function r(t){return"function"==typeof t?t:void 0}var o=n(76),i=n(7);t.exports=function(t,e){return arguments.length<2?r(o[t])||r(i[t]):o[t]&&o[t][e]||i[t]&&i[t][e]}},function(t,e,n){var a=n(8),u=n(27),s=n(78).indexOf,c=n(29);t.exports=function(t,e){var n,r=u(t),o=0,i=[];for(n in r)!a(c,n)&&a(r,n)&&i.push(n);for(;e.length>o;)a(r,n=e[o++])&&(~s(i,n)||i.push(n));return i}},function(t,e,n){var r=n(53),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e,n){var i=n(82);t.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}},function(t,e,n){var r=n(7),o=n(48),i=n(8),a=n(49),u=n(56),s=n(86),c=o("wks"),f=r.Symbol,l=s?f:f&&f.withoutSetter||a;t.exports=function(t){return i(c,t)||(u&&i(f,t)?c[t]=f[t]:c[t]=l("Symbol."+t)),c[t]}},function(t,e,n){var r=n(11);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},,,function(t,e,n){var f=n(7),l=n(37).f,p=n(21),h=n(70),d=n(28),y=n(74),_=n(81);t.exports=function(t,e){var n,r,o,i,a=t.target,u=t.global,s=t.stat,c=u?f:s?f[a]||d(a,{}):(f[a]||{}).prototype;if(c)for(n in e){if(o=e[n],r=t.noTargetGet?(i=l(c,n))&&i.value:c[n],!_(u?n:a+(s?".":"#")+n,t.forced)&&void 0!==r){if(typeof o==typeof r)continue;y(o,r)}(t.sham||r&&r.sham)&&p(o,"sham",!0),h(c,n,o,t)}}},function(t,e,n){function r(h){var d=1==h,y=2==h,_=3==h,m=4==h,v=6==h,b=5==h||v;return function(t,e,n,r){for(var o,i,a=x(t),u=w(a),s=g(e,n,3),c=E(u.length),f=0,l=r||O,p=d?l(t,c):y?l(t,0):void 0;f<c;f++)if((b||f in u)&&(i=s(o=u[f],f,a),h))if(d)p[f]=i;else if(i)switch(h){case 3:return!0;case 5:return o;case 6:return f;case 2:P.call(p,o)}else if(m)return!1;return v?-1:_||m?m:p}}var g=n(54),w=n(39),x=n(83),E=n(52),O=n(84),P=[].push;t.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},function(t,e,n){var r=n(55),o=n(87),i=n(22),a=r("unscopables"),u=Array.prototype;null==u[a]&&i.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},function(t,e,n){function a(t){throw t}var u=n(10),s=n(11),c=n(8),f=Object.defineProperty,l={};t.exports=function(t,e){if(c(l,t))return l[t];var n=[][t],r=!!c(e=e||{},"ACCESSORS")&&e.ACCESSORS,o=c(e,0)?e[0]:a,i=c(e,1)?e[1]:void 0;return l[t]=!!n&&!s(function(){if(r&&!u)return!0;var t={length:-1};r?f(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,o,i)})}},function(t,e,n){var r=n(7),o=n(54),i=Function.call;t.exports=function(t,e,n){return o(i,r[t].prototype[e],n)}},,,,,,function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var u=n(7),s=n(21),c=n(8),f=n(28),r=n(45),o=n(71),i=o.get,l=o.enforce,p=String(String).split("String");(t.exports=function(t,e,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||c(n,"name")||s(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==u?(o?!a&&t[e]&&(i=!0):delete t[e],i?t[e]=n:s(t,e,n)):i?t[e]=n:f(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&i(this).source||r(this)})},function(t,e,n){var r,o,i,a,u,s,c,f,l=n(72),p=n(7),h=n(13),d=n(21),y=n(8),_=n(47),m=n(29),v=p.WeakMap;c=l?(r=new v,o=r.get,i=r.has,a=r.set,u=function(t,e){return a.call(r,t,e),e},s=function(t){return o.call(r,t)||{}},function(t){return i.call(r,t)}):(m[f=_("state")]=!0,u=function(t,e){return d(t,f,e),e},s=function(t){return y(t,f)?t[f]:{}},function(t){return y(t,f)}),t.exports={set:u,get:s,has:c,enforce:function(t){return c(t)?s(t):u(t,{})},getterFor:function(n){return function(t){var e;if(!h(t)||(e=s(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}}},function(t,e,n){var r=n(7),o=n(45),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e){t.exports=!1},function(t,e,n){var u=n(8),s=n(75),c=n(37),f=n(22);t.exports=function(t,e){for(var n=s(e),r=f.f,o=c.f,i=0;i<n.length;i++){var a=n[i];u(t,a)||r(t,a,o(e,a))}}},function(t,e,n){var r=n(50),o=n(77),i=n(80),a=n(23);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(7);t.exports=r},function(t,e,n){var r=n(51),o=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){function r(u){return function(t,e,n){var r,o=s(t),i=c(o.length),a=f(n,i);if(u&&e!=e){for(;a<i;)if((r=o[a++])!=r)return!0}else for(;a<i;a++)if((u||a in o)&&o[a]===e)return u||a||0;return!u&&-1}}var s=n(27),c=n(52),f=n(79);t.exports={includes:r(!0),indexOf:r(!1)}},function(t,e,n){var r=n(53),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){function r(t,e){var n=u[a(t)];return n==c||n!=s&&("function"==typeof e?o(e):!!e)}var o=n(11),i=/#|\.prototype\./,a=r.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=r.data={},s=r.NATIVE="N",c=r.POLYFILL="P";t.exports=r},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(41);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(13),o=n(85),i=n(55)("species");t.exports=function(t,e){var n;return o(t)&&("function"==typeof(n=t.constructor)&&(n===Array||o(n.prototype))||r(n)&&null===(n=n[i]))&&(n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(40);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(56);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){function r(){}function o(t){return"<script>"+t+"</"+d+">"}var i,a=n(23),u=n(88),s=n(30),c=n(29),f=n(90),l=n(44),p=n(47),h="prototype",d="script",y=p("IE_PROTO"),_=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;_=i?function(t){t.write(o("")),t.close();var e=t.parentWindow.Object;return t=null,e}(i):((e=l("iframe")).style.display="none",f.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(o("document.F=Object")),t.close(),t.F);for(var n=s.length;n--;)delete _[h][s[n]];return _()};c[y]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(r[h]=a(t),n=new r,r[h]=null,n[y]=t):n=_(),void 0===e?n:u(n,e)}},function(t,e,n){var r=n(10),a=n(22),u=n(23),s=n(89);t.exports=r?Object.defineProperties:function(t,e){u(t);for(var n,r=s(e),o=r.length,i=0;i<o;)a.f(t,n=r[i++],e[n]);return t}},function(t,e,n){var r=n(51),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(50);t.exports=r("document","documentElement")},,function(t,e,n){n(93);var r=n(63);t.exports=r("Array","findIndex")},function(t,e,n){"use strict";var r=n(59),o=n(60).findIndex,i=n(61),a=n(62),u="findIndex",s=!0,c=a(u);u in[]&&Array(1)[u](function(){s=!1}),r({target:"Array",proto:!0,forced:s||!c},{findIndex:function(t,e){return o(this,t,1<arguments.length?e:void 0)}}),i(u)},function(t,e,n){}]);