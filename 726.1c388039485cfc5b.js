"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[726],{624:(Q,T,m)=>{m.r(T),m.d(T,{LinksPageModule:()=>vt});var x=m(8692),w=m(6533),M=m(9100),D=m(8239),R=m(6670),k=function(o,i){return(k=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(o,i)};function h(o,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function t(){this.constructor=o}k(o,i),o.prototype=null===i?Object.create(i):(t.prototype=i.prototype,new t)}var y=function(){return y=Object.assign||function(o){for(var i,t=1,e=arguments.length;t<e;t++)for(var n in i=arguments[t])Object.prototype.hasOwnProperty.call(i,n)&&(o[n]=i[n]);return o},y.apply(this,arguments)};function b(o,i,t,e){return new(t||(t=Promise))(function(n,r){function s(p){try{l(e.next(p))}catch(u){r(u)}}function a(p){try{l(e.throw(p))}catch(u){r(u)}}function l(p){var u;p.done?n(p.value):(u=p.value,u instanceof t?u:new t(function(v){v(u)})).then(s,a)}l((e=e.apply(o,i||[])).next())})}function f(o,i){var t,e,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(l){return function(p){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,e&&(n=2&u[0]?e.return:u[0]?e.throw||((n=e.return)&&n.call(e),0):e.next)&&!(n=n.call(e,u[1])).done)return n;switch(e=0,n&&(u=[2&u[0],n.value]),u[0]){case 0:case 1:n=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,e=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==u[0]&&2!==u[0])){s=0;continue}if(3===u[0]&&(!n||u[1]>n[0]&&u[1]<n[3])){s.label=u[1];break}if(6===u[0]&&s.label<n[1]){s.label=n[1],n=u;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(u);break}n[2]&&s.ops.pop(),s.trys.pop();continue}u=i.call(o,s)}catch(v){u=[6,v],e=0}finally{t=n=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([l,p])}}}var P,L=function(o){function i(t){var e,n=this;return(n=o.call(this,"ClientResponseError")||this).url="",n.status=0,n.data={},n.isAbort=!1,n.originalError=null,Object.setPrototypeOf(n,i.prototype),t instanceof i||(n.originalError=t),null!==t&&"object"==typeof t&&(n.url="string"==typeof t.url?t.url:"",n.status="number"==typeof t.status?t.status:0,n.data=null!==t.data&&"object"==typeof t.data?t.data:{}),typeof DOMException<"u"&&t instanceof DOMException&&(n.isAbort=!0),n.name="ClientResponseError "+n.status,n.message=(null===(e=n.data)||void 0===e?void 0:e.message)||"Something went wrong while processing your request.",n}return h(i,o),i.prototype.toJSON=function(){return y({},this)},i}(Error),O=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function G(o,i,t){var e=Object.assign({},t||{}),n=e.encode||V;if(!O.test(o))throw new TypeError("argument name is invalid");var r=n(i);if(r&&!O.test(r))throw new TypeError("argument val is invalid");var l,s=o+"="+r;if(null!=e.maxAge){var a=e.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(e.domain){if(!O.test(e.domain))throw new TypeError("option domain is invalid");s+="; Domain="+e.domain}if(e.path){if(!O.test(e.path))throw new TypeError("option path is invalid");s+="; Path="+e.path}if(e.expires){if(l=e.expires,!("[object Date]"===Object.prototype.toString.call(l)||l instanceof Date)||isNaN(e.expires.valueOf()))throw new TypeError("option expires is invalid");s+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(s+="; HttpOnly"),e.secure&&(s+="; Secure"),e.priority)switch("string"==typeof e.priority?e.priority.toLowerCase():e.priority){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(e.sameSite)switch("string"==typeof e.sameSite?e.sameSite.toLowerCase():e.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s}function Z(o){return-1!==o.indexOf("%")?decodeURIComponent(o):o}function V(o){return encodeURIComponent(o)}function z(o){if(o)try{var i=decodeURIComponent(P(o.split(".")[1]).split("").map(function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)||{}}catch{}return{}}P="function"==typeof atob?atob:function(o){var i=String(o).replace(/=+$/,"");if(i.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,e,n=0,r=0,s="";e=i.charAt(r++);~e&&(t=n%4?64*t+e:e,n++%4)?s+=String.fromCharCode(255&t>>(-2*n&6)):0)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);return s};var S=function(){function o(i){void 0===i&&(i={}),this.load(i||{})}return o.prototype.load=function(i){this.id=void 0!==i.id?i.id:"",this.created=void 0!==i.created?i.created:"",this.updated=void 0!==i.updated?i.updated:""},Object.defineProperty(o.prototype,"isNew",{get:function(){return!this.id||"00000000-0000-0000-0000-000000000000"===this.id},enumerable:!1,configurable:!0}),o.prototype.clone=function(){return new this.constructor(JSON.parse(JSON.stringify(this)))},o.prototype.export=function(){return Object.assign({},this)},o}(),H=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.load=function(t){o.prototype.load.call(this,t);for(var e=0,n=Object.entries(t);e<n.length;e++){var r=n[e];this[r[0]]=r[1]}this["@collectionId"]=void 0!==t["@collectionId"]?t["@collectionId"]:"",this["@collectionName"]=void 0!==t["@collectionName"]?t["@collectionName"]:"",this["@expand"]=void 0!==t["@expand"]?t["@expand"]:{}},i}(S),A=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.load=function(t){o.prototype.load.call(this,t),this.email="string"==typeof t.email?t.email:"",this.verified=!!t.verified,this.lastResetSentAt="string"==typeof t.lastResetSentAt?t.lastResetSentAt:"",this.lastVerificationSentAt="string"==typeof t.lastVerificationSentAt?t.lastVerificationSentAt:"",this.profile=t.profile?new H(t.profile):null},i}(S),N=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.load=function(t){o.prototype.load.call(this,t),this.avatar="number"==typeof t.avatar?t.avatar:0,this.email="string"==typeof t.email?t.email:"",this.lastResetSentAt="string"==typeof t.lastResetSentAt?t.lastResetSentAt:""},i}(S),Y=function(o){function i(t){void 0===t&&(t="pocketbase_auth");var e=o.call(this)||this;return e.storageFallback={},e.storageKey=t,e}return h(i,o),Object.defineProperty(i.prototype,"token",{get:function(){return(this._storageGet(this.storageKey)||{}).token||""},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"model",{get:function(){var t,e=this._storageGet(this.storageKey)||{};return null===e||"object"!=typeof e||null===e.model||"object"!=typeof e.model?null:void 0!==(null===(t=e.model)||void 0===t?void 0:t.verified)?new A(e.model):new N(e.model)},enumerable:!1,configurable:!0}),i.prototype.save=function(t,e){this._storageSet(this.storageKey,{token:t,model:e}),o.prototype.save.call(this,t,e)},i.prototype.clear=function(){this._storageRemove(this.storageKey),o.prototype.clear.call(this)},i.prototype._storageGet=function(t){var e;if(typeof window<"u"&&window?.localStorage){var n=(null===(e=window?.localStorage)||void 0===e?void 0:e.getItem(t))||"";try{return JSON.parse(n)}catch{return n}}return this.storageFallback[t]},i.prototype._storageSet=function(t,e){var n;if(typeof window<"u"&&window?.localStorage){var r=e;"string"!=typeof e&&(r=JSON.stringify(e)),null===(n=window?.localStorage)||void 0===n||n.setItem(t,r)}else this.storageFallback[t]=e},i.prototype._storageRemove=function(t){var e;typeof window<"u"&&(null===(e=window?.localStorage)||void 0===e||e.removeItem(t)),delete this.storageFallback[t]},i}(function(){function o(){this.baseToken="",this.baseModel=null,this._onChangeCallbacks=[]}return Object.defineProperty(o.prototype,"token",{get:function(){return this.baseToken},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"model",{get:function(){return this.baseModel},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isValid",{get:function(){return!function(i,t){void 0===t&&(t=0);var e=z(i);return!(Object.keys(e).length>0&&(!e.exp||e.exp-t>Date.now()/1e3))}(this.token)},enumerable:!1,configurable:!0}),o.prototype.save=function(i,t){this.baseToken=i||"",this.baseModel=null!==t&&"object"==typeof t?"undefined"!==t?.verified?new A(t):new N(t):null,this.triggerChange()},o.prototype.clear=function(){this.baseToken="",this.baseModel=null,this.triggerChange()},o.prototype.loadFromCookie=function(i,t){void 0===t&&(t="pb_auth");var e=function(r,s){var a={};if("string"!=typeof r)return a;for(var l=Object.assign({},{}).decode||Z,p=0;p<r.length;){var u=r.indexOf("=",p);if(-1===u)break;var v=r.indexOf(";",p);if(-1===v)v=r.length;else if(v<u){p=r.lastIndexOf(";",u-1)+1;continue}var d=r.slice(p,u).trim();if(void 0===a[d]){var g=r.slice(u+1,v).trim();34===g.charCodeAt(0)&&(g=g.slice(1,-1));try{a[d]=l(g)}catch{a[d]=g}}p=v+1}return a}(i||"")[t]||"",n={};try{(null===typeof(n=JSON.parse(e))||"object"!=typeof n||Array.isArray(n))&&(n={})}catch{}this.save(n.token||"",n.model||{})},o.prototype.exportToCookie=function(i,t){var e,n,r;void 0===t&&(t="pb_auth");var s={secure:!0,sameSite:!0,httpOnly:!0,path:"/"},a=z(this.token);s.expires=a?.exp?new Date(1e3*a.exp):new Date("1970-01-01"),i=Object.assign({},s,i);var l={token:this.token,model:(null===(e=this.model)||void 0===e?void 0:e.export())||null},p=G(t,JSON.stringify(l),i),u=typeof Blob<"u"?new Blob([p]).size:p.length;return l.model&&u>4096&&(l.model={id:null===(n=l?.model)||void 0===n?void 0:n.id,email:null===(r=l?.model)||void 0===r?void 0:r.email},this.model instanceof A&&(l.model.verified=this.model.verified),p=G(t,JSON.stringify(l),i)),p},o.prototype.onChange=function(i,t){var e=this;return void 0===t&&(t=!1),this._onChangeCallbacks.push(i),t&&i(this.token,this.model),function(){for(var n=e._onChangeCallbacks.length-1;n>=0;n--)if(e._onChangeCallbacks[n]==i)return delete e._onChangeCallbacks[n],void e._onChangeCallbacks.splice(n,1)}},o.prototype.triggerChange=function(){for(var i=0,t=this._onChangeCallbacks;i<t.length;i++){var e=t[i];e&&e(this.token,this.model)}},o}()),I=function(o){this.client=o},X=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.getAll=function(t){return void 0===t&&(t={}),this.client.send("/api/settings",{method:"GET",params:t}).then(function(e){return e||{}})},i.prototype.update=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send("/api/settings",{method:"PATCH",params:e,body:t}).then(function(n){return n||{}})},i.prototype.testS3=function(t){return void 0===t&&(t={}),this.client.send("/api/settings/test/s3",{method:"POST",params:t}).then(function(){return!0})},i.prototype.testEmail=function(t,e,n){return void 0===n&&(n={}),this.client.send("/api/settings/test/email",{method:"POST",params:n,body:{email:t,template:e}}).then(function(){return!0})},i}(I),K=function(o,i,t,e,n){this.page=o>0?o:1,this.perPage=i>=0?i:0,this.totalItems=t>=0?t:0,this.totalPages=e>=0?e:0,this.items=n||[]},q=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype._getFullList=function(t,e,n){var r=this;void 0===e&&(e=100),void 0===n&&(n={});var s=[],a=function(l){return b(r,void 0,void 0,function(){return f(this,function(p){return[2,this._getList(t,l,e,n).then(function(u){var d=u.items,g=u.totalItems;return s=s.concat(d),d.length&&g>s.length?a(l+1):s})]})})};return a(1)},i.prototype._getList=function(t,e,n,r){var s=this;return void 0===e&&(e=1),void 0===n&&(n=30),void 0===r&&(r={}),r=Object.assign({page:e,perPage:n},r),this.client.send(t,{method:"GET",params:r}).then(function(a){var l=[];if(a?.items){a.items=a.items||[];for(var p=0,u=a.items;p<u.length;p++)l.push(s.decode(u[p]))}return new K(a?.page||1,a?.perPage||0,a?.totalItems||0,a?.totalPages||0,l)})},i.prototype._getOne=function(t,e,n){var r=this;return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"GET",params:n}).then(function(s){return r.decode(s)})},i.prototype._create=function(t,e,n){var r=this;return void 0===e&&(e={}),void 0===n&&(n={}),this.client.send(t,{method:"POST",params:n,body:e}).then(function(s){return r.decode(s)})},i.prototype._update=function(t,e,n,r){var s=this;return void 0===n&&(n={}),void 0===r&&(r={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"PATCH",params:r,body:n}).then(function(a){return s.decode(a)})},i.prototype._delete=function(t,e,n){return void 0===n&&(n={}),this.client.send(t+"/"+encodeURIComponent(e),{method:"DELETE",params:n}).then(function(){return!0})},i}(I),J=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.getFullList=function(t,e){return void 0===t&&(t=100),void 0===e&&(e={}),this._getFullList(this.baseCrudPath(),t,e)},i.prototype.getList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),this._getList(this.baseCrudPath(),t,e,n)},i.prototype.getOne=function(t,e){return void 0===e&&(e={}),this._getOne(this.baseCrudPath(),t,e)},i.prototype.create=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this._create(this.baseCrudPath(),t,e)},i.prototype.update=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this._update(this.baseCrudPath(),t,e,n)},i.prototype.delete=function(t,e){return void 0===e&&(e={}),this._delete(this.baseCrudPath(),t,e)},i}(q),tt=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.decode=function(t){return new N(t)},i.prototype.baseCrudPath=function(){return"/api/admins"},i.prototype.authResponse=function(t){var e=this.decode(t?.admin||{});return t?.token&&t?.admin&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:t?.token||"",admin:e})},i.prototype.authViaEmail=function(t,e,n,r){return void 0===n&&(n={}),void 0===r&&(r={}),n=Object.assign({email:t,password:e},n),this.client.send(this.baseCrudPath()+"/auth-via-email",{method:"POST",params:r,body:n,headers:{Authorization:""}}).then(this.authResponse.bind(this))},i.prototype.refresh=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCrudPath()+"/refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},i.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath()+"/request-password-reset",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmPasswordReset=function(t,e,n,r,s){return void 0===r&&(r={}),void 0===s&&(s={}),r=Object.assign({token:t,password:e,passwordConfirm:n},r),this.client.send(this.baseCrudPath()+"/confirm-password-reset",{method:"POST",params:s,body:r}).then(this.authResponse.bind(this))},i}(J),et=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.load=function(t){o.prototype.load.call(this,t),this.userId="string"==typeof t.userId?t.userId:"",this.provider="string"==typeof t.provider?t.provider:"",this.providerId="string"==typeof t.providerId?t.providerId:""},i}(S),nt=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.decode=function(t){return new A(t)},i.prototype.baseCrudPath=function(){return"/api/users"},i.prototype.authResponse=function(t){var e=this.decode(t?.user||{});return t?.token&&t?.user&&this.client.authStore.save(t.token,e),Object.assign({},t,{token:t?.token||"",user:e})},i.prototype.listAuthMethods=function(t){return void 0===t&&(t={}),this.client.send(this.baseCrudPath()+"/auth-methods",{method:"GET",params:t}).then(function(e){return Object.assign({},e,{emailPassword:!!e?.emailPassword,authProviders:Array.isArray(e?.authProviders)?e?.authProviders:[]})})},i.prototype.authViaEmail=function(t,e,n,r){return void 0===n&&(n={}),void 0===r&&(r={}),n=Object.assign({email:t,password:e},n),this.client.send(this.baseCrudPath()+"/auth-via-email",{method:"POST",params:r,body:n,headers:{Authorization:""}}).then(this.authResponse.bind(this))},i.prototype.authViaOAuth2=function(t,e,n,r,s,a){return void 0===s&&(s={}),void 0===a&&(a={}),s=Object.assign({provider:t,code:e,codeVerifier:n,redirectUrl:r},s),this.client.send(this.baseCrudPath()+"/auth-via-oauth2",{method:"POST",params:a,body:s,headers:{Authorization:""}}).then(this.authResponse.bind(this))},i.prototype.refresh=function(t,e){return void 0===t&&(t={}),void 0===e&&(e={}),this.client.send(this.baseCrudPath()+"/refresh",{method:"POST",params:e,body:t}).then(this.authResponse.bind(this))},i.prototype.requestPasswordReset=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath()+"/request-password-reset",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmPasswordReset=function(t,e,n,r,s){return void 0===r&&(r={}),void 0===s&&(s={}),r=Object.assign({token:t,password:e,passwordConfirm:n},r),this.client.send(this.baseCrudPath()+"/confirm-password-reset",{method:"POST",params:s,body:r}).then(this.authResponse.bind(this))},i.prototype.requestVerification=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({email:t},e),this.client.send(this.baseCrudPath()+"/request-verification",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmVerification=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({token:t},e),this.client.send(this.baseCrudPath()+"/confirm-verification",{method:"POST",params:n,body:e}).then(this.authResponse.bind(this))},i.prototype.requestEmailChange=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),e=Object.assign({newEmail:t},e),this.client.send(this.baseCrudPath()+"/request-email-change",{method:"POST",params:n,body:e}).then(function(){return!0})},i.prototype.confirmEmailChange=function(t,e,n,r){return void 0===n&&(n={}),void 0===r&&(r={}),n=Object.assign({token:t,password:e},n),this.client.send(this.baseCrudPath()+"/confirm-email-change",{method:"POST",params:r,body:n}).then(this.authResponse.bind(this))},i.prototype.listExternalAuths=function(t,e){return void 0===e&&(e={}),this.client.send(this.baseCrudPath()+"/"+encodeURIComponent(t)+"/external-auths",{method:"GET",params:e}).then(function(n){var r=[];if(Array.isArray(n))for(var s=0,a=n;s<a.length;s++)r.push(new et(a[s]));return r})},i.prototype.unlinkExternalAuth=function(t,e,n){return void 0===n&&(n={}),this.client.send(this.baseCrudPath()+"/"+encodeURIComponent(t)+"/external-auths/"+encodeURIComponent(e),{method:"DELETE",params:n}).then(function(){return!0})},i}(J),it=function(){function o(i){void 0===i&&(i={}),this.load(i||{})}return o.prototype.load=function(i){this.id=void 0!==i.id?i.id:"",this.name=void 0!==i.name?i.name:"",this.type=void 0!==i.type?i.type:"text",this.system=!!i.system,this.required=!!i.required,this.unique=!!i.unique,this.options="object"==typeof i.options&&null!==i.options?i.options:{}},o}(),ot=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.load=function(t){o.prototype.load.call(this,t),this.name="string"==typeof t.name?t.name:"",this.system=!!t.system,this.listRule="string"==typeof t.listRule?t.listRule:null,this.viewRule="string"==typeof t.viewRule?t.viewRule:null,this.createRule="string"==typeof t.createRule?t.createRule:null,this.updateRule="string"==typeof t.updateRule?t.updateRule:null,this.deleteRule="string"==typeof t.deleteRule?t.deleteRule:null,t.schema=Array.isArray(t.schema)?t.schema:[],this.schema=[];for(var e=0,n=t.schema;e<n.length;e++)this.schema.push(new it(n[e]))},i}(S),rt=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.decode=function(t){return new ot(t)},i.prototype.baseCrudPath=function(){return"/api/collections"},i.prototype.import=function(t,e,n){return void 0===e&&(e=!1),void 0===n&&(n={}),b(this,void 0,void 0,function(){return f(this,function(r){return[2,this.client.send(this.baseCrudPath()+"/import",{method:"PUT",params:n,body:{collections:t,deleteMissing:e}}).then(function(){return!0})]})})},i}(J),st=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.decode=function(t){return new H(t)},i.prototype.baseCrudPath=function(t){return"/api/collections/"+encodeURIComponent(t)+"/records"},i.prototype.getFileUrl=function(t,e,n){void 0===n&&(n={});var r=[];r.push(this.client.baseUrl.replace(/\/+$/gm,"")),r.push("api"),r.push("files"),r.push(t["@collectionId"]),r.push(t.id),r.push(e);var s=r.join("/");if(Object.keys(n).length){var a=new URLSearchParams(n);s+=(s.includes("?")?"&":"?")+a}return s},i}(function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.getFullList=function(t,e,n){return void 0===e&&(e=100),void 0===n&&(n={}),this._getFullList(this.baseCrudPath(t),e,n)},i.prototype.getList=function(t,e,n,r){return void 0===e&&(e=1),void 0===n&&(n=30),void 0===r&&(r={}),this._getList(this.baseCrudPath(t),e,n,r)},i.prototype.getOne=function(t,e,n){return void 0===n&&(n={}),this._getOne(this.baseCrudPath(t),e,n)},i.prototype.create=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),this._create(this.baseCrudPath(t),e,n)},i.prototype.update=function(t,e,n,r){return void 0===n&&(n={}),void 0===r&&(r={}),this._update(this.baseCrudPath(t),e,n,r)},i.prototype.delete=function(t,e,n){return void 0===n&&(n={}),this._delete(this.baseCrudPath(t),e,n)},i}(q)),B=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.load=function(t){o.prototype.load.call(this,t),t.remoteIp=t.remoteIp||t.ip,this.url="string"==typeof t.url?t.url:"",this.method="string"==typeof t.method?t.method:"GET",this.status="number"==typeof t.status?t.status:200,this.auth="string"==typeof t.auth?t.auth:"guest",this.remoteIp="string"==typeof t.remoteIp?t.remoteIp:"",this.userIp="string"==typeof t.userIp?t.userIp:"",this.referer="string"==typeof t.referer?t.referer:"",this.userAgent="string"==typeof t.userAgent?t.userAgent:"",this.meta="object"==typeof t.meta&&null!==t.meta?t.meta:{}},i}(S),at=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return h(i,o),i.prototype.getRequestsList=function(t,e,n){return void 0===t&&(t=1),void 0===e&&(e=30),void 0===n&&(n={}),n=Object.assign({page:t,perPage:e},n),this.client.send("/api/logs/requests",{method:"GET",params:n}).then(function(r){var s=[];if(r?.items){r.items=r?.items||[];for(var a=0,l=r.items;a<l.length;a++)s.push(new B(l[a]))}return new K(r?.page||1,r?.perPage||0,r?.totalItems||0,r?.totalPages||0,s)})},i.prototype.getRequest=function(t,e){return void 0===e&&(e={}),this.client.send("/api/logs/requests/"+encodeURIComponent(t),{method:"GET",params:e}).then(function(n){return new B(n)})},i.prototype.getRequestsStats=function(t){return void 0===t&&(t={}),this.client.send("/api/logs/requests/stats",{method:"GET",params:t}).then(function(e){return e})},i}(I),ut=function(o){function i(){var t=null!==o&&o.apply(this,arguments)||this;return t.clientId="",t.eventSource=null,t.subscriptions={},t}return h(i,o),i.prototype.subscribe=function(t,e){var n;return b(this,void 0,void 0,function(){return f(this,function(r){switch(r.label){case 0:if(!t)throw new Error("subscription must be set.");return this.subscriptions[t]&&(null===(n=this.eventSource)||void 0===n||n.removeEventListener(t,this.subscriptions[t])),this.subscriptions[t]=function(s){var a,l=s;try{a=JSON.parse(l?.data)}catch{}e(a||{})},this.eventSource?[3,1]:(this.connect(),[3,3]);case 1:return this.clientId?[4,this.submitSubscriptions()]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}})})},i.prototype.unsubscribe=function(t){var e;return b(this,void 0,void 0,function(){return f(this,function(n){switch(n.label){case 0:if(t){if(!this.subscriptions[t])return[2];null===(e=this.eventSource)||void 0===e||e.removeEventListener(t,this.subscriptions[t]),delete this.subscriptions[t]}else this.removeSubscriptionListeners(),this.subscriptions={};return this.clientId?[4,this.submitSubscriptions()]:[3,2];case 1:n.sent(),n.label=2;case 2:return Object.keys(this.subscriptions).length||this.disconnect(),[2]}})})},i.prototype.submitSubscriptions=function(){return b(this,void 0,void 0,function(){return f(this,function(t){return this.addSubscriptionListeners(),[2,this.client.send("/api/realtime",{method:"POST",body:{clientId:this.clientId,subscriptions:Object.keys(this.subscriptions)},params:{$autoCancel:!1}}).then(function(){return!0})]})})},i.prototype.addSubscriptionListeners=function(){if(this.eventSource)for(var t in this.removeSubscriptionListeners(),this.subscriptions)this.eventSource.addEventListener(t,this.subscriptions[t])},i.prototype.removeSubscriptionListeners=function(){if(this.eventSource)for(var t in this.subscriptions)this.eventSource.removeEventListener(t,this.subscriptions[t])},i.prototype.connectHandler=function(t){this.clientId=t?.lastEventId,this.submitSubscriptions()},i.prototype.connect=function(){var t=this;this.disconnect(),this.eventSource=new EventSource(this.client.buildUrl("/api/realtime")),this.eventSource.addEventListener("PB_CONNECT",function(e){return t.connectHandler(e)})},i.prototype.disconnect=function(){var t,e,n=this;this.removeSubscriptionListeners(),null===(t=this.eventSource)||void 0===t||t.removeEventListener("PB_CONNECT",function(r){return n.connectHandler(r)}),null===(e=this.eventSource)||void 0===e||e.close(),this.eventSource=null,this.clientId=""},i}(I),ct=function(){function o(i,t,e){void 0===i&&(i="/"),void 0===t&&(t="en-US"),this.cancelControllers={},this.baseUrl=i,this.lang=t,this.authStore=e||new Y,this.admins=new tt(this),this.users=new nt(this),this.records=new st(this),this.collections=new rt(this),this.logs=new at(this),this.settings=new X(this),this.realtime=new ut(this)}return Object.defineProperty(o.prototype,"AuthStore",{get:function(){return this.authStore},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"Settings",{get:function(){return this.settings},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"Admins",{get:function(){return this.admins},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"Users",{get:function(){return this.users},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"Collections",{get:function(){return this.collections},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"Records",{get:function(){return this.records},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"Logs",{get:function(){return this.logs},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"Realtime",{get:function(){return this.realtime},enumerable:!1,configurable:!0}),o.prototype.cancelRequest=function(i){return this.cancelControllers[i]&&(this.cancelControllers[i].abort(),delete this.cancelControllers[i]),this},o.prototype.cancelAllRequests=function(){for(var i in this.cancelControllers)this.cancelControllers[i].abort();return this.cancelControllers={},this},o.prototype.send=function(i,t){var e,n,r,s,a,l,p,u,v;return b(this,void 0,void 0,function(){var d,g,U,F,E,$,mt=this;return f(this,function(gt){return(d=Object.assign({method:"GET"},t)).body&&"FormData"!==d.body.constructor.name&&("string"!=typeof d.body&&(d.body=JSON.stringify(d.body)),void 0===(null===(e=d?.headers)||void 0===e?void 0:e["Content-Type"])&&(d.headers=Object.assign({},d.headers,{"Content-Type":"application/json"}))),void 0===(null===(n=d?.headers)||void 0===n?void 0:n["Accept-Language"])&&(d.headers=Object.assign({},d.headers,{"Accept-Language":this.lang})),(null===(r=this.authStore)||void 0===r?void 0:r.token)&&void 0===(null===(s=d?.headers)||void 0===s?void 0:s.Authorization)&&(g="Admin",void 0!==(null===(a=this.authStore.model)||void 0===a?void 0:a.verified)&&(g="User"),d.headers=Object.assign({},d.headers,{Authorization:g+" "+this.authStore.token})),!1!==(null===(l=d.params)||void 0===l?void 0:l.$autoCancel)&&(U=(null===(p=d.params)||void 0===p?void 0:p.$cancelKey)||(d.method||"GET")+i,this.cancelRequest(U),F=new AbortController,this.cancelControllers[U]=F,d.signal=F.signal),null===(u=d.params)||void 0===u||delete u.$autoCancel,null===(v=d.params)||void 0===v||delete v.$cancelKey,E=this.buildUrl(i),void 0!==d.params&&(($=this.serializeQueryParams(d.params))&&(E+=(E.includes("?")?"&":"?")+$),delete d.params),this.beforeSend&&(d=Object.assign({},this.beforeSend(E,d))),[2,fetch(E,d).then(function(C){return b(mt,void 0,void 0,function(){var _;return f(this,function(j){switch(j.label){case 0:_={},j.label=1;case 1:return j.trys.push([1,3,,4]),[4,C.json()];case 2:return _=j.sent(),[3,4];case 3:return j.sent(),[3,4];case 4:if(this.afterSend&&(_=this.afterSend(C,_)),C.status>=400)throw new L({url:C.url,status:C.status,data:_});return[2,_]}})})}).catch(function(C){throw new L(C)})]})})},o.prototype.buildUrl=function(i){var t=this.baseUrl+(this.baseUrl.endsWith("/")?"":"/");return i&&(t+=i.startsWith("/")?i.substring(1):i),t},o.prototype.serializeQueryParams=function(i){var t=[];for(var e in i)if(null!==i[e]){var n=i[e],r=encodeURIComponent(e);if(Array.isArray(n))for(var s=0,a=n;s<a.length;s++)t.push(r+"="+encodeURIComponent(a[s]));else n instanceof Date?t.push(r+"="+encodeURIComponent(n.toISOString())):t.push(null!==typeof n&&"object"==typeof n?r+"="+encodeURIComponent(JSON.stringify(n)):r+"="+encodeURIComponent(n))}return t.join("&")},o}(),c=m(4537);const lt=["card"];function dt(o,i){if(1&o&&c._UZ(0,"h4",13),2&o){const t=c.oxw().$implicit;c.Q6J("innerHTML",t.subTitle,c.oJD)}}const pt=function(o){return{backgroundImage:o}};function ht(o,i){if(1&o){const t=c.EpF();c.TgZ(0,"a",4,5),c.NdJ("click",function(){const r=c.CHM(t).$implicit,s=c.oxw();return c.KtG(s.onExternalClick(r))}),c.TgZ(2,"div",6),c._UZ(3,"div",7),c.TgZ(4,"div",8)(5,"div",9)(6,"div",10),c._UZ(7,"h2",11),c.YNc(8,dt,1,1,"h4",12),c.qZA()()()()()}if(2&o){const t=i.$implicit;c.ekj("accent",!1),c.Q6J("routerLink",t.external?null:t.url),c.xp6(3),c.Akn(c.VKq(7,pt,"url("+t.image+")")),c.xp6(4),c.Q6J("innerHTML",t.name,c.oJD),c.xp6(1),c.Q6J("ngIf",t.subTitle)}}let ft=(()=>{class o{constructor(t,e){this.route=t,this.window=e,this.linksPage=this.route.snapshot.data.linksPage}dohtat(){return(0,D.Z)(function*(){const t=new ct("http://kupfer.es:8090");yield t.records.getList("links",1,50,{filter:'created >= "2022-01-01 00:00:00"',expand:"url,url.text"}),yield t.records.getFullList("links",200,{sort:"-created"})})()}onMouseMove(t){this.cardElementRef.forEach(e=>{const n=e.nativeElement.getBoundingClientRect(),s=t.clientY-n.top;e.nativeElement.style.setProperty("--mouse-x",t.clientX-n.left+"px"),e.nativeElement.style.setProperty("--mouse-y",`${s}px`)})}onExternalClick(t){!t.external||this.window.open(t.url)}}return o.\u0275fac=function(t){return new(t||o)(c.Y36(w.gz),c.Y36("Window"))},o.\u0275cmp=c.Xpm({type:o,selectors:[["app-links-page"]],viewQuery:function(t,e){if(1&t&&c.Gf(lt,5),2&t){let n;c.iGM(n=c.CRH())&&(e.cardElementRef=n)}},decls:4,vars:3,consts:[[1,"links-wrapper"],[1,"links-header",3,"innerHTML"],["id","cards",3,"mousemove"],["class","card fade-in",3,"accent","routerLink","click",4,"ngFor","ngForOf"],[1,"card","fade-in",3,"routerLink","click"],["card",""],[1,"card-content"],[1,"card-image"],[1,"card-info-wrapper"],[1,"card-info"],[1,"card-info-title"],[1,"card-title-1",3,"innerHTML"],["class","card-title-2",3,"innerHTML",4,"ngIf"],[1,"card-title-2",3,"innerHTML"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c._UZ(1,"h2",1),c.TgZ(2,"div",2),c.NdJ("mousemove",function(r){return e.onMouseMove(r)}),c.YNc(3,ht,9,9,"a",3),c.qZA()()),2&t&&(c.xp6(1),c.Q6J("innerHTML",e.linksPage.title,c.oJD),c.xp6(1),c.Q6J("@fadeIn",void 0),c.xp6(1),c.Q6J("ngForOf",e.linksPage.links))},dependencies:[x.sg,x.O5,w.yS],styles:['.links-header[_ngcontent-%COMP%]{margin:1rem 0}.card[_ngcontent-%COMP%]:after, .card[_ngcontent-%COMP%]:before{border-radius:inherit;content:"";height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity .5s;width:100%}[_nghost-%COMP%]{align-items:center;display:flex;justify-content:center;flex-direction:column;min-height:100vh}#cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;max-width:916px;width:90vw}#cards[_ngcontent-%COMP%]:hover > .card[_ngcontent-%COMP%]:after{opacity:1}.card[_ngcontent-%COMP%]{background-color:#ffffff1a;border-radius:10px;cursor:pointer;display:flex;height:300px;flex-direction:column;position:relative;width:min(350px,33.33333% - 12px)}.card[_ngcontent-%COMP%]:hover:before{opacity:1}.card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]{filter:grayscale(0)}.card[_ngcontent-%COMP%]:hover   .card-title-1[_ngcontent-%COMP%]{top:.5rem}.card[_ngcontent-%COMP%]:hover   .card-title-2[_ngcontent-%COMP%]{opacity:1;top:.3rem}.card[_ngcontent-%COMP%]:before{background:radial-gradient(500px circle at var(--mouse-x) var(--mouse-y),rgba(255,255,255,.16),transparent 40%);z-index:3}.card[_ngcontent-%COMP%]:after{background:radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),rgba(255,255,255,.4),transparent 40%);z-index:1}.card[_ngcontent-%COMP%] > .card-content[_ngcontent-%COMP%]{background-color:#171717;border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;inset:1px;padding:10px;position:absolute;z-index:2;align-items:center}.card-image[_ngcontent-%COMP%]{align-items:center;display:flex;height:175px;justify-content:center;overflow:hidden;background-size:contain;background-position:center;background-repeat:no-repeat;width:100%;transition:all .5s;filter:grayscale(.8)}.card-info-wrapper[_ngcontent-%COMP%]{align-items:center;display:flex;flex-grow:1;justify-content:flex-start;padding:0 20px}.card-info-wrapper[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]{align-items:flex-start;display:flex;gap:12px}.card-info-title[_ngcontent-%COMP%] > .card-title-2[_ngcontent-%COMP%], .card-info-title[_ngcontent-%COMP%] > .card-title-1[_ngcontent-%COMP%]{position:relative;text-align:center;line-height:20px;margin-bottom:0;transition:.4s all}.card-info-title[_ngcontent-%COMP%] > .card-title-1[_ngcontent-%COMP%]{font-size:2.1em;margin-top:0;top:1rem}.card-info-title[_ngcontent-%COMP%] > .card-title-2[_ngcontent-%COMP%]{opacity:0;color:#ffffff80;font-size:.85em;margin-top:1rem;top:0}@media (max-width: 800px){.card[_ngcontent-%COMP%]{width:calc(50% - 12px)}.card[_ngcontent-%COMP%]   .card-title-1[_ngcontent-%COMP%]{top:.5rem}.card[_ngcontent-%COMP%]   .card-title-2[_ngcontent-%COMP%]{opacity:1;top:.3rem}}@media (max-width: 450px){.card[_ngcontent-%COMP%]{width:100%}}'],data:{animation:[(0,R.J)(50,"300ms 600ms")]},changeDetection:0}),o})(),vt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.oAB({type:o}),o.\u0275inj=c.cJS({providers:[M.OU],imports:[x.ez,w.Bz.forChild([{path:"",component:ft,resolve:{linksPage:M.OU}}])]}),o})()},3738:(Q,T,m)=>{m.d(T,{R:()=>h});var x=m(5598),w=m(7969),M=m(985),D=m(5743),R=m(4537),k=m(4317);let h=(()=>{class y{constructor(f){this.db=f}fetchPageDocument(f){return this.db.object(`/pages/${f}`).valueChanges().pipe((0,x.q)(1))}getProjects(f,P=null){return this.fetchPageDocument(f)}fetchProject(f,P){return this.getProjects(f).pipe((0,w.U)(L=>L.projects.filter(O=>O.url===P)),(0,w.U)(D.eq))}updatePage(f,P){return(0,M.D)(this.db.object(`/pages/${f}`).update(P))}}return y.\u0275fac=function(f){return new(f||y)(R.LFG(k.KQ))},y.\u0275prov=R.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()}}]);