function Yl(r){var e=this.constructor;return this.then(function(t){return e.resolve(r()).then(function(){return t})},function(t){return e.resolve(r()).then(function(){return e.reject(t)})})}function ql(r){var e=this;return new e(function(t,n){if(!(r&&typeof r.length!="undefined"))return n(new TypeError(typeof r+" "+r+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var i=Array.prototype.slice.call(r);if(i.length===0)return t([]);var o=i.length;function a(u,l){if(l&&(typeof l=="object"||typeof l=="function")){var h=l.then;if(typeof h=="function"){h.call(l,function(f){a(u,f)},function(f){i[u]={status:"rejected",reason:f},--o==0&&t(i)});return}}i[u]={status:"fulfilled",value:l},--o==0&&t(i)}for(var s=0;s<i.length;s++)a(s,i[s])})}var Kl=setTimeout,Yo=typeof setImmediate!="undefined"?setImmediate:null;function qo(r){return Boolean(r&&typeof r.length!="undefined")}function Zl(){}function Jl(r,e){return function(){r.apply(e,arguments)}}function lt(r){if(!(this instanceof lt))throw new TypeError("Promises must be constructed via new");if(typeof r!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Zo(r,this)}function Ko(r,e){for(;r._state===3;)r=r._value;if(r._state===0){r._deferreds.push(e);return}r._handled=!0,lt._immediateFn(function(){var t=r._state===1?e.onFulfilled:e.onRejected;if(t===null){(r._state===1?xn:Ye)(e.promise,r._value);return}var n;try{n=t(r._value)}catch(i){Ye(e.promise,i);return}xn(e.promise,n)})}function xn(r,e){try{if(e===r)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var t=e.then;if(e instanceof lt){r._state=3,r._value=e,bn(r);return}else if(typeof t=="function"){Zo(Jl(t,e),r);return}}r._state=1,r._value=e,bn(r)}catch(n){Ye(r,n)}}function Ye(r,e){r._state=2,r._value=e,bn(r)}function bn(r){r._state===2&&r._deferreds.length===0&&lt._immediateFn(function(){r._handled||lt._unhandledRejectionFn(r._value)});for(var e=0,t=r._deferreds.length;e<t;e++)Ko(r,r._deferreds[e]);r._deferreds=null}function Ql(r,e,t){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof e=="function"?e:null,this.promise=t}function Zo(r,e){var t=!1;try{r(function(n){t||(t=!0,xn(e,n))},function(n){t||(t=!0,Ye(e,n))})}catch(n){if(t)return;t=!0,Ye(e,n)}}lt.prototype.catch=function(r){return this.then(null,r)};lt.prototype.then=function(r,e){var t=new this.constructor(Zl);return Ko(this,new Ql(r,e,t)),t};lt.prototype.finally=Yl;lt.all=function(r){return new lt(function(e,t){if(!qo(r))return t(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(r);if(n.length===0)return e([]);var i=n.length;function o(s,u){try{if(u&&(typeof u=="object"||typeof u=="function")){var l=u.then;if(typeof l=="function"){l.call(u,function(h){o(s,h)},t);return}}n[s]=u,--i==0&&e(n)}catch(h){t(h)}}for(var a=0;a<n.length;a++)o(a,n[a])})};lt.allSettled=ql;lt.resolve=function(r){return r&&typeof r=="object"&&r.constructor===lt?r:new lt(function(e){e(r)})};lt.reject=function(r){return new lt(function(e,t){t(r)})};lt.race=function(r){return new lt(function(e,t){if(!qo(r))return t(new TypeError("Promise.race accepts an array"));for(var n=0,i=r.length;n<i;n++)lt.resolve(r[n]).then(e,t)})};lt._immediateFn=typeof Yo=="function"&&function(r){Yo(r)}||function(r){Kl(r,0)};lt._unhandledRejectionFn=function(e){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var Tn=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Jo=Object.getOwnPropertySymbols,th=Object.prototype.hasOwnProperty,eh=Object.prototype.propertyIsEnumerable;function rh(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function nh(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var ih=nh()?Object.assign:function(r,e){for(var t,n=rh(r),i,o=1;o<arguments.length;o++){t=Object(arguments[o]);for(var a in t)th.call(t,a)&&(n[a]=t[a]);if(Jo){i=Jo(t);for(var s=0;s<i.length;s++)eh.call(t,i[s])&&(n[i[s]]=t[i[s]])}}return n};/*!
 * @pixi/polyfill - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */self.Promise||(self.Promise=lt);Object.assign||(Object.assign=ih);var oh=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(self.performance&&self.performance.now)){var ah=Date.now();self.performance||(self.performance={}),self.performance.now=function(){return Date.now()-ah}}var Cn=Date.now(),Qo=["ms","moz","webkit","o"];for(var En=0;En<Qo.length&&!self.requestAnimationFrame;++En){var wn=Qo[En];self.requestAnimationFrame=self[wn+"RequestAnimationFrame"],self.cancelAnimationFrame=self[wn+"CancelAnimationFrame"]||self[wn+"CancelRequestAnimationFrame"]}self.requestAnimationFrame||(self.requestAnimationFrame=function(r){if(typeof r!="function")throw new TypeError(r+"is not a function");var e=Date.now(),t=oh+Cn-e;return t<0&&(t=0),Cn=e,self.setTimeout(function(){Cn=Date.now(),r(performance.now())},t)});self.cancelAnimationFrame||(self.cancelAnimationFrame=function(r){return clearTimeout(r)});Math.sign||(Math.sign=function(e){return e=Number(e),e===0||isNaN(e)?e:e>0?1:-1});Number.isInteger||(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});self.ArrayBuffer||(self.ArrayBuffer=Array);self.Float32Array||(self.Float32Array=Array);self.Uint32Array||(self.Uint32Array=Array);self.Uint16Array||(self.Uint16Array=Array);self.Uint8Array||(self.Uint8Array=Array);self.Int32Array||(self.Int32Array=Array);var In=/iPhone/i,ta=/iPod/i,ea=/iPad/i,ra=/\biOS-universal(?:.+)Mac\b/i,Pn=/\bAndroid(?:.+)Mobile\b/i,na=/Android/i,Se=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Ir=/Silk/i,Yt=/Windows Phone/i,ia=/\bWindows(?:.+)ARM\b/i,oa=/BlackBerry/i,aa=/BB10/i,sa=/Opera Mini/i,ua=/\b(CriOS|Chrome)(?:.+)Mobile/i,la=/Mobile(?:.+)Firefox\b/i,ha=function(r){return typeof r!="undefined"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream=="undefined"};function sh(r){return function(e){return e.test(r)}}function uh(r){var e={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator!="undefined"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?e.userAgent=r:r&&r.userAgent&&(e={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var t=e.userAgent,n=t.split("[FBAN");typeof n[1]!="undefined"&&(t=n[0]),n=t.split("Twitter"),typeof n[1]!="undefined"&&(t=n[0]);var i=sh(t),o={apple:{phone:i(In)&&!i(Yt),ipod:i(ta),tablet:!i(In)&&(i(ea)||ha(e))&&!i(Yt),universal:i(ra),device:(i(In)||i(ta)||i(ea)||i(ra)||ha(e))&&!i(Yt)},amazon:{phone:i(Se),tablet:!i(Se)&&i(Ir),device:i(Se)||i(Ir)},android:{phone:!i(Yt)&&i(Se)||!i(Yt)&&i(Pn),tablet:!i(Yt)&&!i(Se)&&!i(Pn)&&(i(Ir)||i(na)),device:!i(Yt)&&(i(Se)||i(Ir)||i(Pn)||i(na))||i(/\bokhttp\b/i)},windows:{phone:i(Yt),tablet:i(ia),device:i(Yt)||i(ia)},other:{blackberry:i(oa),blackberry10:i(aa),opera:i(sa),firefox:i(la),chrome:i(ua),device:i(oa)||i(aa)||i(sa)||i(la)||i(ua)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}/*!
 * @pixi/settings - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Dt=uh(self.navigator);function lh(r){var e=!0;if(Dt.tablet||Dt.phone){if(Dt.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var n=parseInt(t[1],10);n<11&&(e=!1)}}if(Dt.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var n=parseInt(t[1],10);n<7&&(e=!1)}}}return e?r:4}function hh(){return!Dt.apple.device}/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var fa;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(fa||(fa={}));var ca;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(ca||(ca={}));var da;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(da||(da={}));var pa;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(pa||(pa={}));var va;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(va||(va={}));var _a;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(_a||(_a={}));var ma;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(ma||(ma={}));var ga;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(ga||(ga={}));var ya;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(ya||(ya={}));var Rn;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Rn||(Rn={}));var An;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(An||(An={}));var Sn;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Sn||(Sn={}));var xa;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(xa||(xa={}));var ba;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(ba||(ba={}));var On;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(On||(On={}));var qe;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(qe||(qe={}));var Ta;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Ta||(Ta={}));var Nn;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Nn||(Nn={}));var Ca;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Ca||(Ca={}));var N={MIPMAP_TEXTURES:Sn.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:Nn.NONE,SPRITE_MAX_TEXTURES:lh(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:On.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:An.CLAMP,SCALE_MODE:Rn.LINEAR,PRECISION_VERTEX:qe.HIGH,PRECISION_FRAGMENT:Dt.apple.device?qe.HIGH:qe.MEDIUM,CAN_UPLOAD_SAME_BUFFER:hh(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},Ea={exports:{}};(function(r){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(u,l,h){this.fn=u,this.context=l,this.once=h||!1}function o(u,l,h,f,c){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new i(h,f||u,c),p=t?t+l:l;return u._events[p]?u._events[p].fn?u._events[p]=[u._events[p],d]:u._events[p].push(d):(u._events[p]=d,u._eventsCount++),u}function a(u,l){--u._eventsCount==0?u._events=new n:delete u._events[l]}function s(){this._events=new n,this._eventsCount=0}s.prototype.eventNames=function(){var l=[],h,f;if(this._eventsCount===0)return l;for(f in h=this._events)e.call(h,f)&&l.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(h)):l},s.prototype.listeners=function(l){var h=t?t+l:l,f=this._events[h];if(!f)return[];if(f.fn)return[f.fn];for(var c=0,d=f.length,p=new Array(d);c<d;c++)p[c]=f[c].fn;return p},s.prototype.listenerCount=function(l){var h=t?t+l:l,f=this._events[h];return f?f.fn?1:f.length:0},s.prototype.emit=function(l,h,f,c,d,p){var v=t?t+l:l;if(!this._events[v])return!1;var _=this._events[v],m=arguments.length,g,T;if(_.fn){switch(_.once&&this.removeListener(l,_.fn,void 0,!0),m){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,h),!0;case 3:return _.fn.call(_.context,h,f),!0;case 4:return _.fn.call(_.context,h,f,c),!0;case 5:return _.fn.call(_.context,h,f,c,d),!0;case 6:return _.fn.call(_.context,h,f,c,d,p),!0}for(T=1,g=new Array(m-1);T<m;T++)g[T-1]=arguments[T];_.fn.apply(_.context,g)}else{var I=_.length,x;for(T=0;T<I;T++)switch(_[T].once&&this.removeListener(l,_[T].fn,void 0,!0),m){case 1:_[T].fn.call(_[T].context);break;case 2:_[T].fn.call(_[T].context,h);break;case 3:_[T].fn.call(_[T].context,h,f);break;case 4:_[T].fn.call(_[T].context,h,f,c);break;default:if(!g)for(x=1,g=new Array(m-1);x<m;x++)g[x-1]=arguments[x];_[T].fn.apply(_[T].context,g)}}return!0},s.prototype.on=function(l,h,f){return o(this,l,h,f,!1)},s.prototype.once=function(l,h,f){return o(this,l,h,f,!0)},s.prototype.removeListener=function(l,h,f,c){var d=t?t+l:l;if(!this._events[d])return this;if(!h)return a(this,d),this;var p=this._events[d];if(p.fn)p.fn===h&&(!c||p.once)&&(!f||p.context===f)&&a(this,d);else{for(var v=0,_=[],m=p.length;v<m;v++)(p[v].fn!==h||c&&!p[v].once||f&&p[v].context!==f)&&_.push(p[v]);_.length?this._events[d]=_.length===1?_[0]:_:a(this,d)}return this},s.prototype.removeAllListeners=function(l){var h;return l?(h=t?t+l:l,this._events[h]&&a(this,h)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,r.exports=s})(Ea);var Ke=Ea.exports,Fn={exports:{}};Fn.exports=Pr;Fn.exports.default=Pr;function Pr(r,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:r.length,o=wa(r,0,i,t,!0),a=[];if(!o||o.next===o.prev)return a;var s,u,l,h,f,c,d;if(n&&(o=vh(r,e,o,t)),r.length>80*t){s=l=r[0],u=h=r[1];for(var p=t;p<i;p+=t)f=r[p],c=r[p+1],f<s&&(s=f),c<u&&(u=c),f>l&&(l=f),c>h&&(h=c);d=Math.max(l-s,h-u),d=d!==0?1/d:0}return Ze(o,a,t,s,u,d),a}function wa(r,e,t,n,i){var o,a;if(i===Gn(r,e,t,n)>0)for(o=e;o<t;o+=n)a=Ra(o,r[o],r[o+1],a);else for(o=t-n;o>=e;o-=n)a=Ra(o,r[o],r[o+1],a);return a&&Rr(a,a.next)&&(Qe(a),a=a.next),a}function ee(r,e){if(!r)return r;e||(e=r);var t=r,n;do if(n=!1,!t.steiner&&(Rr(t,t.next)||ot(t.prev,t,t.next)===0)){if(Qe(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ze(r,e,t,n,i,o,a){if(!!r){!a&&o&&xh(r,n,i,o);for(var s=r,u,l;r.prev!==r.next;){if(u=r.prev,l=r.next,o?ch(r,n,i,o):fh(r)){e.push(u.i/t),e.push(r.i/t),e.push(l.i/t),Qe(r),r=l.next,s=l.next;continue}if(r=l,r===s){a?a===1?(r=dh(ee(r),e,t),Ze(r,e,t,n,i,o,2)):a===2&&ph(r,e,t,n,i,o):Ze(ee(r),e,t,n,i,o,1);break}}}}function fh(r){var e=r.prev,t=r,n=r.next;if(ot(e,t,n)>=0)return!1;for(var i=r.next.next;i!==r.prev;){if(Oe(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&ot(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ch(r,e,t,n){var i=r.prev,o=r,a=r.next;if(ot(i,o,a)>=0)return!1;for(var s=i.x<o.x?i.x<a.x?i.x:a.x:o.x<a.x?o.x:a.x,u=i.y<o.y?i.y<a.y?i.y:a.y:o.y<a.y?o.y:a.y,l=i.x>o.x?i.x>a.x?i.x:a.x:o.x>a.x?o.x:a.x,h=i.y>o.y?i.y>a.y?i.y:a.y:o.y>a.y?o.y:a.y,f=Un(s,u,e,t,n),c=Un(l,h,e,t,n),d=r.prevZ,p=r.nextZ;d&&d.z>=f&&p&&p.z<=c;){if(d!==r.prev&&d!==r.next&&Oe(i.x,i.y,o.x,o.y,a.x,a.y,d.x,d.y)&&ot(d.prev,d,d.next)>=0||(d=d.prevZ,p!==r.prev&&p!==r.next&&Oe(i.x,i.y,o.x,o.y,a.x,a.y,p.x,p.y)&&ot(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=f;){if(d!==r.prev&&d!==r.next&&Oe(i.x,i.y,o.x,o.y,a.x,a.y,d.x,d.y)&&ot(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=c;){if(p!==r.prev&&p!==r.next&&Oe(i.x,i.y,o.x,o.y,a.x,a.y,p.x,p.y)&&ot(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function dh(r,e,t){var n=r;do{var i=n.prev,o=n.next.next;!Rr(i,o)&&Ia(i,n,n.next,o)&&Je(i,o)&&Je(o,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(o.i/t),Qe(n),Qe(n.next),n=r=o),n=n.next}while(n!==r);return ee(n)}function ph(r,e,t,n,i,o){var a=r;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&Ch(a,s)){var u=Pa(a,s);a=ee(a,a.next),u=ee(u,u.next),Ze(a,e,t,n,i,o),Ze(u,e,t,n,i,o);return}s=s.next}a=a.next}while(a!==r)}function vh(r,e,t,n){var i=[],o,a,s,u,l;for(o=0,a=e.length;o<a;o++)s=e[o]*n,u=o<a-1?e[o+1]*n:r.length,l=wa(r,s,u,n,!1),l===l.next&&(l.steiner=!0),i.push(Th(l));for(i.sort(_h),o=0;o<i.length;o++)t=mh(i[o],t),t=ee(t,t.next);return t}function _h(r,e){return r.x-e.x}function mh(r,e){var t=gh(r,e);if(!t)return e;var n=Pa(t,r),i=ee(t,t.next);return ee(n,n.next),e===t?i:e}function gh(r,e){var t=e,n=r.x,i=r.y,o=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var s=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(s<=n&&s>o){if(o=s,s===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===o)return a;var u=a,l=a.x,h=a.y,f=1/0,c;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Oe(i<h?n:o,i,l,h,i<h?o:n,i,t.x,t.y)&&(c=Math.abs(i-t.y)/(n-t.x),Je(t,r)&&(c<f||c===f&&(t.x>a.x||t.x===a.x&&yh(a,t)))&&(a=t,f=c)),t=t.next;while(t!==u);return a}function yh(r,e){return ot(r.prev,r,e.prev)<0&&ot(e.next,r,r.next)<0}function xh(r,e,t,n){var i=r;do i.z===null&&(i.z=Un(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,bh(i)}function bh(r){var e,t,n,i,o,a,s,u,l=1;do{for(t=r,r=null,o=null,a=0;t;){for(a++,n=t,s=0,e=0;e<l&&(s++,n=n.nextZ,!!n);e++);for(u=l;s>0||u>0&&n;)s!==0&&(u===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,s--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:r=i,i.prevZ=o,o=i;t=n}o.nextZ=null,l*=2}while(a>1);return r}function Un(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Th(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Oe(r,e,t,n,i,o,a,s){return(i-a)*(e-s)-(r-a)*(o-s)>=0&&(r-a)*(n-s)-(t-a)*(e-s)>=0&&(t-a)*(o-s)-(i-a)*(n-s)>=0}function Ch(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Eh(r,e)&&(Je(r,e)&&Je(e,r)&&wh(r,e)&&(ot(r.prev,r,e.prev)||ot(r,e.prev,e))||Rr(r,e)&&ot(r.prev,r,r.next)>0&&ot(e.prev,e,e.next)>0)}function ot(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Rr(r,e){return r.x===e.x&&r.y===e.y}function Ia(r,e,t,n){var i=Sr(ot(r,e,t)),o=Sr(ot(r,e,n)),a=Sr(ot(t,n,r)),s=Sr(ot(t,n,e));return!!(i!==o&&a!==s||i===0&&Ar(r,t,e)||o===0&&Ar(r,n,e)||a===0&&Ar(t,r,n)||s===0&&Ar(t,e,n))}function Ar(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Sr(r){return r>0?1:r<0?-1:0}function Eh(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ia(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Je(r,e){return ot(r.prev,r,r.next)<0?ot(r,e,r.next)>=0&&ot(r,r.prev,e)>=0:ot(r,e,r.prev)<0||ot(r,r.next,e)<0}function wh(r,e){var t=r,n=!1,i=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&i<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Pa(r,e){var t=new Ln(r.i,r.x,r.y),n=new Ln(e.i,e.x,e.y),i=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,o.next=n,n.prev=o,n}function Ra(r,e,t,n){var i=new Ln(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qe(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ln(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Pr.deviation=function(r,e,t,n){var i=e&&e.length,o=i?e[0]*t:r.length,a=Math.abs(Gn(r,0,o,t));if(i)for(var s=0,u=e.length;s<u;s++){var l=e[s]*t,h=s<u-1?e[s+1]*t:r.length;a-=Math.abs(Gn(r,l,h,t))}var f=0;for(s=0;s<n.length;s+=3){var c=n[s]*t,d=n[s+1]*t,p=n[s+2]*t;f+=Math.abs((r[c]-r[p])*(r[d+1]-r[c+1])-(r[c]-r[d])*(r[p+1]-r[c+1]))}return a===0&&f===0?0:Math.abs((f-a)/a)};function Gn(r,e,t,n){for(var i=0,o=e,a=t-n;o<t;o+=n)i+=(r[a]-r[o])*(r[o+1]+r[a+1]),a=o;return i}Pr.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<r.length;i++){for(var o=0;o<r[i].length;o++)for(var a=0;a<e;a++)t.vertices.push(r[i][o][a]);i>0&&(n+=r[i-1].length,t.holes.push(n))}return t};var Aa=Fn.exports,Bn={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(r,e){(function(t){var n=e&&!e.nodeType&&e,i=r&&!r.nodeType&&r,o=typeof Tn=="object"&&Tn;(o.global===o||o.window===o||o.self===o)&&(t=o);var a,s=2147483647,u=36,l=1,h=26,f=38,c=700,d=72,p=128,v="-",_=/^xn--/,m=/[^\x20-\x7E]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,T={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=u-l,x=Math.floor,y=String.fromCharCode,A;function F(w){throw RangeError(T[w])}function E(w,M){for(var H=w.length,Y=[];H--;)Y[H]=M(w[H]);return Y}function P(w,M){var H=w.split("@"),Y="";H.length>1&&(Y=H[0]+"@",w=H[1]),w=w.replace(g,".");var tt=w.split("."),st=E(tt,M).join(".");return Y+st}function B(w){for(var M=[],H=0,Y=w.length,tt,st;H<Y;)tt=w.charCodeAt(H++),tt>=55296&&tt<=56319&&H<Y?(st=w.charCodeAt(H++),(st&64512)==56320?M.push(((tt&1023)<<10)+(st&1023)+65536):(M.push(tt),H--)):M.push(tt);return M}function U(w){return E(w,function(M){var H="";return M>65535&&(M-=65536,H+=y(M>>>10&1023|55296),M=56320|M&1023),H+=y(M),H}).join("")}function j(w){return w-48<10?w-22:w-65<26?w-65:w-97<26?w-97:u}function it(w,M){return w+22+75*(w<26)-((M!=0)<<5)}function O(w,M,H){var Y=0;for(w=H?x(w/c):w>>1,w+=x(w/M);w>I*h>>1;Y+=u)w=x(w/I);return x(Y+(I+1)*w/(w+f))}function S(w){var M=[],H=w.length,Y,tt=0,st=p,J=d,vt,yt,ut,ft,Z,nt,V,wt,xt;for(vt=w.lastIndexOf(v),vt<0&&(vt=0),yt=0;yt<vt;++yt)w.charCodeAt(yt)>=128&&F("not-basic"),M.push(w.charCodeAt(yt));for(ut=vt>0?vt+1:0;ut<H;){for(ft=tt,Z=1,nt=u;ut>=H&&F("invalid-input"),V=j(w.charCodeAt(ut++)),(V>=u||V>x((s-tt)/Z))&&F("overflow"),tt+=V*Z,wt=nt<=J?l:nt>=J+h?h:nt-J,!(V<wt);nt+=u)xt=u-wt,Z>x(s/xt)&&F("overflow"),Z*=xt;Y=M.length+1,J=O(tt-ft,Y,ft==0),x(tt/Y)>s-st&&F("overflow"),st+=x(tt/Y),tt%=Y,M.splice(tt++,0,st)}return U(M)}function z(w){var M,H,Y,tt,st,J,vt,yt,ut,ft,Z,nt=[],V,wt,xt,W;for(w=B(w),V=w.length,M=p,H=0,st=d,J=0;J<V;++J)Z=w[J],Z<128&&nt.push(y(Z));for(Y=tt=nt.length,tt&&nt.push(v);Y<V;){for(vt=s,J=0;J<V;++J)Z=w[J],Z>=M&&Z<vt&&(vt=Z);for(wt=Y+1,vt-M>x((s-H)/wt)&&F("overflow"),H+=(vt-M)*wt,M=vt,J=0;J<V;++J)if(Z=w[J],Z<M&&++H>s&&F("overflow"),Z==M){for(yt=H,ut=u;ft=ut<=st?l:ut>=st+h?h:ut-st,!(yt<ft);ut+=u)W=yt-ft,xt=u-ft,nt.push(y(it(ft+W%xt,0))),yt=x(W/xt);nt.push(y(it(yt,0))),st=O(H,wt,Y==tt),H=0,++Y}++H,++M}return nt.join("")}function gt(w){return P(w,function(M){return _.test(M)?S(M.slice(4).toLowerCase()):M})}function Et(w){return P(w,function(M){return m.test(M)?"xn--"+z(M):M})}if(a={version:"1.3.2",ucs2:{decode:B,encode:U},decode:S,encode:z,toASCII:Et,toUnicode:gt},n&&i)if(r.exports==n)i.exports=a;else for(A in a)a.hasOwnProperty(A)&&(n[A]=a[A]);else t.punycode=a})(Tn)})(Bn,Bn.exports);var Ih={isString:function(r){return typeof r=="string"},isObject:function(r){return typeof r=="object"&&r!==null},isNull:function(r){return r===null},isNullOrUndefined:function(r){return r==null}},tr={};function Ph(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var Rh=function(r,e,t,n){e=e||"&",t=t||"=";var i={};if(typeof r!="string"||r.length===0)return i;var o=/\+/g;r=r.split(e);var a=1e3;n&&typeof n.maxKeys=="number"&&(a=n.maxKeys);var s=r.length;a>0&&s>a&&(s=a);for(var u=0;u<s;++u){var l=r[u].replace(o,"%20"),h=l.indexOf(t),f,c,d,p;h>=0?(f=l.substr(0,h),c=l.substr(h+1)):(f=l,c=""),d=decodeURIComponent(f),p=decodeURIComponent(c),Ph(i,d)?Array.isArray(i[d])?i[d].push(p):i[d]=[i[d],p]:i[d]=p}return i},er=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}},Ah=function(r,e,t,n){return e=e||"&",t=t||"=",r===null&&(r=void 0),typeof r=="object"?Object.keys(r).map(function(i){var o=encodeURIComponent(er(i))+t;return Array.isArray(r[i])?r[i].map(function(a){return o+encodeURIComponent(er(a))}).join(e):o+encodeURIComponent(er(r[i]))}).join(e):n?encodeURIComponent(er(n))+t+encodeURIComponent(er(r)):""};tr.decode=tr.parse=Rh;tr.encode=tr.stringify=Ah;var Sh=Bn.exports,kt=Ih,Oh=Or,Nh=jh,Fh=Xh;function St(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var Uh=/^([a-z0-9.+-]+:)/i,Lh=/:[0-9]*$/,Gh=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Bh=["<",">",'"',"`"," ","\r",`
`,"	"],Mh=["{","}","|","\\","^","`"].concat(Bh),Mn=["'"].concat(Mh),Sa=["%","/","?",";","#"].concat(Mn),Oa=["/","?","#"],Dh=255,Na=/^[+a-z0-9A-Z_-]{0,63}$/,kh=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Hh={javascript:!0,"javascript:":!0},Dn={javascript:!0,"javascript:":!0},Ne={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},kn=tr;function Or(r,e,t){if(r&&kt.isObject(r)&&r instanceof St)return r;var n=new St;return n.parse(r,e,t),n}St.prototype.parse=function(r,e,t){if(!kt.isString(r))throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var n=r.indexOf("?"),i=n!==-1&&n<r.indexOf("#")?"?":"#",o=r.split(i),a=/\\/g;o[0]=o[0].replace(a,"/"),r=o.join(i);var s=r;if(s=s.trim(),!t&&r.split("#").length===1){var u=Gh.exec(s);if(u)return this.path=s,this.href=s,this.pathname=u[1],u[2]?(this.search=u[2],e?this.query=kn.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var l=Uh.exec(s);if(l){l=l[0];var h=l.toLowerCase();this.protocol=h,s=s.substr(l.length)}if(t||l||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var f=s.substr(0,2)==="//";f&&!(l&&Dn[l])&&(s=s.substr(2),this.slashes=!0)}if(!Dn[l]&&(f||l&&!Ne[l])){for(var c=-1,d=0;d<Oa.length;d++){var p=s.indexOf(Oa[d]);p!==-1&&(c===-1||p<c)&&(c=p)}var v,_;c===-1?_=s.lastIndexOf("@"):_=s.lastIndexOf("@",c),_!==-1&&(v=s.slice(0,_),s=s.slice(_+1),this.auth=decodeURIComponent(v)),c=-1;for(var d=0;d<Sa.length;d++){var p=s.indexOf(Sa[d]);p!==-1&&(c===-1||p<c)&&(c=p)}c===-1&&(c=s.length),this.host=s.slice(0,c),s=s.slice(c),this.parseHost(),this.hostname=this.hostname||"";var m=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!m)for(var g=this.hostname.split(/\./),d=0,T=g.length;d<T;d++){var I=g[d];if(!!I&&!I.match(Na)){for(var x="",y=0,A=I.length;y<A;y++)I.charCodeAt(y)>127?x+="x":x+=I[y];if(!x.match(Na)){var F=g.slice(0,d),E=g.slice(d+1),P=I.match(kh);P&&(F.push(P[1]),E.unshift(P[2])),E.length&&(s="/"+E.join(".")+s),this.hostname=F.join(".");break}}}this.hostname.length>Dh?this.hostname="":this.hostname=this.hostname.toLowerCase(),m||(this.hostname=Sh.toASCII(this.hostname));var B=this.port?":"+this.port:"",U=this.hostname||"";this.host=U+B,this.href+=this.host,m&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!Hh[h])for(var d=0,T=Mn.length;d<T;d++){var j=Mn[d];if(s.indexOf(j)!==-1){var it=encodeURIComponent(j);it===j&&(it=escape(j)),s=s.split(j).join(it)}}var O=s.indexOf("#");O!==-1&&(this.hash=s.substr(O),s=s.slice(0,O));var S=s.indexOf("?");if(S!==-1?(this.search=s.substr(S),this.query=s.substr(S+1),e&&(this.query=kn.parse(this.query)),s=s.slice(0,S)):e&&(this.search="",this.query={}),s&&(this.pathname=s),Ne[h]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var B=this.pathname||"",z=this.search||"";this.path=B+z}return this.href=this.format(),this};function Xh(r){return kt.isString(r)&&(r=Or(r)),r instanceof St?r.format():St.prototype.format.call(r)}St.prototype.format=function(){var r=this.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var e=this.protocol||"",t=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=r+this.host:this.hostname&&(i=r+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&kt.isObject(this.query)&&Object.keys(this.query).length&&(o=kn.stringify(this.query));var a=this.search||o&&"?"+o||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||Ne[e])&&i!==!1?(i="//"+(i||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):i||(i=""),n&&n.charAt(0)!=="#"&&(n="#"+n),a&&a.charAt(0)!=="?"&&(a="?"+a),t=t.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),a=a.replace("#","%23"),e+i+t+a+n};function jh(r,e){return Or(r,!1,!0).resolve(e)}St.prototype.resolve=function(r){return this.resolveObject(Or(r,!1,!0)).format()};St.prototype.resolveObject=function(r){if(kt.isString(r)){var e=new St;e.parse(r,!1,!0),r=e}for(var t=new St,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];t[o]=this[o]}if(t.hash=r.hash,r.href==="")return t.href=t.format(),t;if(r.slashes&&!r.protocol){for(var a=Object.keys(r),s=0;s<a.length;s++){var u=a[s];u!=="protocol"&&(t[u]=r[u])}return Ne[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(r.protocol&&r.protocol!==t.protocol){if(!Ne[r.protocol]){for(var l=Object.keys(r),h=0;h<l.length;h++){var f=l[h];t[f]=r[f]}return t.href=t.format(),t}if(t.protocol=r.protocol,!r.host&&!Dn[r.protocol]){for(var T=(r.pathname||"").split("/");T.length&&!(r.host=T.shift()););r.host||(r.host=""),r.hostname||(r.hostname=""),T[0]!==""&&T.unshift(""),T.length<2&&T.unshift(""),t.pathname=T.join("/")}else t.pathname=r.pathname;if(t.search=r.search,t.query=r.query,t.host=r.host||"",t.auth=r.auth,t.hostname=r.hostname||r.host,t.port=r.port,t.pathname||t.search){var c=t.pathname||"",d=t.search||"";t.path=c+d}return t.slashes=t.slashes||r.slashes,t.href=t.format(),t}var p=t.pathname&&t.pathname.charAt(0)==="/",v=r.host||r.pathname&&r.pathname.charAt(0)==="/",_=v||p||t.host&&r.pathname,m=_,g=t.pathname&&t.pathname.split("/")||[],T=r.pathname&&r.pathname.split("/")||[],I=t.protocol&&!Ne[t.protocol];if(I&&(t.hostname="",t.port=null,t.host&&(g[0]===""?g[0]=t.host:g.unshift(t.host)),t.host="",r.protocol&&(r.hostname=null,r.port=null,r.host&&(T[0]===""?T[0]=r.host:T.unshift(r.host)),r.host=null),_=_&&(T[0]===""||g[0]==="")),v)t.host=r.host||r.host===""?r.host:t.host,t.hostname=r.hostname||r.hostname===""?r.hostname:t.hostname,t.search=r.search,t.query=r.query,g=T;else if(T.length)g||(g=[]),g.pop(),g=g.concat(T),t.search=r.search,t.query=r.query;else if(!kt.isNullOrUndefined(r.search)){if(I){t.hostname=t.host=g.shift();var x=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;x&&(t.auth=x.shift(),t.host=t.hostname=x.shift())}return t.search=r.search,t.query=r.query,(!kt.isNull(t.pathname)||!kt.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!g.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var y=g.slice(-1)[0],A=(t.host||r.host||g.length>1)&&(y==="."||y==="..")||y==="",F=0,E=g.length;E>=0;E--)y=g[E],y==="."?g.splice(E,1):y===".."?(g.splice(E,1),F++):F&&(g.splice(E,1),F--);if(!_&&!m)for(;F--;F)g.unshift("..");_&&g[0]!==""&&(!g[0]||g[0].charAt(0)!=="/")&&g.unshift(""),A&&g.join("/").substr(-1)!=="/"&&g.push("");var P=g[0]===""||g[0]&&g[0].charAt(0)==="/";if(I){t.hostname=t.host=P?"":g.length?g.shift():"";var x=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;x&&(t.auth=x.shift(),t.host=t.hostname=x.shift())}return _=_||t.host&&g.length,_&&!P&&g.unshift(""),g.length?t.pathname=g.join("/"):(t.pathname=null,t.path=null),(!kt.isNull(t.pathname)||!kt.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=r.auth||t.auth,t.slashes=t.slashes||r.slashes,t.href=t.format(),t};St.prototype.parseHost=function(){var r=this.host,e=Lh.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var qt;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(qt||(qt={}));var rr;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(rr||(rr={}));var Nr;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(Nr||(Nr={}));var L;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(L||(L={}));var Ot;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Ot||(Ot={}));var R;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(R||(R={}));var he;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(he||(he={}));var D;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(D||(D={}));var Fr;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(Fr||(Fr={}));var Rt;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Rt||(Rt={}));var Kt;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Kt||(Kt={}));var Ht;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Ht||(Ht={}));var Xt;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Xt||(Xt={}));var re;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(re||(re={}));var Hn;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Hn||(Hn={}));var jt;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(jt||(jt={}));var It;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(It||(It={}));var _t;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(_t||(_t={}));var zt;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(zt||(zt={}));/*!
 * @pixi/utils - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Fe={parse:Oh,format:Fh,resolve:Nh};N.RETINA_PREFIX=/@([0-9\.]+)x/;N.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var Fa=!1,Ua="6.2.2";function zh(r){var e;if(!Fa){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+Ua+" - \u2730 "+r+` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(e=self.console).log.apply(e,t)}else self.console&&self.console.log("PixiJS "+Ua+" - "+r+" - http://www.pixijs.com/");Fa=!0}}var Xn;function Vh(){return typeof Xn=="undefined"&&(Xn=function(){var e={stencil:!0,failIfMajorPerformanceCaveat:N.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!self.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),n=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),i=!!(n&&n.getContextAttributes().stencil);if(n){var o=n.getExtension("WEBGL_lose_context");o&&o.loseContext()}return n=null,i}catch{return!1}}()),Xn}var $h="#f0f8ff",Wh="#faebd7",Yh="#00ffff",qh="#7fffd4",Kh="#f0ffff",Zh="#f5f5dc",Jh="#ffe4c4",Qh="#000000",tf="#ffebcd",ef="#0000ff",rf="#8a2be2",nf="#a52a2a",of="#deb887",af="#5f9ea0",sf="#7fff00",uf="#d2691e",lf="#ff7f50",hf="#6495ed",ff="#fff8dc",cf="#dc143c",df="#00ffff",pf="#00008b",vf="#008b8b",_f="#b8860b",mf="#a9a9a9",gf="#006400",yf="#a9a9a9",xf="#bdb76b",bf="#8b008b",Tf="#556b2f",Cf="#ff8c00",Ef="#9932cc",wf="#8b0000",If="#e9967a",Pf="#8fbc8f",Rf="#483d8b",Af="#2f4f4f",Sf="#2f4f4f",Of="#00ced1",Nf="#9400d3",Ff="#ff1493",Uf="#00bfff",Lf="#696969",Gf="#696969",Bf="#1e90ff",Mf="#b22222",Df="#fffaf0",kf="#228b22",Hf="#ff00ff",Xf="#dcdcdc",jf="#f8f8ff",zf="#daa520",Vf="#ffd700",$f="#808080",Wf="#008000",Yf="#adff2f",qf="#808080",Kf="#f0fff0",Zf="#ff69b4",Jf="#cd5c5c",Qf="#4b0082",tc="#fffff0",ec="#f0e68c",rc="#fff0f5",nc="#e6e6fa",ic="#7cfc00",oc="#fffacd",ac="#add8e6",sc="#f08080",uc="#e0ffff",lc="#fafad2",hc="#d3d3d3",fc="#90ee90",cc="#d3d3d3",dc="#ffb6c1",pc="#ffa07a",vc="#20b2aa",_c="#87cefa",mc="#778899",gc="#778899",yc="#b0c4de",xc="#ffffe0",bc="#00ff00",Tc="#32cd32",Cc="#faf0e6",Ec="#ff00ff",wc="#800000",Ic="#66cdaa",Pc="#0000cd",Rc="#ba55d3",Ac="#9370db",Sc="#3cb371",Oc="#7b68ee",Nc="#00fa9a",Fc="#48d1cc",Uc="#c71585",Lc="#191970",Gc="#f5fffa",Bc="#ffe4e1",Mc="#ffe4b5",Dc="#ffdead",kc="#000080",Hc="#fdf5e6",Xc="#808000",jc="#6b8e23",zc="#ffa500",Vc="#ff4500",$c="#da70d6",Wc="#eee8aa",Yc="#98fb98",qc="#afeeee",Kc="#db7093",Zc="#ffefd5",Jc="#ffdab9",Qc="#cd853f",td="#ffc0cb",ed="#dda0dd",rd="#b0e0e6",nd="#800080",id="#663399",od="#ff0000",ad="#bc8f8f",sd="#4169e1",ud="#8b4513",ld="#fa8072",hd="#f4a460",fd="#2e8b57",cd="#fff5ee",dd="#a0522d",pd="#c0c0c0",vd="#87ceeb",_d="#6a5acd",md="#708090",gd="#708090",yd="#fffafa",xd="#00ff7f",bd="#4682b4",Td="#d2b48c",Cd="#008080",Ed="#d8bfd8",wd="#ff6347",Id="#40e0d0",Pd="#ee82ee",Rd="#f5deb3",Ad="#ffffff",Sd="#f5f5f5",Od="#ffff00",Nd="#9acd32",Fd={aliceblue:$h,antiquewhite:Wh,aqua:Yh,aquamarine:qh,azure:Kh,beige:Zh,bisque:Jh,black:Qh,blanchedalmond:tf,blue:ef,blueviolet:rf,brown:nf,burlywood:of,cadetblue:af,chartreuse:sf,chocolate:uf,coral:lf,cornflowerblue:hf,cornsilk:ff,crimson:cf,cyan:df,darkblue:pf,darkcyan:vf,darkgoldenrod:_f,darkgray:mf,darkgreen:gf,darkgrey:yf,darkkhaki:xf,darkmagenta:bf,darkolivegreen:Tf,darkorange:Cf,darkorchid:Ef,darkred:wf,darksalmon:If,darkseagreen:Pf,darkslateblue:Rf,darkslategray:Af,darkslategrey:Sf,darkturquoise:Of,darkviolet:Nf,deeppink:Ff,deepskyblue:Uf,dimgray:Lf,dimgrey:Gf,dodgerblue:Bf,firebrick:Mf,floralwhite:Df,forestgreen:kf,fuchsia:Hf,gainsboro:Xf,ghostwhite:jf,goldenrod:zf,gold:Vf,gray:$f,green:Wf,greenyellow:Yf,grey:qf,honeydew:Kf,hotpink:Zf,indianred:Jf,indigo:Qf,ivory:tc,khaki:ec,lavenderblush:rc,lavender:nc,lawngreen:ic,lemonchiffon:oc,lightblue:ac,lightcoral:sc,lightcyan:uc,lightgoldenrodyellow:lc,lightgray:hc,lightgreen:fc,lightgrey:cc,lightpink:dc,lightsalmon:pc,lightseagreen:vc,lightskyblue:_c,lightslategray:mc,lightslategrey:gc,lightsteelblue:yc,lightyellow:xc,lime:bc,limegreen:Tc,linen:Cc,magenta:Ec,maroon:wc,mediumaquamarine:Ic,mediumblue:Pc,mediumorchid:Rc,mediumpurple:Ac,mediumseagreen:Sc,mediumslateblue:Oc,mediumspringgreen:Nc,mediumturquoise:Fc,mediumvioletred:Uc,midnightblue:Lc,mintcream:Gc,mistyrose:Bc,moccasin:Mc,navajowhite:Dc,navy:kc,oldlace:Hc,olive:Xc,olivedrab:jc,orange:zc,orangered:Vc,orchid:$c,palegoldenrod:Wc,palegreen:Yc,paleturquoise:qc,palevioletred:Kc,papayawhip:Zc,peachpuff:Jc,peru:Qc,pink:td,plum:ed,powderblue:rd,purple:nd,rebeccapurple:id,red:od,rosybrown:ad,royalblue:sd,saddlebrown:ud,salmon:ld,sandybrown:hd,seagreen:fd,seashell:cd,sienna:dd,silver:pd,skyblue:vd,slateblue:_d,slategray:md,slategrey:gd,snow:yd,springgreen:xd,steelblue:bd,tan:Td,teal:Cd,thistle:Ed,tomato:wd,turquoise:Id,violet:Pd,wheat:Rd,white:Ad,whitesmoke:Sd,yellow:Od,yellowgreen:Nd};function Tt(r,e){return e===void 0&&(e=[]),e[0]=(r>>16&255)/255,e[1]=(r>>8&255)/255,e[2]=(r&255)/255,e}function La(r){var e=r.toString(16);return e="000000".substr(0,6-e.length)+e,"#"+e}function Ga(r){return typeof r=="string"&&(r=Fd[r.toLowerCase()]||r,r[0]==="#"&&(r=r.substr(1))),parseInt(r,16)}function Nt(r){return(r[0]*255<<16)+(r[1]*255<<8)+(r[2]*255|0)}function Ud(){for(var r=[],e=[],t=0;t<32;t++)r[t]=t,e[t]=t;r[L.NORMAL_NPM]=L.NORMAL,r[L.ADD_NPM]=L.ADD,r[L.SCREEN_NPM]=L.SCREEN,e[L.NORMAL]=L.NORMAL_NPM,e[L.ADD]=L.ADD_NPM,e[L.SCREEN]=L.SCREEN_NPM;var n=[];return n.push(e),n.push(r),n}var Ba=Ud();function Ma(r,e){return Ba[e?1:0][r]}function Ld(r,e,t,n){return t=t||new Float32Array(4),n||n===void 0?(t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e):(t[0]=r[0],t[1]=r[1],t[2]=r[2]),t[3]=e,t}function jn(r,e){if(e===1)return(e*255<<24)+r;if(e===0)return 0;var t=r>>16&255,n=r>>8&255,i=r&255;return t=t*e+.5|0,n=n*e+.5|0,i=i*e+.5|0,(e*255<<24)+(t<<16)+(n<<8)+i}function Da(r,e,t,n){return t=t||new Float32Array(4),t[0]=(r>>16&255)/255,t[1]=(r>>8&255)/255,t[2]=(r&255)/255,(n||n===void 0)&&(t[0]*=e,t[1]*=e,t[2]*=e),t[3]=e,t}function Gd(r,e){e===void 0&&(e=null);var t=r*6;if(e=e||new Uint16Array(t),e.length!==t)throw new Error("Out buffer length is incorrect, got "+e.length+" and expected "+t);for(var n=0,i=0;n<t;n+=6,i+=4)e[n+0]=i+0,e[n+1]=i+1,e[n+2]=i+2,e[n+3]=i+0,e[n+4]=i+2,e[n+5]=i+3;return e}function ka(r){if(r.BYTES_PER_ELEMENT===4)return r instanceof Float32Array?"Float32Array":r instanceof Uint32Array?"Uint32Array":"Int32Array";if(r.BYTES_PER_ELEMENT===2){if(r instanceof Uint16Array)return"Uint16Array"}else if(r.BYTES_PER_ELEMENT===1&&r instanceof Uint8Array)return"Uint8Array";return null}function Ur(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function Ha(r){return!(r&r-1)&&!!r}function Xa(r){var e=(r>65535?1:0)<<4;r>>>=e;var t=(r>255?1:0)<<3;return r>>>=t,e|=t,t=(r>15?1:0)<<2,r>>>=t,e|=t,t=(r>3?1:0)<<1,r>>>=t,e|=t,e|r>>1}function Ue(r,e,t){var n=r.length,i;if(!(e>=n||t===0)){t=e+t>n?n-e:t;var o=n-t;for(i=e;i<o;++i)r[i]=r[i+t];r.length=o}}function Le(r){return r===0?0:r<0?-1:1}var Bd=0;function fe(){return++Bd}var ja={};function ce(r,e,t){if(t===void 0&&(t=3),!ja[e]){var n=new Error().stack;typeof n=="undefined"?console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r):(n=n.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",e+`
Deprecated since v`+r),console.warn(n),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r),console.warn(n))),ja[e]=!0}}var za={},Zt=Object.create(null),de=Object.create(null),Va=function(){function r(e,t,n){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=n||N.RESOLUTION,this.resize(e,t)}return r.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},r.prototype.resize=function(e,t){this.canvas.width=Math.round(e*this.resolution),this.canvas.height=Math.round(t*this.resolution)},r.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(r.prototype,"width",{get:function(){return this.canvas.width},set:function(e){this.canvas.width=Math.round(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.canvas.height},set:function(e){this.canvas.height=Math.round(e)},enumerable:!1,configurable:!0}),r}();function Md(r){var e=r.width,t=r.height,n=r.getContext("2d"),i=n.getImageData(0,0,e,t),o=i.data,a=o.length,s={top:null,left:null,right:null,bottom:null},u=null,l,h,f;for(l=0;l<a;l+=4)o[l+3]!==0&&(h=l/4%e,f=~~(l/4/e),s.top===null&&(s.top=f),(s.left===null||h<s.left)&&(s.left=h),(s.right===null||s.right<h)&&(s.right=h+1),(s.bottom===null||s.bottom<f)&&(s.bottom=f));return s.top!==null&&(e=s.right-s.left,t=s.bottom-s.top+1,u=n.getImageData(s.left,s.top,e,t)),{height:t,width:e,data:u}}var Lr;function Dd(r,e){if(e===void 0&&(e=self.location),r.indexOf("data:")===0)return"";e=e||self.location,Lr||(Lr=document.createElement("a")),Lr.href=r;var t=Fe.parse(Lr.href),n=!t.port&&e.port===""||t.port===e.port;return t.hostname!==e.hostname||!n||t.protocol!==e.protocol?"anonymous":""}function Gr(r,e){var t=N.RETINA_PREFIX.exec(r);return t?parseFloat(t[1]):e!==void 0?e:1}/*!
 * @pixi/math - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Br=Math.PI*2,kd=180/Math.PI,pe=Math.PI/180,ct;(function(r){r[r.POLY=0]="POLY",r[r.RECT=1]="RECT",r[r.CIRC=2]="CIRC",r[r.ELIP=3]="ELIP",r[r.RREC=4]="RREC"})(ct||(ct={}));var $=function(){function r(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=Number(e),this.y=Number(t),this.width=Number(n),this.height=Number(i),this.type=ct.RECT}return Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(r,"EMPTY",{get:function(){return new r(0,0,0,0)},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this},r.prototype.copyTo=function(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},r.prototype.contains=function(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height},r.prototype.pad=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this},r.prototype.fit=function(e){var t=Math.max(this.x,e.x),n=Math.min(this.x+this.width,e.x+e.width),i=Math.max(this.y,e.y),o=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(n-t,0),this.y=i,this.height=Math.max(o-i,0),this},r.prototype.ceil=function(e,t){e===void 0&&(e=1),t===void 0&&(t=.001);var n=Math.ceil((this.x+this.width-t)*e)/e,i=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=n-this.x,this.height=i-this.y,this},r.prototype.enlarge=function(e){var t=Math.min(this.x,e.x),n=Math.max(this.x+this.width,e.x+e.width),i=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=n-t,this.y=i,this.height=o-i,this},r.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),Hd=function(){function r(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.radius=n,this.type=ct.CIRC}return r.prototype.clone=function(){return new r(this.x,this.y,this.radius)},r.prototype.contains=function(e,t){if(this.radius<=0)return!1;var n=this.radius*this.radius,i=this.x-e,o=this.y-t;return i*=i,o*=o,i+o<=n},r.prototype.getBounds=function(){return new $(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},r.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},r}(),Xd=function(){function r(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),this.x=e,this.y=t,this.width=n,this.height=i,this.type=ct.ELIP}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;var n=(e-this.x)/this.width,i=(t-this.y)/this.height;return n*=n,i*=i,n+i<=1},r.prototype.getBounds=function(){return new $(this.x-this.width,this.y-this.height,this.width,this.height)},r.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),Mr=function(){function r(){for(var e=arguments,t=[],n=0;n<arguments.length;n++)t[n]=e[n];var i=Array.isArray(t[0])?t[0]:t;if(typeof i[0]!="number"){for(var o=[],a=0,s=i.length;a<s;a++)o.push(i[a].x,i[a].y);i=o}this.points=i,this.type=ct.POLY,this.closeStroke=!0}return r.prototype.clone=function(){var e=this.points.slice(),t=new r(e);return t.closeStroke=this.closeStroke,t},r.prototype.contains=function(e,t){for(var n=!1,i=this.points.length/2,o=0,a=i-1;o<i;a=o++){var s=this.points[o*2],u=this.points[o*2+1],l=this.points[a*2],h=this.points[a*2+1],f=u>t!=h>t&&e<(l-s)*((t-u)/(h-u))+s;f&&(n=!n)}return n},r.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(e,t){return e+", "+t},"")+"]")},r}(),jd=function(){function r(e,t,n,i,o){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),o===void 0&&(o=20),this.x=e,this.y=t,this.width=n,this.height=i,this.radius=o,this.type=ct.RREC}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height,this.radius)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){var n=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+n&&t<=this.y+this.height-n||e>=this.x+n&&e<=this.x+this.width-n)return!0;var i=e-(this.x+n),o=t-(this.y+n),a=n*n;if(i*i+o*o<=a||(i=e-(this.x+this.width-n),i*i+o*o<=a)||(o=t-(this.y+this.height-n),i*i+o*o<=a)||(i=e-(this.x+n),i*i+o*o<=a))return!0}return!1},r.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},r}(),q=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=e,this.y=t}return r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.copyFrom=function(e){return this.set(e.x,e.y),this},r.prototype.copyTo=function(e){return e.set(this.x,this.y),e},r.prototype.equals=function(e){return e.x===this.x&&e.y===this.y},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x=e,this.y=t,this},r.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},r}(),ve=function(){function r(e,t,n,i){n===void 0&&(n=0),i===void 0&&(i=0),this._x=n,this._y=i,this.cb=e,this.scope=t}return r.prototype.clone=function(e,t){return e===void 0&&(e=this.cb),t===void 0&&(t=this.scope),new r(e,t,this._x,this._y)},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this.cb.call(this.scope)),this},r.prototype.copyFrom=function(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this},r.prototype.copyTo=function(e){return e.set(this._x,this._y),e},r.prototype.equals=function(e){return e.x===this._x&&e.y===this._y},r.prototype.toString=function(){return"[@pixi/math:ObservablePoint x="+0+" y="+0+" scope="+this.scope+"]"},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},set:function(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},set:function(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),r}(),dt=function(){function r(e,t,n,i,o,a){e===void 0&&(e=1),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=0),a===void 0&&(a=0),this.array=null,this.a=e,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=a}return r.prototype.fromArray=function(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]},r.prototype.set=function(e,t,n,i,o,a){return this.a=e,this.b=t,this.c=n,this.d=i,this.tx=o,this.ty=a,this},r.prototype.toArray=function(e,t){this.array||(this.array=new Float32Array(9));var n=t||this.array;return e?(n[0]=this.a,n[1]=this.b,n[2]=0,n[3]=this.c,n[4]=this.d,n[5]=0,n[6]=this.tx,n[7]=this.ty,n[8]=1):(n[0]=this.a,n[1]=this.c,n[2]=this.tx,n[3]=this.b,n[4]=this.d,n[5]=this.ty,n[6]=0,n[7]=0,n[8]=1),n},r.prototype.apply=function(e,t){t=t||new q;var n=e.x,i=e.y;return t.x=this.a*n+this.c*i+this.tx,t.y=this.b*n+this.d*i+this.ty,t},r.prototype.applyInverse=function(e,t){t=t||new q;var n=1/(this.a*this.d+this.c*-this.b),i=e.x,o=e.y;return t.x=this.d*n*i+-this.c*n*o+(this.ty*this.c-this.tx*this.d)*n,t.y=this.a*n*o+-this.b*n*i+(-this.ty*this.a+this.tx*this.b)*n,t},r.prototype.translate=function(e,t){return this.tx+=e,this.ty+=t,this},r.prototype.scale=function(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this},r.prototype.rotate=function(e){var t=Math.cos(e),n=Math.sin(e),i=this.a,o=this.c,a=this.tx;return this.a=i*t-this.b*n,this.b=i*n+this.b*t,this.c=o*t-this.d*n,this.d=o*n+this.d*t,this.tx=a*t-this.ty*n,this.ty=a*n+this.ty*t,this},r.prototype.append=function(e){var t=this.a,n=this.b,i=this.c,o=this.d;return this.a=e.a*t+e.b*i,this.b=e.a*n+e.b*o,this.c=e.c*t+e.d*i,this.d=e.c*n+e.d*o,this.tx=e.tx*t+e.ty*i+this.tx,this.ty=e.tx*n+e.ty*o+this.ty,this},r.prototype.setTransform=function(e,t,n,i,o,a,s,u,l){return this.a=Math.cos(s+l)*o,this.b=Math.sin(s+l)*o,this.c=-Math.sin(s-u)*a,this.d=Math.cos(s-u)*a,this.tx=e-(n*this.a+i*this.c),this.ty=t-(n*this.b+i*this.d),this},r.prototype.prepend=function(e){var t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){var n=this.a,i=this.c;this.a=n*e.a+this.b*e.c,this.b=n*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this},r.prototype.decompose=function(e){var t=this.a,n=this.b,i=this.c,o=this.d,a=e.pivot,s=-Math.atan2(-i,o),u=Math.atan2(n,t),l=Math.abs(s+u);return l<1e-5||Math.abs(Br-l)<1e-5?(e.rotation=u,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=s,e.skew.y=u),e.scale.x=Math.sqrt(t*t+n*n),e.scale.y=Math.sqrt(i*i+o*o),e.position.x=this.tx+(a.x*t+a.y*i),e.position.y=this.ty+(a.x*n+a.y*o),e},r.prototype.invert=function(){var e=this.a,t=this.b,n=this.c,i=this.d,o=this.tx,a=e*i-t*n;return this.a=i/a,this.b=-t/a,this.c=-n/a,this.d=e/a,this.tx=(n*this.ty-i*o)/a,this.ty=-(e*this.ty-t*o)/a,this},r.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},r.prototype.clone=function(){var e=new r;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyTo=function(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyFrom=function(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this},r.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(r,"IDENTITY",{get:function(){return new r},enumerable:!1,configurable:!0}),Object.defineProperty(r,"TEMP_MATRIX",{get:function(){return new r},enumerable:!1,configurable:!0}),r}(),_e=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],me=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],ge=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],ye=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],zn=[],$a=[],Dr=Math.sign;function zd(){for(var r=0;r<16;r++){var e=[];zn.push(e);for(var t=0;t<16;t++)for(var n=Dr(_e[r]*_e[t]+ge[r]*me[t]),i=Dr(me[r]*_e[t]+ye[r]*me[t]),o=Dr(_e[r]*ge[t]+ge[r]*ye[t]),a=Dr(me[r]*ge[t]+ye[r]*ye[t]),s=0;s<16;s++)if(_e[s]===n&&me[s]===i&&ge[s]===o&&ye[s]===a){e.push(s);break}}for(var r=0;r<16;r++){var u=new dt;u.set(_e[r],me[r],ge[r],ye[r],0,0),$a.push(u)}}zd();var at={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(r){return _e[r]},uY:function(r){return me[r]},vX:function(r){return ge[r]},vY:function(r){return ye[r]},inv:function(r){return r&8?r&15:-r&7},add:function(r,e){return zn[r][e]},sub:function(r,e){return zn[r][at.inv(e)]},rotate180:function(r){return r^4},isVertical:function(r){return(r&3)==2},byDirection:function(r,e){return Math.abs(r)*2<=Math.abs(e)?e>=0?at.S:at.N:Math.abs(e)*2<=Math.abs(r)?r>0?at.E:at.W:e>0?r>0?at.SE:at.SW:r>0?at.NE:at.NW},matrixAppendRotationInv:function(r,e,t,n){t===void 0&&(t=0),n===void 0&&(n=0);var i=$a[at.inv(e)];i.tx=t,i.ty=n,r.append(i)}},Wa=function(){function r(){this.worldTransform=new dt,this.localTransform=new dt,this.position=new ve(this.onChange,this,0,0),this.scale=new ve(this.onChange,this,1,1),this.pivot=new ve(this.onChange,this,0,0),this.skew=new ve(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return r.prototype.onChange=function(){this._localID++},r.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},r.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},r.prototype.updateLocalTransform=function(){var e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)},r.prototype.updateTransform=function(e){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){var n=e.worldTransform,i=this.worldTransform;i.a=t.a*n.a+t.b*n.c,i.b=t.a*n.b+t.b*n.d,i.c=t.c*n.a+t.d*n.c,i.d=t.c*n.b+t.d*n.d,i.tx=t.tx*n.a+t.ty*n.c+n.tx,i.ty=t.tx*n.b+t.ty*n.d+n.ty,this._parentID=e._worldID,this._worldID++}},r.prototype.setFromMatrix=function(e){e.decompose(this),this._localID++},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())},enumerable:!1,configurable:!0}),r.IDENTITY=new r,r}();/*!
 * @pixi/display - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */N.SORTABLE_CHILDREN=!1;var nr=function(){function r(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return r.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},r.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},r.prototype.getRectangle=function(e){return this.minX>this.maxX||this.minY>this.maxY?$.EMPTY:(e=e||new $(0,0,1,1),e.x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)},r.prototype.addPoint=function(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)},r.prototype.addPointMatrix=function(e,t){var n=e.a,i=e.b,o=e.c,a=e.d,s=e.tx,u=e.ty,l=n*t.x+o*t.y+s,h=i*t.x+a*t.y+u;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,h),this.maxY=Math.max(this.maxY,h)},r.prototype.addQuad=function(e){var t=this.minX,n=this.minY,i=this.maxX,o=this.maxY,a=e[0],s=e[1];t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,a=e[2],s=e[3],t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,a=e[4],s=e[5],t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,a=e[6],s=e[7],t=a<t?a:t,n=s<n?s:n,i=a>i?a:i,o=s>o?s:o,this.minX=t,this.minY=n,this.maxX=i,this.maxY=o},r.prototype.addFrame=function(e,t,n,i,o){this.addFrameMatrix(e.worldTransform,t,n,i,o)},r.prototype.addFrameMatrix=function(e,t,n,i,o){var a=e.a,s=e.b,u=e.c,l=e.d,h=e.tx,f=e.ty,c=this.minX,d=this.minY,p=this.maxX,v=this.maxY,_=a*t+u*n+h,m=s*t+l*n+f;c=_<c?_:c,d=m<d?m:d,p=_>p?_:p,v=m>v?m:v,_=a*i+u*n+h,m=s*i+l*n+f,c=_<c?_:c,d=m<d?m:d,p=_>p?_:p,v=m>v?m:v,_=a*t+u*o+h,m=s*t+l*o+f,c=_<c?_:c,d=m<d?m:d,p=_>p?_:p,v=m>v?m:v,_=a*i+u*o+h,m=s*i+l*o+f,c=_<c?_:c,d=m<d?m:d,p=_>p?_:p,v=m>v?m:v,this.minX=c,this.minY=d,this.maxX=p,this.maxY=v},r.prototype.addVertexData=function(e,t,n){for(var i=this.minX,o=this.minY,a=this.maxX,s=this.maxY,u=t;u<n;u+=2){var l=e[u],h=e[u+1];i=l<i?l:i,o=h<o?h:o,a=l>a?l:a,s=h>s?h:s}this.minX=i,this.minY=o,this.maxX=a,this.maxY=s},r.prototype.addVertices=function(e,t,n,i){this.addVerticesMatrix(e.worldTransform,t,n,i)},r.prototype.addVerticesMatrix=function(e,t,n,i,o,a){o===void 0&&(o=0),a===void 0&&(a=o);for(var s=e.a,u=e.b,l=e.c,h=e.d,f=e.tx,c=e.ty,d=this.minX,p=this.minY,v=this.maxX,_=this.maxY,m=n;m<i;m+=2){var g=t[m],T=t[m+1],I=s*g+l*T+f,x=h*T+u*g+c;d=Math.min(d,I-o),v=Math.max(v,I+o),p=Math.min(p,x-a),_=Math.max(_,x+a)}this.minX=d,this.minY=p,this.maxX=v,this.maxY=_},r.prototype.addBounds=function(e){var t=this.minX,n=this.minY,i=this.maxX,o=this.maxY;this.minX=e.minX<t?e.minX:t,this.minY=e.minY<n?e.minY:n,this.maxX=e.maxX>i?e.maxX:i,this.maxY=e.maxY>o?e.maxY:o},r.prototype.addBoundsMask=function(e,t){var n=e.minX>t.minX?e.minX:t.minX,i=e.minY>t.minY?e.minY:t.minY,o=e.maxX<t.maxX?e.maxX:t.maxX,a=e.maxY<t.maxY?e.maxY:t.maxY;if(n<=o&&i<=a){var s=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=n<s?n:s,this.minY=i<u?i:u,this.maxX=o>l?o:l,this.maxY=a>h?a:h}},r.prototype.addBoundsMatrix=function(e,t){this.addFrameMatrix(t,e.minX,e.minY,e.maxX,e.maxY)},r.prototype.addBoundsArea=function(e,t){var n=e.minX>t.x?e.minX:t.x,i=e.minY>t.y?e.minY:t.y,o=e.maxX<t.x+t.width?e.maxX:t.x+t.width,a=e.maxY<t.y+t.height?e.maxY:t.y+t.height;if(n<=o&&i<=a){var s=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=n<s?n:s,this.minY=i<u?i:u,this.maxX=o>l?o:l,this.maxY=a>h?a:h}},r.prototype.pad=function(e,t){e===void 0&&(e=0),t===void 0&&(t=e),this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t)},r.prototype.addFramePad=function(e,t,n,i,o,a){e-=o,t-=a,n+=o,i+=a,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>n?this.maxX:n,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>i?this.maxY:i},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Vn=function(r,e){return Vn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Vn(r,e)};function $n(r,e){Vn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var pt=function(r){$n(e,r);function e(){var t=r.call(this)||this;return t.tempDisplayObjectParent=null,t.transform=new Wa,t.alpha=1,t.visible=!0,t.renderable=!0,t.parent=null,t.worldAlpha=1,t._lastSortedIndex=0,t._zIndex=0,t.filterArea=null,t.filters=null,t._enabledFilters=null,t._bounds=new nr,t._localBounds=null,t._boundsID=0,t._boundsRect=null,t._localBoundsRect=null,t._mask=null,t._maskRefCount=0,t._destroyed=!1,t.isSprite=!1,t.isMask=!1,t}return e.mixin=function(t){for(var n=Object.keys(t),i=0;i<n.length;++i){var o=n[i];Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t,o))}},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},e.prototype.getBounds=function(t,n){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),n||(this._boundsRect||(this._boundsRect=new $),n=this._boundsRect),this._bounds.getRectangle(n)},e.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new $),t=this._localBoundsRect),this._localBounds||(this._localBounds=new nr);var n=this.transform,i=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,a=this._boundsID;this._bounds=this._localBounds;var s=this.getBounds(!1,t);return this.parent=i,this.transform=n,this._bounds=o,this._bounds.updateID+=this._boundsID-a,s},e.prototype.toGlobal=function(t,n,i){return i===void 0&&(i=!1),i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,n)},e.prototype.toLocal=function(t,n,i,o){return n&&(t=n.toGlobal(t,i,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,i)},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(t,n,i,o,a,s,u,l,h){return t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),l===void 0&&(l=0),h===void 0&&(h=0),this.position.x=t,this.position.y=n,this.scale.x=i||1,this.scale.y=o||1,this.rotation=a,this.skew.x=s,this.skew.y=u,this.pivot.x=l,this.pivot.y=h,this},e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this.emit("destroyed"),this.removeAllListeners(),this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!0},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new Ya),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.transform.rotation*kd},set:function(t){this.transform.rotation=t*pe},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask!==t){if(this._mask){var n=this._mask.maskObject||this._mask;n._maskRefCount--,n._maskRefCount===0&&(n.renderable=!0,n.isMask=!1)}if(this._mask=t,this._mask){var n=this._mask.maskObject||this._mask;n._maskRefCount===0&&(n.renderable=!1,n.isMask=!0),n._maskRefCount++}}},enumerable:!1,configurable:!0}),e}(Ke),Ya=function(r){$n(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.sortDirty=null,t}return e}(pt);pt.prototype.displayObjectUpdateTransform=pt.prototype.updateTransform;/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var qa;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(qa||(qa={}));var Ka;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(Ka||(Ka={}));var Za;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(Za||(Za={}));var Ja;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(Ja||(Ja={}));var Qa;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Qa||(Qa={}));var ts;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(ts||(ts={}));var es;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(es||(es={}));var rs;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(rs||(rs={}));var ns;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(ns||(ns={}));var is;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(is||(is={}));var os;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(os||(os={}));var as;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(as||(as={}));var ss;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(ss||(ss={}));var us;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(us||(us={}));var ls;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(ls||(ls={}));var hs;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(hs||(hs={}));var Wn;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Wn||(Wn={}));var fs;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(fs||(fs={}));var cs;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(cs||(cs={}));function Vd(r,e){return r.zIndex===e.zIndex?r._lastSortedIndex-e._lastSortedIndex:r.zIndex-e.zIndex}var Vt=function(r){$n(e,r);function e(){var t=r.call(this)||this;return t.children=[],t.sortableChildren=N.SORTABLE_CHILDREN,t.sortDirty=!1,t}return e.prototype.onChildrenChange=function(t){},e.prototype.addChild=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(n.length>1)for(var o=0;o<n.length;o++)this.addChild(n[o]);else{var a=n[0];a.parent&&a.parent.removeChild(a),a.parent=this,this.sortDirty=!0,a.transform._parentID=-1,this.children.push(a),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",a,this,this.children.length-1),a.emit("added",this)}return n[0]},e.prototype.addChildAt=function(t,n){if(n<0||n>this.children.length)throw new Error(t+"addChildAt: The index "+n+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(n,0,t),this._boundsID++,this.onChildrenChange(n),t.emit("added",this),this.emit("childAdded",t,this,n),t},e.prototype.swapChildren=function(t,n){if(t!==n){var i=this.getChildIndex(t),o=this.getChildIndex(n);this.children[i]=n,this.children[o]=t,this.onChildrenChange(i<o?i:o)}},e.prototype.getChildIndex=function(t){var n=this.children.indexOf(t);if(n===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return n},e.prototype.setChildIndex=function(t,n){if(n<0||n>=this.children.length)throw new Error("The index "+n+" supplied is out of bounds "+this.children.length);var i=this.getChildIndex(t);Ue(this.children,i,1),this.children.splice(n,0,t),this.onChildrenChange(n)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(n.length>1)for(var o=0;o<n.length;o++)this.removeChild(n[o]);else{var a=n[0],s=this.children.indexOf(a);if(s===-1)return null;a.parent=null,a.transform._parentID=-1,Ue(this.children,s,1),this._boundsID++,this.onChildrenChange(s),a.emit("removed",this),this.emit("childRemoved",a,this,s)}return n[0]},e.prototype.removeChildAt=function(t){var n=this.getChildAt(t);return n.parent=null,n.transform._parentID=-1,Ue(this.children,t,1),this._boundsID++,this.onChildrenChange(t),n.emit("removed",this),this.emit("childRemoved",n,this,t),n},e.prototype.removeChildren=function(t,n){t===void 0&&(t=0),n===void 0&&(n=this.children.length);var i=t,o=n,a=o-i,s;if(a>0&&a<=o){s=this.children.splice(i,a);for(var u=0;u<s.length;++u)s[u].parent=null,s[u].transform&&(s[u].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var u=0;u<s.length;++u)s[u].emit("removed",this),this.emit("childRemoved",s[u],this,u);return s}else if(a===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.sortChildren=function(){for(var t=!1,n=0,i=this.children.length;n<i;++n){var o=this.children[n];o._lastSortedIndex=n,!t&&o.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(Vd),this.sortDirty=!1},e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,n=this.children.length;t<n;++t){var i=this.children[t];i.visible&&i.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var n=this.children[t];if(!(!n.visible||!n.renderable))if(n.calculateBounds(),n._mask){var i=n._mask.maskObject||n._mask;i.calculateBounds(),this._bounds.addBoundsMask(n._bounds,i._bounds)}else n.filterArea?this._bounds.addBoundsArea(n._bounds,n.filterArea):this._bounds.addBounds(n._bounds)}this._bounds.updateID=this._boundsID},e.prototype.getLocalBounds=function(t,n){n===void 0&&(n=!1);var i=r.prototype.getLocalBounds.call(this,t);if(!n)for(var o=0,a=this.children.length;o<a;++o){var s=this.children[o];s.visible&&s.updateTransform()}return i},e.prototype._calculateBounds=function(){},e.prototype.render=function(t){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else{this._render(t);for(var n=0,i=this.children.length;n<i;++n)this.children[n].render(t)}},e.prototype.renderAdvanced=function(t){var n=this.filters,i=this._mask;if(n){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<n.length;o++)n[o].enabled&&this._enabledFilters.push(n[o])}var a=n&&this._enabledFilters&&this._enabledFilters.length||i&&(!i.isMaskData||i.enabled&&(i.autoDetect||i.type!==Wn.NONE));a&&t.batch.flush(),n&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),i&&t.mask.push(this,this._mask),this._render(t);for(var o=0,s=this.children.length;o<s;o++)this.children[o].render(t);a&&t.batch.flush(),i&&t.mask.pop(this),n&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},e.prototype._render=function(t){},e.prototype.destroy=function(t){r.prototype.destroy.call(this),this.sortDirty=!1;var n=typeof t=="boolean"?t:t&&t.children,i=this.removeChildren(0,this.children.length);if(n)for(var o=0;o<i.length;++o)i[o].destroy(t)},Object.defineProperty(e.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var n=this.getLocalBounds().width;n!==0?this.scale.x=t/n:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var n=this.getLocalBounds().height;n!==0?this.scale.y=t/n:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),e}(pt);Vt.prototype.containerUpdateTransform=Vt.prototype.updateTransform;/*!
 * @pixi/accessibility - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var $d={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};pt.mixin($d);var Wd=9,kr=100,Yd=0,qd=0,ds=2,ps=1,Kd=-1e3,Zd=-1e3,Jd=2,Qd=function(){function r(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(Dt.tablet||Dt.phone)&&this.createTouchHook();var t=document.createElement("div");t.style.width=kr+"px",t.style.height=kr+"px",t.style.position="absolute",t.style.top=Yd+"px",t.style.left=qd+"px",t.style.zIndex=ds.toString(),this.div=t,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),self.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(r.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),r.prototype.createTouchHook=function(){var e=this,t=document.createElement("button");t.style.width=ps+"px",t.style.height=ps+"px",t.style.position="absolute",t.style.top=Kd+"px",t.style.left=Zd+"px",t.style.zIndex=Jd.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",function(){e._isMobileAccessibility=!0,e.activate(),e.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t},r.prototype.destroyTouchHook=function(){!this._hookDiv||(document.body.removeChild(this._hookDiv),this._hookDiv=null)},r.prototype.activate=function(){var e;this._isActive||(this._isActive=!0,self.document.addEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(e=this.renderer.view.parentNode)===null||e===void 0||e.appendChild(this.div))},r.prototype.deactivate=function(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(e=this.div.parentNode)===null||e===void 0||e.removeChild(this.div))},r.prototype.updateAccessibleObjects=function(e){if(!(!e.visible||!e.accessibleChildren)){e.accessible&&e.interactive&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);var t=e.children;if(t)for(var n=0;n<t.length;n++)this.updateAccessibleObjects(t[n])}},r.prototype.update=function(){var e=performance.now();if(!(Dt.android.device&&e<this.androidUpdateCount)&&(this.androidUpdateCount=e+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),n=t.left,i=t.top,o=t.width,a=t.height,s=this.renderer,u=s.width,l=s.height,h=s.resolution,f=o/u*h,c=a/l*h,d=this.div;d.style.left=n+"px",d.style.top=i+"px",d.style.width=u+"px",d.style.height=l+"px";for(var p=0;p<this.children.length;p++){var v=this.children[p];if(v.renderId!==this.renderId)v._accessibleActive=!1,Ue(this.children,p,1),this.div.removeChild(v._accessibleDiv),this.pool.push(v._accessibleDiv),v._accessibleDiv=null,p--;else{d=v._accessibleDiv;var _=v.hitArea,m=v.worldTransform;v.hitArea?(d.style.left=(m.tx+_.x*m.a)*f+"px",d.style.top=(m.ty+_.y*m.d)*c+"px",d.style.width=_.width*m.a*f+"px",d.style.height=_.height*m.d*c+"px"):(_=v.getBounds(),this.capHitArea(_),d.style.left=_.x*f+"px",d.style.top=_.y*c+"px",d.style.width=_.width*f+"px",d.style.height=_.height*c+"px",d.title!==v.accessibleTitle&&v.accessibleTitle!==null&&(d.title=v.accessibleTitle),d.getAttribute("aria-label")!==v.accessibleHint&&v.accessibleHint!==null&&d.setAttribute("aria-label",v.accessibleHint)),(v.accessibleTitle!==d.title||v.tabIndex!==d.tabIndex)&&(d.title=v.accessibleTitle,d.tabIndex=v.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},r.prototype.updateDebugHTML=function(e){e.innerHTML="type: "+e.type+"</br> title : "+e.title+"</br> tabIndex: "+e.tabIndex},r.prototype.capHitArea=function(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);var t=this.renderer,n=t.width,i=t.height;e.x+e.width>n&&(e.width=n-e.x),e.y+e.height>i&&(e.height=i-e.y)},r.prototype.addChild=function(e){var t=this.pool.pop();t||(t=document.createElement("button"),t.style.width=kr+"px",t.style.height=kr+"px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=ds.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title="displayObject "+e.tabIndex),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex},r.prototype._onClick=function(e){var t=this.renderer.plugins.interaction,n=e.target.displayObject,i=t.eventData;t.dispatchEvent(n,"click",i),t.dispatchEvent(n,"pointertap",i),t.dispatchEvent(n,"tap",i)},r.prototype._onFocus=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive");var t=this.renderer.plugins.interaction,n=e.target.displayObject,i=t.eventData;t.dispatchEvent(n,"mouseover",i)},r.prototype._onFocusOut=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite");var t=this.renderer.plugins.interaction,n=e.target.displayObject,i=t.eventData;t.dispatchEvent(n,"mouseout",i)},r.prototype._onKeyDown=function(e){e.keyCode===Wd&&this.activate()},r.prototype._onMouseMove=function(e){e.movementX===0&&e.movementY===0||this.deactivate()},r.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},r}();/*!
 * @pixi/ticker - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */N.TARGET_FPMS=.06;var Jt;(function(r){r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY"})(Jt||(Jt={}));var Yn=function(){function r(e,t,n,i){t===void 0&&(t=null),n===void 0&&(n=0),i===void 0&&(i=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=t,this.priority=n,this.once=i}return r.prototype.match=function(e,t){return t===void 0&&(t=null),this.fn===e&&this.context===t},r.prototype.emit=function(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},r.prototype.connect=function(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this},r.prototype.destroy=function(e){e===void 0&&(e=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=e?null:t,this.previous=null,t},r}(),Ct=function(){function r(){var e=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Yn(null,null,1/0),this.deltaMS=1/N.TARGET_FPMS,this.elapsedMS=1/N.TARGET_FPMS,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&e._requestId===null&&e._head.next&&(e._requestId=requestAnimationFrame(e._tick)))}}return r.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},r.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},r.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},r.prototype.add=function(e,t,n){return n===void 0&&(n=Jt.NORMAL),this._addListener(new Yn(e,t,n))},r.prototype.addOnce=function(e,t,n){return n===void 0&&(n=Jt.NORMAL),this._addListener(new Yn(e,t,n,!0))},r.prototype._addListener=function(e){var t=this._head.next,n=this._head;if(!t)e.connect(n);else{for(;t;){if(e.priority>t.priority){e.connect(n);break}n=t,t=t.next}e.previous||e.connect(n)}return this._startIfPossible(),this},r.prototype.remove=function(e,t){for(var n=this._head.next;n;)n.match(e,t)?n=n.destroy():n=n.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(r.prototype,"count",{get:function(){if(!this._head)return 0;for(var e=0,t=this._head;t=t.next;)e++;return e},enumerable:!1,configurable:!0}),r.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},r.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},r.prototype.destroy=function(){if(!this._protected){this.stop();for(var e=this._head.next;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}},r.prototype.update=function(e){e===void 0&&(e=performance.now());var t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var n=e-this._lastFrame|0;if(n<this._minElapsedMS)return;this._lastFrame=e-n%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*N.TARGET_FPMS;for(var i=this._head,o=i.next;o;)o=o.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e},Object.defineProperty(r.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(e){var t=Math.min(this.maxFPS,e),n=Math.min(Math.max(0,t)/1e3,N.TARGET_FPMS);this._maxElapsedMS=1/n},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(e){if(e===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"shared",{get:function(){if(!r._shared){var e=r._shared=new r;e.autoStart=!0,e._protected=!0}return r._shared},enumerable:!1,configurable:!0}),Object.defineProperty(r,"system",{get:function(){if(!r._system){var e=r._system=new r;e.autoStart=!0,e._protected=!0}return r._system},enumerable:!1,configurable:!0}),r}(),tp=function(){function r(){}return r.init=function(e){var t=this;e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set:function(n){this._ticker&&this._ticker.remove(this.render,this),this._ticker=n,n&&n.add(this.render,this,Jt.LOW)},get:function(){return this._ticker}}),this.stop=function(){t._ticker.stop()},this.start=function(){t._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?Ct.shared:new Ct,e.autoStart&&this.start()},r.destroy=function(){if(this._ticker){var e=this._ticker;this.ticker=null,e.destroy()}},r}();/*!
 * @pixi/interaction - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var vs=function(){function r(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new q,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(r.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),r.prototype.getLocalPosition=function(e,t,n){return e.worldTransform.applyInverse(n||this.global,t)},r.prototype.copyEvent=function(e){"isPrimary"in e&&e.isPrimary&&(this.isPrimary=!0),this.button="button"in e&&e.button;var t="buttons"in e&&e.buttons;this.buttons=Number.isInteger(t)?t:"which"in e&&e.which,this.width="width"in e&&e.width,this.height="height"in e&&e.height,this.tiltX="tiltX"in e&&e.tiltX,this.tiltY="tiltY"in e&&e.tiltY,this.pointerType="pointerType"in e&&e.pointerType,this.pressure="pressure"in e&&e.pressure,this.rotationAngle="rotationAngle"in e&&e.rotationAngle,this.twist="twist"in e&&e.twist||0,this.tangentialPressure="tangentialPressure"in e&&e.tangentialPressure||0},r.prototype.reset=function(){this.isPrimary=!1},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var qn=function(r,e){return qn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},qn(r,e)};function ep(r,e){qn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var rp=function(){function r(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return r.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},r.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},r}(),Kn=function(){function r(e){this._pointerId=e,this._flags=r.FLAGS.NONE}return r.prototype._doSet=function(e,t){t?this._flags=this._flags|e:this._flags=this._flags&~e},Object.defineProperty(r.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"flags",{get:function(){return this._flags},set:function(e){this._flags=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"none",{get:function(){return this._flags===r.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"over",{get:function(){return(this._flags&r.FLAGS.OVER)!=0},set:function(e){this._doSet(r.FLAGS.OVER,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rightDown",{get:function(){return(this._flags&r.FLAGS.RIGHT_DOWN)!=0},set:function(e){this._doSet(r.FLAGS.RIGHT_DOWN,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leftDown",{get:function(){return(this._flags&r.FLAGS.LEFT_DOWN)!=0},set:function(e){this._doSet(r.FLAGS.LEFT_DOWN,e)},enumerable:!1,configurable:!0}),r.FLAGS=Object.freeze({NONE:0,OVER:1<<0,LEFT_DOWN:1<<1,RIGHT_DOWN:1<<2}),r}(),np=function(){function r(){this._tempPoint=new q}return r.prototype.recursiveFindHit=function(e,t,n,i,o){if(!t||!t.visible)return!1;var a=e.data.global;o=t.interactive||o;var s=!1,u=o,l=!0;if(t.hitArea?(i&&(t.worldTransform.applyInverse(a,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?s=!0:(i=!1,l=!1)),u=!1):t._mask&&i&&(t._mask.containsPoint&&t._mask.containsPoint(a)||(i=!1)),l&&t.interactiveChildren&&t.children)for(var h=t.children,f=h.length-1;f>=0;f--){var c=h[f],d=this.recursiveFindHit(e,c,n,i,u);if(d){if(!c.parent)continue;u=!1,d&&(e.target&&(i=!1),s=!0)}}return o&&(i&&!e.target&&!t.hitArea&&t.containsPoint&&t.containsPoint(a)&&(s=!0),t.interactive&&(s&&!e.target&&(e.target=t),n&&n(e,t,!!s))),s},r.prototype.findHit=function(e,t,n,i){this.recursiveFindHit(e,t,n,i,!1)},r}(),ip={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(r){r?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};pt.mixin(ip);var Hr=1,Xr={target:null,data:{global:null}},op=function(r){ep(e,r);function e(t,n){var i=r.call(this)||this;return n=n||{},i.renderer=t,i.autoPreventDefault=n.autoPreventDefault!==void 0?n.autoPreventDefault:!0,i.interactionFrequency=n.interactionFrequency||10,i.mouse=new vs,i.mouse.identifier=Hr,i.mouse.global.set(-999999),i.activeInteractionData={},i.activeInteractionData[Hr]=i.mouse,i.interactionDataPool=[],i.eventData=new rp,i.interactionDOMElement=null,i.moveWhenInside=!1,i.eventsAdded=!1,i.tickerAdded=!1,i.mouseOverRenderer=!("PointerEvent"in self),i.supportsTouchEvents="ontouchstart"in self,i.supportsPointerEvents=!!self.PointerEvent,i.onPointerUp=i.onPointerUp.bind(i),i.processPointerUp=i.processPointerUp.bind(i),i.onPointerCancel=i.onPointerCancel.bind(i),i.processPointerCancel=i.processPointerCancel.bind(i),i.onPointerDown=i.onPointerDown.bind(i),i.processPointerDown=i.processPointerDown.bind(i),i.onPointerMove=i.onPointerMove.bind(i),i.processPointerMove=i.processPointerMove.bind(i),i.onPointerOut=i.onPointerOut.bind(i),i.processPointerOverOut=i.processPointerOverOut.bind(i),i.onPointerOver=i.onPointerOver.bind(i),i.cursorStyles={default:"inherit",pointer:"pointer"},i.currentCursorMode=null,i.cursor=null,i.resolution=1,i.delayedEvents=[],i.search=new np,i._tempDisplayObject=new Ya,i._eventListenerOptions={capture:!0,passive:!1},i._useSystemTicker=n.useSystemTicker!==void 0?n.useSystemTicker:!0,i.setTargetElement(i.renderer.view,i.renderer.resolution),i}return Object.defineProperty(e.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),e.prototype.hitTest=function(t,n){return Xr.target=null,Xr.data.global=t,n||(n=this.lastObjectRendered),this.processInteractive(Xr,n,null,!0),Xr.target},e.prototype.setTargetElement=function(t,n){n===void 0&&(n=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=n,this.addEvents(),this.addTickerListener()},e.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(Ct.system.add(this.tickerUpdate,this,Jt.INTERACTION),this.tickerAdded=!0)},e.prototype.removeTickerListener=function(){!this.tickerAdded||(Ct.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},e.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(self.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},e.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(self.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},e.prototype.tickerUpdate=function(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},e.prototype.update=function(){if(!!this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var t in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var n=this.activeInteractionData[t];if(n.originalEvent&&n.pointerType!=="touch"){var i=this.configureInteractionEventForDOMEvent(this.eventData,n.originalEvent,n);this.processInteractive(i,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t){t=t||"default";var n=!0;if(self.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(n=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var i=this.cursorStyles[t];if(i)switch(typeof i){case"string":n&&(this.interactionDOMElement.style.cursor=i);break;case"function":i(t);break;case"object":n&&Object.assign(this.interactionDOMElement.style,i);break}else n&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,n,i){(!i.stopPropagationHint||t===i.stopsPropagatingAt)&&(i.currentTarget=t,i.type=n,t.emit(n,i),t[n]&&t[n](i))},e.prototype.delayDispatchEvent=function(t,n,i){this.delayedEvents.push({displayObject:t,eventString:n,eventData:i})},e.prototype.mapPositionToPoint=function(t,n,i){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var a=1/this.resolution;t.x=(n-o.left)*(this.interactionDOMElement.width/o.width)*a,t.y=(i-o.top)*(this.interactionDOMElement.height/o.height)*a},e.prototype.processInteractive=function(t,n,i,o){var a=this.search.findHit(t,n,i,o),s=this.delayedEvents;if(!s.length)return a;t.stopPropagationHint=!1;var u=s.length;this.delayedEvents=[];for(var l=0;l<u;l++){var h=s[l],f=h.displayObject,c=h.eventString,d=h.eventData;d.stopsPropagatingAt===f&&(d.stopPropagationHint=!0),this.dispatchEvent(f,c,d)}return a},e.prototype.onPointerDown=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t);if(this.autoPreventDefault&&n[0].isNormalized){var i=t.cancelable||!("cancelable"in t);i&&t.preventDefault()}for(var o=n.length,a=0;a<o;a++){var s=n[a],u=this.getInteractionDataForPointerId(s),l=this.configureInteractionEventForDOMEvent(this.eventData,s,u);if(l.data.originalEvent=t,this.processInteractive(l,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",l),s.pointerType==="touch")this.emit("touchstart",l);else if(s.pointerType==="mouse"||s.pointerType==="pen"){var h=s.button===2;this.emit(h?"rightdown":"mousedown",this.eventData)}}}},e.prototype.processPointerDown=function(t,n,i){var o=t.data,a=t.data.identifier;if(i){if(n.trackedPointers[a]||(n.trackedPointers[a]=new Kn(a)),this.dispatchEvent(n,"pointerdown",t),o.pointerType==="touch")this.dispatchEvent(n,"touchstart",t);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var s=o.button===2;s?n.trackedPointers[a].rightDown=!0:n.trackedPointers[a].leftDown=!0,this.dispatchEvent(n,s?"rightdown":"mousedown",t)}}},e.prototype.onPointerComplete=function(t,n,i){for(var o=this.normalizeToPointerData(t),a=o.length,s=t.target!==this.interactionDOMElement?"outside":"",u=0;u<a;u++){var l=o[u],h=this.getInteractionDataForPointerId(l),f=this.configureInteractionEventForDOMEvent(this.eventData,l,h);if(f.data.originalEvent=t,this.processInteractive(f,this.lastObjectRendered,i,n||!s),this.emit(n?"pointercancel":"pointerup"+s,f),l.pointerType==="mouse"||l.pointerType==="pen"){var c=l.button===2;this.emit(c?"rightup"+s:"mouseup"+s,f)}else l.pointerType==="touch"&&(this.emit(n?"touchcancel":"touchend"+s,f),this.releaseInteractionDataForPointerId(l.pointerId))}},e.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!0,this.processPointerCancel)},e.prototype.processPointerCancel=function(t,n){var i=t.data,o=t.data.identifier;n.trackedPointers[o]!==void 0&&(delete n.trackedPointers[o],this.dispatchEvent(n,"pointercancel",t),i.pointerType==="touch"&&this.dispatchEvent(n,"touchcancel",t))},e.prototype.onPointerUp=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!1,this.processPointerUp)},e.prototype.processPointerUp=function(t,n,i){var o=t.data,a=t.data.identifier,s=n.trackedPointers[a],u=o.pointerType==="touch",l=o.pointerType==="mouse"||o.pointerType==="pen",h=!1;if(l){var f=o.button===2,c=Kn.FLAGS,d=f?c.RIGHT_DOWN:c.LEFT_DOWN,p=s!==void 0&&s.flags&d;i?(this.dispatchEvent(n,f?"rightup":"mouseup",t),p&&(this.dispatchEvent(n,f?"rightclick":"click",t),h=!0)):p&&this.dispatchEvent(n,f?"rightupoutside":"mouseupoutside",t),s&&(f?s.rightDown=!1:s.leftDown=!1)}i?(this.dispatchEvent(n,"pointerup",t),u&&this.dispatchEvent(n,"touchend",t),s&&((!l||h)&&this.dispatchEvent(n,"pointertap",t),u&&(this.dispatchEvent(n,"tap",t),s.over=!1))):s&&(this.dispatchEvent(n,"pointerupoutside",t),u&&this.dispatchEvent(n,"touchendoutside",t)),s&&s.none&&delete n.trackedPointers[a]},e.prototype.onPointerMove=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t);(n[0].pointerType==="mouse"||n[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var i=n.length,o=0;o<i;o++){var a=n[o],s=this.getInteractionDataForPointerId(a),u=this.configureInteractionEventForDOMEvent(this.eventData,a,s);u.data.originalEvent=t,this.processInteractive(u,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",u),a.pointerType==="touch"&&this.emit("touchmove",u),(a.pointerType==="mouse"||a.pointerType==="pen")&&this.emit("mousemove",u)}n[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},e.prototype.processPointerMove=function(t,n,i){var o=t.data,a=o.pointerType==="touch",s=o.pointerType==="mouse"||o.pointerType==="pen";s&&this.processPointerOverOut(t,n,i),(!this.moveWhenInside||i)&&(this.dispatchEvent(n,"pointermove",t),a&&this.dispatchEvent(n,"touchmove",t),s&&this.dispatchEvent(n,"mousemove",t))},e.prototype.onPointerOut=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var n=this.normalizeToPointerData(t),i=n[0];i.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(i),a=this.configureInteractionEventForDOMEvent(this.eventData,i,o);a.data.originalEvent=i,this.processInteractive(a,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",a),i.pointerType==="mouse"||i.pointerType==="pen"?this.emit("mouseout",a):this.releaseInteractionDataForPointerId(o.identifier)}},e.prototype.processPointerOverOut=function(t,n,i){var o=t.data,a=t.data.identifier,s=o.pointerType==="mouse"||o.pointerType==="pen",u=n.trackedPointers[a];i&&!u&&(u=n.trackedPointers[a]=new Kn(a)),u!==void 0&&(i&&this.mouseOverRenderer?(u.over||(u.over=!0,this.delayDispatchEvent(n,"pointerover",t),s&&this.delayDispatchEvent(n,"mouseover",t)),s&&this.cursor===null&&(this.cursor=n.cursor)):u.over&&(u.over=!1,this.dispatchEvent(n,"pointerout",this.eventData),s&&this.dispatchEvent(n,"mouseout",t),u.none&&delete n.trackedPointers[a]))},e.prototype.onPointerOver=function(t){var n=this.normalizeToPointerData(t),i=n[0],o=this.getInteractionDataForPointerId(i),a=this.configureInteractionEventForDOMEvent(this.eventData,i,o);a.data.originalEvent=i,i.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",a),(i.pointerType==="mouse"||i.pointerType==="pen")&&this.emit("mouseover",a)},e.prototype.getInteractionDataForPointerId=function(t){var n=t.pointerId,i;return n===Hr||t.pointerType==="mouse"?i=this.mouse:this.activeInteractionData[n]?i=this.activeInteractionData[n]:(i=this.interactionDataPool.pop()||new vs,i.identifier=n,this.activeInteractionData[n]=i),i.copyEvent(t),i},e.prototype.releaseInteractionDataForPointerId=function(t){var n=this.activeInteractionData[t];n&&(delete this.activeInteractionData[t],n.reset(),this.interactionDataPool.push(n))},e.prototype.configureInteractionEventForDOMEvent=function(t,n,i){return t.data=i,this.mapPositionToPoint(i.global,n.clientX,n.clientY),n.pointerType==="touch"&&(n.globalX=i.global.x,n.globalY=i.global.y),i.originalEvent=n,t.reset(),t},e.prototype.normalizeToPointerData=function(t){var n=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var i=0,o=t.changedTouches.length;i<o;i++){var a=t.changedTouches[i];typeof a.button=="undefined"&&(a.button=t.touches.length?1:0),typeof a.buttons=="undefined"&&(a.buttons=t.touches.length?1:0),typeof a.isPrimary=="undefined"&&(a.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof a.width=="undefined"&&(a.width=a.radiusX||1),typeof a.height=="undefined"&&(a.height=a.radiusY||1),typeof a.tiltX=="undefined"&&(a.tiltX=0),typeof a.tiltY=="undefined"&&(a.tiltY=0),typeof a.pointerType=="undefined"&&(a.pointerType="touch"),typeof a.pointerId=="undefined"&&(a.pointerId=a.identifier||0),typeof a.pressure=="undefined"&&(a.pressure=a.force||.5),typeof a.twist=="undefined"&&(a.twist=0),typeof a.tangentialPressure=="undefined"&&(a.tangentialPressure=0),typeof a.layerX=="undefined"&&(a.layerX=a.offsetX=a.clientX),typeof a.layerY=="undefined"&&(a.layerY=a.offsetY=a.clientY),a.isNormalized=!0,n.push(a)}else if(!self.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof self.PointerEvent))){var s=t;typeof s.isPrimary=="undefined"&&(s.isPrimary=!0),typeof s.width=="undefined"&&(s.width=1),typeof s.height=="undefined"&&(s.height=1),typeof s.tiltX=="undefined"&&(s.tiltX=0),typeof s.tiltY=="undefined"&&(s.tiltY=0),typeof s.pointerType=="undefined"&&(s.pointerType="mouse"),typeof s.pointerId=="undefined"&&(s.pointerId=Hr),typeof s.pressure=="undefined"&&(s.pressure=.5),typeof s.twist=="undefined"&&(s.twist=0),typeof s.tangentialPressure=="undefined"&&(s.tangentialPressure=0),s.isNormalized=!0,n.push(s)}else n.push(t);return n},e.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},e}(Ke);/*!
 * @pixi/runner - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Pt=function(){function r(e){this.items=[],this._name=e,this._aliasCount=0}return r.prototype.emit=function(e,t,n,i,o,a,s,u){if(arguments.length>8)throw new Error("max arguments reached");var l=this,h=l.name,f=l.items;this._aliasCount++;for(var c=0,d=f.length;c<d;c++)f[c][h](e,t,n,i,o,a,s,u);return f===this.items&&this._aliasCount--,this},r.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},r.prototype.add=function(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this},r.prototype.remove=function(e){var t=this.items.indexOf(e);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},r.prototype.contains=function(e){return this.items.indexOf(e)!==-1},r.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},r.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(r.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),r}();Object.defineProperties(Pt.prototype,{dispatch:{value:Pt.prototype.emit},run:{value:Pt.prototype.emit}});/*!
 * @pixi/core - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */N.PREFER_ENV=Dt.any?qt.WEBGL:qt.WEBGL2;N.STRICT_TEXTURE_CACHE=!1;var jr=[];function Zn(r,e){if(!r)return null;var t="";if(typeof r=="string"){var n=/\.(\w{3,4})(?:$|\?|#)/i.exec(r);n&&(t=n[1].toLowerCase())}for(var i=jr.length-1;i>=0;--i){var o=jr[i];if(o.test&&o.test(r,t))return new o(r,e)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Jn=function(r,e){return Jn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Jn(r,e)};function et(r,e){Jn(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Qn=function(){return Qn=Object.assign||function(e){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Qn.apply(this,arguments)};function ap(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&(t[n[i]]=r[n[i]]);return t}var Ge=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new Pt("setRealSize"),this.onUpdate=new Pt("update"),this.onError=new Pt("onError")}return r.prototype.bind=function(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},r.prototype.unbind=function(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)},r.prototype.resize=function(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))},Object.defineProperty(r.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),r.prototype.update=function(){this.destroyed||this.onUpdate.emit()},r.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),r.prototype.style=function(e,t,n){return!1},r.prototype.dispose=function(){},r.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},r.test=function(e,t){return!1},r}(),ir=function(r){et(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height;if(!a||!s)throw new Error("BufferResource width or height invalid");return i=r.call(this,a,s)||this,i.data=t,i}return e.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===Xt.UNPACK);var a=n.realWidth,s=n.realHeight;return i.width===a&&i.height===s?o.texSubImage2D(n.target,0,0,0,a,s,n.format,i.type,this.data):(i.width=a,i.height=s,o.texImage2D(n.target,0,i.internalFormat,a,s,0,n.format,i.type,this.data)),!0},e.prototype.dispose=function(){this.data=null},e.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},e}(Ge),sp={scaleMode:Rt.NEAREST,format:R.RGBA,alphaMode:Xt.NPM},K=function(r){et(e,r);function e(t,n){t===void 0&&(t=null),n===void 0&&(n=null);var i=r.call(this)||this;n=n||{};var o=n.alphaMode,a=n.mipmap,s=n.anisotropicLevel,u=n.scaleMode,l=n.width,h=n.height,f=n.wrapMode,c=n.format,d=n.type,p=n.target,v=n.resolution,_=n.resourceOptions;return t&&!(t instanceof Ge)&&(t=Zn(t,_),t.internal=!0),i.resolution=v||N.RESOLUTION,i.width=Math.round((l||0)*i.resolution)/i.resolution,i.height=Math.round((h||0)*i.resolution)/i.resolution,i._mipmap=a!==void 0?a:N.MIPMAP_TEXTURES,i.anisotropicLevel=s!==void 0?s:N.ANISOTROPIC_LEVEL,i._wrapMode=f||N.WRAP_MODE,i._scaleMode=u!==void 0?u:N.SCALE_MODE,i.format=c||R.RGBA,i.type=d||D.UNSIGNED_BYTE,i.target=p||he.TEXTURE_2D,i.alphaMode=o!==void 0?o:Xt.UNPACK,i.uid=fe(),i.touched=0,i.isPowerOfTwo=!1,i._refreshPOT(),i._glTextures={},i.dirtyId=0,i.dirtyStyleId=0,i.cacheId=null,i.valid=l>0&&h>0,i.textureCacheIds=[],i.destroyed=!1,i.resource=null,i._batchEnabled=0,i._batchLocation=0,i.parentTextureArray=null,i.setResource(t),i}return Object.defineProperty(e.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),e.prototype.setStyle=function(t,n){var i;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,i=!0),n!==void 0&&n!==this.mipmap&&(this.mipmap=n,i=!0),i&&this.dirtyStyleId++,this},e.prototype.setSize=function(t,n,i){return i=i||this.resolution,this.setRealSize(t*i,n*i,i)},e.prototype.setRealSize=function(t,n,i){return this.resolution=i||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(n)/this.resolution,this._refreshPOT(),this.update(),this},e.prototype._refreshPOT=function(){this.isPowerOfTwo=Ha(this.realWidth)&&Ha(this.realHeight)},e.prototype.setResolution=function(t){var n=this.resolution;return n===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*n)/t,this.height=Math.round(this.height*n)/t,this.emit("update",this)),this._refreshPOT(),this)},e.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},e.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},e.prototype.onError=function(t){this.emit("error",this,t)},e.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete de[this.cacheId],delete Zt[this.cacheId],this.cacheId=null),this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.castToBaseTexture=function(){return this},e.from=function(t,n,i){i===void 0&&(i=N.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=n&&n.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+fe()}a=t._pixiId}var u=de[a];if(o&&i&&!u)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return u||(u=new e(t,n),u.cacheId=a,e.addToCache(u,a)),u},e.fromBuffer=function(t,n,i,o){t=t||new Float32Array(n*i*4);var a=new ir(t,{width:n,height:i}),s=t instanceof Float32Array?D.FLOAT:D.UNSIGNED_BYTE;return new e(a,Object.assign(sp,o||{width:n,height:i,type:s}))},e.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),de[n]&&console.warn("BaseTexture added to the cache with an id ["+n+"] that already had an entry"),de[n]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var n=de[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete de[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete de[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},e._globalBatch=0,e}(Ke),ti=function(r){et(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height;i=r.call(this,a,s)||this,i.items=[],i.itemDirtyIds=[];for(var u=0;u<t;u++){var l=new K;i.items.push(l),i.itemDirtyIds.push(-2)}return i.length=t,i._load=null,i.baseTexture=null,i}return e.prototype.initFromArray=function(t,n){for(var i=0;i<this.length;i++)!t[i]||(t[i].castToBaseTexture?this.addBaseTextureAt(t[i].castToBaseTexture(),i):t[i]instanceof Ge?this.addResourceAt(t[i],i):this.addResourceAt(Zn(t[i],n),i))},e.prototype.dispose=function(){for(var t=0,n=this.length;t<n;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},e.prototype.addResourceAt=function(t,n){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[n].setResource(t),this},e.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");r.prototype.bind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=t,this.items[n].on("update",t.update,t)},e.prototype.unbind=function(t){r.prototype.unbind.call(this,t);for(var n=0;n<this.length;n++)this.items[n].parentTextureArray=null,this.items[n].off("update",t.update,t)},e.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.items.map(function(o){return o.resource}).filter(function(o){return o}),i=n.map(function(o){return o.load()});return this._load=Promise.all(i).then(function(){var o=t.items[0],a=o.realWidth,s=o.realHeight;return t.resize(a,s),Promise.resolve(t)}),this._load},e}(Ge),_s=function(r){et(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height,u,l;return Array.isArray(t)?(u=t,l=t.length):l=t,i=r.call(this,l,{width:a,height:s})||this,u&&i.initFromArray(u,n),i}return e.prototype.addBaseTextureAt=function(t,n){if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("ArrayResource does not support RenderTexture");return this},e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=he.TEXTURE_2D_ARRAY},e.prototype.upload=function(t,n,i){var o=this,a=o.length,s=o.itemDirtyIds,u=o.items,l=t.gl;i.dirtyId<0&&l.texImage3D(l.TEXTURE_2D_ARRAY,0,i.internalFormat,this._width,this._height,a,0,n.format,i.type,null);for(var h=0;h<a;h++){var f=u[h];s[h]<f.dirtyId&&(s[h]=f.dirtyId,f.valid&&l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,h,f.resource.width,f.resource.height,1,n.format,i.type,f.resource.source))}return!0},e}(ti),Qt=function(r){et(e,r);function e(t){var n=this,i=t,o=i.naturalWidth||i.videoWidth||i.width,a=i.naturalHeight||i.videoHeight||i.height;return n=r.call(this,o,a)||this,n.source=t,n.noSubImage=!1,n}return e.crossOrigin=function(t,n,i){i===void 0&&n.indexOf("data:")!==0?t.crossOrigin=Dd(n):i!==!1&&(t.crossOrigin=typeof i=="string"?i:"anonymous")},e.prototype.upload=function(t,n,i,o){var a=t.gl,s=n.realWidth,u=n.realHeight;return o=o||this.source,a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===Xt.UNPACK),!this.noSubImage&&n.target===a.TEXTURE_2D&&i.width===s&&i.height===u?a.texSubImage2D(a.TEXTURE_2D,0,0,0,n.format,i.type,o):(i.width=s,i.height=u,a.texImage2D(n.target,0,i.internalFormat,n.format,i.type,o)),!0},e.prototype.update=function(){if(!this.destroyed){var t=this.source,n=t.naturalWidth||t.videoWidth||t.width,i=t.naturalHeight||t.videoHeight||t.height;this.resize(n,i),r.prototype.update.call(this)}},e.prototype.dispose=function(){this.source=null},e}(Ge),ei=function(r){et(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){var n=self.OffscreenCanvas;return n&&t instanceof n?!0:self.HTMLCanvasElement&&t instanceof HTMLCanvasElement},e}(Qt),ms=function(r){et(e,r);function e(t,n){var i=this,o=n||{},a=o.width,s=o.height,u=o.autoLoad,l=o.linkBaseTexture;if(t&&t.length!==e.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");i=r.call(this,6,{width:a,height:s})||this;for(var h=0;h<e.SIDES;h++)i.items[h].target=he.TEXTURE_CUBE_MAP_POSITIVE_X+h;return i.linkBaseTexture=l!==!1,t&&i.initFromArray(t,n),u!==!1&&i.load(),i}return e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=he.TEXTURE_CUBE_MAP},e.prototype.addBaseTextureAt=function(t,n,i){if(!this.items[n])throw new Error("Index "+n+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,n);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=he.TEXTURE_CUBE_MAP_POSITIVE_X+n,t.parentTextureArray=this.baseTexture,this.items[n]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[n]=t,this},e.prototype.upload=function(t,n,i){for(var o=this.itemDirtyIds,a=0;a<e.SIDES;a++){var s=this.items[a];o[a]<s.dirtyId&&(s.valid&&s.resource?(s.resource.upload(t,s,i),o[a]=s.dirtyId):o[a]<-1&&(t.gl.texImage2D(s.target,0,i.internalFormat,n.realWidth,n.realHeight,0,n.format,i.type,null),o[a]=-1))}return!0},e.test=function(t){return Array.isArray(t)&&t.length===e.SIDES},e.SIDES=6,e}(ti),ri=function(r){et(e,r);function e(t,n){var i=this;if(n=n||{},!(t instanceof HTMLImageElement)){var o=new Image;Qt.crossOrigin(o,t,n.crossorigin),o.src=t,t=o}return i=r.call(this,t)||this,!t.complete&&!!i._width&&!!i._height&&(i._width=0,i._height=0),i.url=t.src,i._process=null,i.preserveBitmap=!1,i.createBitmap=(n.createBitmap!==void 0?n.createBitmap:N.CREATE_IMAGE_BITMAP)&&!!self.createImageBitmap,i.alphaMode=typeof n.alphaMode=="number"?n.alphaMode:null,i.bitmap=null,i._load=null,n.autoLoad!==!1&&i.load(),i}return e.prototype.load=function(t){var n=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(i,o){var a=n.source;n.url=a.src;var s=function(){n.destroyed||(a.onload=null,a.onerror=null,n.resize(a.width,a.height),n._load=null,n.createBitmap?i(n.process()):i(n))};a.complete&&a.src?s():(a.onload=s,a.onerror=function(u){o(u),n.onError.emit(u)})}),this._load)},e.prototype.process=function(){var t=this,n=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!self.createImageBitmap)return Promise.resolve(this);var i=self.createImageBitmap,o=!n.crossOrigin||n.crossOrigin==="anonymous";return this._process=fetch(n.src,{mode:o?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return i(a,0,0,n.width,n.height,{premultiplyAlpha:t.alphaMode===Xt.UNPACK?"premultiply":"none"})}).then(function(a){return t.destroyed?Promise.reject():(t.bitmap=a,t.update(),t._process=null,Promise.resolve(t))}),this._process},e.prototype.upload=function(t,n,i){if(typeof this.alphaMode=="number"&&(n.alphaMode=this.alphaMode),!this.createBitmap)return r.prototype.upload.call(this,t,n,i);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(r.prototype.upload.call(this,t,n,i,this.bitmap),!this.preserveBitmap){var o=!0,a=n._glTextures;for(var s in a){var u=a[s];if(u!==i&&u.dirtyId!==n.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},e.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,r.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},e.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},e}(Qt),gs=function(r){et(e,r);function e(t,n){var i=this;return n=n||{},i=r.call(this,document.createElement("canvas"))||this,i._width=0,i._height=0,i.svg=t,i.scale=n.scale||1,i._overrideWidth=n.width,i._overrideHeight=n.height,i._resolve=null,i._crossorigin=n.crossorigin,i._load=null,n.autoLoad!==!1&&i.load(),i}return e.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(n){if(t._resolve=function(){t.resize(t.source.width,t.source.height),n(t)},e.SVG_XML.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},e.prototype._loadSvg=function(){var t=this,n=new Image;Qt.crossOrigin(n,this.svg,this._crossorigin),n.src=this.svg,n.onerror=function(i){!t._resolve||(n.onerror=null,t.onError.emit(i))},n.onload=function(){if(!!t._resolve){var i=n.width,o=n.height;if(!i||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=i*t.scale,s=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(a=t._overrideWidth||t._overrideHeight/o*i,s=t._overrideHeight||t._overrideWidth/i*o),a=Math.round(a),s=Math.round(s);var u=t.source;u.width=a,u.height=s,u._pixiId="canvas_"+fe(),u.getContext("2d").drawImage(n,0,0,i,o,0,0,a,s),t._resolve(),t._resolve=null}}},e.getSize=function(t){var n=e.SVG_SIZE.exec(t),i={};return n&&(i[n[1]]=Math.round(parseFloat(n[3])),i[n[5]]=Math.round(parseFloat(n[7]))),i},e.prototype.dispose=function(){r.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},e.test=function(t,n){return n==="svg"||typeof t=="string"&&/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t)||typeof t=="string"&&e.SVG_XML.test(t)},e.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,e.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,e}(Qt),ys=function(r){et(e,r);function e(t,n){var i=this;if(n=n||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var a=t[0].src||t[0];Qt.crossOrigin(o,a,n.crossorigin);for(var s=0;s<t.length;++s){var u=document.createElement("source"),l=t[s],h=l.src,f=l.mime;h=h||t[s];var c=h.split("?").shift().toLowerCase(),d=c.substr(c.lastIndexOf(".")+1);f=f||e.MIME_TYPES[d]||"video/"+d,u.src=h,u.type=f,o.appendChild(u)}t=o}return i=r.call(this,t)||this,i.noSubImage=!0,i._autoUpdate=!0,i._isConnectedToTicker=!1,i._updateFPS=n.updateFPS||0,i._msToNextUpdate=0,i.autoPlay=n.autoPlay!==!1,i._load=null,i._resolve=null,i._onCanPlay=i._onCanPlay.bind(i),i._onError=i._onError.bind(i),n.autoLoad!==!1&&i.load(),i}return e.prototype.update=function(t){if(!this.destroyed){var n=Ct.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-n),(!this._updateFPS||this._msToNextUpdate<=0)&&(r.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},e.prototype.load=function(){var t=this;if(this._load)return this._load;var n=this.source;return(n.readyState===n.HAVE_ENOUGH_DATA||n.readyState===n.HAVE_FUTURE_DATA)&&n.width&&n.height&&(n.complete=!0),n.addEventListener("play",this._onPlayStart.bind(this)),n.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(n.addEventListener("canplay",this._onCanPlay),n.addEventListener("canplaythrough",this._onCanPlay),n.addEventListener("error",this._onError,!0)),this._load=new Promise(function(i){t.valid?i(t):(t._resolve=i,n.load())}),this._load},e.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},e.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},e.prototype._isSourceReady=function(){var t=this.source;return t.readyState===3||t.readyState===4},e.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(Ct.shared.add(this.update,this),this._isConnectedToTicker=!0)},e.prototype._onPlayStop=function(){this._isConnectedToTicker&&(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1)},e.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var n=this.valid;this.resize(t.videoWidth,t.videoHeight),!n&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},e.prototype.dispose=function(){this._isConnectedToTicker&&(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),r.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(Ct.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),e.test=function(t,n){return self.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.indexOf(n)>-1},e.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],e.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},e}(Qt),xs=function(r){et(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){return!!self.createImageBitmap&&t instanceof ImageBitmap},e}(Qt);jr.push(ri,xs,ei,ys,gs,ir,ms,_s);var bs={__proto__:null,Resource:Ge,BaseImageResource:Qt,INSTALLED:jr,autoDetectResource:Zn,AbstractMultiResource:ti,ArrayResource:_s,BufferResource:ir,CanvasResource:ei,CubeResource:ms,ImageResource:ri,SVGResource:gs,VideoResource:ys,ImageBitmapResource:xs},up=function(r){et(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.upload=function(t,n,i){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.alphaMode===Xt.UNPACK);var a=n.realWidth,s=n.realHeight;return i.width===a&&i.height===s?o.texSubImage2D(n.target,0,0,0,a,s,n.format,i.type,this.data):(i.width=a,i.height=s,o.texImage2D(n.target,0,i.internalFormat,a,s,0,n.format,i.type,this.data)),!0},e}(ir),ni=function(){function r(e,t){this.width=Math.round(e||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Pt("disposeFramebuffer"),this.multisample=_t.NONE}return Object.defineProperty(r.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),r.prototype.addColorTexture=function(e,t){return e===void 0&&(e=0),this.colorTextures[e]=t||new K(null,{scaleMode:Rt.NEAREST,resolution:1,mipmap:Ht.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.addDepthTexture=function(e){return this.depthTexture=e||new K(new up(null,{width:this.width,height:this.height}),{scaleMode:Rt.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:Ht.OFF,format:R.DEPTH_COMPONENT,type:D.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.resize=function(e,t){if(e=Math.round(e),t=Math.round(t),!(e===this.width&&t===this.height)){this.width=e,this.height=t,this.dirtyId++,this.dirtySize++;for(var n=0;n<this.colorTextures.length;n++){var i=this.colorTextures[n],o=i.resolution;i.setSize(e/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(e/o,t/o)}}},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},r}(),Ts=function(r){et(e,r);function e(t){var n=this;if(typeof t=="number"){var i=arguments[0],o=arguments[1],a=arguments[2],s=arguments[3];t={width:i,height:o,scaleMode:a,resolution:s}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:_t.NONE,n=r.call(this,null,t)||this,n.mipmap=Ht.OFF,n.valid=!0,n.clearColor=[0,0,0,0],n.framebuffer=new ni(n.realWidth,n.realHeight).addColorTexture(0,n),n.framebuffer.multisample=t.multisample,n.maskStack=[],n.filterStack=[{}],n}return e.prototype.resize=function(t,n){this.framebuffer.resize(t*this.resolution,n*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},e.prototype.dispose=function(){this.framebuffer.dispose(),r.prototype.dispose.call(this)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},e}(K),Cs=function(){function r(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return r.prototype.set=function(e,t,n){var i=t.width,o=t.height;if(n){var a=e.width/2/i,s=e.height/2/o,u=e.x/i+a,l=e.y/o+s;n=at.add(n,at.NW),this.x0=u+a*at.uX(n),this.y0=l+s*at.uY(n),n=at.add(n,2),this.x1=u+a*at.uX(n),this.y1=l+s*at.uY(n),n=at.add(n,2),this.x2=u+a*at.uX(n),this.y2=l+s*at.uY(n),n=at.add(n,2),this.x3=u+a*at.uX(n),this.y3=l+s*at.uY(n)}else this.x0=e.x/i,this.y0=e.y/o,this.x1=(e.x+e.width)/i,this.y1=e.y/o,this.x2=(e.x+e.width)/i,this.y2=(e.y+e.height)/o,this.x3=e.x/i,this.y3=(e.y+e.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},r.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},r}(),Es=new Cs,G=function(r){et(e,r);function e(t,n,i,o,a,s){var u=r.call(this)||this;if(u.noFrame=!1,n||(u.noFrame=!0,n=new $(0,0,1,1)),t instanceof e&&(t=t.baseTexture),u.baseTexture=t,u._frame=n,u.trim=o,u.valid=!1,u._uvs=Es,u.uvMatrix=null,u.orig=i||n,u._rotate=Number(a||0),a===!0)u._rotate=2;else if(u._rotate%2!=0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=s?new q(s.x,s.y):new q(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=n:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return e.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},e.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},e.prototype.destroy=function(t){if(this.baseTexture){if(t){var n=this.baseTexture.resource;n&&n.url&&Zt[n.url]&&e.removeFromCache(n.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function(){var t=this._frame.clone(),n=this._frame===this.orig?t:this.orig.clone(),i=new e(this.baseTexture,!this.noFrame&&t,n,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(i._frame=t),i},e.prototype.updateUvs=function(){this._uvs===Es&&(this._uvs=new Cs),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.from=function(t,n,i){n===void 0&&(n={}),i===void 0&&(i=N.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else if(t instanceof K){if(!t.cacheId){var s=n&&n.pixiIdPrefix||"pixiid";t.cacheId=s+"-"+fe(),K.addToCache(t,t.cacheId)}a=t.cacheId}else{if(!t._pixiId){var s=n&&n.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+fe()}a=t._pixiId}var u=Zt[a];if(o&&i&&!u)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return!u&&!(t instanceof K)?(n.resolution||(n.resolution=Gr(t)),u=new e(new K(t,n)),u.baseTexture.cacheId=a,K.addToCache(u.baseTexture,a),e.addToCache(u,a)):!u&&t instanceof K&&(u=new e(t),e.addToCache(u,a)),u},e.fromURL=function(t,n){var i=Object.assign({autoLoad:!1},n==null?void 0:n.resourceOptions),o=e.from(t,Object.assign({resourceOptions:i},n),!1),a=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):a.load().then(function(){return Promise.resolve(o)})},e.fromBuffer=function(t,n,i,o){return new e(K.fromBuffer(t,n,i,o))},e.fromLoader=function(t,n,i,o){var a=new K(t,Object.assign({scaleMode:N.SCALE_MODE,resolution:Gr(n)},o)),s=a.resource;s instanceof ri&&(s.url=n);var u=new e(a);return i||(i=n),K.addToCache(u.baseTexture,i),e.addToCache(u,i),i!==n&&(K.addToCache(u.baseTexture,n),e.addToCache(u,n)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(l){u.baseTexture.once("loaded",function(){return l(u)})})},e.addToCache=function(t,n){n&&(t.textureCacheIds.indexOf(n)===-1&&t.textureCacheIds.push(n),Zt[n]&&console.warn("Texture added to the cache with an id ["+n+"] that already had an entry"),Zt[n]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var n=Zt[t];if(n){var i=n.textureCacheIds.indexOf(t);return i>-1&&n.textureCacheIds.splice(i,1),delete Zt[t],n}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)Zt[t.textureCacheIds[o]]===t&&delete Zt[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(e.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var n=t.x,i=t.y,o=t.width,a=t.height,s=n+o>this.baseTexture.width,u=i+a>this.baseTexture.height;if(s||u){var l=s&&u?"and":"or",h="X: "+n+" + "+o+" = "+(n+o)+" > "+this.baseTexture.width,f="Y: "+i+" + "+a+" = "+(i+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(h+" "+l+" "+f))}this.valid=o&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),e.prototype.castToBaseTexture=function(){return this.baseTexture},e}(Ke);function lp(){var r=document.createElement("canvas");r.width=16,r.height=16;var e=r.getContext("2d");return e.fillStyle="white",e.fillRect(0,0,16,16),new G(new K(new ei(r)))}function zr(r){r.destroy=function(){},r.on=function(){},r.once=function(){},r.emit=function(){}}G.EMPTY=new G(new K);zr(G.EMPTY);zr(G.EMPTY.baseTexture);G.WHITE=lp();zr(G.WHITE);zr(G.WHITE.baseTexture);var xe=function(r){et(e,r);function e(t,n){var i=r.call(this,t,n)||this;return i.valid=!0,i.filterFrame=null,i.filterPoolKey=null,i.updateUvs(),i}return Object.defineProperty(e.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,n,i){i===void 0&&(i=!0);var o=this.baseTexture.resolution,a=Math.round(t*o)/o,s=Math.round(n*o)/o;this.valid=a>0&&s>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=s,i&&this.baseTexture.resize(a,s),this.updateUvs()},e.prototype.setResolution=function(t){var n=this.baseTexture;n.resolution!==t&&(n.setResolution(t),this.resize(n.width,n.height,!1))},e.create=function(t){for(var n=arguments,i=[],o=1;o<arguments.length;o++)i[o-1]=n[o];return typeof t=="number"&&(ce("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:i[0],scaleMode:i[1],resolution:i[2]}),new e(new Ts(t))},e}(G),hp=function(){function r(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return r.prototype.createTexture=function(e,t,n){n===void 0&&(n=_t.NONE);var i=new Ts(Object.assign({width:e,height:t,resolution:1,multisample:n},this.textureOptions));return new xe(i)},r.prototype.getOptimalTexture=function(e,t,n,i){n===void 0&&(n=1),i===void 0&&(i=_t.NONE);var o;e=Math.ceil(e*n),t=Math.ceil(t*n),!this.enableFullScreen||e!==this._pixelsWidth||t!==this._pixelsHeight?(e=Ur(e),t=Ur(t),o=((e&65535)<<16|t&65535)>>>0,i>1&&(o+=i*4294967296)):o=i>1?-i:-1,this.texturePool[o]||(this.texturePool[o]=[]);var a=this.texturePool[o].pop();return a||(a=this.createTexture(e,t,i)),a.filterPoolKey=o,a.setResolution(n),a},r.prototype.getFilterTexture=function(e,t,n){var i=this.getOptimalTexture(e.width,e.height,t||e.resolution,n||_t.NONE);return i.filterFrame=e.filterFrame,i},r.prototype.returnTexture=function(e){var t=e.filterPoolKey;e.filterFrame=null,this.texturePool[t].push(e)},r.prototype.returnFilterTexture=function(e){this.returnTexture(e)},r.prototype.clear=function(e){if(e=e!==!1,e)for(var t in this.texturePool){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0)}this.texturePool={}},r.prototype.setScreenSize=function(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){this.enableFullScreen=e.width>0&&e.height>0;for(var t in this.texturePool)if(Number(t)<0){var n=this.texturePool[t];if(n)for(var i=0;i<n.length;i++)n[i].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}},r.SCREEN_KEY=-1,r}(),ws=function(){function r(e,t,n,i,o,a,s){t===void 0&&(t=0),n===void 0&&(n=!1),i===void 0&&(i=D.FLOAT),this.buffer=e,this.size=t,this.normalized=n,this.type=i,this.stride=o,this.start=a,this.instance=s}return r.prototype.destroy=function(){this.buffer=null},r.from=function(e,t,n,i,o){return new r(e,t,n,i,o)},r}(),fp=0,mt=function(){function r(e,t,n){t===void 0&&(t=!0),n===void 0&&(n=!1),this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=n,this.static=t,this.id=fp++,this.disposeRunner=new Pt("disposeBuffer")}return r.prototype.update=function(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(r.prototype,"index",{get:function(){return this.type===zt.ELEMENT_ARRAY_BUFFER},set:function(e){this.type=e?zt.ELEMENT_ARRAY_BUFFER:zt.ARRAY_BUFFER},enumerable:!1,configurable:!0}),r.from=function(e){return e instanceof Array&&(e=new Float32Array(e)),new r(e)},r}(),cp={Float32Array,Uint32Array,Int32Array,Uint8Array};function dp(r,e){for(var t=0,n=0,i={},o=0;o<r.length;o++)n+=e[o],t+=r[o].length;for(var a=new ArrayBuffer(t*4),s=null,u=0,o=0;o<r.length;o++){var l=e[o],h=r[o],f=ka(h);i[f]||(i[f]=new cp[f](a)),s=i[f];for(var c=0;c<h.length;c++){var d=(c/l|0)*n+u,p=c%l;s[d+p]=h[c]}u+=l}return new Float32Array(a)}var Is={5126:4,5123:2,5121:1},pp=0,vp={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},or=function(){function r(e,t){e===void 0&&(e=[]),t===void 0&&(t={}),this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=pp++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Pt("disposeGeometry"),this.refCount=0}return r.prototype.addAttribute=function(e,t,n,i,o,a,s,u){if(n===void 0&&(n=0),i===void 0&&(i=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof mt||(t instanceof Array&&(t=new Float32Array(t)),t=new mt(t));var l=e.split("|");if(l.length>1){for(var h=0;h<l.length;h++)this.addAttribute(l[h],t,n,i,o);return this}var f=this.buffers.indexOf(t);return f===-1&&(this.buffers.push(t),f=this.buffers.length-1),this.attributes[e]=new ws(f,n,i,o,a,s,u),this.instanced=this.instanced||u,this},r.prototype.getAttribute=function(e){return this.attributes[e]},r.prototype.getBuffer=function(e){return this.buffers[this.getAttribute(e).buffer]},r.prototype.addIndex=function(e){return e instanceof mt||(e instanceof Array&&(e=new Uint16Array(e)),e=new mt(e)),e.type=zt.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.indexOf(e)===-1&&this.buffers.push(e),this},r.prototype.getIndex=function(){return this.indexBuffer},r.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var e=[],t=[],n=new mt,i;for(i in this.attributes){var o=this.attributes[i],a=this.buffers[o.buffer];e.push(a.data),t.push(o.size*Is[o.type]/4),o.buffer=0}for(n.data=dp(e,t),i=0;i<this.buffers.length;i++)this.buffers[i]!==this.indexBuffer&&this.buffers[i].destroy();return this.buffers=[n],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},r.prototype.getSize=function(){for(var e in this.attributes){var t=this.attributes[e],n=this.buffers[t.buffer];return n.data.length/(t.stride/4||t.size)}return 0},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},r.prototype.clone=function(){for(var e=new r,t=0;t<this.buffers.length;t++)e.buffers[t]=new mt(this.buffers[t].data.slice(0));for(var t in this.attributes){var n=this.attributes[t];e.attributes[t]=new ws(n.buffer,n.size,n.normalized,n.type,n.stride,n.start,n.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=zt.ELEMENT_ARRAY_BUFFER),e},r.merge=function(e){for(var t=new r,n=[],i=[],o=[],a,s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)i[u]=i[u]||0,i[u]+=a.buffers[u].data.length,o[u]=0}for(var s=0;s<a.buffers.length;s++)n[s]=new vp[ka(a.buffers[s].data)](i[s]),t.buffers[s]=new mt(n[s]);for(var s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)n[u].set(a.buffers[u].data,o[u]),o[u]+=a.buffers[u].data.length}if(t.attributes=a.attributes,a.indexBuffer){t.indexBuffer=t.buffers[a.buffers.indexOf(a.indexBuffer)],t.indexBuffer.type=zt.ELEMENT_ARRAY_BUFFER;for(var l=0,h=0,f=0,c=0,s=0;s<a.buffers.length;s++)if(a.buffers[s]!==a.indexBuffer){c=s;break}for(var s in a.attributes){var d=a.attributes[s];(d.buffer|0)===c&&(h+=d.size*Is[d.type]/4)}for(var s=0;s<e.length;s++){for(var p=e[s].indexBuffer.data,u=0;u<p.length;u++)t.indexBuffer.data[u+f]+=l;l+=e[s].buffers[c].data.length/h,f+=p.length}}return t},r}(),_p=function(r){et(e,r);function e(){var t=r.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return e}(or),Ps=function(r){et(e,r);function e(){var t=r.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new mt(t.vertices),t.uvBuffer=new mt(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return e.prototype.map=function(t,n){var i=0,o=0;return this.uvs[0]=i,this.uvs[1]=o,this.uvs[2]=i+n.width/t.width,this.uvs[3]=o,this.uvs[4]=i+n.width/t.width,this.uvs[5]=o+n.height/t.height,this.uvs[6]=i,this.uvs[7]=o+n.height/t.height,i=n.x,o=n.y,this.vertices[0]=i,this.vertices[1]=o,this.vertices[2]=i+n.width,this.vertices[3]=o,this.vertices[4]=i+n.width,this.vertices[5]=o+n.height,this.vertices[6]=i,this.vertices[7]=o+n.height,this.invalidate(),this},e.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},e}(or),mp=0,be=function(){function r(e,t,n){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=mp++,this.static=!!t,this.ubo=!!n,e instanceof mt?(this.buffer=e,this.buffer.type=zt.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new mt(new Float32Array(1)),this.buffer.type=zt.UNIFORM_BUFFER,this.autoManage=!0))}return r.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},r.prototype.add=function(e,t,n){if(!this.ubo)this.uniforms[e]=new r(t,n);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},r.from=function(e,t,n){return new r(e,t,n)},r.uboFrom=function(e,t){return new r(e,t!=null?t:!0,!0)},r}(),gp=function(){function r(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=_t.NONE,this.sourceFrame=new $,this.destinationFrame=new $,this.bindingSourceFrame=new $,this.bindingDestinationFrame=new $,this.filters=[],this.transform=null}return r.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},r}(),Vr=[new q,new q,new q,new q],ii=new dt,Rs=function(){function r(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new hp,this.texturePool.setScreenSize(e.view),this.statePool=[],this.quad=new _p,this.quadUv=new Ps,this.tempRect=new $,this.activeState={},this.globalUniforms=new be({outputFrame:new $,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return r.prototype.push=function(e,t){for(var n,i,o=this.renderer,a=this.defaultFilterStack,s=this.statePool.pop()||new gp,u=this.renderer.renderTexture,l=t[0].resolution,h=t[0].multisample,f=t[0].padding,c=t[0].autoFit,d=(n=t[0].legacy)!==null&&n!==void 0?n:!0,p=1;p<t.length;p++){var v=t[p];l=Math.min(l,v.resolution),h=Math.min(h,v.multisample),f=this.useMaxPadding?Math.max(f,v.padding):f+v.padding,c=c&&v.autoFit,d=d||((i=v.legacy)!==null&&i!==void 0?i:!0)}if(a.length===1&&(this.defaultFilterStack[0].renderTexture=u.current),a.push(s),s.resolution=l,s.multisample=h,s.legacy=d,s.target=e,s.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),s.sourceFrame.pad(f),c){var _=this.tempRect.copyFrom(u.sourceFrame);o.projection.transform&&this.transformAABB(ii.copyFrom(o.projection.transform).invert(),_),s.sourceFrame.fit(_)}this.roundFrame(s.sourceFrame,u.current?u.current.resolution:o.resolution,u.sourceFrame,u.destinationFrame,o.projection.transform),s.renderTexture=this.getOptimalFilterTexture(s.sourceFrame.width,s.sourceFrame.height,l,h),s.filters=t,s.destinationFrame.width=s.renderTexture.width,s.destinationFrame.height=s.renderTexture.height;var m=this.tempRect;m.x=0,m.y=0,m.width=s.sourceFrame.width,m.height=s.sourceFrame.height,s.renderTexture.filterFrame=s.sourceFrame,s.bindingSourceFrame.copyFrom(u.sourceFrame),s.bindingDestinationFrame.copyFrom(u.destinationFrame),s.transform=o.projection.transform,o.projection.transform=null,u.bind(s.renderTexture,s.sourceFrame,m),o.framebuffer.clear(0,0,0,0)},r.prototype.pop=function(){var e=this.defaultFilterStack,t=e.pop(),n=t.filters;this.activeState=t;var i=this.globalUniforms.uniforms;i.outputFrame=t.sourceFrame,i.resolution=t.resolution;var o=i.inputSize,a=i.inputPixel,s=i.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],a[0]=Math.round(o[0]*t.resolution),a[1]=Math.round(o[1]*t.resolution),a[2]=1/a[0],a[3]=1/a[1],s[0]=.5*a[2],s[1]=.5*a[3],s[2]=t.sourceFrame.width*o[2]-.5*a[2],s[3]=t.sourceFrame.height*o[3]-.5*a[3],t.legacy){var u=i.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,i.filterClamp=i.inputClamp}this.globalUniforms.update();var l=e[e.length-1];if(this.renderer.framebuffer.blit(),n.length===1)n[0].apply(this,t.renderTexture,l.renderTexture,re.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var h=t.renderTexture,f=this.getOptimalFilterTexture(h.width,h.height,t.resolution);f.filterFrame=h.filterFrame;var c=0;for(c=0;c<n.length-1;++c){c===1&&t.multisample>1&&(f=this.getOptimalFilterTexture(h.width,h.height,t.resolution),f.filterFrame=h.filterFrame),n[c].apply(this,h,f,re.CLEAR,t);var d=h;h=f,f=d}n[c].apply(this,h,l.renderTexture,re.BLEND,t),c>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(h),this.returnFilterTexture(f)}t.clear(),this.statePool.push(t)},r.prototype.bindAndClear=function(e,t){t===void 0&&(t=re.CLEAR);var n=this.renderer,i=n.renderTexture,o=n.state;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e&&e.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=e.filterFrame.width,a.height=e.filterFrame.height,i.bind(e,e.filterFrame,a)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?i.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var s=o.stateId&1||this.forceClear;(t===re.CLEAR||t===re.BLIT&&s)&&this.renderer.framebuffer.clear(0,0,0,0)},r.prototype.applyFilter=function(e,t,n,i){var o=this.renderer;o.state.set(e.state),this.bindAndClear(n,i),e.uniforms.uSampler=t,e.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(Ot.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(Ot.TRIANGLE_STRIP))},r.prototype.calculateSpriteMatrix=function(e,t){var n=this.activeState,i=n.sourceFrame,o=n.destinationFrame,a=t._texture.orig,s=e.set(o.width,0,0,o.height,i.x,i.y),u=t.worldTransform.copyTo(dt.TEMP_MATRIX);return u.invert(),s.prepend(u),s.scale(1/a.width,1/a.height),s.translate(t.anchor.x,t.anchor.y),s},r.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},r.prototype.getOptimalFilterTexture=function(e,t,n,i){return n===void 0&&(n=1),i===void 0&&(i=_t.NONE),this.texturePool.getOptimalTexture(e,t,n,i)},r.prototype.getFilterTexture=function(e,t,n){if(typeof e=="number"){var i=e;e=t,t=i}e=e||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(e.width,e.height,t||e.resolution,n||_t.NONE);return o.filterFrame=e.filterFrame,o},r.prototype.returnFilterTexture=function(e){this.texturePool.returnTexture(e)},r.prototype.emptyPool=function(){this.texturePool.clear(!0)},r.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},r.prototype.transformAABB=function(e,t){var n=Vr[0],i=Vr[1],o=Vr[2],a=Vr[3];n.set(t.left,t.top),i.set(t.left,t.bottom),o.set(t.right,t.top),a.set(t.right,t.bottom),e.apply(n,n),e.apply(i,i),e.apply(o,o),e.apply(a,a);var s=Math.min(n.x,i.x,o.x,a.x),u=Math.min(n.y,i.y,o.y,a.y),l=Math.max(n.x,i.x,o.x,a.x),h=Math.max(n.y,i.y,o.y,a.y);t.x=s,t.y=u,t.width=l-s,t.height=h-u},r.prototype.roundFrame=function(e,t,n,i,o){if(!(e.width<=0||e.height<=0||n.width<=0||n.height<=0)){if(o){var a=o.a,s=o.b,u=o.c,l=o.d;if((Math.abs(s)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(l)>1e-4))return}o=o?ii.copyFrom(o):ii.identity(),o.translate(-n.x,-n.y).scale(i.width/n.width,i.height/n.height).translate(i.x,i.y),this.transformAABB(o,e),e.ceil(t),this.transformAABB(o.invert(),e)}},r}(),$r=function(){function r(e){this.renderer=e}return r.prototype.flush=function(){},r.prototype.destroy=function(){this.renderer=null},r.prototype.start=function(){},r.prototype.stop=function(){this.flush()},r.prototype.render=function(e){},r}(),As=function(){function r(e){this.renderer=e,this.emptyRenderer=new $r(e),this.currentRenderer=this.emptyRenderer}return r.prototype.setObjectRenderer=function(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())},r.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.copyBoundTextures=function(e,t){for(var n=this.renderer.texture.boundTextures,i=t-1;i>=0;--i)e[i]=n[i]||null,e[i]&&(e[i]._batchLocation=i)},r.prototype.boundArray=function(e,t,n,i){for(var o=e.elements,a=e.ids,s=e.count,u=0,l=0;l<s;l++){var h=o[l],f=h._batchLocation;if(f>=0&&f<i&&t[f]===h){a[l]=f;continue}for(;u<i;){var c=t[u];if(c&&c._batchEnabled===n&&c._batchLocation===u){u++;continue}a[l]=u,h._batchLocation=u,t[u]=h;break}}},r.prototype.destroy=function(){this.renderer=null},r}(),Ss=0,Os=function(){function r(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),e.view.addEventListener("webglcontextlost",this.handleContextLost,!1),e.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(r.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),r.prototype.contextChange=function(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=Ss++,e.isContextLost()&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").restoreContext()},r.prototype.initFromContext=function(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=Ss++,this.renderer.runners.contextChange.emit(e)},r.prototype.initFromOptions=function(e){var t=this.createContext(this.renderer.view,e);this.initFromContext(t)},r.prototype.createContext=function(e,t){var n;if(N.PREFER_ENV>=qt.WEBGL2&&(n=e.getContext("webgl2",t)),n)this.webGLVersion=2;else if(this.webGLVersion=1,n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!n)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=n,this.getExtensions(),this.gl},r.prototype.getExtensions=function(){var e=this.gl,t={anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),loseContext:e.getExtension("WEBGL_lose_context"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:e.getExtension("EXT_color_buffer_float")})},r.prototype.handleContextLost=function(e){e.preventDefault()},r.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},r.prototype.destroy=function(){var e=this.renderer.view;this.renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},r.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},r.prototype.validateContext=function(e){var t=e.getContextAttributes(),n="WebGL2RenderingContext"in self&&e instanceof self.WebGL2RenderingContext;n&&(this.webGLVersion=2),t.stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var i=n||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=i,i||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},r}(),yp=function(){function r(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=_t.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return r}(),xp=new $,Ns=function(){function r(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new ni(10,10),this.msaaSamples=null}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new $,this.hasMRT=!0,this.writeDepthTexture=!0,this.disposeAll(!0),this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,n=this.renderer.context.extensions.depthTexture;N.PREFER_ENV===qt.WEBGL_LEGACY&&(t=null,n=null),t?e.drawBuffers=function(i){return t.drawBuffersWEBGL(i)}:(this.hasMRT=!1,e.drawBuffers=function(){}),n||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)},r.prototype.bind=function(e,t,n){n===void 0&&(n=0);var i=this.gl;if(e){var o=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,i.bindFramebuffer(i.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==n&&(e.dirtyId++,e.dirtyFormat++,o.mipLevel=n),o.dirtyId!==e.dirtyId&&(o.dirtyId=e.dirtyId,o.dirtyFormat!==e.dirtyFormat?(o.dirtyFormat=e.dirtyFormat,o.dirtySize=e.dirtySize,this.updateFramebuffer(e,n)):o.dirtySize!==e.dirtySize&&(o.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(var a=0;a<e.colorTextures.length;a++){var s=e.colorTextures[a];this.renderer.texture.unbind(s.parentTextureArray||s)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),t){var u=t.width>>n,l=t.height>>n,h=u/t.width;this.setViewport(t.x*h,t.y*h,u,l)}else{var u=e.width>>n,l=e.height>>n;this.setViewport(0,0,u,l)}}else this.current&&(this.current=null,i.bindFramebuffer(i.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},r.prototype.setViewport=function(e,t,n,i){var o=this.viewport;e=Math.round(e),t=Math.round(t),n=Math.round(n),i=Math.round(i),(o.width!==n||o.height!==i||o.x!==e||o.y!==t)&&(o.x=e,o.y=t,o.width=n,o.height=i,this.gl.viewport(e,t,n,i))},Object.defineProperty(r.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),r.prototype.clear=function(e,t,n,i,o){o===void 0&&(o=Nr.COLOR|Nr.DEPTH);var a=this.gl;a.clearColor(e,t,n,i),a.clear(o)},r.prototype.initFramebuffer=function(e){var t=this.gl,n=new yp(t.createFramebuffer());return n.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=n,this.managedFramebuffers.push(e),e.disposeRunner.add(this),n},r.prototype.resizeFramebuffer=function(e){var t=this.gl,n=e.glFramebuffers[this.CONTEXT_UID];n.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,n.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.RGBA8,e.width,e.height)),n.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,n.stencil),n.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,n.multisample,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,e.width,e.height));var i=e.colorTextures,o=i.length;t.drawBuffers||(o=Math.min(o,1));for(var a=0;a<o;a++){var s=i[a],u=s.parentTextureArray||s;this.renderer.texture.bind(u,0)}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)},r.prototype.updateFramebuffer=function(e,t){var n=this.gl,i=e.glFramebuffers[this.CONTEXT_UID],o=e.colorTextures,a=o.length;n.drawBuffers||(a=Math.min(a,1)),i.multisample>1&&this.canMultisampleFramebuffer(e)?(i.msaaBuffer=i.msaaBuffer||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.msaaBuffer),n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.RGBA8,e.width,e.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,i.msaaBuffer)):i.msaaBuffer&&(n.deleteRenderbuffer(i.msaaBuffer),i.msaaBuffer=null,i.blitFramebuffer&&(i.blitFramebuffer.dispose(),i.blitFramebuffer=null));for(var s=[],u=0;u<a;u++){var l=o[u],h=l.parentTextureArray||l;this.renderer.texture.bind(h,0),!(u===0&&i.msaaBuffer)&&(n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+u,l.target,h._glTextures[this.CONTEXT_UID].texture,t),s.push(n.COLOR_ATTACHMENT0+u))}if(s.length>1&&n.drawBuffers(s),e.depthTexture){var f=this.writeDepthTexture;if(f){var c=e.depthTexture;this.renderer.texture.bind(c,0),n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,c._glTextures[this.CONTEXT_UID].texture,t)}}(e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)?(i.stencil=i.stencil||n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,i.stencil),i.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.DEPTH24_STENCIL8,e.width,e.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,e.width,e.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,i.stencil)):i.stencil&&(n.deleteRenderbuffer(i.stencil),i.stencil=null)},r.prototype.canMultisampleFramebuffer=function(e){return this.renderer.context.webGLVersion!==1&&e.colorTextures.length<=1&&!e.depthTexture},r.prototype.detectSamples=function(e){var t=this.msaaSamples,n=_t.NONE;if(e<=1||t===null)return n;for(var i=0;i<t.length;i++)if(t[i]<=e){n=t[i];break}return n===1&&(n=_t.NONE),n},r.prototype.blit=function(e,t,n){var i=this,o=i.current,a=i.renderer,s=i.gl,u=i.CONTEXT_UID;if(a.context.webGLVersion===2&&!!o){var l=o.glFramebuffers[u];if(!!l){if(!e){if(!l.msaaBuffer)return;var h=o.colorTextures[0];if(!h)return;l.blitFramebuffer||(l.blitFramebuffer=new ni(o.width,o.height),l.blitFramebuffer.addColorTexture(0,h)),e=l.blitFramebuffer,e.colorTextures[0]!==h&&(e.colorTextures[0]=h,e.dirtyId++,e.dirtyFormat++),(e.width!==o.width||e.height!==o.height)&&(e.width=o.width,e.height=o.height,e.dirtyId++,e.dirtySize++)}t||(t=xp,t.width=o.width,t.height=o.height),n||(n=t);var f=t.width===n.width&&t.height===n.height;this.bind(e),s.bindFramebuffer(s.READ_FRAMEBUFFER,l.framebuffer),s.blitFramebuffer(t.x,t.y,t.width,t.height,n.x,n.y,n.width,n.height,s.COLOR_BUFFER_BIT,f?s.NEAREST:s.LINEAR)}}},r.prototype.disposeFramebuffer=function(e,t){var n=e.glFramebuffers[this.CONTEXT_UID],i=this.gl;if(!!n){delete e.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(e);o>=0&&this.managedFramebuffers.splice(o,1),e.disposeRunner.remove(this),t||(i.deleteFramebuffer(n.framebuffer),n.msaaBuffer&&i.deleteRenderbuffer(n.msaaBuffer),n.stencil&&i.deleteRenderbuffer(n.stencil)),n.blitFramebuffer&&n.blitFramebuffer.dispose()}},r.prototype.disposeAll=function(e){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var n=0;n<t.length;n++)this.disposeFramebuffer(t[n],e)},r.prototype.forceStencil=function(){var e=this.current;if(!!e){var t=e.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){e.stencil=!0;var n=e.width,i=e.height,o=this.gl,a=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,a),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,n,i):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,n,i),t.stencil=a,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,a)}}},r.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new $},r.prototype.destroy=function(){this.renderer=null},r}(),oi={5126:4,5123:2,5121:1},Fs=function(){function r(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return r.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var n=this.renderer.context.extensions.vertexArrayObject;N.PREFER_ENV===qt.WEBGL_LEGACY&&(n=null),n?(e.createVertexArray=function(){return n.createVertexArrayOES()},e.bindVertexArray=function(o){return n.bindVertexArrayOES(o)},e.deleteVertexArray=function(o){return n.deleteVertexArrayOES(o)}):(this.hasVao=!1,e.createVertexArray=function(){return null},e.bindVertexArray=function(){return null},e.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var i=e.getExtension("ANGLE_instanced_arrays");i?(e.vertexAttribDivisor=function(o,a){return i.vertexAttribDivisorANGLE(o,a)},e.drawElementsInstanced=function(o,a,s,u,l){return i.drawElementsInstancedANGLE(o,a,s,u,l)},e.drawArraysInstanced=function(o,a,s,u){return i.drawArraysInstancedANGLE(o,a,s,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},r.prototype.bind=function(e,t){t=t||this.renderer.shader.shader;var n=this.gl,i=e.glVertexArrayObjects[this.CONTEXT_UID],o=!1;i||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=i={},o=!0);var a=i[t.program.id]||this.initGeometryVao(e,t,o);this._activeGeometry=e,this._activeVao!==a&&(this._activeVao=a,this.hasVao?n.bindVertexArray(a):this.activateVao(e,t.program)),this.updateBuffers()},r.prototype.reset=function(){this.unbind()},r.prototype.updateBuffers=function(){for(var e=this._activeGeometry,t=this.renderer.buffer,n=0;n<e.buffers.length;n++){var i=e.buffers[n];t.update(i)}},r.prototype.checkCompatibility=function(e,t){var n=e.attributes,i=t.attributeData;for(var o in i)if(!n[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},r.prototype.getSignature=function(e,t){var n=e.attributes,i=t.attributeData,o=["g",e.id];for(var a in n)i[a]&&o.push(a,i[a].location);return o.join("-")},r.prototype.initGeometryVao=function(e,t,n){n===void 0&&(n=!0);var i=this.gl,o=this.CONTEXT_UID,a=this.renderer.buffer,s=t.program;s.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(e,s);var u=this.getSignature(e,s),l=e.glVertexArrayObjects[this.CONTEXT_UID],h=l[u];if(h)return l[s.id]=h,h;var f=e.buffers,c=e.attributes,d={},p={};for(var v in f)d[v]=0,p[v]=0;for(var v in c)!c[v].size&&s.attributeData[v]?c[v].size=s.attributeData[v].size:c[v].size||console.warn("PIXI Geometry attribute '"+v+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[c[v].buffer]+=c[v].size*oi[c[v].type];for(var v in c){var _=c[v],m=_.size;_.stride===void 0&&(d[_.buffer]===m*oi[_.type]?_.stride=0:_.stride=d[_.buffer]),_.start===void 0&&(_.start=p[_.buffer],p[_.buffer]+=m*oi[_.type])}h=i.createVertexArray(),i.bindVertexArray(h);for(var g=0;g<f.length;g++){var T=f[g];a.bind(T),n&&T._glBuffers[o].refCount++}return this.activateVao(e,s),this._activeVao=h,l[s.id]=h,l[u]=h,h},r.prototype.disposeGeometry=function(e,t){var n;if(!!this.managedGeometries[e.id]){delete this.managedGeometries[e.id];var i=e.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,a=e.buffers,s=(n=this.renderer)===null||n===void 0?void 0:n.buffer;if(e.disposeRunner.remove(this),!!i){if(s)for(var u=0;u<a.length;u++){var l=a[u]._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!t&&s.dispose(a[u],t))}if(!t){for(var h in i)if(h[0]==="g"){var f=i[h];this._activeVao===f&&this.unbind(),o.deleteVertexArray(f)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedGeometries),n=0;n<t.length;n++)this.disposeGeometry(this.managedGeometries[t[n]],e)},r.prototype.activateVao=function(e,t){var n=this.gl,i=this.CONTEXT_UID,o=this.renderer.buffer,a=e.buffers,s=e.attributes;e.indexBuffer&&o.bind(e.indexBuffer);var u=null;for(var l in s){var h=s[l],f=a[h.buffer],c=f._glBuffers[i];if(t.attributeData[l]){u!==c&&(o.bind(f),u=c);var d=t.attributeData[l].location;if(n.enableVertexAttribArray(d),n.vertexAttribPointer(d,h.size,h.type||n.FLOAT,h.normalized,h.stride,h.start),h.instance)if(this.hasInstance)n.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},r.prototype.draw=function(e,t,n,i){var o=this.gl,a=this._activeGeometry;if(a.indexBuffer){var s=a.indexBuffer.data.BYTES_PER_ELEMENT,u=s===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;s===2||s===4&&this.canUseUInt32ElementIndex?a.instanced?o.drawElementsInstanced(e,t||a.indexBuffer.data.length,u,(n||0)*s,i||1):o.drawElements(e,t||a.indexBuffer.data.length,u,(n||0)*s):console.warn("unsupported index buffer type: uint32")}else a.instanced?o.drawArraysInstanced(e,n,t||a.getSize(),i||1):o.drawArrays(e,n,t||a.getSize());return this},r.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},r.prototype.destroy=function(){this.renderer=null},r}(),bp=function(){function r(e){e===void 0&&(e=null),this.type=It.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=N.FILTER_MULTISAMPLE,this.enabled=!0,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._target=null}return Object.defineProperty(r.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(e){e?this._filters?this._filters[0]=e:this._filters=[e]:this._filters=null},enumerable:!1,configurable:!0}),r.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=It.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},r.prototype.copyCountersOrReset=function(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},r}();function Us(r,e,t){var n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function Ls(r,e){var t=r.getShaderSource(e).split(`
`).map(function(l,h){return h+": "+l}),n=r.getShaderInfoLog(e),i=n.split(`
`),o={},a=i.map(function(l){return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(l){return l&&!o[l]?(o[l]=!0,!0):!1}),s=[""];a.forEach(function(l){t[l-1]="%c"+t[l-1]+"%c",s.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);s[0]=u,console.error(n),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,s),console.groupEnd()}function Tp(r,e,t,n){r.getProgramParameter(e,r.LINK_STATUS)||(r.getShaderParameter(t,r.COMPILE_STATUS)||Ls(r,t),r.getShaderParameter(n,r.COMPILE_STATUS)||Ls(r,n),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(e)))}function ai(r){for(var e=new Array(r),t=0;t<e.length;t++)e[t]=!1;return e}function Gs(r,e){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return ai(2*e);case"bvec3":return ai(3*e);case"bvec4":return ai(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var Bs={},ar=Bs;function Cp(){if(ar===Bs||ar&&ar.isContextLost()){var r=document.createElement("canvas"),e=void 0;N.PREFER_ENV>=qt.WEBGL2&&(e=r.getContext("webgl2",{})),e||(e=r.getContext("webgl",{})||r.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),ar=e}return ar}var Wr;function Ep(){if(!Wr){Wr=jt.MEDIUM;var r=Cp();if(r&&r.getShaderPrecisionFormat){var e=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);Wr=e.precision?jt.HIGH:jt.MEDIUM}}return Wr}function Ms(r,e,t){if(r.substring(0,9)!=="precision"){var n=e;return e===jt.HIGH&&t!==jt.HIGH&&(n=jt.MEDIUM),"precision "+n+` float;
`+r}else if(t!==jt.HIGH&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}var wp={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Ds(r){return wp[r]}var Yr=null,ks={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Hs(r,e){if(!Yr){var t=Object.keys(ks);Yr={};for(var n=0;n<t.length;++n){var i=t[n];Yr[r[i]]=ks[i]}}return Yr[e]}var Be=[{test:function(r){return r.type==="float"&&r.size===1},code:function(r){return`
            if(uv["`+r+'"] !== ud["'+r+`"].value)
            {
                ud["`+r+'"].value = uv["'+r+`"]
                gl.uniform1f(ud["`+r+'"].location, uv["'+r+`"])
            }
            `}},{test:function(r){return(r.type==="sampler2D"||r.type==="samplerCube"||r.type==="sampler2DArray")&&r.size===1&&!r.isArray},code:function(r){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+r+`"], t);

            if(ud["`+r+`"].value !== t)
            {
                ud["`+r+`"].value = t;
                gl.uniform1i(ud["`+r+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(r,e){return r.type==="mat3"&&r.size===1&&e.a!==void 0},code:function(r){return`
            gl.uniformMatrix3fv(ud["`+r+'"].location, false, uv["'+r+`"].toArray(true));
            `},codeUbo:function(r){return`
                var `+r+"_matrix = uv."+r+`.toArray(true);

                data[offset] = `+r+`_matrix[0];
                data[offset+1] = `+r+`_matrix[1];
                data[offset+2] = `+r+`_matrix[2];
        
                data[offset + 4] = `+r+`_matrix[3];
                data[offset + 5] = `+r+`_matrix[4];
                data[offset + 6] = `+r+`_matrix[5];
        
                data[offset + 8] = `+r+`_matrix[6];
                data[offset + 9] = `+r+`_matrix[7];
                data[offset + 10] = `+r+`_matrix[8];
            `}},{test:function(r,e){return r.type==="vec2"&&r.size===1&&e.x!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+r+`"].location, v.x, v.y);
                }`},codeUbo:function(r){return`
                v = uv.`+r+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(r){return r.type==="vec2"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+r+`"].location, v[0], v[1]);
                }
            `}},{test:function(r,e){return r.type==="vec4"&&r.size===1&&e.width!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+r+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(r){return`
                    v = uv.`+r+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(r){return r.type==="vec4"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+r+`"].location, v[0], v[1], v[2], v[3])
                }`}}],Ip={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:"gl.uniform1i(location, v)",samplerCube:"gl.uniform1i(location, v)",sampler2DArray:"gl.uniform1i(location, v)"},Pp={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function Rp(r,e){var t,n=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var i in r.uniforms){var o=e[i];if(!o){((t=r.uniforms[i])===null||t===void 0?void 0:t.group)&&(r.uniforms[i].ubo?n.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+i+", '"+i+`');
                    `):n.push(`
                        renderer.shader.syncUniformGroup(uv.`+i+`, syncData);
                    `));continue}for(var a=r.uniforms[i],s=!1,u=0;u<Be.length;u++)if(Be[u].test(o,a)){n.push(Be[u].code(i,a)),s=!0;break}if(!s){var l=o.size===1?Ip:Pp,h=l[o.type].replace("location",'ud["'+i+'"].location');n.push(`
            cu = ud["`+i+`"];
            cv = cu.value;
            v = uv["`+i+`"];
            `+h+";")}}return new Function("ud","uv","renderer","syncData",n.join(`
`))}var Ap=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Sp(r){for(var e="",t=0;t<r;++t)t>0&&(e+=`
else `),t<r-1&&(e+="if(test == "+t+".0){}");return e}function Op(r,e){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=e.createShader(e.FRAGMENT_SHADER);;){var n=Ap.replace(/%forloop%/gi,Sp(r));if(e.shaderSource(t,n),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))r=r/2|0;else break}return r}var sr;function Np(){if(typeof sr=="boolean")return sr;try{var r=new Function("param1","param2","param3","return param1[param2] === param3;");sr=r({a:"b"},"a","b")===!0}catch{sr=!1}return sr}var Fp=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,Up=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,Lp=0,qr={},ur=function(){function r(e,t,n){n===void 0&&(n="pixi-shader"),this.id=Lp++,this.vertexSrc=e||r.defaultVertexSrc,this.fragmentSrc=t||r.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(n=n.replace(/\s+/g,"-"),qr[n]?(qr[n]++,n+="-"+qr[n]):qr[n]=1,this.vertexSrc="#define SHADER_NAME "+n+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+n+`
`+this.fragmentSrc,this.vertexSrc=Ms(this.vertexSrc,N.PRECISION_VERTEX,jt.HIGH),this.fragmentSrc=Ms(this.fragmentSrc,N.PRECISION_FRAGMENT,Ep())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(r,"defaultVertexSrc",{get:function(){return Up},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return Fp},enumerable:!1,configurable:!0}),r.from=function(e,t,n){var i=e+t,o=za[i];return o||(za[i]=o=new r(e,t,n)),o},r}(),ne=function(){function r(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof be?this.uniformGroup=t:this.uniformGroup=new be(t):this.uniformGroup=new be({})}return r.prototype.checkUniformExists=function(e,t){if(t.uniforms[e])return!0;for(var n in t.uniforms){var i=t.uniforms[n];if(i.group&&this.checkUniformExists(e,i))return!0}return!1},r.prototype.destroy=function(){this.uniformGroup=null},Object.defineProperty(r.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),r.from=function(e,t,n){var i=ur.from(e,t);return new r(i,n)},r}(),si=0,ui=1,li=2,hi=3,fi=4,ci=5,Te=function(){function r(){this.data=0,this.blendMode=L.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(r.prototype,"blend",{get:function(){return!!(this.data&1<<si)},set:function(e){!!(this.data&1<<si)!==e&&(this.data^=1<<si)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return!!(this.data&1<<ui)},set:function(e){!!(this.data&1<<ui)!==e&&(this.data^=1<<ui)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"culling",{get:function(){return!!(this.data&1<<li)},set:function(e){!!(this.data&1<<li)!==e&&(this.data^=1<<li)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthTest",{get:function(){return!!(this.data&1<<hi)},set:function(e){!!(this.data&1<<hi)!==e&&(this.data^=1<<hi)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthMask",{get:function(){return!!(this.data&1<<ci)},set:function(e){!!(this.data&1<<ci)!==e&&(this.data^=1<<ci)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<fi)},set:function(e){!!(this.data&1<<fi)!==e&&(this.data^=1<<fi)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this._blendMode},set:function(e){this.blend=e!==L.NONE,this._blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(e){this.offsets=!!e,this._polygonOffset=e},enumerable:!1,configurable:!0}),r.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},r.for2d=function(){var e=new r;return e.depthTest=!1,e.blend=!0,e},r}(),Gp=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Bp=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,k=function(r){et(e,r);function e(t,n,i){var o=this,a=ur.from(t||e.defaultVertexSrc,n||e.defaultFragmentSrc);return o=r.call(this,a,i)||this,o.padding=0,o.resolution=N.FILTER_RESOLUTION,o.multisample=N.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new Te,o}return e.prototype.apply=function(t,n,i,o,a){t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultVertexSrc",{get:function(){return Gp},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return Bp},enumerable:!1,configurable:!0}),e}(ne),Mp=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,Dp=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,Xs=new dt,di=function(){function r(e,t){this._texture=e,this.mapCoord=new dt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t=="undefined"?.5:t,this.isSimple=!1}return Object.defineProperty(r.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture=e,this._textureID=-1},enumerable:!1,configurable:!0}),r.prototype.multiplyUvs=function(e,t){t===void 0&&(t=e);for(var n=this.mapCoord,i=0;i<e.length;i+=2){var o=e[i],a=e[i+1];t[i]=o*n.a+a*n.c+n.tx,t[i+1]=o*n.b+a*n.d+n.ty}return t},r.prototype.update=function(e){var t=this._texture;if(!t||!t.valid||!e&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var n=t._uvs;this.mapCoord.set(n.x1-n.x0,n.y1-n.y0,n.x3-n.x0,n.y3-n.y0,n.x0,n.y0);var i=t.orig,o=t.trim;o&&(Xs.set(i.width/o.width,0,0,i.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Xs));var a=t.baseTexture,s=this.uClampFrame,u=this.clampMargin/a.resolution,l=this.clampOffset;return s[0]=(t._frame.x+u+l)/a.width,s[1]=(t._frame.y+u+l)/a.height,s[2]=(t._frame.x+t._frame.width-u+l)/a.width,s[3]=(t._frame.y+t._frame.height-u+l)/a.height,this.uClampOffset[0]=l/a.realWidth,this.uClampOffset[1]=l/a.realHeight,this.isSimple=t._frame.width===a.width&&t._frame.height===a.height&&t.rotate===0,!0},r}(),kp=function(r){et(e,r);function e(t,n,i){var o=this,a=null;return typeof t!="string"&&n===void 0&&i===void 0&&(a=t,t=void 0,n=void 0,i=void 0),o=r.call(this,t||Mp,n||Dp,i)||this,o.maskSprite=a,o.maskMatrix=new dt,o}return Object.defineProperty(e.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),e.prototype.apply=function(t,n,i,o){var a=this._maskSprite,s=a._texture;!s.valid||(s.uvMatrix||(s.uvMatrix=new di(s,0)),s.uvMatrix.update(),this.uniforms.npmAlpha=s.baseTexture.alphaMode?0:1,this.uniforms.mask=s,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,a).prepend(s.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=s.uvMatrix.uClampFrame,t.applyFilter(this,n,i,o))},e}(k),js=function(){function r(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return r.prototype.setMaskStack=function(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)},r.prototype.push=function(e,t){var n=t;if(!n.isMaskData){var i=this.maskDataPool.pop()||new bp;i.pooled=!0,i.maskObject=t,n=i}var o=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(n.copyCountersOrReset(o),n.autoDetect&&this.detect(n),n._target=e,n.type!==It.SPRITE&&this.maskStack.push(n),n.enabled)switch(n.type){case It.SCISSOR:this.renderer.scissor.push(n);break;case It.STENCIL:this.renderer.stencil.push(n);break;case It.SPRITE:n.copyCountersOrReset(null),this.pushSpriteMask(n);break}n.type===It.SPRITE&&this.maskStack.push(n)},r.prototype.pop=function(e){var t=this.maskStack.pop();if(!(!t||t._target!==e)){if(t.enabled)switch(t.type){case It.SCISSOR:this.renderer.scissor.pop();break;case It.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case It.SPRITE:this.popSpriteMask(t);break}if(t.reset(),t.pooled&&this.maskDataPool.push(t),this.maskStack.length!==0){var n=this.maskStack[this.maskStack.length-1];n.type===It.SPRITE&&n._filters&&(n._filters[0].maskSprite=n.maskObject)}}},r.prototype.detect=function(e){var t=e.maskObject;t.isSprite?e.type=It.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(e)?e.type=It.SCISSOR:e.type=It.STENCIL},r.prototype.pushSpriteMask=function(e){var t,n,i=e.maskObject,o=e._target,a=e._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex],a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new kp]));var s=this.renderer,u=s.renderTexture,l,h;if(u.current){var f=u.current;l=e.resolution||f.resolution,h=(t=e.multisample)!==null&&t!==void 0?t:f.multisample}else l=e.resolution||s.resolution,h=(n=e.multisample)!==null&&n!==void 0?n:s.multisample;a[0].resolution=l,a[0].multisample=h,a[0].maskSprite=i;var c=o.filterArea;o.filterArea=i.getBounds(!0),s.filter.push(o,a),o.filterArea=c,e._filters||this.alphaMaskIndex++},r.prototype.popSpriteMask=function(e){this.renderer.filter.pop(),e._filters?e._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},r.prototype.destroy=function(){this.renderer=null},r}(),zs=function(){function r(e){this.renderer=e,this.maskStack=[],this.glConst=0}return r.prototype.getStackLength=function(){return this.maskStack.length},r.prototype.setMaskStack=function(e){var t=this.renderer.gl,n=this.getStackLength();this.maskStack=e;var i=this.getStackLength();i!==n&&(i===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},r.prototype._useCurrent=function(){},r.prototype.destroy=function(){this.renderer=null,this.maskStack=null},r}(),Vs=new dt,$s=function(r){et(e,r);function e(t){var n=r.call(this,t)||this;return n.glConst=WebGLRenderingContext.SCISSOR_TEST,n}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},e.prototype.calcScissorRect=function(t){if(!t._scissorRectLocal){var n=t._scissorRect,i=t.maskObject,o=this.renderer,a=o.renderTexture;i.renderable=!0;var s=i.getBounds();this.roundFrameToPixels(s,a.current?a.current.resolution:o.resolution,a.sourceFrame,a.destinationFrame,o.projection.transform),i.renderable=!1,n&&s.fit(n),t._scissorRectLocal=s}},e.isMatrixRotated=function(t){if(!t)return!1;var n=t.a,i=t.b,o=t.c,a=t.d;return(Math.abs(i)>1e-4||Math.abs(o)>1e-4)&&(Math.abs(n)>1e-4||Math.abs(a)>1e-4)},e.prototype.testScissor=function(t){var n=t.maskObject;if(!n.isFastRect||!n.isFastRect()||e.isMatrixRotated(n.worldTransform)||e.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);var i=t._scissorRectLocal;return i.width>0&&i.height>0},e.prototype.roundFrameToPixels=function(t,n,i,o,a){e.isMatrixRotated(a)||(a=a?Vs.copyFrom(a):Vs.identity(),a.translate(-i.x,-i.y).scale(o.width/i.width,o.height/i.height).translate(o.x,o.y),this.renderer.filter.transformAABB(a,t),t.fit(o),t.x=Math.round(t.x*n),t.y=Math.round(t.y*n),t.width=Math.round(t.width*n),t.height=Math.round(t.height*n))},e.prototype.push=function(t){t._scissorRectLocal||this.calcScissorRect(t);var n=this.renderer.gl;t._scissorRect||n.enable(n.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()},e.prototype.pop=function(){var t=this.renderer.gl;this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)},e.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,n;this.renderer.renderTexture.current?n=t.y:n=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,n,t.width,t.height)},e}(zs),Ws=function(r){et(e,r);function e(t){var n=r.call(this,t)||this;return n.glConst=WebGLRenderingContext.STENCIL_TEST,n}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},e.prototype.push=function(t){var n=t.maskObject,i=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),i.clearStencil(0),i.clear(i.STENCIL_BUFFER_BIT),i.enable(i.STENCIL_TEST)),t._stencilCounter++,i.colorMask(!1,!1,!1,!1),i.stencilFunc(i.EQUAL,o,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.INCR),n.renderable=!0,n.render(this.renderer),this.renderer.batch.flush(),n.renderable=!1,this._useCurrent()},e.prototype.pop=function(t){var n=this.renderer.gl;this.getStackLength()===0?n.disable(n.STENCIL_TEST):(n.colorMask(!1,!1,!1,!1),n.stencilOp(n.KEEP,n.KEEP,n.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,this._useCurrent())},e.prototype._useCurrent=function(){var t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e}(zs),Ys=function(){function r(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new dt,this.transform=null}return r.prototype.update=function(e,t,n,i){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,n,i),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},r.prototype.calculateProjection=function(e,t,n,i){var o=this.projectionMatrix,a=i?-1:1;o.identity(),o.a=1/t.width*2,o.d=a*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-a-t.y*o.d},r.prototype.setTransform=function(e){},r.prototype.destroy=function(){this.renderer=null},r}(),Ce=new $,lr=new $,qs=function(){function r(e){this.renderer=e,this.clearColor=e._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new $,this.destinationFrame=new $,this.viewportFrame=new $}return r.prototype.bind=function(e,t,n){e===void 0&&(e=null);var i=this.renderer;this.current=e;var o,a,s;e?(o=e.baseTexture,s=o.resolution,t||(Ce.width=e.frame.width,Ce.height=e.frame.height,t=Ce),n||(lr.x=e.frame.x,lr.y=e.frame.y,lr.width=t.width,lr.height=t.height,n=lr),a=o.framebuffer):(s=i.resolution,t||(Ce.width=i.screen.width,Ce.height=i.screen.height,t=Ce),n||(n=Ce,n.width=t.width,n.height=t.height));var u=this.viewportFrame;u.x=n.x*s,u.y=n.y*s,u.width=n.width*s,u.height=n.height*s,e||(u.y=i.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(a,u),this.renderer.projection.update(n,t,s,!a),e?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(n)},r.prototype.clear=function(e,t){this.current?e=e||this.current.baseTexture.clearColor:e=e||this.clearColor;var n=this.destinationFrame,i=this.current?this.current.baseTexture:this.renderer.screen,o=n.width!==i.width||n.height!==i.height;if(o){var a=this.viewportFrame,s=a.x,u=a.y,l=a.width,h=a.height;s=Math.round(s),u=Math.round(u),l=Math.round(l),h=Math.round(h),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(s,u,l,h)}this.renderer.framebuffer.clear(e[0],e[1],e[2],e[3],t),o&&this.renderer.scissor.pop()},r.prototype.resize=function(){this.bind(null)},r.prototype.reset=function(){this.bind(null)},r.prototype.destroy=function(){this.renderer=null},r}();function Hp(r,e,t,n,i){t.buffer.update(i)}var Xp={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},Ks={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function jp(r){for(var e=r.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,n=0,i=0,o=0;o<e.length;o++){var a=e[o];if(t=Ks[a.data.type],a.data.size>1&&(t=Math.max(t,16)*a.data.size),a.dataLen=t,n%t!=0&&n<16){var s=n%t%16;n+=s,i+=s}n+t>16?(i=Math.ceil(i/16)*16,a.offset=i,i+=t,n=t):(a.offset=i,n+=t,i+=t)}return i=Math.ceil(i/16)*16,{uboElements:e,size:i}}function zp(r,e){var t=[];for(var n in r)e[n]&&t.push(e[n]);return t.sort(function(i,o){return i.index-o.index}),t}function Vp(r,e){if(!r.autoManage)return{size:0,syncFunc:Hp};for(var t=zp(r.uniforms,e),n=jp(t),i=n.uboElements,o=n.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],s=0;s<i.length;s++){for(var u=i[s],l=r.uniforms[u.data.name],h=u.data.name,f=!1,c=0;c<Be.length;c++){var d=Be[c];if(d.codeUbo&&d.test(u.data,l)){a.push("offset = "+u.offset/4+";",Be[c].codeUbo(u.data.name,l)),f=!0;break}}if(!f)if(u.data.size>1){var p=Ds(u.data.type),v=Math.max(Ks[u.data.type]/16,1),_=p/v,m=(4-_%4)%4;a.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;

                t = 0;

                for(var i=0; i < `+u.data.size*v+`; i++)
                {
                    for(var j = 0; j < `+_+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+m+`;
                }

                `)}else{var g=Xp[u.data.type];a.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;
                `+g+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var $p=function(){function r(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return r.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},r}();function Wp(r,e){for(var t={},n=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),i=0;i<n;i++){var o=e.getActiveAttrib(r,i);if(o.name.indexOf("gl_")!==0){var a=Hs(e,o.type),s={type:a,name:o.name,size:Ds(a),location:e.getAttribLocation(r,o.name)};t[o.name]=s}}return t}function Yp(r,e){for(var t={},n=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),i=0;i<n;i++){var o=e.getActiveUniform(r,i),a=o.name.replace(/\[.*?\]$/,""),s=!!o.name.match(/\[.*?\]$/),u=Hs(e,o.type);t[a]={name:a,index:i,type:u,size:o.size,isArray:s,value:Gs(u,o.size)}}return t}function qp(r,e){var t=Us(r,r.VERTEX_SHADER,e.vertexSrc),n=Us(r,r.FRAGMENT_SHADER,e.fragmentSrc),i=r.createProgram();if(r.attachShader(i,t),r.attachShader(i,n),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)||Tp(r,i,t,n),e.attributeData=Wp(i,r),e.uniformData=Yp(i,r),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)){var o=Object.keys(e.attributeData);o.sort(function(h,f){return h>f?1:-1});for(var a=0;a<o.length;a++)e.attributeData[o[a]].location=a,r.bindAttribLocation(i,a,o[a]);r.linkProgram(i)}r.deleteShader(t),r.deleteShader(n);var s={};for(var a in e.uniformData){var u=e.uniformData[a];s[a]={location:r.getUniformLocation(i,a),value:Gs(u.type,u.size)}}var l=new $p(i,s);return l}var Kp=0,Kr={textureCount:0,uboCount:0},Zs=function(){function r(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=Kp++}return r.prototype.systemCheck=function(){if(!Np())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},r.prototype.contextChange=function(e){this.gl=e,this.reset()},r.prototype.bind=function(e,t){e.uniforms.globals=this.renderer.globalUniforms;var n=e.program,i=n.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==n&&(this.program=n,this.gl.useProgram(i.program)),t||(Kr.textureCount=0,Kr.uboCount=0,this.syncUniformGroup(e.uniformGroup,Kr)),i},r.prototype.setUniforms=function(e){var t=this.shader.program,n=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(n.uniformData,e,this.renderer)},r.prototype.syncUniformGroup=function(e,t){var n=this.getGlProgram();(!e.static||e.dirtyId!==n.uniformDirtyGroups[e.id])&&(n.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,n,t))},r.prototype.syncUniforms=function(e,t,n){var i=e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e);i(t.uniformData,e.uniforms,this.renderer,n)},r.prototype.createSyncGroups=function(e){var t=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=Rp(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[t],e.syncUniforms[this.shader.program.id]},r.prototype.syncUniformBufferGroup=function(e,t){var n=this.getGlProgram();if(!e.static||e.dirtyId!==0||!n.uniformGroups[e.id]){e.dirtyId=0;var i=n.uniformGroups[e.id]||this.createSyncBufferGroup(e,n,t);e.buffer.update(),i(n.uniformData,e.uniforms,this.renderer,Kr,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,n.uniformBufferBindings[t])},r.prototype.createSyncBufferGroup=function(e,t,n){var i=this.renderer.gl;this.renderer.buffer.bind(e.buffer);var o=this.gl.getUniformBlockIndex(t.program,n);t.uniformBufferBindings[n]=this.shader.uniformBindCount,i.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(e,this.shader.program.uniformData,"ubo"),s=this._uboCache[a];if(s||(s=this._uboCache[a]=Vp(e,this.shader.program.uniformData)),e.autoManage){var u=new Float32Array(s.size/4);e.buffer.update(u)}return t.uniformGroups[e.id]=s.syncFunc,t.uniformGroups[e.id]},r.prototype.getSignature=function(e,t,n){var i=e.uniforms,o=[n+"-"];for(var a in i)o.push(a),t[a]&&o.push(t[a].type);return o.join("-")},r.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},r.prototype.generateProgram=function(e){var t=this.gl,n=e.program,i=qp(t,n);return n.glPrograms[this.renderer.CONTEXT_UID]=i,i},r.prototype.reset=function(){this.program=null,this.shader=null},r.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},r}();function Zp(r,e){return e===void 0&&(e=[]),e[L.NORMAL]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.ADD]=[r.ONE,r.ONE],e[L.MULTIPLY]=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.SCREEN]=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.OVERLAY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.DARKEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.LIGHTEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.COLOR_DODGE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.COLOR_BURN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.HARD_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.SOFT_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.DIFFERENCE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.EXCLUSION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.HUE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.SATURATION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.COLOR]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.LUMINOSITY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.NONE]=[0,0],e[L.NORMAL_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.ADD_NPM]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],e[L.SCREEN_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[L.SRC_IN]=[r.DST_ALPHA,r.ZERO],e[L.SRC_OUT]=[r.ONE_MINUS_DST_ALPHA,r.ZERO],e[L.SRC_ATOP]=[r.DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[L.DST_OVER]=[r.ONE_MINUS_DST_ALPHA,r.ONE],e[L.DST_IN]=[r.ZERO,r.SRC_ALPHA],e[L.DST_OUT]=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],e[L.DST_ATOP]=[r.ONE_MINUS_DST_ALPHA,r.SRC_ALPHA],e[L.XOR]=[r.ONE_MINUS_DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[L.SUBTRACT]=[r.ONE,r.ONE,r.ONE,r.ONE,r.FUNC_REVERSE_SUBTRACT,r.FUNC_ADD],e}var Jp=0,Qp=1,tv=2,ev=3,rv=4,nv=5,Js=function(){function r(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=L.NONE,this._blendEq=!1,this.map=[],this.map[Jp]=this.setBlend,this.map[Qp]=this.setOffset,this.map[tv]=this.setCullFace,this.map[ev]=this.setDepthTest,this.map[rv]=this.setFrontFace,this.map[nv]=this.setDepthMask,this.checks=[],this.defaultState=new Te,this.defaultState.blend=!0}return r.prototype.contextChange=function(e){this.gl=e,this.blendModes=Zp(e),this.set(this.defaultState),this.reset()},r.prototype.set=function(e){if(e=e||this.defaultState,this.stateId!==e.data){for(var t=this.stateId^e.data,n=0;t;)t&1&&this.map[n].call(this,!!(e.data&1<<n)),t=t>>1,n++;this.stateId=e.data}for(var n=0;n<this.checks.length;n++)this.checks[n](this,e)},r.prototype.forceState=function(e){e=e||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data},r.prototype.setBlend=function(e){this.updateCheck(r.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)},r.prototype.setOffset=function(e){this.updateCheck(r.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},r.prototype.setDepthTest=function(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)},r.prototype.setDepthMask=function(e){this.gl.depthMask(e)},r.prototype.setCullFace=function(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)},r.prototype.setFrontFace=function(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])},r.prototype.setBlendMode=function(e){if(e!==this.blendMode){this.blendMode=e;var t=this.blendModes[e],n=this.gl;t.length===2?n.blendFunc(t[0],t[1]):n.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,n.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD))}},r.prototype.setPolygonOffset=function(e,t){this.gl.polygonOffset(e,t)},r.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},r.prototype.updateCheck=function(e,t){var n=this.checks.indexOf(e);t&&n===-1?this.checks.push(e):!t&&n!==-1&&this.checks.splice(n,1)},r.checkBlendMode=function(e,t){e.setBlendMode(t.blendMode)},r.checkPolygonOffset=function(e,t){e.setPolygonOffset(1,t.polygonOffset)},r.prototype.destroy=function(){this.gl=null},r}(),Qs=function(){function r(e){this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=N.GC_MAX_IDLE,this.checkCountMax=N.GC_MAX_CHECK_COUNT,this.mode=N.GC_MODE}return r.prototype.postrender=function(){!this.renderer.renderingToScreen||(this.count++,this.mode!==Hn.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},r.prototype.run=function(){for(var e=this.renderer.texture,t=e.managedTextures,n=!1,i=0;i<t.length;i++){var o=t[i];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(e.destroyTexture(o,!0),t[i]=null,n=!0)}if(n){for(var a=0,i=0;i<t.length;i++)t[i]!==null&&(t[a++]=t[i]);t.length=a}},r.prototype.unload=function(e){var t=this.renderer.texture,n=e._texture;n&&!n.framebuffer&&t.destroyTexture(n);for(var i=e.children.length-1;i>=0;i--)this.unload(e.children[i])},r.prototype.destroy=function(){this.renderer=null},r}();function iv(r){var e,t,n,i,o,a,s,u,l,h,f,c,d,p,v,_,m,g,T,I,x,y,A;return"WebGL2RenderingContext"in self&&r instanceof self.WebGL2RenderingContext?A=(e={},e[D.UNSIGNED_BYTE]=(t={},t[R.RGBA]=r.RGBA8,t[R.RGB]=r.RGB8,t[R.RG]=r.RG8,t[R.RED]=r.R8,t[R.RGBA_INTEGER]=r.RGBA8UI,t[R.RGB_INTEGER]=r.RGB8UI,t[R.RG_INTEGER]=r.RG8UI,t[R.RED_INTEGER]=r.R8UI,t[R.ALPHA]=r.ALPHA,t[R.LUMINANCE]=r.LUMINANCE,t[R.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,t),e[D.BYTE]=(n={},n[R.RGBA]=r.RGBA8_SNORM,n[R.RGB]=r.RGB8_SNORM,n[R.RG]=r.RG8_SNORM,n[R.RED]=r.R8_SNORM,n[R.RGBA_INTEGER]=r.RGBA8I,n[R.RGB_INTEGER]=r.RGB8I,n[R.RG_INTEGER]=r.RG8I,n[R.RED_INTEGER]=r.R8I,n),e[D.UNSIGNED_SHORT]=(i={},i[R.RGBA_INTEGER]=r.RGBA16UI,i[R.RGB_INTEGER]=r.RGB16UI,i[R.RG_INTEGER]=r.RG16UI,i[R.RED_INTEGER]=r.R16UI,i[R.DEPTH_COMPONENT]=r.DEPTH_COMPONENT16,i),e[D.SHORT]=(o={},o[R.RGBA_INTEGER]=r.RGBA16I,o[R.RGB_INTEGER]=r.RGB16I,o[R.RG_INTEGER]=r.RG16I,o[R.RED_INTEGER]=r.R16I,o),e[D.UNSIGNED_INT]=(a={},a[R.RGBA_INTEGER]=r.RGBA32UI,a[R.RGB_INTEGER]=r.RGB32UI,a[R.RG_INTEGER]=r.RG32UI,a[R.RED_INTEGER]=r.R32UI,a[R.DEPTH_COMPONENT]=r.DEPTH_COMPONENT24,a),e[D.INT]=(s={},s[R.RGBA_INTEGER]=r.RGBA32I,s[R.RGB_INTEGER]=r.RGB32I,s[R.RG_INTEGER]=r.RG32I,s[R.RED_INTEGER]=r.R32I,s),e[D.FLOAT]=(u={},u[R.RGBA]=r.RGBA32F,u[R.RGB]=r.RGB32F,u[R.RG]=r.RG32F,u[R.RED]=r.R32F,u[R.DEPTH_COMPONENT]=r.DEPTH_COMPONENT32F,u),e[D.HALF_FLOAT]=(l={},l[R.RGBA]=r.RGBA16F,l[R.RGB]=r.RGB16F,l[R.RG]=r.RG16F,l[R.RED]=r.R16F,l),e[D.UNSIGNED_SHORT_5_6_5]=(h={},h[R.RGB]=r.RGB565,h),e[D.UNSIGNED_SHORT_4_4_4_4]=(f={},f[R.RGBA]=r.RGBA4,f),e[D.UNSIGNED_SHORT_5_5_5_1]=(c={},c[R.RGBA]=r.RGB5_A1,c),e[D.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[R.RGBA]=r.RGB10_A2,d[R.RGBA_INTEGER]=r.RGB10_A2UI,d),e[D.UNSIGNED_INT_10F_11F_11F_REV]=(p={},p[R.RGB]=r.R11F_G11F_B10F,p),e[D.UNSIGNED_INT_5_9_9_9_REV]=(v={},v[R.RGB]=r.RGB9_E5,v),e[D.UNSIGNED_INT_24_8]=(_={},_[R.DEPTH_STENCIL]=r.DEPTH24_STENCIL8,_),e[D.FLOAT_32_UNSIGNED_INT_24_8_REV]=(m={},m[R.DEPTH_STENCIL]=r.DEPTH32F_STENCIL8,m),e):A=(g={},g[D.UNSIGNED_BYTE]=(T={},T[R.RGBA]=r.RGBA,T[R.RGB]=r.RGB,T[R.ALPHA]=r.ALPHA,T[R.LUMINANCE]=r.LUMINANCE,T[R.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,T),g[D.UNSIGNED_SHORT_5_6_5]=(I={},I[R.RGB]=r.RGB,I),g[D.UNSIGNED_SHORT_4_4_4_4]=(x={},x[R.RGBA]=r.RGBA,x),g[D.UNSIGNED_SHORT_5_5_5_1]=(y={},y[R.RGBA]=r.RGBA,y),g),A}var pi=function(){function r(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=D.UNSIGNED_BYTE,this.internalFormat=R.RGBA,this.samplerType=0}return r}(),tu=function(){function r(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new K,this.hasIntegerTextures=!1}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=iv(e);var t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var n=0;n<t;n++)this.boundTextures[n]=null;this.emptyTextures={};var i=new pi(e.createTexture());e.bindTexture(e.TEXTURE_2D,i.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=i,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new pi(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(var n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(var n=0;n<this.boundTextures.length;n++)this.bind(null,n)},r.prototype.bind=function(e,t){t===void 0&&(t=0);var n=this.gl;if(e=e==null?void 0:e.castToBaseTexture(),e&&e.valid&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;var i=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[t]!==e&&(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(e.target,i.texture)),i.dirtyId!==e.dirtyId&&(this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),this.updateTexture(e)),this.boundTextures[t]=e}else this.currentLocation!==t&&(this.currentLocation=t,n.activeTexture(n.TEXTURE0+t)),n.bindTexture(n.TEXTURE_2D,this.emptyTextures[n.TEXTURE_2D].texture),this.boundTextures[t]=null},r.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture},r.prototype.unbind=function(e){var t=this,n=t.gl,i=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<i.length;o++)i[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<i.length;o++)i[o]===e&&(this.currentLocation!==o&&(n.activeTexture(n.TEXTURE0+o),this.currentLocation=o),n.bindTexture(e.target,this.emptyTextures[e.target].texture),i[o]=null)},r.prototype.ensureSamplerType=function(e){var t=this,n=t.boundTextures,i=t.hasIntegerTextures,o=t.CONTEXT_UID;if(!!i)for(var a=e-1;a>=0;--a){var s=n[a];if(s){var u=s._glTextures[o];u.samplerType!==Fr.FLOAT&&this.renderer.texture.unbind(s)}}},r.prototype.initTexture=function(e){var t=new pi(this.gl.createTexture());return t.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),t},r.prototype.initTextureType=function(e,t){var n,i;t.internalFormat=(i=(n=this.internalFormats[e.type])===null||n===void 0?void 0:n[e.format])!==null&&i!==void 0?i:e.format,this.webGLVersion===2&&e.type===D.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=e.type},r.prototype.updateTexture=function(e){var t=e._glTextures[this.CONTEXT_UID];if(!!t){var n=this.renderer;if(this.initTextureType(e,t),e.resource&&e.resource.upload(n,e,t))t.samplerType!==Fr.FLOAT&&(this.hasIntegerTextures=!0);else{var i=e.realWidth,o=e.realHeight,a=n.gl;(t.width!==i||t.height!==o||t.dirtyId<0)&&(t.width=i,t.height=o,a.texImage2D(e.target,0,t.internalFormat,i,o,0,e.format,t.type,null))}e.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(e),t.dirtyId=e.dirtyId}},r.prototype.destroyTexture=function(e,t){var n=this.gl;if(e=e.castToBaseTexture(),e._glTextures[this.CONTEXT_UID]&&(this.unbind(e),n.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!t)){var i=this.managedTextures.indexOf(e);i!==-1&&Ue(this.managedTextures,i,1)}},r.prototype.updateTextureStyle=function(e){var t=e._glTextures[this.CONTEXT_UID];!t||((e.mipmap===Ht.POW2||this.webGLVersion!==2)&&!e.isPowerOfTwo?t.mipmap=!1:t.mipmap=e.mipmap>=1,this.webGLVersion!==2&&!e.isPowerOfTwo?t.wrapMode=Kt.CLAMP:t.wrapMode=e.wrapMode,e.resource&&e.resource.style(this.renderer,e,t)||this.setStyle(e,t),t.dirtyStyleId=e.dirtyStyleId)},r.prototype.setStyle=function(e,t){var n=this.gl;if(t.mipmap&&e.mipmap!==Ht.ON_MANUAL&&n.generateMipmap(e.target),n.texParameteri(e.target,n.TEXTURE_WRAP_S,t.wrapMode),n.texParameteri(e.target,n.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){n.texParameteri(e.target,n.TEXTURE_MIN_FILTER,e.scaleMode===Rt.LINEAR?n.LINEAR_MIPMAP_LINEAR:n.NEAREST_MIPMAP_NEAREST);var i=this.renderer.context.extensions.anisotropicFiltering;if(i&&e.anisotropicLevel>0&&e.scaleMode===Rt.LINEAR){var o=Math.min(e.anisotropicLevel,n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));n.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else n.texParameteri(e.target,n.TEXTURE_MIN_FILTER,e.scaleMode===Rt.LINEAR?n.LINEAR:n.NEAREST);n.texParameteri(e.target,n.TEXTURE_MAG_FILTER,e.scaleMode===Rt.LINEAR?n.LINEAR:n.NEAREST)},r.prototype.destroy=function(){this.renderer=null},r}(),eu={__proto__:null,FilterSystem:Rs,BatchSystem:As,ContextSystem:Os,FramebufferSystem:Ns,GeometrySystem:Fs,MaskSystem:js,ScissorSystem:$s,StencilSystem:Ws,ProjectionSystem:Ys,RenderTextureSystem:qs,ShaderSystem:Zs,StateSystem:Js,TextureGCSystem:Qs,TextureSystem:tu},vi=new dt,ov=function(r){et(e,r);function e(t,n){t===void 0&&(t=rr.UNKNOWN);var i=r.call(this)||this;return n=Object.assign({},N.RENDER_OPTIONS,n),i.options=n,i.type=t,i.screen=new $(0,0,n.width,n.height),i.view=n.view||document.createElement("canvas"),i.resolution=n.resolution||N.RESOLUTION,i.useContextAlpha=n.useContextAlpha,i.autoDensity=!!n.autoDensity,i.preserveDrawingBuffer=n.preserveDrawingBuffer,i.clearBeforeRender=n.clearBeforeRender,i._backgroundColor=0,i._backgroundColorRgba=[0,0,0,1],i._backgroundColorString="#000000",i.backgroundColor=n.backgroundColor||i._backgroundColor,i.backgroundAlpha=n.backgroundAlpha,n.transparent!==void 0&&(ce("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),i.useContextAlpha=n.transparent,i.backgroundAlpha=n.transparent?0:1),i._lastObjectRendered=null,i.plugins={},i}return e.prototype.initPlugins=function(t){for(var n in t)this.plugins[n]=new t[n](this)},Object.defineProperty(e.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,n){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(n*this.resolution);var i=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=i,this.screen.height=o,this.autoDensity&&(this.view.style.width=i+"px",this.view.style.height=o+"px"),this.emit("resize",i,o)},e.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={}),typeof n=="number"&&(ce("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),n={scaleMode:n,resolution:i,region:o});var a=n.region,s=ap(n,["region"]);o=a||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=xe.create(Qn({width:o.width,height:o.height},s));return vi.tx=-o.x,vi.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:vi,skipUpdateTransform:!!t.parent}),u},e.prototype.destroy=function(t){for(var n in this.plugins)this.plugins[n].destroy(),this.plugins[n]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var i=this;i.plugins=null,i.type=rr.UNKNOWN,i.view=null,i.screen=null,i._tempDisplayObjectParent=null,i.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=La(t),Tt(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),e}(Ke),av=function(){function r(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return r}(),sv=function(){function r(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}return r.prototype.destroy=function(){this.renderer=null},r.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},r.prototype.bind=function(e){var t=this,n=t.gl,i=t.CONTEXT_UID,o=e._glBuffers[i]||this.createGLBuffer(e);n.bindBuffer(e.type,o.buffer)},r.prototype.bindBufferBase=function(e,t){var n=this,i=n.gl,o=n.CONTEXT_UID;if(this.boundBufferBases[t]!==e){var a=e._glBuffers[o]||this.createGLBuffer(e);this.boundBufferBases[t]=e,i.bindBufferBase(i.UNIFORM_BUFFER,t,a.buffer)}},r.prototype.bindBufferRange=function(e,t,n){var i=this,o=i.gl,a=i.CONTEXT_UID;n=n||0;var s=e._glBuffers[a]||this.createGLBuffer(e);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,s.buffer,n*256,256)},r.prototype.update=function(e){var t=this,n=t.gl,i=t.CONTEXT_UID,o=e._glBuffers[i];if(e._updateID!==o.updateID)if(o.updateID=e._updateID,n.bindBuffer(e.type,o.buffer),o.byteLength>=e.data.byteLength)n.bufferSubData(e.type,0,e.data);else{var a=e.static?n.STATIC_DRAW:n.DYNAMIC_DRAW;o.byteLength=e.data.byteLength,n.bufferData(e.type,e.data,a)}},r.prototype.dispose=function(e,t){if(!!this.managedBuffers[e.id]){delete this.managedBuffers[e.id];var n=e._glBuffers[this.CONTEXT_UID],i=this.gl;e.disposeRunner.remove(this),!!n&&(t||i.deleteBuffer(n.buffer),delete e._glBuffers[this.CONTEXT_UID])}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedBuffers),n=0;n<t.length;n++)this.dispose(this.managedBuffers[t[n]],e)},r.prototype.createGLBuffer=function(e){var t=this,n=t.CONTEXT_UID,i=t.gl;return e._glBuffers[n]=new av(i.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[n]},r}(),ie=function(r){et(e,r);function e(t){var n=r.call(this,rr.WEBGL,t)||this;return t=n.options,n.gl=null,n.CONTEXT_UID=0,n.runners={destroy:new Pt("destroy"),contextChange:new Pt("contextChange"),reset:new Pt("reset"),update:new Pt("update"),postrender:new Pt("postrender"),prerender:new Pt("prerender"),resize:new Pt("resize")},n.runners.contextChange.add(n),n.globalUniforms=new be({projectionMatrix:new dt},!0),n.addSystem(js,"mask").addSystem(Os,"context").addSystem(Js,"state").addSystem(Zs,"shader").addSystem(tu,"texture").addSystem(sv,"buffer").addSystem(Fs,"geometry").addSystem(Ns,"framebuffer").addSystem($s,"scissor").addSystem(Ws,"stencil").addSystem(Ys,"projection").addSystem(Qs,"textureGC").addSystem(Rs,"filter").addSystem(qs,"renderTexture").addSystem(As,"batch"),n.initPlugins(e.__plugins),n.multisample=void 0,t.context?n.context.initFromContext(t.context):n.context.initFromOptions({alpha:!!n.useContextAlpha,antialias:t.antialias,premultipliedAlpha:n.useContextAlpha&&n.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:n.options.powerPreference}),n.renderingToScreen=!0,zh(n.context.webGLVersion===2?"WebGL 2":"WebGL 1"),n.resize(n.options.width,n.options.height),n}return e.create=function(t){if(Vh())return new e(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},e.prototype.contextChange=function(){var t=this.gl,n;if(this.context.webGLVersion===1){var i=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,i)}else{var i=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),n=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,i)}n>=_t.HIGH?this.multisample=_t.HIGH:n>=_t.MEDIUM?this.multisample=_t.MEDIUM:n>=_t.LOW?this.multisample=_t.LOW:this.multisample=_t.NONE},e.prototype.addSystem=function(t,n){var i=new t(this);if(this[n])throw new Error('Whoops! The name "'+n+'" is already in use');this[n]=i;for(var o in this.runners)this.runners[o].add(i);return this},e.prototype.render=function(t,n){var i,o,a,s;if(n&&(n instanceof xe?(ce("6.0.0","Renderer#render arguments changed, use options instead."),i=n,o=arguments[2],a=arguments[3],s=arguments[4]):(i=n.renderTexture,o=n.clear,a=n.transform,s=n.skipUpdateTransform)),this.renderingToScreen=!i,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(i||(this._lastObjectRendered=t),!s){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(i),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),i&&i.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},e.prototype.generateTexture=function(t,n,i,o){n===void 0&&(n={});var a=r.prototype.generateTexture.call(this,t,n,i,o);return this.framebuffer.blit(),a},e.prototype.resize=function(t,n){r.prototype.resize.call(this,t,n),this.runners.resize.emit(this.screen.height,this.screen.width)},e.prototype.reset=function(){return this.runners.reset.emit(),this},e.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},e.prototype.destroy=function(t){this.runners.destroy.emit();for(var n in this.runners)this.runners[n].destroy();r.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(e.prototype,"extract",{get:function(){return ce("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),e.registerPlugin=function(t,n){e.__plugins=e.__plugins||{},e.__plugins[t]=n},e}(ov);function uv(r){return ie.create(r)}var lv=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hv=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,fv=lv,ru=hv,_i=function(){function r(){this.texArray=null,this.blend=0,this.type=Ot.TRIANGLES,this.start=0,this.size=0,this.data=null}return r}(),mi=function(){function r(){this.elements=[],this.ids=[],this.count=0}return r.prototype.clear=function(){for(var e=0;e<this.count;e++)this.elements[e]=null;this.count=0},r}(),gi=function(){function r(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(r.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),r.prototype.view=function(e){return this[e+"View"]},r.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},r.sizeOf=function(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(e+" isn't a valid view type")}},r}(),cv=function(r){et(e,r);function e(t){var n=r.call(this,t)||this;return n.shaderGenerator=null,n.geometryClass=null,n.vertexSize=null,n.state=Te.for2d(),n.size=N.SPRITE_BATCH_SIZE*4,n._vertexCount=0,n._indexCount=0,n._bufferedElements=[],n._bufferedTextures=[],n._bufferSize=0,n._shader=null,n._packedGeometries=[],n._packedGeometryPoolSize=2,n._flushId=0,n._aBuffers={},n._iBuffers={},n.MAX_TEXTURES=1,n.renderer.on("prerender",n.onPrerender,n),t.runners.contextChange.add(n),n._dcIndex=0,n._aIndex=0,n._iIndex=0,n._attributeBuffer=null,n._indexBuffer=null,n._tempBoundTextures=[],n}return e.prototype.contextChange=function(){var t=this.renderer.gl;N.PREFER_ENV===qt.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),N.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=Op(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var n=0;n<this._packedGeometryPoolSize;n++)this._packedGeometries[n]=new this.geometryClass;this.initFlushBuffers()},e.prototype.initFlushBuffers=function(){for(var t=e._drawCallPool,n=e._textureArrayPool,i=this.size/4,o=Math.floor(i/this.MAX_TEXTURES)+1;t.length<i;)t.push(new _i);for(;n.length<o;)n.push(new mi);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},e.prototype.onPrerender=function(){this._flushId=0},e.prototype.render=function(t){!t._texture.valid||(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},e.prototype.buildTexturesAndDrawCalls=function(){var t=this,n=t._bufferedTextures,i=t.MAX_TEXTURES,o=e._textureArrayPool,a=this.renderer.batch,s=this._tempBoundTextures,u=this.renderer.textureGC.count,l=++K._globalBatch,h=0,f=o[0],c=0;a.copyBoundTextures(s,i);for(var d=0;d<this._bufferSize;++d){var p=n[d];n[d]=null,p._batchEnabled!==l&&(f.count>=i&&(a.boundArray(f,s,l,i),this.buildDrawCalls(f,c,d),c=d,f=o[++h],++l),p._batchEnabled=l,p.touched=u,f.elements[f.count++]=p)}f.count>0&&(a.boundArray(f,s,l,i),this.buildDrawCalls(f,c,this._bufferSize),++h,++l);for(var d=0;d<s.length;d++)s[d]=null;K._globalBatch=l},e.prototype.buildDrawCalls=function(t,n,i){var o=this,a=o._bufferedElements,s=o._attributeBuffer,u=o._indexBuffer,l=o.vertexSize,h=e._drawCallPool,f=this._dcIndex,c=this._aIndex,d=this._iIndex,p=h[f];p.start=this._iIndex,p.texArray=t;for(var v=n;v<i;++v){var _=a[v],m=_._texture.baseTexture,g=Ba[m.alphaMode?1:0][_.blendMode];a[v]=null,n<v&&p.blend!==g&&(p.size=d-p.start,n=v,p=h[++f],p.texArray=t,p.start=d),this.packInterleavedGeometry(_,s,u,c,d),c+=_.vertexData.length/2*l,d+=_.indices.length,p.blend=g}n<i&&(p.size=d-p.start,++f),this._dcIndex=f,this._aIndex=c,this._iIndex=d},e.prototype.bindAndClearTexArray=function(t){for(var n=this.renderer.texture,i=0;i<t.count;i++)n.bind(t.elements[i],t.ids[i]),t.elements[i]=null;t.count=0},e.prototype.updateGeometry=function(){var t=this,n=t._packedGeometries,i=t._attributeBuffer,o=t._indexBuffer;N.CAN_UPLOAD_SAME_BUFFER?(n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,n[this._flushId]=new this.geometryClass),n[this._flushId]._buffer.update(i.rawBinaryData),n[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(n[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},e.prototype.drawBatches=function(){for(var t=this._dcIndex,n=this.renderer,i=n.gl,o=n.state,a=e._drawCallPool,s=null,u=0;u<t;u++){var l=a[u],h=l.texArray,f=l.type,c=l.size,d=l.start,p=l.blend;s!==h&&(s=h,this.bindAndClearTexArray(h)),this.state.blendMode=p,o.set(this.state),i.drawElements(f,c,i.UNSIGNED_SHORT,d*2)}},e.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},e.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),N.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),r.prototype.destroy.call(this)},e.prototype.getAttributeBuffer=function(t){var n=Ur(Math.ceil(t/8)),i=Xa(n),o=n*8;this._aBuffers.length<=i&&(this._iBuffers.length=i+1);var a=this._aBuffers[o];return a||(this._aBuffers[o]=a=new gi(o*this.vertexSize*4)),a},e.prototype.getIndexBuffer=function(t){var n=Ur(Math.ceil(t/12)),i=Xa(n),o=n*12;this._iBuffers.length<=i&&(this._iBuffers.length=i+1);var a=this._iBuffers[i];return a||(this._iBuffers[i]=a=new Uint16Array(o)),a},e.prototype.packInterleavedGeometry=function(t,n,i,o,a){for(var s=n.uint32View,u=n.float32View,l=o/this.vertexSize,h=t.uvs,f=t.indices,c=t.vertexData,d=t._texture.baseTexture._batchLocation,p=Math.min(t.worldAlpha,1),v=p<1&&t._texture.baseTexture.alphaMode?jn(t._tintRGB,p):t._tintRGB+(p*255<<24),_=0;_<c.length;_+=2)u[o++]=c[_],u[o++]=c[_+1],u[o++]=h[_],u[o++]=h[_+1],s[o++]=v,u[o++]=d;for(var _=0;_<f.length;_++)i[a++]=l+f[_]},e._drawCallPool=[],e._textureArrayPool=[],e}($r),dv=function(){function r(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return r.prototype.generateShader=function(e){if(!this.programCache[e]){for(var t=new Int32Array(e),n=0;n<e;n++)t[n]=n;this.defaultGroupCache[e]=be.from({uSamplers:t},!0);var i=this.fragTemplate;i=i.replace(/%count%/gi,""+e),i=i.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new ur(this.vertexSrc,i)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new dt,default:this.defaultGroupCache[e]};return new ne(this.programCache[e],o)},r.prototype.generateSampleSrc=function(e){var t="";t+=`
`,t+=`
`;for(var n=0;n<e;n++)n>0&&(t+=`
else `),n<e-1&&(t+="if(vTextureId < "+n+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+n+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},r}(),nu=function(r){et(e,r);function e(t){t===void 0&&(t=!1);var n=r.call(this)||this;return n._buffer=new mt(null,t,!1),n._indexBuffer=new mt(null,t,!0),n.addAttribute("aVertexPosition",n._buffer,2,!1,D.FLOAT).addAttribute("aTextureCoord",n._buffer,2,!1,D.FLOAT).addAttribute("aColor",n._buffer,4,!0,D.UNSIGNED_BYTE).addAttribute("aTextureId",n._buffer,1,!0,D.FLOAT).addIndex(n._indexBuffer),n}return e}(or),iu=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,ou=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,pv=function(){function r(){}return r.create=function(e){var t=Object.assign({vertex:iu,fragment:ou,geometryClass:nu,vertexSize:6},e),n=t.vertex,i=t.fragment,o=t.vertexSize,a=t.geometryClass;return function(s){et(u,s);function u(l){var h=s.call(this,l)||this;return h.shaderGenerator=new dv(n,i),h.geometryClass=a,h.vertexSize=o,h}return u}(cv)},Object.defineProperty(r,"defaultVertexSrc",{get:function(){return iu},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentTemplate",{get:function(){return ou},enumerable:!1,configurable:!0}),r}(),vv=pv.create(),_v={},mv=function(r){Object.defineProperty(_v,r,{get:function(){return ce("6.0.0","PIXI.systems."+r+" has moved to PIXI."+r),bs[r]}})};for(var yi in bs)mv(yi);var gv={},yv=function(r){Object.defineProperty(gv,r,{get:function(){return ce("6.0.0","PIXI.resources."+r+" has moved to PIXI."+r),eu[r]}})};for(var yi in eu)yv(yi);/*!
 * @pixi/app - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var xi=function(){function r(e){var t=this;this.stage=new Vt,e=Object.assign({forceCanvas:!1},e),this.renderer=uv(e),r._plugins.forEach(function(n){n.init.call(t,e)})}return r.registerPlugin=function(e){r._plugins.push(e)},r.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(r.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),r.prototype.destroy=function(e,t){var n=this,i=r._plugins.slice(0);i.reverse(),i.forEach(function(o){o.destroy.call(n)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null},r._plugins=[],r}(),xv=function(){function r(){}return r.init=function(e){var t=this;Object.defineProperty(this,"resizeTo",{set:function(n){self.removeEventListener("resize",this.queueResize),this._resizeTo=n,n&&(self.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){!t._resizeTo||(t.cancelResize(),t._resizeId=requestAnimationFrame(function(){return t.resize()}))},this.cancelResize=function(){t._resizeId&&(cancelAnimationFrame(t._resizeId),t._resizeId=null)},this.resize=function(){if(!!t._resizeTo){t.cancelResize();var n,i;if(t._resizeTo===self)n=self.innerWidth,i=self.innerHeight;else{var o=t._resizeTo,a=o.clientWidth,s=o.clientHeight;n=a,i=s}t.renderer.resize(n,i)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null},r.destroy=function(){self.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},r}();xi.registerPlugin(xv);/*!
 * @pixi/extract - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var au=new $,su=4,bv=function(){function r(e){this.renderer=e}return r.prototype.image=function(e,t,n){var i=new Image;return i.src=this.base64(e,t,n),i},r.prototype.base64=function(e,t,n){return this.canvas(e).toDataURL(t,n)},r.prototype.canvas=function(e){var t=this.renderer,n,i,o=!1,a,s=!1;e&&(e instanceof xe?a=e:(a=this.renderer.generateTexture(e),s=!0)),a?(n=a.baseTexture.resolution,i=a.frame,o=!1,t.renderTexture.bind(a)):(n=this.renderer.resolution,o=!0,i=au,i.width=this.renderer.width,i.height=this.renderer.height,t.renderTexture.bind(null));var u=Math.floor(i.width*n+1e-4),l=Math.floor(i.height*n+1e-4),h=new Va(u,l,1),f=new Uint8Array(su*u*l),c=t.gl;c.readPixels(i.x*n,i.y*n,u,l,c.RGBA,c.UNSIGNED_BYTE,f);var d=h.context.getImageData(0,0,u,l);if(r.arrayPostDivide(f,d.data),h.context.putImageData(d,0,0),o){var p=new Va(h.width,h.height,1);p.context.scale(1,-1),p.context.drawImage(h.canvas,0,-l),h.destroy(),h=p}return s&&a.destroy(!0),h.canvas},r.prototype.pixels=function(e){var t=this.renderer,n,i,o,a=!1;e&&(e instanceof xe?o=e:(o=this.renderer.generateTexture(e),a=!0)),o?(n=o.baseTexture.resolution,i=o.frame,t.renderTexture.bind(o)):(n=t.resolution,i=au,i.width=t.width,i.height=t.height,t.renderTexture.bind(null));var s=i.width*n,u=i.height*n,l=new Uint8Array(su*s*u),h=t.gl;return h.readPixels(i.x*n,i.y*n,s,u,h.RGBA,h.UNSIGNED_BYTE,l),a&&o.destroy(!0),r.arrayPostDivide(l,l),l},r.prototype.destroy=function(){this.renderer=null},r.arrayPostDivide=function(e,t){for(var n=0;n<e.length;n+=4){var i=t[n+3]=e[n+3];i!==0?(t[n]=Math.round(Math.min(e[n]*255/i,255)),t[n+1]=Math.round(Math.min(e[n+1]*255/i,255)),t[n+2]=Math.round(Math.min(e[n+2]*255/i,255))):(t[n]=e[n],t[n+1]=e[n+1],t[n+2]=e[n+2])}},r}();/*!
 * @pixi/loaders - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Zr=function(){function r(e,t,n){t===void 0&&(t=!1),this._fn=e,this._once=t,this._thisArg=n,this._next=this._prev=this._owner=null}return r.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},r}();function uu(r,e){return r._head?(r._tail._next=e,e._prev=r._tail,r._tail=e):(r._head=e,r._tail=e),e._owner=r,e}var te=function(){function r(){this._head=this._tail=void 0}return r.prototype.handlers=function(e){e===void 0&&(e=!1);var t=this._head;if(e)return!!t;for(var n=[];t;)n.push(t),t=t._next;return n},r.prototype.has=function(e){if(!(e instanceof Zr))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return e._owner===this},r.prototype.dispatch=function(){for(var e=arguments,t=[],n=0;n<arguments.length;n++)t[n]=e[n];var i=this._head;if(!i)return!1;for(;i;)i._once&&this.detach(i),i._fn.apply(i._thisArg,t),i=i._next;return!0},r.prototype.add=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return uu(this,new Zr(e,!1,t))},r.prototype.once=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return uu(this,new Zr(e,!0,t))},r.prototype.detach=function(e){if(!(e instanceof Zr))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return e._owner!==this?this:(e._prev&&(e._prev._next=e._next),e._next&&(e._next._prev=e._prev),e===this._head?(this._head=e._next,e._next===null&&(this._tail=null)):e===this._tail&&(this._tail=e._prev,this._tail._next=null),e._owner=null,this)},r.prototype.detachAll=function(){var e=this._head;if(!e)return this;for(this._head=this._tail=null;e;)e._owner=null,e=e._next;return this},r}();function lu(r,e){e=e||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=t.parser[e.strictMode?"strict":"loose"].exec(r),i={},o=14;o--;)i[t.key[o]]=n[o]||"";return i[t.q.name]={},i[t.key[12]].replace(t.q.parser,function(a,s,u){s&&(i[t.q.name][s]=u)}),i}var Tv=!!(self.XDomainRequest&&!("withCredentials"in new XMLHttpRequest)),Jr=null,Cv=0,hu=200,Ev=204,wv=1223,Iv=2;function fu(){}function cu(r,e,t){e&&e.indexOf(".")===0&&(e=e.substring(1)),!!e&&(r[e]=t)}function bi(r){return r.toString().replace("object ","")}var ht=function(){function r(e,t,n){if(this._dequeue=fu,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof e!="string"||typeof t!="string")throw new Error("Both name and url are required for constructing a resource.");n=n||{},this._flags=0,this._setFlag(r.STATUS_FLAGS.DATA_URL,t.indexOf("data:")===0),this.name=e,this.url=t,this.extension=this._getExtension(),this.data=null,this.crossOrigin=n.crossOrigin===!0?"anonymous":n.crossOrigin,this.timeout=n.timeout||0,this.loadType=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=r.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=fu,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new te,this.onProgress=new te,this.onComplete=new te,this.onAfterMiddleware=new te}return r.setExtensionLoadType=function(e,t){cu(r._loadTypeMap,e,t)},r.setExtensionXhrType=function(e,t){cu(r._xhrTypeMap,e,t)},Object.defineProperty(r.prototype,"isDataUrl",{get:function(){return this._hasFlag(r.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isComplete",{get:function(){return this._hasFlag(r.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isLoading",{get:function(){return this._hasFlag(r.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),r.prototype.complete=function(){this._clearEvents(),this._finish()},r.prototype.abort=function(e){if(!this.error){if(this.error=new Error(e),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=r.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},r.prototype.load=function(e){var t=this;if(!this.isLoading){if(this.isComplete){e&&setTimeout(function(){return e(t)},1);return}else e&&this.onComplete.once(e);switch(this._setFlag(r.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case r.LOAD_TYPE.IMAGE:this.type=r.TYPE.IMAGE,this._loadElement("image");break;case r.LOAD_TYPE.AUDIO:this.type=r.TYPE.AUDIO,this._loadSourceElement("audio");break;case r.LOAD_TYPE.VIDEO:this.type=r.TYPE.VIDEO,this._loadSourceElement("video");break;case r.LOAD_TYPE.XHR:default:Tv&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},r.prototype._hasFlag=function(e){return(this._flags&e)!=0},r.prototype._setFlag=function(e,t){this._flags=t?this._flags|e:this._flags&~e},r.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},r.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(r.STATUS_FLAGS.COMPLETE,!0),this._setFlag(r.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},r.prototype._loadElement=function(e){this.metadata.loadElement?this.data=this.metadata.loadElement:e==="image"&&typeof self.Image!="undefined"?this.data=new Image:this.data=document.createElement(e),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadSourceElement=function(e){if(this.metadata.loadElement?this.data=this.metadata.loadElement:e==="audio"&&typeof self.Audio!="undefined"?this.data=new Audio:this.data=document.createElement(e),this.data===null){this.abort("Unsupported element: "+e);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var t=this.metadata.mimeType,n=0;n<this.url.length;++n)this.data.appendChild(this._createSource(e,this.url[n],Array.isArray(t)?t[n]:t));else{var t=this.metadata.mimeType;this.data.appendChild(this._createSource(e,this.url,Array.isArray(t)?t[0]:t))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===r.XHR_RESPONSE_TYPE.JSON||this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=r.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTimeout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},r.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new self.XDomainRequest;e.timeout=this.timeout||5e3,e.onerror=this._boundXhrOnError,e.ontimeout=this._boundXhrOnTimeout,e.onprogress=this._boundOnProgress,e.onload=this._boundXhrOnLoad,e.open("GET",this.url,!0),setTimeout(function(){return e.send()},1)},r.prototype._createSource=function(e,t,n){n||(n=e+"/"+this._getExtension(t));var i=document.createElement("source");return i.src=t,i.type=n,i},r.prototype._onError=function(e){this.abort("Failed to load element using: "+e.target.nodeName)},r.prototype._onProgress=function(e){e&&e.lengthComputable&&this.onProgress.dispatch(this,e.loaded/e.total)},r.prototype._onTimeout=function(){this.abort("Load timed out.")},r.prototype._xhrOnError=function(){var e=this.xhr;this.abort(bi(e)+" Request failed. Status: "+e.status+', text: "'+e.statusText+'"')},r.prototype._xhrOnTimeout=function(){var e=this.xhr;this.abort(bi(e)+" Request timed out.")},r.prototype._xhrOnAbort=function(){var e=this.xhr;this.abort(bi(e)+" Request was aborted by the user.")},r.prototype._xhrOnLoad=function(){var e=this.xhr,t="",n=typeof e.status=="undefined"?hu:e.status;(e.responseType===""||e.responseType==="text"||typeof e.responseType=="undefined")&&(t=e.responseText),n===Cv&&(t.length>0||e.responseType===r.XHR_RESPONSE_TYPE.BUFFER)?n=hu:n===wv&&(n=Ev);var i=n/100|0;if(i===Iv)if(this.xhrType===r.XHR_RESPONSE_TYPE.TEXT)this.data=t,this.type=r.TYPE.TEXT;else if(this.xhrType===r.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t),this.type=r.TYPE.JSON}catch(s){this.abort("Error trying to parse loaded json: "+s);return}else if(this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT)try{if(self.DOMParser){var o=new DOMParser;this.data=o.parseFromString(t,"text/xml")}else{var a=document.createElement("div");a.innerHTML=t,this.data=a}this.type=r.TYPE.XML}catch(s){this.abort("Error trying to parse loaded xml: "+s);return}else this.data=e.response||t;else{this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);return}this.complete()},r.prototype._determineCrossOrigin=function(e,t){if(e.indexOf("data:")===0)return"";if(self.origin!==self.location.origin)return"anonymous";t=t||self.location,Jr||(Jr=document.createElement("a")),Jr.href=e;var n=lu(Jr.href,{strictMode:!0}),i=!n.port&&t.port===""||n.port===t.port,o=n.protocol?n.protocol+":":"";return n.host!==t.hostname||!i||o!==t.protocol?"anonymous":""},r.prototype._determineXhrType=function(){return r._xhrTypeMap[this.extension]||r.XHR_RESPONSE_TYPE.TEXT},r.prototype._determineLoadType=function(){return r._loadTypeMap[this.extension]||r.LOAD_TYPE.XHR},r.prototype._getExtension=function(e){e===void 0&&(e=this.url);var t="";if(this.isDataUrl){var n=e.indexOf("/");t=e.substring(n+1,e.indexOf(";",n))}else{var i=e.indexOf("?"),o=e.indexOf("#"),a=Math.min(i>-1?i:e.length,o>-1?o:e.length);e=e.substring(0,a),t=e.substring(e.lastIndexOf(".")+1)}return t.toLowerCase()},r.prototype._getMimeFromXhrType=function(e){switch(e){case r.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case r.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case r.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case r.XHR_RESPONSE_TYPE.JSON:return"application/json";case r.XHR_RESPONSE_TYPE.DEFAULT:case r.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},r}();(function(r){(function(e){e[e.NONE=0]="NONE",e[e.DATA_URL=1]="DATA_URL",e[e.COMPLETE=2]="COMPLETE",e[e.LOADING=4]="LOADING"})(r.STATUS_FLAGS||(r.STATUS_FLAGS={})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.JSON=1]="JSON",e[e.XML=2]="XML",e[e.IMAGE=3]="IMAGE",e[e.AUDIO=4]="AUDIO",e[e.VIDEO=5]="VIDEO",e[e.TEXT=6]="TEXT"}(r.TYPE||(r.TYPE={})),function(e){e[e.XHR=1]="XHR",e[e.IMAGE=2]="IMAGE",e[e.AUDIO=3]="AUDIO",e[e.VIDEO=4]="VIDEO"}(r.LOAD_TYPE||(r.LOAD_TYPE={})),function(e){e.DEFAULT="text",e.BUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.TEXT="text"}(r.XHR_RESPONSE_TYPE||(r.XHR_RESPONSE_TYPE={})),r._loadTypeMap={gif:r.LOAD_TYPE.IMAGE,png:r.LOAD_TYPE.IMAGE,bmp:r.LOAD_TYPE.IMAGE,jpg:r.LOAD_TYPE.IMAGE,jpeg:r.LOAD_TYPE.IMAGE,tif:r.LOAD_TYPE.IMAGE,tiff:r.LOAD_TYPE.IMAGE,webp:r.LOAD_TYPE.IMAGE,tga:r.LOAD_TYPE.IMAGE,svg:r.LOAD_TYPE.IMAGE,"svg+xml":r.LOAD_TYPE.IMAGE,mp3:r.LOAD_TYPE.AUDIO,ogg:r.LOAD_TYPE.AUDIO,wav:r.LOAD_TYPE.AUDIO,mp4:r.LOAD_TYPE.VIDEO,webm:r.LOAD_TYPE.VIDEO},r._xhrTypeMap={xhtml:r.XHR_RESPONSE_TYPE.DOCUMENT,html:r.XHR_RESPONSE_TYPE.DOCUMENT,htm:r.XHR_RESPONSE_TYPE.DOCUMENT,xml:r.XHR_RESPONSE_TYPE.DOCUMENT,tmx:r.XHR_RESPONSE_TYPE.DOCUMENT,svg:r.XHR_RESPONSE_TYPE.DOCUMENT,tsx:r.XHR_RESPONSE_TYPE.DOCUMENT,gif:r.XHR_RESPONSE_TYPE.BLOB,png:r.XHR_RESPONSE_TYPE.BLOB,bmp:r.XHR_RESPONSE_TYPE.BLOB,jpg:r.XHR_RESPONSE_TYPE.BLOB,jpeg:r.XHR_RESPONSE_TYPE.BLOB,tif:r.XHR_RESPONSE_TYPE.BLOB,tiff:r.XHR_RESPONSE_TYPE.BLOB,webp:r.XHR_RESPONSE_TYPE.BLOB,tga:r.XHR_RESPONSE_TYPE.BLOB,json:r.XHR_RESPONSE_TYPE.JSON,text:r.XHR_RESPONSE_TYPE.TEXT,txt:r.XHR_RESPONSE_TYPE.TEXT,ttf:r.XHR_RESPONSE_TYPE.BUFFER,otf:r.XHR_RESPONSE_TYPE.BUFFER},r.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(ht||(ht={}));function Ee(){}function Pv(r){return function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];if(r===null)throw new Error("Callback was already called.");var o=r;r=null,o.apply(this,n)}}var Rv=function(){function r(e,t){this.data=e,this.callback=t}return r}(),Ti=function(){function r(e,t){var n=this;if(t===void 0&&(t=1),this.workers=0,this.saturated=Ee,this.unsaturated=Ee,this.empty=Ee,this.drain=Ee,this.error=Ee,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(i,o,a){if(a&&typeof a!="function")throw new Error("task callback must be a function");if(n.started=!0,i==null&&n.idle()){setTimeout(function(){return n.drain()},1);return}var s=new Rv(i,typeof a=="function"?a:Ee);o?n._tasks.unshift(s):n._tasks.push(s),setTimeout(n.process,1)},this.process=function(){for(;!n.paused&&n.workers<n.concurrency&&n._tasks.length;){var i=n._tasks.shift();n._tasks.length===0&&n.empty(),n.workers+=1,n.workers===n.concurrency&&n.saturated(),n._worker(i.data,Pv(n._next(i)))}},this._worker=e,t===0)throw new Error("Concurrency must not be zero");this.concurrency=t,this.buffer=t/4}return r.prototype._next=function(e){var t=this;return function(){for(var n=arguments,i=[],o=0;o<arguments.length;o++)i[o]=n[o];t.workers-=1,e.callback.apply(e,i),i[0]!=null&&t.error(i[0],e.data),t.workers<=t.concurrency-t.buffer&&t.unsaturated(),t.idle()&&t.drain(),t.process()}},r.prototype.push=function(e,t){this._insert(e,!1,t)},r.prototype.kill=function(){this.workers=0,this.drain=Ee,this.started=!1,this._tasks=[]},r.prototype.unshift=function(e,t){this._insert(e,!0,t)},r.prototype.length=function(){return this._tasks.length},r.prototype.running=function(){return this.workers},r.prototype.idle=function(){return this._tasks.length+this.workers===0},r.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},r.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var e=1;e<=this.concurrency;e++)this.process()}},r.eachSeries=function(e,t,n,i){var o=0,a=e.length;function s(u){if(u||o===a){n&&n(u);return}i?setTimeout(function(){t(e[o++],s)},1):t(e[o++],s)}s()},r.queue=function(e,t){return new r(e,t)},r}(),Ci=100,Av=/(#[\w-]+)?$/,$t=function(){function r(e,t){var n=this;e===void 0&&(e=""),t===void 0&&(t=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return n._loadResource(u,l)},this.resources={},this.baseUrl=e,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return n._loadResource(u,l)},this._queue=Ti.queue(this._boundLoadResource,t),this._queue.pause(),this.resources={},this.onProgress=new te,this.onError=new te,this.onLoad=new te,this.onStart=new te,this.onComplete=new te;for(var i=0;i<r._plugins.length;++i){var o=r._plugins[i],a=o.pre,s=o.use;a&&this.pre(a),s&&this.use(s)}this._protected=!1}return r.prototype._add=function(e,t,n,i){if(this.loading&&(!n||!n.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[e])throw new Error('Resource named "'+e+'" already exists.');if(t=this._prepareUrl(t),this.resources[e]=new ht(e,t,n),typeof i=="function"&&this.resources[e].onAfterMiddleware.once(i),this.loading){for(var o=n.parentResource,a=[],s=0;s<o.children.length;++s)o.children[s].isComplete||a.push(o.children[s]);var u=o.progressChunk*(a.length+1),l=u/(a.length+2);o.children.push(this.resources[e]),o.progressChunk=l;for(var s=0;s<a.length;++s)a[s].progressChunk=l;this.resources[e].progressChunk=l}return this._queue.push(this.resources[e]),this},r.prototype.pre=function(e){return this._beforeMiddleware.push(e),this},r.prototype.use=function(e){return this._afterMiddleware.push(e),this},r.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var e in this.resources){var t=this.resources[e];t._onLoadBinding&&t._onLoadBinding.detach(),t.isLoading&&t.abort("loader reset")}return this.resources={},this},r.prototype.load=function(e){if(typeof e=="function"&&this.onComplete.once(e),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var t=this._queue._tasks.length,n=Ci/t,i=0;i<this._queue._tasks.length;++i)this._queue._tasks[i].data.progressChunk=n;this._onStart(),this._queue.resume()}return this},Object.defineProperty(r.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(e){this._queue.concurrency=e},enumerable:!1,configurable:!0}),r.prototype._prepareUrl=function(e){var t=lu(e,{strictMode:!0}),n;if(t.protocol||!t.path||e.indexOf("//")===0?n=e:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&e.charAt(0)!=="/"?n=this.baseUrl+"/"+e:n=this.baseUrl+e,this.defaultQueryString){var i=Av.exec(n)[0];n=n.substr(0,n.length-i.length),n.indexOf("?")!==-1?n+="&"+this.defaultQueryString:n+="?"+this.defaultQueryString,n+=i}return n},r.prototype._loadResource=function(e,t){var n=this;e._dequeue=t,Ti.eachSeries(this._beforeMiddleware,function(i,o){i.call(n,e,function(){o(e.isComplete?{}:null)})},function(){e.isComplete?n._onLoad(e):(e._onLoadBinding=e.onComplete.once(n._onLoad,n),e.load())},!0)},r.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},r.prototype._onComplete=function(){this.progress=Ci,this.loading=!1,this.onComplete.dispatch(this,this.resources)},r.prototype._onLoad=function(e){var t=this;e._onLoadBinding=null,this._resourcesParsing.push(e),e._dequeue(),Ti.eachSeries(this._afterMiddleware,function(n,i){n.call(t,e,i)},function(){e.onAfterMiddleware.dispatch(e),t.progress=Math.min(Ci,t.progress+e.progressChunk),t.onProgress.dispatch(t,e),e.error?t.onError.dispatch(e.error,t,e):t.onLoad.dispatch(t,e),t._resourcesParsing.splice(t._resourcesParsing.indexOf(e),1),t._queue.idle()&&t._resourcesParsing.length===0&&t._onComplete()},!0)},r.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(r,"shared",{get:function(){var e=r._shared;return e||(e=new r,e._protected=!0,r._shared=e),e},enumerable:!1,configurable:!0}),r.registerPlugin=function(e){return r._plugins.push(e),e.add&&e.add(),r},r._plugins=[],r}();$t.prototype.add=function(e,t,n,i){if(Array.isArray(e)){for(var o=0;o<e.length;++o)this.add(e[o]);return this}if(typeof e=="object"&&(n=e,i=t||n.callback||n.onComplete,t=n.url,e=n.name||n.key||n.url),typeof t!="string"&&(i=n,n=t,t=e),typeof t!="string")throw new Error("No url passed to add resource to loader.");return typeof n=="function"&&(i=n,n=null),this._add(e,t,n,i)};var Sv=function(){function r(){}return r.init=function(e){e=Object.assign({sharedLoader:!1},e),this.loader=e.sharedLoader?$t.shared:new $t},r.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},r}(),Ov=function(){function r(){}return r.add=function(){ht.setExtensionLoadType("svg",ht.LOAD_TYPE.XHR),ht.setExtensionXhrType("svg",ht.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){if(e.data&&(e.type===ht.TYPE.IMAGE||e.extension==="svg")){var n=e.data,i=e.url,o=e.name,a=e.metadata;G.fromLoader(n,i,o,a).then(function(s){e.texture=s,t()}).catch(t)}else t()},r}(),Nv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function Fv(r){for(var e="",t=0;t<r.length;){for(var n=[0,0,0],i=[0,0,0,0],o=0;o<n.length;++o)t<r.length?n[o]=r.charCodeAt(t++)&255:n[o]=0;i[0]=n[0]>>2,i[1]=(n[0]&3)<<4|n[1]>>4,i[2]=(n[1]&15)<<2|n[2]>>6,i[3]=n[2]&63;var a=t-(r.length-1);switch(a){case 2:i[3]=64,i[2]=64;break;case 1:i[3]=64;break}for(var o=0;o<i.length;++o)e+=Nv.charAt(i[o])}return e}var du=self.URL||self.webkitURL;function Uv(r,e){if(!r.data){e();return}if(r.xhr&&r.xhrType===ht.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof r.data=="string"){var t=r.xhr.getResponseHeader("content-type");if(t&&t.indexOf("image")===0){r.data=new Image,r.data.src="data:"+t+";base64,"+Fv(r.xhr.responseText),r.type=ht.TYPE.IMAGE,r.data.onload=function(){r.data.onload=null,e()};return}}else if(r.data.type.indexOf("image")===0){var n=du.createObjectURL(r.data);r.blob=r.data,r.data=new Image,r.data.src=n,r.type=ht.TYPE.IMAGE,r.data.onload=function(){du.revokeObjectURL(n),r.data.onload=null,e()};return}}e()}$t.registerPlugin({use:Uv});$t.registerPlugin(Ov);/*!
 * @pixi/compressed-textures - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Q,X;(function(r){r[r.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",r[r.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",r[r.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",r[r.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",r[r.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",r[r.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",r[r.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",r[r.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",r[r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",r[r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",r[r.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",r[r.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",r[r.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"})(X||(X={}));var Qr=(Q={},Q[X.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,Q[X.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,Q[X.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,Q[X.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,Q[X.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,Q[X.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,Q[X.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,Q[X.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,Q[X.COMPRESSED_R11_EAC]=.5,Q[X.COMPRESSED_SIGNED_R11_EAC]=.5,Q[X.COMPRESSED_RG11_EAC]=1,Q[X.COMPRESSED_SIGNED_RG11_EAC]=1,Q[X.COMPRESSED_RGB8_ETC2]=.5,Q[X.COMPRESSED_RGBA8_ETC2_EAC]=1,Q[X.COMPRESSED_SRGB8_ETC2]=.5,Q[X.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,Q[X.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,Q[X.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,Q[X.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,Q[X.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,Q[X.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,Q[X.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,Q[X.COMPRESSED_RGB_ETC1_WEBGL]=.5,Q[X.COMPRESSED_RGB_ATC_WEBGL]=.5,Q[X.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,Q[X.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,Q);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ei=function(r,e){return Ei=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ei(r,e)};function pu(r,e){Ei(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Lv(r,e,t,n){return new(t||(t=Promise))(function(i,o){function a(l){try{u(n.next(l))}catch(h){o(h)}}function s(l){try{u(n.throw(l))}catch(h){o(h)}}function u(l){l.done?i(l.value):new t(function(h){h(l.value)}).then(a,s)}u((n=n.apply(r,e||[])).next())})}function Gv(r,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(h){return u([l,h])}}function u(l){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(r,t)}catch(h){l=[6,h],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Bv=function(r){pu(e,r);function e(t,n){n===void 0&&(n={width:1,height:1,autoLoad:!0});var i=this,o,a;return typeof t=="string"?(o=t,a=new Uint8Array):(o=null,a=t),i=r.call(this,a,n)||this,i.origin=o,i.buffer=a?new gi(a):null,i.origin&&n.autoLoad!==!1&&i.load(),a&&a.length&&(i.loaded=!0,i.onBlobLoaded(i.buffer.rawBinaryData)),i}return e.prototype.onBlobLoaded=function(t){},e.prototype.load=function(){return Lv(this,void 0,Promise,function(){var t,n,i;return Gv(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return t=o.sent(),[4,t.blob()];case 2:return n=o.sent(),[4,n.arrayBuffer()];case 3:return i=o.sent(),this.data=new Uint32Array(i),this.buffer=new gi(i),this.loaded=!0,this.onBlobLoaded(i),this.update(),[2,this]}})})},e}(ir),wi=function(r){pu(e,r);function e(t,n){var i=r.call(this,t,n)||this;return i.format=n.format,i.levels=n.levels||1,i._width=n.width,i._height=n.height,i._extension=e._formatToExtension(i.format),(n.levelBuffers||i.buffer)&&(i._levelBuffers=n.levelBuffers||e._createLevelBuffers(t instanceof Uint8Array?t:i.buffer.uint8View,i.format,i.levels,4,4,i.width,i.height)),i}return e.prototype.upload=function(t,n,i){var o=t.gl,a=t.context.extensions[this._extension];if(!a)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var s=0,u=this.levels;s<u;s++){var l=this._levelBuffers[s],h=l.levelID,f=l.levelWidth,c=l.levelHeight,d=l.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,h,this.format,f,c,0,d)}return!0},e.prototype.onBlobLoaded=function(){this._levelBuffers=e._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},e._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},e._createLevelBuffers=function(t,n,i,o,a,s,u){for(var l=new Array(i),h=t.byteOffset,f=s,c=u,d=f+o-1&~(o-1),p=c+a-1&~(a-1),v=d*p*Qr[n],_=0;_<i;_++)l[_]={levelID:_,levelWidth:i>1?f:d,levelHeight:i>1?c:p,levelBuffer:new Uint8Array(t.buffer,h,v)},h+=v,f=f>>1||1,c=c>>1||1,d=f+o-1&~(o-1),p=c+a-1&~(a-1),v=d*p*Qr[n];return l},e}(Bv),Mv=function(){function r(){}return r.use=function(e,t){var n=e.data,i=this;if(e.type===ht.TYPE.JSON&&n&&n.cacheID&&n.textures){for(var o=n.textures,a=void 0,s=void 0,u=0,l=o.length;u<l;u++){var h=o[u],f=h.src,c=h.format;if(c||(s=f),r.textureFormats[c]){a=f;break}}if(a=a||s,!a){t(new Error("Cannot load compressed-textures in "+e.url+", make sure you provide a fallback"));return}if(a===e.url){t(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},p=Fe.resolve(e.url.replace(i.baseUrl,""),a),v=n.cacheID;i.add(v,p,d,function(_){if(_.error){t(_.error);return}var m=_.texture,g=m===void 0?null:m,T=_.textures,I=T===void 0?{}:T;Object.assign(e,{texture:g,textures:I}),t()})}else t()},r.add=function(){var e=document.createElement("canvas"),t=e.getContext("webgl");if(!t){console.warn("WebGL not available for compressed textures. Silently failing.");return}var n={s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};r.textureExtensions=n,r.textureFormats={};for(var i in n){var o=n[i];!o||Object.assign(r.textureFormats,Object.getPrototypeOf(o))}},r}();function vu(r,e,t){var n={textures:{},texture:null};if(!e)return n;var i=e.map(function(o){return new G(new K(o,Object.assign({mipmap:Ht.OFF,alphaMode:Xt.NO_PREMULTIPLIED_ALPHA},t)))});return i.forEach(function(o,a){var s=o.baseTexture,u=r+"-"+(a+1);K.addToCache(s,u),G.addToCache(o,u),a===0&&(K.addToCache(s,r),G.addToCache(o,r),n.texture=o),n.textures[u]=o}),n}var hr,Ft;ht.setExtensionXhrType("dds",ht.XHR_RESPONSE_TYPE.BUFFER);var Ii=4,tn=124,Dv=32,_u=20,kv=542327876,en={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},Hv={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},rn={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},Ut;(function(r){r[r.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",r[r.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",r[r.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",r[r.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",r[r.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",r[r.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",r[r.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",r[r.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",r[r.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",r[r.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",r[r.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",r[r.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",r[r.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",r[r.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",r[r.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",r[r.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",r[r.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",r[r.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",r[r.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",r[r.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",r[r.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",r[r.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",r[r.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",r[r.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",r[r.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",r[r.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",r[r.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",r[r.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",r[r.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",r[r.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",r[r.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",r[r.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",r[r.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",r[r.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",r[r.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",r[r.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",r[r.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",r[r.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",r[r.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",r[r.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",r[r.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",r[r.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",r[r.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",r[r.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",r[r.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",r[r.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",r[r.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",r[r.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",r[r.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",r[r.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",r[r.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",r[r.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",r[r.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",r[r.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",r[r.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",r[r.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",r[r.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",r[r.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",r[r.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",r[r.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",r[r.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",r[r.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",r[r.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",r[r.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",r[r.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",r[r.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",r[r.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",r[r.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",r[r.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",r[r.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",r[r.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",r[r.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",r[r.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",r[r.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",r[r.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",r[r.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",r[r.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",r[r.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",r[r.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",r[r.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",r[r.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",r[r.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",r[r.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",r[r.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",r[r.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",r[r.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",r[r.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",r[r.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",r[r.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",r[r.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",r[r.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",r[r.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",r[r.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",r[r.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",r[r.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",r[r.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",r[r.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",r[r.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",r[r.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",r[r.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",r[r.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",r[r.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",r[r.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",r[r.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",r[r.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",r[r.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",r[r.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",r[r.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",r[r.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",r[r.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",r[r.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",r[r.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(Ut||(Ut={}));var Pi;(function(r){r[r.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",r[r.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",r[r.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(Pi||(Pi={}));var Xv=1,jv=2,zv=4,Vv=64,$v=512,Wv=131072,Yv=827611204,qv=861165636,Kv=894720068,Zv=808540228,Jv=4,Qv=(hr={},hr[Yv]=X.COMPRESSED_RGBA_S3TC_DXT1_EXT,hr[qv]=X.COMPRESSED_RGBA_S3TC_DXT3_EXT,hr[Kv]=X.COMPRESSED_RGBA_S3TC_DXT5_EXT,hr),t_=(Ft={},Ft[Ut.DXGI_FORMAT_BC1_TYPELESS]=X.COMPRESSED_RGBA_S3TC_DXT1_EXT,Ft[Ut.DXGI_FORMAT_BC1_UNORM]=X.COMPRESSED_RGBA_S3TC_DXT1_EXT,Ft[Ut.DXGI_FORMAT_BC2_TYPELESS]=X.COMPRESSED_RGBA_S3TC_DXT3_EXT,Ft[Ut.DXGI_FORMAT_BC2_UNORM]=X.COMPRESSED_RGBA_S3TC_DXT3_EXT,Ft[Ut.DXGI_FORMAT_BC3_TYPELESS]=X.COMPRESSED_RGBA_S3TC_DXT5_EXT,Ft[Ut.DXGI_FORMAT_BC3_UNORM]=X.COMPRESSED_RGBA_S3TC_DXT5_EXT,Ft[Ut.DXGI_FORMAT_BC1_UNORM_SRGB]=X.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,Ft[Ut.DXGI_FORMAT_BC2_UNORM_SRGB]=X.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,Ft[Ut.DXGI_FORMAT_BC3_UNORM_SRGB]=X.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,Ft),e_=function(){function r(){}return r.use=function(e,t){if(e.extension==="dds"&&e.data)try{Object.assign(e,vu(e.name||e.url,r.parse(e.data),e.metadata))}catch(n){t(n);return}t()},r.parse=function(e){var t=new Uint32Array(e),n=t[0];if(n!==kv)throw new Error("Invalid DDS file magic word");var i=new Uint32Array(e,0,tn/Uint32Array.BYTES_PER_ELEMENT),o=i[en.HEIGHT],a=i[en.WIDTH],s=i[en.MIPMAP_COUNT],u=new Uint32Array(e,en.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,Dv/Uint32Array.BYTES_PER_ELEMENT),l=u[Xv];if(l&zv){var h=u[Hv.FOURCC];if(h!==Zv){var f=Qv[h],c=Ii+tn,d=new Uint8Array(e,c),p=new wi(d,{format:f,width:a,height:o,levels:s});return[p]}var v=Ii+tn,_=new Uint32Array(t.buffer,v,_u/Uint32Array.BYTES_PER_ELEMENT),m=_[rn.DXGI_FORMAT],g=_[rn.RESOURCE_DIMENSION],T=_[rn.MISC_FLAG],I=_[rn.ARRAY_SIZE],x=t_[m];if(x===void 0)throw new Error("DDSLoader cannot parse texture data with DXGI format "+m);if(T===Jv)throw new Error("DDSLoader does not support cubemap textures");if(g===Pi.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSLoader does not supported 3D texture data");var y=new Array,A=Ii+tn+_u;if(I===1)y.push(new Uint8Array(e,A));else{for(var F=Qr[x],E=0,P=a,B=o,U=0;U<s;U++){var j=Math.max(1,P+3&~3),it=Math.max(1,B+3&~3),O=j*it*F;E+=O,P=P>>>1,B=B>>>1}for(var S=A,U=0;U<I;U++)y.push(new Uint8Array(e,S,E)),S+=E}return y.map(function(z){return new wi(z,{format:x,width:a,height:o,levels:s})})}throw l&Vv?new Error("DDSLoader does not support uncompressed texture data."):l&$v?new Error("DDSLoader does not supported YUV uncompressed texture data."):l&Wv?new Error("DDSLoader does not support single-channel (lumninance) texture data!"):l&jv?new Error("DDSLoader does not support single-channel (alpha) texture data!"):new Error("DDSLoader failed to load a texture file due to an unknown reason!")},r}(),Me,we,fr;ht.setExtensionXhrType("ktx",ht.XHR_RESPONSE_TYPE.BUFFER);var mu=[171,75,84,88,32,49,49,187,13,10,26,10],r_=67305985,Lt={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},n_=64,gu=(Me={},Me[D.UNSIGNED_BYTE]=1,Me[D.UNSIGNED_SHORT]=2,Me[D.FLOAT]=4,Me[D.HALF_FLOAT]=8,Me),i_=(we={},we[R.RGBA]=4,we[R.RGB]=3,we[R.LUMINANCE]=1,we[R.LUMINANCE_ALPHA]=2,we[R.ALPHA]=1,we),o_=(fr={},fr[D.UNSIGNED_SHORT_4_4_4_4]=2,fr[D.UNSIGNED_SHORT_5_5_5_1]=2,fr[D.UNSIGNED_SHORT_5_6_5]=2,fr),a_=function(){function r(){}return r.use=function(e,t){if(e.extension==="ktx"&&e.data)try{var n=e.name||e.url;Object.assign(e,vu(n,r.parse(n,e.data),e.metadata))}catch(i){t(i);return}t()},r.parse=function(e,t){var n=new DataView(t);if(!r.validate(e,n))return null;var i=n.getUint32(Lt.ENDIANNESS,!0)===r_,o=n.getUint32(Lt.GL_TYPE,i),a=n.getUint32(Lt.GL_FORMAT,i),s=n.getUint32(Lt.GL_INTERNAL_FORMAT,i),u=n.getUint32(Lt.PIXEL_WIDTH,i),l=n.getUint32(Lt.PIXEL_HEIGHT,i)||1,h=n.getUint32(Lt.PIXEL_DEPTH,i)||1,f=n.getUint32(Lt.NUMBER_OF_ARRAY_ELEMENTS,i)||1,c=n.getUint32(Lt.NUMBER_OF_FACES,i),d=n.getUint32(Lt.NUMBER_OF_MIPMAP_LEVELS,i),p=n.getUint32(Lt.BYTES_OF_KEY_VALUE_DATA,i);if(l===0||h!==1)throw new Error("Only 2D textures are supported");if(c!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(f!==1)throw new Error("WebGL does not support array textures");var v=4,_=4,m=u+3&~3,g=l+3&~3,T=new Array(f),I=u*l;o===0&&(I=m*g);var x;if(o!==0?gu[o]?x=gu[o]*i_[a]:x=o_[o]:x=Qr[s],x===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var y=I*x,A=y,F=u,E=l,P=m,B=g,U=n_+p,j=0;j<d;j++){for(var it=n.getUint32(U,i),O=U+4,S=0;S<f;S++){var z=T[S];z||(z=T[S]=new Array(d)),z[j]={levelID:j,levelWidth:d>1?F:P,levelHeight:d>1?E:B,levelBuffer:new Uint8Array(t,O,A)},O+=A}U+=it+4,U=U%4!=0?U+4-U%4:U,F=F>>1||1,E=E>>1||1,P=F+v-1&~(v-1),B=E+_-1&~(_-1),A=P*B*x}if(o!==0)throw new Error("TODO: Uncompressed");return T.map(function(gt){return new wi(null,{format:s,width:u,height:l,levels:d,levelBuffers:gt})})},r.validate=function(e,t){for(var n=0;n<mu.length;n++)if(t.getUint8(n)!==mu[n])return console.error(e+" is not a valid *.ktx file!"),!1;return!0},r}();/*!
 * @pixi/particle-container - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ri=function(r,e){return Ri=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ri(r,e)};function yu(r,e){Ri(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){yu(e,r);function e(t,n,i,o){t===void 0&&(t=1500),i===void 0&&(i=16384),o===void 0&&(o=!1);var a=r.call(this)||this,s=16384;return i>s&&(i=s),a._properties=[!1,!0,!1,!1,!1],a._maxSize=t,a._batchSize=i,a._buffers=null,a._bufferUpdateIDs=[],a._updateID=0,a.interactiveChildren=!1,a.blendMode=L.NORMAL,a.autoResize=o,a.roundPixels=!0,a.baseTexture=null,a.setProperties(n),a._tint=0,a.tintRgb=new Float32Array(4),a.tint=16777215,a}return e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,Tt(t,this.tintRgb)},enumerable:!1,configurable:!0}),e.prototype.render=function(t){var n=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return n.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){for(var n=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<n;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[n]=++this._updateID},e.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},e})(Vt);var xu=function(){function r(e,t,n){this.geometry=new or,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(var i=0;i<e.length;++i){var o=e[i];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||D.FLOAT,offset:o.offset},t[i]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return r.prototype.initBuffers=function(){var e=this.geometry,t=0;this.indexBuffer=new mt(Gd(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];i.offset=t,t+=i.size,this.dynamicStride+=i.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new mt(this.dynamicData,!1,!1);var a=0;this.staticStride=0;for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];i.offset=a,a+=i.size,this.staticStride+=i.size}var s=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(s),this.staticDataUint32=new Uint32Array(s),this.staticBuffer=new mt(this.staticData,!0,!1);for(var n=0;n<this.dynamicProperties.length;++n){var i=this.dynamicProperties[n];e.addAttribute(i.attributeName,this.dynamicBuffer,0,i.type===D.UNSIGNED_BYTE,i.type,this.dynamicStride*4,i.offset*4)}for(var n=0;n<this.staticProperties.length;++n){var i=this.staticProperties[n];e.addAttribute(i.attributeName,this.staticBuffer,0,i.type===D.UNSIGNED_BYTE,i.type,this.staticStride*4,i.offset*4)}},r.prototype.uploadDynamic=function(e,t,n){for(var i=0;i<this.dynamicProperties.length;i++){var o=this.dynamicProperties[i];o.uploadFunction(e,t,n,o.type===D.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},r.prototype.uploadStatic=function(e,t,n){for(var i=0;i<this.staticProperties.length;i++){var o=this.staticProperties[i];o.uploadFunction(e,t,n,o.type===D.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},r.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},r}(),s_=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,u_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,l_=function(r){yu(e,r);function e(t){var n=r.call(this,t)||this;return n.shader=null,n.properties=null,n.tempMatrix=new dt,n.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:n.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:n.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:n.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:n.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:D.UNSIGNED_BYTE,uploadFunction:n.uploadTint,offset:0}],n.shader=ne.from(u_,s_,{}),n.state=Te.for2d(),n}return e.prototype.render=function(t){var n=t.children,i=t._maxSize,o=t._batchSize,a=this.renderer,s=n.length;if(s!==0){s>i&&!t.autoResize&&(s=i);var u=t._buffers;u||(u=t._buffers=this.generateBuffers(t));var l=n[0]._texture.baseTexture;this.state.blendMode=Ma(t.blendMode,l.alphaMode),a.state.set(this.state);var h=a.gl,f=t.worldTransform.copyTo(this.tempMatrix);f.prepend(a.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=f.toArray(!0),this.shader.uniforms.uColor=Ld(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,l.alphaMode),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);for(var c=!1,d=0,p=0;d<s;d+=o,p+=1){var v=s-d;v>o&&(v=o),p>=u.length&&u.push(this._generateOneMoreBuffer(t));var _=u[p];_.uploadDynamic(n,d,v);var m=t._bufferUpdateIDs[p]||0;c=c||_._updateID<m,c&&(_._updateID=t._updateID,_.uploadStatic(n,d,v)),a.geometry.bind(_.geometry),h.drawElements(h.TRIANGLES,v*6,h.UNSIGNED_SHORT,0)}}},e.prototype.generateBuffers=function(t){for(var n=[],i=t._maxSize,o=t._batchSize,a=t._properties,s=0;s<i;s+=o)n.push(new xu(this.properties,a,o));return n},e.prototype._generateOneMoreBuffer=function(t){var n=t._batchSize,i=t._properties;return new xu(this.properties,i,n)},e.prototype.uploadVertices=function(t,n,i,o,a,s){for(var u=0,l=0,h=0,f=0,c=0;c<i;++c){var d=t[n+c],p=d._texture,v=d.scale.x,_=d.scale.y,m=p.trim,g=p.orig;m?(l=m.x-d.anchor.x*g.width,u=l+m.width,f=m.y-d.anchor.y*g.height,h=f+m.height):(u=g.width*(1-d.anchor.x),l=g.width*-d.anchor.x,h=g.height*(1-d.anchor.y),f=g.height*-d.anchor.y),o[s]=l*v,o[s+1]=f*_,o[s+a]=u*v,o[s+a+1]=f*_,o[s+a*2]=u*v,o[s+a*2+1]=h*_,o[s+a*3]=l*v,o[s+a*3+1]=h*_,s+=a*4}},e.prototype.uploadPosition=function(t,n,i,o,a,s){for(var u=0;u<i;u++){var l=t[n+u].position;o[s]=l.x,o[s+1]=l.y,o[s+a]=l.x,o[s+a+1]=l.y,o[s+a*2]=l.x,o[s+a*2+1]=l.y,o[s+a*3]=l.x,o[s+a*3+1]=l.y,s+=a*4}},e.prototype.uploadRotation=function(t,n,i,o,a,s){for(var u=0;u<i;u++){var l=t[n+u].rotation;o[s]=l,o[s+a]=l,o[s+a*2]=l,o[s+a*3]=l,s+=a*4}},e.prototype.uploadUvs=function(t,n,i,o,a,s){for(var u=0;u<i;++u){var l=t[n+u]._texture._uvs;l?(o[s]=l.x0,o[s+1]=l.y0,o[s+a]=l.x1,o[s+a+1]=l.y1,o[s+a*2]=l.x2,o[s+a*2+1]=l.y2,o[s+a*3]=l.x3,o[s+a*3+1]=l.y3,s+=a*4):(o[s]=0,o[s+1]=0,o[s+a]=0,o[s+a+1]=0,o[s+a*2]=0,o[s+a*2+1]=0,o[s+a*3]=0,o[s+a*3+1]=0,s+=a*4)}},e.prototype.uploadTint=function(t,n,i,o,a,s){for(var u=0;u<i;++u){var l=t[n+u],h=l._texture.baseTexture.alphaMode>0,f=l.alpha,c=f<1&&h?jn(l._tintRGB,f):l._tintRGB+(f*255<<24);o[s]=c,o[s+a]=c,o[s+a*2]=c,o[s+a*3]=c,s+=a*4}},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},e}($r);/*!
 * @pixi/graphics - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var oe;(function(r){r.MITER="miter",r.BEVEL="bevel",r.ROUND="round"})(oe||(oe={}));var ae;(function(r){r.BUTT="butt",r.ROUND="round",r.SQUARE="square"})(ae||(ae={}));var cr={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(r,e){if(e===void 0&&(e=20),!this.adaptive||!r||isNaN(r))return e;var t=Math.ceil(r/this.maxLength);return t<this.minSegments?t=this.minSegments:t>this.maxSegments&&(t=this.maxSegments),t}},bu=function(){function r(){this.color=16777215,this.alpha=1,this.texture=G.WHITE,this.matrix=null,this.visible=!1,this.reset()}return r.prototype.clone=function(){var e=new r;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e},r.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=G.WHITE,this.matrix=null,this.visible=!1},r.prototype.destroy=function(){this.texture=null,this.matrix=null},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ai=function(r,e){return Ai=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ai(r,e)};function Si(r,e){Ai(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Tu={build:function(r){r.points=r.shape.points.slice()},triangulate:function(r,e){var t=r.points,n=r.holes,i=e.points,o=e.indices;if(t.length>=6){for(var a=[],s=0;s<n.length;s++){var u=n[s];a.push(t.length/2),t=t.concat(u.points)}var l=Aa(t,a,2);if(!l)return;for(var h=i.length/2,s=0;s<l.length;s+=3)o.push(l[s]+h),o.push(l[s+1]+h),o.push(l[s+2]+h);for(var s=0;s<t.length;s++)i.push(t[s])}}},Cu={build:function(r){var e=r.shape,t=r.points,n=e.x,i=e.y,o,a;if(t.length=0,r.type===ct.CIRC)o=e.radius,a=e.radius;else{var s=r.shape;o=s.width,a=s.height}if(!(o===0||a===0)){var u=Math.floor(30*Math.sqrt(e.radius))||Math.floor(15*Math.sqrt(o+a));u/=2.3;for(var l=Math.PI*2/u,h=0;h<u-.5;h++)t.push(n+Math.sin(-l*h)*o,i+Math.cos(-l*h)*a);t.push(t[0],t[1])}},triangulate:function(r,e){var t=r.points,n=e.points,i=e.indices,o=n.length/2,a=o,s=r.shape,u=r.matrix,l=s.x,h=s.y;n.push(r.matrix?u.a*l+u.c*h+u.tx:l,r.matrix?u.b*l+u.d*h+u.ty:h);for(var f=0;f<t.length;f+=2)n.push(t[f],t[f+1]),i.push(o++,a,o)}},h_={build:function(r){var e=r.shape,t=e.x,n=e.y,i=e.width,o=e.height,a=r.points;a.length=0,a.push(t,n,t+i,n,t+i,n+o,t,n+o)},triangulate:function(r,e){var t=r.points,n=e.points,i=n.length/2;n.push(t[0],t[1],t[2],t[3],t[6],t[7],t[4],t[5]),e.indices.push(i,i+1,i+2,i+1,i+2,i+3)}};function De(r,e,t){var n=e-r;return r+n*t}function nn(r,e,t,n,i,o,a){a===void 0&&(a=[]);for(var s=20,u=a,l=0,h=0,f=0,c=0,d=0,p=0,v=0,_=0;v<=s;++v)_=v/s,l=De(r,t,_),h=De(e,n,_),f=De(t,i,_),c=De(n,o,_),d=De(l,f,_),p=De(h,c,_),!(v===0&&u[u.length-2]===d&&u[u.length-1]===p)&&u.push(d,p);return u}var f_={build:function(r){var e=r.shape,t=r.points,n=e.x,i=e.y,o=e.width,a=e.height,s=Math.max(0,Math.min(e.radius,Math.min(o,a)/2));t.length=0,s?(nn(n,i+s,n,i,n+s,i,t),nn(n+o-s,i,n+o,i,n+o,i+s,t),nn(n+o,i+a-s,n+o,i+a,n+o-s,i+a,t),nn(n+s,i+a,n,i+a,n,i+a-s,t)):t.push(n,i,n+o,i,n+o,i+a,n,i+a)},triangulate:function(r,e){for(var t=r.points,n=e.points,i=e.indices,o=n.length/2,a=Aa(t,null,2),s=0,u=a.length;s<u;s+=3)i.push(a[s]+o),i.push(a[s+1]+o),i.push(a[s+2]+o);for(var s=0,u=t.length;s<u;s++)n.push(t[s],t[++s])}};function Eu(r,e,t,n,i,o,a,s){var u=r-t*i,l=e-n*i,h=r+t*o,f=e+n*o,c,d;a?(c=n,d=-t):(c=-n,d=t);var p=u+c,v=l+d,_=h+c,m=f+d;return s.push(p,v),s.push(_,m),2}function ke(r,e,t,n,i,o,a,s){var u=t-r,l=n-e,h=Math.atan2(u,l),f=Math.atan2(i-r,o-e);s&&h<f?h+=Math.PI*2:!s&&h>f&&(f+=Math.PI*2);var c=h,d=f-h,p=Math.abs(d),v=Math.sqrt(u*u+l*l),_=(15*p*Math.sqrt(v)/Math.PI>>0)+1,m=d/_;if(c+=m,s){a.push(r,e),a.push(t,n);for(var g=1,T=c;g<_;g++,T+=m)a.push(r,e),a.push(r+Math.sin(T)*v,e+Math.cos(T)*v);a.push(r,e),a.push(i,o)}else{a.push(t,n),a.push(r,e);for(var g=1,T=c;g<_;g++,T+=m)a.push(r+Math.sin(T)*v,e+Math.cos(T)*v),a.push(r,e);a.push(i,o),a.push(r,e)}return _*2}function c_(r,e){var t=r.shape,n=r.points||t.points.slice(),i=e.closePointEps;if(n.length!==0){var o=r.lineStyle,a=new q(n[0],n[1]),s=new q(n[n.length-2],n[n.length-1]),u=t.type!==ct.POLY||t.closeStroke,l=Math.abs(a.x-s.x)<i&&Math.abs(a.y-s.y)<i;if(u){n=n.slice(),l&&(n.pop(),n.pop(),s.set(n[n.length-2],n[n.length-1]));var h=(a.x+s.x)*.5,f=(s.y+a.y)*.5;n.unshift(h,f),n.push(h,f)}var c=e.points,d=n.length/2,p=n.length,v=c.length/2,_=o.width/2,m=_*_,g=o.miterLimit*o.miterLimit,T=n[0],I=n[1],x=n[2],y=n[3],A=0,F=0,E=-(I-y),P=T-x,B=0,U=0,j=Math.sqrt(E*E+P*P);E/=j,P/=j,E*=_,P*=_;var it=o.alignment,O=(1-it)*2,S=it*2;u||(o.cap===ae.ROUND?p+=ke(T-E*(O-S)*.5,I-P*(O-S)*.5,T-E*O,I-P*O,T+E*S,I+P*S,c,!0)+2:o.cap===ae.SQUARE&&(p+=Eu(T,I,E,P,O,S,!0,c))),c.push(T-E*O,I-P*O),c.push(T+E*S,I+P*S);for(var z=1;z<d-1;++z){T=n[(z-1)*2],I=n[(z-1)*2+1],x=n[z*2],y=n[z*2+1],A=n[(z+1)*2],F=n[(z+1)*2+1],E=-(I-y),P=T-x,j=Math.sqrt(E*E+P*P),E/=j,P/=j,E*=_,P*=_,B=-(y-F),U=x-A,j=Math.sqrt(B*B+U*U),B/=j,U/=j,B*=_,U*=_;var gt=x-T,Et=I-y,w=x-A,M=F-y,H=Et*w-M*gt,Y=H<0;if(Math.abs(H)<.1){c.push(x-E*O,y-P*O),c.push(x+E*S,y+P*S);continue}var tt=(-E+T)*(-P+y)-(-E+x)*(-P+I),st=(-B+A)*(-U+y)-(-B+x)*(-U+F),J=(gt*st-w*tt)/H,vt=(M*tt-Et*st)/H,yt=(J-x)*(J-x)+(vt-y)*(vt-y),ut=x+(J-x)*O,ft=y+(vt-y)*O,Z=x-(J-x)*S,nt=y-(vt-y)*S,V=Math.min(gt*gt+Et*Et,w*w+M*M),wt=Y?O:S,xt=V+wt*wt*m,W=yt<=xt;W?o.join===oe.BEVEL||yt/m>g?(Y?(c.push(ut,ft),c.push(x+E*S,y+P*S),c.push(ut,ft),c.push(x+B*S,y+U*S)):(c.push(x-E*O,y-P*O),c.push(Z,nt),c.push(x-B*O,y-U*O),c.push(Z,nt)),p+=2):o.join===oe.ROUND?Y?(c.push(ut,ft),c.push(x+E*S,y+P*S),p+=ke(x,y,x+E*S,y+P*S,x+B*S,y+U*S,c,!0)+4,c.push(ut,ft),c.push(x+B*S,y+U*S)):(c.push(x-E*O,y-P*O),c.push(Z,nt),p+=ke(x,y,x-E*O,y-P*O,x-B*O,y-U*O,c,!1)+4,c.push(x-B*O,y-U*O),c.push(Z,nt)):(c.push(ut,ft),c.push(Z,nt)):(c.push(x-E*O,y-P*O),c.push(x+E*S,y+P*S),o.join===oe.BEVEL||yt/m>g||(o.join===oe.ROUND?Y?p+=ke(x,y,x+E*S,y+P*S,x+B*S,y+U*S,c,!0)+2:p+=ke(x,y,x-E*O,y-P*O,x-B*O,y-U*O,c,!1)+2:(Y?(c.push(Z,nt),c.push(Z,nt)):(c.push(ut,ft),c.push(ut,ft)),p+=2)),c.push(x-B*O,y-U*O),c.push(x+B*S,y+U*S),p+=2)}T=n[(d-2)*2],I=n[(d-2)*2+1],x=n[(d-1)*2],y=n[(d-1)*2+1],E=-(I-y),P=T-x,j=Math.sqrt(E*E+P*P),E/=j,P/=j,E*=_,P*=_,c.push(x-E*O,y-P*O),c.push(x+E*S,y+P*S),u||(o.cap===ae.ROUND?p+=ke(x-E*(O-S)*.5,y-P*(O-S)*.5,x-E*O,y-P*O,x+E*S,y+P*S,c,!1)+2:o.cap===ae.SQUARE&&(p+=Eu(x,y,E,P,O,S,!1,c)));for(var Mt=e.indices,Ae=cr.epsilon*cr.epsilon,z=v;z<p+v-2;++z)T=c[z*2],I=c[z*2+1],x=c[(z+1)*2],y=c[(z+1)*2+1],A=c[(z+2)*2],F=c[(z+2)*2+1],!(Math.abs(T*(y-F)+x*(F-I)+A*(I-y))<Ae)&&Mt.push(z,z+1,z+2)}}function d_(r,e){var t=0,n=r.shape,i=r.points||n.points,o=n.type!==ct.POLY||n.closeStroke;if(i.length!==0){var a=e.points,s=e.indices,u=i.length/2,l=a.length/2,h=l;for(a.push(i[0],i[1]),t=1;t<u;t++)a.push(i[t*2],i[t*2+1]),s.push(h,h+1),h++;o&&s.push(h,l)}}function wu(r,e){r.lineStyle.native?d_(r,e):c_(r,e)}var Iu=function(){function r(){}return r.curveTo=function(e,t,n,i,o,a){var s=a[a.length-2],u=a[a.length-1],l=u-t,h=s-e,f=i-t,c=n-e,d=Math.abs(l*c-h*f);if(d<1e-8||o===0)return(a[a.length-2]!==e||a[a.length-1]!==t)&&a.push(e,t),null;var p=l*l+h*h,v=f*f+c*c,_=l*f+h*c,m=o*Math.sqrt(p)/d,g=o*Math.sqrt(v)/d,T=m*_/p,I=g*_/v,x=m*c+g*h,y=m*f+g*l,A=h*(g+T),F=l*(g+T),E=c*(m+I),P=f*(m+I),B=Math.atan2(F-y,A-x),U=Math.atan2(P-y,E-x);return{cx:x+e,cy:y+t,radius:o,startAngle:B,endAngle:U,anticlockwise:h*f>c*l}},r.arc=function(e,t,n,i,o,a,s,u,l){for(var h=s-a,f=cr._segmentsCount(Math.abs(h)*o,Math.ceil(Math.abs(h)/Br)*40),c=h/(f*2),d=c*2,p=Math.cos(c),v=Math.sin(c),_=f-1,m=_%1/_,g=0;g<=_;++g){var T=g+m*g,I=c+a+d*T,x=Math.cos(I),y=-Math.sin(I);l.push((p*x+v*y)*o+n,(p*-y+v*x)*o+i)}},r}(),p_=function(){function r(){}return r.curveLength=function(e,t,n,i,o,a,s,u){for(var l=10,h=0,f=0,c=0,d=0,p=0,v=0,_=0,m=0,g=0,T=0,I=0,x=e,y=t,A=1;A<=l;++A)f=A/l,c=f*f,d=c*f,p=1-f,v=p*p,_=v*p,m=_*e+3*v*f*n+3*p*c*o+d*s,g=_*t+3*v*f*i+3*p*c*a+d*u,T=x-m,I=y-g,x=m,y=g,h+=Math.sqrt(T*T+I*I);return h},r.curveTo=function(e,t,n,i,o,a,s){var u=s[s.length-2],l=s[s.length-1];s.length-=2;var h=cr._segmentsCount(r.curveLength(u,l,e,t,n,i,o,a)),f=0,c=0,d=0,p=0,v=0;s.push(u,l);for(var _=1,m=0;_<=h;++_)m=_/h,f=1-m,c=f*f,d=c*f,p=m*m,v=p*m,s.push(d*u+3*c*m*e+3*f*p*n+v*o,d*l+3*c*m*t+3*f*p*i+v*a)},r}(),v_=function(){function r(){}return r.curveLength=function(e,t,n,i,o,a){var s=e-2*n+o,u=t-2*i+a,l=2*n-2*e,h=2*i-2*t,f=4*(s*s+u*u),c=4*(s*l+u*h),d=l*l+h*h,p=2*Math.sqrt(f+c+d),v=Math.sqrt(f),_=2*f*v,m=2*Math.sqrt(d),g=c/v;return(_*p+v*c*(p-m)+(4*d*f-c*c)*Math.log((2*v+g+p)/(g+m)))/(4*_)},r.curveTo=function(e,t,n,i,o){for(var a=o[o.length-2],s=o[o.length-1],u=cr._segmentsCount(r.curveLength(a,s,e,t,n,i)),l=0,h=0,f=1;f<=u;++f){var c=f/u;l=a+(e-a)*c,h=s+(t-s)*c,o.push(l+(e+(n-e)*c-l)*c,h+(t+(i-t)*c-h)*c)}},r}(),__=function(){function r(){this.reset()}return r.prototype.begin=function(e,t,n){this.reset(),this.style=e,this.start=t,this.attribStart=n},r.prototype.end=function(e,t){this.attribSize=t-this.attribStart,this.size=e-this.start},r.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},r}(),Ie,Oi=(Ie={},Ie[ct.POLY]=Tu,Ie[ct.CIRC]=Cu,Ie[ct.ELIP]=Cu,Ie[ct.RECT]=h_,Ie[ct.RREC]=f_,Ie),Pu=[],on=[];function m_(r){for(var e=r.points,t=0,n=0;n<e.length-2;n+=2)t+=(e[n+2]-e[n])*(e[n+3]+e[n+1]);return t>0}var Ru=function(){function r(e,t,n,i){t===void 0&&(t=null),n===void 0&&(n=null),i===void 0&&(i=null),this.points=[],this.holes=[],this.shape=e,this.lineStyle=n,this.fillStyle=t,this.matrix=i,this.type=e.type}return r.prototype.clone=function(){return new r(this.shape,this.fillStyle,this.lineStyle,this.matrix)},r.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},r}(),He=new q,g_=new nr,y_=function(r){Si(e,r);function e(){var t=r.call(this)||this;return t.closePointEps=1e-4,t.boundsPadding=0,t.uvsFloat32=null,t.indicesUint16=null,t.batchable=!1,t.points=[],t.colors=[],t.uvs=[],t.indices=[],t.textureIds=[],t.graphicsData=[],t.drawCalls=[],t.batchDirty=-1,t.batches=[],t.dirty=0,t.cacheDirty=-1,t.clearDirty=0,t.shapeIndex=0,t._bounds=new nr,t.boundsDirty=-1,t}return Object.defineProperty(e.prototype,"bounds",{get:function(){return this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),e.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),on.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var n=this.batches[t];n.reset(),Pu.push(n)}this.batches.length=0},e.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},e.prototype.drawShape=function(t,n,i,o){n===void 0&&(n=null),i===void 0&&(i=null),o===void 0&&(o=null);var a=new Ru(t,n,i,o);return this.graphicsData.push(a),this.dirty++,this},e.prototype.drawHole=function(t,n){if(n===void 0&&(n=null),!this.graphicsData.length)return null;var i=new Ru(t,null,null,n),o=this.graphicsData[this.graphicsData.length-1];return i.lineStyle=o.lineStyle,o.holes.push(i),this.dirty++,this},e.prototype.destroy=function(){r.prototype.destroy.call(this);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},e.prototype.containsPoint=function(t){for(var n=this.graphicsData,i=0;i<n.length;++i){var o=n[i];if(!!o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(t,He):He.copyFrom(t),o.shape.contains(He.x,He.y))){var a=!1;if(o.holes)for(var s=0;s<o.holes.length;s++){var u=o.holes[s];if(u.shape.contains(He.x,He.y)){a=!0;break}}if(!a)return!0}}return!1},e.prototype.updateBatches=function(t){if(!this.graphicsData.length){this.batchable=!0;return}if(!!this.validateBatching()){this.cacheDirty=this.dirty;var n=this.uvs,i=this.graphicsData,o=null,a=null;this.batches.length>0&&(o=this.batches[this.batches.length-1],a=o.style);for(var s=this.shapeIndex;s<i.length;s++){this.shapeIndex++;var u=i[s],l=u.fillStyle,h=u.lineStyle,f=Oi[u.type];f.build(u),u.matrix&&this.transformPoints(u.points,u.matrix);for(var c=0;c<2;c++){var d=c===0?l:h;if(!!d.visible){var p=d.texture.baseTexture,v=this.indices.length,_=this.points.length/2;p.wrapMode=Kt.REPEAT,c===0?this.processFill(u):this.processLine(u);var m=this.points.length/2-_;m!==0&&(o&&!this._compareStyles(a,d)&&(o.end(v,_),o=null),o||(o=Pu.pop()||new __,o.begin(d,v,_),this.batches.push(o),a=d),this.addUvs(this.points,n,d.texture,_,m,d.matrix))}}}var g=this.indices.length,T=this.points.length/2;if(o&&o.end(g,T),this.batches.length===0){this.batchable=!0;return}if(this.indicesUint16&&this.indices.length===this.indicesUint16.length)this.indicesUint16.set(this.indices);else{var I=T>65535&&t;this.indicesUint16=I?new Uint32Array(this.indices):new Uint16Array(this.indices)}this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},e.prototype._compareStyles=function(t,n){return!(!t||!n||t.texture.baseTexture!==n.texture.baseTexture||t.color+t.alpha!==n.color+n.alpha||!!t.native!=!!n.native)},e.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,n=this.graphicsData.length;t<n;t++){var i=this.graphicsData[t],o=i.fillStyle,a=i.lineStyle;if(o&&!o.texture.baseTexture.valid||a&&!a.texture.baseTexture.valid)return!1}return!0},e.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,n=0,i=t.length;n<i;n++)for(var o=t[n],a=0;a<o.size;a++){var s=o.start+a;this.indicesUint16[s]=this.indicesUint16[s]-o.attribStart}},e.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var t=this.batches,n=0;n<t.length;n++)if(t[n].style.native)return!1;return this.points.length<e.BATCHABLE_SIZE*2},e.prototype.buildDrawCalls=function(){for(var t=++K._globalBatch,n=0;n<this.drawCalls.length;n++)this.drawCalls[n].texArray.clear(),on.push(this.drawCalls[n]);this.drawCalls.length=0;var i=this.colors,o=this.textureIds,a=on.pop();a||(a=new _i,a.texArray=new mi),a.texArray.count=0,a.start=0,a.size=0,a.type=Ot.TRIANGLES;var s=0,u=null,l=0,h=!1,f=Ot.TRIANGLES,c=0;this.drawCalls.push(a);for(var n=0;n<this.batches.length;n++){var d=this.batches[n],p=8,v=d.style,_=v.texture.baseTexture;h!==!!v.native&&(h=!!v.native,f=h?Ot.LINES:Ot.TRIANGLES,u=null,s=p,t++),u!==_&&(u=_,_._batchEnabled!==t&&(s===p&&(t++,s=0,a.size>0&&(a=on.pop(),a||(a=new _i,a.texArray=new mi),this.drawCalls.push(a)),a.start=c,a.size=0,a.texArray.count=0,a.type=f),_.touched=1,_._batchEnabled=t,_._batchLocation=s,_.wrapMode=Kt.REPEAT,a.texArray.elements[a.texArray.count++]=_,s++)),a.size+=d.size,c+=d.size,l=_._batchLocation,this.addColors(i,v.color,v.alpha,d.attribSize,d.attribStart),this.addTextureIds(o,l,d.attribSize,d.attribStart)}K._globalBatch=t,this.packAttributes()},e.prototype.packAttributes=function(){for(var t=this.points,n=this.uvs,i=this.colors,o=this.textureIds,a=new ArrayBuffer(t.length*3*4),s=new Float32Array(a),u=new Uint32Array(a),l=0,h=0;h<t.length/2;h++)s[l++]=t[h*2],s[l++]=t[h*2+1],s[l++]=n[h*2],s[l++]=n[h*2+1],u[l++]=i[h],s[l++]=o[h];this._buffer.update(a),this._indexBuffer.update(this.indicesUint16)},e.prototype.processFill=function(t){if(t.holes.length)this.processHoles(t.holes),Tu.triangulate(t,this);else{var n=Oi[t.type];n.triangulate(t,this)}},e.prototype.processLine=function(t){wu(t,this);for(var n=0;n<t.holes.length;n++)wu(t.holes[n],this)},e.prototype.processHoles=function(t){for(var n=0;n<t.length;n++){var i=t[n],o=Oi[i.type];o.build(i),i.matrix&&this.transformPoints(i.points,i.matrix)}},e.prototype.calculateBounds=function(){var t=this._bounds,n=g_,i=dt.IDENTITY;this._bounds.clear(),n.clear();for(var o=0;o<this.graphicsData.length;o++){var a=this.graphicsData[o],s=a.shape,u=a.type,l=a.lineStyle,h=a.matrix||dt.IDENTITY,f=0;if(l&&l.visible){var c=l.alignment;f=l.width,u===ct.POLY?m_(s)?f=f*(1-c):f=f*c:f=f*Math.max(0,c)}if(i!==h&&(n.isEmpty()||(t.addBoundsMatrix(n,i),n.clear()),i=h),u===ct.RECT||u===ct.RREC){var d=s;n.addFramePad(d.x,d.y,d.x+d.width,d.y+d.height,f,f)}else if(u===ct.CIRC){var p=s;n.addFramePad(p.x,p.y,p.x,p.y,p.radius+f,p.radius+f)}else if(u===ct.ELIP){var v=s;n.addFramePad(v.x,v.y,v.x,v.y,v.width+f,v.height+f)}else{var _=s;t.addVerticesMatrix(i,_.points,0,_.points.length,f,f)}}n.isEmpty()||t.addBoundsMatrix(n,i),t.pad(this.boundsPadding,this.boundsPadding)},e.prototype.transformPoints=function(t,n){for(var i=0;i<t.length/2;i++){var o=t[i*2],a=t[i*2+1];t[i*2]=n.a*o+n.c*a+n.tx,t[i*2+1]=n.b*o+n.d*a+n.ty}},e.prototype.addColors=function(t,n,i,o,a){a===void 0&&(a=0);var s=(n>>16)+(n&65280)+((n&255)<<16),u=jn(s,i);t.length=Math.max(t.length,a+o);for(var l=0;l<o;l++)t[a+l]=u},e.prototype.addTextureIds=function(t,n,i,o){o===void 0&&(o=0),t.length=Math.max(t.length,o+i);for(var a=0;a<i;a++)t[o+a]=n},e.prototype.addUvs=function(t,n,i,o,a,s){s===void 0&&(s=null);for(var u=0,l=n.length,h=i.frame;u<a;){var f=t[(o+u)*2],c=t[(o+u)*2+1];if(s){var d=s.a*f+s.c*c+s.tx;c=s.b*f+s.d*c+s.ty,f=d}u++,n.push(f/h.width,c/h.height)}var p=i.baseTexture;(h.width<p.width||h.height<p.height)&&this.adjustUvs(n,i,l,a)},e.prototype.adjustUvs=function(t,n,i,o){for(var a=n.baseTexture,s=1e-6,u=i+o*2,l=n.frame,h=l.width/a.width,f=l.height/a.height,c=l.x/l.width,d=l.y/l.height,p=Math.floor(t[i]+s),v=Math.floor(t[i+1]+s),_=i+2;_<u;_+=2)p=Math.min(p,Math.floor(t[_]+s)),v=Math.min(v,Math.floor(t[_+1]+s));c-=p,d-=v;for(var _=i;_<u;_+=2)t[_]=(t[_]+c)*h,t[_+1]=(t[_+1]+d)*f},e.BATCHABLE_SIZE=100,e}(nu),x_=function(r){Si(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.width=0,t.alignment=.5,t.native=!1,t.cap=ae.BUTT,t.join=oe.MITER,t.miterLimit=10,t}return e.prototype.clone=function(){var t=new e;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},e.prototype.reset=function(){r.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},e}(bu),b_=new Float32Array(3),Ni={},Au=function(r){Si(e,r);function e(t){t===void 0&&(t=null);var n=r.call(this)||this;return n.shader=null,n.pluginName="batch",n.currentPath=null,n.batches=[],n.batchTint=-1,n.batchDirty=-1,n.vertexData=null,n._fillStyle=new bu,n._lineStyle=new x_,n._matrix=null,n._holeMode=!1,n.state=Te.for2d(),n._geometry=t||new y_,n._geometry.refCount++,n._transformID=-1,n.tint=16777215,n.blendMode=L.NORMAL,n}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return this.finishPoly(),new e(this._geometry)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),e.prototype.lineStyle=function(t,n,i,o,a){return t===void 0&&(t=null),n===void 0&&(n=0),i===void 0&&(i=1),o===void 0&&(o=.5),a===void 0&&(a=!1),typeof t=="number"&&(t={width:t,color:n,alpha:i,alignment:o,native:a}),this.lineTextureStyle(t)},e.prototype.lineTextureStyle=function(t){t=Object.assign({width:0,texture:G.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:ae.BUTT,join:oe.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var n=t.width>0&&t.alpha>0;return n?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:n},t)):this._lineStyle.reset(),this},e.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,n=this.currentPath.points.length;n>2&&(this.drawShape(this.currentPath),this.currentPath=new Mr,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[n-2],t[n-1]))}else this.currentPath=new Mr,this.currentPath.closeStroke=!1},e.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},e.prototype.moveTo=function(t,n){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=n,this},e.prototype.lineTo=function(t,n){this.currentPath||this.moveTo(0,0);var i=this.currentPath.points,o=i[i.length-2],a=i[i.length-1];return(o!==t||a!==n)&&i.push(t,n),this},e.prototype._initCurve=function(t,n){t===void 0&&(t=0),n===void 0&&(n=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,n]):this.moveTo(t,n)},e.prototype.quadraticCurveTo=function(t,n,i,o){this._initCurve();var a=this.currentPath.points;return a.length===0&&this.moveTo(0,0),v_.curveTo(t,n,i,o,a),this},e.prototype.bezierCurveTo=function(t,n,i,o,a,s){return this._initCurve(),p_.curveTo(t,n,i,o,a,s,this.currentPath.points),this},e.prototype.arcTo=function(t,n,i,o,a){this._initCurve(t,n);var s=this.currentPath.points,u=Iu.curveTo(t,n,i,o,a,s);if(u){var l=u.cx,h=u.cy,f=u.radius,c=u.startAngle,d=u.endAngle,p=u.anticlockwise;this.arc(l,h,f,c,d,p)}return this},e.prototype.arc=function(t,n,i,o,a,s){if(s===void 0&&(s=!1),o===a)return this;!s&&a<=o?a+=Br:s&&o<=a&&(o+=Br);var u=a-o;if(u===0)return this;var l=t+Math.cos(o)*i,h=n+Math.sin(o)*i,f=this._geometry.closePointEps,c=this.currentPath?this.currentPath.points:null;if(c){var d=Math.abs(c[c.length-2]-l),p=Math.abs(c[c.length-1]-h);d<f&&p<f||c.push(l,h)}else this.moveTo(l,h),c=this.currentPath.points;return Iu.arc(l,h,t,n,i,o,a,s,c),this},e.prototype.beginFill=function(t,n){return t===void 0&&(t=0),n===void 0&&(n=1),this.beginTextureFill({texture:G.WHITE,color:t,alpha:n})},e.prototype.beginTextureFill=function(t){t=Object.assign({texture:G.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var n=t.alpha>0;return n?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:n},t)):this._fillStyle.reset(),this},e.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},e.prototype.drawRect=function(t,n,i,o){return this.drawShape(new $(t,n,i,o))},e.prototype.drawRoundedRect=function(t,n,i,o,a){return this.drawShape(new jd(t,n,i,o,a))},e.prototype.drawCircle=function(t,n,i){return this.drawShape(new Hd(t,n,i))},e.prototype.drawEllipse=function(t,n,i,o){return this.drawShape(new Xd(t,n,i,o))},e.prototype.drawPolygon=function(){for(var t=arguments,n=[],i=0;i<arguments.length;i++)n[i]=t[i];var o,a=!0,s=n[0];s.points?(a=s.closeStroke,o=s.points):Array.isArray(n[0])?o=n[0]:o=n;var u=new Mr(o);return u.closeStroke=a,this.drawShape(u),this},e.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},e.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},e.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===ct.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},e.prototype._render=function(t){this.finishPoly();var n=this._geometry,i=t.context.supports.uint32Indices;n.updateBatches(i),n.batchable?(this.batchDirty!==n.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))},e.prototype._populateBatches=function(){var t=this._geometry,n=this.blendMode,i=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=i,this.vertexData=new Float32Array(t.points);for(var o=0;o<i;o++){var a=t.batches[o],s=a.style.color,u=new Float32Array(this.vertexData.buffer,a.attribStart*4*2,a.attribSize*2),l=new Float32Array(t.uvsFloat32.buffer,a.attribStart*4*2,a.attribSize*2),h=new Uint16Array(t.indicesUint16.buffer,a.start*2,a.size),f={vertexData:u,blendMode:n,indices:h,uvs:l,_batchRGB:Tt(s),_tintRGB:s,_texture:a.style.texture,alpha:a.style.alpha,worldAlpha:1};this.batches[o]=f}},e.prototype._renderBatched=function(t){if(!!this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var n=0,i=this.batches.length;n<i;n++){var o=this.batches[n];o.worldAlpha=this.worldAlpha*o.alpha,t.plugins[this.pluginName].render(o)}}},e.prototype._renderDirect=function(t){var n=this._resolveDirectShader(t),i=this._geometry,o=this.tint,a=this.worldAlpha,s=n.uniforms,u=i.drawCalls;s.translationMatrix=this.transform.worldTransform,s.tint[0]=(o>>16&255)/255*a,s.tint[1]=(o>>8&255)/255*a,s.tint[2]=(o&255)/255*a,s.tint[3]=a,t.shader.bind(n),t.geometry.bind(i,n),t.state.set(this.state);for(var l=0,h=u.length;l<h;l++)this._renderDrawCallDirect(t,i.drawCalls[l])},e.prototype._renderDrawCallDirect=function(t,n){for(var i=n.texArray,o=n.type,a=n.size,s=n.start,u=i.count,l=0;l<u;l++)t.texture.bind(i.elements[l],l);t.geometry.draw(o,a,s)},e.prototype._resolveDirectShader=function(t){var n=this.shader,i=this.pluginName;if(!n){if(!Ni[i]){for(var o=t.plugins.batch.MAX_TEXTURES,a=new Int32Array(o),s=0;s<o;s++)a[s]=s;var u={tint:new Float32Array([1,1,1,1]),translationMatrix:new dt,default:be.from({uSamplers:a},!0)},l=t.plugins[i]._shader.program;Ni[i]=new ne(l,u)}n=Ni[i]}return n},e.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;if(!!t.graphicsData.length){var n=t.bounds,i=n.minX,o=n.minY,a=n.maxX,s=n.maxY;this._bounds.addFrame(this.transform,i,o,a,s)}},e.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)},e.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=Tt(this.tint,b_),n=0;n<this.batches.length;n++){var i=this.batches[n],o=i._batchRGB,a=t[0]*o[0]*255,s=t[1]*o[1]*255,u=t[2]*o[2]*255,l=(a<<16)+(s<<8)+(u|0);i._tintRGB=(l>>16)+(l&65280)+((l&255)<<16)}}},e.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var n=this.transform.worldTransform,i=n.a,o=n.b,a=n.c,s=n.d,u=n.tx,l=n.ty,h=this._geometry.points,f=this.vertexData,c=0,d=0;d<h.length;d+=2){var p=h[d],v=h[d+1];f[c++]=i*p+a*v+u,f[c++]=s*v+o*p+l}}},e.prototype.closePath=function(){var t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this},e.prototype.setMatrix=function(t){return this._matrix=t,this},e.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},e.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},e.prototype.destroy=function(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,r.prototype.destroy.call(this,t)},e._TEMP_POINT=new q,e}(Vt);/*!
 * @pixi/sprite - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Fi=function(r,e){return Fi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Fi(r,e)};function T_(r,e){Fi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var dr=new q,C_=new Uint16Array([0,1,2,0,2,3]),Pe=function(r){T_(e,r);function e(t){var n=r.call(this)||this;return n._anchor=new ve(n._onAnchorUpdate,n,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=L.NORMAL,n._cachedTint=16777215,n.uvs=null,n.texture=t||G.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transformTrimmedID=-1,n._textureTrimmedID=-1,n.indices=C_,n.pluginName="batch",n.isSprite=!0,n._roundPixels=N.ROUND_PIXELS,n}return e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=Le(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=Le(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){var t=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===t._updateID)){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var n=this.transform.worldTransform,i=n.a,o=n.b,a=n.c,s=n.d,u=n.tx,l=n.ty,h=this.vertexData,f=t.trim,c=t.orig,d=this._anchor,p=0,v=0,_=0,m=0;if(f?(v=f.x-d._x*c.width,p=v+f.width,m=f.y-d._y*c.height,_=m+f.height):(v=-d._x*c.width,p=v+c.width,m=-d._y*c.height,_=m+c.height),h[0]=i*v+a*m+u,h[1]=s*m+o*v+l,h[2]=i*p+a*m+u,h[3]=s*m+o*p+l,h[4]=i*p+a*_+u,h[5]=s*_+o*p+l,h[6]=i*v+a*_+u,h[7]=s*_+o*v+l,this._roundPixels)for(var g=N.RESOLUTION,T=0;T<h.length;++T)h[T]=Math.round((h[T]*g|0)/g)}},e.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,n=this.vertexTrimmedData,i=t.orig,o=this._anchor,a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,h=a.d,f=a.tx,c=a.ty,d=-o._x*i.width,p=d+i.width,v=-o._y*i.height,_=v+i.height;n[0]=s*d+l*v+f,n[1]=h*v+u*d+c,n[2]=s*p+l*v+f,n[3]=h*v+u*p+c,n[4]=s*p+l*_+f,n[5]=h*_+u*p+c,n[6]=s*d+l*_+f,n[7]=h*_+u*d+c},e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,n=this._texture.orig;!t||t.width===n.width&&t.height===n.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._localBounds||(this._localBounds=new nr),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new $),t=this._localBoundsRect),this._localBounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,dr);var n=this._texture.orig.width,i=this._texture.orig.height,o=-n*this.anchor.x,a=0;return!!(dr.x>=o&&dr.x<o+n&&(a=-i*this.anchor.y,dr.y>=a&&dr.y<a+i))},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var n=typeof t=="boolean"?t:t&&t.texture;if(n){var i=typeof t=="boolean"?t:t&&t.baseTexture;this._texture.destroy(!!i)}this._texture=null},e.from=function(t,n){var i=t instanceof G?t:G.from(t,n);return new e(i)},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var n=Le(this.scale.x)||1;this.scale.x=n*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var n=Le(this.scale.y)||1;this.scale.y=n*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||G.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}(Vt);/*!
 * @pixi/text - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ui=function(r,e){return Ui=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ui(r,e)};function E_(r,e){Ui(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var pr;(function(r){r[r.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",r[r.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(pr||(pr={}));var Li={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:pr.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},w_=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],Xe=function(){function r(e){this.styleID=0,this.reset(),Bi(this,e,e)}return r.prototype.clone=function(){var e={};return Bi(e,this,Li),new r(e)},r.prototype.reset=function(){Bi(this,Li,Li)},Object.defineProperty(r.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"breakWords",{get:function(){return this._breakWords},set:function(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(e){var t=Gi(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fill",{get:function(){return this._fill},set:function(e){var t=Gi(e);this._fill!==t&&(this._fill=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(e){I_(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontSize",{get:function(){return this._fontSize},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leading",{get:function(){return this._leading},set:function(e){this._leading!==e&&(this._leading=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"padding",{get:function(){return this._padding},set:function(e){this._padding!==e&&(this._padding=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"stroke",{get:function(){return this._stroke},set:function(e){var t=Gi(e);this._stroke!==t&&(this._stroke=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"trim",{get:function(){return this._trim},set:function(e){this._trim!==e&&(this._trim=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)},enumerable:!1,configurable:!0}),r.prototype.toFontString=function(){var e=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(var n=t.length-1;n>=0;n--){var i=t[n].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&w_.indexOf(i)<0&&(i='"'+i+'"'),t[n]=i}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+e+" "+t.join(",")},r}();function Su(r){return typeof r=="number"?La(r):(typeof r=="string"&&r.indexOf("0x")===0&&(r=r.replace("0x","#")),r)}function Gi(r){if(Array.isArray(r)){for(var e=0;e<r.length;++e)r[e]=Su(r[e]);return r}else return Su(r)}function I_(r,e){if(!Array.isArray(r)||!Array.isArray(e)||r.length!==e.length)return!1;for(var t=0;t<r.length;++t)if(r[t]!==e[t])return!1;return!0}function Bi(r,e,t){for(var n in t)Array.isArray(e[n])?r[n]=e[n].slice():r[n]=e[n]}var At=function(){function r(e,t,n,i,o,a,s,u,l){this.text=e,this.style=t,this.width=n,this.height=i,this.lines=o,this.lineWidths=a,this.lineHeight=s,this.maxLineWidth=u,this.fontProperties=l}return r.measureText=function(e,t,n,i){i===void 0&&(i=r._canvas),n=n==null?t.wordWrap:n;var o=t.toFontString(),a=r.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);var s=i.getContext("2d");s.font=o;for(var u=n?r.wordWrap(e,t,i):e,l=u.split(/(?:\r\n|\r|\n)/),h=new Array(l.length),f=0,c=0;c<l.length;c++){var d=s.measureText(l[c]).width+(l[c].length-1)*t.letterSpacing;h[c]=d,f=Math.max(f,d)}var p=f+t.strokeThickness;t.dropShadow&&(p+=t.dropShadowDistance);var v=t.lineHeight||a.fontSize+t.strokeThickness,_=Math.max(v,a.fontSize+t.strokeThickness)+(l.length-1)*(v+t.leading);return t.dropShadow&&(_+=t.dropShadowDistance),new r(e,t,p,_,l,h,v+t.leading,f,a)},r.wordWrap=function(e,t,n){n===void 0&&(n=r._canvas);for(var i=n.getContext("2d"),o=0,a="",s="",u=Object.create(null),l=t.letterSpacing,h=t.whiteSpace,f=r.collapseSpaces(h),c=r.collapseNewlines(h),d=!f,p=t.wordWrapWidth+l,v=r.tokenize(e),_=0;_<v.length;_++){var m=v[_];if(r.isNewline(m)){if(!c){s+=r.addLine(a),d=!f,a="",o=0;continue}m=" "}if(f){var g=r.isBreakingSpace(m),T=r.isBreakingSpace(a[a.length-1]);if(g&&T)continue}var I=r.getFromCache(m,l,u,i);if(I>p)if(a!==""&&(s+=r.addLine(a),a="",o=0),r.canBreakWords(m,t.breakWords))for(var x=r.wordWrapSplit(m),y=0;y<x.length;y++){for(var A=x[y],F=1;x[y+F];){var E=x[y+F],P=A[A.length-1];if(!r.canBreakChars(P,E,m,y,t.breakWords))A+=E;else break;F++}y+=A.length-1;var B=r.getFromCache(A,l,u,i);B+o>p&&(s+=r.addLine(a),d=!1,a="",o=0),a+=A,o+=B}else{a.length>0&&(s+=r.addLine(a),a="",o=0);var U=_===v.length-1;s+=r.addLine(m,!U),d=!1,a="",o=0}else I+o>p&&(d=!1,s+=r.addLine(a),a="",o=0),(a.length>0||!r.isBreakingSpace(m)||d)&&(a+=m,o+=I)}return s+=r.addLine(a,!1),s},r.addLine=function(e,t){return t===void 0&&(t=!0),e=r.trimRight(e),e=t?e+`
`:e,e},r.getFromCache=function(e,t,n,i){var o=n[e];if(typeof o!="number"){var a=e.length*t;o=i.measureText(e).width+a,n[e]=o}return o},r.collapseSpaces=function(e){return e==="normal"||e==="pre-line"},r.collapseNewlines=function(e){return e==="normal"},r.trimRight=function(e){if(typeof e!="string")return"";for(var t=e.length-1;t>=0;t--){var n=e[t];if(!r.isBreakingSpace(n))break;e=e.slice(0,-1)}return e},r.isNewline=function(e){return typeof e!="string"?!1:r._newlines.indexOf(e.charCodeAt(0))>=0},r.isBreakingSpace=function(e,t){return typeof e!="string"?!1:r._breakingSpaces.indexOf(e.charCodeAt(0))>=0},r.tokenize=function(e){var t=[],n="";if(typeof e!="string")return t;for(var i=0;i<e.length;i++){var o=e[i],a=e[i+1];if(r.isBreakingSpace(o,a)||r.isNewline(o)){n!==""&&(t.push(n),n=""),t.push(o);continue}n+=o}return n!==""&&t.push(n),t},r.canBreakWords=function(e,t){return t},r.canBreakChars=function(e,t,n,i,o){return!0},r.wordWrapSplit=function(e){return e.split("")},r.measureFont=function(e){if(r._fonts[e])return r._fonts[e];var t={ascent:0,descent:0,fontSize:0},n=r._canvas,i=r._context;i.font=e;var o=r.METRICS_STRING+r.BASELINE_SYMBOL,a=Math.ceil(i.measureText(o).width),s=Math.ceil(i.measureText(r.BASELINE_SYMBOL).width),u=Math.ceil(r.HEIGHT_MULTIPLIER*s);s=s*r.BASELINE_MULTIPLIER|0,n.width=a,n.height=u,i.fillStyle="#f00",i.fillRect(0,0,a,u),i.font=e,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText(o,0,s);var l=i.getImageData(0,0,a,u).data,h=l.length,f=a*4,c=0,d=0,p=!1;for(c=0;c<s;++c){for(var v=0;v<f;v+=4)if(l[d+v]!==255){p=!0;break}if(!p)d+=f;else break}for(t.ascent=s-c,d=h-f,p=!1,c=u;c>s;--c){for(var v=0;v<f;v+=4)if(l[d+v]!==255){p=!0;break}if(!p)d-=f;else break}return t.descent=c-s,t.fontSize=t.ascent+t.descent,r._fonts[e]=t,t},r.clearMetrics=function(e){e===void 0&&(e=""),e?delete r._fonts[e]:r._fonts={}},r}(),an=function(){try{var r=new OffscreenCanvas(0,0),e=r.getContext("2d");return e&&e.measureText?r:document.createElement("canvas")}catch{return document.createElement("canvas")}}();an.width=an.height=10;At._canvas=an;At._context=an.getContext("2d");At._fonts={};At.METRICS_STRING="|\xC9q\xC5";At.BASELINE_SYMBOL="M";At.BASELINE_MULTIPLIER=1.4;At.HEIGHT_MULTIPLIER=2;At._newlines=[10,13];At._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var P_={texture:!0,children:!1,baseTexture:!0},Ou=function(r){E_(e,r);function e(t,n,i){var o=this,a=!1;i||(i=document.createElement("canvas"),a=!0),i.width=3,i.height=3;var s=G.from(i);return s.orig=new $,s.trim=new $,o=r.call(this,s)||this,o._ownCanvas=a,o.canvas=i,o.context=o.canvas.getContext("2d"),o._resolution=N.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=t,o.style=n,o.localStyleID=-1,o}return e.prototype.updateText=function(t){var n=this._style;if(this.localStyleID!==n.styleID&&(this.dirty=!0,this.localStyleID=n.styleID),!(!this.dirty&&t)){this._font=this._style.toFontString();var i=this.context,o=At.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=o.width,s=o.height,u=o.lines,l=o.lineHeight,h=o.lineWidths,f=o.maxLineWidth,c=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+n.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,s)+n.padding*2)*this._resolution),i.scale(this._resolution,this._resolution),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.font=this._font,i.lineWidth=n.strokeThickness,i.textBaseline=n.textBaseline,i.lineJoin=n.lineJoin,i.miterLimit=n.miterLimit;for(var d,p,v=n.dropShadow?2:1,_=0;_<v;++_){var m=n.dropShadow&&_===0,g=m?Math.ceil(Math.max(1,s)+n.padding*2):0,T=g*this._resolution;if(m){i.fillStyle="black",i.strokeStyle="black";var I=n.dropShadowColor,x=Tt(typeof I=="number"?I:Ga(I)),y=n.dropShadowBlur*this._resolution,A=n.dropShadowDistance*this._resolution;i.shadowColor="rgba("+x[0]*255+","+x[1]*255+","+x[2]*255+","+n.dropShadowAlpha+")",i.shadowBlur=y,i.shadowOffsetX=Math.cos(n.dropShadowAngle)*A,i.shadowOffsetY=Math.sin(n.dropShadowAngle)*A+T}else i.fillStyle=this._generateFillStyle(n,u,o),i.strokeStyle=n.stroke,i.shadowColor="black",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0;var F=(l-c.fontSize)/2;(!e.nextLineHeightBehavior||l-c.fontSize<0)&&(F=0);for(var E=0;E<u.length;E++)d=n.strokeThickness/2,p=n.strokeThickness/2+E*l+c.ascent+F,n.align==="right"?d+=f-h[E]:n.align==="center"&&(d+=(f-h[E])/2),n.stroke&&n.strokeThickness&&this.drawLetterSpacing(u[E],d+n.padding,p+n.padding-g,!0),n.fill&&this.drawLetterSpacing(u[E],d+n.padding,p+n.padding-g)}this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,n,i,o){o===void 0&&(o=!1);var a=this._style,s=a.letterSpacing,u="letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype;if(s===0||u){u&&(this.context.letterSpacing=s,this.context.textLetterSpacing=s),o?this.context.strokeText(t,n,i):this.context.fillText(t,n,i);return}for(var l=n,h=Array.from?Array.from(t):t.split(""),f=this.context.measureText(t).width,c=0,d=0;d<h.length;++d){var p=h[d];o?this.context.strokeText(p,l,i):this.context.fillText(p,l,i);for(var v="",_=d+1;_<h.length;++_)v+=h[_];c=this.context.measureText(v).width,l+=f-c+s,f=c}},e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var n=Md(t);n.data&&(t.width=n.width,t.height=n.height,this.context.putImageData(n.data,0,0))}var i=this._texture,o=this._style,a=o.trim?0:o.padding,s=i.baseTexture;i.trim.width=i._frame.width=t.width/this._resolution,i.trim.height=i._frame.height=t.height/this._resolution,i.trim.x=-a,i.trim.y=-a,i.orig.width=i._frame.width-a*2,i.orig.height=i._frame.height-a*2,this._onTextureUpdate(),s.setRealSize(t.width,t.height,this._resolution),i.updateUvs(),this._recursivePostUpdateTransform(),this.dirty=!1},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(t){return this.updateText(!0),r.prototype.getLocalBounds.call(this,t)},e.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._generateFillStyle=function(t,n,i){var o=t.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var a,s=t.dropShadow?t.dropShadowDistance:0,u=t.padding||0,l=this.canvas.width/this._resolution-s-u*2,h=this.canvas.height/this._resolution-s-u*2,f=o.slice(),c=t.fillGradientStops.slice();if(!c.length)for(var d=f.length+1,p=1;p<d;++p)c.push(p/d);if(f.unshift(o[0]),c.unshift(0),f.push(o[o.length-1]),c.push(1),t.fillGradientType===pr.LINEAR_VERTICAL){a=this.context.createLinearGradient(l/2,u,l/2,h+u);for(var v=i.fontProperties.fontSize+t.strokeThickness,p=0;p<n.length;p++){var _=i.lineHeight*(p-1)+v,m=i.lineHeight*p,g=m;p>0&&_>m&&(g=(m+_)/2);var T=m+v,I=i.lineHeight*(p+1),x=T;p+1<n.length&&I<T&&(x=(T+I)/2);for(var y=(x-g)/h,A=0;A<f.length;A++){var F=0;typeof c[A]=="number"?F=c[A]:F=A/f.length;var E=Math.min(1,Math.max(0,g/h+F*y));E=Number(E.toFixed(5)),a.addColorStop(E,f[A])}}}else{a=this.context.createLinearGradient(u,h/2,l+u,h/2);for(var P=f.length+1,B=1,p=0;p<f.length;p++){var U=void 0;typeof c[p]=="number"?U=c[p]:U=B/P,a.addColorStop(U,f[p]),B++}}return a},e.prototype.destroy=function(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},P_,t),r.prototype.destroy.call(this,t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var n=Le(this.scale.x)||1;this.scale.x=n*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var n=Le(this.scale.y)||1;this.scale.y=n*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return this._style},set:function(t){t=t||{},t instanceof Xe?this._style=t:this._style=new Xe(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.nextLineHeightBehavior=!1,e}(Pe);/*!
 * @pixi/prepare - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */N.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Mi=function(r,e){return Mi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Mi(r,e)};function R_(r,e){Mi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var A_=function(){function r(e){this.maxItemsPerFrame=e,this.itemsLeft=0}return r.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},r.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},r}();function S_(r,e){var t=!1;if(r&&r._textures&&r._textures.length){for(var n=0;n<r._textures.length;n++)if(r._textures[n]instanceof G){var i=r._textures[n].baseTexture;e.indexOf(i)===-1&&(e.push(i),t=!0)}}return t}function O_(r,e){if(r.baseTexture instanceof K){var t=r.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function N_(r,e){if(r._texture&&r._texture instanceof G){var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function F_(r,e){return e instanceof Ou?(e.updateText(!0),!0):!1}function U_(r,e){if(e instanceof Xe){var t=e.toFontString();return At.measureFont(t),!0}return!1}function L_(r,e){if(r instanceof Ou){e.indexOf(r.style)===-1&&e.push(r.style),e.indexOf(r)===-1&&e.push(r);var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function G_(r,e){return r instanceof Xe?(e.indexOf(r)===-1&&e.push(r),!0):!1}var B_=function(){function r(e){var t=this;this.limiter=new A_(N.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){!t.queue||t.prepareItems()},this.registerFindHook(L_),this.registerFindHook(G_),this.registerFindHook(S_),this.registerFindHook(O_),this.registerFindHook(N_),this.registerUploadHook(F_),this.registerUploadHook(U_)}return r.prototype.upload=function(e,t){typeof e=="function"&&(t=e,e=null),e&&this.add(e),this.queue.length?(t&&this.completes.push(t),this.ticking||(this.ticking=!0,Ct.system.addOnce(this.tick,this,Jt.UTILITY))):t&&t()},r.prototype.tick=function(){setTimeout(this.delayedTick,0)},r.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var e=this.queue[0],t=!1;if(e&&!e._destroyed){for(var n=0,i=this.uploadHooks.length;n<i;n++)if(this.uploadHooks[n](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)Ct.system.addOnce(this.tick,this,Jt.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var n=0,i=o.length;n<i;n++)o[n]()}},r.prototype.registerFindHook=function(e){return e&&this.addHooks.push(e),this},r.prototype.registerUploadHook=function(e){return e&&this.uploadHooks.push(e),this},r.prototype.add=function(e){for(var t=0,n=this.addHooks.length;t<n&&!this.addHooks[t](e,this.queue);t++);if(e instanceof Vt)for(var t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this},r.prototype.destroy=function(){this.ticking&&Ct.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},r}();function Nu(r,e){return e instanceof K?(e._glTextures[r.CONTEXT_UID]||r.texture.bind(e),!0):!1}function M_(r,e){if(!(e instanceof Au))return!1;var t=e.geometry;e.finishPoly(),t.updateBatches();for(var n=t.batches,i=0;i<n.length;i++){var o=n[i].style.texture;o&&Nu(r,o.baseTexture)}return t.batchable||r.geometry.bind(t,e._resolveDirectShader(r)),!0}function D_(r,e){return r instanceof Au?(e.push(r),!0):!1}var k_=function(r){R_(e,r);function e(t){var n=r.call(this,t)||this;return n.uploadHookHelper=n.renderer,n.registerFindHook(D_),n.registerUploadHook(Nu),n.registerUploadHook(M_),n}return e}(B_);/*!
 * @pixi/spritesheet - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var H_=function(){function r(e,t,n){n===void 0&&(n=null),this._texture=e instanceof G?e:null,this.baseTexture=e instanceof K?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;var i=this.baseTexture.resource;this.resolution=this._updateResolution(n||(i?i.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return r.prototype._updateResolution=function(e){e===void 0&&(e=null);var t=this.data.meta.scale,n=Gr(e,null);return n===null&&(n=t!==void 0?parseFloat(t):1),n!==1&&this.baseTexture.setResolution(n),n},r.prototype.parse=function(e){this._batchIndex=0,this._callback=e,this._frameKeys.length<=r.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()},r.prototype._processFrames=function(e){for(var t=e,n=r.BATCH_SIZE;t-e<n&&t<this._frameKeys.length;){var i=this._frameKeys[t],o=this._frames[i],a=o.frame;if(a){var s=null,u=null,l=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,h=new $(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);o.rotated?s=new $(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new $(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(u=new $(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[i]=new G(this.baseTexture,s,h,u,o.rotated?2:0,o.anchor),G.addToCache(this.textures[i],i)}t++}},r.prototype._processAnimations=function(){var e=this.data.animations||{};for(var t in e){this.animations[t]=[];for(var n=0;n<e[t].length;n++){var i=e[t][n];this.animations[t].push(this.textures[i])}}},r.prototype._parseComplete=function(){var e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)},r.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*r.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*r.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())},0)},r.prototype.destroy=function(e){var t;e===void 0&&(e=!1);for(var n in this.textures)this.textures[n].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)===null||t===void 0||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null},r.BATCH_SIZE=1e3,r}(),X_=function(){function r(){}return r.use=function(e,t){var n,i,o=this,a=e.name+"_image";if(!e.data||e.type!==ht.TYPE.JSON||!e.data.frames||o.resources[a]){t();return}var s=(i=(n=e.data)===null||n===void 0?void 0:n.meta)===null||i===void 0?void 0:i.related_multi_packs;if(Array.isArray(s))for(var u=function(p){if(typeof p!="string")return"continue";var v=p.replace(".json",""),_=Fe.resolve(e.url.replace(o.baseUrl,""),p);if(o.resources[v]||Object.values(o.resources).some(function(g){return Fe.format(Fe.parse(g.url))===_}))return"continue";var m={crossOrigin:e.crossOrigin,loadType:ht.LOAD_TYPE.XHR,xhrType:ht.XHR_RESPONSE_TYPE.JSON,parentResource:e,metadata:e.metadata};o.add(v,_,m)},l=0,h=s;l<h.length;l++){var f=h[l];u(f)}var c={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},d=r.getResourcePath(e,o.baseUrl);o.add(a,d,c,function(v){if(v.error){t(v.error);return}var _=new H_(v.texture,e.data,e.url);_.parse(function(){e.spritesheet=_,e.textures=_.textures,t()})})},r.getResourcePath=function(e,t){return e.isDataUrl?e.data.meta.image:Fe.resolve(e.url.replace(t,""),e.data.meta.image)},r}();/*!
 * @pixi/sprite-tiling - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Di=function(r,e){return Di=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Di(r,e)};function Fu(r,e){Di(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var vr=new q;(function(r){Fu(e,r);function e(t,n,i){n===void 0&&(n=100),i===void 0&&(i=100);var o=r.call(this,t)||this;return o.tileTransform=new Wa,o._width=n,o._height=i,o.uvMatrix=o.texture.uvMatrix||new di(t),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var n=this._texture;!n||!n.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,n=this._height*-this._anchor._y,i=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,n,i,o)},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new $),t=this._localBoundsRect),this._bounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,vr);var n=this._width,i=this._height,o=-n*this.anchor._x;if(vr.x>=o&&vr.x<o+n){var a=-i*this.anchor._y;if(vr.y>=a&&vr.y<a+i)return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.tileTransform=null,this.uvMatrix=null},e.from=function(t,n){var i=t instanceof G?t:G.from(t,n);return new e(i,n.width,n.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),e})(Pe);var j_=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,Uu=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,z_=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,V_=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,$_=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,sn=new dt,W_=function(r){Fu(e,r);function e(t){var n=r.call(this,t)||this;return t.runners.contextChange.add(n),n.quad=new Ps,n.state=Te.for2d(),n}return e.prototype.contextChange=function(){var t=this.renderer,n={globals:t.globalUniforms};this.simpleShader=ne.from(Uu,j_,n),this.shader=t.context.webGLVersion>1?ne.from(V_,$_,n):ne.from(Uu,z_,n)},e.prototype.render=function(t){var n=this.renderer,i=this.quad,o=i.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y);var a=t.uvRespectAnchor?t.anchor.x:0,s=t.uvRespectAnchor?t.anchor.y:0;o=i.uvs,o[0]=o[6]=-a,o[1]=o[3]=-s,o[2]=o[4]=1-a,o[5]=o[7]=1-s,i.invalidate();var u=t._texture,l=u.baseTexture,h=t.tileTransform.localTransform,f=t.uvMatrix,c=l.isPowerOfTwo&&u.frame.width===l.width&&u.frame.height===l.height;c&&(l._glTextures[n.CONTEXT_UID]?c=l.wrapMode!==Kt.CLAMP:l.wrapMode===Kt.CLAMP&&(l.wrapMode=Kt.REPEAT));var d=c?this.simpleShader:this.shader,p=u.width,v=u.height,_=t._width,m=t._height;sn.set(h.a*p/_,h.b*p/m,h.c*v/_,h.d*v/m,h.tx/_,h.ty/m),sn.invert(),c?sn.prepend(f.mapCoord):(d.uniforms.uMapCoord=f.mapCoord.toArray(!0),d.uniforms.uClampFrame=f.uClampFrame,d.uniforms.uClampOffset=f.uClampOffset),d.uniforms.uTransform=sn.toArray(!0),d.uniforms.uColor=Da(t.tint,t.worldAlpha,d.uniforms.uColor,l.alphaMode),d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),d.uniforms.uSampler=u,n.shader.bind(d),n.geometry.bind(i),this.state.blendMode=Ma(t.blendMode,l.alphaMode),n.state.set(this.state),n.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e}($r);/*!
 * @pixi/mesh - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ki=function(r,e){return ki=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},ki(r,e)};function Hi(r,e){ki(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Y_=function(){function r(e,t){this.uvBuffer=e,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return r.prototype.update=function(e){if(!(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var t=this.uvBuffer.data;(!this.data||this.data.length!==t.length)&&(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}},r}(),Xi=new q,Lu=new Mr,_r=function(r){Hi(e,r);function e(t,n,i,o){o===void 0&&(o=Ot.TRIANGLES);var a=r.call(this)||this;return a.geometry=t,a.shader=n,a.state=i||Te.for2d(),a.drawMode=o,a.start=0,a.size=0,a.uvs=null,a.indices=null,a.vertexData=new Float32Array(1),a.vertexDirty=-1,a._transformID=-1,a._roundPixels=N.ROUND_PIXELS,a.batchUvs=null,a}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},set:function(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this.shader},set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){var n=this.geometry.buffers[0].data,i=this.shader;i.batchable&&this.drawMode===Ot.TRIANGLES&&n.length<e.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)},e.prototype._renderDefault=function(t){var n=this.shader;n.alpha=this.worldAlpha,n.update&&n.update(),t.batch.flush(),n.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(n),t.state.set(this.state),t.geometry.bind(this.geometry,n),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},e.prototype._renderToBatch=function(t){var n=this.geometry,i=this.shader;i.uvMatrix&&(i.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=n.indexBuffer.data,this._tintRGB=i._tintRGB,this._texture=i.texture;var o=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[o]),t.plugins[o].render(this)},e.prototype.calculateVertices=function(){var t=this.geometry,n=t.buffers[0],i=n.data,o=n._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==i.length&&(this.vertexData=new Float32Array(i.length));for(var a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,h=a.d,f=a.tx,c=a.ty,d=this.vertexData,p=0;p<d.length/2;p++){var v=i[p*2],_=i[p*2+1];d[p*2]=s*v+l*_+f,d[p*2+1]=u*v+h*_+c}if(this._roundPixels)for(var m=N.RESOLUTION,p=0;p<d.length;++p)d[p]=Math.round((d[p]*m|0)/m);this.vertexDirty=o}},e.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],n=this.shader;n.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new Y_(t,n.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,Xi);for(var n=this.geometry.getBuffer("aVertexPosition").data,i=Lu.points,o=this.geometry.getIndex().data,a=o.length,s=this.drawMode===4?3:1,u=0;u+2<a;u+=s){var l=o[u]*2,h=o[u+1]*2,f=o[u+2]*2;if(i[0]=n[l],i[1]=n[l+1],i[2]=n[h],i[3]=n[h+1],i[4]=n[f],i[5]=n[f+1],Lu.contains(Xi.x,Xi.y))return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},e.BATCHABLE_SIZE=100,e}(Vt),q_=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,K_=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,mr=function(r){Hi(e,r);function e(t,n){var i=this,o={uSampler:t,alpha:1,uTextureMatrix:dt.IDENTITY,uColor:new Float32Array([1,1,1,1])};return n=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},n),n.uniforms&&Object.assign(o,n.uniforms),i=r.call(this,n.program||ur.from(K_,q_),o)||this,i._colorDirty=!1,i.uvMatrix=new di(t),i.batchable=n.program===void 0,i.pluginName=n.pluginName,i.tint=n.tint,i.alpha=n.alpha,i}return Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),e.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;Da(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},e}(ne),un=function(r){Hi(e,r);function e(t,n,i){var o=r.call(this)||this,a=new mt(t),s=new mt(n,!0),u=new mt(i,!0,!0);return o.addAttribute("aVertexPosition",a,2,!1,D.FLOAT).addAttribute("aTextureCoord",s,2,!1,D.FLOAT).addIndex(u),o._updateId=-1,o}return Object.defineProperty(e.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),e}(or);/*!
 * @pixi/text-bitmap - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ji=function(r,e){return ji=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},ji(r,e)};function Z_(r,e){ji(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ln=function(){function r(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return r}(),J_=function(){function r(){}return r.test=function(e){return typeof e=="string"&&e.indexOf("info face=")===0},r.parse=function(e){var t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var i in t){var o=t[i].match(/^[a-z]+/gm)[0],a=t[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),s={};for(var u in a){var l=a[u].split("="),h=l[0],f=l[1].replace(/"/gm,""),c=parseFloat(f),d=isNaN(c)?f:c;s[h]=d}n[o].push(s)}var p=new ln;return n.info.forEach(function(v){return p.info.push({face:v.face,size:parseInt(v.size,10)})}),n.common.forEach(function(v){return p.common.push({lineHeight:parseInt(v.lineHeight,10)})}),n.page.forEach(function(v){return p.page.push({id:parseInt(v.id,10),file:v.file})}),n.char.forEach(function(v){return p.char.push({id:parseInt(v.id,10),page:parseInt(v.page,10),x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xoffset:parseInt(v.xoffset,10),yoffset:parseInt(v.yoffset,10),xadvance:parseInt(v.xadvance,10)})}),n.kerning.forEach(function(v){return p.kerning.push({first:parseInt(v.first,10),second:parseInt(v.second,10),amount:parseInt(v.amount,10)})}),n.distanceField.forEach(function(v){return p.distanceField.push({distanceRange:parseInt(v.distanceRange,10),fieldType:v.fieldType})}),p},r}(),zi=function(){function r(){}return r.test=function(e){return e instanceof XMLDocument&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},r.parse=function(e){for(var t=new ln,n=e.getElementsByTagName("info"),i=e.getElementsByTagName("common"),o=e.getElementsByTagName("page"),a=e.getElementsByTagName("char"),s=e.getElementsByTagName("kerning"),u=e.getElementsByTagName("distanceField"),l=0;l<n.length;l++)t.info.push({face:n[l].getAttribute("face"),size:parseInt(n[l].getAttribute("size"),10)});for(var l=0;l<i.length;l++)t.common.push({lineHeight:parseInt(i[l].getAttribute("lineHeight"),10)});for(var l=0;l<o.length;l++)t.page.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});for(var l=0;l<a.length;l++){var h=a[l];t.char.push({id:parseInt(h.getAttribute("id"),10),page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xoffset:parseInt(h.getAttribute("xoffset"),10),yoffset:parseInt(h.getAttribute("yoffset"),10),xadvance:parseInt(h.getAttribute("xadvance"),10)})}for(var l=0;l<s.length;l++)t.kerning.push({first:parseInt(s[l].getAttribute("first"),10),second:parseInt(s[l].getAttribute("second"),10),amount:parseInt(s[l].getAttribute("amount"),10)});for(var l=0;l<u.length;l++)t.distanceField.push({fieldType:u[l].getAttribute("fieldType"),distanceRange:parseInt(u[l].getAttribute("distanceRange"),10)});return t},r}(),Q_=function(){function r(){}return r.test=function(e){if(typeof e=="string"&&e.indexOf("<font>")>-1){var t=new self.DOMParser().parseFromString(e,"text/xml");return zi.test(t)}return!1},r.parse=function(e){var t=new self.DOMParser().parseFromString(e,"text/xml");return zi.parse(t)},r}(),Vi=[J_,zi,Q_];function Gu(r){for(var e=0;e<Vi.length;e++)if(Vi[e].test(r))return Vi[e];return null}function tm(r,e,t,n,i,o){var a=t.fill;if(Array.isArray(a)){if(a.length===1)return a[0]}else return a;var s,u=t.dropShadow?t.dropShadowDistance:0,l=t.padding||0,h=r.width/n-u-l*2,f=r.height/n-u-l*2,c=a.slice(),d=t.fillGradientStops.slice();if(!d.length)for(var p=c.length+1,v=1;v<p;++v)d.push(v/p);if(c.unshift(a[0]),d.unshift(0),c.push(a[a.length-1]),d.push(1),t.fillGradientType===pr.LINEAR_VERTICAL){s=e.createLinearGradient(h/2,l,h/2,f+l);for(var _=0,m=o.fontProperties.fontSize+t.strokeThickness,g=m/f,v=0;v<i.length;v++)for(var T=o.lineHeight*v,I=0;I<c.length;I++){var x=0;typeof d[I]=="number"?x=d[I]:x=I/c.length;var y=T/f+x*g,A=Math.max(_,y);A=Math.min(A,1),s.addColorStop(A,c[I]),_=A}}else{s=e.createLinearGradient(l,f/2,h+l,f/2);for(var F=c.length+1,E=1,v=0;v<c.length;v++){var P=void 0;typeof d[v]=="number"?P=d[v]:P=E/F,s.addColorStop(P,c[v]),E++}}return s}function em(r,e,t,n,i,o,a){var s=t.text,u=t.fontProperties;e.translate(n,i),e.scale(o,o);var l=a.strokeThickness/2,h=-(a.strokeThickness/2);if(e.font=a.toFontString(),e.lineWidth=a.strokeThickness,e.textBaseline=a.textBaseline,e.lineJoin=a.lineJoin,e.miterLimit=a.miterLimit,e.fillStyle=tm(r,e,a,o,[s],t),e.strokeStyle=a.stroke,a.dropShadow){var f=a.dropShadowColor,c=Tt(typeof f=="number"?f:Ga(f)),d=a.dropShadowBlur*o,p=a.dropShadowDistance*o;e.shadowColor="rgba("+c[0]*255+","+c[1]*255+","+c[2]*255+","+a.dropShadowAlpha+")",e.shadowBlur=d,e.shadowOffsetX=Math.cos(a.dropShadowAngle)*p,e.shadowOffsetY=Math.sin(a.dropShadowAngle)*p}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;a.stroke&&a.strokeThickness&&e.strokeText(s,l,h+t.lineHeight-u.descent),a.fill&&e.fillText(s,l,h+t.lineHeight-u.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}function Bu(r){return Array.from?Array.from(r):r.split("")}function rm(r){typeof r=="string"&&(r=[r]);for(var e=[],t=0,n=r.length;t<n;t++){var i=r[t];if(Array.isArray(i)){if(i.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+i.length+".");var o=i[0].charCodeAt(0),a=i[1].charCodeAt(0);if(a<o)throw new Error("[BitmapFont]: Invalid character range.");for(var s=o,u=a;s<=u;s++)e.push(String.fromCharCode(s))}else e.push.apply(e,Bu(i))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}function hn(r){return r.codePointAt?r.codePointAt(0):r.charCodeAt(0)}var je=function(){function r(e,t,n){var i,o,a=e.info[0],s=e.common[0],u=e.page[0],l=e.distanceField[0],h=Gr(u.file),f={};this._ownsTextures=n,this.font=a.face,this.size=a.size,this.lineHeight=s.lineHeight/h,this.chars={},this.pageTextures=f;for(var c=0;c<e.page.length;c++){var d=e.page[c],p=d.id,v=d.file;f[p]=t instanceof Array?t[c]:t[v],(l==null?void 0:l.fieldType)&&l.fieldType!=="none"&&(f[p].baseTexture.alphaMode=Xt.NO_PREMULTIPLIED_ALPHA)}for(var c=0;c<e.char.length;c++){var _=e.char[c],p=_.id,m=_.page,g=e.char[c],T=g.x,I=g.y,x=g.width,y=g.height,A=g.xoffset,F=g.yoffset,E=g.xadvance;T/=h,I/=h,x/=h,y/=h,A/=h,F/=h,E/=h;var P=new $(T+f[m].frame.x/h,I+f[m].frame.y/h,x,y);this.chars[p]={xOffset:A,yOffset:F,xAdvance:E,kerning:{},texture:new G(f[m].baseTexture,P),page:m}}for(var c=0;c<e.kerning.length;c++){var B=e.kerning[c],U=B.first,j=B.second,it=B.amount;U/=h,j/=h,it/=h,this.chars[j]&&(this.chars[j].kerning[U]=it)}this.distanceFieldRange=l==null?void 0:l.distanceRange,this.distanceFieldType=(o=(i=l==null?void 0:l.fieldType)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"none"}return r.prototype.destroy=function(){for(var e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(var e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null},r.install=function(e,t,n){var i;if(e instanceof ln)i=e;else{var o=Gu(e);if(!o)throw new Error("Unrecognized data format for font.");i=o.parse(e)}t instanceof G&&(t=[t]);var a=new r(i,t,n);return r.available[a.font]=a,a},r.uninstall=function(e){var t=r.available[e];if(!t)throw new Error("No font found named '"+e+"'");t.destroy(),delete r.available[e]},r.from=function(e,t,n){if(!e)throw new Error("[BitmapFont] Property `name` is required.");var i=Object.assign({},r.defaultOptions,n),o=i.chars,a=i.padding,s=i.resolution,u=i.textureWidth,l=i.textureHeight,h=rm(o),f=t instanceof Xe?t:new Xe(t),c=u,d=new ln;d.info[0]={face:f.fontFamily,size:f.fontSize},d.common[0]={lineHeight:f.fontSize};for(var p=0,v=0,_,m,g,T=0,I=[],x=0;x<h.length;x++){_||(_=document.createElement("canvas"),_.width=u,_.height=l,m=_.getContext("2d"),g=new K(_,{resolution:s}),I.push(new G(g)),d.page.push({id:I.length-1,file:""}));var y=At.measureText(h[x],f,!1,_),A=y.width,F=Math.ceil(y.height),E=Math.ceil((f.fontStyle==="italic"?2:1)*A);if(v>=l-F*s){if(v===0)throw new Error("[BitmapFont] textureHeight "+l+"px is "+("too small for "+f.fontSize+"px fonts"));--x,_=null,m=null,g=null,v=0,p=0,T=0;continue}if(T=Math.max(F+y.fontProperties.descent,T),E*s+p>=c){--x,v+=T*s,v=Math.ceil(v),p=0,T=0;continue}em(_,m,y,p,v,s,f);var P=hn(y.text);d.char.push({id:P,page:I.length-1,x:p/s,y:v/s,width:E,height:F,xoffset:0,yoffset:0,xadvance:Math.ceil(A-(f.dropShadow?f.dropShadowDistance:0)-(f.stroke?f.strokeThickness:0))}),p+=(E+2*a)*s,p=Math.ceil(p)}for(var x=0,B=h.length;x<B;x++)for(var U=h[x],j=0;j<B;j++){var it=h[j],O=m.measureText(U).width,S=m.measureText(it).width,z=m.measureText(U+it).width,gt=z-(O+S);gt&&d.kerning.push({first:hn(U),second:hn(it),amount:gt})}var Et=new r(d,I,!0);return r.available[e]!==void 0&&r.uninstall(e),r.available[e]=Et,Et},r.ALPHA=[["a","z"],["A","Z"]," "],r.NUMERIC=[["0","9"]],r.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],r.ASCII=[[" ","~"]],r.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:r.ALPHANUMERIC},r.available={},r}(),nm=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,im=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,om=[],am=[],Mu=[];(function(r){Z_(e,r);function e(t,n){n===void 0&&(n={});var i=r.call(this)||this;i._tint=16777215;var o=Object.assign({},e.styleDefaults,n),a=o.align,s=o.tint,u=o.maxWidth,l=o.letterSpacing,h=o.fontName,f=o.fontSize;if(!je.available[h])throw new Error('Missing BitmapFont "'+h+'"');return i._activePagesMeshData=[],i._textWidth=0,i._textHeight=0,i._align=a,i._tint=s,i._fontName=h,i._fontSize=f||je.available[h].size,i._text=t,i._maxWidth=u,i._maxLineHeight=0,i._letterSpacing=l,i._anchor=new ve(function(){i.dirty=!0},i,0,0),i._roundPixels=N.ROUND_PIXELS,i.dirty=!0,i._textureCache={},i}return e.prototype.updateText=function(){for(var t,n=je.available[this._fontName],i=this._fontSize/n.size,o=new q,a=[],s=[],u=[],l=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",h=Bu(l),f=this._maxWidth*n.size/this._fontSize,c=n.distanceFieldType==="none"?om:am,d=null,p=0,v=0,_=0,m=-1,g=0,T=0,I=0,x=0,y=0;y<h.length;y++){var A=h[y],F=hn(A);if(/(?:\s)/.test(A)&&(m=y,g=p,x++),A==="\r"||A===`
`){s.push(p),u.push(-1),v=Math.max(v,p),++_,++T,o.x=0,o.y+=n.lineHeight,d=null,x=0;continue}var E=n.chars[F];if(!!E){d&&E.kerning[d]&&(o.x+=E.kerning[d]);var P=Mu.pop()||{texture:G.EMPTY,line:0,charCode:0,prevSpaces:0,position:new q};P.texture=E.texture,P.line=_,P.charCode=F,P.position.x=o.x+E.xOffset+this._letterSpacing/2,P.position.y=o.y+E.yOffset,P.prevSpaces=x,a.push(P),p=P.position.x+E.texture.orig.width,o.x+=E.xAdvance+this._letterSpacing,I=Math.max(I,E.yOffset+E.texture.height),d=F,m!==-1&&f>0&&o.x>f&&(++T,Ue(a,1+m-T,1+y-m),y=m,m=-1,s.push(g),u.push(a.length>0?a[a.length-1].prevSpaces:0),v=Math.max(v,g),_++,o.x=0,o.y+=n.lineHeight,d=null,x=0)}}var B=h[h.length-1];B!=="\r"&&B!==`
`&&(/(?:\s)/.test(B)&&(p=g),s.push(p),v=Math.max(v,p),u.push(-1));for(var U=[],y=0;y<=_;y++){var j=0;this._align==="right"?j=v-s[y]:this._align==="center"?j=(v-s[y])/2:this._align==="justify"&&(j=u[y]<0?0:(v-s[y])/u[y]),U.push(j)}for(var it=a.length,O={},S=[],z=this._activePagesMeshData,y=0;y<z.length;y++)c.push(z[y]);for(var y=0;y<it;y++){var gt=a[y].texture,Et=gt.baseTexture.uid;if(!O[Et]){var w=c.pop();if(!w){var M=new un,H=void 0,Y=void 0;n.distanceFieldType==="none"?(H=new mr(G.EMPTY),Y=L.NORMAL):(H=new mr(G.EMPTY,{program:ur.from(im,nm),uniforms:{uFWidth:0}}),Y=L.NORMAL_NPM);var tt=new _r(M,H);tt.blendMode=Y,w={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:tt,vertices:null,uvs:null,indices:null}}w.index=0,w.indexCount=0,w.vertexCount=0,w.uvsCount=0,w.total=0;var st=this._textureCache;st[Et]=st[Et]||new G(gt.baseTexture),w.mesh.texture=st[Et],w.mesh.tint=this._tint,S.push(w),O[Et]=w}O[Et].total++}for(var y=0;y<z.length;y++)S.indexOf(z[y])===-1&&this.removeChild(z[y].mesh);for(var y=0;y<S.length;y++)S[y].mesh.parent!==this&&this.addChild(S[y].mesh);this._activePagesMeshData=S;for(var y in O){var w=O[y],J=w.total;if(!(((t=w.indices)===null||t===void 0?void 0:t.length)>6*J)||w.vertices.length<_r.BATCHABLE_SIZE*2)w.vertices=new Float32Array(4*2*J),w.uvs=new Float32Array(4*2*J),w.indices=new Uint16Array(6*J);else for(var vt=w.total,yt=w.vertices,ut=vt*4*2;ut<yt.length;ut++)yt[ut]=0;w.mesh.size=6*J}for(var y=0;y<it;y++){var A=a[y],ft=A.position.x+U[A.line]*(this._align==="justify"?A.prevSpaces:1);this._roundPixels&&(ft=Math.round(ft));var Z=ft*i,nt=A.position.y*i,gt=A.texture,V=O[gt.baseTexture.uid],wt=gt.frame,xt=gt._uvs,W=V.index++;V.indices[W*6+0]=0+W*4,V.indices[W*6+1]=1+W*4,V.indices[W*6+2]=2+W*4,V.indices[W*6+3]=0+W*4,V.indices[W*6+4]=2+W*4,V.indices[W*6+5]=3+W*4,V.vertices[W*8+0]=Z,V.vertices[W*8+1]=nt,V.vertices[W*8+2]=Z+wt.width*i,V.vertices[W*8+3]=nt,V.vertices[W*8+4]=Z+wt.width*i,V.vertices[W*8+5]=nt+wt.height*i,V.vertices[W*8+6]=Z,V.vertices[W*8+7]=nt+wt.height*i,V.uvs[W*8+0]=xt.x0,V.uvs[W*8+1]=xt.y0,V.uvs[W*8+2]=xt.x1,V.uvs[W*8+3]=xt.y1,V.uvs[W*8+4]=xt.x2,V.uvs[W*8+5]=xt.y2,V.uvs[W*8+6]=xt.x3,V.uvs[W*8+7]=xt.y3}this._textWidth=v*i,this._textHeight=(o.y+n.lineHeight)*i;for(var y in O){var w=O[y];if(this.anchor.x!==0||this.anchor.y!==0)for(var Mt=0,Ae=this._textWidth*this.anchor.x,wr=this._textHeight*this.anchor.y,zo=0;zo<w.total;zo++)w.vertices[Mt++]-=Ae,w.vertices[Mt++]-=wr,w.vertices[Mt++]-=Ae,w.vertices[Mt++]-=wr,w.vertices[Mt++]-=Ae,w.vertices[Mt++]-=wr,w.vertices[Mt++]-=Ae,w.vertices[Mt++]-=wr;this._maxLineHeight=I*i;var Vo=w.mesh.geometry.getBuffer("aVertexPosition"),$o=w.mesh.geometry.getBuffer("aTextureCoord"),Wo=w.mesh.geometry.getIndex();Vo.data=w.vertices,$o.data=w.uvs,Wo.data=w.indices,Vo.update(),$o.update(),Wo.update()}for(var y=0;y<a.length;y++)Mu.push(a[y])},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype._render=function(t){var n=je.available[this._fontName],i=n.distanceFieldRange,o=n.distanceFieldType,a=n.size;if(o!=="none")for(var s=this.worldTransform,u=s.a,l=s.b,h=s.c,f=s.d,c=Math.sqrt(u*u+l*l),d=Math.sqrt(h*h+f*f),p=(Math.abs(c)+Math.abs(d))/2,v=this._fontSize/a,_=0,m=this._activePagesMeshData;_<m.length;_++){var g=m[_];g.mesh.shader.uniforms.uFWidth=p*i*v*t.resolution}r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(){return this.validate(),r.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var n=0;n<this._activePagesMeshData.length;n++)this._activePagesMeshData[n].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!je.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),e.prototype.destroy=function(t){var n=this._textureCache;for(var i in n){var o=n[i];o.destroy(),delete n[i]}this._textureCache=null,r.prototype.destroy.call(this,t)},e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},e})(Vt);var sm=function(){function r(){}return r.add=function(){ht.setExtensionXhrType("fnt",ht.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){var n=Gu(e.data);if(!n){t();return}for(var i=r.getBaseUrl(this,e),o=n.parse(e.data),a={},s=function(v){a[v.metadata.pageFile]=v.texture,Object.keys(a).length===o.page.length&&(e.bitmapFont=je.install(o,a,!0),t())},u=0;u<o.page.length;++u){var l=o.page[u].file,h=i+l,f=!1;for(var c in this.resources){var d=this.resources[c];if(d.url===h){d.metadata.pageFile=l,d.texture?s(d):d.onAfterMiddleware.add(s),f=!0;break}}if(!f){var p={crossOrigin:e.crossOrigin,loadType:ht.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},e.metadata.imageMetadata),parentResource:e};this.add(h,p,s)}}},r.getBaseUrl=function(e,t){var n=t.isDataUrl?"":r.dirname(t.url);return t.isDataUrl&&(n==="."&&(n=""),e.baseUrl&&n&&e.baseUrl.charAt(e.baseUrl.length-1)==="/"&&(n+="/")),n=n.replace(e.baseUrl,""),n&&n.charAt(n.length-1)!=="/"&&(n+="/"),n},r.dirname=function(e){var t=e.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return t===e?".":t===""?"/":t},r}();/*!
 * @pixi/filter-alpha - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var $i=function(r,e){return $i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},$i(r,e)};function um(r,e){$i(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var lm=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,hm=function(r){um(e,r);function e(t){t===void 0&&(t=1);var n=r.call(this,fv,lm,{uAlpha:1})||this;return n.alpha=t,n}return Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-blur - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Wi=function(r,e){return Wi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Wi(r,e)};function Du(r,e){Wi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var fm=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function cm(r,e){var t=Math.ceil(r/2),n=fm,i="",o;e?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<r;a++){var s=o.replace("%index%",a.toString());s=s.replace("%sampleIndex%",a-(t-1)+".0"),i+=s,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",r.toString()),n}var dm={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},pm=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function vm(r){for(var e=dm[r],t=e.length,n=pm,i="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,s=0;s<r;s++){var u=o.replace("%index%",s.toString());a=s,s>=t&&(a=r-s-1),u=u.replace("%value%",e[a].toString()),i+=u,i+=`
`}return n=n.replace("%blur%",i),n=n.replace("%size%",r.toString()),n}/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ku;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(ku||(ku={}));var Hu;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(Hu||(Hu={}));var Xu;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(Xu||(Xu={}));var ju;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(ju||(ju={}));var zu;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(zu||(zu={}));var Vu;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Vu||(Vu={}));var $u;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})($u||($u={}));var Wu;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(Wu||(Wu={}));var Yu;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(Yu||(Yu={}));var qu;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(qu||(qu={}));var Ku;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Ku||(Ku={}));var Zu;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Zu||(Zu={}));var Ju;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Ju||(Ju={}));var gr;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(gr||(gr={}));var Qu;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Qu||(Qu={}));var tl;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(tl||(tl={}));var el;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(el||(el={}));var rl;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(rl||(rl={}));var nl;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(nl||(nl={}));var fn=function(r){Du(e,r);function e(t,n,i,o,a){n===void 0&&(n=8),i===void 0&&(i=4),o===void 0&&(o=N.FILTER_RESOLUTION),a===void 0&&(a=5);var s=this,u=cm(a,t),l=vm(a);return s=r.call(this,u,l)||this,s.horizontal=t,s.resolution=o,s._quality=0,s.quality=i,s.blur=n,s}return e.prototype.apply=function(t,n,i,o){if(i?this.horizontal?this.uniforms.strength=1/i.width*(i.width/n.width):this.uniforms.strength=1/i.height*(i.height/n.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/n.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/n.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,n,i,o);else{var a=t.getFilterTexture(),s=t.renderer,u=n,l=a;this.state.blend=!1,t.applyFilter(this,u,l,gr.CLEAR);for(var h=1;h<this.passes-1;h++){t.bindAndClear(u,gr.BLIT),this.uniforms.uSampler=l;var f=l;l=u,u=f,s.shader.bind(this),s.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,l,i,o),t.returnFilterTexture(a)}},Object.defineProperty(e.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),e}(k);(function(r){Du(e,r);function e(t,n,i,o){t===void 0&&(t=8),n===void 0&&(n=4),i===void 0&&(i=N.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this;return a.blurXFilter=new fn(!0,t,n,i,o),a.blurYFilter=new fn(!1,t,n,i,o),a.resolution=i,a.quality=n,a.blur=t,a.repeatEdgePixels=!1,a}return e.prototype.apply=function(t,n,i,o){var a=Math.abs(this.blurXFilter.strength),s=Math.abs(this.blurYFilter.strength);if(a&&s){var u=t.getFilterTexture();this.blurXFilter.apply(t,n,u,gr.CLEAR),this.blurYFilter.apply(t,u,i,o),t.returnFilterTexture(u)}else s?this.blurYFilter.apply(t,n,i,o):this.blurXFilter.apply(t,n,i,o)},e.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-color-matrix - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Yi=function(r,e){return Yi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Yi(r,e)};function _m(r,e){Yi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var mm=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,il=function(r){_m(e,r);function e(){var t=this,n={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return t=r.call(this,ru,mm,n)||this,t.alpha=1,t}return e.prototype._loadMatrix=function(t,n){n===void 0&&(n=!1);var i=t;n&&(this._multiply(i,this.uniforms.m,t),i=this._colorMatrix(i)),this.uniforms.m=i},e.prototype._multiply=function(t,n,i){return t[0]=n[0]*i[0]+n[1]*i[5]+n[2]*i[10]+n[3]*i[15],t[1]=n[0]*i[1]+n[1]*i[6]+n[2]*i[11]+n[3]*i[16],t[2]=n[0]*i[2]+n[1]*i[7]+n[2]*i[12]+n[3]*i[17],t[3]=n[0]*i[3]+n[1]*i[8]+n[2]*i[13]+n[3]*i[18],t[4]=n[0]*i[4]+n[1]*i[9]+n[2]*i[14]+n[3]*i[19]+n[4],t[5]=n[5]*i[0]+n[6]*i[5]+n[7]*i[10]+n[8]*i[15],t[6]=n[5]*i[1]+n[6]*i[6]+n[7]*i[11]+n[8]*i[16],t[7]=n[5]*i[2]+n[6]*i[7]+n[7]*i[12]+n[8]*i[17],t[8]=n[5]*i[3]+n[6]*i[8]+n[7]*i[13]+n[8]*i[18],t[9]=n[5]*i[4]+n[6]*i[9]+n[7]*i[14]+n[8]*i[19]+n[9],t[10]=n[10]*i[0]+n[11]*i[5]+n[12]*i[10]+n[13]*i[15],t[11]=n[10]*i[1]+n[11]*i[6]+n[12]*i[11]+n[13]*i[16],t[12]=n[10]*i[2]+n[11]*i[7]+n[12]*i[12]+n[13]*i[17],t[13]=n[10]*i[3]+n[11]*i[8]+n[12]*i[13]+n[13]*i[18],t[14]=n[10]*i[4]+n[11]*i[9]+n[12]*i[14]+n[13]*i[19]+n[14],t[15]=n[15]*i[0]+n[16]*i[5]+n[17]*i[10]+n[18]*i[15],t[16]=n[15]*i[1]+n[16]*i[6]+n[17]*i[11]+n[18]*i[16],t[17]=n[15]*i[2]+n[16]*i[7]+n[17]*i[12]+n[18]*i[17],t[18]=n[15]*i[3]+n[16]*i[8]+n[17]*i[13]+n[18]*i[18],t[19]=n[15]*i[4]+n[16]*i[9]+n[17]*i[14]+n[18]*i[19]+n[19],t},e.prototype._colorMatrix=function(t){var n=new Float32Array(t);return n[4]/=255,n[9]/=255,n[14]/=255,n[19]/=255,n},e.prototype.brightness=function(t,n){var i=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.tint=function(t,n){var i=t>>16&255,o=t>>8&255,a=t&255,s=[i/255,0,0,0,0,0,o/255,0,0,0,0,0,a/255,0,0,0,0,0,1,0];this._loadMatrix(s,n)},e.prototype.greyscale=function(t,n){var i=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.blackAndWhite=function(t){var n=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.hue=function(t,n){t=(t||0)/180*Math.PI;var i=Math.cos(t),o=Math.sin(t),a=Math.sqrt,s=1/3,u=a(s),l=i+(1-i)*s,h=s*(1-i)-u*o,f=s*(1-i)+u*o,c=s*(1-i)+u*o,d=i+s*(1-i),p=s*(1-i)-u*o,v=s*(1-i)-u*o,_=s*(1-i)+u*o,m=i+s*(1-i),g=[l,h,f,0,0,c,d,p,0,0,v,_,m,0,0,0,0,0,1,0];this._loadMatrix(g,n)},e.prototype.contrast=function(t,n){var i=(t||0)+1,o=-.5*(i-1),a=[i,0,0,0,o,0,i,0,0,o,0,0,i,0,o,0,0,0,1,0];this._loadMatrix(a,n)},e.prototype.saturate=function(t,n){t===void 0&&(t=0);var i=t*2/3+1,o=(i-1)*-.5,a=[i,o,o,0,0,o,i,o,0,0,o,o,i,0,0,0,0,0,1,0];this._loadMatrix(a,n)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var n=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.sepia=function(t){var n=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.technicolor=function(t){var n=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.polaroid=function(t){var n=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.toBGR=function(t){var n=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.kodachrome=function(t){var n=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.browni=function(t){var n=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.vintage=function(t){var n=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.colorTone=function(t,n,i,o,a){t=t||.2,n=n||.15,i=i||16770432,o=o||3375104;var s=(i>>16&255)/255,u=(i>>8&255)/255,l=(i&255)/255,h=(o>>16&255)/255,f=(o>>8&255)/255,c=(o&255)/255,d=[.3,.59,.11,0,0,s,u,l,t,0,h,f,c,n,0,s-h,u-f,l-c,0,0];this._loadMatrix(d,a)},e.prototype.night=function(t,n){t=t||.1;var i=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.predator=function(t,n){var i=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(i,n)},e.prototype.lsd=function(t){var n=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(n,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(k);il.prototype.grayscale=il.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var qi=function(r,e){return qi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},qi(r,e)};function gm(r,e){qi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ym=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,xm=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;(function(r){gm(e,r);function e(t,n){var i=this,o=new dt;return t.renderable=!1,i=r.call(this,xm,ym,{mapSampler:t._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,i.maskSprite=t,i.maskMatrix=o,n==null&&(n=20),i.scale=new q(n,n),i}return e.prototype.apply=function(t,n,i,o){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var a=this.maskSprite.worldTransform,s=Math.sqrt(a.a*a.a+a.b*a.b),u=Math.sqrt(a.c*a.c+a.d*a.d);s!==0&&u!==0&&(this.uniforms.rotation[0]=a.a/s,this.uniforms.rotation[1]=a.b/s,this.uniforms.rotation[2]=a.c/u,this.uniforms.rotation[3]=a.d/u),t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-fxaa - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ki=function(r,e){return Ki=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Ki(r,e)};function bm(r,e){Ki(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Tm=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,Cm=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;(function(r){bm(e,r);function e(){return r.call(this,Tm,Cm)||this}return e})(k);/*!
 * @pixi/filter-noise - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Zi=function(r,e){return Zi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Zi(r,e)};function Em(r,e){Zi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wm=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;(function(r){Em(e,r);function e(t,n){t===void 0&&(t=.5),n===void 0&&(n=Math.random());var i=r.call(this,ru,wm,{uNoise:0,uSeed:0})||this;return i.noise=t,i.seed=n,i}return Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/mixin-cache-as-bitmap - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ol;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(ol||(ol={}));var al;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(al||(al={}));var sl;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(sl||(sl={}));var ul;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(ul||(ul={}));var ll;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(ll||(ll={}));var hl;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(hl||(hl={}));var fl;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(fl||(fl={}));var cl;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(cl||(cl={}));var dl;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(dl||(dl={}));var pl;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(pl||(pl={}));var vl;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(vl||(vl={}));var _l;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(_l||(_l={}));var ml;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(ml||(ml={}));var gl;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(gl||(gl={}));var yl;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(yl||(yl={}));var xl;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(xl||(xl={}));var bl;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(bl||(bl={}));var Ji;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Ji||(Ji={}));var Tl;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Tl||(Tl={}));var Cl=new dt;pt.prototype._cacheAsBitmap=!1;pt.prototype._cacheData=null;pt.prototype._cacheAsBitmapResolution=null;pt.prototype._cacheAsBitmapMultisample=Ji.NONE;var Im=function(){function r(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return r}();Object.defineProperties(pt.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(r){r!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(r){r!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(r){if(this._cacheAsBitmap!==r){this._cacheAsBitmap=r;var e;r?(this._cacheData||(this._cacheData=new Im),e=this._cacheData,e.originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}});pt.prototype._renderCached=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))};pt.prototype._initCachedDisplayObject=function(e){var t;if(!(this._cacheData&&this._cacheData.sprite)){var n=this.alpha;this.alpha=1,e.batch.flush();var i=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var o=this.filters[0].padding;i.pad(o)}i.ceil(N.RESOLUTION);var a=e.renderTexture.current,s=e.renderTexture.sourceFrame.clone(),u=e.renderTexture.destinationFrame.clone(),l=e.projection.transform,h=xe.create({width:i.width,height:i.height,resolution:this.cacheAsBitmapResolution||e.resolution,multisample:(t=this.cacheAsBitmapMultisample)!==null&&t!==void 0?t:e.multisample}),f="cacheAsBitmap_"+fe();this._cacheData.textureCacheId=f,K.addToCache(h.baseTexture,f),G.addToCache(h,f);var c=this.transform.localTransform.copyTo(Cl).invert().translate(-i.x,-i.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:h,clear:!0,transform:c,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=l,e.renderTexture.bind(a,s,u),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var d=new Pe(h);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(i.x/i.width),d.anchor.y=-(i.y/i.height),d.alpha=n,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};pt.prototype._renderCachedCanvas=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))};pt.prototype._initCachedDisplayObjectCanvas=function(e){if(!(this._cacheData&&this._cacheData.sprite)){var t=this.getLocalBounds(null,!0),n=this.alpha;this.alpha=1;var i=e.context,o=e._projTransform;t.ceil(N.RESOLUTION);var a=xe.create({width:t.width,height:t.height}),s="cacheAsBitmap_"+fe();this._cacheData.textureCacheId=s,K.addToCache(a.baseTexture,s),G.addToCache(a,s);var u=Cl;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=t.x,u.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:a,clear:!0,transform:u,skipUpdateTransform:!1}),e.context=i,e._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=n;var l=new Pe(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(t.x/t.width),l.anchor.y=-(t.y/t.height),l.alpha=n,l._bounds=this._bounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=l.containsPoint.bind(l)}};pt.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};pt.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};pt.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,K.removeFromCache(this._cacheData.textureCacheId),G.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};pt.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)};/*!
 * @pixi/mixin-get-child-by-name - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */pt.prototype.name=null;Vt.prototype.getChildByName=function(e,t){for(var n=0,i=this.children.length;n<i;n++)if(this.children[n].name===e)return this.children[n];if(t)for(var n=0,i=this.children.length;n<i;n++){var o=this.children[n];if(!!o.getChildByName){var a=this.children[n].getChildByName(e,!0);if(a)return a}}return null};/*!
 * @pixi/mixin-get-global-position - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */pt.prototype.getGlobalPosition=function(e,t){return e===void 0&&(e=new q),t===void 0&&(t=!1),this.parent?this.parent.toGlobal(this.position,e,t):(e.x=this.position.x,e.y=this.position.y),e};/*!
 * @pixi/mesh-extras - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Qi=function(r,e){return Qi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},Qi(r,e)};function ze(r,e){Qi(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Pm=function(r){ze(e,r);function e(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=100),i===void 0&&(i=10),o===void 0&&(o=10);var a=r.call(this)||this;return a.segWidth=i,a.segHeight=o,a.width=t,a.height=n,a.build(),a}return e.prototype.build=function(){for(var t=this.segWidth*this.segHeight,n=[],i=[],o=[],a=this.segWidth-1,s=this.segHeight-1,u=this.width/a,l=this.height/s,h=0;h<t;h++){var f=h%this.segWidth,c=h/this.segWidth|0;n.push(f*u,c*l),i.push(f/a,c/s)}for(var d=a*s,h=0;h<d;h++){var p=h%a,v=h/a|0,_=v*this.segWidth+p,m=v*this.segWidth+p+1,g=(v+1)*this.segWidth+p,T=(v+1)*this.segWidth+p+1;o.push(_,m,g,m,T,g)}this.buffers[0].data=new Float32Array(n),this.buffers[1].data=new Float32Array(i),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},e}(un),Rm=function(r){ze(e,r);function e(t,n,i){t===void 0&&(t=200),i===void 0&&(i=0);var o=r.call(this,new Float32Array(n.length*4),new Float32Array(n.length*4),new Uint16Array((n.length-1)*6))||this;return o.points=n,o._width=t,o.textureScale=i,o.build(),o}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),e.prototype.build=function(){var t=this.points;if(!!t){var n=this.getBuffer("aVertexPosition"),i=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(t.length<1)){n.data.length/4!==t.length&&(n.data=new Float32Array(t.length*4),i.data=new Float32Array(t.length*4),o.data=new Uint16Array((t.length-1)*6));var a=i.data,s=o.data;a[0]=0,a[1]=0,a[2]=0,a[3]=1;for(var u=0,l=t[0],h=this._width*this.textureScale,f=t.length,c=0;c<f;c++){var d=c*4;if(this.textureScale>0){var p=l.x-t[c].x,v=l.y-t[c].y,_=Math.sqrt(p*p+v*v);l=t[c],u+=_/h}else u=c/(f-1);a[d]=u,a[d+1]=0,a[d+2]=u,a[d+3]=1}for(var m=0,c=0;c<f-1;c++){var d=c*2;s[m++]=d,s[m++]=d+1,s[m++]=d+2,s[m++]=d+2,s[m++]=d+1,s[m++]=d+3}i.update(),o.update(),this.updateVertices()}}},e.prototype.updateVertices=function(){var t=this.points;if(!(t.length<1)){for(var n=t[0],i,o=0,a=0,s=this.buffers[0].data,u=t.length,l=0;l<u;l++){var h=t[l],f=l*4;l<t.length-1?i=t[l+1]:i=h,a=-(i.x-n.x),o=i.y-n.y;var c=Math.sqrt(o*o+a*a),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=c,a/=c,o*=d,a*=d,s[f]=h.x+o,s[f+1]=h.y+a,s[f+2]=h.x-o,s[f+3]=h.y-a,n=h}this.buffers[0].update()}},e.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},e}(un);(function(r){ze(e,r);function e(t,n,i){i===void 0&&(i=0);var o=this,a=new Rm(t.height,n,i),s=new mr(t);return i>0&&(t.baseTexture.wrapMode=Kt.REPEAT),o=r.call(this,a,s)||this,o.autoUpdate=!0,o}return e.prototype._render=function(t){var n=this.geometry;(this.autoUpdate||n._width!==this.shader.texture.height)&&(n._width=this.shader.texture.height,n.update()),r.prototype._render.call(this,t)},e})(_r);var Am=function(r){ze(e,r);function e(t,n,i){var o=this,a=new Pm(t.width,t.height,n,i),s=new mr(G.WHITE);return o=r.call(this,a,s)||this,o.texture=t,o.autoResize=!0,o}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,n=this.shader.texture,i=n.width,o=n.height;this.autoResize&&(t.width!==i||t.height!==o)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(e.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),r.prototype._render.call(this,t)},e.prototype.destroy=function(t){this.shader.texture.off("update",this.textureUpdated,this),r.prototype.destroy.call(this,t)},e}(_r);(function(r){ze(e,r);function e(t,n,i,o,a){t===void 0&&(t=G.EMPTY);var s=this,u=new un(n,i,o);u.getBuffer("aVertexPosition").static=!1;var l=new mr(t);return s=r.call(this,u,l,null,a)||this,s.autoUpdate=!0,s}return Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),r.prototype._render.call(this,t)},e})(_r);var cn=10;(function(r){ze(e,r);function e(t,n,i,o,a){n===void 0&&(n=cn),i===void 0&&(i=cn),o===void 0&&(o=cn),a===void 0&&(a=cn);var s=r.call(this,G.WHITE,4,4)||this;return s._origWidth=t.orig.width,s._origHeight=t.orig.height,s._width=s._origWidth,s._height=s._origHeight,s._leftWidth=n,s._rightWidth=o,s._topHeight=i,s._bottomHeight=a,s.texture=t,s}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype.updateHorizontalVertices=function(){var t=this.vertices,n=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*n,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*n,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices,n=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*n,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*n,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,n=this._width>t?1:this._width/t,i=this._topHeight+this._bottomHeight,o=this._height>i?1:this._height/i,a=Math.min(n,o);return a},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topHeight",{get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),e.prototype._refresh=function(){var t=this.texture,n=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var i=1/this._origWidth,o=1/this._origHeight;n[0]=n[8]=n[16]=n[24]=0,n[1]=n[3]=n[5]=n[7]=0,n[6]=n[14]=n[22]=n[30]=1,n[25]=n[27]=n[29]=n[31]=1,n[2]=n[10]=n[18]=n[26]=i*this._leftWidth,n[4]=n[12]=n[20]=n[28]=1-i*this._rightWidth,n[9]=n[11]=n[13]=n[15]=o*this._topHeight,n[17]=n[19]=n[21]=n[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},e})(Am);/*!
 * @pixi/sprite-animated - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var to=function(r,e){return to=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])},to(r,e)};function Sm(r,e){to(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){Sm(e,r);function e(t,n){n===void 0&&(n=!0);var i=r.call(this,t[0]instanceof G?t[0]:t[0].texture)||this;return i._textures=null,i._durations=null,i._autoUpdate=n,i._isConnectedToTicker=!1,i.animationSpeed=1,i.loop=!0,i.updateAnchor=!1,i.onComplete=null,i.onFrameChange=null,i.onLoop=null,i._currentTime=0,i._playing=!1,i._previousFrame=null,i.textures=t,i}return e.prototype.stop=function(){!this._playing||(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Ct.shared.add(this.update,this,Jt.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var n=this.currentFrame;this._currentTime=t,n!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var n=this.currentFrame;this._currentTime=t,n!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(!!this._playing){var n=this.animationSpeed*t,i=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=n/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var a=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*a,this._currentTime+=a;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=n;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i?this.onLoop():this.animationSpeed<0&&this.currentFrame>i&&this.onLoop()),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(t){this.stop(),r.prototype.destroy.call(this,t),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var n=[],i=0;i<t.length;++i)n.push(G.from(t[i]));return new e(n)},e.fromImages=function(t){for(var n=[],i=0;i<t.length;++i)n.push(G.from(t[i]));return new e(n)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof G)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var n=0;n<t.length;n++)this._textures.push(t[n].texture),this._durations.push(t[n].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Ct.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Ct.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e})(Pe);/*!
 * pixi.js - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ie.registerPlugin("accessibility",Qd);ie.registerPlugin("extract",bv);ie.registerPlugin("interaction",op);ie.registerPlugin("particle",l_);ie.registerPlugin("prepare",k_);ie.registerPlugin("batch",vv);ie.registerPlugin("tilingSprite",W_);$t.registerPlugin(sm);$t.registerPlugin(Mv);$t.registerPlugin(e_);$t.registerPlugin(a_);$t.registerPlugin(X_);xi.registerPlugin(tp);xi.registerPlugin(Sv);function Om(r){if(!!r&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function Ve(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),o=Math.round(r.b),a=r.a,s=Math.round(r.h),u=r.s.toFixed(1),l=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=r.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+o+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+o+","+a+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+o+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+o+","+a+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+o+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+o+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+s+",s:"+u+",v:"+l+"}";if(t==="HSVA_OBJ")return"{h:"+s+",s:"+u+",v:"+l+",a:"+a+"}"}return"unknown format"}var El=Array.prototype.forEach,yr=Array.prototype.slice,C={BREAK:{},extend:function(e){return this.each(yr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(yr.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=yr.call(arguments);return function(){for(var t=yr.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(El&&e.forEach&&e.forEach===El)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,o=void 0;for(i=0,o=e.length;i<o;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var a in e)if(t.call(n,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var o=this,a=arguments;function s(){i=null,n||e.apply(o,a)}var u=n||!i;clearTimeout(i),i=setTimeout(s,t),u&&e.apply(o,a)}},toArray:function(e){return e.toArray?e.toArray():yr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Nm=[{litmus:C.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Ve},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Ve},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Ve},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Ve}}},{litmus:C.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:C.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:C.isObject,conversions:{RGBA_OBJ:{read:function(e){return C.isNumber(e.r)&&C.isNumber(e.g)&&C.isNumber(e.b)&&C.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return C.isNumber(e.r)&&C.isNumber(e.g)&&C.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return C.isNumber(e.h)&&C.isNumber(e.s)&&C.isNumber(e.v)&&C.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return C.isNumber(e.h)&&C.isNumber(e.s)&&C.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],xr=void 0,dn=void 0,eo=function(){dn=!1;var e=arguments.length>1?C.toArray(arguments):arguments[0];return C.each(Nm,function(t){if(t.litmus(e))return C.each(t.conversions,function(n,i){if(xr=n.read(e),dn===!1&&xr!==!1)return dn=xr,xr.conversionName=i,xr.conversion=n,C.BREAK}),C.BREAK}),dn},wl=void 0,pn={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),a=n*(1-t),s=n*(1-o*t),u=n*(1-(1-o)*t),l=[[n,u,a],[s,n,a],[a,n,u],[a,s,n],[u,a,n],[n,a,s]][i];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),o=Math.max(e,t,n),a=o-i,s=void 0,u=void 0;if(o!==0)u=a/o;else return{h:NaN,s:0,v:0};return e===o?s=(t-n)/a:t===o?s=2+(n-e)/a:s=4+(e-t)/a,s/=6,s<0&&(s+=1),{h:s*360,s:u,v:o/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(wl=t*8)|e&~(255<<wl)}},Fm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Gt=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Bt=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),se=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var o=Object.getPrototypeOf(e);return o===null?void 0:r(o,t,n)}else{if("value"in i)return i.value;var a=i.get;return a===void 0?void 0:a.call(n)}},ue=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},le=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},bt=function(){function r(){if(Gt(this,r),this.__state=eo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Bt(r,[{key:"toString",value:function(){return Ve(this)}},{key:"toHexString",value:function(){return Ve(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function ro(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(bt.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(bt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function no(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(bt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(bt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}bt.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=pn.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")C.extend(r.__state,pn.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};bt.recalculateHSV=function(r){var e=pn.rgb_to_hsv(r.r,r.g,r.b);C.extend(r.__state,{s:e.s,v:e.v}),C.isNaN(e.h)?C.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};bt.COMPONENTS=["r","g","b","h","s","v","hex","a"];ro(bt.prototype,"r",2);ro(bt.prototype,"g",1);ro(bt.prototype,"b",0);no(bt.prototype,"h");no(bt.prototype,"s");no(bt.prototype,"v");Object.defineProperty(bt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(bt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=pn.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Re=function(){function r(e,t){Gt(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Bt(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),Um={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Il={};C.each(Um,function(r,e){C.each(r,function(t){Il[t]=e})});var Lm=/(\d+(\.\d+)?)px/;function Wt(r){if(r==="0"||C.isUndefined(r))return 0;var e=r.match(Lm);return C.isNull(e)?0:parseFloat(e[1])}var b={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,o=t;C.isUndefined(o)&&(o=!0),C.isUndefined(i)&&(i=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var o=n||{},a=Il[t];if(!a)throw new Error("Event type "+t+" not supported.");var s=document.createEvent(a);switch(a){case"MouseEvents":{var u=o.x||o.clientX||0,l=o.y||o.clientY||0;s.initMouseEvent(t,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,u,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=s.initKeyboardEvent||s.initKeyEvent;C.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break}default:{s.initEvent(t,o.bubbles||!1,o.cancelable||!0);break}}C.defaults(s,i),e.dispatchEvent(s)},bind:function(e,t,n,i){var o=i||!1;return e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,n),b},unbind:function(e,t,n,i){var o=i||!1;return e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n),b},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return b},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return b},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Wt(t["border-left-width"])+Wt(t["border-right-width"])+Wt(t["padding-left"])+Wt(t["padding-right"])+Wt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Wt(t["border-top-width"])+Wt(t["border-bottom-width"])+Wt(t["padding-top"])+Wt(t["padding-bottom"])+Wt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Pl=function(r){ue(e,r);function e(t,n){Gt(this,e);var i=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function a(){o.setValue(!o.__prev)}return b.bind(i.__checkbox,"change",a,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Bt(e,[{key:"setValue",value:function(n){var i=se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Re),Gm=function(r){ue(e,r);function e(t,n,i){Gt(this,e);var o=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i,s=o;if(o.__select=document.createElement("select"),C.isArray(a)){var u={};C.each(a,function(l){u[l]=l}),a=u}return C.each(a,function(l,h){var f=document.createElement("option");f.innerHTML=h,f.setAttribute("value",l),s.__select.appendChild(f)}),o.updateDisplay(),b.bind(o.__select,"change",function(){var l=this.options[this.selectedIndex].value;s.setValue(l)}),o.domElement.appendChild(o.__select),o}return Bt(e,[{key:"setValue",value:function(n){var i=se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return b.isActive(this.__select)?this:(this.__select.value=this.getValue(),se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Re),Bm=function(r){ue(e,r);function e(t,n){Gt(this,e);var i=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i;function a(){o.setValue(o.__input.value)}function s(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),b.bind(i.__input,"keyup",a),b.bind(i.__input,"change",a),b.bind(i.__input,"blur",s),b.bind(i.__input,"keydown",function(u){u.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Bt(e,[{key:"updateDisplay",value:function(){return b.isActive(this.__input)||(this.__input.value=this.getValue()),se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Re);function Rl(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Al=function(r){ue(e,r);function e(t,n,i){Gt(this,e);var o=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=i||{};return o.__min=a.min,o.__max=a.max,o.__step=a.step,C.isUndefined(o.__step)?o.initialValue===0?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=Rl(o.__impliedStep),o}return Bt(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!=0&&(i=Math.round(i/this.__step)*this.__step),se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Rl(n),this}}]),e}(Re);function Mm(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var vn=function(r){ue(e,r);function e(t,n,i){Gt(this,e);var o=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));o.__truncationSuspended=!1;var a=o,s=void 0;function u(){var p=parseFloat(a.__input.value);C.isNaN(p)||a.setValue(p)}function l(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function h(){l()}function f(p){var v=s-p.clientY;a.setValue(a.getValue()+v*a.__impliedStep),s=p.clientY}function c(){b.unbind(window,"mousemove",f),b.unbind(window,"mouseup",c),l()}function d(p){b.bind(window,"mousemove",f),b.bind(window,"mouseup",c),s=p.clientY}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),b.bind(o.__input,"change",u),b.bind(o.__input,"blur",h),b.bind(o.__input,"mousedown",d),b.bind(o.__input,"keydown",function(p){p.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,l())}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return Bt(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Mm(this.getValue(),this.__precision),se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Al);function Sl(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var io=function(r){ue(e,r);function e(t,n,i,o,a){Gt(this,e);var s=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:o,step:a})),u=s;s.__background=document.createElement("div"),s.__foreground=document.createElement("div"),b.bind(s.__background,"mousedown",l),b.bind(s.__background,"touchstart",c),b.addClass(s.__background,"slider"),b.addClass(s.__foreground,"slider-fg");function l(v){document.activeElement.blur(),b.bind(window,"mousemove",h),b.bind(window,"mouseup",f),h(v)}function h(v){v.preventDefault();var _=u.__background.getBoundingClientRect();return u.setValue(Sl(v.clientX,_.left,_.right,u.__min,u.__max)),!1}function f(){b.unbind(window,"mousemove",h),b.unbind(window,"mouseup",f),u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}function c(v){v.touches.length===1&&(b.bind(window,"touchmove",d),b.bind(window,"touchend",p),d(v))}function d(v){var _=v.touches[0].clientX,m=u.__background.getBoundingClientRect();u.setValue(Sl(_,m.left,m.right,u.__min,u.__max))}function p(){b.unbind(window,"touchmove",d),b.unbind(window,"touchend",p),u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}return s.updateDisplay(),s.__background.appendChild(s.__foreground),s.domElement.appendChild(s.__background),s}return Bt(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",se(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Al),Ol=function(r){ue(e,r);function e(t,n,i){Gt(this,e);var o=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),a=o;return o.__button=document.createElement("div"),o.__button.innerHTML=i===void 0?"Fire":i,b.bind(o.__button,"click",function(s){return s.preventDefault(),a.fire(),!1}),b.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return Bt(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Re),oo=function(r){ue(e,r);function e(t,n){Gt(this,e);var i=le(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new bt(i.getValue()),i.__temp=new bt(0);var o=i;i.domElement=document.createElement("div"),b.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",b.bind(i.__input,"keydown",function(v){v.keyCode===13&&f.call(this)}),b.bind(i.__input,"blur",f),b.bind(i.__selector,"mousedown",function(){b.addClass(this,"drag").bind(window,"mouseup",function(){b.removeClass(o.__selector,"drag")})}),b.bind(i.__selector,"touchstart",function(){b.addClass(this,"drag").bind(window,"touchend",function(){b.removeClass(o.__selector,"drag")})});var a=document.createElement("div");C.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),C.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),C.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),C.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),C.extend(a.style,{width:"100%",height:"100%",background:"none"}),Nl(a,"top","rgba(0,0,0,0)","#000"),C.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),km(i.__hue_field),C.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),b.bind(i.__saturation_field,"mousedown",s),b.bind(i.__saturation_field,"touchstart",s),b.bind(i.__field_knob,"mousedown",s),b.bind(i.__field_knob,"touchstart",s),b.bind(i.__hue_field,"mousedown",u),b.bind(i.__hue_field,"touchstart",u);function s(v){d(v),b.bind(window,"mousemove",d),b.bind(window,"touchmove",d),b.bind(window,"mouseup",l),b.bind(window,"touchend",l)}function u(v){p(v),b.bind(window,"mousemove",p),b.bind(window,"touchmove",p),b.bind(window,"mouseup",h),b.bind(window,"touchend",h)}function l(){b.unbind(window,"mousemove",d),b.unbind(window,"touchmove",d),b.unbind(window,"mouseup",l),b.unbind(window,"touchend",l),c()}function h(){b.unbind(window,"mousemove",p),b.unbind(window,"touchmove",p),b.unbind(window,"mouseup",h),b.unbind(window,"touchend",h),c()}function f(){var v=eo(this.value);v!==!1?(o.__color.__state=v,o.setValue(o.__color.toOriginal())):this.value=o.__color.toString()}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.__color.toOriginal())}i.__saturation_field.appendChild(a),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function d(v){v.type.indexOf("touch")===-1&&v.preventDefault();var _=o.__saturation_field.getBoundingClientRect(),m=v.touches&&v.touches[0]||v,g=m.clientX,T=m.clientY,I=(g-_.left)/(_.right-_.left),x=1-(T-_.top)/(_.bottom-_.top);return x>1?x=1:x<0&&(x=0),I>1?I=1:I<0&&(I=0),o.__color.v=x,o.__color.s=I,o.setValue(o.__color.toOriginal()),!1}function p(v){v.type.indexOf("touch")===-1&&v.preventDefault();var _=o.__hue_field.getBoundingClientRect(),m=v.touches&&v.touches[0]||v,g=m.clientY,T=1-(g-_.top)/(_.bottom-_.top);return T>1?T=1:T<0&&(T=0),o.__color.h=T*360,o.setValue(o.__color.toOriginal()),!1}return i}return Bt(e,[{key:"updateDisplay",value:function(){var n=eo(this.getValue());if(n!==!1){var i=!1;C.each(bt.COMPONENTS,function(s){if(!C.isUndefined(n[s])&&!C.isUndefined(this.__color.__state[s])&&n[s]!==this.__color.__state[s])return i=!0,{}},this),i&&C.extend(this.__color.__state,n)}C.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var o=this.__color.v<.5||this.__color.s>.5?255:0,a=255-o;C.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+o+","+o+","+o+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Nl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),C.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+o+","+o+","+o+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Re),Dm=["-moz-","-o-","-webkit-","-ms-",""];function Nl(r,e,t,n){r.style.background="",C.each(Dm,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function km(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Hm={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var o=n.getElementsByTagName("head")[0];try{o.appendChild(i)}catch{}}},Xm=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,jm=function(e,t){var n=e[t];return C.isArray(arguments[2])||C.isObject(arguments[2])?new Gm(e,t,arguments[2]):C.isNumber(n)?C.isNumber(arguments[2])&&C.isNumber(arguments[3])?C.isNumber(arguments[4])?new io(e,t,arguments[2],arguments[3],arguments[4]):new io(e,t,arguments[2],arguments[3]):C.isNumber(arguments[4])?new vn(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new vn(e,t,{min:arguments[2],max:arguments[3]}):C.isString(n)?new Bm(e,t):C.isFunction(n)?new Ol(e,t,""):C.isBoolean(n)?new Pl(e,t):null};function zm(r){setTimeout(r,1e3/60)}var Vm=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||zm,$m=function(){function r(){Gt(this,r),this.backgroundElement=document.createElement("div"),C.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),b.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),C.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;b.bind(this.backgroundElement,"click",function(){e.hide()})}return Bt(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),C.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",b.unbind(t.domElement,"webkitTransitionEnd",i),b.unbind(t.domElement,"transitionend",i),b.unbind(t.domElement,"oTransitionEnd",i)};b.bind(this.domElement,"webkitTransitionEnd",n),b.bind(this.domElement,"transitionend",n),b.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-b.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-b.getHeight(this.domElement)/2+"px"}}]),r}(),Wm=Om(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Hm.inject(Wm);var Fl="dg",Ul=72,Ll=20,br="Default",Tr=function(){try{return!!window.localStorage}catch{return!1}}(),Cr=void 0,Gl=!0,$e=void 0,ao=!1,Bl=[],rt=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),b.addClass(this.domElement,Fl),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=C.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=C.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),C.isUndefined(n.load)?n.load={preset:br}:n.preset&&(n.load.preset=n.preset),C.isUndefined(n.parent)&&n.hideable&&Bl.push(this),n.resizable=C.isUndefined(n.parent)&&n.resizable,n.autoPlace&&C.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Tr&&localStorage.getItem(We(this,"isLocal"))==="true",o=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(c){t.parent?t.getRoot().preset=c:n.load.preset=c,Zm(this),t.revert()}},width:{get:function(){return n.width},set:function(c){n.width=c,ho(t,c)}},name:{get:function(){return n.name},set:function(c){n.name=c,a&&(a.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(c){n.closed=c,n.closed?b.addClass(t.__ul,r.CLASS_CLOSED):b.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=c?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(c){Tr&&(i=c,c?b.bind(window,"unload",o):b.unbind(window,"unload",o),localStorage.setItem(We(t,"isLocal"),c))}}}),C.isUndefined(n.parent)){if(this.closed=n.closed||!1,b.addClass(this.domElement,r.CLASS_MAIN),b.makeSelectable(this.domElement,!1),Tr&&i){t.useLocalStorage=!0;var s=localStorage.getItem(We(this,"gui"));s&&(n.load=JSON.parse(s))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,b.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(b.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(b.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),b.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var u=document.createTextNode(n.name);b.addClass(u,"controller-name"),a=so(t,u);var l=function(c){return c.preventDefault(),t.closed=!t.closed,!1};b.addClass(this.__ul,r.CLASS_CLOSED),b.addClass(a,"title"),b.bind(a,"click",l),n.closed||(this.closed=!1)}n.autoPlace&&(C.isUndefined(n.parent)&&(Gl&&($e=document.createElement("div"),b.addClass($e,Fl),b.addClass($e,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild($e),Gl=!1),$e.appendChild(this.domElement),b.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||ho(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},b.bind(window,"resize",this.__resizeHandler),b.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),b.bind(this.__ul,"transitionend",this.__resizeHandler),b.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Km(this),o=function(){Tr&&localStorage.getItem(We(t,"isLocal"))==="true"&&localStorage.setItem(We(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=o;function h(){var f=t.getRoot();f.width+=1,C.defer(function(){f.width-=1})}n.parent||h()};rt.toggleHide=function(){ao=!ao,C.each(Bl,function(r){r.domElement.style.display=ao?"none":""})};rt.CLASS_AUTO_PLACE="a";rt.CLASS_AUTO_PLACE_CONTAINER="ac";rt.CLASS_MAIN="main";rt.CLASS_CONTROLLER_ROW="cr";rt.CLASS_TOO_TALL="taller-than-window";rt.CLASS_CLOSED="closed";rt.CLASS_CLOSE_BUTTON="close-button";rt.CLASS_CLOSE_TOP="close-top";rt.CLASS_CLOSE_BOTTOM="close-bottom";rt.CLASS_DRAG="drag";rt.DEFAULT_WIDTH=245;rt.TEXT_CLOSED="Close Controls";rt.TEXT_OPEN="Open Controls";rt._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===Ul||r.keyCode===Ul)&&rt.toggleHide()};b.bind(window,"keydown",rt._keydownHandler,!1);C.extend(rt.prototype,{add:function(e,t){return Er(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Er(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;C.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&$e.removeChild(this.domElement);var e=this;C.each(this.__folders,function(t){e.removeFolder(t)}),b.unbind(window,"keydown",rt._keydownHandler,!1),Ml(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new rt(t);this.__folders[e]=n;var i=so(this,n.domElement);return b.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Ml(e);var t=this;C.each(e.__folders,function(n){e.removeFolder(n)}),C.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=b.getOffset(e.__ul).top,n=0;C.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=b.getHeight(i))}),window.innerHeight-t-Ll<n?(b.addClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Ll+"px"):(b.removeClass(e.domElement,rt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&C.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:C.debounce(function(){this.onResize()},50),remember:function(){if(C.isUndefined(Cr)&&(Cr=new $m,Cr.domElement.innerHTML=Xm),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;C.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&qm(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&ho(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=_n(this)),e.folders={},C.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=_n(this),uo(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[br]=_n(this,!0)),this.load.remembered[e]=_n(this),this.preset=e,lo(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){C.each(this.__controllers,function(t){this.getRoot().load.remembered?Dl(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),C.each(this.__folders,function(t){t.revert(t)}),e||uo(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Hl(this.__listening)},updateDisplay:function(){C.each(this.__controllers,function(e){e.updateDisplay()}),C.each(this.__folders,function(e){e.updateDisplay()})}});function so(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function Ml(r){b.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&b.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function uo(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Ym(r,e,t){if(t.__li=e,t.__gui=r,C.extend(t,{options:function(a){if(arguments.length>1){var s=t.__li.nextElementSibling;return t.remove(),Er(r,t.object,t.property,{before:s,factoryArgs:[C.toArray(arguments)]})}if(C.isArray(a)||C.isObject(a)){var u=t.__li.nextElementSibling;return t.remove(),Er(r,t.object,t.property,{before:u,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof io){var n=new vn(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});C.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(o){var a=t[o],s=n[o];t[o]=n[o]=function(){var u=Array.prototype.slice.call(arguments);return s.apply(n,u),a.apply(t,u)}}),b.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof vn){var i=function(a){if(C.isNumber(t.__min)&&C.isNumber(t.__max)){var s=t.__li.firstElementChild.firstElementChild.innerHTML,u=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=Er(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(s),u&&l.listen(),l}return a};t.min=C.compose(i,t.min),t.max=C.compose(i,t.max)}else t instanceof Pl?(b.bind(e,"click",function(){b.fakeEvent(t.__checkbox,"click")}),b.bind(t.__checkbox,"click",function(o){o.stopPropagation()})):t instanceof Ol?(b.bind(e,"click",function(){b.fakeEvent(t.__button,"click")}),b.bind(e,"mouseover",function(){b.addClass(t.__button,"hover")}),b.bind(e,"mouseout",function(){b.removeClass(t.__button,"hover")})):t instanceof oo&&(b.addClass(e,"color"),t.updateDisplay=C.compose(function(o){return e.style.borderLeftColor=t.__color.toString(),o},t.updateDisplay),t.updateDisplay());t.setValue=C.compose(function(o){return r.getRoot().__preset_select&&t.isModified()&&uo(r.getRoot(),!0),o},t.setValue)}function Dl(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var o=t.load.remembered,a=void 0;if(o[r.preset])a=o[r.preset];else if(o[br])a=o[br];else return;if(a[n]&&a[n][e.property]!==void 0){var s=a[n][e.property];e.initialValue=s,e.setValue(s)}}}}function Er(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new oo(e,t);else{var o=[e,t].concat(n.factoryArgs);i=jm.apply(r,o)}n.before instanceof Re&&(n.before=n.before.__li),Dl(r,i),b.addClass(i.domElement,"c");var a=document.createElement("span");b.addClass(a,"property-name"),a.innerHTML=i.property;var s=document.createElement("div");s.appendChild(a),s.appendChild(i.domElement);var u=so(r,s,n.before);return b.addClass(u,rt.CLASS_CONTROLLER_ROW),i instanceof oo?b.addClass(u,"color"):b.addClass(u,Fm(i.getValue())),Ym(r,u,i),r.__controllers.push(i),i}function We(r,e){return document.location.href+"."+e}function lo(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function kl(r,e){e.style.display=r.useLocalStorage?"block":"none"}function qm(r){var e=r.__save_row=document.createElement("li");b.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),b.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",b.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",b.addClass(n,"button"),b.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",b.addClass(i,"button"),b.addClass(i,"save-as");var o=document.createElement("span");o.innerHTML="Revert",b.addClass(o,"button"),b.addClass(o,"revert");var a=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?C.each(r.load.remembered,function(f,c){lo(r,c,c===r.preset)}):lo(r,br,!1),b.bind(a,"change",function(){for(var f=0;f<r.__preset_select.length;f++)r.__preset_select[f].innerHTML=r.__preset_select[f].value;r.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(o),Tr){var s=document.getElementById("dg-local-explain"),u=document.getElementById("dg-local-storage"),l=document.getElementById("dg-save-locally");l.style.display="block",localStorage.getItem(We(r,"isLocal"))==="true"&&u.setAttribute("checked","checked"),kl(r,s),b.bind(u,"change",function(){r.useLocalStorage=!r.useLocalStorage,kl(r,s)})}var h=document.getElementById("dg-new-constructor");b.bind(h,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&Cr.hide()}),b.bind(t,"click",function(){h.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Cr.show(),h.focus(),h.select()}),b.bind(n,"click",function(){r.save()}),b.bind(i,"click",function(){var f=prompt("Enter a new preset name.");f&&r.saveAs(f)}),b.bind(o,"click",function(){r.revert()})}function Km(r){var e=void 0;r.__resize_handle=document.createElement("div"),C.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(o){return o.preventDefault(),r.width+=e-o.clientX,r.onResize(),e=o.clientX,!1}function n(){b.removeClass(r.__closeButton,rt.CLASS_DRAG),b.unbind(window,"mousemove",t),b.unbind(window,"mouseup",n)}function i(o){return o.preventDefault(),e=o.clientX,b.addClass(r.__closeButton,rt.CLASS_DRAG),b.bind(window,"mousemove",t),b.bind(window,"mouseup",n),!1}b.bind(r.__resize_handle,"mousedown",i),b.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function ho(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function _n(r,e){var t={};return C.each(r.__rememberedObjects,function(n,i){var o={},a=r.__rememberedObjectIndecesToControllers[i];C.each(a,function(s,u){o[u]=e?s.initialValue:s.getValue()}),t[i]=o}),t}function Zm(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function Hl(r){r.length!==0&&Vm.call(window,function(){Hl(r)}),C.each(r,function(e){e.updateDisplay()})}var X0=rt;/*!
 * @pixi/filter-adjustment - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fo=function(r,e){return fo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},fo(r,e)};function Jm(r,e){fo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Qm=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,tg=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(r){Jm(e,r);function e(t){var n=r.call(this,Qm,tg)||this;return n.gamma=1,n.saturation=1,n.contrast=1,n.brightness=1,n.red=1,n.green=1,n.blue=1,n.alpha=1,Object.assign(n,t),n}return e.prototype.apply=function(t,n,i,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},e})(k);/*!
 * @pixi/filter-kawase-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var co=function(r,e){return co=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},co(r,e)};function eg(r,e){co(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var rg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ng=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,ig=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,mn=function(r){eg(e,r);function e(t,n,i){t===void 0&&(t=4),n===void 0&&(n=3),i===void 0&&(i=!1);var o=r.call(this,rg,i?ig:ng)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new q,o.pixelSize=1,o._clamp=i,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=n),o}return e.prototype.apply=function(t,n,i,o){var a=this._pixelSize.x/n._frame.width,s=this._pixelSize.y/n._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,n,i,o);else{for(var l=t.getFilterTexture(),h=n,f=l,c=void 0,d=this._quality-1,p=0;p<d;p++)u=this._kernels[p]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,h,f,1),c=h,h=f,f=c;u=this._kernels[d]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,h,i,o),t.returnFilterTexture(l)}},e.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,n){return t+n+.5},0))},e.prototype._generateKernels=function(){var t=this._blur,n=this._quality,i=[t];if(t>0)for(var o=t,a=t/n,s=1;s<n;s++)o-=a,i.push(o);this._kernels=i,this._updatePadding()},Object.defineProperty(e.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof q?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-advanced-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var po=function(r,e){return po=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},po(r,e)};function Xl(r,e){po(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var jl=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,og=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,ag=function(r){Xl(e,r);function e(t){t===void 0&&(t=.5);var n=r.call(this,jl,og)||this;return n.threshold=t,n}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),e}(k),sg=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(r){Xl(e,r);function e(t){var n=r.call(this,jl,sg)||this;n.bloomScale=1,n.brightness=1,n._resolution=N.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var i=Object.assign(e.defaults,t);n.bloomScale=i.bloomScale,n.brightness=i.brightness;var o=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,l=i.resolution;return n._extractFilter=new ag(i.threshold),n._extractFilter.resolution=l,n._blurFilter=o?new mn(o):new mn(a,s),n.pixelSize=u,n.resolution=l,n}return e.prototype.apply=function(t,n,i,o,a){var s=t.getFilterTexture();this._extractFilter.apply(t,n,s,1,a);var u=t.getFilterTexture();this._blurFilter.apply(t,s,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,n,i,o),t.returnFilterTexture(u),t.returnFilterTexture(s)},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:N.FILTER_RESOLUTION},e})(k);/*!
 * @pixi/filter-ascii - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vo=function(r,e){return vo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},vo(r,e)};function ug(r,e){vo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var lg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hg=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(r){ug(e,r);function e(t){t===void 0&&(t=8);var n=r.call(this,lg,hg)||this;return n.size=t,n}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-bevel - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _o=function(r,e){return _o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},_o(r,e)};function fg(r,e){_o(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var cg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,dg=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(r){fg(e,r);function e(t){var n=r.call(this,cg,dg)||this;return n._thickness=2,n._angle=0,n.uniforms.lightColor=new Float32Array(3),n.uniforms.shadowColor=new Float32Array(3),Object.assign(n,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),n.padding=1,n}return e.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._angle/pe},set:function(t){this._angle=t*pe,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightColor",{get:function(){return Nt(this.uniforms.lightColor)},set:function(t){Tt(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowColor",{get:function(){return Nt(this.uniforms.shadowColor)},set:function(t){Tt(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var mo=function(r,e){return mo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},mo(r,e)};function pg(r,e){mo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){pg(e,r);function e(t,n,i,o){t===void 0&&(t=2),n===void 0&&(n=4),i===void 0&&(i=N.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this,s,u;return typeof t=="number"?(s=t,u=t):t instanceof q?(s=t.x,u=t.y):Array.isArray(t)&&(s=t[0],u=t[1]),a.blurXFilter=new fn(!0,s,n,i,o),a.blurYFilter=new fn(!1,u,n,i,o),a.blurYFilter.blendMode=L.SCREEN,a.defaultFilter=new hm,a}return e.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this.defaultFilter.apply(t,n,i,o),this.blurXFilter.apply(t,n,a,1),this.blurYFilter.apply(t,a,i,0),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-bulge-pinch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var go=function(r,e){return go=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},go(r,e)};function vg(r,e){go(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _g=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,mg=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(r){vg(e,r);function e(t){var n=r.call(this,_g,mg)||this;return n.uniforms.dimensions=new Float32Array(2),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),e.defaults={center:[.5,.5],radius:100,strength:1},e})(k);/*!
 * @pixi/filter-color-map - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var yo=function(r,e){return yo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},yo(r,e)};function gg(r,e){yo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var yg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,xg=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(r){gg(e,r);function e(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=1);var o=r.call(this,yg,xg)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=n,o.mix=i,o.colorMap=t,o}return e.prototype.apply=function(t,n,i,o){this.uniforms._mix=this.mix,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var n;!t||(t instanceof G||(t=G.from(t)),((n=t)===null||n===void 0?void 0:n.baseTexture)&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=Ht.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?Rt.NEAREST:Rt.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=Ht.OFF,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},enumerable:!1,configurable:!0}),e.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},e.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),r.prototype.destroy.call(this)},e})(k);/*!
 * @pixi/filter-color-overlay - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xo=function(r,e){return xo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},xo(r,e)};function bg(r,e){xo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Tg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Cg=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(r){bg(e,r);function e(t,n){t===void 0&&(t=0),n===void 0&&(n=1);var i=r.call(this,Tg,Cg)||this;return i._color=0,i._alpha=1,i.uniforms.color=new Float32Array(3),i.color=t,i.alpha=n,i}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.color;typeof t=="number"?(Tt(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._color=Nt(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var bo=function(r,e){return bo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},bo(r,e)};function Eg(r,e){bo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ig=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(r){Eg(e,r);function e(t,n,i){t===void 0&&(t=16711680),n===void 0&&(n=0),i===void 0&&(i=.4);var o=r.call(this,wg,Ig)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=n,o.epsilon=i,o}return Object.defineProperty(e.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var n=this.uniforms.originalColor;typeof t=="number"?(Tt(t,n),this._originalColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._originalColor=Nt(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var n=this.uniforms.newColor;typeof t=="number"?(Tt(t,n),this._newColor=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],this._newColor=Nt(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-convolution - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var To=function(r,e){return To=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},To(r,e)};function Pg(r,e){To(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Rg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ag=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(r){Pg(e,r);function e(t,n,i){n===void 0&&(n=200),i===void 0&&(i=200);var o=r.call(this,Rg,Ag)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=n,o.height=i,o}return Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var n=this;t.forEach(function(i,o){n.uniforms.matrix[o]=i})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-cross-hatch - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Co=function(r,e){return Co=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Co(r,e)};function Sg(r,e){Co(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Og=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ng=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(r){Sg(e,r);function e(){return r.call(this,Og,Ng)||this}return e})(k);/*!
 * @pixi/filter-crt - v4.1.6
 * Compiled Thu, 03 Feb 2022 14:30:04 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Eo=function(r,e){return Eo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Eo(r,e)};function Fg(r,e){Eo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ug=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Lg=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(r){Fg(e,r);function e(t){var n=r.call(this,Ug,Lg)||this;return n.time=0,n.seed=0,n.uniforms.dimensions=new Float32Array(2),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},e})(k);/*!
 * @pixi/filter-dot - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var wo=function(r,e){return wo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},wo(r,e)};function Gg(r,e){wo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Bg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Mg=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(r){Gg(e,r);function e(t,n){t===void 0&&(t=1),n===void 0&&(n=5);var i=r.call(this,Bg,Mg)||this;return i.scale=t,i.angle=n,i}return Object.defineProperty(e.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-drop-shadow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Io=function(r,e){return Io=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Io(r,e)};function Dg(r,e){Io(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var gn=function(){return gn=Object.assign||function(e){for(var t=arguments,n,i=1,o=arguments.length;i<o;i++){n=t[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},gn.apply(this,arguments)},kg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Hg=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`;(function(r){Dg(e,r);function e(t){var n=r.call(this)||this;n.angle=45,n._distance=5,n._resolution=N.FILTER_RESOLUTION;var i=t?gn(gn({},e.defaults),t):e.defaults,o=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,l=i.resolution;n._tintFilter=new k(kg,Hg),n._tintFilter.uniforms.color=new Float32Array(4),n._tintFilter.uniforms.shift=new q,n._tintFilter.resolution=l,n._blurFilter=o?new mn(o):new mn(a,s),n.pixelSize=u,n.resolution=l;var h=i.shadowOnly,f=i.rotation,c=i.distance,d=i.alpha,p=i.color;return n.shadowOnly=h,n.rotation=f,n.distance=c,n.alpha=d,n.color=p,n._updatePadding(),n}return e.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this._tintFilter.apply(t,n,a,1),this._blurFilter.apply(t,a,i,o),this.shadowOnly!==!0&&t.applyFilter(this,n,i,0),t.returnFilterTexture(a)},e.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},e.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.angle/pe},set:function(t){this.angle=t*pe,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return Nt(this._tintFilter.uniforms.color)},set:function(t){Tt(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:N.FILTER_RESOLUTION},e})(k);/*!
 * @pixi/filter-emboss - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Po=function(r,e){return Po=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Po(r,e)};function Xg(r,e){Po(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var jg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,zg=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(r){Xg(e,r);function e(t){t===void 0&&(t=5);var n=r.call(this,jg,zg)||this;return n.strength=t,n}return Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-glitch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ro=function(r,e){return Ro=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ro(r,e)};function Vg(r,e){Ro(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var $g=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Wg=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(r){Vg(e,r);function e(t){var n=r.call(this,$g,Wg)||this;return n.offset=100,n.fillMode=e.TRANSPARENT,n.average=!1,n.seed=0,n.minSize=8,n.sampleSize=512,n._slices=0,n._offsets=new Float32Array(1),n._sizes=new Float32Array(1),n._direction=-1,n.uniforms.dimensions=new Float32Array(2),n._canvas=document.createElement("canvas"),n._canvas.width=4,n._canvas.height=n.sampleSize,n.texture=G.from(n._canvas,{scaleMode:Rt.NEAREST}),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,n,i,o)},e.prototype._randomizeSizes=function(){var t=this._sizes,n=this._slices-1,i=this.sampleSize,o=Math.min(this.minSize/i,.9/this._slices);if(this.average){for(var a=this._slices,s=1,u=0;u<n;u++){var l=s/(a-u),h=Math.max(l*(1-Math.random()*.6),o);t[u]=h,s-=h}t[n]=s}else{for(var s=1,f=Math.sqrt(1/this._slices),u=0;u<n;u++){var h=Math.max(f*s*Math.random(),o);t[u]=h,s-=h}t[n]=s}this.shuffle()},e.prototype.shuffle=function(){for(var t=this._sizes,n=this._slices-1,i=n;i>0;i--){var o=Math.random()*i>>0,a=t[i];t[i]=t[o],t[o]=a}},e.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},e.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},e.prototype.redraw=function(){var t=this.sampleSize,n=this.texture,i=this._canvas.getContext("2d");i.clearRect(0,0,8,t);for(var o,a=0,s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);var u=this._sizes[s]*t,l=o>0?o:0,h=o<0?-o:0;i.fillStyle="rgba("+l+", "+h+", 0, 1)",i.fillRect(0,a>>0,t,u+1>>0),a+=u}n.baseTexture.update(),this.uniforms.displacementMap=n},Object.defineProperty(e.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._sizes[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var n=Math.min(this._slices,t.length),i=0;i<n;i++)this._offsets[i]=t[i]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var n=t*pe;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},e.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},e.TRANSPARENT=0,e.ORIGINAL=1,e.LOOP=2,e.CLAMP=3,e.MIRROR=4,e})(k);/*!
 * @pixi/filter-glow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ao=function(r,e){return Ao=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ao(r,e)};function Yg(r,e){Ao(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var qg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Kg=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;(function(r){Yg(e,r);function e(t){var n=this,i=Object.assign({},e.defaults,t),o=i.outerStrength,a=i.innerStrength,s=i.color,u=i.knockout,l=i.quality,h=Math.round(i.distance);return n=r.call(this,qg,Kg.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/l/h).toFixed(7)).replace(/__DIST__/gi,h.toFixed(0)+".0"))||this,n.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(n,{color:s,outerStrength:o,innerStrength:a,padding:h,knockout:u}),n}return Object.defineProperty(e.prototype,"color",{get:function(){return Nt(this.uniforms.glowColor)},set:function(t){Tt(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),e.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},e})(k);/*!
 * @pixi/filter-godray - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var So=function(r,e){return So=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},So(r,e)};function Zg(r,e){So(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Jg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Qg=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,t0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(r){Zg(e,r);function e(t){var n=r.call(this,Jg,t0.replace("${perlin}",Qg))||this;n.parallel=!0,n.time=0,n._angle=0,n.uniforms.dimensions=new Float32Array(2);var i=Object.assign(e.defaults,t);return n._angleLight=new q,n.angle=i.angle,n.gain=i.gain,n.lacunarity=i.lacunarity,n.alpha=i.alpha,n.parallel=i.parallel,n.center=i.center,n.time=i.time,n}return e.prototype.apply=function(t,n,i,o){var a=n.filterFrame,s=a.width,u=a.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var n=t*pe;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),e.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},e})(k);/*!
 * @pixi/filter-motion-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Oo=function(r,e){return Oo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Oo(r,e)};function e0(r,e){Oo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var r0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,n0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){e0(e,r);function e(t,n,i){t===void 0&&(t=[0,0]),n===void 0&&(n=5),i===void 0&&(i=0);var o=r.call(this,r0,n0)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new ve(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=n,o.offset=i,o}return e.prototype.apply=function(t,n,i,o){var a=this.velocity,s=a.x,u=a.y;this.uniforms.uKernelSize=s!==0||u!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),e.prototype.setVelocity=function(t){if(Array.isArray(t)){var n=t[0],i=t[1];this._velocity.set(n,i)}else this._velocity.copyFrom(t)},e.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-multi-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var No=function(r,e){return No=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},No(r,e)};function i0(r,e){No(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var o0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,a0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(r){i0(e,r);function e(t,n,i){n===void 0&&(n=.05),i===void 0&&(i=t.length);var o=r.call(this,o0,a0.replace(/%maxColors%/g,i.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=n,o._maxColors=i,o.uniforms.originalColors=new Float32Array(i*3),o.uniforms.targetColors=new Float32Array(i*3),o.replacements=t,o}return Object.defineProperty(e.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var n=this.uniforms.originalColors,i=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");n[o*3]=-1;for(var a=0;a<o;a++){var s=t[a],u=s[0];typeof u=="number"?u=Tt(u):s[0]=Nt(u),n[a*3]=u[0],n[a*3+1]=u[1],n[a*3+2]=u[2];var l=s[1];typeof l=="number"?l=Tt(l):s[1]=Nt(l),i[a*3]=l[0],i[a*3+1]=l[1],i[a*3+2]=l[2]}this._replacements=t},enumerable:!1,configurable:!0}),e.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(e.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-old-film - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Fo=function(r,e){return Fo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Fo(r,e)};function s0(r,e){Fo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var u0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,l0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(r){s0(e,r);function e(t,n){n===void 0&&(n=0);var i=r.call(this,u0,l0)||this;return i.seed=0,i.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(i.seed=t,t=void 0):i.seed=n,Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.seed=this.seed,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},e})(k);/*!
 * @pixi/filter-outline - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Uo=function(r,e){return Uo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Uo(r,e)};function h0(r,e){Uo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var f0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,c0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(r){h0(e,r);function e(t,n,i){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=.1);var o=r.call(this,f0,c0.replace(/\$\{angleStep\}/,e.getAngleStep(i)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:n,quality:i}),o}return e.getAngleStep=function(t){var n=Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES);return(Math.PI*2/n).toFixed(7)},e.prototype.apply=function(t,n,i,o){this.uniforms.thickness[0]=this._thickness/n._frame.width,this.uniforms.thickness[1]=this._thickness/n._frame.height,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"color",{get:function(){return Nt(this.uniforms.outlineColor)},set:function(t){Tt(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),e.MIN_SAMPLES=1,e.MAX_SAMPLES=100,e})(k);/*!
 * @pixi/filter-pixelate - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Lo=function(r,e){return Lo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Lo(r,e)};function d0(r,e){Lo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var p0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,v0=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`,j0=function(r){d0(e,r);function e(t){t===void 0&&(t=10);var n=r.call(this,p0,v0)||this;return n.size=t,n}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),e}(k);/*!
 * @pixi/filter-radial-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Go=function(r,e){return Go=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Go(r,e)};function _0(r,e){Go(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var m0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,g0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){_0(e,r);function e(t,n,i,o){t===void 0&&(t=0),n===void 0&&(n=[0,0]),i===void 0&&(i=5),o===void 0&&(o=-1);var a=r.call(this,m0,g0)||this;return a._angle=0,a.angle=t,a.center=n,a.kernelSize=i,a.radius=o,a}return e.prototype.apply=function(t,n,i,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-reflection - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Bo=function(r,e){return Bo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Bo(r,e)};function y0(r,e){Bo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var x0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,b0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(r){y0(e,r);function e(t){var n=r.call(this,x0,b0)||this;return n.time=0,n.uniforms.amplitude=new Float32Array(2),n.uniforms.waveLength=new Float32Array(2),n.uniforms.alpha=new Float32Array(2),n.uniforms.dimensions=new Float32Array(2),Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),e.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},e})(k);/*!
 * @pixi/filter-rgb-split - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Mo=function(r,e){return Mo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Mo(r,e)};function T0(r,e){Mo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var C0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,E0=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(r){T0(e,r);function e(t,n,i){t===void 0&&(t=[-10,0]),n===void 0&&(n=[0,10]),i===void 0&&(i=[0,0]);var o=r.call(this,C0,E0)||this;return o.red=t,o.green=n,o.blue=i,o}return Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-shockwave - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Do=function(r,e){return Do=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Do(r,e)};function w0(r,e){Do(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var I0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,P0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(r){w0(e,r);function e(t,n,i){t===void 0&&(t=[0,0]),i===void 0&&(i=0);var o=r.call(this,I0,P0)||this;return o.center=t,Object.assign(o,e.defaults,n),o.time=i,o}return e.prototype.apply=function(t,n,i,o){this.uniforms.time=this.time,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),e.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},e})(k);/*!
 * @pixi/filter-simple-lightmap - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ko=function(r,e){return ko=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},ko(r,e)};function R0(r,e){ko(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var A0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,S0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(r){R0(e,r);function e(t,n,i){n===void 0&&(n=0),i===void 0&&(i=1);var o=r.call(this,A0,S0)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,i]),o.texture=t,o.color=n,o}return e.prototype.apply=function(t,n,i,o){var a,s;this.uniforms.dimensions[0]=(a=n.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=n.filterFrame)===null||s===void 0?void 0:s.height,t.applyFilter(this,n,i,o)},Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var n=this.uniforms.ambientColor;typeof t=="number"?(Tt(t,n),this._color=t):(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],this._color=Nt(n))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-tilt-shift - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ho=function(r,e){return Ho=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Ho(r,e)};function yn(r,e){Ho(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var O0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,N0=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,zl=function(r){yn(e,r);function e(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var a=r.call(this,O0,N0)||this;return a.uniforms.blur=t,a.uniforms.gradientBlur=n,a.uniforms.start=i||new q(0,window.innerHeight/2),a.uniforms.end=o||new q(600,window.innerHeight/2),a.uniforms.delta=new q(30,30),a.uniforms.texSize=new q(window.innerWidth,window.innerHeight),a.updateDelta(),a}return e.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(e.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),e}(k),F0=function(r){yn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=t/i,this.uniforms.delta.y=n/i},e}(zl),U0=function(r){yn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,i=Math.sqrt(t*t+n*n);this.uniforms.delta.x=-n/i,this.uniforms.delta.y=t/i},e}(zl);(function(r){yn(e,r);function e(t,n,i,o){t===void 0&&(t=100),n===void 0&&(n=600);var a=r.call(this)||this;return a.tiltShiftXFilter=new F0(t,n,i,o),a.tiltShiftYFilter=new U0(t,n,i,o),a}return e.prototype.apply=function(t,n,i,o){var a=t.getFilterTexture();this.tiltShiftXFilter.apply(t,n,a,1),this.tiltShiftYFilter.apply(t,a,i,o),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),e})(k);/*!
 * @pixi/filter-twist - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xo=function(r,e){return Xo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},Xo(r,e)};function L0(r,e){Xo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var G0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,B0=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(r){L0(e,r);function e(t){var n=r.call(this,G0,B0)||this;return Object.assign(n,e.defaults,t),n}return Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e.defaults={radius:200,angle:4,padding:20,offset:new q},e})(k);/*!
 * @pixi/filter-zoom-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var jo=function(r,e){return jo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},jo(r,e)};function M0(r,e){jo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function D0(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(r);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(r,n[i])&&(t[n[i]]=r[n[i]]);return t}var k0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,H0=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(r){M0(e,r);function e(t){var n=this,i=Object.assign(e.defaults,t),o=i.maxKernelSize,a=D0(i,["maxKernelSize"]);return n=r.call(this,k0,H0.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(n,a),n}return Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},e})(k);function Vl(r){let e=r.toString(16);for(;e.length<6;)e=`0${e}`;return`#${e}`}const $l=new $,Wl=new $;class z0{static createLinearGradient(e,t,n){const{x0:i,y0:o,x1:a,y1:s,colorStops:u}=n,l=document.createElement("canvas");l.width=t.width,l.height=t.height;const h=l.getContext("2d"),f=h.createLinearGradient(i,o,a,s);u.forEach(_=>{f.addColorStop(_.offset,Vl(_.color))}),h.fillStyle=f,h.fillRect(0,0,t.width,t.height);const c=e.renderTexture.current,d=$l.copyFrom(e.renderTexture.sourceFrame),p=Wl.copyFrom(e.renderTexture.destinationFrame),v=new Pe(G.from(l));return e.batch.flush(),e.renderTexture.bind(t),v.render(e),e.batch.flush(),e.renderTexture.bind(c,d,p),t}static createRadialGradient(e,t,n){const{x0:i,y0:o,r0:a,x1:s,y1:u,r1:l,colorStops:h}=n,f=document.createElement("canvas");f.width=t.width,f.height=t.height;const c=f.getContext("2d"),d=c.createRadialGradient(i,o,a,s,u,l);h.forEach(g=>{d.addColorStop(g.offset,Vl(g.color))}),c.fillStyle=d,c.fillRect(0,0,t.width,t.height);const p=e.renderTexture.current,v=$l.copyFrom(e.renderTexture.sourceFrame),_=Wl.copyFrom(e.renderTexture.destinationFrame),m=new Pe(G.from(f));return e.batch.flush(),e.renderTexture.bind(t),m.render(e),e.batch.flush(),e.renderTexture.bind(p,v,_),t}}export{xi as A,z0 as G,j0 as P,xe as R,Pe as S,ie as a,Au as b,X0 as c};
