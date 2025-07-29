(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function I0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function JE(){if(iy)return Ce;iy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,$={};function U(D,q,pe){this.props=D,this.context=q,this.refs=$,this.updater=pe||O}U.prototype.isReactComponent={},U.prototype.setState=function(D,q){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,q,"setState")},U.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function H(){}H.prototype=U.prototype;function J(D,q,pe){this.props=D,this.context=q,this.refs=$,this.updater=pe||O}var K=J.prototype=new H;K.constructor=J,V(K,U.prototype),K.isPureReactComponent=!0;var ae=Array.isArray,ve=Object.prototype.hasOwnProperty,Te={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(D,q,pe){var Se,Ae={},xe=null,Ve=null;if(q!=null)for(Se in q.ref!==void 0&&(Ve=q.ref),q.key!==void 0&&(xe=""+q.key),q)ve.call(q,Se)&&!N.hasOwnProperty(Se)&&(Ae[Se]=q[Se]);var Fe=arguments.length-2;if(Fe===1)Ae.children=pe;else if(1<Fe){for(var $e=Array(Fe),gt=0;gt<Fe;gt++)$e[gt]=arguments[gt+2];Ae.children=$e}if(D&&D.defaultProps)for(Se in Fe=D.defaultProps,Fe)Ae[Se]===void 0&&(Ae[Se]=Fe[Se]);return{$$typeof:n,type:D,key:xe,ref:Ve,props:Ae,_owner:Te.current}}function A(D,q){return{$$typeof:n,type:D.type,key:q,ref:D.ref,props:D.props,_owner:D._owner}}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function b(D){var q={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pe){return q[pe]})}var L=/\/+/g;function P(D,q){return typeof D=="object"&&D!==null&&D.key!=null?b(""+D.key):q.toString(36)}function st(D,q,pe,Se,Ae){var xe=typeof D;(xe==="undefined"||xe==="boolean")&&(D=null);var Ve=!1;if(D===null)Ve=!0;else switch(xe){case"string":case"number":Ve=!0;break;case"object":switch(D.$$typeof){case n:case e:Ve=!0}}if(Ve)return Ve=D,Ae=Ae(Ve),D=Se===""?"."+P(Ve,0):Se,ae(Ae)?(pe="",D!=null&&(pe=D.replace(L,"$&/")+"/"),st(Ae,q,pe,"",function(gt){return gt})):Ae!=null&&(R(Ae)&&(Ae=A(Ae,pe+(!Ae.key||Ve&&Ve.key===Ae.key?"":(""+Ae.key).replace(L,"$&/")+"/")+D)),q.push(Ae)),1;if(Ve=0,Se=Se===""?".":Se+":",ae(D))for(var Fe=0;Fe<D.length;Fe++){xe=D[Fe];var $e=Se+P(xe,Fe);Ve+=st(xe,q,pe,$e,Ae)}else if($e=C(D),typeof $e=="function")for(D=$e.call(D),Fe=0;!(xe=D.next()).done;)xe=xe.value,$e=Se+P(xe,Fe++),Ve+=st(xe,q,pe,$e,Ae);else if(xe==="object")throw q=String(D),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Ve}function Ot(D,q,pe){if(D==null)return D;var Se=[],Ae=0;return st(D,Se,"","",function(xe){return q.call(pe,xe,Ae++)}),Se}function Dt(D){if(D._status===-1){var q=D._result;q=q(),q.then(function(pe){(D._status===0||D._status===-1)&&(D._status=1,D._result=pe)},function(pe){(D._status===0||D._status===-1)&&(D._status=2,D._result=pe)}),D._status===-1&&(D._status=0,D._result=q)}if(D._status===1)return D._result.default;throw D._result}var je={current:null},ie={transition:null},me={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Te};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Ot,forEach:function(D,q,pe){Ot(D,function(){q.apply(this,arguments)},pe)},count:function(D){var q=0;return Ot(D,function(){q++}),q},toArray:function(D){return Ot(D,function(q){return q})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=U,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=J,Ce.StrictMode=s,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=oe,Ce.cloneElement=function(D,q,pe){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Se=V({},D.props),Ae=D.key,xe=D.ref,Ve=D._owner;if(q!=null){if(q.ref!==void 0&&(xe=q.ref,Ve=Te.current),q.key!==void 0&&(Ae=""+q.key),D.type&&D.type.defaultProps)var Fe=D.type.defaultProps;for($e in q)ve.call(q,$e)&&!N.hasOwnProperty($e)&&(Se[$e]=q[$e]===void 0&&Fe!==void 0?Fe[$e]:q[$e])}var $e=arguments.length-2;if($e===1)Se.children=pe;else if(1<$e){Fe=Array($e);for(var gt=0;gt<$e;gt++)Fe[gt]=arguments[gt+2];Se.children=Fe}return{$$typeof:n,type:D.type,key:Ae,ref:xe,props:Se,_owner:Ve}},Ce.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Ce.createElement=I,Ce.createFactory=function(D){var q=I.bind(null,D);return q.type=D,q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:d,render:D}},Ce.isValidElement=R,Ce.lazy=function(D){return{$$typeof:w,_payload:{_status:-1,_result:D},_init:Dt}},Ce.memo=function(D,q){return{$$typeof:y,type:D,compare:q===void 0?null:q}},Ce.startTransition=function(D){var q=ie.transition;ie.transition={};try{D()}finally{ie.transition=q}},Ce.unstable_act=oe,Ce.useCallback=function(D,q){return je.current.useCallback(D,q)},Ce.useContext=function(D){return je.current.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D){return je.current.useDeferredValue(D)},Ce.useEffect=function(D,q){return je.current.useEffect(D,q)},Ce.useId=function(){return je.current.useId()},Ce.useImperativeHandle=function(D,q,pe){return je.current.useImperativeHandle(D,q,pe)},Ce.useInsertionEffect=function(D,q){return je.current.useInsertionEffect(D,q)},Ce.useLayoutEffect=function(D,q){return je.current.useLayoutEffect(D,q)},Ce.useMemo=function(D,q){return je.current.useMemo(D,q)},Ce.useReducer=function(D,q,pe){return je.current.useReducer(D,q,pe)},Ce.useRef=function(D){return je.current.useRef(D)},Ce.useState=function(D){return je.current.useState(D)},Ce.useSyncExternalStore=function(D,q,pe){return je.current.useSyncExternalStore(D,q,pe)},Ce.useTransition=function(){return je.current.useTransition()},Ce.version="18.3.1",Ce}var sy;function Xd(){return sy||(sy=1,Lh.exports=JE()),Lh.exports}var W=Xd();const S0=I0(W);var Hu={},Mh={exports:{}},nn={},Vh={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function ZE(){return oy||(oy=1,function(n){function e(ie,me){var oe=ie.length;ie.push(me);e:for(;0<oe;){var D=oe-1>>>1,q=ie[D];if(0<o(q,me))ie[D]=me,ie[oe]=q,oe=D;else break e}}function t(ie){return ie.length===0?null:ie[0]}function s(ie){if(ie.length===0)return null;var me=ie[0],oe=ie.pop();if(oe!==me){ie[0]=oe;e:for(var D=0,q=ie.length,pe=q>>>1;D<pe;){var Se=2*(D+1)-1,Ae=ie[Se],xe=Se+1,Ve=ie[xe];if(0>o(Ae,oe))xe<q&&0>o(Ve,Ae)?(ie[D]=Ve,ie[xe]=oe,D=xe):(ie[D]=Ae,ie[Se]=oe,D=Se);else if(xe<q&&0>o(Ve,oe))ie[D]=Ve,ie[xe]=oe,D=xe;else break e}}return me}function o(ie,me){var oe=ie.sortIndex-me.sortIndex;return oe!==0?oe:ie.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var f=Date,d=f.now();n.unstable_now=function(){return f.now()-d}}var g=[],y=[],w=1,T=null,C=3,O=!1,V=!1,$=!1,U=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ie){for(var me=t(y);me!==null;){if(me.callback===null)s(y);else if(me.startTime<=ie)s(y),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(y)}}function ae(ie){if($=!1,K(ie),!V)if(t(g)!==null)V=!0,Dt(ve);else{var me=t(y);me!==null&&je(ae,me.startTime-ie)}}function ve(ie,me){V=!1,$&&($=!1,H(I),I=-1),O=!0;var oe=C;try{for(K(me),T=t(g);T!==null&&(!(T.expirationTime>me)||ie&&!b());){var D=T.callback;if(typeof D=="function"){T.callback=null,C=T.priorityLevel;var q=D(T.expirationTime<=me);me=n.unstable_now(),typeof q=="function"?T.callback=q:T===t(g)&&s(g),K(me)}else s(g);T=t(g)}if(T!==null)var pe=!0;else{var Se=t(y);Se!==null&&je(ae,Se.startTime-me),pe=!1}return pe}finally{T=null,C=oe,O=!1}}var Te=!1,N=null,I=-1,A=5,R=-1;function b(){return!(n.unstable_now()-R<A)}function L(){if(N!==null){var ie=n.unstable_now();R=ie;var me=!0;try{me=N(!0,ie)}finally{me?P():(Te=!1,N=null)}}else Te=!1}var P;if(typeof J=="function")P=function(){J(L)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Ot=st.port2;st.port1.onmessage=L,P=function(){Ot.postMessage(null)}}else P=function(){U(L,0)};function Dt(ie){N=ie,Te||(Te=!0,P())}function je(ie,me){I=U(function(){ie(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){V||O||(V=!0,Dt(ve))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(ie){switch(C){case 1:case 2:case 3:var me=3;break;default:me=C}var oe=C;C=me;try{return ie()}finally{C=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,me){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var oe=C;C=ie;try{return me()}finally{C=oe}},n.unstable_scheduleCallback=function(ie,me,oe){var D=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?D+oe:D):oe=D,ie){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=oe+q,ie={id:w++,callback:me,priorityLevel:ie,startTime:oe,expirationTime:q,sortIndex:-1},oe>D?(ie.sortIndex=oe,e(y,ie),t(g)===null&&ie===t(y)&&($?(H(I),I=-1):$=!0,je(ae,oe-D))):(ie.sortIndex=q,e(g,ie),V||O||(V=!0,Dt(ve))),ie},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(ie){var me=C;return function(){var oe=C;C=me;try{return ie.apply(this,arguments)}finally{C=oe}}}}(Fh)),Fh}var ay;function eT(){return ay||(ay=1,Vh.exports=ZE()),Vh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function tT(){if(ly)return nn;ly=1;var n=Xd(),e=eT();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){f(r,i),f(r+"Capture",i)}function f(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function C(r){return g.call(T,r)?!0:g.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function O(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,i,a,c){if(i===null||typeof i>"u"||O(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(r,i,a,c,h,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var U={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){U[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];U[i]=new $(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){U[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){U[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){U[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){U[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){U[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){U[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){U[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(H,J);U[i]=new $(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(H,J);U[i]=new $(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(H,J);U[i]=new $(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){U[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),U.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){U[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,i,a,c){var h=U.hasOwnProperty(i)?U[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(V(i,a,h,c)&&(a=null),c||h===null?C(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?r.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var ae=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ve=Symbol.for("react.element"),Te=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),b=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),Ot=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),ie=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,D;function q(r){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+r}var pe=!1;function Se(r,i){if(!r||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(r,[],i)}else{try{i.call()}catch(j){c=j}r.call(i.prototype)}else{try{throw Error()}catch(j){c=j}r()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var h=j.stack.split(`
`),m=c.stack.split(`
`),_=h.length-1,S=m.length-1;1<=_&&0<=S&&h[_]!==m[S];)S--;for(;1<=_&&0<=S;_--,S--)if(h[_]!==m[S]){if(_!==1||S!==1)do if(_--,S--,0>S||h[_]!==m[S]){var k=`
`+h[_].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=_&&0<=S);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Ae(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=Se(r.type,!1),r;case 11:return r=Se(r.type.render,!1),r;case 1:return r=Se(r.type,!0),r;default:return""}}function xe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case N:return"Fragment";case Te:return"Portal";case A:return"Profiler";case I:return"StrictMode";case P:return"Suspense";case st:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case R:return(r._context.displayName||"Context")+".Provider";case L:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ot:return i=r.displayName||null,i!==null?i:xe(r.type)||"Memo";case Dt:i=r._payload,r=r._init;try{return xe(r(i))}catch{}}return null}function Ve(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function gt(r){var i=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function yr(r){r._valueTracker||(r._valueTracker=gt(r))}function Os(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function Gr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Vi(r,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ds(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Yo(r,i){i=i.checked,i!=null&&K(r,"checked",i,!1)}function Xo(r,i){Yo(r,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?Ls(r,i.type,a):i.hasOwnProperty("defaultValue")&&Ls(r,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Rl(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ls(r,i,a){(i!=="number"||Gr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var vr=Array.isArray;function _r(r,i,a,c){if(r=r.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=i.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,c&&(r[h].defaultSelected=!0);return}i!==null||r[h].disabled||(i=r[h])}i!==null&&(i.selected=!0)}}function Jo(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ms(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(vr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Fe(a)}}function Vs(r,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Zo(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function ft(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?ft(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var wr,ea=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,h)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(wr=wr||document.createElement("div"),wr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=wr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Kr(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ui=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(r){Ui.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Fi[i]=Fi[r]})});function ta(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Fi.hasOwnProperty(r)&&Fi[r]?(""+i).trim():i+"px"}function na(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=ta(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,h):r[a]=h}}var ra=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(r,i){if(i){if(ra[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function sa(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=null;function Fs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Us=null,gn=null,Kn=null;function zs(r){if(r=Ra(r)){if(typeof Us!="function")throw Error(t(280));var i=r.stateNode;i&&(i=su(i),Us(r.stateNode,r.type,i))}}function Qn(r){gn?Kn?Kn.push(r):Kn=[r]:gn=r}function oa(){if(gn){var r=gn,i=Kn;if(Kn=gn=null,zs(r),i)for(r=0;r<i.length;r++)zs(i[r])}}function ji(r,i){return r(i)}function aa(){}var Er=!1;function la(r,i,a){if(Er)return r(i,a);Er=!0;try{return ji(r,i,a)}finally{Er=!1,(gn!==null||Kn!==null)&&(aa(),oa())}}function ot(r,i){var a=r.stateNode;if(a===null)return null;var c=su(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var js=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){js=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{js=!1}function Bi(r,i,a,c,h,m,_,S,k){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(Y){this.onError(Y)}}var $i=!1,Bs=null,kn=!1,ua=null,uf={onError:function(r){$i=!0,Bs=r}};function $s(r,i,a,c,h,m,_,S,k){$i=!1,Bs=null,Bi.apply(uf,arguments)}function Nl(r,i,a,c,h,m,_,S,k){if($s.apply(this,arguments),$i){if($i){var j=Bs;$i=!1,Bs=null}else throw Error(t(198));kn||(kn=!0,ua=j)}}function Rn(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Hi(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Nn(r){if(Rn(r)!==r)throw Error(t(188))}function xl(r){var i=r.alternate;if(!i){if(i=Rn(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return Nn(h),r;if(m===c)return Nn(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var _=!1,S=h.child;S;){if(S===a){_=!0,a=h,c=m;break}if(S===c){_=!0,c=h,a=m;break}S=S.sibling}if(!_){for(S=m.child;S;){if(S===a){_=!0,a=m,c=h;break}if(S===c){_=!0,c=m,a=h;break}S=S.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function ca(r){return r=xl(r),r!==null?Hs(r):null}function Hs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Hs(r);if(i!==null)return i;r=r.sibling}return null}var Ws=e.unstable_scheduleCallback,fa=e.unstable_cancelCallback,bl=e.unstable_shouldYield,cf=e.unstable_requestPaint,He=e.unstable_now,Ol=e.unstable_getCurrentPriorityLevel,Wi=e.unstable_ImmediatePriority,Qr=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,ha=e.unstable_LowPriority,Dl=e.unstable_IdlePriority,qi=null,an=null;function Ll(r){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(qi,r,void 0,(r.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Vl,da=Math.log,Ml=Math.LN2;function Vl(r){return r>>>=0,r===0?32:31-(da(r)/Ml|0)|0}var qs=64,Gs=4194304;function Yr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Gi(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,h=r.suspendedLanes,m=r.pingedLanes,_=a&268435455;if(_!==0){var S=_&~h;S!==0?c=Yr(S):(m&=_,m!==0&&(c=Yr(m)))}else _=a&~h,_!==0?c=Yr(_):m!==0&&(c=Yr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Ht(i),h=1<<a,c|=r[a],i&=~h;return c}function ff(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tr(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,h=r.expirationTimes,m=r.pendingLanes;0<m;){var _=31-Ht(m),S=1<<_,k=h[_];k===-1?((S&a)===0||(S&c)!==0)&&(h[_]=ff(S,i)):k<=i&&(r.expiredLanes|=S),m&=~S}}function ln(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ki(){var r=qs;return qs<<=1,(qs&4194240)===0&&(qs=64),r}function Xr(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function Jr(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Ht(i),r[i]=a}function Be(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-Ht(a),m=1<<h;i[h]=0,c[h]=-1,r[h]=-1,a&=~m}}function Zr(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Ht(a),h=1<<c;h&i|r[c]&i&&(r[c]|=i),a&=~h}}var Ne=0;function ei(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Fl,Ks,Ul,zl,jl,pa=!1,Yn=[],At=null,xn=null,bn=null,ti=new Map,vn=new Map,Xn=[],hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(r,i){switch(r){case"focusin":case"focusout":At=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":ti.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(i.pointerId)}}function Qt(r,i,a,c,h,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ra(i),i!==null&&Ks(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),r)}function df(r,i,a,c,h){switch(i){case"focusin":return At=Qt(At,r,i,a,c,h),!0;case"dragenter":return xn=Qt(xn,r,i,a,c,h),!0;case"mouseover":return bn=Qt(bn,r,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return ti.set(m,Qt(ti.get(m)||null,r,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,vn.set(m,Qt(vn.get(m)||null,r,i,a,c,h)),!0}return!1}function $l(r){var i=Zi(r.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=Hi(a),i!==null){r.blockedOn=i,jl(r.priority,function(){Ul(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Ir(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Qs(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);zi=c,a.target.dispatchEvent(c),zi=null}else return i=Ra(a),i!==null&&Ks(i),r.blockedOn=a,!1;i.shift()}return!0}function Qi(r,i,a){Ir(r)&&a.delete(i)}function Hl(){pa=!1,At!==null&&Ir(At)&&(At=null),xn!==null&&Ir(xn)&&(xn=null),bn!==null&&Ir(bn)&&(bn=null),ti.forEach(Qi),vn.forEach(Qi)}function On(r,i){r.blockedOn===i&&(r.blockedOn=null,pa||(pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Hl)))}function Dn(r){function i(h){return On(h,r)}if(0<Yn.length){On(Yn[0],r);for(var a=1;a<Yn.length;a++){var c=Yn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(At!==null&&On(At,r),xn!==null&&On(xn,r),bn!==null&&On(bn,r),ti.forEach(i),vn.forEach(i),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)$l(a),a.blockedOn===null&&Xn.shift()}var Sr=ae.ReactCurrentBatchConfig,ni=!0;function Ye(r,i,a,c){var h=Ne,m=Sr.transition;Sr.transition=null;try{Ne=1,ma(r,i,a,c)}finally{Ne=h,Sr.transition=m}}function pf(r,i,a,c){var h=Ne,m=Sr.transition;Sr.transition=null;try{Ne=4,ma(r,i,a,c)}finally{Ne=h,Sr.transition=m}}function ma(r,i,a,c){if(ni){var h=Qs(r,i,a,c);if(h===null)Af(r,i,c,Yi,a),Bl(r,c);else if(df(h,r,i,a,c))c.stopPropagation();else if(Bl(r,c),i&4&&-1<hf.indexOf(r)){for(;h!==null;){var m=Ra(h);if(m!==null&&Fl(m),m=Qs(r,i,a,c),m===null&&Af(r,i,c,Yi,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else Af(r,i,c,null,a)}}var Yi=null;function Qs(r,i,a,c){if(Yi=null,r=Fs(c),r=Zi(r),r!==null)if(i=Rn(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Hi(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Yi=r,null}function ga(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ol()){case Wi:return 1;case Qr:return 4;case yn:case ha:return 16;case Dl:return 536870912;default:return 16}default:return 16}}var un=null,Ys=null,Yt=null;function ya(){if(Yt)return Yt;var r,i=Ys,a=i.length,c,h="value"in un?un.value:un.textContent,m=h.length;for(r=0;r<a&&i[r]===h[r];r++);var _=a-r;for(c=1;c<=_&&i[a-c]===h[m-c];c++);return Yt=h.slice(r,1<c?1-c:void 0)}function Xs(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Jn(){return!0}function va(){return!1}function Ct(r){function i(a,c,h,m,_){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jn:va,this.isPropagationStopped=va,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=Ct(Ln),Zn=oe({},Ln,{view:0,detail:0}),mf=Ct(Zn),Zs,Ar,ri,Xi=oe({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ri&&(ri&&r.type==="mousemove"?(Zs=r.screenX-ri.screenX,Ar=r.screenY-ri.screenY):Ar=Zs=0,ri=r),Zs)},movementY:function(r){return"movementY"in r?r.movementY:Ar}}),eo=Ct(Xi),_a=oe({},Xi,{dataTransfer:0}),Wl=Ct(_a),to=oe({},Zn,{relatedTarget:0}),no=Ct(to),ql=oe({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Cr=Ct(ql),Gl=oe({},Ln,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Kl=Ct(Gl),Ql=oe({},Ln,{data:0}),wa=Ct(Ql),ro={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xl(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Yl[r])?!!i[r]:!1}function er(){return Xl}var u=oe({},Zn,{key:function(r){if(r.key){var i=ro[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Xs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(r){return r.type==="keypress"?Xs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Xs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=Ct(u),v=oe({},Xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Ct(v),M=oe({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),B=Ct(M),ne=oe({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=Ct(ne),dt=oe({},Xi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),be=Ct(dt),yt=[9,13,27,32],lt=d&&"CompositionEvent"in window,_n=null;d&&"documentMode"in document&&(_n=document.documentMode);var cn=d&&"TextEvent"in window&&!_n,Ji=d&&(!lt||_n&&8<_n&&11>=_n),io=" ",Jp=!1;function Zp(r,i){switch(r){case"keyup":return yt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var so=!1;function Qw(r,i){switch(r){case"compositionend":return em(i);case"keypress":return i.which!==32?null:(Jp=!0,io);case"textInput":return r=i.data,r===io&&Jp?null:r;default:return null}}function Yw(r,i){if(so)return r==="compositionend"||!lt&&Zp(r,i)?(r=ya(),Yt=Ys=un=null,so=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ji&&i.locale!=="ko"?null:i.data;default:return null}}var Xw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Xw[r.type]:i==="textarea"}function nm(r,i,a,c){Qn(c),i=nu(i,"onChange"),0<i.length&&(a=new Js("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var Ea=null,Ta=null;function Jw(r){wm(r,0)}function Jl(r){var i=co(r);if(Os(i))return r}function Zw(r,i){if(r==="change")return i}var rm=!1;if(d){var gf;if(d){var yf="oninput"in document;if(!yf){var im=document.createElement("div");im.setAttribute("oninput","return;"),yf=typeof im.oninput=="function"}gf=yf}else gf=!1;rm=gf&&(!document.documentMode||9<document.documentMode)}function sm(){Ea&&(Ea.detachEvent("onpropertychange",om),Ta=Ea=null)}function om(r){if(r.propertyName==="value"&&Jl(Ta)){var i=[];nm(i,Ta,r,Fs(r)),la(Jw,i)}}function eE(r,i,a){r==="focusin"?(sm(),Ea=i,Ta=a,Ea.attachEvent("onpropertychange",om)):r==="focusout"&&sm()}function tE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Jl(Ta)}function nE(r,i){if(r==="click")return Jl(i)}function rE(r,i){if(r==="input"||r==="change")return Jl(i)}function iE(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Mn=typeof Object.is=="function"?Object.is:iE;function Ia(r,i){if(Mn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!g.call(i,h)||!Mn(r[h],i[h]))return!1}return!0}function am(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function lm(r,i){var a=am(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=am(a)}}function um(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?um(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function cm(){for(var r=window,i=Gr();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Gr(r.document)}return i}function vf(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function sE(r){var i=cm(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&um(a.ownerDocument.documentElement,a)){if(c!==null&&vf(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!r.extend&&m>c&&(h=c,c=m,m=h),h=lm(a,m);var _=lm(a,c);h&&_&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),r.removeAllRanges(),m>c?(r.addRange(i),r.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var oE=d&&"documentMode"in document&&11>=document.documentMode,oo=null,_f=null,Sa=null,wf=!1;function fm(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wf||oo==null||oo!==Gr(c)||(c=oo,"selectionStart"in c&&vf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Sa&&Ia(Sa,c)||(Sa=c,c=nu(_f,"onSelect"),0<c.length&&(i=new Js("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=oo)))}function Zl(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var ao={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},Ef={},hm={};d&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function eu(r){if(Ef[r])return Ef[r];if(!ao[r])return r;var i=ao[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in hm)return Ef[r]=i[a];return r}var dm=eu("animationend"),pm=eu("animationiteration"),mm=eu("animationstart"),gm=eu("transitionend"),ym=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ii(r,i){ym.set(r,i),l(i,[r])}for(var Tf=0;Tf<vm.length;Tf++){var If=vm[Tf],aE=If.toLowerCase(),lE=If[0].toUpperCase()+If.slice(1);ii(aE,"on"+lE)}ii(dm,"onAnimationEnd"),ii(pm,"onAnimationIteration"),ii(mm,"onAnimationStart"),ii("dblclick","onDoubleClick"),ii("focusin","onFocus"),ii("focusout","onBlur"),ii(gm,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function _m(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,Nl(c,i,void 0,r),r.currentTarget=null}function wm(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var S=c[_],k=S.instance,j=S.currentTarget;if(S=S.listener,k!==m&&h.isPropagationStopped())break e;_m(h,S,j),m=k}else for(_=0;_<c.length;_++){if(S=c[_],k=S.instance,j=S.currentTarget,S=S.listener,k!==m&&h.isPropagationStopped())break e;_m(h,S,j),m=k}}}if(kn)throw r=ua,kn=!1,ua=null,r}function Ge(r,i){var a=i[xf];a===void 0&&(a=i[xf]=new Set);var c=r+"__bubble";a.has(c)||(Em(i,r,2,!1),a.add(c))}function Sf(r,i,a){var c=0;i&&(c|=4),Em(a,r,c,i)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Ca(r){if(!r[tu]){r[tu]=!0,s.forEach(function(a){a!=="selectionchange"&&(uE.has(a)||Sf(a,!1,r),Sf(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[tu]||(i[tu]=!0,Sf("selectionchange",!1,i))}}function Em(r,i,a,c){switch(ga(i)){case 1:var h=Ye;break;case 4:h=pf;break;default:h=ma}a=h.bind(null,i,a,r),h=void 0,!js||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?r.addEventListener(i,a,{capture:!0,passive:h}):r.addEventListener(i,a,!0):h!==void 0?r.addEventListener(i,a,{passive:h}):r.addEventListener(i,a,!1)}function Af(r,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var S=c.stateNode.containerInfo;if(S===h||S.nodeType===8&&S.parentNode===h)break;if(_===4)for(_=c.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===h||k.nodeType===8&&k.parentNode===h))return;_=_.return}for(;S!==null;){if(_=Zi(S),_===null)return;if(k=_.tag,k===5||k===6){c=m=_;continue e}S=S.parentNode}}c=c.return}la(function(){var j=m,Y=Fs(a),X=[];e:{var Q=ym.get(r);if(Q!==void 0){var se=Js,ue=r;switch(r){case"keypress":if(Xs(a)===0)break e;case"keydown":case"keyup":se=p;break;case"focusin":ue="focus",se=no;break;case"focusout":ue="blur",se=no;break;case"beforeblur":case"afterblur":se=no;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Wl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=B;break;case dm:case pm:case mm:se=Cr;break;case gm:se=Ue;break;case"scroll":se=mf;break;case"wheel":se=be;break;case"copy":case"cut":case"paste":se=Kl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=E}var ce=(i&4)!==0,at=!ce&&r==="scroll",F=ce?Q!==null?Q+"Capture":null:Q;ce=[];for(var x=j,z;x!==null;){z=x;var te=z.stateNode;if(z.tag===5&&te!==null&&(z=te,F!==null&&(te=ot(x,F),te!=null&&ce.push(Pa(x,te,z)))),at)break;x=x.return}0<ce.length&&(Q=new se(Q,ue,null,a,Y),X.push({event:Q,listeners:ce}))}}if((i&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",se=r==="mouseout"||r==="pointerout",Q&&a!==zi&&(ue=a.relatedTarget||a.fromElement)&&(Zi(ue)||ue[Pr]))break e;if((se||Q)&&(Q=Y.window===Y?Y:(Q=Y.ownerDocument)?Q.defaultView||Q.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=j,ue=ue?Zi(ue):null,ue!==null&&(at=Rn(ue),ue!==at||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=j),se!==ue)){if(ce=eo,te="onMouseLeave",F="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(ce=E,te="onPointerLeave",F="onPointerEnter",x="pointer"),at=se==null?Q:co(se),z=ue==null?Q:co(ue),Q=new ce(te,x+"leave",se,a,Y),Q.target=at,Q.relatedTarget=z,te=null,Zi(Y)===j&&(ce=new ce(F,x+"enter",ue,a,Y),ce.target=z,ce.relatedTarget=at,te=ce),at=te,se&&ue)t:{for(ce=se,F=ue,x=0,z=ce;z;z=lo(z))x++;for(z=0,te=F;te;te=lo(te))z++;for(;0<x-z;)ce=lo(ce),x--;for(;0<z-x;)F=lo(F),z--;for(;x--;){if(ce===F||F!==null&&ce===F.alternate)break t;ce=lo(ce),F=lo(F)}ce=null}else ce=null;se!==null&&Tm(X,Q,se,ce,!1),ue!==null&&at!==null&&Tm(X,at,ue,ce,!0)}}e:{if(Q=j?co(j):window,se=Q.nodeName&&Q.nodeName.toLowerCase(),se==="select"||se==="input"&&Q.type==="file")var he=Zw;else if(tm(Q))if(rm)he=rE;else{he=tE;var ge=eE}else(se=Q.nodeName)&&se.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=nE);if(he&&(he=he(r,j))){nm(X,he,a,Y);break e}ge&&ge(r,Q,j),r==="focusout"&&(ge=Q._wrapperState)&&ge.controlled&&Q.type==="number"&&Ls(Q,"number",Q.value)}switch(ge=j?co(j):window,r){case"focusin":(tm(ge)||ge.contentEditable==="true")&&(oo=ge,_f=j,Sa=null);break;case"focusout":Sa=_f=oo=null;break;case"mousedown":wf=!0;break;case"contextmenu":case"mouseup":case"dragend":wf=!1,fm(X,a,Y);break;case"selectionchange":if(oE)break;case"keydown":case"keyup":fm(X,a,Y)}var ye;if(lt)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else so?Zp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Ji&&a.locale!=="ko"&&(so||we!=="onCompositionStart"?we==="onCompositionEnd"&&so&&(ye=ya()):(un=Y,Ys="value"in un?un.value:un.textContent,so=!0)),ge=nu(j,we),0<ge.length&&(we=new wa(we,r,null,a,Y),X.push({event:we,listeners:ge}),ye?we.data=ye:(ye=em(a),ye!==null&&(we.data=ye)))),(ye=cn?Qw(r,a):Yw(r,a))&&(j=nu(j,"onBeforeInput"),0<j.length&&(Y=new wa("onBeforeInput","beforeinput",null,a,Y),X.push({event:Y,listeners:j}),Y.data=ye))}wm(X,i)})}function Pa(r,i,a){return{instance:r,listener:i,currentTarget:a}}function nu(r,i){for(var a=i+"Capture",c=[];r!==null;){var h=r,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=ot(r,a),m!=null&&c.unshift(Pa(r,m,h)),m=ot(r,i),m!=null&&c.push(Pa(r,m,h))),r=r.return}return c}function lo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Tm(r,i,a,c,h){for(var m=i._reactName,_=[];a!==null&&a!==c;){var S=a,k=S.alternate,j=S.stateNode;if(k!==null&&k===c)break;S.tag===5&&j!==null&&(S=j,h?(k=ot(a,m),k!=null&&_.unshift(Pa(a,k,S))):h||(k=ot(a,m),k!=null&&_.push(Pa(a,k,S)))),a=a.return}_.length!==0&&r.push({event:i,listeners:_})}var cE=/\r\n?/g,fE=/\u0000|\uFFFD/g;function Im(r){return(typeof r=="string"?r:""+r).replace(cE,`
`).replace(fE,"")}function ru(r,i,a){if(i=Im(i),Im(r)!==i&&a)throw Error(t(425))}function iu(){}var Cf=null,Pf=null;function kf(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rf=typeof setTimeout=="function"?setTimeout:void 0,hE=typeof clearTimeout=="function"?clearTimeout:void 0,Sm=typeof Promise=="function"?Promise:void 0,dE=typeof queueMicrotask=="function"?queueMicrotask:typeof Sm<"u"?function(r){return Sm.resolve(null).then(r).catch(pE)}:Rf;function pE(r){setTimeout(function(){throw r})}function Nf(r,i){var a=i,c=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){r.removeChild(h),Dn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Dn(i)}function si(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Am(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var uo=Math.random().toString(36).slice(2),tr="__reactFiber$"+uo,ka="__reactProps$"+uo,Pr="__reactContainer$"+uo,xf="__reactEvents$"+uo,mE="__reactListeners$"+uo,gE="__reactHandles$"+uo;function Zi(r){var i=r[tr];if(i)return i;for(var a=r.parentNode;a;){if(i=a[Pr]||a[tr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Am(r);r!==null;){if(a=r[tr])return a;r=Am(r)}return i}r=a,a=r.parentNode}return null}function Ra(r){return r=r[tr]||r[Pr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function co(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function su(r){return r[ka]||null}var bf=[],fo=-1;function oi(r){return{current:r}}function Ke(r){0>fo||(r.current=bf[fo],bf[fo]=null,fo--)}function We(r,i){fo++,bf[fo]=r.current,r.current=i}var ai={},Lt=oi(ai),Xt=oi(!1),es=ai;function ho(r,i){var a=r.type.contextTypes;if(!a)return ai;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=h),h}function Jt(r){return r=r.childContextTypes,r!=null}function ou(){Ke(Xt),Ke(Lt)}function Cm(r,i,a){if(Lt.current!==ai)throw Error(t(168));We(Lt,i),We(Xt,a)}function Pm(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,Ve(r)||"Unknown",h));return oe({},a,c)}function au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ai,es=Lt.current,We(Lt,r),We(Xt,Xt.current),!0}function km(r,i,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=Pm(r,i,es),c.__reactInternalMemoizedMergedChildContext=r,Ke(Xt),Ke(Lt),We(Lt,r)):Ke(Xt),We(Xt,a)}var kr=null,lu=!1,Of=!1;function Rm(r){kr===null?kr=[r]:kr.push(r)}function yE(r){lu=!0,Rm(r)}function li(){if(!Of&&kr!==null){Of=!0;var r=0,i=Ne;try{var a=kr;for(Ne=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}kr=null,lu=!1}catch(h){throw kr!==null&&(kr=kr.slice(r+1)),Ws(Wi,li),h}finally{Ne=i,Of=!1}}return null}var po=[],mo=0,uu=null,cu=0,wn=[],En=0,ts=null,Rr=1,Nr="";function ns(r,i){po[mo++]=cu,po[mo++]=uu,uu=r,cu=i}function Nm(r,i,a){wn[En++]=Rr,wn[En++]=Nr,wn[En++]=ts,ts=r;var c=Rr;r=Nr;var h=32-Ht(c)-1;c&=~(1<<h),a+=1;var m=32-Ht(i)+h;if(30<m){var _=h-h%5;m=(c&(1<<_)-1).toString(32),c>>=_,h-=_,Rr=1<<32-Ht(i)+h|a<<h|c,Nr=m+r}else Rr=1<<m|a<<h|c,Nr=r}function Df(r){r.return!==null&&(ns(r,1),Nm(r,1,0))}function Lf(r){for(;r===uu;)uu=po[--mo],po[mo]=null,cu=po[--mo],po[mo]=null;for(;r===ts;)ts=wn[--En],wn[En]=null,Nr=wn[--En],wn[En]=null,Rr=wn[--En],wn[En]=null}var fn=null,hn=null,Xe=!1,Vn=null;function xm(r,i){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function bm(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,fn=r,hn=si(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,fn=r,hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ts!==null?{id:Rr,overflow:Nr}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,fn=r,hn=null,!0):!1;default:return!1}}function Mf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Vf(r){if(Xe){var i=hn;if(i){var a=i;if(!bm(r,i)){if(Mf(r))throw Error(t(418));i=si(a.nextSibling);var c=fn;i&&bm(r,i)?xm(c,a):(r.flags=r.flags&-4097|2,Xe=!1,fn=r)}}else{if(Mf(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,fn=r}}}function Om(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;fn=r}function fu(r){if(r!==fn)return!1;if(!Xe)return Om(r),Xe=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!kf(r.type,r.memoizedProps)),i&&(i=hn)){if(Mf(r))throw Dm(),Error(t(418));for(;i;)xm(r,i),i=si(i.nextSibling)}if(Om(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){hn=si(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}hn=null}}else hn=fn?si(r.stateNode.nextSibling):null;return!0}function Dm(){for(var r=hn;r;)r=si(r.nextSibling)}function go(){hn=fn=null,Xe=!1}function Ff(r){Vn===null?Vn=[r]:Vn.push(r)}var vE=ae.ReactCurrentBatchConfig;function Na(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var h=c,m=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var S=h.refs;_===null?delete S[m]:S[m]=_},i._stringRef=m,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function hu(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Lm(r){var i=r._init;return i(r._payload)}function Mm(r){function i(F,x){if(r){var z=F.deletions;z===null?(F.deletions=[x],F.flags|=16):z.push(x)}}function a(F,x){if(!r)return null;for(;x!==null;)i(F,x),x=x.sibling;return null}function c(F,x){for(F=new Map;x!==null;)x.key!==null?F.set(x.key,x):F.set(x.index,x),x=x.sibling;return F}function h(F,x){return F=gi(F,x),F.index=0,F.sibling=null,F}function m(F,x,z){return F.index=z,r?(z=F.alternate,z!==null?(z=z.index,z<x?(F.flags|=2,x):z):(F.flags|=2,x)):(F.flags|=1048576,x)}function _(F){return r&&F.alternate===null&&(F.flags|=2),F}function S(F,x,z,te){return x===null||x.tag!==6?(x=Rh(z,F.mode,te),x.return=F,x):(x=h(x,z),x.return=F,x)}function k(F,x,z,te){var he=z.type;return he===N?Y(F,x,z.props.children,te,z.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Lm(he)===x.type)?(te=h(x,z.props),te.ref=Na(F,x,z),te.return=F,te):(te=Mu(z.type,z.key,z.props,null,F.mode,te),te.ref=Na(F,x,z),te.return=F,te)}function j(F,x,z,te){return x===null||x.tag!==4||x.stateNode.containerInfo!==z.containerInfo||x.stateNode.implementation!==z.implementation?(x=Nh(z,F.mode,te),x.return=F,x):(x=h(x,z.children||[]),x.return=F,x)}function Y(F,x,z,te,he){return x===null||x.tag!==7?(x=cs(z,F.mode,te,he),x.return=F,x):(x=h(x,z),x.return=F,x)}function X(F,x,z){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Rh(""+x,F.mode,z),x.return=F,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ve:return z=Mu(x.type,x.key,x.props,null,F.mode,z),z.ref=Na(F,null,x),z.return=F,z;case Te:return x=Nh(x,F.mode,z),x.return=F,x;case Dt:var te=x._init;return X(F,te(x._payload),z)}if(vr(x)||me(x))return x=cs(x,F.mode,z,null),x.return=F,x;hu(F,x)}return null}function Q(F,x,z,te){var he=x!==null?x.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return he!==null?null:S(F,x,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case ve:return z.key===he?k(F,x,z,te):null;case Te:return z.key===he?j(F,x,z,te):null;case Dt:return he=z._init,Q(F,x,he(z._payload),te)}if(vr(z)||me(z))return he!==null?null:Y(F,x,z,te,null);hu(F,z)}return null}function se(F,x,z,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return F=F.get(z)||null,S(x,F,""+te,he);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case ve:return F=F.get(te.key===null?z:te.key)||null,k(x,F,te,he);case Te:return F=F.get(te.key===null?z:te.key)||null,j(x,F,te,he);case Dt:var ge=te._init;return se(F,x,z,ge(te._payload),he)}if(vr(te)||me(te))return F=F.get(z)||null,Y(x,F,te,he,null);hu(x,te)}return null}function ue(F,x,z,te){for(var he=null,ge=null,ye=x,we=x=0,wt=null;ye!==null&&we<z.length;we++){ye.index>we?(wt=ye,ye=null):wt=ye.sibling;var Me=Q(F,ye,z[we],te);if(Me===null){ye===null&&(ye=wt);break}r&&ye&&Me.alternate===null&&i(F,ye),x=m(Me,x,we),ge===null?he=Me:ge.sibling=Me,ge=Me,ye=wt}if(we===z.length)return a(F,ye),Xe&&ns(F,we),he;if(ye===null){for(;we<z.length;we++)ye=X(F,z[we],te),ye!==null&&(x=m(ye,x,we),ge===null?he=ye:ge.sibling=ye,ge=ye);return Xe&&ns(F,we),he}for(ye=c(F,ye);we<z.length;we++)wt=se(ye,F,we,z[we],te),wt!==null&&(r&&wt.alternate!==null&&ye.delete(wt.key===null?we:wt.key),x=m(wt,x,we),ge===null?he=wt:ge.sibling=wt,ge=wt);return r&&ye.forEach(function(yi){return i(F,yi)}),Xe&&ns(F,we),he}function ce(F,x,z,te){var he=me(z);if(typeof he!="function")throw Error(t(150));if(z=he.call(z),z==null)throw Error(t(151));for(var ge=he=null,ye=x,we=x=0,wt=null,Me=z.next();ye!==null&&!Me.done;we++,Me=z.next()){ye.index>we?(wt=ye,ye=null):wt=ye.sibling;var yi=Q(F,ye,Me.value,te);if(yi===null){ye===null&&(ye=wt);break}r&&ye&&yi.alternate===null&&i(F,ye),x=m(yi,x,we),ge===null?he=yi:ge.sibling=yi,ge=yi,ye=wt}if(Me.done)return a(F,ye),Xe&&ns(F,we),he;if(ye===null){for(;!Me.done;we++,Me=z.next())Me=X(F,Me.value,te),Me!==null&&(x=m(Me,x,we),ge===null?he=Me:ge.sibling=Me,ge=Me);return Xe&&ns(F,we),he}for(ye=c(F,ye);!Me.done;we++,Me=z.next())Me=se(ye,F,we,Me.value,te),Me!==null&&(r&&Me.alternate!==null&&ye.delete(Me.key===null?we:Me.key),x=m(Me,x,we),ge===null?he=Me:ge.sibling=Me,ge=Me);return r&&ye.forEach(function(XE){return i(F,XE)}),Xe&&ns(F,we),he}function at(F,x,z,te){if(typeof z=="object"&&z!==null&&z.type===N&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case ve:e:{for(var he=z.key,ge=x;ge!==null;){if(ge.key===he){if(he=z.type,he===N){if(ge.tag===7){a(F,ge.sibling),x=h(ge,z.props.children),x.return=F,F=x;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Lm(he)===ge.type){a(F,ge.sibling),x=h(ge,z.props),x.ref=Na(F,ge,z),x.return=F,F=x;break e}a(F,ge);break}else i(F,ge);ge=ge.sibling}z.type===N?(x=cs(z.props.children,F.mode,te,z.key),x.return=F,F=x):(te=Mu(z.type,z.key,z.props,null,F.mode,te),te.ref=Na(F,x,z),te.return=F,F=te)}return _(F);case Te:e:{for(ge=z.key;x!==null;){if(x.key===ge)if(x.tag===4&&x.stateNode.containerInfo===z.containerInfo&&x.stateNode.implementation===z.implementation){a(F,x.sibling),x=h(x,z.children||[]),x.return=F,F=x;break e}else{a(F,x);break}else i(F,x);x=x.sibling}x=Nh(z,F.mode,te),x.return=F,F=x}return _(F);case Dt:return ge=z._init,at(F,x,ge(z._payload),te)}if(vr(z))return ue(F,x,z,te);if(me(z))return ce(F,x,z,te);hu(F,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,x!==null&&x.tag===6?(a(F,x.sibling),x=h(x,z),x.return=F,F=x):(a(F,x),x=Rh(z,F.mode,te),x.return=F,F=x),_(F)):a(F,x)}return at}var yo=Mm(!0),Vm=Mm(!1),du=oi(null),pu=null,vo=null,Uf=null;function zf(){Uf=vo=pu=null}function jf(r){var i=du.current;Ke(du),r._currentValue=i}function Bf(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function _o(r,i){pu=r,Uf=vo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Zt=!0),r.firstContext=null)}function Tn(r){var i=r._currentValue;if(Uf!==r)if(r={context:r,memoizedValue:i,next:null},vo===null){if(pu===null)throw Error(t(308));vo=r,pu.dependencies={lanes:0,firstContext:r}}else vo=vo.next=r;return i}var rs=null;function $f(r){rs===null?rs=[r]:rs.push(r)}function Fm(r,i,a,c){var h=i.interleaved;return h===null?(a.next=a,$f(i)):(a.next=h.next,h.next=a),i.interleaved=a,xr(r,c)}function xr(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ui=!1;function Hf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Um(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function br(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function ci(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,xr(r,a)}return h=c.interleaved,h===null?(i.next=i,$f(c)):(i.next=h.next,h.next=i),c.interleaved=i,xr(r,a)}function mu(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Zr(r,a)}}function zm(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function gu(r,i,a,c){var h=r.updateQueue;ui=!1;var m=h.firstBaseUpdate,_=h.lastBaseUpdate,S=h.shared.pending;if(S!==null){h.shared.pending=null;var k=S,j=k.next;k.next=null,_===null?m=j:_.next=j,_=k;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==_&&(S===null?Y.firstBaseUpdate=j:S.next=j,Y.lastBaseUpdate=k))}if(m!==null){var X=h.baseState;_=0,Y=j=k=null,S=m;do{var Q=S.lane,se=S.eventTime;if((c&Q)===Q){Y!==null&&(Y=Y.next={eventTime:se,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=r,ce=S;switch(Q=i,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){X=ue.call(se,X,Q);break e}X=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Q=typeof ue=="function"?ue.call(se,X,Q):ue,Q==null)break e;X=oe({},X,Q);break e;case 2:ui=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,Q=h.effects,Q===null?h.effects=[S]:Q.push(S))}else se={eventTime:se,lane:Q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(j=Y=se,k=X):Y=Y.next=se,_|=Q;if(S=S.next,S===null){if(S=h.shared.pending,S===null)break;Q=S,S=Q.next,Q.next=null,h.lastBaseUpdate=Q,h.shared.pending=null}}while(!0);if(Y===null&&(k=X),h.baseState=k,h.firstBaseUpdate=j,h.lastBaseUpdate=Y,i=h.shared.interleaved,i!==null){h=i;do _|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);os|=_,r.lanes=_,r.memoizedState=X}}function jm(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var xa={},nr=oi(xa),ba=oi(xa),Oa=oi(xa);function is(r){if(r===xa)throw Error(t(174));return r}function Wf(r,i){switch(We(Oa,i),We(ba,r),We(nr,xa),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=ht(i,r)}Ke(nr),We(nr,i)}function wo(){Ke(nr),Ke(ba),Ke(Oa)}function Bm(r){is(Oa.current);var i=is(nr.current),a=ht(i,r.type);i!==a&&(We(ba,r),We(nr,a))}function qf(r){ba.current===r&&(Ke(nr),Ke(ba))}var Ze=oi(0);function yu(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gf=[];function Kf(){for(var r=0;r<Gf.length;r++)Gf[r]._workInProgressVersionPrimary=null;Gf.length=0}var vu=ae.ReactCurrentDispatcher,Qf=ae.ReactCurrentBatchConfig,ss=0,et=null,pt=null,vt=null,_u=!1,Da=!1,La=0,_E=0;function Mt(){throw Error(t(321))}function Yf(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Mn(r[a],i[a]))return!1;return!0}function Xf(r,i,a,c,h,m){if(ss=m,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,vu.current=r===null||r.memoizedState===null?IE:SE,r=a(c,h),Da){m=0;do{if(Da=!1,La=0,25<=m)throw Error(t(301));m+=1,vt=pt=null,i.updateQueue=null,vu.current=AE,r=a(c,h)}while(Da)}if(vu.current=Tu,i=pt!==null&&pt.next!==null,ss=0,vt=pt=et=null,_u=!1,i)throw Error(t(300));return r}function Jf(){var r=La!==0;return La=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?et.memoizedState=vt=r:vt=vt.next=r,vt}function In(){if(pt===null){var r=et.alternate;r=r!==null?r.memoizedState:null}else r=pt.next;var i=vt===null?et.memoizedState:vt.next;if(i!==null)vt=i,pt=r;else{if(r===null)throw Error(t(310));pt=r,r={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},vt===null?et.memoizedState=vt=r:vt=vt.next=r}return vt}function Ma(r,i){return typeof i=="function"?i(r):i}function Zf(r){var i=In(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=pt,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var _=h.next;h.next=m.next,m.next=_}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var S=_=null,k=null,j=m;do{var Y=j.lane;if((ss&Y)===Y)k!==null&&(k=k.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:r(c,j.action);else{var X={lane:Y,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};k===null?(S=k=X,_=c):k=k.next=X,et.lanes|=Y,os|=Y}j=j.next}while(j!==null&&j!==m);k===null?_=c:k.next=S,Mn(c,i.memoizedState)||(Zt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=k,a.lastRenderedState=c}if(r=a.interleaved,r!==null){h=r;do m=h.lane,et.lanes|=m,os|=m,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function eh(r){var i=In(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do m=r(m,_.action),_=_.next;while(_!==h);Mn(m,i.memoizedState)||(Zt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function $m(){}function Hm(r,i){var a=et,c=In(),h=i(),m=!Mn(c.memoizedState,h);if(m&&(c.memoizedState=h,Zt=!0),c=c.queue,th(Gm.bind(null,a,c,r),[r]),c.getSnapshot!==i||m||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,Va(9,qm.bind(null,a,c,h,i),void 0,null),_t===null)throw Error(t(349));(ss&30)!==0||Wm(a,i,h)}return h}function Wm(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function qm(r,i,a,c){i.value=a,i.getSnapshot=c,Km(i)&&Qm(r)}function Gm(r,i,a){return a(function(){Km(i)&&Qm(r)})}function Km(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Mn(r,a)}catch{return!0}}function Qm(r){var i=xr(r,1);i!==null&&jn(i,r,1,-1)}function Ym(r){var i=rr();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:r},i.queue=r,r=r.dispatch=TE.bind(null,et,r),[i.memoizedState,r]}function Va(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function Xm(){return In().memoizedState}function wu(r,i,a,c){var h=rr();et.flags|=r,h.memoizedState=Va(1|i,a,void 0,c===void 0?null:c)}function Eu(r,i,a,c){var h=In();c=c===void 0?null:c;var m=void 0;if(pt!==null){var _=pt.memoizedState;if(m=_.destroy,c!==null&&Yf(c,_.deps)){h.memoizedState=Va(i,a,m,c);return}}et.flags|=r,h.memoizedState=Va(1|i,a,m,c)}function Jm(r,i){return wu(8390656,8,r,i)}function th(r,i){return Eu(2048,8,r,i)}function Zm(r,i){return Eu(4,2,r,i)}function eg(r,i){return Eu(4,4,r,i)}function tg(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function ng(r,i,a){return a=a!=null?a.concat([r]):null,Eu(4,4,tg.bind(null,i,r),a)}function nh(){}function rg(r,i){var a=In();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Yf(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function ig(r,i){var a=In();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Yf(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function sg(r,i,a){return(ss&21)===0?(r.baseState&&(r.baseState=!1,Zt=!0),r.memoizedState=a):(Mn(a,i)||(a=Ki(),et.lanes|=a,os|=a,r.baseState=!0),i)}function wE(r,i){var a=Ne;Ne=a!==0&&4>a?a:4,r(!0);var c=Qf.transition;Qf.transition={};try{r(!1),i()}finally{Ne=a,Qf.transition=c}}function og(){return In().memoizedState}function EE(r,i,a){var c=pi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ag(r))lg(i,a);else if(a=Fm(r,i,a,c),a!==null){var h=Gt();jn(a,r,c,h),ug(a,i,c)}}function TE(r,i,a){var c=pi(r),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ag(r))lg(i,h);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,S=m(_,a);if(h.hasEagerState=!0,h.eagerState=S,Mn(S,_)){var k=i.interleaved;k===null?(h.next=h,$f(i)):(h.next=k.next,k.next=h),i.interleaved=h;return}}catch{}finally{}a=Fm(r,i,h,c),a!==null&&(h=Gt(),jn(a,r,c,h),ug(a,i,c))}}function ag(r){var i=r.alternate;return r===et||i!==null&&i===et}function lg(r,i){Da=_u=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function ug(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Zr(r,a)}}var Tu={readContext:Tn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},IE={readContext:Tn,useCallback:function(r,i){return rr().memoizedState=[r,i===void 0?null:i],r},useContext:Tn,useEffect:Jm,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,wu(4194308,4,tg.bind(null,i,r),a)},useLayoutEffect:function(r,i){return wu(4194308,4,r,i)},useInsertionEffect:function(r,i){return wu(4,2,r,i)},useMemo:function(r,i){var a=rr();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=rr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=EE.bind(null,et,r),[c.memoizedState,r]},useRef:function(r){var i=rr();return r={current:r},i.memoizedState=r},useState:Ym,useDebugValue:nh,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=Ym(!1),i=r[0];return r=wE.bind(null,r[1]),rr().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=et,h=rr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_t===null)throw Error(t(349));(ss&30)!==0||Wm(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Jm(Gm.bind(null,c,m,r),[r]),c.flags|=2048,Va(9,qm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var r=rr(),i=_t.identifierPrefix;if(Xe){var a=Nr,c=Rr;a=(c&~(1<<32-Ht(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=_E++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},SE={readContext:Tn,useCallback:rg,useContext:Tn,useEffect:th,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:Zf,useRef:Xm,useState:function(){return Zf(Ma)},useDebugValue:nh,useDeferredValue:function(r){var i=In();return sg(i,pt.memoizedState,r)},useTransition:function(){var r=Zf(Ma)[0],i=In().memoizedState;return[r,i]},useMutableSource:$m,useSyncExternalStore:Hm,useId:og,unstable_isNewReconciler:!1},AE={readContext:Tn,useCallback:rg,useContext:Tn,useEffect:th,useImperativeHandle:ng,useInsertionEffect:Zm,useLayoutEffect:eg,useMemo:ig,useReducer:eh,useRef:Xm,useState:function(){return eh(Ma)},useDebugValue:nh,useDeferredValue:function(r){var i=In();return pt===null?i.memoizedState=r:sg(i,pt.memoizedState,r)},useTransition:function(){var r=eh(Ma)[0],i=In().memoizedState;return[r,i]},useMutableSource:$m,useSyncExternalStore:Hm,useId:og,unstable_isNewReconciler:!1};function Fn(r,i){if(r&&r.defaultProps){i=oe({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function rh(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Iu={isMounted:function(r){return(r=r._reactInternals)?Rn(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=Gt(),h=pi(r),m=br(c,h);m.payload=i,a!=null&&(m.callback=a),i=ci(r,m,h),i!==null&&(jn(i,r,h,c),mu(i,r,h))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=Gt(),h=pi(r),m=br(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ci(r,m,h),i!==null&&(jn(i,r,h,c),mu(i,r,h))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Gt(),c=pi(r),h=br(a,c);h.tag=2,i!=null&&(h.callback=i),i=ci(r,h,c),i!==null&&(jn(i,r,c,a),mu(i,r,c))}};function cg(r,i,a,c,h,m,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!Ia(a,c)||!Ia(h,m):!0}function fg(r,i,a){var c=!1,h=ai,m=i.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(h=Jt(i)?es:Lt.current,c=i.contextTypes,m=(c=c!=null)?ho(r,h):ai),i=new i(a,m),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Iu,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=m),i}function hg(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&Iu.enqueueReplaceState(i,i.state,null)}function ih(r,i,a,c){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},Hf(r);var m=i.contextType;typeof m=="object"&&m!==null?h.context=Tn(m):(m=Jt(i)?es:Lt.current,h.context=ho(r,m)),h.state=r.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(rh(r,i,m,a),h.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Iu.enqueueReplaceState(h,h.state,null),gu(r,a,h,c),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function Eo(r,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:i,stack:h,digest:null}}function sh(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function oh(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var CE=typeof WeakMap=="function"?WeakMap:Map;function dg(r,i,a){a=br(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Nu||(Nu=!0,Eh=c),oh(r,i)},a}function pg(r,i,a){a=br(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){oh(r,i)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){oh(r,i),typeof c!="function"&&(hi===null?hi=new Set([this]):hi.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function mg(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new CE;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),r=zE.bind(null,r,i,a),i.then(r,r))}function gg(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function yg(r,i,a,c,h){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=br(-1,1),i.tag=2,ci(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var PE=ae.ReactCurrentOwner,Zt=!1;function qt(r,i,a,c){i.child=r===null?Vm(i,null,a,c):yo(i,r.child,a,c)}function vg(r,i,a,c,h){a=a.render;var m=i.ref;return _o(i,h),c=Xf(r,i,a,c,m,h),a=Jf(),r!==null&&!Zt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~h,Or(r,i,h)):(Xe&&a&&Df(i),i.flags|=1,qt(r,i,c,h),i.child)}function _g(r,i,a,c,h){if(r===null){var m=a.type;return typeof m=="function"&&!kh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,wg(r,i,m,c,h)):(r=Mu(a.type,null,c,i,i.mode,h),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,(r.lanes&h)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ia,a(_,c)&&r.ref===i.ref)return Or(r,i,h)}return i.flags|=1,r=gi(m,c),r.ref=i.ref,r.return=i,i.child=r}function wg(r,i,a,c,h){if(r!==null){var m=r.memoizedProps;if(Ia(m,c)&&r.ref===i.ref)if(Zt=!1,i.pendingProps=c=m,(r.lanes&h)!==0)(r.flags&131072)!==0&&(Zt=!0);else return i.lanes=r.lanes,Or(r,i,h)}return ah(r,i,a,c,h)}function Eg(r,i,a){var c=i.pendingProps,h=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Io,dn),dn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,We(Io,dn),dn|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,We(Io,dn),dn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,We(Io,dn),dn|=c;return qt(r,i,h,a),i.child}function Tg(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ah(r,i,a,c,h){var m=Jt(a)?es:Lt.current;return m=ho(i,m),_o(i,h),a=Xf(r,i,a,c,m,h),c=Jf(),r!==null&&!Zt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~h,Or(r,i,h)):(Xe&&c&&Df(i),i.flags|=1,qt(r,i,a,h),i.child)}function Ig(r,i,a,c,h){if(Jt(a)){var m=!0;au(i)}else m=!1;if(_o(i,h),i.stateNode===null)Au(r,i),fg(i,a,c),ih(i,a,c,h),c=!0;else if(r===null){var _=i.stateNode,S=i.memoizedProps;_.props=S;var k=_.context,j=a.contextType;typeof j=="object"&&j!==null?j=Tn(j):(j=Jt(a)?es:Lt.current,j=ho(i,j));var Y=a.getDerivedStateFromProps,X=typeof Y=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==c||k!==j)&&hg(i,_,c,j),ui=!1;var Q=i.memoizedState;_.state=Q,gu(i,c,_,h),k=i.memoizedState,S!==c||Q!==k||Xt.current||ui?(typeof Y=="function"&&(rh(i,a,Y,c),k=i.memoizedState),(S=ui||cg(i,a,S,c,Q,k,j))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),_.props=c,_.state=k,_.context=j,c=S):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,Um(r,i),S=i.memoizedProps,j=i.type===i.elementType?S:Fn(i.type,S),_.props=j,X=i.pendingProps,Q=_.context,k=a.contextType,typeof k=="object"&&k!==null?k=Tn(k):(k=Jt(a)?es:Lt.current,k=ho(i,k));var se=a.getDerivedStateFromProps;(Y=typeof se=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==X||Q!==k)&&hg(i,_,c,k),ui=!1,Q=i.memoizedState,_.state=Q,gu(i,c,_,h);var ue=i.memoizedState;S!==X||Q!==ue||Xt.current||ui?(typeof se=="function"&&(rh(i,a,se,c),ue=i.memoizedState),(j=ui||cg(i,a,j,c,Q,ue,k)||!1)?(Y||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ue,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ue,k)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ue),_.props=c,_.state=ue,_.context=k,c=j):(typeof _.componentDidUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),c=!1)}return lh(r,i,a,c,m,h)}function lh(r,i,a,c,h,m){Tg(r,i);var _=(i.flags&128)!==0;if(!c&&!_)return h&&km(i,a,!1),Or(r,i,m);c=i.stateNode,PE.current=i;var S=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&_?(i.child=yo(i,r.child,null,m),i.child=yo(i,null,S,m)):qt(r,i,S,m),i.memoizedState=c.state,h&&km(i,a,!0),i.child}function Sg(r){var i=r.stateNode;i.pendingContext?Cm(r,i.pendingContext,i.pendingContext!==i.context):i.context&&Cm(r,i.context,!1),Wf(r,i.containerInfo)}function Ag(r,i,a,c,h){return go(),Ff(h),i.flags|=256,qt(r,i,a,c),i.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(r){return{baseLanes:r,cachePool:null,transitions:null}}function Cg(r,i,a){var c=i.pendingProps,h=Ze.current,m=!1,_=(i.flags&128)!==0,S;if((S=_)||(S=r!==null&&r.memoizedState===null?!1:(h&2)!==0),S?(m=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),We(Ze,h&1),r===null)return Vf(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,r=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=Vu(_,c,0,null),r=cs(r,c,a,null),m.return=i,r.return=i,m.sibling=r,i.child=m,i.child.memoizedState=ch(a),i.memoizedState=uh,r):fh(i,_));if(h=r.memoizedState,h!==null&&(S=h.dehydrated,S!==null))return kE(r,i,_,c,S,h,a);if(m){m=c.fallback,_=i.mode,h=r.child,S=h.sibling;var k={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=gi(h,k),c.subtreeFlags=h.subtreeFlags&14680064),S!==null?m=gi(S,m):(m=cs(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=r.child.memoizedState,_=_===null?ch(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=r.childLanes&~a,i.memoizedState=uh,c}return m=r.child,r=m.sibling,c=gi(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function fh(r,i){return i=Vu({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Su(r,i,a,c){return c!==null&&Ff(c),yo(i,r.child,null,a),r=fh(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function kE(r,i,a,c,h,m,_){if(a)return i.flags&256?(i.flags&=-257,c=sh(Error(t(422))),Su(r,i,_,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=Vu({mode:"visible",children:c.children},h,0,null),m=cs(m,h,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&yo(i,r.child,null,_),i.child.memoizedState=ch(_),i.memoizedState=uh,m);if((i.mode&1)===0)return Su(r,i,_,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=sh(m,c,void 0),Su(r,i,_,c)}if(S=(_&r.childLanes)!==0,Zt||S){if(c=_t,c!==null){switch(_&-_){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|_))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,xr(r,h),jn(c,r,h,-1))}return Ph(),c=sh(Error(t(421))),Su(r,i,_,c)}return h.data==="$?"?(i.flags|=128,i.child=r.child,i=jE.bind(null,r),h._reactRetry=i,null):(r=m.treeContext,hn=si(h.nextSibling),fn=i,Xe=!0,Vn=null,r!==null&&(wn[En++]=Rr,wn[En++]=Nr,wn[En++]=ts,Rr=r.id,Nr=r.overflow,ts=i),i=fh(i,c.children),i.flags|=4096,i)}function Pg(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),Bf(r.return,i,a)}function hh(r,i,a,c,h){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function kg(r,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(qt(r,i,c.children,a),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Pg(r,a,i);else if(r.tag===19)Pg(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)r=a.alternate,r!==null&&yu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),hh(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(r=h.alternate,r!==null&&yu(r)===null){i.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}hh(i,!0,a,null,m);break;case"together":hh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Au(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Or(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),os|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=gi(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=gi(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function RE(r,i,a){switch(i.tag){case 3:Sg(i),go();break;case 5:Bm(i);break;case 1:Jt(i.type)&&au(i);break;case 4:Wf(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;We(du,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cg(r,i,a):(We(Ze,Ze.current&1),r=Or(r,i,a),r!==null?r.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return kg(r,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,Eg(r,i,a)}return Or(r,i,a)}var Rg,dh,Ng,xg;Rg=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},dh=function(){},Ng=function(r,i,a,c){var h=r.memoizedProps;if(h!==c){r=i.stateNode,is(nr.current);var m=null;switch(a){case"input":h=Vi(r,h),c=Vi(r,c),m=[];break;case"select":h=oe({},h,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":h=Jo(r,h),c=Jo(r,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=iu)}ia(a,c);var _;a=null;for(j in h)if(!c.hasOwnProperty(j)&&h.hasOwnProperty(j)&&h[j]!=null)if(j==="style"){var S=h[j];for(_ in S)S.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var k=c[j];if(S=h!=null?h[j]:void 0,c.hasOwnProperty(j)&&k!==S&&(k!=null||S!=null))if(j==="style")if(S){for(_ in S)!S.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in k)k.hasOwnProperty(_)&&S[_]!==k[_]&&(a||(a={}),a[_]=k[_])}else a||(m||(m=[]),m.push(j,a)),a=k;else j==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,S=S?S.__html:void 0,k!=null&&S!==k&&(m=m||[]).push(j,k)):j==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(j,""+k):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(k!=null&&j==="onScroll"&&Ge("scroll",r),m||S===k||(m=[])):(m=m||[]).push(j,k))}a&&(m=m||[]).push("style",a);var j=m;(i.updateQueue=j)&&(i.flags|=4)}},xg=function(r,i,a,c){a!==c&&(i.flags|=4)};function Fa(r,i){if(!Xe)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Vt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function NE(r,i,a){var c=i.pendingProps;switch(Lf(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(i),null;case 1:return Jt(i.type)&&ou(),Vt(i),null;case 3:return c=i.stateNode,wo(),Ke(Xt),Ke(Lt),Kf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(fu(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vn!==null&&(Sh(Vn),Vn=null))),dh(r,i),Vt(i),null;case 5:qf(i);var h=is(Oa.current);if(a=i.type,r!==null&&i.stateNode!=null)Ng(r,i,a,c,h),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Vt(i),null}if(r=is(nr.current),fu(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[tr]=i,c[ka]=m,r=(i.mode&1)!==0,a){case"dialog":Ge("cancel",c),Ge("close",c);break;case"iframe":case"object":case"embed":Ge("load",c);break;case"video":case"audio":for(h=0;h<Aa.length;h++)Ge(Aa[h],c);break;case"source":Ge("error",c);break;case"img":case"image":case"link":Ge("error",c),Ge("load",c);break;case"details":Ge("toggle",c);break;case"input":Ds(c,m),Ge("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ge("invalid",c);break;case"textarea":Ms(c,m),Ge("invalid",c)}ia(a,m),h=null;for(var _ in m)if(m.hasOwnProperty(_)){var S=m[_];_==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&ru(c.textContent,S,r),h=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&ru(c.textContent,S,r),h=["children",""+S]):o.hasOwnProperty(_)&&S!=null&&_==="onScroll"&&Ge("scroll",c)}switch(a){case"input":yr(c),Rl(c,m,!0);break;case"textarea":yr(c),Zo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=iu)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ft(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=_.createElement(a,{is:c.is}):(r=_.createElement(a),a==="select"&&(_=r,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):r=_.createElementNS(r,a),r[tr]=i,r[ka]=c,Rg(r,i,!1,!1),i.stateNode=r;e:{switch(_=sa(a,c),a){case"dialog":Ge("cancel",r),Ge("close",r),h=c;break;case"iframe":case"object":case"embed":Ge("load",r),h=c;break;case"video":case"audio":for(h=0;h<Aa.length;h++)Ge(Aa[h],r);h=c;break;case"source":Ge("error",r),h=c;break;case"img":case"image":case"link":Ge("error",r),Ge("load",r),h=c;break;case"details":Ge("toggle",r),h=c;break;case"input":Ds(r,c),h=Vi(r,c),Ge("invalid",r);break;case"option":h=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},h=oe({},c,{value:void 0}),Ge("invalid",r);break;case"textarea":Ms(r,c),h=Jo(r,c),Ge("invalid",r);break;default:h=c}ia(a,h),S=h;for(m in S)if(S.hasOwnProperty(m)){var k=S[m];m==="style"?na(r,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ea(r,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Kr(r,k):typeof k=="number"&&Kr(r,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ge("scroll",r):k!=null&&K(r,m,k,_))}switch(a){case"input":yr(r),Rl(r,c,!1);break;case"textarea":yr(r),Zo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Fe(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?_r(r,!!c.multiple,m,!1):c.defaultValue!=null&&_r(r,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=iu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vt(i),null;case 6:if(r&&i.stateNode!=null)xg(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=is(Oa.current),is(nr.current),fu(i)){if(c=i.stateNode,a=i.memoizedProps,c[tr]=i,(m=c.nodeValue!==a)&&(r=fn,r!==null))switch(r.tag){case 3:ru(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ru(c.nodeValue,a,(r.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[tr]=i,i.stateNode=c}return Vt(i),null;case 13:if(Ke(Ze),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Dm(),go(),i.flags|=98560,m=!1;else if(m=fu(i),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[tr]=i}else go(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vt(i),m=!1}else Vn!==null&&(Sh(Vn),Vn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Ze.current&1)!==0?mt===0&&(mt=3):Ph())),i.updateQueue!==null&&(i.flags|=4),Vt(i),null);case 4:return wo(),dh(r,i),r===null&&Ca(i.stateNode.containerInfo),Vt(i),null;case 10:return jf(i.type._context),Vt(i),null;case 17:return Jt(i.type)&&ou(),Vt(i),null;case 19:if(Ke(Ze),m=i.memoizedState,m===null)return Vt(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)Fa(m,!1);else{if(mt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(_=yu(r),_!==null){for(i.flags|=128,Fa(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,r=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,r=_.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Ze,Ze.current&1|2),i.child}r=r.sibling}m.tail!==null&&He()>So&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304)}else{if(!c)if(r=yu(_),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Xe)return Vt(i),null}else 2*He()-m.renderingStartTime>So&&a!==1073741824&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=He(),i.sibling=null,a=Ze.current,We(Ze,c?a&1|2:a&1),i):(Vt(i),null);case 22:case 23:return Ch(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(dn&1073741824)!==0&&(Vt(i),i.subtreeFlags&6&&(i.flags|=8192)):Vt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function xE(r,i){switch(Lf(i),i.tag){case 1:return Jt(i.type)&&ou(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return wo(),Ke(Xt),Ke(Lt),Kf(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return qf(i),null;case 13:if(Ke(Ze),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));go()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Ke(Ze),null;case 4:return wo(),null;case 10:return jf(i.type._context),null;case 22:case 23:return Ch(),null;case 24:return null;default:return null}}var Cu=!1,Ft=!1,bE=typeof WeakSet=="function"?WeakSet:Set,le=null;function To(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,i,c)}else a.current=null}function ph(r,i,a){try{a()}catch(c){nt(r,i,c)}}var bg=!1;function OE(r,i){if(Cf=ni,r=cm(),vf(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,S=-1,k=-1,j=0,Y=0,X=r,Q=null;t:for(;;){for(var se;X!==a||h!==0&&X.nodeType!==3||(S=_+h),X!==m||c!==0&&X.nodeType!==3||(k=_+c),X.nodeType===3&&(_+=X.nodeValue.length),(se=X.firstChild)!==null;)Q=X,X=se;for(;;){if(X===r)break t;if(Q===a&&++j===h&&(S=_),Q===m&&++Y===c&&(k=_),(se=X.nextSibling)!==null)break;X=Q,Q=X.parentNode}X=se}a=S===-1||k===-1?null:{start:S,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pf={focusedElem:r,selectionRange:a},ni=!1,le=i;le!==null;)if(i=le,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,le=r;else for(;le!==null;){i=le;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,at=ue.memoizedState,F=i.stateNode,x=F.getSnapshotBeforeUpdate(i.elementType===i.type?ce:Fn(i.type,ce),at);F.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var z=i.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){nt(i,i.return,te)}if(r=i.sibling,r!==null){r.return=i.return,le=r;break}le=i.return}return ue=bg,bg=!1,ue}function Ua(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&r)===r){var m=h.destroy;h.destroy=void 0,m!==void 0&&ph(i,a,m)}h=h.next}while(h!==c)}}function Pu(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function mh(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function Og(r){var i=r.alternate;i!==null&&(r.alternate=null,Og(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[tr],delete i[ka],delete i[xf],delete i[mE],delete i[gE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Dg(r){return r.tag===5||r.tag===3||r.tag===4}function Lg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Dg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function gh(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=iu));else if(c!==4&&(r=r.child,r!==null))for(gh(r,i,a),r=r.sibling;r!==null;)gh(r,i,a),r=r.sibling}function yh(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(yh(r,i,a),r=r.sibling;r!==null;)yh(r,i,a),r=r.sibling}var Pt=null,Un=!1;function fi(r,i,a){for(a=a.child;a!==null;)Mg(r,i,a),a=a.sibling}function Mg(r,i,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(qi,a)}catch{}switch(a.tag){case 5:Ft||To(a,i);case 6:var c=Pt,h=Un;Pt=null,fi(r,i,a),Pt=c,Un=h,Pt!==null&&(Un?(r=Pt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Un?(r=Pt,a=a.stateNode,r.nodeType===8?Nf(r.parentNode,a):r.nodeType===1&&Nf(r,a),Dn(r)):Nf(Pt,a.stateNode));break;case 4:c=Pt,h=Un,Pt=a.stateNode.containerInfo,Un=!0,fi(r,i,a),Pt=c,Un=h;break;case 0:case 11:case 14:case 15:if(!Ft&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&ph(a,i,_),h=h.next}while(h!==c)}fi(r,i,a);break;case 1:if(!Ft&&(To(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){nt(a,i,S)}fi(r,i,a);break;case 21:fi(r,i,a);break;case 22:a.mode&1?(Ft=(c=Ft)||a.memoizedState!==null,fi(r,i,a),Ft=c):fi(r,i,a);break;default:fi(r,i,a)}}function Vg(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new bE),i.forEach(function(c){var h=BE.bind(null,r,c);a.has(c)||(a.add(c),c.then(h,h))})}}function zn(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=r,_=i,S=_;e:for(;S!==null;){switch(S.tag){case 5:Pt=S.stateNode,Un=!1;break e;case 3:Pt=S.stateNode.containerInfo,Un=!0;break e;case 4:Pt=S.stateNode.containerInfo,Un=!0;break e}S=S.return}if(Pt===null)throw Error(t(160));Mg(m,_,h),Pt=null,Un=!1;var k=h.alternate;k!==null&&(k.return=null),h.return=null}catch(j){nt(h,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Fg(i,r),i=i.sibling}function Fg(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(zn(i,r),ir(r),c&4){try{Ua(3,r,r.return),Pu(3,r)}catch(ce){nt(r,r.return,ce)}try{Ua(5,r,r.return)}catch(ce){nt(r,r.return,ce)}}break;case 1:zn(i,r),ir(r),c&512&&a!==null&&To(a,a.return);break;case 5:if(zn(i,r),ir(r),c&512&&a!==null&&To(a,a.return),r.flags&32){var h=r.stateNode;try{Kr(h,"")}catch(ce){nt(r,r.return,ce)}}if(c&4&&(h=r.stateNode,h!=null)){var m=r.memoizedProps,_=a!==null?a.memoizedProps:m,S=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Yo(h,m),sa(S,_);var j=sa(S,m);for(_=0;_<k.length;_+=2){var Y=k[_],X=k[_+1];Y==="style"?na(h,X):Y==="dangerouslySetInnerHTML"?ea(h,X):Y==="children"?Kr(h,X):K(h,Y,X,j)}switch(S){case"input":Xo(h,m);break;case"textarea":Vs(h,m);break;case"select":var Q=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var se=m.value;se!=null?_r(h,!!m.multiple,se,!1):Q!==!!m.multiple&&(m.defaultValue!=null?_r(h,!!m.multiple,m.defaultValue,!0):_r(h,!!m.multiple,m.multiple?[]:"",!1))}h[ka]=m}catch(ce){nt(r,r.return,ce)}}break;case 6:if(zn(i,r),ir(r),c&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,m=r.memoizedProps;try{h.nodeValue=m}catch(ce){nt(r,r.return,ce)}}break;case 3:if(zn(i,r),ir(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(i.containerInfo)}catch(ce){nt(r,r.return,ce)}break;case 4:zn(i,r),ir(r);break;case 13:zn(i,r),ir(r),h=r.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(wh=He())),c&4&&Vg(r);break;case 22:if(Y=a!==null&&a.memoizedState!==null,r.mode&1?(Ft=(j=Ft)||Y,zn(i,r),Ft=j):zn(i,r),ir(r),c&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!Y&&(r.mode&1)!==0)for(le=r,Y=r.child;Y!==null;){for(X=le=Y;le!==null;){switch(Q=le,se=Q.child,Q.tag){case 0:case 11:case 14:case 15:Ua(4,Q,Q.return);break;case 1:To(Q,Q.return);var ue=Q.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Q,a=Q.return;try{i=c,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(ce){nt(c,a,ce)}}break;case 5:To(Q,Q.return);break;case 22:if(Q.memoizedState!==null){jg(X);continue}}se!==null?(se.return=Q,le=se):jg(X)}Y=Y.sibling}e:for(Y=null,X=r;;){if(X.tag===5){if(Y===null){Y=X;try{h=X.stateNode,j?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=X.stateNode,k=X.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,S.style.display=ta("display",_))}catch(ce){nt(r,r.return,ce)}}}else if(X.tag===6){if(Y===null)try{X.stateNode.nodeValue=j?"":X.memoizedProps}catch(ce){nt(r,r.return,ce)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===r)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===r)break e;for(;X.sibling===null;){if(X.return===null||X.return===r)break e;Y===X&&(Y=null),X=X.return}Y===X&&(Y=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:zn(i,r),ir(r),c&4&&Vg(r);break;case 21:break;default:zn(i,r),ir(r)}}function ir(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Dg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Kr(h,""),c.flags&=-33);var m=Lg(r);yh(r,m,h);break;case 3:case 4:var _=c.stateNode.containerInfo,S=Lg(r);gh(r,S,_);break;default:throw Error(t(161))}}catch(k){nt(r,r.return,k)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function DE(r,i,a){le=r,Ug(r)}function Ug(r,i,a){for(var c=(r.mode&1)!==0;le!==null;){var h=le,m=h.child;if(h.tag===22&&c){var _=h.memoizedState!==null||Cu;if(!_){var S=h.alternate,k=S!==null&&S.memoizedState!==null||Ft;S=Cu;var j=Ft;if(Cu=_,(Ft=k)&&!j)for(le=h;le!==null;)_=le,k=_.child,_.tag===22&&_.memoizedState!==null?Bg(h):k!==null?(k.return=_,le=k):Bg(h);for(;m!==null;)le=m,Ug(m),m=m.sibling;le=h,Cu=S,Ft=j}zg(r)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,le=m):zg(r)}}function zg(r){for(;le!==null;){var i=le;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ft||Pu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ft)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Fn(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&jm(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}jm(i,_,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var Y=j.memoizedState;if(Y!==null){var X=Y.dehydrated;X!==null&&Dn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ft||i.flags&512&&mh(i)}catch(Q){nt(i,i.return,Q)}}if(i===r){le=null;break}if(a=i.sibling,a!==null){a.return=i.return,le=a;break}le=i.return}}function jg(r){for(;le!==null;){var i=le;if(i===r){le=null;break}var a=i.sibling;if(a!==null){a.return=i.return,le=a;break}le=i.return}}function Bg(r){for(;le!==null;){var i=le;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Pu(4,i)}catch(k){nt(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(k){nt(i,h,k)}}var m=i.return;try{mh(i)}catch(k){nt(i,m,k)}break;case 5:var _=i.return;try{mh(i)}catch(k){nt(i,_,k)}}}catch(k){nt(i,i.return,k)}if(i===r){le=null;break}var S=i.sibling;if(S!==null){S.return=i.return,le=S;break}le=i.return}}var LE=Math.ceil,ku=ae.ReactCurrentDispatcher,vh=ae.ReactCurrentOwner,Sn=ae.ReactCurrentBatchConfig,De=0,_t=null,ut=null,kt=0,dn=0,Io=oi(0),mt=0,za=null,os=0,Ru=0,_h=0,ja=null,en=null,wh=0,So=1/0,Dr=null,Nu=!1,Eh=null,hi=null,xu=!1,di=null,bu=0,Ba=0,Th=null,Ou=-1,Du=0;function Gt(){return(De&6)!==0?He():Ou!==-1?Ou:Ou=He()}function pi(r){return(r.mode&1)===0?1:(De&2)!==0&&kt!==0?kt&-kt:vE.transition!==null?(Du===0&&(Du=Ki()),Du):(r=Ne,r!==0||(r=window.event,r=r===void 0?16:ga(r.type)),r)}function jn(r,i,a,c){if(50<Ba)throw Ba=0,Th=null,Error(t(185));Jr(r,a,c),((De&2)===0||r!==_t)&&(r===_t&&((De&2)===0&&(Ru|=a),mt===4&&mi(r,kt)),tn(r,c),a===1&&De===0&&(i.mode&1)===0&&(So=He()+500,lu&&li()))}function tn(r,i){var a=r.callbackNode;Tr(r,i);var c=Gi(r,r===_t?kt:0);if(c===0)a!==null&&fa(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&fa(a),i===1)r.tag===0?yE(Hg.bind(null,r)):Rm(Hg.bind(null,r)),dE(function(){(De&6)===0&&li()}),a=null;else{switch(ei(c)){case 1:a=Wi;break;case 4:a=Qr;break;case 16:a=yn;break;case 536870912:a=Dl;break;default:a=yn}a=Jg(a,$g.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function $g(r,i){if(Ou=-1,Du=0,(De&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Ao()&&r.callbackNode!==a)return null;var c=Gi(r,r===_t?kt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Lu(r,c);else{i=c;var h=De;De|=2;var m=qg();(_t!==r||kt!==i)&&(Dr=null,So=He()+500,ls(r,i));do try{FE();break}catch(S){Wg(r,S)}while(!0);zf(),ku.current=m,De=h,ut!==null?i=0:(_t=null,kt=0,i=mt)}if(i!==0){if(i===2&&(h=ln(r),h!==0&&(c=h,i=Ih(r,h))),i===1)throw a=za,ls(r,0),mi(r,c),tn(r,He()),a;if(i===6)mi(r,c);else{if(h=r.current.alternate,(c&30)===0&&!ME(h)&&(i=Lu(r,c),i===2&&(m=ln(r),m!==0&&(c=m,i=Ih(r,m))),i===1))throw a=za,ls(r,0),mi(r,c),tn(r,He()),a;switch(r.finishedWork=h,r.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:us(r,en,Dr);break;case 3:if(mi(r,c),(c&130023424)===c&&(i=wh+500-He(),10<i)){if(Gi(r,0)!==0)break;if(h=r.suspendedLanes,(h&c)!==c){Gt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=Rf(us.bind(null,r,en,Dr),i);break}us(r,en,Dr);break;case 4:if(mi(r,c),(c&4194240)===c)break;for(i=r.eventTimes,h=-1;0<c;){var _=31-Ht(c);m=1<<_,_=i[_],_>h&&(h=_),c&=~m}if(c=h,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*LE(c/1960))-c,10<c){r.timeoutHandle=Rf(us.bind(null,r,en,Dr),c);break}us(r,en,Dr);break;case 5:us(r,en,Dr);break;default:throw Error(t(329))}}}return tn(r,He()),r.callbackNode===a?$g.bind(null,r):null}function Ih(r,i){var a=ja;return r.current.memoizedState.isDehydrated&&(ls(r,i).flags|=256),r=Lu(r,i),r!==2&&(i=en,en=a,i!==null&&Sh(i)),r}function Sh(r){en===null?en=r:en.push.apply(en,r)}function ME(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!Mn(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function mi(r,i){for(i&=~_h,i&=~Ru,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Ht(i),c=1<<a;r[a]=-1,i&=~c}}function Hg(r){if((De&6)!==0)throw Error(t(327));Ao();var i=Gi(r,0);if((i&1)===0)return tn(r,He()),null;var a=Lu(r,i);if(r.tag!==0&&a===2){var c=ln(r);c!==0&&(i=c,a=Ih(r,c))}if(a===1)throw a=za,ls(r,0),mi(r,i),tn(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,us(r,en,Dr),tn(r,He()),null}function Ah(r,i){var a=De;De|=1;try{return r(i)}finally{De=a,De===0&&(So=He()+500,lu&&li())}}function as(r){di!==null&&di.tag===0&&(De&6)===0&&Ao();var i=De;De|=1;var a=Sn.transition,c=Ne;try{if(Sn.transition=null,Ne=1,r)return r()}finally{Ne=c,Sn.transition=a,De=i,(De&6)===0&&li()}}function Ch(){dn=Io.current,Ke(Io)}function ls(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,hE(a)),ut!==null)for(a=ut.return;a!==null;){var c=a;switch(Lf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ou();break;case 3:wo(),Ke(Xt),Ke(Lt),Kf();break;case 5:qf(c);break;case 4:wo();break;case 13:Ke(Ze);break;case 19:Ke(Ze);break;case 10:jf(c.type._context);break;case 22:case 23:Ch()}a=a.return}if(_t=r,ut=r=gi(r.current,null),kt=dn=i,mt=0,za=null,_h=Ru=os=0,en=ja=null,rs!==null){for(i=0;i<rs.length;i++)if(a=rs[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=h,c.next=_}a.pending=c}rs=null}return r}function Wg(r,i){do{var a=ut;try{if(zf(),vu.current=Tu,_u){for(var c=et.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}_u=!1}if(ss=0,vt=pt=et=null,Da=!1,La=0,vh.current=null,a===null||a.return===null){mt=1,za=i,ut=null;break}e:{var m=r,_=a.return,S=a,k=i;if(i=kt,S.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var j=k,Y=S,X=Y.tag;if((Y.mode&1)===0&&(X===0||X===11||X===15)){var Q=Y.alternate;Q?(Y.updateQueue=Q.updateQueue,Y.memoizedState=Q.memoizedState,Y.lanes=Q.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var se=gg(_);if(se!==null){se.flags&=-257,yg(se,_,S,m,i),se.mode&1&&mg(m,j,i),i=se,k=j;var ue=i.updateQueue;if(ue===null){var ce=new Set;ce.add(k),i.updateQueue=ce}else ue.add(k);break e}else{if((i&1)===0){mg(m,j,i),Ph();break e}k=Error(t(426))}}else if(Xe&&S.mode&1){var at=gg(_);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),yg(at,_,S,m,i),Ff(Eo(k,S));break e}}m=k=Eo(k,S),mt!==4&&(mt=2),ja===null?ja=[m]:ja.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var F=dg(m,k,i);zm(m,F);break e;case 1:S=k;var x=m.type,z=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(hi===null||!hi.has(z)))){m.flags|=65536,i&=-i,m.lanes|=i;var te=pg(m,S,i);zm(m,te);break e}}m=m.return}while(m!==null)}Kg(a)}catch(he){i=he,ut===a&&a!==null&&(ut=a=a.return);continue}break}while(!0)}function qg(){var r=ku.current;return ku.current=Tu,r===null?Tu:r}function Ph(){(mt===0||mt===3||mt===2)&&(mt=4),_t===null||(os&268435455)===0&&(Ru&268435455)===0||mi(_t,kt)}function Lu(r,i){var a=De;De|=2;var c=qg();(_t!==r||kt!==i)&&(Dr=null,ls(r,i));do try{VE();break}catch(h){Wg(r,h)}while(!0);if(zf(),De=a,ku.current=c,ut!==null)throw Error(t(261));return _t=null,kt=0,mt}function VE(){for(;ut!==null;)Gg(ut)}function FE(){for(;ut!==null&&!bl();)Gg(ut)}function Gg(r){var i=Xg(r.alternate,r,dn);r.memoizedProps=r.pendingProps,i===null?Kg(r):ut=i,vh.current=null}function Kg(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=NE(a,i,dn),a!==null){ut=a;return}}else{if(a=xE(a,i),a!==null){a.flags&=32767,ut=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{mt=6,ut=null;return}}if(i=i.sibling,i!==null){ut=i;return}ut=i=r}while(i!==null);mt===0&&(mt=5)}function us(r,i,a){var c=Ne,h=Sn.transition;try{Sn.transition=null,Ne=1,UE(r,i,a,c)}finally{Sn.transition=h,Ne=c}return null}function UE(r,i,a,c){do Ao();while(di!==null);if((De&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(Be(r,m),r===_t&&(ut=_t=null,kt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||xu||(xu=!0,Jg(yn,function(){return Ao(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Sn.transition,Sn.transition=null;var _=Ne;Ne=1;var S=De;De|=4,vh.current=null,OE(r,a),Fg(a,r),sE(Pf),ni=!!Cf,Pf=Cf=null,r.current=a,DE(a),cf(),De=S,Ne=_,Sn.transition=m}else r.current=a;if(xu&&(xu=!1,di=r,bu=h),m=r.pendingLanes,m===0&&(hi=null),Ll(a.stateNode),tn(r,He()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Nu)throw Nu=!1,r=Eh,Eh=null,r;return(bu&1)!==0&&r.tag!==0&&Ao(),m=r.pendingLanes,(m&1)!==0?r===Th?Ba++:(Ba=0,Th=r):Ba=0,li(),null}function Ao(){if(di!==null){var r=ei(bu),i=Sn.transition,a=Ne;try{if(Sn.transition=null,Ne=16>r?16:r,di===null)var c=!1;else{if(r=di,di=null,bu=0,(De&6)!==0)throw Error(t(331));var h=De;for(De|=4,le=r.current;le!==null;){var m=le,_=m.child;if((le.flags&16)!==0){var S=m.deletions;if(S!==null){for(var k=0;k<S.length;k++){var j=S[k];for(le=j;le!==null;){var Y=le;switch(Y.tag){case 0:case 11:case 15:Ua(8,Y,m)}var X=Y.child;if(X!==null)X.return=Y,le=X;else for(;le!==null;){Y=le;var Q=Y.sibling,se=Y.return;if(Og(Y),Y===j){le=null;break}if(Q!==null){Q.return=se,le=Q;break}le=se}}}var ue=m.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var at=ce.sibling;ce.sibling=null,ce=at}while(ce!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,le=_;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ua(9,m,m.return)}var F=m.sibling;if(F!==null){F.return=m.return,le=F;break e}le=m.return}}var x=r.current;for(le=x;le!==null;){_=le;var z=_.child;if((_.subtreeFlags&2064)!==0&&z!==null)z.return=_,le=z;else e:for(_=x;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Pu(9,S)}}catch(he){nt(S,S.return,he)}if(S===_){le=null;break e}var te=S.sibling;if(te!==null){te.return=S.return,le=te;break e}le=S.return}}if(De=h,li(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(qi,r)}catch{}c=!0}return c}finally{Ne=a,Sn.transition=i}}return!1}function Qg(r,i,a){i=Eo(a,i),i=dg(r,i,1),r=ci(r,i,1),i=Gt(),r!==null&&(Jr(r,1,i),tn(r,i))}function nt(r,i,a){if(r.tag===3)Qg(r,r,a);else for(;i!==null;){if(i.tag===3){Qg(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hi===null||!hi.has(c))){r=Eo(a,r),r=pg(i,r,1),i=ci(i,r,1),r=Gt(),i!==null&&(Jr(i,1,r),tn(i,r));break}}i=i.return}}function zE(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=Gt(),r.pingedLanes|=r.suspendedLanes&a,_t===r&&(kt&a)===a&&(mt===4||mt===3&&(kt&130023424)===kt&&500>He()-wh?ls(r,0):_h|=a),tn(r,i)}function Yg(r,i){i===0&&((r.mode&1)===0?i=1:(i=Gs,Gs<<=1,(Gs&130023424)===0&&(Gs=4194304)));var a=Gt();r=xr(r,i),r!==null&&(Jr(r,i,a),tn(r,a))}function jE(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Yg(r,a)}function BE(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Yg(r,a)}var Xg;Xg=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||Xt.current)Zt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return Zt=!1,RE(r,i,a);Zt=(r.flags&131072)!==0}else Zt=!1,Xe&&(i.flags&1048576)!==0&&Nm(i,cu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Au(r,i),r=i.pendingProps;var h=ho(i,Lt.current);_o(i,a),h=Xf(null,i,c,r,h,a);var m=Jf();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Jt(c)?(m=!0,au(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Hf(i),h.updater=Iu,i.stateNode=h,h._reactInternals=i,ih(i,c,r,a),i=lh(null,i,c,!0,m,a)):(i.tag=0,Xe&&m&&Df(i),qt(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Au(r,i),r=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=HE(c),r=Fn(c,r),h){case 0:i=ah(null,i,c,r,a);break e;case 1:i=Ig(null,i,c,r,a);break e;case 11:i=vg(null,i,c,r,a);break e;case 14:i=_g(null,i,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fn(c,h),ah(r,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fn(c,h),Ig(r,i,c,h,a);case 3:e:{if(Sg(i),r===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,Um(r,i),gu(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Eo(Error(t(423)),i),i=Ag(r,i,c,a,h);break e}else if(c!==h){h=Eo(Error(t(424)),i),i=Ag(r,i,c,a,h);break e}else for(hn=si(i.stateNode.containerInfo.firstChild),fn=i,Xe=!0,Vn=null,a=Vm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(go(),c===h){i=Or(r,i,a);break e}qt(r,i,c,a)}i=i.child}return i;case 5:return Bm(i),r===null&&Vf(i),c=i.type,h=i.pendingProps,m=r!==null?r.memoizedProps:null,_=h.children,kf(c,h)?_=null:m!==null&&kf(c,m)&&(i.flags|=32),Tg(r,i),qt(r,i,_,a),i.child;case 6:return r===null&&Vf(i),null;case 13:return Cg(r,i,a);case 4:return Wf(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=yo(i,null,c,a):qt(r,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fn(c,h),vg(r,i,c,h,a);case 7:return qt(r,i,i.pendingProps,a),i.child;case 8:return qt(r,i,i.pendingProps.children,a),i.child;case 12:return qt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,_=h.value,We(du,c._currentValue),c._currentValue=_,m!==null)if(Mn(m.value,_)){if(m.children===h.children&&!Xt.current){i=Or(r,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){_=m.child;for(var k=S.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=br(-1,a&-a),k.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Y=j.pending;Y===null?k.next=k:(k.next=Y.next,Y.next=k),j.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Bf(m.return,a,i),S.lanes|=a;break}k=k.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,S=_.alternate,S!==null&&(S.lanes|=a),Bf(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}qt(r,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,_o(i,a),h=Tn(h),c=c(h),i.flags|=1,qt(r,i,c,a),i.child;case 14:return c=i.type,h=Fn(c,i.pendingProps),h=Fn(c.type,h),_g(r,i,c,h,a);case 15:return wg(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Fn(c,h),Au(r,i),i.tag=1,Jt(c)?(r=!0,au(i)):r=!1,_o(i,a),fg(i,c,h),ih(i,c,h,a),lh(null,i,c,!0,r,a);case 19:return kg(r,i,a);case 22:return Eg(r,i,a)}throw Error(t(156,i.tag))};function Jg(r,i){return Ws(r,i)}function $E(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,i,a,c){return new $E(r,i,a,c)}function kh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function HE(r){if(typeof r=="function")return kh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===Ot)return 14}return 2}function gi(r,i){var a=r.alternate;return a===null?(a=An(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Mu(r,i,a,c,h,m){var _=2;if(c=r,typeof r=="function")kh(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case N:return cs(a.children,h,m,i);case I:_=8,h|=8;break;case A:return r=An(12,a,i,h|2),r.elementType=A,r.lanes=m,r;case P:return r=An(13,a,i,h),r.elementType=P,r.lanes=m,r;case st:return r=An(19,a,i,h),r.elementType=st,r.lanes=m,r;case je:return Vu(a,h,m,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case R:_=10;break e;case b:_=9;break e;case L:_=11;break e;case Ot:_=14;break e;case Dt:_=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=An(_,a,i,h),i.elementType=r,i.type=c,i.lanes=m,i}function cs(r,i,a,c){return r=An(7,r,c,i),r.lanes=a,r}function Vu(r,i,a,c){return r=An(22,r,c,i),r.elementType=je,r.lanes=a,r.stateNode={isHidden:!1},r}function Rh(r,i,a){return r=An(6,r,null,i),r.lanes=a,r}function Nh(r,i,a){return i=An(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function WE(r,i,a,c,h){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xr(0),this.expirationTimes=Xr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function xh(r,i,a,c,h,m,_,S,k){return r=new WE(r,i,a,S,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=An(3,null,null,i),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(m),r}function qE(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function Zg(r){if(!r)return ai;r=r._reactInternals;e:{if(Rn(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Jt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Jt(a))return Pm(r,a,i)}return i}function ey(r,i,a,c,h,m,_,S,k){return r=xh(a,c,!0,r,h,m,_,S,k),r.context=Zg(null),a=r.current,c=Gt(),h=pi(a),m=br(c,h),m.callback=i??null,ci(a,m,h),r.current.lanes=h,Jr(r,h,c),tn(r,c),r}function Fu(r,i,a,c){var h=i.current,m=Gt(),_=pi(h);return a=Zg(a),i.context===null?i.context=a:i.pendingContext=a,i=br(m,_),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=ci(h,i,_),r!==null&&(jn(r,h,_,m),mu(r,h,_)),_}function Uu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ty(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function bh(r,i){ty(r,i),(r=r.alternate)&&ty(r,i)}function GE(){return null}var ny=typeof reportError=="function"?reportError:function(r){console.error(r)};function Oh(r){this._internalRoot=r}zu.prototype.render=Oh.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));Fu(r,i,null,null)},zu.prototype.unmount=Oh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;as(function(){Fu(null,r,null,null)}),i[Pr]=null}};function zu(r){this._internalRoot=r}zu.prototype.unstable_scheduleHydration=function(r){if(r){var i=zl();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Xn.length&&i!==0&&i<Xn[a].priority;a++);Xn.splice(a,0,r),a===0&&$l(r)}};function Dh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ju(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function ry(){}function KE(r,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var j=Uu(_);m.call(j)}}var _=ey(i,c,r,0,null,!1,!1,"",ry);return r._reactRootContainer=_,r[Pr]=_.current,Ca(r.nodeType===8?r.parentNode:r),as(),_}for(;h=r.lastChild;)r.removeChild(h);if(typeof c=="function"){var S=c;c=function(){var j=Uu(k);S.call(j)}}var k=xh(r,0,!1,null,null,!1,!1,"",ry);return r._reactRootContainer=k,r[Pr]=k.current,Ca(r.nodeType===8?r.parentNode:r),as(function(){Fu(i,k,a,c)}),k}function Bu(r,i,a,c,h){var m=a._reactRootContainer;if(m){var _=m;if(typeof h=="function"){var S=h;h=function(){var k=Uu(_);S.call(k)}}Fu(i,_,r,h)}else _=KE(a,i,r,h,c);return Uu(_)}Fl=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=Yr(i.pendingLanes);a!==0&&(Zr(i,a|1),tn(i,He()),(De&6)===0&&(So=He()+500,li()))}break;case 13:as(function(){var c=xr(r,1);if(c!==null){var h=Gt();jn(c,r,1,h)}}),bh(r,1)}},Ks=function(r){if(r.tag===13){var i=xr(r,134217728);if(i!==null){var a=Gt();jn(i,r,134217728,a)}bh(r,134217728)}},Ul=function(r){if(r.tag===13){var i=pi(r),a=xr(r,i);if(a!==null){var c=Gt();jn(a,r,i,c)}bh(r,i)}},zl=function(){return Ne},jl=function(r,i){var a=Ne;try{return Ne=r,i()}finally{Ne=a}},Us=function(r,i,a){switch(i){case"input":if(Xo(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var h=su(c);if(!h)throw Error(t(90));Os(c),Xo(c,h)}}}break;case"textarea":Vs(r,a);break;case"select":i=a.value,i!=null&&_r(r,!!a.multiple,i,!1)}},ji=Ah,aa=as;var QE={usingClientEntryPoint:!1,Events:[Ra,co,su,Qn,oa,Ah]},$a={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YE={bundleType:$a.bundleType,version:$a.version,rendererPackageName:$a.rendererPackageName,rendererConfig:$a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ca(r),r===null?null:r.stateNode},findFiberByHostInstance:$a.findFiberByHostInstance||GE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{qi=$u.inject(YE),an=$u}catch{}}return nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QE,nn.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dh(i))throw Error(t(200));return qE(r,i,null,a)},nn.createRoot=function(r,i){if(!Dh(r))throw Error(t(299));var a=!1,c="",h=ny;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=xh(r,1,!1,null,null,a,!1,c,h),r[Pr]=i.current,Ca(r.nodeType===8?r.parentNode:r),new Oh(i)},nn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ca(i),r=r===null?null:r.stateNode,r},nn.flushSync=function(r){return as(r)},nn.hydrate=function(r,i,a){if(!ju(i))throw Error(t(200));return Bu(null,r,i,!0,a)},nn.hydrateRoot=function(r,i,a){if(!Dh(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",_=ny;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=ey(i,null,r,1,a??null,h,!1,m,_),r[Pr]=i.current,Ca(r),c)for(r=0;r<c.length;r++)a=c[r],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new zu(i)},nn.render=function(r,i,a){if(!ju(i))throw Error(t(200));return Bu(null,r,i,!1,a)},nn.unmountComponentAtNode=function(r){if(!ju(r))throw Error(t(40));return r._reactRootContainer?(as(function(){Bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Pr]=null})}),!0):!1},nn.unstable_batchedUpdates=Ah,nn.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!ju(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Bu(r,i,a,!1,c)},nn.version="18.3.1-next-f1338f8080-20240426",nn}var uy;function nT(){if(uy)return Mh.exports;uy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Mh.exports=tT(),Mh.exports}var cy;function rT(){if(cy)return Hu;cy=1;var n=nT();return Hu.createRoot=n.createRoot,Hu.hydrateRoot=n.hydrateRoot,Hu}var iT=rT();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function sT(n,e,t){return(e=aT(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function fy(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,s)}return t}function Z(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fy(Object(t),!0).forEach(function(s){sT(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fy(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function oT(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var s=t.call(n,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function aT(n){var e=oT(n,"string");return typeof e=="symbol"?e:e+""}const hy=()=>{};let Jd={},A0={},C0=null,P0={mark:hy,measure:hy};try{typeof window<"u"&&(Jd=window),typeof document<"u"&&(A0=document),typeof MutationObserver<"u"&&(C0=MutationObserver),typeof performance<"u"&&(P0=performance)}catch{}const{userAgent:dy=""}=Jd.navigator||{},ki=Jd,Qe=A0,py=C0,Wu=P0;ki.document;const qr=!!Qe.documentElement&&!!Qe.head&&typeof Qe.addEventListener=="function"&&typeof Qe.createElement=="function",k0=~dy.indexOf("MSIE")||~dy.indexOf("Trident/");var lT=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,uT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,R0={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},cT={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},N0=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Bt="classic",Uc="duotone",fT="sharp",hT="sharp-duotone",x0=[Bt,Uc,fT,hT],dT={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},pT={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},mT=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),gT={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},yT=["fak","fa-kit","fakd","fa-kit-duotone"],my={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vT=["kit"],_T={kit:{"fa-kit":"fak"}},wT=["fak","fakd"],ET={kit:{fak:"fa-kit"}},gy={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},qu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},TT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],IT=["fak","fa-kit","fakd","fa-kit-duotone"],ST={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},AT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},CT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},cd={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},PT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],fd=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...TT,...PT],kT=["solid","regular","light","thin","duotone","brands"],b0=[1,2,3,4,5,6,7,8,9,10],RT=b0.concat([11,12,13,14,15,16,17,18,19,20]),NT=[...Object.keys(CT),...kT,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",qu.GROUP,qu.SWAP_OPACITY,qu.PRIMARY,qu.SECONDARY].concat(b0.map(n=>"".concat(n,"x"))).concat(RT.map(n=>"w-".concat(n))),xT={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const jr="___FONT_AWESOME___",hd=16,O0="fa",D0="svg-inline--fa",ys="data-fa-i2svg",dd="data-fa-pseudo-element",bT="data-fa-pseudo-element-pending",Zd="data-prefix",ep="data-icon",yy="fontawesome-i2svg",OT="async",DT=["HTML","HEAD","STYLE","SCRIPT"],L0=(()=>{try{return!0}catch{return!1}})();function pl(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[Bt]}})}const M0=Z({},R0);M0[Bt]=Z(Z(Z(Z({},{"fa-duotone":"duotone"}),R0[Bt]),my.kit),my["kit-duotone"]);const LT=pl(M0),pd=Z({},gT);pd[Bt]=Z(Z(Z(Z({},{duotone:"fad"}),pd[Bt]),gy.kit),gy["kit-duotone"]);const vy=pl(pd),md=Z({},cd);md[Bt]=Z(Z({},md[Bt]),ET.kit);const tp=pl(md),gd=Z({},AT);gd[Bt]=Z(Z({},gd[Bt]),_T.kit);pl(gd);const MT=lT,V0="fa-layers-text",VT=uT,FT=Z({},dT);pl(FT);const UT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Uh=cT,zT=[...vT,...NT],Ya=ki.FontAwesomeConfig||{};function jT(n){var e=Qe.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function BT(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}Qe&&typeof Qe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,s]=e;const o=BT(jT(t));o!=null&&(Ya[s]=o)});const F0={styleDefault:"solid",familyDefault:Bt,cssPrefix:O0,replacementClass:D0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ya.familyPrefix&&(Ya.cssPrefix=Ya.familyPrefix);const Mo=Z(Z({},F0),Ya);Mo.autoReplaceSvg||(Mo.observeMutations=!1);const de={};Object.keys(F0).forEach(n=>{Object.defineProperty(de,n,{enumerable:!0,set:function(e){Mo[n]=e,Xa.forEach(t=>t(de))},get:function(){return Mo[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(n){Mo.cssPrefix=n,Xa.forEach(e=>e(de))},get:function(){return Mo.cssPrefix}});ki.FontAwesomeConfig=de;const Xa=[];function $T(n){return Xa.push(n),()=>{Xa.splice(Xa.indexOf(n),1)}}const vi=hd,ar={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function HT(n){if(!n||!qr)return;const e=Qe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=Qe.head.childNodes;let s=null;for(let o=t.length-1;o>-1;o--){const l=t[o],f=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=l)}return Qe.head.insertBefore(e,s),n}const WT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function il(){let n=12,e="";for(;n-- >0;)e+=WT[Math.random()*62|0];return e}function Bo(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function np(n){return n.classList?Bo(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function U0(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qT(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(U0(n[t]),'" '),"").trim()}function zc(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function rp(n){return n.size!==ar.size||n.x!==ar.x||n.y!==ar.y||n.rotate!==ar.rotate||n.flipX||n.flipY}function GT(n){let{transform:e,containerWidth:t,iconWidth:s}=n;const o={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),g={transform:"".concat(l," ").concat(f," ").concat(d)},y={transform:"translate(".concat(s/2*-1," -256)")};return{outer:o,inner:g,path:y}}function KT(n){let{transform:e,width:t=hd,height:s=hd,startCentered:o=!1}=n,l="";return o&&k0?l+="translate(".concat(e.x/vi-t/2,"em, ").concat(e.y/vi-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/vi,"em), calc(-50% + ").concat(e.y/vi,"em)) "):l+="translate(".concat(e.x/vi,"em, ").concat(e.y/vi,"em) "),l+="scale(".concat(e.size/vi*(e.flipX?-1:1),", ").concat(e.size/vi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var QT=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function z0(){const n=O0,e=D0,t=de.cssPrefix,s=de.replacementClass;let o=QT;if(t!==n||s!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");o=o.replace(l,".".concat(t,"-")).replace(f,"--".concat(t,"-")).replace(d,".".concat(s))}return o}let _y=!1;function zh(){de.autoAddCss&&!_y&&(HT(z0()),_y=!0)}var YT={mixout(){return{dom:{css:z0,insertCss:zh}}},hooks(){return{beforeDOMElementCreation(){zh()},beforeI2svg(){zh()}}}};const Br=ki||{};Br[jr]||(Br[jr]={});Br[jr].styles||(Br[jr].styles={});Br[jr].hooks||(Br[jr].hooks={});Br[jr].shims||(Br[jr].shims=[]);var lr=Br[jr];const j0=[],B0=function(){Qe.removeEventListener("DOMContentLoaded",B0),pc=1,j0.map(n=>n())};let pc=!1;qr&&(pc=(Qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Qe.readyState),pc||Qe.addEventListener("DOMContentLoaded",B0));function XT(n){qr&&(pc?setTimeout(n,0):j0.push(n))}function ml(n){const{tag:e,attributes:t={},children:s=[]}=n;return typeof n=="string"?U0(n):"<".concat(e," ").concat(qT(t),">").concat(s.map(ml).join(""),"</").concat(e,">")}function wy(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var jh=function(e,t,s,o){var l=Object.keys(e),f=l.length,d=t,g,y,w;for(s===void 0?(g=1,w=e[l[0]]):(g=0,w=s);g<f;g++)y=l[g],w=d(w,e[y],y,e);return w};function JT(n){const e=[];let t=0;const s=n.length;for(;t<s;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<s){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((o&1023)<<10)+(l&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function yd(n){const e=JT(n);return e.length===1?e[0].toString(16):null}function ZT(n,e){const t=n.length;let s=n.charCodeAt(e),o;return s>=55296&&s<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(s-55296)*1024+o-56320+65536:s}function Ey(n){return Object.keys(n).reduce((e,t)=>{const s=n[t];return!!s.icon?e[s.iconName]=s.icon:e[t]=s,e},{})}function vd(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=t,o=Ey(e);typeof lr.hooks.addPack=="function"&&!s?lr.hooks.addPack(n,Ey(e)):lr.styles[n]=Z(Z({},lr.styles[n]||{}),o),n==="fas"&&vd("fa",e)}const{styles:sl,shims:eI}=lr,$0=Object.keys(tp),tI=$0.reduce((n,e)=>(n[e]=Object.keys(tp[e]),n),{});let ip=null,H0={},W0={},q0={},G0={},K0={};function nI(n){return~zT.indexOf(n)}function rI(n,e){const t=e.split("-"),s=t[0],o=t.slice(1).join("-");return s===n&&o!==""&&!nI(o)?o:null}const Q0=()=>{const n=s=>jh(sl,(o,l,f)=>(o[f]=jh(l,s,{}),o),{});H0=n((s,o,l)=>(o[3]&&(s[o[3]]=l),o[2]&&o[2].filter(d=>typeof d=="number").forEach(d=>{s[d.toString(16)]=l}),s)),W0=n((s,o,l)=>(s[l]=l,o[2]&&o[2].filter(d=>typeof d=="string").forEach(d=>{s[d]=l}),s)),K0=n((s,o,l)=>{const f=o[2];return s[l]=l,f.forEach(d=>{s[d]=l}),s});const e="far"in sl||de.autoFetchSvg,t=jh(eI,(s,o)=>{const l=o[0];let f=o[1];const d=o[2];return f==="far"&&!e&&(f="fas"),typeof l=="string"&&(s.names[l]={prefix:f,iconName:d}),typeof l=="number"&&(s.unicodes[l.toString(16)]={prefix:f,iconName:d}),s},{names:{},unicodes:{}});q0=t.names,G0=t.unicodes,ip=jc(de.styleDefault,{family:de.familyDefault})};$T(n=>{ip=jc(n.styleDefault,{family:de.familyDefault})});Q0();function sp(n,e){return(H0[n]||{})[e]}function iI(n,e){return(W0[n]||{})[e]}function hs(n,e){return(K0[n]||{})[e]}function Y0(n){return q0[n]||{prefix:null,iconName:null}}function sI(n){const e=G0[n],t=sp("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ri(){return ip}const X0=()=>({prefix:null,iconName:null,rest:[]});function oI(n){let e=Bt;const t=$0.reduce((s,o)=>(s[o]="".concat(de.cssPrefix,"-").concat(o),s),{});return x0.forEach(s=>{(n.includes(t[s])||n.some(o=>tI[s].includes(o)))&&(e=s)}),e}function jc(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=Bt}=e,s=LT[t][n];if(t===Uc&&!n)return"fad";const o=vy[t][n]||vy[t][s],l=n in lr.styles?n:null;return o||l||null}function aI(n){let e=[],t=null;return n.forEach(s=>{const o=rI(de.cssPrefix,s);o?t=o:s&&e.push(s)}),{iconName:t,rest:e}}function Ty(n){return n.sort().filter((e,t,s)=>s.indexOf(e)===t)}function Bc(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let s=null;const o=fd.concat(IT),l=Ty(n.filter(T=>o.includes(T))),f=Ty(n.filter(T=>!fd.includes(T))),d=l.filter(T=>(s=T,!N0.includes(T))),[g=null]=d,y=oI(l),w=Z(Z({},aI(f)),{},{prefix:jc(g,{family:y})});return Z(Z(Z({},w),fI({values:n,family:y,styles:sl,config:de,canonical:w,givenPrefix:s})),lI(t,s,w))}function lI(n,e,t){let{prefix:s,iconName:o}=t;if(n||!s||!o)return{prefix:s,iconName:o};const l=e==="fa"?Y0(o):{},f=hs(s,o);return o=l.iconName||f||o,s=l.prefix||s,s==="far"&&!sl.far&&sl.fas&&!de.autoFetchSvg&&(s="fas"),{prefix:s,iconName:o}}const uI=x0.filter(n=>n!==Bt||n!==Uc),cI=Object.keys(cd).filter(n=>n!==Bt).map(n=>Object.keys(cd[n])).flat();function fI(n){const{values:e,family:t,canonical:s,givenPrefix:o="",styles:l={},config:f={}}=n,d=t===Uc,g=e.includes("fa-duotone")||e.includes("fad"),y=f.familyDefault==="duotone",w=s.prefix==="fad"||s.prefix==="fa-duotone";if(!d&&(g||y||w)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&uI.includes(t)&&(Object.keys(l).find(C=>cI.includes(C))||f.autoFetchSvg)){const C=mT.get(t).defaultShortPrefixId;s.prefix=C,s.iconName=hs(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||o==="fa")&&(s.prefix=Ri()||"fas"),s}class hI{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(l=>{this.definitions[l]=Z(Z({},this.definitions[l]||{}),o[l]),vd(l,o[l]);const f=tp[Bt][l];f&&vd(f,o[l]),Q0()})}reset(){this.definitions={}}_pullDefinitions(e,t){const s=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(s).map(o=>{const{prefix:l,iconName:f,icon:d}=s[o],g=d[2];e[l]||(e[l]={}),g.length>0&&g.forEach(y=>{typeof y=="string"&&(e[l][y]=d)}),e[l][f]=d}),e}}let Iy=[],ko={};const xo={},dI=Object.keys(xo);function pI(n,e){let{mixoutsTo:t}=e;return Iy=n,ko={},Object.keys(xo).forEach(s=>{dI.indexOf(s)===-1&&delete xo[s]}),Iy.forEach(s=>{const o=s.mixout?s.mixout():{};if(Object.keys(o).forEach(l=>{typeof o[l]=="function"&&(t[l]=o[l]),typeof o[l]=="object"&&Object.keys(o[l]).forEach(f=>{t[l]||(t[l]={}),t[l][f]=o[l][f]})}),s.hooks){const l=s.hooks();Object.keys(l).forEach(f=>{ko[f]||(ko[f]=[]),ko[f].push(l[f])})}s.provides&&s.provides(xo)}),t}function _d(n,e){for(var t=arguments.length,s=new Array(t>2?t-2:0),o=2;o<t;o++)s[o-2]=arguments[o];return(ko[n]||[]).forEach(f=>{e=f.apply(null,[e,...s])}),e}function vs(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];(ko[n]||[]).forEach(l=>{l.apply(null,t)})}function Ni(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return xo[n]?xo[n].apply(null,e):void 0}function wd(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Ri();if(e)return e=hs(t,e)||e,wy(J0.definitions,t,e)||wy(lr.styles,t,e)}const J0=new hI,mI=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,vs("noAuto")},gI={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qr?(vs("beforeI2svg",n),Ni("pseudoElements2svg",n),Ni("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,XT(()=>{vI({autoReplaceSvgRoot:e}),vs("watch",n)})}},yI={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:hs(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=jc(n[0]);return{prefix:t,iconName:hs(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(de.cssPrefix,"-"))>-1||n.match(MT))){const e=Bc(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ri(),iconName:hs(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Ri();return{prefix:e,iconName:hs(e,n)||n}}}},mn={noAuto:mI,config:de,dom:gI,parse:yI,library:J0,findIconDefinition:wd,toHtml:ml},vI=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Qe}=n;(Object.keys(lr.styles).length>0||de.autoFetchSvg)&&qr&&de.autoReplaceSvg&&mn.dom.i2svg({node:e})};function $c(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>ml(t))}}),Object.defineProperty(n,"node",{get:function(){if(!qr)return;const t=Qe.createElement("div");return t.innerHTML=n.html,t.children}}),n}function _I(n){let{children:e,main:t,mask:s,attributes:o,styles:l,transform:f}=n;if(rp(f)&&t.found&&!s.found){const{width:d,height:g}=t,y={x:d/g/2,y:.5};o.style=zc(Z(Z({},l),{},{"transform-origin":"".concat(y.x+f.x/16,"em ").concat(y.y+f.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function wI(n){let{prefix:e,iconName:t,children:s,attributes:o,symbol:l}=n;const f=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},o),{},{id:f}),children:s}]}]}function op(n){const{icons:{main:e,mask:t},prefix:s,iconName:o,transform:l,symbol:f,title:d,maskId:g,titleId:y,extra:w,watchable:T=!1}=n,{width:C,height:O}=t.found?t:e,V=wT.includes(s),$=[de.replacementClass,o?"".concat(de.cssPrefix,"-").concat(o):""].filter(ve=>w.classes.indexOf(ve)===-1).filter(ve=>ve!==""||!!ve).concat(w.classes).join(" ");let U={children:[],attributes:Z(Z({},w.attributes),{},{"data-prefix":s,"data-icon":o,class:$,role:w.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(O)})};const H=V&&!~w.classes.indexOf("fa-fw")?{width:"".concat(C/O*16*.0625,"em")}:{};T&&(U.attributes[ys]=""),d&&(U.children.push({tag:"title",attributes:{id:U.attributes["aria-labelledby"]||"title-".concat(y||il())},children:[d]}),delete U.attributes.title);const J=Z(Z({},U),{},{prefix:s,iconName:o,main:e,mask:t,maskId:g,transform:l,symbol:f,styles:Z(Z({},H),w.styles)}),{children:K,attributes:ae}=t.found&&e.found?Ni("generateAbstractMask",J)||{children:[],attributes:{}}:Ni("generateAbstractIcon",J)||{children:[],attributes:{}};return J.children=K,J.attributes=ae,f?wI(J):_I(J)}function Sy(n){const{content:e,width:t,height:s,transform:o,title:l,extra:f,watchable:d=!1}=n,g=Z(Z(Z({},f.attributes),l?{title:l}:{}),{},{class:f.classes.join(" ")});d&&(g[ys]="");const y=Z({},f.styles);rp(o)&&(y.transform=KT({transform:o,startCentered:!0,width:t,height:s}),y["-webkit-transform"]=y.transform);const w=zc(y);w.length>0&&(g.style=w);const T=[];return T.push({tag:"span",attributes:g,children:[e]}),l&&T.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),T}function EI(n){const{content:e,title:t,extra:s}=n,o=Z(Z(Z({},s.attributes),t?{title:t}:{}),{},{class:s.classes.join(" ")}),l=zc(s.styles);l.length>0&&(o.style=l);const f=[];return f.push({tag:"span",attributes:o,children:[e]}),t&&f.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),f}const{styles:Bh}=lr;function Ed(n){const e=n[0],t=n[1],[s]=n.slice(4);let o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(Uh.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Uh.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Uh.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:o}}const TI={found:!1,width:512,height:512};function II(n,e){!L0&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Td(n,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=Ri()),new Promise((s,o)=>{if(t==="fa"){const l=Y0(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&Bh[e]&&Bh[e][n]){const l=Bh[e][n];return s(Ed(l))}II(n,e),s(Z(Z({},TI),{},{icon:de.showMissingIcons&&n?Ni("missingIconAbstract")||{}:{}}))})}const Ay=()=>{},Id=de.measurePerformance&&Wu&&Wu.mark&&Wu.measure?Wu:{mark:Ay,measure:Ay},Ka='FA "6.7.2"',SI=n=>(Id.mark("".concat(Ka," ").concat(n," begins")),()=>Z0(n)),Z0=n=>{Id.mark("".concat(Ka," ").concat(n," ends")),Id.measure("".concat(Ka," ").concat(n),"".concat(Ka," ").concat(n," begins"),"".concat(Ka," ").concat(n," ends"))};var ap={begin:SI,end:Z0};const tc=()=>{};function Cy(n){return typeof(n.getAttribute?n.getAttribute(ys):null)=="string"}function AI(n){const e=n.getAttribute?n.getAttribute(Zd):null,t=n.getAttribute?n.getAttribute(ep):null;return e&&t}function CI(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function PI(){return de.autoReplaceSvg===!0?nc.replace:nc[de.autoReplaceSvg]||nc.replace}function kI(n){return Qe.createElementNS("http://www.w3.org/2000/svg",n)}function RI(n){return Qe.createElement(n)}function e_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?kI:RI}=e;if(typeof n=="string")return Qe.createTextNode(n);const s=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){s.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){s.appendChild(e_(l,{ceFn:t}))}),s}function NI(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const nc={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(e_(t),e)}),e.getAttribute(ys)===null&&de.keepOriginalSource){let t=Qe.createComment(NI(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~np(e).indexOf(de.replacementClass))return nc.replace(n);const s=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((f,d)=>(d===de.replacementClass||d.match(s)?f.toSvg.push(d):f.toNode.push(d),f),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const o=t.map(l=>ml(l)).join(`
`);e.setAttribute(ys,""),e.innerHTML=o}};function Py(n){n()}function t_(n,e){const t=typeof e=="function"?e:tc;if(n.length===0)t();else{let s=Py;de.mutateApproach===OT&&(s=ki.requestAnimationFrame||Py),s(()=>{const o=PI(),l=ap.begin("mutate");n.map(o),l(),t()})}}let lp=!1;function n_(){lp=!0}function Sd(){lp=!1}let mc=null;function ky(n){if(!py||!de.observeMutations)return;const{treeCallback:e=tc,nodeCallback:t=tc,pseudoElementsCallback:s=tc,observeMutationsRoot:o=Qe}=n;mc=new py(l=>{if(lp)return;const f=Ri();Bo(l).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!Cy(d.addedNodes[0])&&(de.searchPseudoElements&&s(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&de.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&Cy(d.target)&&~UT.indexOf(d.attributeName))if(d.attributeName==="class"&&AI(d.target)){const{prefix:g,iconName:y}=Bc(np(d.target));d.target.setAttribute(Zd,g||f),y&&d.target.setAttribute(ep,y)}else CI(d.target)&&t(d.target)})}),qr&&mc.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function xI(){mc&&mc.disconnect()}function bI(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((s,o)=>{const l=o.split(":"),f=l[0],d=l.slice(1);return f&&d.length>0&&(s[f]=d.join(":").trim()),s},{})),t}function OI(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),s=n.innerText!==void 0?n.innerText.trim():"";let o=Bc(np(n));return o.prefix||(o.prefix=Ri()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&s.length>0&&(o.iconName=iI(o.prefix,n.innerText)||sp(o.prefix,yd(n.innerText))),!o.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function DI(n){const e=Bo(n.attributes).reduce((o,l)=>(o.name!=="class"&&o.name!=="style"&&(o[l.name]=l.value),o),{}),t=n.getAttribute("title"),s=n.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(s||il()):(e["aria-hidden"]="true",e.focusable="false")),e}function LI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ar,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ry(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:s,rest:o}=OI(n),l=DI(n),f=_d("parseNodeAttributes",{},n);let d=e.styleParser?bI(n):[];return Z({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:s,transform:ar,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:d,attributes:l}},f)}const{styles:MI}=lr;function r_(n){const e=de.autoReplaceSvg==="nest"?Ry(n,{styleParser:!1}):Ry(n);return~e.extra.classes.indexOf(V0)?Ni("generateLayersText",n,e):Ni("generateSvgReplacementMutation",n,e)}function VI(){return[...yT,...fd]}function Ny(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qr)return Promise.resolve();const t=Qe.documentElement.classList,s=w=>t.add("".concat(yy,"-").concat(w)),o=w=>t.remove("".concat(yy,"-").concat(w)),l=de.autoFetchSvg?VI():N0.concat(Object.keys(MI));l.includes("fa")||l.push("fa");const f=[".".concat(V0,":not([").concat(ys,"])")].concat(l.map(w=>".".concat(w,":not([").concat(ys,"])"))).join(", ");if(f.length===0)return Promise.resolve();let d=[];try{d=Bo(n.querySelectorAll(f))}catch{}if(d.length>0)s("pending"),o("complete");else return Promise.resolve();const g=ap.begin("onTree"),y=d.reduce((w,T)=>{try{const C=r_(T);C&&w.push(C)}catch(C){L0||C.name==="MissingIcon"&&console.error(C)}return w},[]);return new Promise((w,T)=>{Promise.all(y).then(C=>{t_(C,()=>{s("active"),s("complete"),o("pending"),typeof e=="function"&&e(),g(),w()})}).catch(C=>{g(),T(C)})})}function FI(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;r_(n).then(t=>{t&&t_([t],e)})}function UI(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:wd(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:wd(o||{})),n(s,Z(Z({},t),{},{mask:o}))}}const zI=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ar,symbol:s=!1,mask:o=null,maskId:l=null,title:f=null,titleId:d=null,classes:g=[],attributes:y={},styles:w={}}=e;if(!n)return;const{prefix:T,iconName:C,icon:O}=n;return $c(Z({type:"icon"},n),()=>(vs("beforeDOMElementCreation",{iconDefinition:n,params:e}),de.autoA11y&&(f?y["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(d||il()):(y["aria-hidden"]="true",y.focusable="false")),op({icons:{main:Ed(O),mask:o?Ed(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:C,transform:Z(Z({},ar),t),symbol:s,title:f,maskId:l,titleId:d,extra:{attributes:y,styles:w,classes:g}})))};var jI={mixout(){return{icon:UI(zI)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=Ny,n.nodeCallback=FI,n}}},provides(n){n.i2svg=function(e){const{node:t=Qe,callback:s=()=>{}}=e;return Ny(t,s)},n.generateSvgReplacementMutation=function(e,t){const{iconName:s,title:o,titleId:l,prefix:f,transform:d,symbol:g,mask:y,maskId:w,extra:T}=t;return new Promise((C,O)=>{Promise.all([Td(s,f),y.iconName?Td(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(V=>{let[$,U]=V;C([e,op({icons:{main:$,mask:U},prefix:f,iconName:s,transform:d,symbol:g,maskId:w,title:o,titleId:l,extra:T,watchable:!0})])}).catch(O)})},n.generateAbstractIcon=function(e){let{children:t,attributes:s,main:o,transform:l,styles:f}=e;const d=zc(f);d.length>0&&(s.style=d);let g;return rp(l)&&(g=Ni("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),t.push(g||o.icon),{children:t,attributes:s}}}},BI={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return $c({type:"layer"},()=>{vs("beforeDOMElementCreation",{assembler:n,params:e});let s=[];return n(o=>{Array.isArray(o)?o.map(l=>{s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:s}]})}}}},$I={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:s=[],attributes:o={},styles:l={}}=e;return $c({type:"counter",content:n},()=>(vs("beforeDOMElementCreation",{content:n,params:e}),EI({content:n.toString(),title:t,extra:{attributes:o,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...s]}})))}}}},HI={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ar,title:s=null,classes:o=[],attributes:l={},styles:f={}}=e;return $c({type:"text",content:n},()=>(vs("beforeDOMElementCreation",{content:n,params:e}),Sy({content:n,transform:Z(Z({},ar),t),title:s,extra:{attributes:l,styles:f,classes:["".concat(de.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:s,transform:o,extra:l}=t;let f=null,d=null;if(k0){const g=parseInt(getComputedStyle(e).fontSize,10),y=e.getBoundingClientRect();f=y.width/g,d=y.height/g}return de.autoA11y&&!s&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,Sy({content:e.innerHTML,width:f,height:d,transform:o,title:s,extra:l,watchable:!0})])}}};const WI=new RegExp('"',"ug"),xy=[1105920,1112319],by=Z(Z(Z(Z({},{FontAwesome:{normal:"fas",400:"fas"}}),pT),xT),ST),Ad=Object.keys(by).reduce((n,e)=>(n[e.toLowerCase()]=by[e],n),{}),qI=Object.keys(Ad).reduce((n,e)=>{const t=Ad[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function GI(n){const e=n.replace(WI,""),t=ZT(e,0),s=t>=xy[0]&&t<=xy[1],o=e.length===2?e[0]===e[1]:!1;return{value:yd(o?e[0]:e),isSecondary:s||o}}function KI(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),o=isNaN(s)?"normal":s;return(Ad[t]||{})[o]||qI[t]}function Oy(n,e){const t="".concat(bT).concat(e.replace(":","-"));return new Promise((s,o)=>{if(n.getAttribute(t)!==null)return s();const f=Bo(n.children).filter(C=>C.getAttribute(dd)===e)[0],d=ki.getComputedStyle(n,e),g=d.getPropertyValue("font-family"),y=g.match(VT),w=d.getPropertyValue("font-weight"),T=d.getPropertyValue("content");if(f&&!y)return n.removeChild(f),s();if(y&&T!=="none"&&T!==""){const C=d.getPropertyValue("content");let O=KI(g,w);const{value:V,isSecondary:$}=GI(C),U=y[0].startsWith("FontAwesome");let H=sp(O,V),J=H;if(U){const K=sI(V);K.iconName&&K.prefix&&(H=K.iconName,O=K.prefix)}if(H&&!$&&(!f||f.getAttribute(Zd)!==O||f.getAttribute(ep)!==J)){n.setAttribute(t,J),f&&n.removeChild(f);const K=LI(),{extra:ae}=K;ae.attributes[dd]=e,Td(H,O).then(ve=>{const Te=op(Z(Z({},K),{},{icons:{main:ve,mask:X0()},prefix:O,iconName:J,extra:ae,watchable:!0})),N=Qe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(N,n.firstChild):n.appendChild(N),N.outerHTML=Te.map(I=>ml(I)).join(`
`),n.removeAttribute(t),s()}).catch(o)}else s()}else s()})}function QI(n){return Promise.all([Oy(n,"::before"),Oy(n,"::after")])}function YI(n){return n.parentNode!==document.head&&!~DT.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(dd)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Dy(n){if(qr)return new Promise((e,t)=>{const s=Bo(n.querySelectorAll("*")).filter(YI).map(QI),o=ap.begin("searchPseudoElements");n_(),Promise.all(s).then(()=>{o(),Sd(),e()}).catch(()=>{o(),Sd(),t()})})}var XI={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=Dy,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=Qe}=e;de.searchPseudoElements&&Dy(t)}}};let Ly=!1;var JI={mixout(){return{dom:{unwatch(){n_(),Ly=!0}}}},hooks(){return{bootstrap(){ky(_d("mutationObserverCallbacks",{}))},noAuto(){xI()},watch(n){const{observeMutationsRoot:e}=n;Ly?Sd():ky(_d("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const My=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,s)=>{const o=s.toLowerCase().split("-"),l=o[0];let f=o.slice(1).join("-");if(l&&f==="h")return t.flipX=!0,t;if(l&&f==="v")return t.flipY=!0,t;if(f=parseFloat(f),isNaN(f))return t;switch(l){case"grow":t.size=t.size+f;break;case"shrink":t.size=t.size-f;break;case"left":t.x=t.x-f;break;case"right":t.x=t.x+f;break;case"up":t.y=t.y-f;break;case"down":t.y=t.y+f;break;case"rotate":t.rotate=t.rotate+f;break}return t},e)};var ZI={mixout(){return{parse:{transform:n=>My(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=My(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:s,containerWidth:o,iconWidth:l}=e;const f={transform:"translate(".concat(o/2," 256)")},d="translate(".concat(s.x*32,", ").concat(s.y*32,") "),g="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),y="rotate(".concat(s.rotate," 0 0)"),w={transform:"".concat(d," ").concat(g," ").concat(y)},T={transform:"translate(".concat(l/2*-1," -256)")},C={outer:f,inner:w,path:T};return{tag:"g",attributes:Z({},C.outer),children:[{tag:"g",attributes:Z({},C.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:Z(Z({},t.icon.attributes),C.path)}]}]}}}};const $h={x:0,y:0,width:"100%",height:"100%"};function Vy(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function e2(n){return n.tag==="g"?n.children:[n]}var t2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),s=t?Bc(t.split(" ").map(o=>o.trim())):X0();return s.prefix||(s.prefix=Ri()),n.mask=s,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:s,main:o,mask:l,maskId:f,transform:d}=e;const{width:g,icon:y}=o,{width:w,icon:T}=l,C=GT({transform:d,containerWidth:w,iconWidth:g}),O={tag:"rect",attributes:Z(Z({},$h),{},{fill:"white"})},V=y.children?{children:y.children.map(Vy)}:{},$={tag:"g",attributes:Z({},C.inner),children:[Vy(Z({tag:y.tag,attributes:Z(Z({},y.attributes),C.path)},V))]},U={tag:"g",attributes:Z({},C.outer),children:[$]},H="mask-".concat(f||il()),J="clip-".concat(f||il()),K={tag:"mask",attributes:Z(Z({},$h),{},{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,U]},ae={tag:"defs",children:[{tag:"clipPath",attributes:{id:J},children:e2(T)},K]};return t.push(ae,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(J,")"),mask:"url(#".concat(H,")")},$h)}),{children:t,attributes:s}}}},n2={provides(n){let e=!1;ki.matchMedia&&(e=ki.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:Z(Z({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=Z(Z({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:Z(Z({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:Z(Z({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(f),t.push({tag:"path",attributes:Z(Z({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:Z(Z({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:Z(Z({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},r2={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),s=t===null?!1:t===""?!0:t;return n.symbol=s,n}}}},i2=[YT,jI,BI,$I,HI,XI,JI,ZI,t2,n2,r2];pI(i2,{mixoutsTo:mn});mn.noAuto;mn.config;mn.library;mn.dom;const Cd=mn.parse;mn.findIconDefinition;mn.toHtml;const s2=mn.icon;mn.layer;mn.text;mn.counter;var Hh={exports:{}},Wh,Fy;function o2(){if(Fy)return Wh;Fy=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Wh=n,Wh}var qh,Uy;function a2(){if(Uy)return qh;Uy=1;var n=o2();function e(){}function t(){}return t.resetWarningCache=e,qh=function(){function s(f,d,g,y,w,T){if(T!==n){var C=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw C.name="Invariant Violation",C}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},qh}var zy;function l2(){return zy||(zy=1,Hh.exports=a2()()),Hh.exports}var u2=l2();const Pe=I0(u2);function jy(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,s)}return t}function or(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?jy(Object(t),!0).forEach(function(s){Ro(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):jy(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function gc(n){"@babel/helpers - typeof";return gc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gc(n)}function Ro(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c2(n,e){if(n==null)return{};var t={},s=Object.keys(n),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function f2(n,e){if(n==null)return{};var t=c2(n,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(t[s]=n[s])}return t}function Pd(n){return h2(n)||d2(n)||p2(n)||m2()}function h2(n){if(Array.isArray(n))return kd(n)}function d2(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function p2(n,e){if(n){if(typeof n=="string")return kd(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kd(n,e)}}function kd(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,s=new Array(e);t<e;t++)s[t]=n[t];return s}function m2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g2(n){var e,t=n.beat,s=n.fade,o=n.beatFade,l=n.bounce,f=n.shake,d=n.flash,g=n.spin,y=n.spinPulse,w=n.spinReverse,T=n.pulse,C=n.fixedWidth,O=n.inverse,V=n.border,$=n.listItem,U=n.flip,H=n.size,J=n.rotation,K=n.pull,ae=(e={"fa-beat":t,"fa-fade":s,"fa-beat-fade":o,"fa-bounce":l,"fa-shake":f,"fa-flash":d,"fa-spin":g,"fa-spin-reverse":w,"fa-spin-pulse":y,"fa-pulse":T,"fa-fw":C,"fa-inverse":O,"fa-border":V,"fa-li":$,"fa-flip":U===!0,"fa-flip-horizontal":U==="horizontal"||U==="both","fa-flip-vertical":U==="vertical"||U==="both"},Ro(e,"fa-".concat(H),typeof H<"u"&&H!==null),Ro(e,"fa-rotate-".concat(J),typeof J<"u"&&J!==null&&J!==0),Ro(e,"fa-pull-".concat(K),typeof K<"u"&&K!==null),Ro(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(ae).map(function(ve){return ae[ve]?ve:null}).filter(function(ve){return ve})}function y2(n){return n=n-0,n===n}function i_(n){return y2(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var v2=["style"];function _2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function w2(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var s=t.indexOf(":"),o=i_(t.slice(0,s)),l=t.slice(s+1).trim();return o.startsWith("webkit")?e[_2(o)]=l:e[o]=l,e},{})}function s_(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var s=(e.children||[]).map(function(g){return s_(n,g)}),o=Object.keys(e.attributes||{}).reduce(function(g,y){var w=e.attributes[y];switch(y){case"class":g.attrs.className=w,delete e.attributes.class;break;case"style":g.attrs.style=w2(w);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?g.attrs[y.toLowerCase()]=w:g.attrs[i_(y)]=w}return g},{attrs:{}}),l=t.style,f=l===void 0?{}:l,d=f2(t,v2);return o.attrs.style=or(or({},o.attrs.style),f),n.apply(void 0,[e.tag,or(or({},o.attrs),d)].concat(Pd(s)))}var o_=!1;try{o_=!0}catch{}function E2(){if(!o_&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function By(n){if(n&&gc(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Cd.icon)return Cd.icon(n);if(n===null)return null;if(n&&gc(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Gh(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ro({},n,e):{}}var $y={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Tt=S0.forwardRef(function(n,e){var t=or(or({},$y),n),s=t.icon,o=t.mask,l=t.symbol,f=t.className,d=t.title,g=t.titleId,y=t.maskId,w=By(s),T=Gh("classes",[].concat(Pd(g2(t)),Pd((f||"").split(" ")))),C=Gh("transform",typeof t.transform=="string"?Cd.transform(t.transform):t.transform),O=Gh("mask",By(o)),V=s2(w,or(or(or(or({},T),C),O),{},{symbol:l,title:d,titleId:g,maskId:y}));if(!V)return E2("Could not find icon",w),null;var $=V.abstract,U={ref:e};return Object.keys(t).forEach(function(H){$y.hasOwnProperty(H)||(U[H]=t[H])}),T2($[0],U)});Tt.displayName="FontAwesomeIcon";Tt.propTypes={beat:Pe.bool,border:Pe.bool,beatFade:Pe.bool,bounce:Pe.bool,className:Pe.string,fade:Pe.bool,flash:Pe.bool,mask:Pe.oneOfType([Pe.object,Pe.array,Pe.string]),maskId:Pe.string,fixedWidth:Pe.bool,inverse:Pe.bool,flip:Pe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Pe.oneOfType([Pe.object,Pe.array,Pe.string]),listItem:Pe.bool,pull:Pe.oneOf(["right","left"]),pulse:Pe.bool,rotation:Pe.oneOf([0,90,180,270]),shake:Pe.bool,size:Pe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Pe.bool,spinPulse:Pe.bool,spinReverse:Pe.bool,symbol:Pe.oneOfType([Pe.bool,Pe.string]),title:Pe.string,titleId:Pe.string,transform:Pe.oneOfType([Pe.string,Pe.object]),swapOpacity:Pe.bool};var T2=s_.bind(null,S0.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const I2={prefix:"fas",iconName:"info",icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 224 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192-32 0c-17.7 0-32-14.3-32-32z"]},S2={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]},A2={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},C2={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},P2={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},k2={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},R2={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},N2={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},x2=N2,b2={prefix:"fas",iconName:"copyright",icon:[512,512,[169],"f1f9","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z"]};var Ha={},Hy;function O2(){if(Hy)return Ha;Hy=1,Object.defineProperty(Ha,"__esModule",{value:!0}),Ha.parse=f,Ha.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const C=function(){};return C.prototype=Object.create(null),C})();function f(C,O){const V=new l,$=C.length;if($<2)return V;const U=(O==null?void 0:O.decode)||w;let H=0;do{const J=C.indexOf("=",H);if(J===-1)break;const K=C.indexOf(";",H),ae=K===-1?$:K;if(J>ae){H=C.lastIndexOf(";",J-1)+1;continue}const ve=d(C,H,J),Te=g(C,J,ve),N=C.slice(ve,Te);if(V[N]===void 0){let I=d(C,J+1,ae),A=g(C,ae,I);const R=U(C.slice(I,A));V[N]=R}H=ae+1}while(H<$);return V}function d(C,O,V){do{const $=C.charCodeAt(O);if($!==32&&$!==9)return O}while(++O<V);return V}function g(C,O,V){for(;O>V;){const $=C.charCodeAt(--O);if($!==32&&$!==9)return O+1}return V}function y(C,O,V){const $=(V==null?void 0:V.encode)||encodeURIComponent;if(!n.test(C))throw new TypeError(`argument name is invalid: ${C}`);const U=$(O);if(!e.test(U))throw new TypeError(`argument val is invalid: ${O}`);let H=C+"="+U;if(!V)return H;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);H+="; Max-Age="+V.maxAge}if(V.domain){if(!t.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);H+="; Domain="+V.domain}if(V.path){if(!s.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);H+="; Path="+V.path}if(V.expires){if(!T(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);H+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(H+="; HttpOnly"),V.secure&&(H+="; Secure"),V.partitioned&&(H+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return H}function w(C){if(C.indexOf("%")===-1)return C;try{return decodeURIComponent(C)}catch{return C}}function T(C){return o.call(C)==="[object Date]"}return Ha}O2();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wy="popstate";function D2(n={}){function e(s,o){let{pathname:l,search:f,hash:d}=s.location;return Rd("",{pathname:l,search:f,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ol(o)}return M2(e,t,null,n)}function tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function fr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function L2(){return Math.random().toString(36).substring(2,10)}function qy(n,e){return{usr:n.state,key:n.key,idx:e}}function Rd(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?$o(e):e,state:t,key:e&&e.key||s||L2()}}function ol({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function $o(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function M2(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,f=o.history,d="POP",g=null,y=w();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function w(){return(f.state||{idx:null}).idx}function T(){d="POP";let U=w(),H=U==null?null:U-y;y=U,g&&g({action:d,location:$.location,delta:H})}function C(U,H){d="PUSH";let J=Rd($.location,U,H);y=w()+1;let K=qy(J,y),ae=$.createHref(J);try{f.pushState(K,"",ae)}catch(ve){if(ve instanceof DOMException&&ve.name==="DataCloneError")throw ve;o.location.assign(ae)}l&&g&&g({action:d,location:$.location,delta:1})}function O(U,H){d="REPLACE";let J=Rd($.location,U,H);y=w();let K=qy(J,y),ae=$.createHref(J);f.replaceState(K,"",ae),l&&g&&g({action:d,location:$.location,delta:0})}function V(U){let H=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof U=="string"?U:ol(U);return J=J.replace(/ $/,"%20"),tt(H,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,H)}let $={get action(){return d},get location(){return n(o,f)},listen(U){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Wy,T),g=U,()=>{o.removeEventListener(Wy,T),g=null}},createHref(U){return e(o,U)},createURL:V,encodeLocation(U){let H=V(U);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:C,replace:O,go(U){return f.go(U)}};return $}function a_(n,e,t="/"){return V2(n,e,t,!1)}function V2(n,e,t,s){let o=typeof e=="string"?$o(e):e,l=xi(o.pathname||"/",t);if(l==null)return null;let f=l_(n);F2(f);let d=null;for(let g=0;d==null&&g<f.length;++g){let y=Q2(l);d=G2(f[g],y,s)}return d}function l_(n,e=[],t=[],s=""){let o=(l,f,d)=>{let g={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:f,route:l};g.relativePath.startsWith("/")&&(tt(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let y=Fr([s,g.relativePath]),w=t.concat(g);l.children&&l.children.length>0&&(tt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),l_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:W2(y,l.index),routesMeta:w})};return n.forEach((l,f)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,f);else for(let g of u_(l.path))o(l,f,g)}),e}function u_(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let f=u_(s.join("/")),d=[];return d.push(...f.map(g=>g===""?l:[l,g].join("/"))),o&&d.push(...f),d.map(g=>n.startsWith("/")&&g===""?"/":g)}function F2(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:q2(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var U2=/^:[\w-]+$/,z2=3,j2=2,B2=1,$2=10,H2=-2,Gy=n=>n==="*";function W2(n,e){let t=n.split("/"),s=t.length;return t.some(Gy)&&(s+=H2),e&&(s+=j2),t.filter(o=>!Gy(o)).reduce((o,l)=>o+(U2.test(l)?z2:l===""?B2:$2),s)}function q2(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function G2(n,e,t=!1){let{routesMeta:s}=n,o={},l="/",f=[];for(let d=0;d<s.length;++d){let g=s[d],y=d===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=yc({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},w),C=g.route;if(!T&&y&&t&&!s[s.length-1].route.index&&(T=yc({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},w)),!T)return null;Object.assign(o,T.params),f.push({params:o,pathname:Fr([l,T.pathname]),pathnameBase:Z2(Fr([l,T.pathnameBase])),route:C}),T.pathnameBase!=="/"&&(l=Fr([l,T.pathnameBase]))}return f}function yc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=K2(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],f=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((y,{paramName:w,isOptional:T},C)=>{if(w==="*"){let V=d[C]||"";f=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const O=d[C];return T&&!O?y[w]=void 0:y[w]=(O||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:f,pattern:n}}function K2(n,e=!1,t=!0){fr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,g)=>(s.push({paramName:d,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Q2(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return fr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function xi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function Y2(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?$o(n):n;return{pathname:t?t.startsWith("/")?t:X2(t,e):e,search:eS(s),hash:tS(o)}}function X2(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Kh(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function J2(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function c_(n){let e=J2(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function f_(n,e,t,s=!1){let o;typeof n=="string"?o=$o(n):(o={...n},tt(!o.pathname||!o.pathname.includes("?"),Kh("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),Kh("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),Kh("#","search","hash",o)));let l=n===""||o.pathname==="",f=l?"/":o.pathname,d;if(f==null)d=t;else{let T=e.length-1;if(!s&&f.startsWith("..")){let C=f.split("/");for(;C[0]==="..";)C.shift(),T-=1;o.pathname=C.join("/")}d=T>=0?e[T]:"/"}let g=Y2(o,d),y=f&&f!=="/"&&f.endsWith("/"),w=(l||f===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||w)&&(g.pathname+="/"),g}var Fr=n=>n.join("/").replace(/\/\/+/g,"/"),Z2=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),eS=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,tS=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function nS(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var h_=["POST","PUT","PATCH","DELETE"];new Set(h_);var rS=["GET",...h_];new Set(rS);var Ho=W.createContext(null);Ho.displayName="DataRouter";var Hc=W.createContext(null);Hc.displayName="DataRouterState";var d_=W.createContext({isTransitioning:!1});d_.displayName="ViewTransition";var iS=W.createContext(new Map);iS.displayName="Fetchers";var sS=W.createContext(null);sS.displayName="Await";var mr=W.createContext(null);mr.displayName="Navigation";var gl=W.createContext(null);gl.displayName="Location";var gr=W.createContext({outlet:null,matches:[],isDataRoute:!1});gr.displayName="Route";var up=W.createContext(null);up.displayName="RouteError";function oS(n,{relative:e}={}){tt(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=W.useContext(mr),{hash:o,pathname:l,search:f}=vl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Fr([t,l])),s.createHref({pathname:d,search:f,hash:o})}function yl(){return W.useContext(gl)!=null}function Ps(){return tt(yl(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(gl).location}var p_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function m_(n){W.useContext(mr).static||W.useLayoutEffect(n)}function g_(){let{isDataRoute:n}=W.useContext(gr);return n?wS():aS()}function aS(){tt(yl(),"useNavigate() may be used only in the context of a <Router> component.");let n=W.useContext(Ho),{basename:e,navigator:t}=W.useContext(mr),{matches:s}=W.useContext(gr),{pathname:o}=Ps(),l=JSON.stringify(c_(s)),f=W.useRef(!1);return m_(()=>{f.current=!0}),W.useCallback((g,y={})=>{if(fr(f.current,p_),!f.current)return;if(typeof g=="number"){t.go(g);return}let w=f_(g,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Fr([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,n])}W.createContext(null);function lS(){let{matches:n}=W.useContext(gr),e=n[n.length-1];return e?e.params:{}}function vl(n,{relative:e}={}){let{matches:t}=W.useContext(gr),{pathname:s}=Ps(),o=JSON.stringify(c_(t));return W.useMemo(()=>f_(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function uS(n,e){return y_(n,e)}function y_(n,e,t,s){var J;tt(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=W.useContext(mr),{matches:f}=W.useContext(gr),d=f[f.length-1],g=d?d.params:{},y=d?d.pathname:"/",w=d?d.pathnameBase:"/",T=d&&d.route;{let K=T&&T.path||"";v_(y,!T||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let C=Ps(),O;if(e){let K=typeof e=="string"?$o(e):e;tt(w==="/"||((J=K.pathname)==null?void 0:J.startsWith(w)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${K.pathname}" was given in the \`location\` prop.`),O=K}else O=C;let V=O.pathname||"/",$=V;if(w!=="/"){let K=w.replace(/^\//,"").split("/");$="/"+V.replace(/^\//,"").split("/").slice(K.length).join("/")}let U=!l&&t&&t.matches&&t.matches.length>0?t.matches:a_(n,{pathname:$});fr(T||U!=null,`No routes matched location "${O.pathname}${O.search}${O.hash}" `),fr(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=pS(U&&U.map(K=>Object.assign({},K,{params:Object.assign({},g,K.params),pathname:Fr([w,o.encodeLocation?o.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?w:Fr([w,o.encodeLocation?o.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),f,t,s);return e&&H?W.createElement(gl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...O},navigationType:"POP"}},H):H}function cS(){let n=_S(),e=nS(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:l},"ErrorBoundary")," or"," ",W.createElement("code",{style:l},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,f)}var fS=W.createElement(cS,null),hS=class extends W.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?W.createElement(gr.Provider,{value:this.props.routeContext},W.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dS({routeContext:n,match:e,children:t}){let s=W.useContext(Ho);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(gr.Provider,{value:n},t)}function pS(n,e=[],t=null,s=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let g=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);tt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,d=-1;if(t)for(let g=0;g<o.length;g++){let y=o[g];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=g),y.route.id){let{loaderData:w,errors:T}=t,C=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||C){f=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((g,y,w)=>{let T,C=!1,O=null,V=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,O=y.route.errorElement||fS,f&&(d<0&&w===0?(v_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,V=null):d===w&&(C=!0,V=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,w+1)),U=()=>{let H;return T?H=O:C?H=V:y.route.Component?H=W.createElement(y.route.Component,null):y.route.element?H=y.route.element:H=g,W.createElement(dS,{match:y,routeContext:{outlet:g,matches:$,isDataRoute:t!=null},children:H})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?W.createElement(hS,{location:t.location,revalidation:t.revalidation,component:O,error:T,children:U(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):U()},null)}function cp(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mS(n){let e=W.useContext(Ho);return tt(e,cp(n)),e}function gS(n){let e=W.useContext(Hc);return tt(e,cp(n)),e}function yS(n){let e=W.useContext(gr);return tt(e,cp(n)),e}function fp(n){let e=yS(n),t=e.matches[e.matches.length-1];return tt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function vS(){return fp("useRouteId")}function _S(){var s;let n=W.useContext(up),e=gS("useRouteError"),t=fp("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function wS(){let{router:n}=mS("useNavigate"),e=fp("useNavigate"),t=W.useRef(!1);return m_(()=>{t.current=!0}),W.useCallback(async(o,l={})=>{fr(t.current,p_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Ky={};function v_(n,e,t){!e&&!Ky[n]&&(Ky[n]=!0,fr(!1,t))}W.memo(ES);function ES({routes:n,future:e,state:t}){return y_(n,void 0,t,e)}function rc(n){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function TS({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){tt(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),d=W.useMemo(()=>({basename:f,navigator:o,static:l,future:{}}),[f,o,l]);typeof t=="string"&&(t=$o(t));let{pathname:g="/",search:y="",hash:w="",state:T=null,key:C="default"}=t,O=W.useMemo(()=>{let V=xi(g,f);return V==null?null:{location:{pathname:V,search:y,hash:w,state:T,key:C},navigationType:s}},[f,g,y,w,T,C,s]);return fr(O!=null,`<Router basename="${f}"> is not able to match the URL "${g}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:W.createElement(mr.Provider,{value:d},W.createElement(gl.Provider,{children:e,value:O}))}function IS({children:n,location:e}){return uS(Nd(n),e)}function Nd(n,e=[]){let t=[];return W.Children.forEach(n,(s,o)=>{if(!W.isValidElement(s))return;let l=[...e,o];if(s.type===W.Fragment){t.push.apply(t,Nd(s.props.children,l));return}tt(s.type===rc,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Nd(s.props.children,l)),t.push(f)}),t}var ic="get",sc="application/x-www-form-urlencoded";function Wc(n){return n!=null&&typeof n.tagName=="string"}function SS(n){return Wc(n)&&n.tagName.toLowerCase()==="button"}function AS(n){return Wc(n)&&n.tagName.toLowerCase()==="form"}function CS(n){return Wc(n)&&n.tagName.toLowerCase()==="input"}function PS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function kS(n,e){return n.button===0&&(!e||e==="_self")&&!PS(n)}var Gu=null;function RS(){if(Gu===null)try{new FormData(document.createElement("form"),0),Gu=!1}catch{Gu=!0}return Gu}var NS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qh(n){return n!=null&&!NS.has(n)?(fr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sc}"`),null):n}function xS(n,e){let t,s,o,l,f;if(AS(n)){let d=n.getAttribute("action");s=d?xi(d,e):null,t=n.getAttribute("method")||ic,o=Qh(n.getAttribute("enctype"))||sc,l=new FormData(n)}else if(SS(n)||CS(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=n.getAttribute("formaction")||d.getAttribute("action");if(s=g?xi(g,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||ic,o=Qh(n.getAttribute("formenctype"))||Qh(d.getAttribute("enctype"))||sc,l=new FormData(d,n),!RS()){let{name:y,type:w,value:T}=n;if(w==="image"){let C=y?`${y}.`:"";l.append(`${C}x`,"0"),l.append(`${C}y`,"0")}else y&&l.append(y,T)}}else{if(Wc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ic,s=null,o=sc,f=n}return l&&o==="text/plain"&&(f=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:f}}function hp(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function bS(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OS(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function DS(n,e,t){let s=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let f=await bS(l,t);return f.links?f.links():[]}return[]}));return FS(s.flat(1).filter(OS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Qy(n,e,t,s,o,l){let f=(g,y)=>t[y]?g.route.id!==t[y].route.id:!0,d=(g,y)=>{var w;return t[y].pathname!==g.pathname||((w=t[y].route.path)==null?void 0:w.endsWith("*"))&&t[y].params["*"]!==g.params["*"]};return l==="assets"?e.filter((g,y)=>f(g,y)||d(g,y)):l==="data"?e.filter((g,y)=>{var T;let w=s.routes[g.route.id];if(!w||!w.hasLoader)return!1;if(f(g,y)||d(g,y))return!0;if(g.route.shouldRevalidate){let C=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof C=="boolean")return C}return!0}):[]}function LS(n,e){return MS(n.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function MS(n){return[...new Set(n)]}function VS(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function FS(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let l=JSON.stringify(VS(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function US(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function zS(){let n=W.useContext(Ho);return hp(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function jS(){let n=W.useContext(Hc);return hp(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var dp=W.createContext(void 0);dp.displayName="FrameworkContext";function __(){let n=W.useContext(dp);return hp(n,"You must render this element inside a <HydratedRouter> element"),n}function BS(n,e){let t=W.useContext(dp),[s,o]=W.useState(!1),[l,f]=W.useState(!1),{onFocus:d,onBlur:g,onMouseEnter:y,onMouseLeave:w,onTouchStart:T}=e,C=W.useRef(null);W.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let $=H=>{H.forEach(J=>{f(J.isIntersecting)})},U=new IntersectionObserver($,{threshold:.5});return C.current&&U.observe(C.current),()=>{U.disconnect()}}},[n]),W.useEffect(()=>{if(s){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[s]);let O=()=>{o(!0)},V=()=>{o(!1),f(!1)};return t?n!=="intent"?[l,C,{}]:[l,C,{onFocus:Wa(d,O),onBlur:Wa(g,V),onMouseEnter:Wa(y,O),onMouseLeave:Wa(w,V),onTouchStart:Wa(T,O)}]:[!1,C,{}]}function Wa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function $S({page:n,...e}){let{router:t}=zS(),s=W.useMemo(()=>a_(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?W.createElement(WS,{page:n,matches:s,...e}):null}function HS(n){let{manifest:e,routeModules:t}=__(),[s,o]=W.useState([]);return W.useEffect(()=>{let l=!1;return DS(n,e,t).then(f=>{l||o(f)}),()=>{l=!0}},[n,e,t]),s}function WS({page:n,matches:e,...t}){let s=Ps(),{manifest:o,routeModules:l}=__(),{loaderData:f,matches:d}=jS(),g=W.useMemo(()=>Qy(n,e,d,o,s,"data"),[n,e,d,o,s]),y=W.useMemo(()=>Qy(n,e,d,o,s,"assets"),[n,e,d,o,s]),w=W.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let O=new Set,V=!1;if(e.forEach(U=>{var J;let H=o.routes[U.route.id];!H||!H.hasLoader||(!g.some(K=>K.route.id===U.route.id)&&U.route.id in f&&((J=l[U.route.id])!=null&&J.shouldRevalidate)||H.hasClientLoader?V=!0:O.add(U.route.id))}),O.size===0)return[];let $=US(n);return V&&O.size>0&&$.searchParams.set("_routes",e.filter(U=>O.has(U.route.id)).map(U=>U.route.id).join(",")),[$.pathname+$.search]},[f,s,o,g,e,n,l]),T=W.useMemo(()=>LS(y,o),[y,o]),C=HS(y);return W.createElement(W.Fragment,null,w.map(O=>W.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),T.map(O=>W.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),C.map(({key:O,link:V})=>W.createElement("link",{key:O,...V})))}function qS(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var w_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w_&&(window.__reactRouterVersion="7.1.5")}catch{}function GS({basename:n,children:e,window:t}){let s=W.useRef();s.current==null&&(s.current=D2({window:t,v5Compat:!0}));let o=s.current,[l,f]=W.useState({action:o.action,location:o.location}),d=W.useCallback(g=>{W.startTransition(()=>f(g))},[f]);return W.useLayoutEffect(()=>o.listen(d),[o,d]),W.createElement(TS,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var E_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wo=W.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:f,state:d,target:g,to:y,preventScrollReset:w,viewTransition:T,...C},O){let{basename:V}=W.useContext(mr),$=typeof y=="string"&&E_.test(y),U,H=!1;if(typeof y=="string"&&$&&(U=y,w_))try{let A=new URL(window.location.href),R=y.startsWith("//")?new URL(A.protocol+y):new URL(y),b=xi(R.pathname,V);R.origin===A.origin&&b!=null?y=b+R.search+R.hash:H=!0}catch{fr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=oS(y,{relative:o}),[K,ae,ve]=BS(s,C),Te=XS(y,{replace:f,state:d,target:g,preventScrollReset:w,relative:o,viewTransition:T});function N(A){e&&e(A),A.defaultPrevented||Te(A)}let I=W.createElement("a",{...C,...ve,href:U||J,onClick:H||l?e:N,ref:qS(O,ae),target:g,"data-discover":!$&&t==="render"?"true":void 0});return K&&!$?W.createElement(W.Fragment,null,I,W.createElement($S,{page:J})):I});Wo.displayName="Link";var KS=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:f,viewTransition:d,children:g,...y},w){let T=vl(f,{relative:y.relative}),C=Ps(),O=W.useContext(Hc),{navigator:V,basename:$}=W.useContext(mr),U=O!=null&&nA(T)&&d===!0,H=V.encodeLocation?V.encodeLocation(T).pathname:T.pathname,J=C.pathname,K=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(J=J.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&$&&(K=xi(K,$)||K);const ae=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let ve=J===H||!o&&J.startsWith(H)&&J.charAt(ae)==="/",Te=K!=null&&(K===H||!o&&K.startsWith(H)&&K.charAt(H.length)==="/"),N={isActive:ve,isPending:Te,isTransitioning:U},I=ve?e:void 0,A;typeof s=="function"?A=s(N):A=[s,ve?"active":null,Te?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(N):l;return W.createElement(Wo,{...y,"aria-current":I,className:A,ref:w,style:R,to:f,viewTransition:d},typeof g=="function"?g(N):g)});KS.displayName="NavLink";var QS=W.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:f=ic,action:d,onSubmit:g,relative:y,preventScrollReset:w,viewTransition:T,...C},O)=>{let V=eA(),$=tA(d,{relative:y}),U=f.toLowerCase()==="get"?"get":"post",H=typeof d=="string"&&E_.test(d),J=K=>{if(g&&g(K),K.defaultPrevented)return;K.preventDefault();let ae=K.nativeEvent.submitter,ve=(ae==null?void 0:ae.getAttribute("formmethod"))||f;V(ae||K.currentTarget,{fetcherKey:e,method:ve,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:T})};return W.createElement("form",{ref:O,method:U,action:$,onSubmit:s?g:J,...C,"data-discover":!H&&n==="render"?"true":void 0})});QS.displayName="Form";function YS(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T_(n){let e=W.useContext(Ho);return tt(e,YS(n)),e}function XS(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:f}={}){let d=g_(),g=Ps(),y=vl(n,{relative:l});return W.useCallback(w=>{if(kS(w,e)){w.preventDefault();let T=t!==void 0?t:ol(g)===ol(y);d(n,{replace:T,state:s,preventScrollReset:o,relative:l,viewTransition:f})}},[g,d,y,t,s,e,n,o,l,f])}var JS=0,ZS=()=>`__${String(++JS)}__`;function eA(){let{router:n}=T_("useSubmit"),{basename:e}=W.useContext(mr),t=vS();return W.useCallback(async(s,o={})=>{let{action:l,method:f,encType:d,formData:g,body:y}=xS(s,e);if(o.navigate===!1){let w=o.fetcherKey||ZS();await n.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||f,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:g,body:y,formMethod:o.method||f,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function tA(n,{relative:e}={}){let{basename:t}=W.useContext(mr),s=W.useContext(gr);tt(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...vl(n||".",{relative:e})},f=Ps();if(n==null){l.search=f.search;let d=new URLSearchParams(l.search),g=d.getAll("index");if(g.some(w=>w==="")){d.delete("index"),g.filter(T=>T).forEach(T=>d.append("index",T));let w=d.toString();l.search=w?`?${w}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Fr([t,l.pathname])),ol(l)}function nA(n,e={}){let t=W.useContext(d_);tt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=T_("useViewTransitionState"),o=vl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=xi(t.currentLocation.pathname,s)||t.currentLocation.pathname,f=xi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return yc(o.pathname,f)!=null||yc(o.pathname,l)!=null}new TextEncoder;var Yh={exports:{}},qa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy;function rA(){if(Yy)return qa;Yy=1;var n=Xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(d,g,y){var w,T={},C=null,O=null;y!==void 0&&(C=""+y),g.key!==void 0&&(C=""+g.key),g.ref!==void 0&&(O=g.ref);for(w in g)s.call(g,w)&&!l.hasOwnProperty(w)&&(T[w]=g[w]);if(d&&d.defaultProps)for(w in g=d.defaultProps,g)T[w]===void 0&&(T[w]=g[w]);return{$$typeof:e,type:d,key:C,ref:O,props:T,_owner:o.current}}return qa.Fragment=t,qa.jsx=f,qa.jsxs=f,qa}var Xy;function iA(){return Xy||(Xy=1,Yh.exports=rA()),Yh.exports}var pp=iA();const re=pp.jsx,Le=pp.jsxs,sA=pp.Fragment,Ku=({category:n,title:e})=>{const t=W.useRef(),[s,o]=W.useState([]),l={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTgxOWUyNDYyNGU1ODJiNThkMTMxYzYyODZmNWVjNyIsIm5iZiI6MTc0MDAzMjY3Ni4xMjk5OTk5LCJzdWIiOiI2N2I2Y2FhNDlmN2ZiMmE3NDM2NTU5OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NUW52nObisprbLUL98f8IHJD7lQdflFUcBZJqyIyxOY"}},f=d=>{d.preventDefault(),t.current.scrollLeft+=d.deltaY};return W.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${n}?language=en-US&page=1`,l).then(d=>d.json()).then(d=>o(d.results)).catch(d=>console.error(d)),t.current.addEventListener("wheel",f)},[]),Le("div",{className:"card-display",children:[re("h1",{children:e}),re("div",{className:"a",ref:t,children:s.map((d,g)=>Le(Wo,{to:`./player/${d.id}`,className:"card-display-items",children:[re("img",{src:"https://image.tmdb.org/t/p/w500/"+d.backdrop_path,alt:""}),re("h3",{children:d.original_title})]},g))})]})},oA=()=>{};var Jy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},aA=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],f=n[t++],d=n[t++],g=((o&7)<<18|(l&63)<<12|(f&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],f=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|f&63)}}return e.join("")},S_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],f=o+1<n.length,d=f?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,w=l>>2,T=(l&3)<<4|d>>4;let C=(d&15)<<2|y>>6,O=y&63;g||(O=64,f||(C=64)),s.push(t[w],t[T],t[C],t[O])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(I_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):aA(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new lA;const C=l<<2|d>>4;if(s.push(C),y!==64){const O=d<<4&240|y>>2;if(s.push(O),T!==64){const V=y<<6&192|T;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uA=function(n){const e=I_(n);return S_.encodeByteArray(e,!0)},vc=function(n){return uA(n).replace(/\./g,"")},A_=function(n){try{return S_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=()=>cA().__FIREBASE_DEFAULTS__,hA=()=>{if(typeof process>"u"||typeof Jy>"u")return;const n=Jy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dA=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&A_(n[1]);return e&&JSON.parse(e)},qc=()=>{try{return oA()||fA()||hA()||dA()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},C_=n=>{var e,t;return(t=(e=qc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},pA=n=>{const e=C_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},P_=()=>{var n;return(n=qc())===null||n===void 0?void 0:n.config},k_=n=>{var e;return(e=qc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vc(JSON.stringify(t)),vc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($t())}function vA(){var n;const e=(n=qc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _A(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function R_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EA(){const n=$t();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function TA(){return!vA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function N_(){try{return typeof indexedDB=="object"}catch{return!1}}function x_(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function IA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="FirebaseError";class Gn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=SA,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ks.prototype.create)}}class ks{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],f=l?AA(l,s):"Error",d=`${this.serviceName}: ${f} (${o}).`;return new Gn(o,d,s)}}function AA(n,e){return n.replace(CA,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const CA=/\{\$([^}]+)}/g;function PA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bi(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],f=e[o];if(Zy(l)&&Zy(f)){if(!bi(l,f))return!1}else if(l!==f)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Zy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function kA(n,e){const t=new RA(n,e);return t.subscribe.bind(t)}class RA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");NA(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Xh),o.error===void 0&&(o.error=Xh),o.complete===void 0&&(o.complete=Xh);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA=1e3,bA=2,OA=4*60*60*1e3,DA=.5;function ev(n,e=xA,t=bA){const s=e*Math.pow(t,n),o=Math.round(DA*s*(Math.random()-.5)*2);return Math.min(OA,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){return n&&n._delegate?n._delegate:n}class qn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new mA;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VA(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,f]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&f.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const f=this.instances.get(o);return f&&e(f,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:MA(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MA(n){return n===fs?void 0:n}function VA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new LA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Re||(Re={}));const UA={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},zA=Re.INFO,jA={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},BA=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=jA[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=zA,this._logHandler=BA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const $A=(n,e)=>e.some(t=>n instanceof t);let tv,nv;function HA(){return tv||(tv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WA(){return nv||(nv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,xd=new WeakMap,O_=new WeakMap,Jh=new WeakMap,mp=new WeakMap;function qA(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",f)},l=()=>{t(Si(n.result)),o()},f=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&b_.set(t,n)}).catch(()=>{}),mp.set(e,n),e}function GA(n){if(xd.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",f),n.removeEventListener("abort",f)},l=()=>{t(),o()},f=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",f),n.addEventListener("abort",f)});xd.set(n,e)}let bd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||O_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Si(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function KA(n){bd=n(bd)}function QA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Zh(this),e,...t);return O_.set(s,e.sort?e.sort():[e]),Si(s)}:WA().includes(n)?function(...e){return n.apply(Zh(this),e),Si(b_.get(this))}:function(...e){return Si(n.apply(Zh(this),e))}}function YA(n){return typeof n=="function"?QA(n):(n instanceof IDBTransaction&&GA(n),$A(n,HA())?new Proxy(n,bd):n)}function Si(n){if(n instanceof IDBRequest)return qA(n);if(Jh.has(n))return Jh.get(n);const e=YA(n);return e!==n&&(Jh.set(n,e),mp.set(e,n)),e}const Zh=n=>mp.get(n);function D_(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const f=indexedDB.open(n,e),d=Si(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Si(f.result),g.oldVersion,g.newVersion,Si(f.transaction),g)}),t&&f.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),d.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const XA=["get","getKey","getAll","getAllKeys","count"],JA=["put","add","delete","clear"],ed=new Map;function rv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ed.get(e))return ed.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=JA.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||XA.includes(t)))return;const l=async function(f,...d){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&g.done]))[0]};return ed.set(e,l),l}KA(n=>({...n,get:(e,t,s)=>rv(e,t)||n.get(e,t,s),has:(e,t)=>!!rv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(eC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function eC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Od="@firebase/app",iv="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new Gc("@firebase/app"),tC="@firebase/app-compat",nC="@firebase/analytics-compat",rC="@firebase/analytics",iC="@firebase/app-check-compat",sC="@firebase/app-check",oC="@firebase/auth",aC="@firebase/auth-compat",lC="@firebase/database",uC="@firebase/data-connect",cC="@firebase/database-compat",fC="@firebase/functions",hC="@firebase/functions-compat",dC="@firebase/installations",pC="@firebase/installations-compat",mC="@firebase/messaging",gC="@firebase/messaging-compat",yC="@firebase/performance",vC="@firebase/performance-compat",_C="@firebase/remote-config",wC="@firebase/remote-config-compat",EC="@firebase/storage",TC="@firebase/storage-compat",IC="@firebase/firestore",SC="@firebase/vertexai",AC="@firebase/firestore-compat",CC="firebase",PC="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="[DEFAULT]",kC={[Od]:"fire-core",[tC]:"fire-core-compat",[rC]:"fire-analytics",[nC]:"fire-analytics-compat",[sC]:"fire-app-check",[iC]:"fire-app-check-compat",[oC]:"fire-auth",[aC]:"fire-auth-compat",[lC]:"fire-rtdb",[uC]:"fire-data-connect",[cC]:"fire-rtdb-compat",[fC]:"fire-fn",[hC]:"fire-fn-compat",[dC]:"fire-iid",[pC]:"fire-iid-compat",[mC]:"fire-fcm",[gC]:"fire-fcm-compat",[yC]:"fire-perf",[vC]:"fire-perf-compat",[_C]:"fire-rc",[wC]:"fire-rc-compat",[EC]:"fire-gcs",[TC]:"fire-gcs-compat",[IC]:"fire-fst",[AC]:"fire-fst-compat",[SC]:"fire-vertex","fire-js":"fire-js",[CC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map,RC=new Map,Ld=new Map;function sv(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function hr(n){const e=n.name;if(Ld.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;Ld.set(e,n);for(const t of _c.values())sv(t,n);for(const t of RC.values())sv(t,n);return!0}function Rs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $n(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ai=new ks("app","Firebase",NC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=PC;function L_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Ai.create("bad-app-name",{appName:String(o)});if(t||(t=P_()),!t)throw Ai.create("no-options");const l=_c.get(o);if(l){if(bi(t,l.options)&&bi(s,l.config))return l;throw Ai.create("duplicate-app",{appName:o})}const f=new FA(o);for(const g of Ld.values())f.addComponent(g);const d=new xC(t,s,f);return _c.set(o,d),d}function gp(n=Dd){const e=_c.get(n);if(!e&&n===Dd&&P_())return L_();if(!e)throw Ai.create("no-app",{appName:n});return e}function Cn(n,e,t){var s;let o=(s=kC[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),f=e.match(/\s|\//);if(l||f){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&f&&d.push("and"),f&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(d.join(" "));return}hr(new qn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="firebase-heartbeat-database",OC=1,al="firebase-heartbeat-store";let td=null;function M_(){return td||(td=D_(bC,OC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ai.create("idb-open",{originalErrorMessage:n.message})})),td}async function DC(n){try{const t=(await M_()).transaction(al),s=await t.objectStore(al).get(V_(n));return await t.done,s}catch(e){if(e instanceof Gn)$r.warn(e.message);else{const t=Ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(t.message)}}}async function ov(n,e){try{const s=(await M_()).transaction(al,"readwrite");await s.objectStore(al).put(e,V_(n)),await s.done}catch(t){if(t instanceof Gn)$r.warn(t.message);else{const s=Ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$r.warn(s.message)}}}function V_(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=1024,MC=30;class VC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new UC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=av();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(f=>f.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>MC){const f=zC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){$r.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=av(),{heartbeatsToSend:s,unsentEntries:o}=FC(this._heartbeatsCache.heartbeats),l=vc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return $r.warn(t),""}}}function av(){return new Date().toISOString().substring(0,10)}function FC(n,e=LC){const t=[];let s=n.slice();for(const o of n){const l=t.find(f=>f.agent===o.agent);if(l){if(l.dates.push(o.date),lv(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),lv(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class UC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return N_()?x_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await DC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ov(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ov(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function lv(n){return vc(JSON.stringify({version:2,heartbeats:n})).length}function zC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(n){hr(new qn("platform-logger",e=>new ZA(e),"PRIVATE")),hr(new qn("heartbeat",e=>new VC(e),"PRIVATE")),Cn(Od,iv,n),Cn(Od,iv,"esm2017"),Cn("fire-js","")}jC("");var BC="firebase",$C="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(BC,$C,"app");const F_="@firebase/installations",yp="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=1e4,z_=`w:${yp}`,j_="FIS_v2",HC="https://firebaseinstallations.googleapis.com/v1",WC=60*60*1e3,qC="installations",GC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},_s=new ks(qC,GC,KC);function B_(n){return n instanceof Gn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_({projectId:n}){return`${HC}/projects/${n}/installations`}function H_(n){return{token:n.token,requestStatus:2,expiresIn:YC(n.expiresIn),creationTime:Date.now()}}async function W_(n,e){const s=(await e.json()).error;return _s.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function q_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function QC(n,{refreshToken:e}){const t=q_(n);return t.append("Authorization",XC(e)),t}async function G_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function YC(n){return Number(n.replace("s","000"))}function XC(n){return`${j_} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JC({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=$_(n),o=q_(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:t,authVersion:j_,appId:n.appId,sdkVersion:z_},d={method:"POST",headers:o,body:JSON.stringify(f)},g=await G_(()=>fetch(s,d));if(g.ok){const y=await g.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:H_(y.authToken)}}else throw await W_("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/^[cdef][\w-]{21}$/,Md="";function tP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nP(n);return eP.test(t)?t:Md}catch{return Md}}function nP(n){return ZC(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=new Map;function Y_(n,e){const t=Kc(n);X_(t,e),rP(t,e)}function X_(n,e){const t=Q_.get(n);if(t)for(const s of t)s(e)}function rP(n,e){const t=iP();t&&t.postMessage({key:n,fid:e}),sP()}let ds=null;function iP(){return!ds&&"BroadcastChannel"in self&&(ds=new BroadcastChannel("[Firebase] FID Change"),ds.onmessage=n=>{X_(n.data.key,n.data.fid)}),ds}function sP(){Q_.size===0&&ds&&(ds.close(),ds=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="firebase-installations-database",aP=1,ws="firebase-installations-store";let nd=null;function vp(){return nd||(nd=D_(oP,aP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ws)}}})),nd}async function wc(n,e){const t=Kc(n),o=(await vp()).transaction(ws,"readwrite"),l=o.objectStore(ws),f=await l.get(t);return await l.put(e,t),await o.done,(!f||f.fid!==e.fid)&&Y_(n,e.fid),e}async function J_(n){const e=Kc(n),s=(await vp()).transaction(ws,"readwrite");await s.objectStore(ws).delete(e),await s.done}async function Qc(n,e){const t=Kc(n),o=(await vp()).transaction(ws,"readwrite"),l=o.objectStore(ws),f=await l.get(t),d=e(f);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!f||f.fid!==d.fid)&&Y_(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n){let e;const t=await Qc(n.appConfig,s=>{const o=lP(s),l=uP(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===Md?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function lP(n){const e=n||{fid:tP(),registrationStatus:0};return Z_(e)}function uP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(_s.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=cP(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fP(n)}:{installationEntry:e}}async function cP(n,e){try{const t=await JC(n,e);return wc(n.appConfig,t)}catch(t){throw B_(t)&&t.customData.serverCode===409?await J_(n.appConfig):await wc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function fP(n){let e=await uv(n.appConfig);for(;e.registrationStatus===1;)await K_(100),e=await uv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await _p(n);return s||t}return e}function uv(n){return Qc(n,e=>{if(!e)throw _s.create("installation-not-found");return Z_(e)})}function Z_(n){return hP(n)?{fid:n.fid,registrationStatus:0}:n}function hP(n){return n.registrationStatus===1&&n.registrationTime+U_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP({appConfig:n,heartbeatServiceProvider:e},t){const s=pP(n,t),o=QC(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:z_,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(f)},g=await G_(()=>fetch(s,d));if(g.ok){const y=await g.json();return H_(y)}else throw await W_("Generate Auth Token",g)}function pP(n,{fid:e}){return`${$_(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n,e=!1){let t;const s=await Qc(n.appConfig,l=>{if(!e1(l))throw _s.create("not-registered");const f=l.authToken;if(!e&&yP(f))return l;if(f.requestStatus===1)return t=mP(n,e),l;{if(!navigator.onLine)throw _s.create("app-offline");const d=_P(l);return t=gP(n,d),d}});return t?await t:s.authToken}async function mP(n,e){let t=await cv(n.appConfig);for(;t.authToken.requestStatus===1;)await K_(100),t=await cv(n.appConfig);const s=t.authToken;return s.requestStatus===0?wp(n,e):s}function cv(n){return Qc(n,e=>{if(!e1(e))throw _s.create("not-registered");const t=e.authToken;return wP(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gP(n,e){try{const t=await dP(n,e),s=Object.assign(Object.assign({},e),{authToken:t});return await wc(n.appConfig,s),t}catch(t){if(B_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await J_(n.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wc(n.appConfig,s)}throw t}}function e1(n){return n!==void 0&&n.registrationStatus===2}function yP(n){return n.requestStatus===2&&!vP(n)}function vP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+WC}function _P(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function wP(n){return n.requestStatus===1&&n.requestTime+U_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(n){const e=n,{installationEntry:t,registrationPromise:s}=await _p(e);return s?s.catch(console.error):wp(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(n,e=!1){const t=n;return await IP(t),(await wp(t,e)).token}async function IP(n){const{registrationPromise:e}=await _p(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(n){if(!n||!n.options)throw rd("App Configuration");if(!n.name)throw rd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw rd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function rd(n){return _s.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1="installations",AP="installations-internal",CP=n=>{const e=n.getProvider("app").getImmediate(),t=SP(e),s=Rs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},PP=n=>{const e=n.getProvider("app").getImmediate(),t=Rs(e,t1).getImmediate();return{getId:()=>EP(t),getToken:o=>TP(t,o)}};function kP(){hr(new qn(t1,CP,"PUBLIC")),hr(new qn(AP,PP,"PRIVATE"))}kP();Cn(F_,yp);Cn(F_,yp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="analytics",RP="firebase_id",NP="origin",xP=60*1e3,bP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ep="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Gc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new ks("analytics","Analytics",OP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(n){if(!n.startsWith(Ep)){const e=pn.create("invalid-gtag-resource",{gtagURL:n});return sn.warn(e.message),""}return n}function n1(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function LP(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function MP(n,e){const t=LP("firebase-js-sdk-policy",{createScriptURL:DP}),s=document.createElement("script"),o=`${Ep}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function VP(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function FP(n,e,t,s,o,l){const f=s[o];try{if(f)await e[f];else{const g=(await n1(t)).find(y=>y.measurementId===o);g&&await e[g.appId]}}catch(d){sn.error(d)}n("config",o,l)}async function UP(n,e,t,s,o){try{let l=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const d=await n1(t);for(const g of f){const y=d.find(T=>T.measurementId===g),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",s,o||{})}catch(l){sn.error(l)}}function zP(n,e,t,s){async function o(l,...f){try{if(l==="event"){const[d,g]=f;await UP(n,e,t,d,g)}else if(l==="config"){const[d,g]=f;await FP(n,e,t,s,d,g)}else if(l==="consent"){const[d,g]=f;n("consent",d,g)}else if(l==="get"){const[d,g,y]=f;n("get",d,g,y)}else if(l==="set"){const[d]=f;n("set",d)}else n(l,...f)}catch(d){sn.error(d)}}return o}function jP(n,e,t,s,o){let l=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=zP(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function BP(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ep)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=30,HP=1e3;class WP{constructor(e={},t=HP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const r1=new WP;function qP(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function GP(n){var e;const{appId:t,apiKey:s}=n,o={method:"GET",headers:qP(s)},l=bP.replace("{app-id}",t),f=await fetch(l,o);if(f.status!==200&&f.status!==304){let d="";try{const g=await f.json();!((e=g.error)===null||e===void 0)&&e.message&&(d=g.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:d})}return f.json()}async function KP(n,e=r1,t){const{appId:s,apiKey:o,measurementId:l}=n.options;if(!s)throw pn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw pn.create("no-api-key")}const f=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new XP;return setTimeout(async()=>{d.abort()},xP),i1({appId:s,apiKey:o,measurementId:l},f,d,e)}async function i1(n,{throttleEndTimeMillis:e,backoffCount:t},s,o=r1){var l;const{appId:f,measurementId:d}=n;try{await QP(s,e)}catch(g){if(d)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:d};throw g}try{const g=await GP(n);return o.deleteThrottleMetadata(f),g}catch(g){const y=g;if(!YP(y)){if(o.deleteThrottleMetadata(f),d)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:d};throw g}const w=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?ev(t,o.intervalMillis,$P):ev(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(f,T),sn.debug(`Calling attemptFetch again in ${w} millis`),i1(n,T,s,o)}}function QP(n,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),s(pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function YP(n){if(!(n instanceof Gn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class XP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JP(n,e,t,s,o){if(o&&o.global){n("event",t,s);return}else{const l=await e,f=Object.assign(Object.assign({},s),{send_to:l});n("event",t,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(){if(N_())try{await x_()}catch(n){return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return sn.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ek(n,e,t,s,o,l,f){var d;const g=KP(n);g.then(O=>{t[O.measurementId]=O.appId,n.options.measurementId&&O.measurementId!==n.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>sn.error(O)),e.push(g);const y=ZP().then(O=>{if(O)return s.getId()}),[w,T]=await Promise.all([g,y]);BP(l)||MP(l,w.measurementId),o("js",new Date);const C=(d=f==null?void 0:f.config)!==null&&d!==void 0?d:{};return C[NP]="firebase",C.update=!0,T!=null&&(C[RP]=T),o("config",w.measurementId,C),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.app=e}_delete(){return delete Ja[this.app.options.appId],Promise.resolve()}}let Ja={},fv=[];const hv={};let id="dataLayer",nk="gtag",dv,s1,pv=!1;function rk(){const n=[];if(R_()&&n.push("This is a browser extension environment."),IA()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=pn.create("invalid-analytics-context",{errorInfo:e});sn.warn(t.message)}}function ik(n,e,t){rk();const s=n.options.appId;if(!s)throw pn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(Ja[s]!=null)throw pn.create("already-exists",{id:s});if(!pv){VP(id);const{wrappedGtag:l,gtagCore:f}=jP(Ja,fv,hv,id,nk);s1=l,dv=f,pv=!0}return Ja[s]=ek(n,fv,hv,e,dv,id,t),new tk(n)}function sk(n=gp()){n=Kt(n);const e=Rs(n,Ec);return e.isInitialized()?e.getImmediate():ok(n)}function ok(n,e={}){const t=Rs(n,Ec);if(t.isInitialized()){const o=t.getImmediate();if(bi(e,t.getOptions()))return o;throw pn.create("already-initialized")}return t.initialize({options:e})}function ak(n,e,t,s){n=Kt(n),JP(s1,Ja[n.app.options.appId],e,t,s).catch(o=>sn.error(o))}const mv="@firebase/analytics",gv="0.10.12";function lk(){hr(new qn(Ec,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return ik(s,o,t)},"PUBLIC")),hr(new qn("analytics-internal",n,"PRIVATE")),Cn(mv,gv),Cn(mv,gv,"esm2017");function n(e){try{const t=e.getProvider(Ec).getImmediate();return{logEvent:(s,o,l)=>ak(t,s,o,l)}}catch(t){throw pn.create("interop-component-reg-failed",{reason:t})}}}lk();function Tp(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t}function o1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uk=o1,a1=new ks("auth","Firebase",o1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=new Gc("@firebase/auth");function ck(n,...e){Tc.logLevel<=Re.WARN&&Tc.warn(`Auth (${qo}): ${n}`,...e)}function oc(n,...e){Tc.logLevel<=Re.ERROR&&Tc.error(`Auth (${qo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,...e){throw Ip(n,...e)}function ur(n,...e){return Ip(n,...e)}function l1(n,e,t){const s=Object.assign(Object.assign({},uk()),{[e]:t});return new ks("auth","Firebase",s).create(e,{appName:n.name})}function Ci(n){return l1(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ip(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return a1.create(n,...e)}function Ee(n,e,...t){if(!n)throw Ip(e,...t)}function Lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oc(e),new Error(e)}function Wr(n,e){n||Lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fk(){return yv()==="http:"||yv()==="https:"}function yv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fk()||R_()||"connection"in navigator)?navigator.onLine:!0}function dk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile=yA()||wA()}get(){return hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n,e){Wr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new wl(3e4,6e4);function El(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ns(n,e,t,s,o={}){return c1(n,o,async()=>{let l={},f={};s&&(e==="GET"?f=s:l={body:JSON.stringify(s)});const d=_l(Object.assign({key:n.config.apiKey},f)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:g},l);return _A()||(y.referrerPolicy="no-referrer"),u1.fetch()(h1(n,n.config.apiHost,t,d),y)})}async function c1(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},pk),e);try{const o=new yk(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const f=await l.json();if("needConfirmation"in f)throw Qu(n,"account-exists-with-different-credential",f);if(l.ok&&!("errorMessage"in f))return f;{const d=l.ok?f.errorMessage:f.error.message,[g,y]=d.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(n,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Qu(n,"email-already-in-use",f);if(g==="USER_DISABLED")throw Qu(n,"user-disabled",f);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw l1(n,w,y);Hr(n,w)}}catch(o){if(o instanceof Gn)throw o;Hr(n,"network-request-failed",{message:String(o)})}}async function f1(n,e,t,s,o={}){const l=await Ns(n,e,t,s,o);return"mfaPendingCredential"in l&&Hr(n,"multi-factor-auth-required",{_serverResponse:l}),l}function h1(n,e,t,s){const o=`${e}${t}?${s}`;return n.config.emulator?Sp(n.config,o):`${n.config.apiScheme}://${o}`}function gk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ur(this.auth,"network-request-failed")),mk.get())})}}function Qu(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=ur(n,e,s);return o.customData._tokenResponse=t,o}function vv(n){return n!==void 0&&n.enterprise!==void 0}class vk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return gk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _k(n,e){return Ns(n,"GET","/v2/recaptchaConfig",El(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(n,e){return Ns(n,"POST","/v1/accounts:delete",e)}async function d1(n,e){return Ns(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ek(n,e=!1){const t=Kt(n),s=await t.getIdToken(e),o=Ap(s);Ee(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,f=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Za(sd(o.auth_time)),issuedAtTime:Za(sd(o.iat)),expirationTime:Za(sd(o.exp)),signInProvider:f||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function sd(n){return Number(n)*1e3}function Ap(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return oc("JWT malformed, contained fewer than 3 sections"),null;try{const o=A_(t);return o?JSON.parse(o):(oc("Failed to decode base64 JWT payload"),null)}catch(o){return oc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function _v(n){const e=Ap(n);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Gn&&Tk(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Tk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ic(n){var e;const t=n.auth,s=await n.getIdToken(),o=await ll(n,d1(t,{idToken:s}));Ee(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const f=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?p1(l.providerUserInfo):[],d=Ak(n.providerData,f),g=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),w=g?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Fd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function Sk(n){const e=Kt(n);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ak(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function p1(n){return n.map(e=>{var{providerId:t}=e,s=Tp(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(n,e){const t=await c1(n,{},async()=>{const s=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,f=h1(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",u1.fetch()(f,{method:"POST",headers:d,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pk(n,e){return Ns(n,"POST","/v2/accounts:revokeToken",El(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_v(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=_v(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await Ck(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,f=new bo;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),o&&(Ee(typeof o=="string","internal-error",{appName:e}),f.accessToken=o),l&&(Ee(typeof l=="number","internal-error",{appName:e}),f.expirationTime=l),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){Ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Mr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ik(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Fd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ll(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ek(this,e)}reload(){return Sk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ic(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($n(this.auth.app))return Promise.reject(Ci(this.auth));const e=await this.getIdToken();return await ll(this,wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,f,d,g,y,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(f=t.photoURL)!==null&&f!==void 0?f:void 0,$=(d=t.tenantId)!==null&&d!==void 0?d:void 0,U=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:K,emailVerified:ae,isAnonymous:ve,providerData:Te,stsTokenManager:N}=t;Ee(K&&N,e,"internal-error");const I=bo.fromJSON(this.name,N);Ee(typeof K=="string",e,"internal-error"),_i(T,e.name),_i(C,e.name),Ee(typeof ae=="boolean",e,"internal-error"),Ee(typeof ve=="boolean",e,"internal-error"),_i(O,e.name),_i(V,e.name),_i($,e.name),_i(U,e.name),_i(H,e.name),_i(J,e.name);const A=new Mr({uid:K,auth:e,email:C,emailVerified:ae,displayName:T,isAnonymous:ve,photoURL:V,phoneNumber:O,tenantId:$,stsTokenManager:I,createdAt:H,lastLoginAt:J});return Te&&Array.isArray(Te)&&(A.providerData=Te.map(R=>Object.assign({},R))),U&&(A._redirectEventId=U),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new bo;o.updateFromServerResponse(t);const l=new Mr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Ic(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];Ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?p1(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new bo;d.updateFromIdToken(s);const g=new Mr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Fd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=new Map;function Vr(n){Wr(n instanceof Function,"Expected a class definition");let e=wv.get(n);return e?(Wr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wv.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}m1.type="NONE";const Ev=m1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e,t){return`firebase:${n}:${e}:${t}`}class Oo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=ac(this.userKey,o.apiKey,l),this.fullPersistenceKey=ac("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Oo(Vr(Ev),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Vr(Ev);const f=ac(s,e.config.apiKey,e.name);let d=null;for(const y of t)try{const w=await y._get(f);if(w){const T=Mr._fromJSON(e,w);y!==l&&(d=T),l=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Oo(l,e,s):(l=g[0],d&&await l._set(f,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(f)}catch{}})),new Oo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E1(e))return"Blackberry";if(T1(e))return"Webos";if(y1(e))return"Safari";if((e.includes("chrome/")||v1(e))&&!e.includes("edge/"))return"Chrome";if(w1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function g1(n=$t()){return/firefox\//i.test(n)}function y1(n=$t()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function v1(n=$t()){return/crios\//i.test(n)}function _1(n=$t()){return/iemobile/i.test(n)}function w1(n=$t()){return/android/i.test(n)}function E1(n=$t()){return/blackberry/i.test(n)}function T1(n=$t()){return/webos/i.test(n)}function Cp(n=$t()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kk(n=$t()){var e;return Cp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rk(){return EA()&&document.documentMode===10}function I1(n=$t()){return Cp(n)||w1(n)||T1(n)||E1(n)||/windows phone/i.test(n)||_1(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(n,e=[]){let t;switch(n){case"Browser":t=Tv($t());break;case"Worker":t=`${Tv($t())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((f,d)=>{try{const g=e(l);f(g)}catch(g){d(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(n,e={}){return Ns(n,"GET","/v2/passwordPolicy",El(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=6;class Ok{constructor(e){var t,s,o,l;const f=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=f.minPasswordLength)!==null&&t!==void 0?t:bk,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,f,d;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(d=g.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Iv(this),this.idTokenSubscription=new Iv(this),this.beforeStateQueue=new Nk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Vr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await d1(this,{idToken:e}),s=await Mr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if($n(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!f||f===d)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($n(this.app))return Promise.reject(Ci(this));const t=e?Kt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $n(this.app)?Promise.reject(Ci(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $n(this.app)?Promise.reject(Ci(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xk(this),t=new Ok(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ks("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Pk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Vr(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[Vr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let f=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{f||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{f=!0,g()}}else{const g=e.addObserver(t);return()=>{f=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if($n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ck(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Go(n){return Kt(n)}class Iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=kA(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(n){Yc=n}function A1(n){return Yc.loadJS(n)}function Mk(){return Yc.recaptchaEnterpriseScript}function Vk(){return Yc.gapiScript}function Fk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Uk{constructor(){this.enterprise=new zk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class zk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jk="recaptcha-enterprise",C1="NO_RECAPTCHA";class Bk{constructor(e){this.type=jk,this.auth=Go(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(f,d)=>{_k(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new vk(g);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,f(y.siteKey)}}).catch(g=>{d(g)})})}function o(l,f,d){const g=window.grecaptcha;vv(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(y=>{f(y)}).catch(()=>{f(C1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Uk().execute("siteKey",{action:"verify"}):new Promise((l,f)=>{s(this.auth).then(d=>{if(!t&&vv(window.grecaptcha))o(d,l,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=Mk();g.length!==0&&(g+=d),A1(g).then(()=>{o(d,l,f)}).catch(y=>{f(y)})}}).catch(d=>{f(d)})})}}async function Sv(n,e,t,s=!1,o=!1){const l=new Bk(n);let f;if(o)f=C1;else try{f=await l.verify(t)}catch{f=await l.verify(t,!0)}const d=Object.assign({},e);return s?Object.assign(d,{captchaResp:f}):Object.assign(d,{captchaResponse:f}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function $k(n,e,t,s,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Sv(n,e,t,t==="getOobCode");return s(n,f)}else return s(n,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Sv(n,e,t,t==="getOobCode");return s(n,d)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(n,e){const t=Rs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(bi(l,e??{}))return o;Hr(o,"already-initialized")}return t.initialize({options:e})}function Wk(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Vr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function qk(n,e,t){const s=Go(n);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=P1(e),{host:f,port:d}=Gk(e),g=d===null?"":`:${d}`,y={url:`${l}//${f}${g}/`},w=Object.freeze({host:f,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(bi(y,s.config.emulator)&&bi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Kk()}function P1(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gk(n){const e=P1(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Av(s.substr(l.length+1))}}else{const[l,f]=s.split(":");return{host:l,port:Av(f)}}}function Av(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Kk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(n,e){return f1(n,"POST","/v1/accounts:signInWithIdp",El(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk="http://localhost";class Es extends k1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Tp(t,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Es(s,o);return f.idToken=l.idToken||void 0,f.accessToken=l.accessToken||void 0,f.secret=l.secret,f.nonce=l.nonce,f.pendingToken=l.pendingToken||null,f}_getIdTokenResponse(e){const t=this.buildRequest();return Do(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Do(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Do(e,t)}buildRequest(){const e={requestUri:Qk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_l(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl extends R1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Tl{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";wi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Tl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Es._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ei.credential(t,s)}catch{return null}}}Ei.GOOGLE_SIGN_IN_METHOD="google.com";Ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Tl{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends Tl{constructor(){super("twitter.com")}static credential(e,t){return Es._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Ii.credential(t,s)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(n,e){return f1(n,"POST","/v1/accounts:signUp",El(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Mr._fromIdTokenResponse(e,s,o),f=Cv(s);return new Ts({user:l,providerId:f,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Cv(s);return new Ts({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Cv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends Gn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Sc(e,t,s,o)}}function N1(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(n,l,e,s):l})}async function Xk(n,e,t=!1){const s=await ll(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ts._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jk(n,e,t=!1){const{auth:s}=n;if($n(s.app))return Promise.reject(Ci(s));const o="reauthenticate";try{const l=await ll(n,N1(s,o,e,n),t);Ee(l.idToken,s,"internal-error");const f=Ap(l.idToken);Ee(f,s,"internal-error");const{sub:d}=f;return Ee(n.uid===d,s,"user-mismatch"),Ts._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Hr(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(n,e,t=!1){if($n(n.app))return Promise.reject(Ci(n));const s="signIn",o=await N1(n,s,e),l=await Ts._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(n){const e=Go(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tR(n,e,t){if($n(n.app))return Promise.reject(Ci(n));const s=Go(n),f=await $k(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yk).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&eR(n),g}),d=await Ts._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(d.user),d}function nR(n,e,t,s){return Kt(n).onIdTokenChanged(e,t,s)}function rR(n,e,t){return Kt(n).beforeAuthStateChanged(e,t)}function iR(n,e,t,s){return Kt(n).onAuthStateChanged(e,t,s)}function sR(n){return Kt(n).signOut()}const Ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1e3,aR=10;class b1 extends x1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((f,d,g)=>{this.notifyListeners(f,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!t&&this.localCache[s]===f||this.notifyListeners(s,f)},l=this.storage.getItem(s);Rk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,aR):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}b1.type="LOCAL";const lR=b1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1 extends x1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}O1.type="SESSION";const D1=O1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Xc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const d=Array.from(f).map(async y=>y(t.origin,l)),g=await uR(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,f;return new Promise((d,g)=>{const y=Pp("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(T){const C=T;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(C.data.response);break;default:clearTimeout(w),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(){return window}function fR(n){cr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(){return typeof cr().WorkerGlobalScope<"u"&&typeof cr().importScripts=="function"}async function hR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pR(){return L1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="firebaseLocalStorageDb",mR=1,Cc="firebaseLocalStorage",V1="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Jc(n,e){return n.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function gR(){const n=indexedDB.deleteDatabase(M1);return new Il(n).toPromise()}function Ud(){const n=indexedDB.open(M1,mR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Cc,{keyPath:V1})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Cc)?e(s):(s.close(),await gR(),e(await Ud()))})})}async function Pv(n,e,t){const s=Jc(n,!0).put({[V1]:e,value:t});return new Il(s).toPromise()}async function yR(n,e){const t=Jc(n,!1).get(e),s=await new Il(t).toPromise();return s===void 0?null:s.value}function kv(n,e){const t=Jc(n,!0).delete(e);return new Il(t).toPromise()}const vR=800,_R=3;class F1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>_R)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return L1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xc._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await Pv(e,Ac,"1"),await kv(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pv(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Jc(o,!1).getAll();return new Il(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}F1.type="LOCAL";const wR=F1;new wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(n,e){return e?Vr(e):(Ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends k1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Do(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TR(n){return Zk(n.auth,new kp(n),n.bypassAuthState)}function IR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Jk(t,new kp(n),n.bypassAuthState)}async function SR(n){const{auth:e,user:t}=n;return Ee(t,e,"internal-error"),Xk(t,new kp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:f,type:d}=e;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(g))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TR;case"linkViaPopup":case"linkViaRedirect":return SR;case"reauthViaPopup":case"reauthViaRedirect":return IR;default:Hr(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=new wl(2e3,1e4);class No extends U1{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,No.currentPopupAction&&No.currentPopupAction.cancel(),No.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=Pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ur(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ur(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,No.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ur(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AR.get())};e()}}No.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="pendingRedirect",lc=new Map;class PR extends U1{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=lc.get(this.auth._key());if(!e){try{const s=await kR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}lc.set(this.auth._key(),e)}return this.bypassAuthState||lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kR(n,e){const t=xR(e),s=NR(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function RR(n,e){lc.set(n._key(),e)}function NR(n){return Vr(n._redirectPersistence)}function xR(n){return ac(CR,n.config.apiKey,n.name)}async function bR(n,e,t=!1){if($n(n.app))return Promise.reject(Ci(n));const s=Go(n),o=ER(s,e),f=await new PR(s,o,t).execute();return f&&!t&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=10*60*1e3;class DR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!z1(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ur(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rv(e))}saveEventToCache(e){this.cachedEventUids.add(Rv(e)),this.lastProcessedEventTime=Date.now()}}function Rv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function z1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return z1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(n,e={}){return Ns(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FR=/^https?/;async function UR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await MR(n);for(const t of e)try{if(zR(t))return}catch{}Hr(n,"unauthorized-domain")}function zR(n){const e=Vd(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const f=new URL(n);return f.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&f.hostname===s}if(!FR.test(t))return!1;if(VR.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new wl(3e4,6e4);function Nv(){const n=cr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function BR(n){return new Promise((e,t)=>{var s,o,l;function f(){Nv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nv(),t(ur(n,"network-request-failed"))},timeout:jR.get()})}if(!((o=(s=cr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=cr().gapi)===null||l===void 0)&&l.load)f();else{const d=Fk("iframefcb");return cr()[d]=()=>{gapi.load?f():t(ur(n,"network-request-failed"))},A1(`${Vk()}?onload=${d}`).catch(g=>t(g))}}).catch(e=>{throw uc=null,e})}let uc=null;function $R(n){return uc=uc||BR(n),uc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new wl(5e3,15e3),WR="__/auth/iframe",qR="emulator/auth/iframe",GR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QR(n){const e=n.config;Ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sp(e,qR):`https://${n.config.authDomain}/${WR}`,s={apiKey:e.apiKey,appName:n.name,v:qo},o=KR.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${_l(s).slice(1)}`}async function YR(n){const e=await $R(n),t=cr().gapi;return Ee(t,n,"internal-error"),e.open({where:document.body,url:QR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GR,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const f=ur(n,"network-request-failed"),d=cr().setTimeout(()=>{l(f)},HR.get());function g(){cr().clearTimeout(d),o(s)}s.ping(g).then(g,()=>{l(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JR=500,ZR=600,e4="_blank",t4="http://localhost";class xv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function n4(n,e,t,s=JR,o=ZR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const g=Object.assign(Object.assign({},XR),{width:s.toString(),height:o.toString(),top:l,left:f}),y=$t().toLowerCase();t&&(d=v1(y)?e4:t),g1(y)&&(e=e||t4,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[O,V])=>`${C}${O}=${V},`,"");if(kk(y)&&d!=="_self")return r4(e||"",d),new xv(null);const T=window.open(e||"",d,w);Ee(T,n,"popup-blocked");try{T.focus()}catch{}return new xv(T)}function r4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4="__/auth/handler",s4="emulator/auth/handler",o4=encodeURIComponent("fac");async function bv(n,e,t,s,o,l){Ee(n.config.authDomain,n,"auth-domain-config-required"),Ee(n.config.apiKey,n,"invalid-api-key");const f={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:qo,eventId:o};if(e instanceof R1){e.setDefaultLanguage(n.languageCode),f.providerId=e.providerId||"",PA(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))f[w]=T}if(e instanceof Tl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(f.scopes=w.join(","))}n.tenantId&&(f.tid=n.tenantId);const d=f;for(const w of Object.keys(d))d[w]===void 0&&delete d[w];const g=await n._getAppCheckToken(),y=g?`#${o4}=${encodeURIComponent(g)}`:"";return`${a4(n)}?${_l(d).slice(1)}${y}`}function a4({config:n}){return n.emulator?Sp(n,s4):`https://${n.authDomain}/${i4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="webStorageSupport";class l4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=D1,this._completeRedirectFn=bR,this._overrideRedirectResult=RR}async _openPopup(e,t,s,o){var l;Wr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const f=await bv(e,t,s,Vd(),o);return n4(e,f,Pp())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await bv(e,t,s,Vd(),o);return fR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Wr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await YR(e),s=new DR(e);return t.register("authEvent",o=>(Ee(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(od,{type:od},o=>{var l;const f=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[od];f!==void 0&&t(!!f),Hr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return I1()||y1()||Cp()}}const u4=l4;var Ov="@firebase/auth",Dv="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function h4(n){hr(new qn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:f,authDomain:d}=s.options;Ee(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S1(n)},y=new Dk(s,o,l,g);return Wk(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),hr(new qn("auth-internal",e=>{const t=Go(e.getProvider("auth").getImmediate());return(s=>new c4(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(Ov,Dv,f4(n)),Cn(Ov,Dv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4=5*60,p4=k_("authIdTokenMaxAge")||d4;let Lv=null;const m4=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>p4)return;const o=t==null?void 0:t.token;Lv!==o&&(Lv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function g4(n=gp()){const e=Rs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Hk(n,{popupRedirectResolver:u4,persistence:[wR,lR,D1]}),s=k_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const f=m4(l.toString());rR(t,f,()=>f(t.currentUser)),nR(t,d=>f(d))}}const o=C_("auth");return o&&qk(t,`http://${o}`),t}function y4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Lk({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=ur("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",y4().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});h4("Browser");var Mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function A(){}A.prototype=I.prototype,N.D=I.prototype,N.prototype=new A,N.prototype.constructor=N,N.C=function(R,b,L){for(var P=Array(arguments.length-2),st=2;st<arguments.length;st++)P[st-2]=arguments[st];return I.prototype[b].apply(R,P)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,A){A||(A=0);var R=Array(16);if(typeof I=="string")for(var b=0;16>b;++b)R[b]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(b=0;16>b;++b)R[b]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=N.g[0],A=N.g[1],b=N.g[2];var L=N.g[3],P=I+(L^A&(b^L))+R[0]+3614090360&4294967295;I=A+(P<<7&4294967295|P>>>25),P=L+(b^I&(A^b))+R[1]+3905402710&4294967295,L=I+(P<<12&4294967295|P>>>20),P=b+(A^L&(I^A))+R[2]+606105819&4294967295,b=L+(P<<17&4294967295|P>>>15),P=A+(I^b&(L^I))+R[3]+3250441966&4294967295,A=b+(P<<22&4294967295|P>>>10),P=I+(L^A&(b^L))+R[4]+4118548399&4294967295,I=A+(P<<7&4294967295|P>>>25),P=L+(b^I&(A^b))+R[5]+1200080426&4294967295,L=I+(P<<12&4294967295|P>>>20),P=b+(A^L&(I^A))+R[6]+2821735955&4294967295,b=L+(P<<17&4294967295|P>>>15),P=A+(I^b&(L^I))+R[7]+4249261313&4294967295,A=b+(P<<22&4294967295|P>>>10),P=I+(L^A&(b^L))+R[8]+1770035416&4294967295,I=A+(P<<7&4294967295|P>>>25),P=L+(b^I&(A^b))+R[9]+2336552879&4294967295,L=I+(P<<12&4294967295|P>>>20),P=b+(A^L&(I^A))+R[10]+4294925233&4294967295,b=L+(P<<17&4294967295|P>>>15),P=A+(I^b&(L^I))+R[11]+2304563134&4294967295,A=b+(P<<22&4294967295|P>>>10),P=I+(L^A&(b^L))+R[12]+1804603682&4294967295,I=A+(P<<7&4294967295|P>>>25),P=L+(b^I&(A^b))+R[13]+4254626195&4294967295,L=I+(P<<12&4294967295|P>>>20),P=b+(A^L&(I^A))+R[14]+2792965006&4294967295,b=L+(P<<17&4294967295|P>>>15),P=A+(I^b&(L^I))+R[15]+1236535329&4294967295,A=b+(P<<22&4294967295|P>>>10),P=I+(b^L&(A^b))+R[1]+4129170786&4294967295,I=A+(P<<5&4294967295|P>>>27),P=L+(A^b&(I^A))+R[6]+3225465664&4294967295,L=I+(P<<9&4294967295|P>>>23),P=b+(I^A&(L^I))+R[11]+643717713&4294967295,b=L+(P<<14&4294967295|P>>>18),P=A+(L^I&(b^L))+R[0]+3921069994&4294967295,A=b+(P<<20&4294967295|P>>>12),P=I+(b^L&(A^b))+R[5]+3593408605&4294967295,I=A+(P<<5&4294967295|P>>>27),P=L+(A^b&(I^A))+R[10]+38016083&4294967295,L=I+(P<<9&4294967295|P>>>23),P=b+(I^A&(L^I))+R[15]+3634488961&4294967295,b=L+(P<<14&4294967295|P>>>18),P=A+(L^I&(b^L))+R[4]+3889429448&4294967295,A=b+(P<<20&4294967295|P>>>12),P=I+(b^L&(A^b))+R[9]+568446438&4294967295,I=A+(P<<5&4294967295|P>>>27),P=L+(A^b&(I^A))+R[14]+3275163606&4294967295,L=I+(P<<9&4294967295|P>>>23),P=b+(I^A&(L^I))+R[3]+4107603335&4294967295,b=L+(P<<14&4294967295|P>>>18),P=A+(L^I&(b^L))+R[8]+1163531501&4294967295,A=b+(P<<20&4294967295|P>>>12),P=I+(b^L&(A^b))+R[13]+2850285829&4294967295,I=A+(P<<5&4294967295|P>>>27),P=L+(A^b&(I^A))+R[2]+4243563512&4294967295,L=I+(P<<9&4294967295|P>>>23),P=b+(I^A&(L^I))+R[7]+1735328473&4294967295,b=L+(P<<14&4294967295|P>>>18),P=A+(L^I&(b^L))+R[12]+2368359562&4294967295,A=b+(P<<20&4294967295|P>>>12),P=I+(A^b^L)+R[5]+4294588738&4294967295,I=A+(P<<4&4294967295|P>>>28),P=L+(I^A^b)+R[8]+2272392833&4294967295,L=I+(P<<11&4294967295|P>>>21),P=b+(L^I^A)+R[11]+1839030562&4294967295,b=L+(P<<16&4294967295|P>>>16),P=A+(b^L^I)+R[14]+4259657740&4294967295,A=b+(P<<23&4294967295|P>>>9),P=I+(A^b^L)+R[1]+2763975236&4294967295,I=A+(P<<4&4294967295|P>>>28),P=L+(I^A^b)+R[4]+1272893353&4294967295,L=I+(P<<11&4294967295|P>>>21),P=b+(L^I^A)+R[7]+4139469664&4294967295,b=L+(P<<16&4294967295|P>>>16),P=A+(b^L^I)+R[10]+3200236656&4294967295,A=b+(P<<23&4294967295|P>>>9),P=I+(A^b^L)+R[13]+681279174&4294967295,I=A+(P<<4&4294967295|P>>>28),P=L+(I^A^b)+R[0]+3936430074&4294967295,L=I+(P<<11&4294967295|P>>>21),P=b+(L^I^A)+R[3]+3572445317&4294967295,b=L+(P<<16&4294967295|P>>>16),P=A+(b^L^I)+R[6]+76029189&4294967295,A=b+(P<<23&4294967295|P>>>9),P=I+(A^b^L)+R[9]+3654602809&4294967295,I=A+(P<<4&4294967295|P>>>28),P=L+(I^A^b)+R[12]+3873151461&4294967295,L=I+(P<<11&4294967295|P>>>21),P=b+(L^I^A)+R[15]+530742520&4294967295,b=L+(P<<16&4294967295|P>>>16),P=A+(b^L^I)+R[2]+3299628645&4294967295,A=b+(P<<23&4294967295|P>>>9),P=I+(b^(A|~L))+R[0]+4096336452&4294967295,I=A+(P<<6&4294967295|P>>>26),P=L+(A^(I|~b))+R[7]+1126891415&4294967295,L=I+(P<<10&4294967295|P>>>22),P=b+(I^(L|~A))+R[14]+2878612391&4294967295,b=L+(P<<15&4294967295|P>>>17),P=A+(L^(b|~I))+R[5]+4237533241&4294967295,A=b+(P<<21&4294967295|P>>>11),P=I+(b^(A|~L))+R[12]+1700485571&4294967295,I=A+(P<<6&4294967295|P>>>26),P=L+(A^(I|~b))+R[3]+2399980690&4294967295,L=I+(P<<10&4294967295|P>>>22),P=b+(I^(L|~A))+R[10]+4293915773&4294967295,b=L+(P<<15&4294967295|P>>>17),P=A+(L^(b|~I))+R[1]+2240044497&4294967295,A=b+(P<<21&4294967295|P>>>11),P=I+(b^(A|~L))+R[8]+1873313359&4294967295,I=A+(P<<6&4294967295|P>>>26),P=L+(A^(I|~b))+R[15]+4264355552&4294967295,L=I+(P<<10&4294967295|P>>>22),P=b+(I^(L|~A))+R[6]+2734768916&4294967295,b=L+(P<<15&4294967295|P>>>17),P=A+(L^(b|~I))+R[13]+1309151649&4294967295,A=b+(P<<21&4294967295|P>>>11),P=I+(b^(A|~L))+R[4]+4149444226&4294967295,I=A+(P<<6&4294967295|P>>>26),P=L+(A^(I|~b))+R[11]+3174756917&4294967295,L=I+(P<<10&4294967295|P>>>22),P=b+(I^(L|~A))+R[2]+718787259&4294967295,b=L+(P<<15&4294967295|P>>>17),P=A+(L^(b|~I))+R[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(b+(P<<21&4294967295|P>>>11))&4294967295,N.g[2]=N.g[2]+b&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var A=I-this.blockSize,R=this.B,b=this.h,L=0;L<I;){if(b==0)for(;L<=A;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<I;)if(R[b++]=N.charCodeAt(L++),b==this.blockSize){o(this,R),b=0;break}}else for(;L<I;)if(R[b++]=N[L++],b==this.blockSize){o(this,R),b=0;break}}this.h=b,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var A=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=A&255,A/=256;for(this.u(N),N=Array(16),I=A=0;4>I;++I)for(var R=0;32>R;R+=8)N[A++]=this.g[I]>>>R&255;return N};function l(N,I){var A=d;return Object.prototype.hasOwnProperty.call(A,N)?A[N]:A[N]=I(N)}function f(N,I){this.h=I;for(var A=[],R=!0,b=N.length-1;0<=b;b--){var L=N[b]|0;R&&L==I||(A[b]=L,R=!1)}this.g=A}var d={};function g(N){return-128<=N&&128>N?l(N,function(I){return new f([I|0],0>I?-1:0)}):new f([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return U(y(-N));for(var I=[],A=1,R=0;N>=A;R++)I[R]=N/A|0,A*=4294967296;return new f(I,0)}function w(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return U(w(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(I,8)),R=T,b=0;b<N.length;b+=8){var L=Math.min(8,N.length-b),P=parseInt(N.substring(b,b+L),I);8>L?(L=y(Math.pow(I,L)),R=R.j(L).add(y(P))):(R=R.j(A),R=R.add(y(P)))}return R}var T=g(0),C=g(1),O=g(16777216);n=f.prototype,n.m=function(){if($(this))return-U(this).m();for(var N=0,I=1,A=0;A<this.g.length;A++){var R=this.i(A);N+=(0<=R?R:4294967296+R)*I,I*=4294967296}return N},n.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(V(this))return"0";if($(this))return"-"+U(this).toString(N);for(var I=y(Math.pow(N,6)),A=this,R="";;){var b=ae(A,I).g;A=H(A,b.j(I));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(N);if(A=b,V(A))return L+R;for(;6>L.length;)L="0"+L;R=L+R}},n.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function V(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function $(N){return N.h==-1}n.l=function(N){return N=H(this,N),$(N)?-1:V(N)?0:1};function U(N){for(var I=N.g.length,A=[],R=0;R<I;R++)A[R]=~N.g[R];return new f(A,~N.h).add(C)}n.abs=function(){return $(this)?U(this):this},n.add=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0,b=0;b<=I;b++){var L=R+(this.i(b)&65535)+(N.i(b)&65535),P=(L>>>16)+(this.i(b)>>>16)+(N.i(b)>>>16);R=P>>>16,L&=65535,P&=65535,A[b]=P<<16|L}return new f(A,A[A.length-1]&-2147483648?-1:0)};function H(N,I){return N.add(U(I))}n.j=function(N){if(V(this)||V(N))return T;if($(this))return $(N)?U(this).j(U(N)):U(U(this).j(N));if($(N))return U(this.j(U(N)));if(0>this.l(O)&&0>N.l(O))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,A=[],R=0;R<2*I;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<N.g.length;b++){var L=this.i(R)>>>16,P=this.i(R)&65535,st=N.i(b)>>>16,Ot=N.i(b)&65535;A[2*R+2*b]+=P*Ot,J(A,2*R+2*b),A[2*R+2*b+1]+=L*Ot,J(A,2*R+2*b+1),A[2*R+2*b+1]+=P*st,J(A,2*R+2*b+1),A[2*R+2*b+2]+=L*st,J(A,2*R+2*b+2)}for(R=0;R<I;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=I;R<2*I;R++)A[R]=0;return new f(A,0)};function J(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function K(N,I){this.g=N,this.h=I}function ae(N,I){if(V(I))throw Error("division by zero");if(V(N))return new K(T,T);if($(N))return I=ae(U(N),I),new K(U(I.g),U(I.h));if($(I))return I=ae(N,U(I)),new K(U(I.g),I.h);if(30<N.g.length){if($(N)||$(I))throw Error("slowDivide_ only works with positive integers.");for(var A=C,R=I;0>=R.l(N);)A=ve(A),R=ve(R);var b=Te(A,1),L=Te(R,1);for(R=Te(R,2),A=Te(A,2);!V(R);){var P=L.add(R);0>=P.l(N)&&(b=b.add(A),L=P),R=Te(R,1),A=Te(A,1)}return I=H(N,b.j(I)),new K(b,I)}for(b=T;0<=N.l(I);){for(A=Math.max(1,Math.floor(N.m()/I.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),L=y(A),P=L.j(I);$(P)||0<P.l(N);)A-=R,L=y(A),P=L.j(I);V(L)&&(L=C),b=b.add(L),N=H(N,P)}return new K(b,N)}n.A=function(N){return ae(this,N).h},n.and=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)&N.i(R);return new f(A,this.h&N.h)},n.or=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)|N.i(R);return new f(A,this.h|N.h)},n.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),A=[],R=0;R<I;R++)A[R]=this.i(R)^N.i(R);return new f(A,this.h^N.h)};function ve(N){for(var I=N.g.length+1,A=[],R=0;R<I;R++)A[R]=N.i(R)<<1|N.i(R-1)>>>31;return new f(A,N.h)}function Te(N,I){var A=I>>5;I%=32;for(var R=N.g.length-A,b=[],L=0;L<R;L++)b[L]=0<I?N.i(L+A)>>>I|N.i(L+A+1)<<32-I:N.i(L+A);return new f(b,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=w,Rp=f}).apply(typeof Mv<"u"?Mv:typeof self<"u"?self:typeof window<"u"?window:{});var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var j1,Qa,B1,cc,zd,$1,H1,W1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,v){return u==Array.prototype||u==Object.prototype||(u[p]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yu=="object"&&Yu];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var v=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var M=u[E];if(!(M in v))break e;v=v[M]}u=u[u.length-1],E=v[u],p=p(E),p!=E&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var v=0,E=!1,M={next:function(){if(!E&&v<u.length){var B=v++;return{value:p(B,u[B]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},d=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function w(u,p,v){return u.call.apply(u.bind,arguments)}function T(u,p,v){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function C(u,p,v){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,C.apply(null,arguments)}function O(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var E=v.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function V(u,p){function v(){}v.prototype=p.prototype,u.aa=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(E,M,B){for(var ne=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ne[Ue-2]=arguments[Ue];return p.prototype[M].apply(E,ne)}}function $(u){const p=u.length;if(0<p){const v=Array(p);for(let E=0;E<p;E++)v[E]=u[E];return v}return[]}function U(u,p){for(let v=1;v<arguments.length;v++){const E=arguments[v];if(g(E)){const M=u.length||0,B=E.length||0;u.length=M+B;for(let ne=0;ne<B;ne++)u[M+ne]=E[ne]}else u.push(E)}}class H{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function J(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ae(u){return ae[" "](u),u}ae[" "]=function(){};var ve=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function Te(u,p,v){for(const E in u)p.call(v,u[E],E,u)}function N(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function I(u){const p={};for(const v in u)p[v]=u[v];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(u,p){let v,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(v in E)u[v]=E[v];for(let B=0;B<A.length;B++)v=A[B],Object.prototype.hasOwnProperty.call(E,v)&&(u[v]=E[v])}}function b(u){var p=1;u=u.split(":");const v=[];for(;0<p&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function L(u){d.setTimeout(()=>{throw u},0)}function P(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class st{constructor(){this.h=this.g=null}add(p,v){const E=Ot.get();E.set(p,v),this.h?this.h.next=E:this.g=E,this.h=E}}var Ot=new H(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let je,ie=!1,me=new st,oe=()=>{const u=d.Promise.resolve(void 0);je=()=>{u.then(D)}};var D=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(v){L(v)}var p=Ot;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ie=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,p),d.removeEventListener("test",v,p)}catch{}return u}();function Ae(u,p){if(pe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(ve){e:{try{ae(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement);this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}V(Ae,pe);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,p,v,E,M){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!E,this.ha=M,this.key=++Fe,this.da=this.fa=!1}function gt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function yr(u){this.src=u,this.g={},this.h=0}yr.prototype.add=function(u,p,v,E,M){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var ne=Gr(u,p,E,M);return-1<ne?(p=u[ne],v||(p.fa=!1)):(p=new $e(p,this.src,B,!!E,M),p.fa=v,u.push(p)),p};function Os(u,p){var v=p.type;if(v in u.g){var E=u.g[v],M=Array.prototype.indexOf.call(E,p,void 0),B;(B=0<=M)&&Array.prototype.splice.call(E,M,1),B&&(gt(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Gr(u,p,v,E){for(var M=0;M<u.length;++M){var B=u[M];if(!B.da&&B.listener==p&&B.capture==!!v&&B.ha==E)return M}return-1}var Vi="closure_lm_"+(1e6*Math.random()|0),Ds={};function Yo(u,p,v,E,M){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Yo(u,p[B],v,E,M);return null}return v=Zo(v),u&&u[Ve]?u.K(p,v,y(E)?!!E.capture:!1,M):Xo(u,p,v,!1,E,M)}function Xo(u,p,v,E,M,B){if(!p)throw Error("Invalid event type");var ne=y(M)?!!M.capture:!!M,Ue=Ms(u);if(Ue||(u[Vi]=Ue=new yr(u)),v=Ue.add(p,v,E,ne,B),v.proxy)return v;if(E=Rl(),v.proxy=E,E.src=u,E.listener=v,u.addEventListener)Se||(M=ne),M===void 0&&(M=!1),u.addEventListener(p.toString(),E,M);else if(u.attachEvent)u.attachEvent(_r(p.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Rl(){function u(v){return p.call(u.src,u.listener,v)}const p=Jo;return u}function Ls(u,p,v,E,M){if(Array.isArray(p))for(var B=0;B<p.length;B++)Ls(u,p[B],v,E,M);else E=y(E)?!!E.capture:!!E,v=Zo(v),u&&u[Ve]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],v=Gr(B,v,E,M),-1<v&&(gt(B[v]),Array.prototype.splice.call(B,v,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Ms(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Gr(p,v,E,M)),(v=-1<u?p[u]:null)&&vr(v))}function vr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ve])Os(p.i,u);else{var v=u.type,E=u.proxy;p.removeEventListener?p.removeEventListener(v,E,u.capture):p.detachEvent?p.detachEvent(_r(v),E):p.addListener&&p.removeListener&&p.removeListener(E),(v=Ms(p))?(Os(v,u),v.h==0&&(v.src=null,p[Vi]=null)):gt(u)}}}function _r(u){return u in Ds?Ds[u]:Ds[u]="on"+u}function Jo(u,p){if(u.da)u=!0;else{p=new Ae(p,this);var v=u.listener,E=u.ha||u.src;u.fa&&vr(u),u=v.call(E,p)}return u}function Ms(u){return u=u[Vi],u instanceof yr?u:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zo(u){return typeof u=="function"?u:(u[Vs]||(u[Vs]=function(p){return u.handleEvent(p)}),u[Vs])}function ft(){q.call(this),this.i=new yr(this),this.M=this,this.F=null}V(ft,q),ft.prototype[Ve]=!0,ft.prototype.removeEventListener=function(u,p,v,E){Ls(this,u,p,v,E)};function ht(u,p){var v,E=u.F;if(E)for(v=[];E;E=E.F)v.push(E);if(u=u.M,E=p.type||p,typeof p=="string")p=new pe(p,u);else if(p instanceof pe)p.target=p.target||u;else{var M=p;p=new pe(E,u),R(p,M)}if(M=!0,v)for(var B=v.length-1;0<=B;B--){var ne=p.g=v[B];M=wr(ne,E,!0,p)&&M}if(ne=p.g=u,M=wr(ne,E,!0,p)&&M,M=wr(ne,E,!1,p)&&M,v)for(B=0;B<v.length;B++)ne=p.g=v[B],M=wr(ne,E,!1,p)&&M}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var v=u.g[p],E=0;E<v.length;E++)gt(v[E]);delete u.g[p],u.h--}}this.F=null},ft.prototype.K=function(u,p,v,E){return this.i.add(String(u),p,!1,v,E)},ft.prototype.L=function(u,p,v,E){return this.i.add(String(u),p,!0,v,E)};function wr(u,p,v,E){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,B=0;B<p.length;++B){var ne=p[B];if(ne&&!ne.da&&ne.capture==v){var Ue=ne.listener,dt=ne.ha||ne.src;ne.fa&&Os(u.i,ne),M=Ue.call(dt,E)!==!1&&M}}return M&&!E.defaultPrevented}function ea(u,p,v){if(typeof u=="function")v&&(u=C(u,v));else if(u&&typeof u.handleEvent=="function")u=C(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:d.setTimeout(u,p||0)}function Kr(u){u.g=ea(()=>{u.g=null,u.i&&(u.i=!1,Kr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Fi extends q{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ui(u){q.call(this),this.h=u,this.g={}}V(Ui,q);var ta=[];function na(u){Te(u.g,function(p,v){this.g.hasOwnProperty(v)&&vr(p)},u),u.g={}}Ui.prototype.N=function(){Ui.aa.N.call(this),na(this)},Ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ra=d.JSON.stringify,ia=d.JSON.parse,sa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function zi(){}zi.prototype.h=null;function Fs(u){return u.h||(u.h=u.i())}function Us(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){pe.call(this,"d")}V(Kn,pe);function zs(){pe.call(this,"c")}V(zs,pe);var Qn={},oa=null;function ji(){return oa=oa||new ft}Qn.La="serverreachability";function aa(u){pe.call(this,Qn.La,u)}V(aa,pe);function Er(u){const p=ji();ht(p,new aa(p))}Qn.STAT_EVENT="statevent";function la(u,p){pe.call(this,Qn.STAT_EVENT,u),this.stat=p}V(la,pe);function ot(u){const p=ji();ht(p,new la(p,u))}Qn.Ma="timingevent";function js(u,p){pe.call(this,Qn.Ma,u),this.size=p}V(js,pe);function Pn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},p)}function Bi(){this.g=!0}Bi.prototype.xa=function(){this.g=!1};function $i(u,p,v,E,M,B){u.info(function(){if(u.g)if(B)for(var ne="",Ue=B.split("&"),dt=0;dt<Ue.length;dt++){var be=Ue[dt].split("=");if(1<be.length){var yt=be[0];be=be[1];var lt=yt.split("_");ne=2<=lt.length&&lt[1]=="type"?ne+(yt+"="+be+"&"):ne+(yt+"=redacted&")}}else ne=null;else ne=B;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+v+`
`+ne})}function Bs(u,p,v,E,M,B,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+v+`
`+B+" "+ne})}function kn(u,p,v,E){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+uf(u,v)+(E?" "+E:"")})}function ua(u,p){u.info(function(){return"TIMEOUT: "+p})}Bi.prototype.info=function(){};function uf(u,p){if(!u.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var E=v[u];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var B=M[0];if(B!="noop"&&B!="stop"&&B!="close")for(var ne=1;ne<M.length;ne++)M[ne]=""}}}}return ra(v)}catch{return p}}var $s={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rn;function Hi(){}V(Hi,zi),Hi.prototype.g=function(){return new XMLHttpRequest},Hi.prototype.i=function(){return{}},Rn=new Hi;function Nn(u,p,v,E){this.j=u,this.i=p,this.l=v,this.R=E||1,this.U=new Ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xl}function xl(){this.i=null,this.g="",this.h=!1}var ca={},Hs={};function Ws(u,p,v){u.L=1,u.v=Zr(ln(p)),u.m=v,u.P=!0,fa(u,null)}function fa(u,p){u.F=Date.now(),He(u),u.A=ln(u.v);var v=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),ti(v.i,"t",E),u.C=0,v=u.j.J,u.h=new xl,u.g=Ql(u.j,v?p:null,!u.m),0<u.O&&(u.M=new Fi(C(u.Y,u,u.g),u.O)),p=u.U,v=u.g,E=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(ta[0]=M.toString()),M=ta);for(var B=0;B<M.length;B++){var ne=Yo(v,M[B],E||p.handleEvent,!1,p.h||p);if(!ne)break;p.g[ne.key]=ne}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Er(),$i(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Yt(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const lt=Yt(this.g);var p=this.g.Ba();const _n=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||ya(this.g)))){this.J||lt!=4||p==7||(p==8||0>=_n?Er(3):Er(2)),Wi(this);var v=this.g.Z();this.X=v;t:if(bl(this)){var E=ya(this.g);u="";var M=E.length,B=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Qr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(E[p],{stream:!(B&&p==M-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,Bs(this.i,this.u,this.A,this.l,this.R,lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,dt=this.g;if((Ue=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Ue)){var be=Ue;break t}}be=null}if(v=be)kn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,v);else{this.o=!1,this.s=3,ot(12),yn(this),Qr(this);break e}}if(this.P){v=!0;let cn;for(;!this.J&&this.C<ne.length;)if(cn=cf(this,ne),cn==Hs){lt==4&&(this.s=4,ot(14),v=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==ca){this.s=4,ot(15),kn(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else kn(this.i,this.l,cn,null),ha(this,cn);if(bl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||ne.length!=0||this.h.h||(this.s=1,ot(16),v=!1),this.o=this.o&&v,!v)kn(this.i,this.l,ne,"[Invalid Chunked Response]"),yn(this),Qr(this);else if(0<ne.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),_a(yt),yt.M=!0,ot(11))}}else kn(this.i,this.l,ne,null),ha(this,ne);lt==4&&yn(this),this.o&&!this.J&&(lt==4?no(this.j,this):(this.o=!1,He(this)))}else Xs(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),yn(this),Qr(this)}}}catch{}finally{}};function bl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function cf(u,p){var v=u.C,E=p.indexOf(`
`,v);return E==-1?Hs:(v=Number(p.substring(v,E)),isNaN(v)?ca:(E+=1,E+v>p.length?Hs:(p=p.slice(E,E+v),u.C=E+v,p)))}Nn.prototype.cancel=function(){this.J=!0,yn(this)};function He(u){u.S=Date.now()+u.I,Ol(u,u.I)}function Ol(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(C(u.ba,u),p)}function Wi(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(ua(this.i,this.A),this.L!=2&&(Er(),ot(17)),yn(this),this.s=2,Qr(this)):Ol(this,this.S-u)};function Qr(u){u.j.G==0||u.J||no(u.j,u)}function yn(u){Wi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,na(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ha(u,p){try{var v=u.j;if(v.G!=0&&(v.g==u||Ht(v.h,u))){if(!u.K&&Ht(v.h,u)&&v.G==3){try{var E=v.Da.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)to(v),Ln(v);else break e;eo(v),ot(18)}}else v.za=M[1],0<v.za-v.T&&37500>M[2]&&v.F&&v.v==0&&!v.C&&(v.C=Pn(C(v.Za,v),6e3));if(1>=Ll(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Cr(v,11)}else if((u.K||v.g==u)&&to(v),!J(p))for(M=v.Da.g.parse(p),p=0;p<M.length;p++){let be=M[p];if(v.T=be[0],be=be[1],v.G==2)if(be[0]=="c"){v.K=be[1],v.ia=be[2];const yt=be[3];yt!=null&&(v.la=yt,v.j.info("VER="+v.la));const lt=be[4];lt!=null&&(v.Aa=lt,v.j.info("SVER="+v.Aa));const _n=be[5];_n!=null&&typeof _n=="number"&&0<_n&&(E=1.5*_n,v.L=E,v.j.info("backChannelRequestTimeoutMs_="+E)),E=v;const cn=u.g;if(cn){const Ji=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var B=E.h;B.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(da(B,B.h),B.h=null))}if(E.D){const io=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(E.ya=io,Be(E.I,E.D,io))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),E=v;var ne=u;if(E.qa=Kl(E,E.J?E.ia:null,E.W),ne.K){Ml(E.h,ne);var Ue=ne,dt=E.L;dt&&(Ue.I=dt),Ue.B&&(Wi(Ue),He(Ue)),E.g=ne}else Xi(E);0<v.i.length&&Zn(v)}else be[0]!="stop"&&be[0]!="close"||Cr(v,7);else v.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Cr(v,7):Ct(v):be[0]!="noop"&&v.l&&v.l.ta(be),v.v=0)}}Er(4)}catch{}}var Dl=class{constructor(u,p){this.g=u,this.map=p}};function qi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function an(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ll(u){return u.h?1:u.g?u.g.size:0}function Ht(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function da(u,p){u.g?u.g.add(p):u.h=p}function Ml(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}qi.prototype.cancel=function(){if(this.i=Vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Vl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.D);return p}return $(u.i)}function qs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],v=u.length,E=0;E<v;E++)p.push(u[E]);return p}p=[],v=0;for(E in u)p[v++]=u[E];return p}function Gs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var v=0;v<u;v++)p.push(v);return p}p=[],v=0;for(const E in u)p[v++]=E;return p}}}function Yr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var v=Gs(u),E=qs(u),M=E.length,B=0;B<M;B++)p.call(void 0,E[B],v&&v[B],u)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ff(u,p){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var E=u[v].indexOf("="),M=null;if(0<=E){var B=u[v].substring(0,E);M=u[v].substring(E+1)}else B=u[v];p(B,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Tr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Tr){this.h=u.h,Ki(this,u.j),this.o=u.o,this.g=u.g,Xr(this,u.s),this.l=u.l;var p=u.i,v=new Yn;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Jr(this,v),this.m=u.m}else u&&(p=String(u).match(Gi))?(this.h=!1,Ki(this,p[1]||"",!0),this.o=Ne(p[2]||""),this.g=Ne(p[3]||"",!0),Xr(this,p[4]),this.l=Ne(p[5]||"",!0),Jr(this,p[6]||"",!0),this.m=Ne(p[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Tr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ei(p,Ks,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ei(p,Ks,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(ei(v,v.charAt(0)=="/"?zl:Ul,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",ei(v,pa)),u.join("")};function ln(u){return new Tr(u)}function Ki(u,p,v){u.j=v?Ne(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Xr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Jr(u,p,v){p instanceof Yn?(u.i=p,Xn(u.i,u.h)):(v||(p=ei(p,jl)),u.i=new Yn(p,u.h))}function Be(u,p,v){u.i.set(p,v)}function Zr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ei(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,Fl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Fl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ks=/[#\/\?@]/g,Ul=/[#\?:]/g,zl=/[#\?]/g,jl=/[#\?@]/g,pa=/#/g;function Yn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function At(u){u.g||(u.g=new Map,u.h=0,u.i&&ff(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}n=Yn.prototype,n.add=function(u,p){At(this),this.i=null,u=vn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function xn(u,p){At(u),p=vn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function bn(u,p){return At(u),p=vn(u,p),u.g.has(p)}n.forEach=function(u,p){At(this),this.g.forEach(function(v,E){v.forEach(function(M){u.call(p,M,E,this)},this)},this)},n.na=function(){At(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let E=0;E<p.length;E++){const M=u[E];for(let B=0;B<M.length;B++)v.push(p[E])}return v},n.V=function(u){At(this);let p=[];if(typeof u=="string")bn(this,u)&&(p=p.concat(this.g.get(vn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)p=p.concat(u[v])}return p},n.set=function(u,p){return At(this),this.i=null,u=vn(this,u),bn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function ti(u,p,v){xn(u,p),0<v.length&&(u.i=null,u.g.set(vn(u,p),$(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var E=p[v];const B=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var M=B;ne[E]!==""&&(M+="="+encodeURIComponent(String(ne[E]))),u.push(M)}}return this.i=u.join("&")};function vn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Xn(u,p){p&&!u.j&&(At(u),u.i=null,u.g.forEach(function(v,E){var M=E.toLowerCase();E!=M&&(xn(this,E),ti(this,M,v))},u)),u.j=p}function hf(u,p){const v=new Bi;if(d.Image){const E=new Image;E.onload=O(Qt,v,"TestLoadImage: loaded",!0,p,E),E.onerror=O(Qt,v,"TestLoadImage: error",!1,p,E),E.onabort=O(Qt,v,"TestLoadImage: abort",!1,p,E),E.ontimeout=O(Qt,v,"TestLoadImage: timeout",!1,p,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else p(!1)}function Bl(u,p){const v=new Bi,E=new AbortController,M=setTimeout(()=>{E.abort(),Qt(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:E.signal}).then(B=>{clearTimeout(M),B.ok?Qt(v,"TestPingServer: ok",!0,p):Qt(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Qt(v,"TestPingServer: error",!1,p)})}function Qt(u,p,v,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(v)}catch{}}function df(){this.g=new sa}function $l(u,p,v){const E=v||"";try{Yr(u,function(M,B){let ne=M;y(M)&&(ne=ra(M)),p.push(E+B+"="+encodeURIComponent(ne))})}catch(M){throw p.push(E+"type="+encodeURIComponent("_badmap")),M}}function Ir(u){this.l=u.Ub||null,this.j=u.eb||!1}V(Ir,zi),Ir.prototype.g=function(){return new Qi(this.l,this.j)},Ir.prototype.i=function(u){return function(){return u}}({});function Qi(u,p){ft.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Qi,ft),n=Qi.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||d).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,On(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Hl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Hl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?On(this):Dn(this),this.readyState==3&&Hl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,On(this))},n.Qa=function(u){this.g&&(this.response=u,On(this))},n.ga=function(){this.g&&On(this)};function On(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Sr(u){let p="";return Te(u,function(v,E){p+=E,p+=":",p+=v,p+=`\r
`}),p}function ni(u,p,v){e:{for(E in v){var E=!1;break e}E=!0}E||(v=Sr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Be(u,p,v))}function Ye(u){ft.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ye,ft);var pf=/^https?$/i,ma=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,v,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rn.g(),this.v=this.o?Fs(this.o):Fs(Rn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Yi(this,B);return}if(u=v||"",v=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)v.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const B of E.keys())v.set(B,E.get(B));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),M=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ma,p,void 0))||E||M||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ne]of v)this.g.setRequestHeader(B,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ys(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Yi(this,B)}};function Yi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Qs(u),un(u)}function Qs(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ga(this):this.bb())},n.bb=function(){ga(this)};function ga(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Yt(u)!=4||u.Z()!=2)){if(u.u&&Yt(u)==4)ea(u.Ea,0,u);else if(ht(u,"readystatechange"),Yt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var E;if(E=ne===0){var M=String(u.D).match(Gi)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),E=!pf.test(M?M.toLowerCase():"")}v=E}if(v)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var B=2<Yt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Qs(u)}}finally{un(u)}}}}function un(u,p){if(u.g){Ys(u);const v=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ht(u,"ready");try{v.onreadystatechange=E}catch{}}}function Ys(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Yt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ia(p)}};function ya(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Xs(u){const p={};u=(u.g&&2<=Yt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(J(u[E]))continue;var v=b(u[E]);const M=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=p[M]||[];p[M]=B,B.push(v)}N(p,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function va(u){this.Aa=0,this.i=[],this.j=new Bi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,u),this.cb=Jn("retryDelaySeedMs",1e4,u),this.Wa=Jn("forwardChannelMaxRetries",2,u),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(u&&u.concurrentRequestLimit),this.Da=new df,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=va.prototype,n.la=8,n.G=1,n.connect=function(u,p,v,E){ot(0),this.W=u,this.H=p||{},v&&E!==void 0&&(this.H.OSID=v,this.H.OAID=E),this.F=this.X,this.I=Kl(this,null,this.W),Zn(this)};function Ct(u){if(Js(u),u.G==3){var p=u.U++,v=ln(u.I);if(Be(v,"SID",u.K),Be(v,"RID",p),Be(v,"TYPE","terminate"),Ar(u,v),p=new Nn(u,u.j,p),p.L=2,p.v=Zr(ln(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=p.v,v=!0),v||(p.g=Ql(p.j,null),p.g.ea(p.v)),p.F=Date.now(),He(p)}Gl(u)}function Ln(u){u.g&&(_a(u),u.g.cancel(),u.g=null)}function Js(u){Ln(u),u.u&&(d.clearTimeout(u.u),u.u=null),to(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Zn(u){if(!an(u.h)&&!u.s){u.s=!0;var p=u.Ga;je||oe(),ie||(je(),ie=!0),me.add(p,u),u.B=0}}function mf(u,p){return Ll(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(C(u.Ga,u,p),ql(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new Nn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=I(B),R(B,this.S)):B=this.S),this.m!==null||this.O||(M.H=B,B=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var E=this.i[v];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=ri(this,M,p),v=ln(this.I),Be(v,"RID",u),Be(v,"CVER",22),this.D&&Be(v,"X-HTTP-Session-Id",this.D),Ar(this,v),B&&(this.O?p="headers="+encodeURIComponent(String(Sr(B)))+"&"+p:this.m&&ni(v,this.m,B)),da(this.h,M),this.Ua&&Be(v,"TYPE","init"),this.P?(Be(v,"$req",p),Be(v,"SID","null"),M.T=!0,Ws(M,v,null)):Ws(M,v,p),this.G=2}}else this.G==3&&(u?Zs(this,u):this.i.length==0||an(this.h)||Zs(this))};function Zs(u,p){var v;p?v=p.l:v=u.U++;const E=ln(u.I);Be(E,"SID",u.K),Be(E,"RID",v),Be(E,"AID",u.T),Ar(u,E),u.m&&u.o&&ni(E,u.m,u.o),v=new Nn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),p&&(u.i=p.D.concat(u.i)),p=ri(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),da(u.h,v),Ws(v,E,p)}function Ar(u,p){u.H&&Te(u.H,function(v,E){Be(p,E,v)}),u.l&&Yr({},function(v,E){Be(p,E,v)})}function ri(u,p,v){v=Math.min(u.i.length,v);var E=u.l?C(u.l.Na,u.l,u):null;e:{var M=u.i;let B=-1;for(;;){const ne=["count="+v];B==-1?0<v?(B=M[0].g,ne.push("ofs="+B)):B=0:ne.push("ofs="+B);let Ue=!0;for(let dt=0;dt<v;dt++){let be=M[dt].g;const yt=M[dt].map;if(be-=B,0>be)B=Math.max(0,M[dt].g-100),Ue=!1;else try{$l(yt,ne,"req"+be+"_")}catch{E&&E(yt)}}if(Ue){E=ne.join("&");break e}}}return u=u.i.splice(0,v),p.D=u,E}function Xi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;je||oe(),ie||(je(),ie=!0),me.add(p,u),u.v=0}}function eo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(C(u.Fa,u),ql(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Wl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(C(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Ln(this),Wl(this))};function _a(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Wl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=ln(u.qa);Be(p,"RID","rpc"),Be(p,"SID",u.K),Be(p,"AID",u.T),Be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(p,"TO",u.ja),Be(p,"TYPE","xmlhttp"),Ar(u,p),u.m&&u.o&&ni(p,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Zr(ln(p)),v.m=null,v.P=!0,fa(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Ln(this),eo(this),ot(19))};function to(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function no(u,p){var v=null;if(u.g==p){to(u),_a(u),u.g=null;var E=2}else if(Ht(u.h,p))v=p.D,Ml(u.h,p),E=1;else return;if(u.G!=0){if(p.o)if(E==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;E=ji(),ht(E,new js(E,v)),Zn(u)}else Xi(u);else if(M=p.s,M==3||M==0&&0<p.X||!(E==1&&mf(u,p)||E==2&&eo(u)))switch(v&&0<v.length&&(p=u.h,p.i=p.i.concat(v)),M){case 1:Cr(u,5);break;case 4:Cr(u,10);break;case 3:Cr(u,6);break;default:Cr(u,2)}}}function ql(u,p){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*p}function Cr(u,p){if(u.j.info("Error code "+p),p==2){var v=C(u.fb,u),E=u.Xa;const M=!E;E=new Tr(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ki(E,"https"),Zr(E),M?hf(E.toString(),v):Bl(E.toString(),v)}else ot(2);u.G=0,u.l&&u.l.sa(p),Gl(u),Js(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Gl(u){if(u.G=0,u.ka=[],u.l){const p=Vl(u.h);(p.length!=0||u.i.length!=0)&&(U(u.ka,p),U(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Kl(u,p,v){var E=v instanceof Tr?ln(v):new Tr(v);if(E.g!="")p&&(E.g=p+"."+E.g),Xr(E,E.s);else{var M=d.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var B=new Tr(null);E&&Ki(B,E),p&&(B.g=p),M&&Xr(B,M),v&&(B.l=v),E=B}return v=u.D,p=u.ya,v&&p&&Be(E,v,p),Be(E,"VER",u.la),Ar(u,E),E}function Ql(u,p,v){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ye(new Ir({eb:v})):new Ye(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wa(){}n=wa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ro(){}ro.prototype.g=function(u,p){return new Wt(u,p)};function Wt(u,p){ft.call(this),this.g=new va(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!J(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!J(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new er(this)}V(Wt,ft),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Ct(this.g)},Wt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=ra(u),u=v);p.i.push(new Dl(p.Ya++,u)),p.G==3&&Zn(p)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Ct(this.g),delete this.g,Wt.aa.N.call(this)};function Yl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}V(Yl,Kn);function Xl(){zs.call(this),this.status=1}V(Xl,zs);function er(u){this.g=u}V(er,wa),er.prototype.ua=function(){ht(this.g,"a")},er.prototype.ta=function(u){ht(this.g,new Yl(u))},er.prototype.sa=function(u){ht(this.g,new Xl)},er.prototype.ra=function(){ht(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,W1=function(){return new ro},H1=function(){return ji()},$1=Qn,zd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$s.NO_ERROR=0,$s.TIMEOUT=8,$s.HTTP_ERROR=6,cc=$s,Nl.COMPLETE="complete",B1=Nl,Us.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Qa=Us,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,j1=Ye}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});const Vv="@firebase/firestore",Fv="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Gc("@firebase/firestore");function Co(){return Is.logLevel}function fe(n,...e){if(Is.logLevel<=Re.DEBUG){const t=e.map(Np);Is.debug(`Firestore (${Ko}): ${n}`,...t)}}function Ss(n,...e){if(Is.logLevel<=Re.ERROR){const t=e.map(Np);Is.error(`Firestore (${Ko}): ${n}`,...t)}}function Zc(n,...e){if(Is.logLevel<=Re.WARN){const t=e.map(Np);Is.warn(`Firestore (${Ko}): ${n}`,...t)}}function Np(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n="Unexpected state"){const e=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: `+n;throw Ss(e),new Error(e)}function it(n,e){n||ke()}function qe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends Gn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class v4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class _4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class w4{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){it(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new ms;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ms,e.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},d=g=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>d(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?d(g):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ms)}},0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(it(typeof s.accessToken=="string"),new q1(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return it(e===null||typeof e=="string"),new zt(e)}}class E4{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class T4{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new E4(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I4{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,$n(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){it(this.o===void 0);const s=l=>{l.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const f=l.token!==this.R;return this.R=l.token,fe("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Uv(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(it(typeof t.token=="string"),this.R=t.token,new Uv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S4(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=S4(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function ze(n,e){return n<e?-1:n>e?1:0}function Vo(n,e,t){return n.length===e.length&&n.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=-62135596800,jv=1e6;class St{static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*jv);return new St(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zv)throw new _e(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/jv}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-zv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{static fromTimestamp(e){return new Je(e)}static min(){return new Je(new St(0,0))}static max(){return new Je(new St(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="__name__";class sr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ke(),s===void 0?s=e.length-t:s>e.length-t&&ke(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=sr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=sr.isNumericId(e),o=sr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?sr.extractNumericId(e).compare(sr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rp.fromString(e.substring(4,e.length-2))}}class rt extends sr{construct(e,t,s){return new rt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new _e(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new rt(t)}static emptyPath(){return new rt([])}}const A4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends sr{construct(e,t,s){return new xt(e,t,s)}static isValidIdentifier(e){return A4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bv}static keyField(){return new xt([Bv])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new _e(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let f=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new _e(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new _e(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else d==="`"?(f=!f,o++):d!=="."||f?(s+=d,o++):(l(),o++)}if(l(),f)throw new _e(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(rt.fromString(e))}static fromName(e){return new Ie(rt.fromString(e).popFirst(5))}static empty(){return new Ie(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return rt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new rt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=-1;function C4(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Je.fromTimestamp(s===1e9?new St(t+1,0):new St(t,s));return new Oi(o,Ie.empty(),e)}function P4(n){return new Oi(n.readTime,n.key,ul)}class Oi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Oi(Je.min(),Ie.empty(),ul)}static max(){return new Oi(Je.max(),Ie.empty(),ul)}}function k4(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ie.comparator(n.documentKey,e.documentKey),t!==0?t:ze(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xp(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==R4)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ke(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,s)=>{t(e)})}static reject(e){return new G((t,s)=>{s(e)})}static waitFor(e){return new G((t,s)=>{let o=0,l=0,f=!1;e.forEach(d=>{++o,d.next(()=>{++l,f&&l===o&&t()},g=>s(g))}),f=!0,l===o&&t()})}static or(e){let t=G.resolve(!1);for(const s of e)t=t.next(o=>o?G.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new G((s,o)=>{const l=e.length,f=new Array(l);let d=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next(w=>{f[y]=w,++d,d===l&&s(f)},w=>o(w))}})}static doWhile(e,t){return new G((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function x4(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Sl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bp.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=-1;function Dp(n){return n==null}function Pc(n){return n===0&&1/n==-1/0}function b4(n){return typeof n=="number"&&Number.isInteger(n)&&!Pc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1="";function O4(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$v(e)),e=D4(n.get(t),e);return $v(e)}function D4(n,e){let t=e;const s=n.length;for(let o=0;o<s;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case K1:t+="";break;default:t+=l}}return t}function $v(n){return n+K1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Qo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Q1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new on(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new on(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xu(this.root,e,this.comparator,!0)}}class Xu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=l??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ke();const e=this.left.check();if(e!==this.right.check())throw ke();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw ke()}get value(){throw ke()}get color(){throw ke()}get left(){throw ke()}get right(){throw ke()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.comparator=e,this.data=new on(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Wv(this.data.getIterator())}getIteratorFrom(e){return new Wv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new bt(this.comparator);return t.data=e,t}}class Wv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Wn([])}unionWith(e){let t=new bt(xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new L4("Invalid base64 string: "+l):l}}(e);return new dr(t)}static fromUint8Array(e){const t=function(o){let l="";for(let f=0;f<o.length;++f)l+=String.fromCharCode(o[f]);return l}(e);return new dr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dr.EMPTY_BYTE_STRING=new dr("");const M4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(n){if(it(!!n),typeof n=="string"){let e=0;const t=M4.exec(n);if(it(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Nt(n.seconds),nanos:Nt(n.nanos)}}function Nt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fo(n){return typeof n=="string"?dr.fromBase64String(n):dr.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="server_timestamp",X1="__type__",J1="__previous_value__",Z1="__local_write_time__";function Lp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[X1])===null||t===void 0?void 0:t.stringValue)===Y1}function Mp(n){const e=n.mapValue.fields[J1];return Lp(e)?Mp(e):e}function kc(n){const e=As(n.mapValue.fields[Z1].timestampValue);return new St(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(e,t,s,o,l,f,d,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=f,this.autoDetectLongPolling=d,this.longPollingOptions=g,this.useFetchStreams=y}}const Rc="(default)";class Nc{constructor(e,t){this.projectId=e,this.database=t||Rc}static empty(){return new Nc("","")}get isDefaultDatabase(){return this.database===Rc}isEqual(e){return e instanceof Nc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="__type__",F4="__max__",Ju={mapValue:{}},tw="__vector__",jd="value";function Cs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lp(n)?4:z4(n)?9007199254740991:U4(n)?10:11:ke()}function pr(n,e){if(n===e)return!0;const t=Cs(n);if(t!==Cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kc(n).isEqual(kc(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const f=As(o.timestampValue),d=As(l.timestampValue);return f.seconds===d.seconds&&f.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Fo(o.bytesValue).isEqual(Fo(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return Nt(o.geoPointValue.latitude)===Nt(l.geoPointValue.latitude)&&Nt(o.geoPointValue.longitude)===Nt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return Nt(o.integerValue)===Nt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const f=Nt(o.doubleValue),d=Nt(l.doubleValue);return f===d?Pc(f)===Pc(d):isNaN(f)&&isNaN(d)}return!1}(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return function(o,l){const f=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Hv(f)!==Hv(d))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(d[g]===void 0||!pr(f[g],d[g])))return!1;return!0}(n,e);default:return ke()}}function cl(n,e){return(n.values||[]).find(t=>pr(t,e))!==void 0}function Uo(n,e){if(n===e)return 0;const t=Cs(n),s=Cs(e);if(t!==s)return ze(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(n.booleanValue,e.booleanValue);case 2:return function(l,f){const d=Nt(l.integerValue||l.doubleValue),g=Nt(f.integerValue||f.doubleValue);return d<g?-1:d>g?1:d===g?0:isNaN(d)?isNaN(g)?0:-1:1}(n,e);case 3:return qv(n.timestampValue,e.timestampValue);case 4:return qv(kc(n),kc(e));case 5:return ze(n.stringValue,e.stringValue);case 6:return function(l,f){const d=Fo(l),g=Fo(f);return d.compareTo(g)}(n.bytesValue,e.bytesValue);case 7:return function(l,f){const d=l.split("/"),g=f.split("/");for(let y=0;y<d.length&&y<g.length;y++){const w=ze(d[y],g[y]);if(w!==0)return w}return ze(d.length,g.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,f){const d=ze(Nt(l.latitude),Nt(f.latitude));return d!==0?d:ze(Nt(l.longitude),Nt(f.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Gv(n.arrayValue,e.arrayValue);case 10:return function(l,f){var d,g,y,w;const T=l.fields||{},C=f.fields||{},O=(d=T[jd])===null||d===void 0?void 0:d.arrayValue,V=(g=C[jd])===null||g===void 0?void 0:g.arrayValue,$=ze(((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0,((w=V==null?void 0:V.values)===null||w===void 0?void 0:w.length)||0);return $!==0?$:Gv(O,V)}(n.mapValue,e.mapValue);case 11:return function(l,f){if(l===Ju.mapValue&&f===Ju.mapValue)return 0;if(l===Ju.mapValue)return 1;if(f===Ju.mapValue)return-1;const d=l.fields||{},g=Object.keys(d),y=f.fields||{},w=Object.keys(y);g.sort(),w.sort();for(let T=0;T<g.length&&T<w.length;++T){const C=ze(g[T],w[T]);if(C!==0)return C;const O=Uo(d[g[T]],y[w[T]]);if(O!==0)return O}return ze(g.length,w.length)}(n.mapValue,e.mapValue);default:throw ke()}}function qv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ze(n,e);const t=As(n),s=As(e),o=ze(t.seconds,s.seconds);return o!==0?o:ze(t.nanos,s.nanos)}function Gv(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Uo(t[o],s[o]);if(l)return l}return ze(t.length,s.length)}function zo(n){return Bd(n)}function Bd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=As(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fo(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ie.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Bd(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const f of s)l?l=!1:o+=",",o+=`${f}:${Bd(t.fields[f])}`;return o+"}"}(n.mapValue):ke()}function fc(n){switch(Cs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Mp(n);return e?16+fc(e):16;case 5:return 2*n.stringValue.length;case 6:return Fo(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+fc(l),0)}(n.arrayValue);case 10:case 11:return function(s){let o=0;return Qo(s.fields,(l,f)=>{o+=l.length+fc(f)}),o}(n.mapValue);default:throw ke()}}function $d(n){return!!n&&"integerValue"in n}function Vp(n){return!!n&&"arrayValue"in n}function hc(n){return!!n&&"mapValue"in n}function U4(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ew])===null||t===void 0?void 0:t.stringValue)===tw}function el(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Qo(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=el(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=el(n.arrayValue.values[t]);return e}return Object.assign({},n)}function z4(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===F4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.value=e}static empty(){return new Hn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!hc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(t)}setAll(e){let t=xt.emptyPath(),s={},o=[];e.forEach((f,d)=>{if(!t.isImmediateParentOf(d)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=d.popLast()}f?s[d.lastSegment()]=el(f):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());hc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];hc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Qo(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new Hn(el(this.value))}}function nw(n){const e=[];return Qo(n.fields,(t,s)=>{const o=new xt([t]);if(hc(s)){const l=nw(s.mapValue).fields;if(l.length===0)e.push(o);else for(const f of l)e.push(o.child(f))}else e.push(o)}),new Wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,s,o,l,f,d){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=f,this.documentState=d}static newInvalidDocument(e){return new Bn(e,0,Je.min(),Je.min(),Je.min(),Hn.empty(),0)}static newFoundDocument(e,t,s,o){return new Bn(e,1,t,Je.min(),s,o,0)}static newNoDocument(e,t){return new Bn(e,2,t,Je.min(),Je.min(),Hn.empty(),0)}static newUnknownDocument(e,t){return new Bn(e,3,t,Je.min(),Je.min(),Hn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Je.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Hn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Hn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Je.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.position=e,this.inclusive=t}}function Kv(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const l=e[o],f=n.position[o];if(l.field.isKeyField()?s=Ie.comparator(Ie.fromName(f.referenceValue),t.key):s=Uo(f,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t="asc"){this.field=e,this.dir=t}}function j4(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{}class It extends rw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $4(e,t,s):t==="array-contains"?new q4(e,s):t==="in"?new G4(e,s):t==="not-in"?new K4(e,s):t==="array-contains-any"?new Q4(e,s):new It(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new H4(e,s):new W4(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Uo(t,this.value)):t!==null&&Cs(this.value)===Cs(t)&&this.matchesComparison(Uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Di extends rw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Di(e,t)}matches(e){return iw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function iw(n){return n.op==="and"}function sw(n){return B4(n)&&iw(n)}function B4(n){for(const e of n.filters)if(e instanceof Di)return!1;return!0}function Hd(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+zo(n.value);if(sw(n))return n.filters.map(e=>Hd(e)).join(",");{const e=n.filters.map(t=>Hd(t)).join(",");return`${n.op}(${e})`}}function ow(n,e){return n instanceof It?function(s,o){return o instanceof It&&s.op===o.op&&s.field.isEqual(o.field)&&pr(s.value,o.value)}(n,e):n instanceof Di?function(s,o){return o instanceof Di&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,f,d)=>l&&ow(f,o.filters[d]),!0):!1}(n,e):void ke()}function aw(n){return n instanceof It?function(t){return`${t.field.canonicalString()} ${t.op} ${zo(t.value)}`}(n):n instanceof Di?function(t){return t.op.toString()+" {"+t.getFilters().map(aw).join(" ,")+"}"}(n):"Filter"}class $4 extends It{constructor(e,t,s){super(e,t,s),this.key=Ie.fromName(s.referenceValue)}matches(e){const t=Ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class H4 extends It{constructor(e,t){super(e,"in",t),this.keys=lw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class W4 extends It{constructor(e,t){super(e,"not-in",t),this.keys=lw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Ie.fromName(s.referenceValue))}class q4 extends It{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vp(t)&&cl(t.arrayValue,this.value)}}class G4 extends It{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cl(this.value.arrayValue,t)}}class K4 extends It{constructor(e,t){super(e,"not-in",t)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!cl(this.value.arrayValue,t)}}class Q4 extends It{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>cl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e,t=null,s=[],o=[],l=null,f=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=f,this.endAt=d,this.le=null}}function Yv(n,e=null,t=[],s=[],o=null,l=null,f=null){return new Y4(n,e,t,s,o,l,f)}function Fp(n){const e=qe(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Hd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Dp(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>zo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>zo(s)).join(",")),e.le=t}return e.le}function Up(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!j4(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ow(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Qv(n.startAt,e.startAt)&&Qv(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t=null,s=[],o=[],l=null,f="F",d=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=f,this.startAt=d,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function X4(n,e,t,s,o,l,f,d){return new ef(n,e,t,s,o,l,f,d)}function J4(n){return new ef(n)}function Xv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Z4(n){return n.collectionGroup!==null}function tl(n){const e=qe(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let d=new bt(xt.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new bc(l,s))}),t.has(xt.keyField().canonicalString())||e.he.push(new bc(xt.keyField(),s))}return e.he}function gs(n){const e=qe(n);return e.Pe||(e.Pe=eN(e,tl(n))),e.Pe}function eN(n,e){if(n.limitType==="F")return Yv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new bc(o.field,l)});const t=n.endAt?new xc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new xc(n.startAt.position,n.startAt.inclusive):null;return Yv(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Wd(n,e,t){return new ef(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function uw(n,e){return Up(gs(n),gs(e))&&n.limitType===e.limitType}function cw(n){return`${Fp(gs(n))}|lt:${n.limitType}`}function Ga(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>aw(o)).join(", ")}]`),Dp(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>zo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>zo(o)).join(",")),`Target(${s})`}(gs(n))}; limitType=${n.limitType})`}function zp(n,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Ie.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,o){for(const l of tl(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(s,o){return!(s.startAt&&!function(f,d,g){const y=Kv(f,d,g);return f.inclusive?y<=0:y<0}(s.startAt,tl(s),o)||s.endAt&&!function(f,d,g){const y=Kv(f,d,g);return f.inclusive?y>=0:y>0}(s.endAt,tl(s),o))}(n,e)}function tN(n){return(e,t)=>{let s=!1;for(const o of tl(n)){const l=nN(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function nN(n,e,t){const s=n.field.isKeyField()?Ie.comparator(e.key,t.key):function(l,f,d){const g=f.data.field(l),y=d.data.field(l);return g!==null&&y!==null?Uo(g,y):ke()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ke()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Qo(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return Q1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=new on(Ie.comparator);function Oc(){return rN}const fw=new on(Ie.comparator);function Zu(...n){let e=fw;for(const t of n)e=e.insert(t.key,t);return e}function hw(n){let e=fw;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ps(){return nl()}function dw(){return nl()}function nl(){return new xs(n=>n.toString(),(n,e)=>n.isEqual(e))}const iN=new on(Ie.comparator),sN=new bt(Ie.comparator);function jt(...n){let e=sN;for(const t of n)e=e.add(t);return e}const oN=new bt(ze);function aN(){return oN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pc(e)?"-0":e}}function pw(n){return{integerValue:""+n}}function lN(n,e){return b4(e)?pw(e):jp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this._=void 0}}function uN(n,e,t){return n instanceof Dc?function(o,l){const f={fields:{[X1]:{stringValue:Y1},[Z1]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Lp(l)&&(l=Mp(l)),l&&(f.fields[J1]=l),{mapValue:f}}(t,e):n instanceof fl?gw(n,e):n instanceof hl?yw(n,e):function(o,l){const f=mw(o,l),d=Jv(f)+Jv(o.Ie);return $d(f)&&$d(o.Ie)?pw(d):jp(o.serializer,d)}(n,e)}function cN(n,e,t){return n instanceof fl?gw(n,e):n instanceof hl?yw(n,e):t}function mw(n,e){return n instanceof Lc?function(s){return $d(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Dc extends tf{}class fl extends tf{constructor(e){super(),this.elements=e}}function gw(n,e){const t=vw(e);for(const s of n.elements)t.some(o=>pr(o,s))||t.push(s);return{arrayValue:{values:t}}}class hl extends tf{constructor(e){super(),this.elements=e}}function yw(n,e){let t=vw(e);for(const s of n.elements)t=t.filter(o=>!pr(o,s));return{arrayValue:{values:t}}}class Lc extends tf{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Jv(n){return Nt(n.integerValue||n.doubleValue)}function vw(n){return Vp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function fN(n,e){return n.field.isEqual(e.field)&&function(s,o){return s instanceof fl&&o instanceof fl||s instanceof hl&&o instanceof hl?Vo(s.elements,o.elements,pr):s instanceof Lc&&o instanceof Lc?pr(s.Ie,o.Ie):s instanceof Dc&&o instanceof Dc}(n.transform,e.transform)}class hN{constructor(e,t){this.version=e,this.transformResults=t}}class Ur{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ur}static exists(e){return new Ur(void 0,e)}static updateTime(e){return new Ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class nf{}function _w(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ew(n.key,Ur.none()):new Al(n.key,n.data,Ur.none());{const t=n.data,s=Hn.empty();let o=new bt(xt.comparator);for(let l of e.fields)if(!o.has(l)){let f=t.field(l);f===null&&l.length>1&&(l=l.popLast(),f=t.field(l)),f===null?s.delete(l):s.set(l,f),o=o.add(l)}return new bs(n.key,s,new Wn(o.toArray()),Ur.none())}}function dN(n,e,t){n instanceof Al?function(o,l,f){const d=o.value.clone(),g=e0(o.fieldTransforms,l,f.transformResults);d.setAll(g),l.convertToFoundDocument(f.version,d).setHasCommittedMutations()}(n,e,t):n instanceof bs?function(o,l,f){if(!dc(o.precondition,l))return void l.convertToUnknownDocument(f.version);const d=e0(o.fieldTransforms,l,f.transformResults),g=l.data;g.setAll(ww(o)),g.setAll(d),l.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(n,e,t):function(o,l,f){l.convertToNoDocument(f.version).setHasCommittedMutations()}(0,e,t)}function rl(n,e,t,s){return n instanceof Al?function(l,f,d,g){if(!dc(l.precondition,f))return d;const y=l.value.clone(),w=t0(l.fieldTransforms,g,f);return y.setAll(w),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(n,e,t,s):n instanceof bs?function(l,f,d,g){if(!dc(l.precondition,f))return d;const y=t0(l.fieldTransforms,g,f),w=f.data;return w.setAll(ww(l)),w.setAll(y),f.convertToFoundDocument(f.version,w).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,f,d){return dc(l.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):d}(n,e,t)}function pN(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),l=mw(s.transform,o||null);l!=null&&(t===null&&(t=Hn.empty()),t.set(s.field,l))}return t||null}function Zv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Vo(s,o,(l,f)=>fN(l,f))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Al extends nf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class bs extends nf{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function ww(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function e0(n,e,t){const s=new Map;it(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],f=l.transform,d=e.data.field(l.field);s.set(l.field,cN(f,d,t[o]))}return s}function t0(n,e,t){const s=new Map;for(const o of n){const l=o.transform,f=t.data.field(o.field);s.set(o.field,uN(l,f,e))}return s}class Ew extends nf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mN extends nf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&dN(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=rl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=rl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=dw();return this.mutations.forEach(o=>{const l=e.get(o.key),f=l.overlayedDocument;let d=this.applyToLocalView(f,l.mutatedFields);d=t.has(o.key)?null:d;const g=_w(f,d);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Je.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),jt())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,(t,s)=>Zv(t,s))&&Vo(this.baseMutations,e.baseMutations,(t,s)=>Zv(t,s))}}class Bp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){it(e.mutations.length===s.length);let o=function(){return iN}();const l=e.mutations;for(let f=0;f<l.length;f++)o=o.insert(l[f].key,s[f].version);return new Bp(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,Oe;function vN(n){switch(n){case ee.OK:return ke();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return ke()}}function _N(n){if(n===void 0)return Ss("GRPC error has no .code"),ee.UNKNOWN;switch(n){case ct.OK:return ee.OK;case ct.CANCELLED:return ee.CANCELLED;case ct.UNKNOWN:return ee.UNKNOWN;case ct.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case ct.INTERNAL:return ee.INTERNAL;case ct.UNAVAILABLE:return ee.UNAVAILABLE;case ct.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case ct.NOT_FOUND:return ee.NOT_FOUND;case ct.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case ct.ABORTED:return ee.ABORTED;case ct.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case ct.DATA_LOSS:return ee.DATA_LOSS;default:return ke()}}(Oe=ct||(ct={}))[Oe.OK=0]="OK",Oe[Oe.CANCELLED=1]="CANCELLED",Oe[Oe.UNKNOWN=2]="UNKNOWN",Oe[Oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Oe[Oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Oe[Oe.NOT_FOUND=5]="NOT_FOUND",Oe[Oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Oe[Oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Oe[Oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Oe[Oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Oe[Oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Oe[Oe.ABORTED=10]="ABORTED",Oe[Oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Oe[Oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Oe[Oe.INTERNAL=13]="INTERNAL",Oe[Oe.UNAVAILABLE=14]="UNAVAILABLE",Oe[Oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Rp([4294967295,4294967295],0);class wN{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EN(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function TN(n,e){return qd(n,e.toTimestamp())}function Lo(n){return it(!!n),Je.fromTimestamp(function(t){const s=As(t);return new St(s.seconds,s.nanos)}(n))}function Tw(n,e){return Gd(n,e).canonicalString()}function Gd(n,e){const t=function(o){return new rt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function IN(n){const e=rt.fromString(n);return it(xN(e)),e}function Kd(n,e){return Tw(n.databaseId,e.path)}function SN(n){const e=IN(n);return e.length===4?rt.emptyPath():CN(e)}function AN(n){return new rt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function CN(n){return it(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function n0(n,e,t){return{name:Kd(n,e),fields:t.value.mapValue.fields}}function PN(n,e){let t;if(e instanceof Al)t={update:n0(n,e.key,e.value)};else if(e instanceof Ew)t={delete:Kd(n,e.key)};else if(e instanceof bs)t={update:n0(n,e.key,e.data),updateMask:NN(e.fieldMask)};else{if(!(e instanceof mN))return ke();t={verify:Kd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,f){const d=f.transform;if(d instanceof Dc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof fl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof hl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Lc)return{fieldPath:f.field.canonicalString(),increment:d.Ie};throw ke()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:TN(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ke()}(n,e.precondition)),t}function kN(n,e){return n&&n.length>0?(it(e!==void 0),n.map(t=>function(o,l){let f=o.updateTime?Lo(o.updateTime):Lo(l);return f.isEqual(Je.min())&&(f=Lo(l)),new hN(f,o.transformResults||[])}(t,e))):[]}function RN(n){let e=SN(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){it(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const C=Iw(T);return C instanceof Di&&sw(C)?C.getFilters():[C]}(t.where));let f=[];t.orderBy&&(f=function(T){return T.map(C=>function(V){return new bc(Po(V.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(C))}(t.orderBy));let d=null;t.limit&&(d=function(T){let C;return C=typeof T=="object"?T.value:T,Dp(C)?null:C}(t.limit));let g=null;t.startAt&&(g=function(T){const C=!!T.before,O=T.values||[];return new xc(O,C)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const C=!T.before,O=T.values||[];return new xc(O,C)}(t.endAt)),X4(e,o,f,l,d,"F",g,y)}function Iw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Po(t.unaryFilter.field);return It.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=Po(t.unaryFilter.field);return It.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Po(t.unaryFilter.field);return It.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Po(t.unaryFilter.field);return It.create(f,"!=",{nullValue:"NULL_VALUE"});default:return ke()}}(n):n.fieldFilter!==void 0?function(t){return It.create(Po(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ke()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Di.create(t.compositeFilter.filters.map(s=>Iw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ke()}}(t.compositeFilter.op))}(n):ke()}function Po(n){return xt.fromServerFormat(n.fieldPath)}function NN(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function xN(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.Tt=e}}function ON(n){const e=RN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(){this.Tn=new LN}addToCollectionParentIndex(e,t){return this.Tn.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(Oi.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(Oi.min())}updateCollectionGroup(e,t,s){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class LN{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new bt(rt.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new bt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Sw=41943040;class rn{static withCacheSize(e){return new rn(e,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(Sw,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new jo(0)}static Un(){return new jo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="LruGarbageCollector",MN=1048576;function s0([n,e],[t,s]){const o=ze(n,t);return o===0?ze(e,s):o}class VN{constructor(e){this.Hn=e,this.buffer=new bt(s0),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();s0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FN{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){fe(i0,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Sl(t)?fe(i0,"Ignoring IndexedDB error during garbage collection: ",t):await xp(t)}await this.er(3e5)})}}class UN{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return G.resolve(bp.ae);const s=new VN(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(r0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),r0):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,l,f,d,g,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,f=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(y=Date.now(),Co()<=Re.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-w}ms
	Determined least recently used ${o} in `+(d-f)+`ms
	Removed ${l} targets in `+(g-d)+`ms
	Removed ${T} documents in `+(y-g)+`ms
Total Duration: ${y-w}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function zN(n,e){return new UN(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.changes=new xs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Bn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?G.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&rl(s.mutation,o,Wn.empty(),St.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,jt()).next(()=>s))}getLocalViewOfDocuments(e,t,s=jt()){const o=ps();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let f=Zu();return l.forEach((d,g)=>{f=f.insert(d,g.overlayedDocument)}),f}))}getOverlayedDocuments(e,t){const s=ps();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,jt()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((f,d)=>{t.set(f,d)})})}computeViews(e,t,s,o){let l=Oc();const f=nl(),d=function(){return nl()}();return t.forEach((g,y)=>{const w=s.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof bs)?l=l.insert(y.key,y):w!==void 0?(f.set(y.key,w.mutation.getFieldMask()),rl(w.mutation,y,w.mutation.getFieldMask(),St.now())):f.set(y.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((y,w)=>f.set(y,w)),t.forEach((y,w)=>{var T;return d.set(y,new BN(w,(T=f.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=nl();let o=new on((f,d)=>f-d),l=jt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(f=>{for(const d of f)d.keys().forEach(g=>{const y=t.get(g);if(y===null)return;let w=s.get(g)||Wn.empty();w=d.applyToLocalView(y,w),s.set(g,w);const T=(o.get(d.batchId)||jt()).add(g);o=o.insert(d.batchId,T)})}).next(()=>{const f=[],d=o.getReverseIterator();for(;d.hasNext();){const g=d.getNext(),y=g.key,w=g.value,T=dw();w.forEach(C=>{if(!l.has(C)){const O=_w(t.get(C),s.get(C));O!==null&&T.set(C,O),l=l.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(e,y,T))}return G.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(f){return Ie.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Z4(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const f=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):G.resolve(ps());let d=ul,g=l;return f.next(y=>G.forEach(y,(w,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(w)?G.resolve():this.remoteDocumentCache.getEntry(e,w).next(C=>{g=g.insert(w,C)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,g,y,jt())).next(w=>({batchId:d,changes:hw(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ie(t)).next(s=>{let o=Zu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let f=Zu();return this.indexManager.getCollectionParents(e,l).next(d=>G.forEach(d,g=>{const y=function(T,C){return new ef(C,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(w=>{w.forEach((T,C)=>{f=f.insert(T,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(f=>(l=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(f=>{l.forEach((g,y)=>{const w=y.getKey();f.get(w)===null&&(f=f.insert(w,Bn.newInvalidDocument(w)))});let d=Zu();return f.forEach((g,y)=>{const w=l.get(g);w!==void 0&&rl(w.mutation,y,Wn.empty(),St.now()),zp(t,y)&&(d=d.insert(g,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return G.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Lo(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:ON(o.bundledQuery),readTime:Lo(o.readTime)}}(t)),G.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(){this.overlays=new on(Ie.comparator),this.Rr=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ps();return G.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.Et(e,t,l)}),G.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(s)),G.resolve()}getOverlaysForCollection(e,t,s){const o=ps(),l=t.length+1,f=new Ie(t.child("")),d=this.overlays.getIteratorFrom(f);for(;d.hasNext();){const g=d.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new on((y,w)=>y-w);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let w=l.get(y.largestBatchId);w===null&&(w=ps(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const d=ps(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,w)=>d.set(y,w)),!(d.size()>=o)););return G.resolve(d)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new yN(t,s));let l=this.Rr.get(t);l===void 0&&(l=jt(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(){this.sessionToken=dr.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.Vr=new bt(Et.mr),this.gr=new bt(Et.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Et(e,t))}br(e,t){e.forEach(s=>this.removeReference(s,t))}Sr(e){const t=new Ie(new rt([])),s=new Et(t,e),o=new Et(t,e+1),l=[];return this.gr.forEachInRange([s,o],f=>{this.wr(f),l.push(f.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ie(new rt([])),s=new Et(t,e),o=new Et(t,e+1);let l=jt();return this.gr.forEachInRange([s,o],f=>{l=l.add(f.key)}),l}containsKey(e){const t=new Et(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ie.comparator(e.key,t.key)||ze(e.Cr,t.Cr)}static pr(e,t){return ze(e.Cr,t.Cr)||Ie.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new bt(Et.mr)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new gN(l,t,s,o);this.mutationQueue.push(f);for(const d of o)this.Mr=this.Mr.add(new Et(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return G.resolve(f)}lookupMutationBatch(e,t){return G.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),l=o<0?0:o;return G.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?Op:this.Fr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,o],f=>{const d=this.Or(f.Cr);l.push(d)}),G.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new bt(ze);return t.forEach(o=>{const l=new Et(o,0),f=new Et(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,f],d=>{s=s.add(d.Cr)})}),G.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;Ie.isDocumentKey(l)||(l=l.child(""));const f=new Et(new Ie(l),0);let d=new bt(ze);return this.Mr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(d=d.add(g.Cr)),!0)},f),G.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){it(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return G.forEach(t.mutations,o=>{const l=new Et(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Et(t,0),o=this.Mr.firstAfterOrEqual(s);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.kr=e,this.docs=function(){return new on(Ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,f=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:f}),this.size+=f-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return G.resolve(s?s.document.mutableCopy():Bn.newInvalidDocument(t))}getEntries(e,t){let s=Oc();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Bn.newInvalidDocument(o))}),G.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Oc();const f=t.path,d=new Ie(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(d);for(;g.hasNext();){const{key:y,value:{document:w}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||k4(P4(w),s)<=0||(o.has(w.key)||zp(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return G.resolve(l)}getAllFromCollectionGroup(e,t,s,o){ke()}qr(e,t){return G.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new QN(this)}getSize(e){return G.resolve(this.size)}}class QN extends jN{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),G.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.persistence=e,this.Qr=new xs(t=>Fp(t),Up),this.lastRemoteSnapshotVersion=Je.min(),this.highestTargetId=0,this.$r=0,this.Kr=new $p,this.targetCount=0,this.Ur=jo.Kn()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),G.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new jo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.zn(t),G.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.Sr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Qr.forEach((f,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(f),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),G.waitFor(l).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return G.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),G.resolve()}removeMatchingKeys(e,t,s){this.Kr.br(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(f=>{l.push(o.markPotentiallyOrphaned(e,f))}),G.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.Sr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return G.resolve(s)}containsKey(e,t){return G.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new bp(0),this.zr=!1,this.zr=!0,this.jr=new qN,this.referenceDelegate=e(this),this.Hr=new YN(this),this.indexManager=new DN,this.remoteDocumentCache=function(o){return new KN(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new bN(t),this.Yr=new HN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new WN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new GN(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const o=new XN(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(l=>this.referenceDelegate.Xr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}ei(e,t){return G.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class XN extends N4{constructor(e){super(),this.currentSequenceNumber=e}}class Hp{constructor(e){this.persistence=e,this.ti=new $p,this.ni=null}static ri(e){return new Hp(e)}get ii(){if(this.ni)return this.ni;throw ke()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),G.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),G.resolve()}removeTarget(e,t){this.ti.Sr(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ii.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ii,s=>{const o=Ie.fromPath(s);return this.si(e,o).next(l=>{l||t.removeEntry(o,Je.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return G.or([()=>G.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Mc{constructor(e,t){this.persistence=e,this.oi=new xs(s=>O4(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=zN(this,t)}static ri(e,t){return new Mc(e,t)}Zr(){}Xr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return G.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(l=>l?G.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.qr(e,f=>this.ar(e,f,t).next(d=>{d||(s++,l.removeEntry(f,Je.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),G.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),G.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fc(e.data.value)),t}ar(e,t,s){return G.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return G.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=jt(),o=jt();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Wp(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return TA()?8:x4($t())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.rs(e,t).next(f=>{l.result=f}).next(()=>{if(!l.result)return this.ss(e,t,o,s).next(f=>{l.result=f})}).next(()=>{if(l.result)return;const f=new JN;return this._s(e,t,f).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,f,d.size)})}).next(()=>l.result)}us(e,t,s,o){return s.documentReadCount<this.es?(Co()<=Re.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Ga(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),G.resolve()):(Co()<=Re.DEBUG&&fe("QueryEngine","Query:",Ga(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Co()<=Re.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Ga(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gs(t))):G.resolve())}rs(e,t){if(Xv(t))return G.resolve(null);let s=gs(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Wd(t,null,"F"),s=gs(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const f=jt(...l);return this.ns.getDocuments(e,f).next(d=>this.indexManager.getMinOffset(e,s).next(g=>{const y=this.cs(t,d);return this.ls(t,y,f,g.readTime)?this.rs(e,Wd(t,null,"F")):this.hs(e,y,t,g)}))})))}ss(e,t,s,o){return Xv(t)||o.isEqual(Je.min())?G.resolve(null):this.ns.getDocuments(e,s).next(l=>{const f=this.cs(t,l);return this.ls(t,f,s,o)?G.resolve(null):(Co()<=Re.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ga(t)),this.hs(e,f,t,C4(o,ul)).next(d=>d))})}cs(e,t){let s=new bt(tN(e));return t.forEach((o,l)=>{zp(e,l)&&(s=s.add(l))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}_s(e,t,s){return Co()<=Re.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Ga(t)),this.ns.getDocumentsMatchingQuery(e,t,Oi.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(f=>{l=l.insert(f.key,f)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="LocalStore";class tx{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new on(ze),this.Is=new xs(l=>Fp(l),Up),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $N(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function nx(n,e,t,s){return new tx(n,e,t,s)}async function Cw(n,e){const t=qe(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const f=[],d=[];let g=jt();for(const y of o){f.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}for(const y of l){d.push(y.batchId);for(const w of y.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(y=>({Rs:y,removedBatchIds:f,addedBatchIds:d}))})})}function rx(n,e){const t=qe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,g,y,w){const T=y.batch,C=T.keys();let O=G.resolve();return C.forEach(V=>{O=O.next(()=>w.getEntry(g,V)).next($=>{const U=y.docVersions.get(V);it(U!==null),$.version.compareTo(U)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),w.addEntry($)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(g,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let g=jt();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(g=g.add(d.batch.mutations[y].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function ix(n){const e=qe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function sx(n,e){const t=qe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Op),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class o0{constructor(){this.activeTargetIds=aN()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ss(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ox{constructor(){this.ho=new o0,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new o0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="ConnectivityMonitor";class l0{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){fe(a0,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){fe(a0,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec=null;function Qd(){return ec===null?ec=function(){return 268435456+Math.round(2147483648*Math.random())}():ec++,"0x"+ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="RestConnection",lx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ux{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Rc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}bo(e,t,s,o,l){const f=Qd(),d=this.So(e,t.toUriEncodedString());fe(ad,`Sending RPC '${e}' ${f}:`,d,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,l),this.vo(e,d,g,s).then(y=>(fe(ad,`Received RPC '${e}' ${f}: `,y),y),y=>{throw Zc(ad,`RPC '${e}' ${f} failed with error: `,y,"url: ",d,"request:",s),y})}Co(e,t,s,o,l,f){return this.bo(e,t,s,o,l)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ko}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}So(e,t){const s=lx[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class fx extends ux{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const l=Qd();return new Promise((f,d)=>{const g=new j1;g.setWithCredentials(!0),g.listenOnce(B1.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case cc.NO_ERROR:const w=g.getResponseJson();fe(Ut,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),f(w);break;case cc.TIMEOUT:fe(Ut,`RPC '${e}' ${l} timed out`),d(new _e(ee.DEADLINE_EXCEEDED,"Request time out"));break;case cc.HTTP_ERROR:const T=g.getStatus();if(fe(Ut,`RPC '${e}' ${l} failed with status:`,T,"response text:",g.getResponseText()),T>0){let C=g.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C==null?void 0:C.error;if(O&&O.status&&O.message){const V=function(U){const H=U.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(H)>=0?H:ee.UNKNOWN}(O.status);d(new _e(V,O.message))}else d(new _e(ee.UNKNOWN,"Server responded with status "+g.getStatus()))}else d(new _e(ee.UNAVAILABLE,"Connection failed."));break;default:ke()}}finally{fe(Ut,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);fe(Ut,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",y,s,15)})}Wo(e,t,s){const o=Qd(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=W1(),d=H1(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=l.join("");fe(Ut,`Creating RPC '${e}' stream ${o}: ${w}`,g);const T=f.createWebChannel(w,g);let C=!1,O=!1;const V=new cx({Fo:U=>{O?fe(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(C||(fe(Ut,`Opening RPC '${e}' stream ${o} transport.`),T.open(),C=!0),fe(Ut,`RPC '${e}' stream ${o} sending:`,U),T.send(U))},Mo:()=>T.close()}),$=(U,H,J)=>{U.listen(H,K=>{try{J(K)}catch(ae){setTimeout(()=>{throw ae},0)}})};return $(T,Qa.EventType.OPEN,()=>{O||(fe(Ut,`RPC '${e}' stream ${o} transport opened.`),V.Qo())}),$(T,Qa.EventType.CLOSE,()=>{O||(O=!0,fe(Ut,`RPC '${e}' stream ${o} transport closed`),V.Ko())}),$(T,Qa.EventType.ERROR,U=>{O||(O=!0,Zc(Ut,`RPC '${e}' stream ${o} transport errored:`,U),V.Ko(new _e(ee.UNAVAILABLE,"The operation could not be completed")))}),$(T,Qa.EventType.MESSAGE,U=>{var H;if(!O){const J=U.data[0];it(!!J);const K=J,ae=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(ae){fe(Ut,`RPC '${e}' stream ${o} received error:`,ae);const ve=ae.status;let Te=function(A){const R=ct[A];if(R!==void 0)return _N(R)}(ve),N=ae.message;Te===void 0&&(Te=ee.INTERNAL,N="Unknown error status: "+ve+" with message "+ae.message),O=!0,V.Ko(new _e(Te,N)),T.close()}else fe(Ut,`RPC '${e}' stream ${o} received:`,J),V.Uo(J)}}),$(d,$1.STAT_EVENT,U=>{U.stat===zd.PROXY?fe(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===zd.NOPROXY&&fe(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){return new wN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="PersistentStream";class hx{constructor(e,t,s,o,l,f,d,g){this.Ti=e,this.n_=s,this.r_=o,this.connection=l,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=d,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Pw(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Ss(t.toString()),Ss("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new _e(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return fe(u0,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(fe(u0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dx extends hx{constructor(e,t,s,o,l,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,f),this.serializer=l}get b_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.b_&&this.S_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return it(!!e.streamToken),this.lastStreamToken=e.streamToken,it(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){it(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=kN(e.writeResults,e.commitTime),s=Lo(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=AN(this.serializer),this.I_(e)}S_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>PN(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{}class mx extends px{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new _e(ee.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,f])=>this.connection.bo(e,Gd(t,s),o,l,f)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(ee.UNKNOWN,l.toString())})}Co(e,t,s,o,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,d])=>this.connection.Co(e,Gd(t,s),o,f,d,l)).catch(f=>{throw f.name==="FirebaseError"?(f.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new _e(ee.UNKNOWN,f.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class gx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ss(t),this.N_=!1):fe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="RemoteStore";class yx{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(f=>{s.enqueueAndForget(async()=>{kl(this)&&(fe(Cl,"Restarting streams for network reachability change."),await async function(g){const y=qe(g);y.W_.add(4),await Pl(y),y.j_.set("Unknown"),y.W_.delete(4),await sf(y)}(this))})}),this.j_=new gx(s,o)}}async function sf(n){if(kl(n))for(const e of n.G_)await e(!0)}async function Pl(n){for(const e of n.G_)await e(!1)}function kl(n){return qe(n).W_.size===0}async function kw(n,e,t){if(!Sl(e))throw e;n.W_.add(1),await Pl(n),n.j_.set("Offline"),t||(t=()=>ix(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe(Cl,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await sf(n)})}function Rw(n,e){return e().catch(t=>kw(n,t,e))}async function of(n){const e=qe(n),t=Li(e);let s=e.K_.length>0?e.K_[e.K_.length-1].batchId:Op;for(;vx(e);)try{const o=await sx(e.localStore,s);if(o===null){e.K_.length===0&&t.P_();break}s=o.batchId,_x(e,o)}catch(o){await kw(e,o)}Nw(e)&&xw(e)}function vx(n){return kl(n)&&n.K_.length<10}function _x(n,e){n.K_.push(e);const t=Li(n);t.c_()&&t.b_&&t.S_(e.mutations)}function Nw(n){return kl(n)&&!Li(n).u_()&&n.K_.length>0}function xw(n){Li(n).start()}async function wx(n){Li(n).C_()}async function Ex(n){const e=Li(n);for(const t of n.K_)e.S_(t.mutations)}async function Tx(n,e,t){const s=n.K_.shift(),o=Bp.from(s,e,t);await Rw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await of(n)}async function Ix(n,e){e&&Li(n).b_&&await async function(s,o){if(function(f){return vN(f)&&f!==ee.ABORTED}(o.code)){const l=s.K_.shift();Li(s).h_(),await Rw(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await of(s)}}(n,e),Nw(n)&&xw(n)}async function c0(n,e){const t=qe(n);t.asyncQueue.verifyOperationInProgress(),fe(Cl,"RemoteStore received new credentials");const s=kl(t);t.W_.add(3),await Pl(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await sf(t)}async function Sx(n,e){const t=qe(n);e?(t.W_.delete(2),await sf(t)):e||(t.W_.add(2),await Pl(t),t.j_.set("Unknown"))}function Li(n){return n.Y_||(n.Y_=function(t,s,o){const l=qe(t);return l.M_(),new dx(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:wx.bind(null,n),Lo:Ix.bind(null,n),D_:Ex.bind(null,n),v_:Tx.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await of(n)):(await n.Y_.stop(),n.K_.length>0&&(fe(Cl,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const f=Date.now()+s,d=new qp(e,t,f,o,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bw(n,e){if(Ss("AsyncQueue",`${e}: ${n}`),Sl(n))return new _e(ee.UNAVAILABLE,`${e}: ${n}`);throw n}class Ax{constructor(){this.queries=f0(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=qe(t),l=o.queries;o.queries=f0(),l.forEach((f,d)=>{for(const g of d.ta)g.onError(s)})})(this,new _e(ee.ABORTED,"Firestore shutting down"))}}function f0(){return new xs(n=>cw(n),uw)}function Cx(n){n.ia.forEach(e=>{e.next()})}var h0,d0;(d0=h0||(h0={}))._a="default",d0.Cache="cache";const Px="SyncEngine";class kx{constructor(e,t,s,o,l,f){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new xs(d=>cw(d),uw),this.qa=new Map,this.Qa=new Set,this.$a=new on(Ie.comparator),this.Ka=new Map,this.Ua=new $p,this.Wa={},this.Ga=new Map,this.za=jo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Rx(n,e,t){const s=Ox(n);try{const o=await function(f,d){const g=qe(f),y=St.now(),w=d.reduce((O,V)=>O.add(V.key),jt());let T,C;return g.persistence.runTransaction("Locally write mutations","readwrite",O=>{let V=Oc(),$=jt();return g.ds.getEntries(O,w).next(U=>{V=U,V.forEach((H,J)=>{J.isValidDocument()||($=$.add(H))})}).next(()=>g.localDocuments.getOverlayedDocuments(O,V)).next(U=>{T=U;const H=[];for(const J of d){const K=pN(J,T.get(J.key).overlayedDocument);K!=null&&H.push(new bs(J.key,K,nw(K.value.mapValue),Ur.exists(!0)))}return g.mutationQueue.addMutationBatch(O,y,H,d)}).next(U=>{C=U;const H=U.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(O,U.batchId,H)})}).then(()=>({batchId:C.batchId,changes:hw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(f,d,g){let y=f.Wa[f.currentUser.toKey()];y||(y=new on(ze)),y=y.insert(d,g),f.Wa[f.currentUser.toKey()]=y}(s,o.batchId,t),await af(s,o.changes),await of(s.remoteStore)}catch(o){const l=bw(o,"Failed to persist write");t.reject(l)}}function p0(n,e,t){const s=qe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((l,f)=>{const d=f.view.sa(e);d.snapshot&&o.push(d.snapshot)}),function(f,d){const g=qe(f);g.onlineState=d;let y=!1;g.queries.forEach((w,T)=>{for(const C of T.ta)C.sa(d)&&(y=!0)}),y&&Cx(g)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Nx(n,e){const t=qe(n),s=e.batch.batchId;try{const o=await rx(t.localStore,e);Dw(t,s,null),Ow(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await af(t,o)}catch(o){await xp(o)}}async function xx(n,e,t){const s=qe(n);try{const o=await function(f,d){const g=qe(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return g.mutationQueue.lookupMutationBatch(y,d).next(T=>(it(T!==null),w=T.keys(),g.mutationQueue.removeMutationBatch(y,T))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,w,d)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>g.localDocuments.getDocuments(y,w))})}(s.localStore,e);Dw(s,e,t),Ow(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await af(s,o)}catch(o){await xp(o)}}function Ow(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function Dw(n,e,t){const s=qe(n);let o=s.Wa[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}async function af(n,e,t){const s=qe(n),o=[],l=[],f=[];s.ka.isEmpty()||(s.ka.forEach((d,g)=>{f.push(s.Ha(g,e,t).then(y=>{var w;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(w=void 0)===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Wp.Yi(g.targetId,y);l.push(T)}}))}),await Promise.all(f),s.La.p_(o),await async function(g,y){const w=qe(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>G.forEach(y,C=>G.forEach(C.Hi,O=>w.persistence.referenceDelegate.addReference(T,C.targetId,O)).next(()=>G.forEach(C.Ji,O=>w.persistence.referenceDelegate.removeReference(T,C.targetId,O)))))}catch(T){if(!Sl(T))throw T;fe(ex,"Failed to update sequence numbers: "+T)}for(const T of y){const C=T.targetId;if(!T.fromCache){const O=w.Ts.get(C),V=O.snapshotVersion,$=O.withLastLimboFreeSnapshotVersion(V);w.Ts=w.Ts.insert(C,$)}}}(s.localStore,l))}async function bx(n,e){const t=qe(n);if(!t.currentUser.isEqual(e)){fe(Px,"User change. New user:",e.toKey());const s=await Cw(t.localStore,e);t.currentUser=e,function(l,f){l.Ga.forEach(d=>{d.forEach(g=>{g.reject(new _e(ee.CANCELLED,f))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await af(t,s.Rs)}}function Ox(n){const e=qe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Nx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xx.bind(null,e),e}class Vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return nx(this.persistence,new ZN,e.initialUser,this.serializer)}Xa(e){return new Aw(Hp.ri,this.serializer)}Za(e){return new ox}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vc.provider={build:()=>new Vc};class Dx extends Vc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){it(this.persistence.referenceDelegate instanceof Mc);const s=this.persistence.referenceDelegate.garbageCollector;return new FN(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new Aw(s=>Mc.ri(s,t),this.serializer)}}class Yd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>p0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bx.bind(null,this.syncEngine),await Sx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ax}()}createDatastore(e){const t=rf(e.databaseInfo.databaseId),s=function(l){return new fx(l)}(e.databaseInfo);return function(l,f,d,g){return new mx(l,f,d,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,f,d){return new yx(s,o,l,f,d)}(this.localStore,this.datastore,e.asyncQueue,t=>p0(this.syncEngine,t,0),function(){return l0.D()?new l0:new ax}())}createSyncEngine(e,t){return function(o,l,f,d,g,y,w){const T=new kx(o,l,f,d,g,y);return w&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=qe(o);fe(Cl,"RemoteStore shutting down."),l.W_.add(5),await Pl(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Yd.provider={build:()=>new Yd};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="FirestoreClient";class Lx{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=G1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async f=>{fe(Mi,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(fe(Mi,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=bw(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function ud(n,e){n.asyncQueue.verifyOperationInProgress(),fe(Mi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Cw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function m0(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Mx(n);fe(Mi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>c0(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,o)=>c0(e.remoteStore,o)),n._onlineComponents=e}async function Mx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe(Mi,"Using user provided OfflineComponentProvider");try{await ud(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Zc("Error using user provided cache. Falling back to memory cache: "+t),await ud(n,new Vc)}}else fe(Mi,"Using default OfflineComponentProvider"),await ud(n,new Dx(void 0));return n._offlineComponents}async function Vx(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe(Mi,"Using user provided OnlineComponentProvider"),await m0(n,n._uninitializedComponentsProvider._online)):(fe(Mi,"Using default OnlineComponentProvider"),await m0(n,new Yd))),n._onlineComponents}function Fx(n){return Vx(n).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n,e,t){if(!t)throw new _e(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ux(n,e,t,s){if(e===!0&&s===!0)throw new _e(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function y0(n){if(!Ie.isDocumentKey(n))throw new _e(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function v0(n){if(Ie.isDocumentKey(n))throw new _e(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ke()}function Vw(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gp(n);throw new _e(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw="firestore.googleapis.com",_0=!0;class w0{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Fw,this.ssl=_0}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:_0;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Sw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MN)throw new _e(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ux("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new w0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new w0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new v4;switch(s.type){case"firstParty":return new T4(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new _e(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=g0.get(t);s&&(fe("ComponentProvider","Removing Datastore"),g0.delete(t),s.terminate())}(this),Promise.resolve()}}function zx(n,e,t,s={}){var o;const l=(n=Vw(n,lf))._getSettings(),f=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==Fw&&l.host!==d&&Zc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:s});if(!bi(g,f)&&(n._setSettings(g),s.mockUserToken)){let y,w;if(typeof s.mockUserToken=="string")y=s.mockUserToken,w=zt.MOCK_USER;else{y=gA(s.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new _e(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new zt(T)}n._authCredentials=new _4(new q1(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Kp(this.firestore,e,this._query)}}class zr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zr(this.firestore,e,this._key)}}class Pi extends Kp{constructor(e,t,s){super(e,t,J4(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zr(this.firestore,null,new Ie(e))}withConverter(e){return new Pi(this.firestore,e,this._path)}}function jx(n,e,...t){if(n=Kt(n),Mw("collection","path",e),n instanceof lf){const s=rt.fromString(e,...t);return v0(s),new Pi(n,null,s)}{if(!(n instanceof zr||n instanceof Pi))throw new _e(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(rt.fromString(e,...t));return v0(s),new Pi(n.firestore,null,s)}}function Bx(n,e,...t){if(n=Kt(n),arguments.length===1&&(e=G1.newId()),Mw("doc","path",e),n instanceof lf){const s=rt.fromString(e,...t);return y0(s),new zr(n,null,new Ie(s))}{if(!(n instanceof zr||n instanceof Pi))throw new _e(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(rt.fromString(e,...t));return y0(s),new zr(n.firestore,n instanceof Pi?n.converter:null,new Ie(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="AsyncQueue";class T0{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Pw(this,"async_queue_retry"),this.bu=()=>{const s=ld();s&&fe(E0,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const t=ld();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=ld();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ms;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Sl(e))throw e;fe(E0,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(f){let d=f.message||"";return f.stack&&(d=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),d}(s);throw Ss("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.Su=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=qp.createAndSchedule(this,e,t,s,l=>this.Fu(l));return this.fu.push(o),o}Du(){this.gu&&ke()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Uw extends lf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new T0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new T0(e),this._firestoreClient=void 0,await e}}}function $x(n,e){const t=typeof n=="object"?n:gp(),s=typeof n=="string"?n:Rc,o=Rs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=pA("firestore");l&&zx(o,...l)}return o}function Hx(n){if(n._terminated)throw new _e(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wx(n),n._firestoreClient}function Wx(n){var e,t,s;const o=n._freezeSettings(),l=function(d,g,y,w){return new V4(d,g,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Lw(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new Lx(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const g=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(g),_online:g}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dl(dr.fromBase64String(e))}catch(t){throw new _e(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dl(dr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=/^__.*__$/;class Gx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Al(e,this.data,t,this.fieldTransforms)}}function Hw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke()}}class Qp{constructor(e,t,s,o,l,f){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Qp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Fc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Hw(this.Lu)&&qx.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Kx{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||rf(e)}ju(e,t,s,o=!1){return new Qp({Lu:e,methodName:t,zu:s,path:xt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qx(n){const e=n._freezeSettings(),t=rf(n._databaseId);return new Kx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yx(n,e,t,s,o,l={}){const f=n.ju(l.merge||l.mergeFields?2:0,e,t,o);Kw("Data must be an object, but it was:",f,s);const d=qw(s,f);let g,y;if(l.merge)g=new Wn(f.fieldMask),y=f.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const C=Xx(e,T,t);if(!f.contains(C))throw new _e(ee.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);e3(w,C)||w.push(C)}g=new Wn(w),y=f.fieldTransforms.filter(T=>g.covers(T.field))}else g=null,y=f.fieldTransforms;return new Gx(new Hn(d),g,y)}function Ww(n,e){if(Gw(n=Kt(n)))return Kw("Unsupported field value:",e,n),qw(n,e);if(n instanceof jw)return function(s,o){if(!Hw(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const l=[];let f=0;for(const d of s){let g=Ww(d,o.Uu(f));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),f++}return{arrayValue:{values:l}}}(n,e)}return function(s,o){if((s=Kt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return lN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=St.fromDate(s);return{timestampValue:qd(o.serializer,l)}}if(s instanceof St){const l=new St(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:qd(o.serializer,l)}}if(s instanceof Bw)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof dl)return{bytesValue:EN(o.serializer,s._byteString)};if(s instanceof zr){const l=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(l))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Tw(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof $w)return function(f,d){return{mapValue:{fields:{[ew]:{stringValue:tw},[jd]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw d.Wu("VectorValues must only contain numeric values.");return jp(d.serializer,y)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Gp(s)}`)}(n,e)}function qw(n,e){const t={};return Q1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qo(n,(s,o)=>{const l=Ww(o,e.qu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function Gw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof Bw||n instanceof dl||n instanceof zr||n instanceof jw||n instanceof $w)}function Kw(n,e,t){if(!Gw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Gp(t);throw s==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+s)}}function Xx(n,e,t){if((e=Kt(e))instanceof zw)return e._internalPath;if(typeof e=="string")return Zx(n,e);throw Fc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Jx=new RegExp("[~\\*/\\[\\]]");function Zx(n,e,t){if(e.search(Jx)>=0)throw Fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zw(...e.split("."))._internalPath}catch{throw Fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Fc(n,e,t,s,o){const l=s&&!s.isEmpty(),f=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let g="";return(l||f)&&(g+=" (found",l&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new _e(ee.INVALID_ARGUMENT,d+n+g)}function e3(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(n,e,t){let s;return s=n?n.toFirestore(e):e,s}function n3(n,e){const t=Vw(n.firestore,Uw),s=Bx(n),o=t3(n.converter,e);return r3(t,[Yx(Qx(n.firestore),"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,Ur.exists(!1))]).then(()=>s)}function r3(n,e){return function(s,o){const l=new ms;return s.asyncQueue.enqueueAndForget(async()=>Rx(await Fx(s),o,l)),l.promise}(Hx(n),e)}(function(e,t=!0){(function(o){Ko=o})(qo),hr(new qn("firestore",(s,{instanceIdentifier:o,options:l})=>{const f=s.getProvider("app").getImmediate(),d=new Uw(new w4(s.getProvider("auth-internal")),new I4(f,s.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new _e(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nc(y.options.projectId,w)}(f,o),f);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Cn(Vv,Fv,e),Cn(Vv,Fv,"esm2017")})();const i3={apiKey:"AIzaSyD3vjuReCl6F2t2ZZoMacuvl3IJx1hloWk",authDomain:"net-clone-1223d.firebaseapp.com",projectId:"net-clone-1223d",storageBucket:"net-clone-1223d.firebasestorage.app",messagingSenderId:"1090168500049",appId:"1:1090168500049:web:87365de0a561715a7b2d70",measurementId:"G-9YTG2ZDBBZ"},Yp=L_(i3);sk(Yp);const Xp=g4(Yp),s3=$x(Yp),o3=async(n,e,t)=>{try{const o=(await tR(Xp,e,t)).user;await n3(jx(s3,"user"),{uid:o.uid,name:n,authProvider:"local",email:e})}catch(s){console.log(s),alert(s)}},a3=()=>{sR(Xp)},l3="/assets/net_logo-CRpT-0gW.jpg",u3=()=>{const n=W.useRef(),e=W.useRef(),[t,s]=W.useState(!1);return Le("div",{className:"naves",ref:n,children:[Le("div",{className:"lefts",children:[re("div",{className:"logo",children:re("img",{src:l3,alt:""})}),re("div",{className:"list",children:re(Tt,{icon:S2,onClick:()=>s(o=>o!==!0)})}),re("div",{className:`${t?"lis":"li"}`,children:Le("ul",{ref:e,children:[re("li",{children:"Home"}),re("li",{children:"TV Shows"}),re("li",{children:"New & Popular"}),re("li",{children:"My List"}),re("li",{children:"Browse By Language"})]})})]}),Le("div",{className:"rights",children:[Le("div",{className:"rights-right",children:[re(Tt,{icon:x2}),re("p",{children:"Children"}),re(Tt,{icon:k2})]}),Le("div",{className:"user",children:[Le(Wo,{to:"./login",children:[" ",re(Tt,{icon:A2,className:"use"})]}),re(Tt,{icon:P2}),re("p",{className:"sm",onClick:()=>{a3()},children:"Sign out of Netflix"})]})]})]})},c3="/assets/net_back-Dq7MXU-d.jpg",f3="/assets/Net_Original-DfBrwctZ.jpg";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const h3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},d3={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},p3={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},m3={prefix:"fab",iconName:"git",icon:[512,512,[],"f1d3","M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"]},g3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},y3={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},v3={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},_3=()=>Le("div",{className:"footer",children:[Le("div",{className:"footer-icons",children:[re(Tt,{icon:p3,className:"fa"}),re(Tt,{icon:v3,className:"fa"}),re(Tt,{icon:d3,className:"fa"}),re(Tt,{icon:y3,className:"fa"}),re(Tt,{icon:h3,className:"fa"}),re(Tt,{icon:g3,className:"fa"}),re(Tt,{icon:m3,className:"fa"})]}),Le("ul",{children:[re("li",{children:"Audio Description"}),re("li",{children:"Help Center"}),re("li",{children:"Gift Cards"}),re("li",{children:"Media Center"}),re("li",{children:"Investor"}),re("li",{children:"Jobs"}),re("li",{children:"Terms Of Use"}),re("li",{children:"Privacy"}),re("li",{children:"Legal Notices"}),re("li",{children:"Cockie Preferences"}),re("li",{children:"Corporate Information"}),re("li",{children:"Contact Us"})]}),Le("p",{className:"copy-right",children:[re(Tt,{icon:b2}),"1997-2025 Netflix, Inc."]})]}),w3=()=>Le("div",{className:"home",children:[re(u3,{}),Le("div",{className:"imm",children:[re("img",{src:c3,alt:""}),Le("div",{className:"hero",children:[re("img",{src:f3,alt:""}),Le("div",{className:"title",children:[re("h3",{children:"THE"}),re("h1",{children:"PROTECTOR"})]}),re("p",{children:"Discovering his ties to secret ancient order, a young man living in  modern Istambul embarking on a qusest to save the city from an immoral enemies."}),Le("div",{className:"buts",children:[Le("button",{className:"play",children:[re(Tt,{icon:R2}),"Play"]}),Le("button",{className:"inf",children:[re(Tt,{icon:I2,className:"i"}),"More info"]})]})]})]}),Le("div",{className:"cards",children:[re(Ku,{title:"Now Playing",category:"now_playing"}),re(Ku,{title:"Popular",category:"popular"}),re(Ku,{title:"Top Rating",category:"top_rated"}),re(Ku,{title:"Upcoming",category:"upcoming"}),re(_3,{})]})]}),E3=()=>{const{id:n}=lS(),[e,t]=W.useState({name:"",key:"",published_at:"",type:""}),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTgxOWUyNDYyNGU1ODJiNThkMTMxYzYyODZmNWVjNyIsIm5iZiI6MTc0MDAzMjY3Ni4xMjk5OTk5LCJzdWIiOiI2N2I2Y2FhNDlmN2ZiMmE3NDM2NTU5OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NUW52nObisprbLUL98f8IHJD7lQdflFUcBZJqyIyxOY"}};return W.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${n}/videos?language=en-US`,s).then(o=>o.json()).then(o=>t(o.results[0])).catch(o=>console.error(o))},[]),Le("div",{className:"player",children:[re(Wo,{to:"/",children:Le("h2",{children:[" ",re(Tt,{icon:C2})]})}),re("iframe",{title:"trailers",src:`https://youtube.com/embed/${e.key}`,frameBorder:"0",height:"90%",width:"90%",allowFullScreen:!0}),Le("div",{className:"player-info",children:[re("p",{children:e.published_at.slice(0,10)}),re("p",{children:e.name}),re("p",{children:e.type})]})]})},T3="/assets/net_back-Dq7MXU-d.jpg",I3=()=>{const[n,e]=W.useState("Login"),[t,s]=W.useState(""),[o,l]=W.useState(""),[f,d]=W.useState("");return Le("div",{className:"login",children:[re("img",{src:T3,alt:""}),Le("div",{className:"log",children:[re("div",{className:"backs",children:Le(Wo,{to:"/",className:"back",children:["   ",re("h2",{children:"X"})," "]})}),Le("div",{styleName:"form",children:[re("h1",{children:n}),Le("form",{action:"",children:[n==="Sign up"?re("input",{type:"text",value:t,onChange:y=>{s(y.target.value)},placeholder:"Enter Name",required:!0}):re(sA,{}),re("input",{type:"text",value:o,onChange:y=>{l(y.target.value)},placeholder:"Enter Email",required:!0}),re("input",{type:"password",value:f,onChange:y=>{d(y.target.value)},placeholder:"Enter Password"}),re("button",{type:"submit",onClick:async y=>{y.preventDefault(),n==="Login"?await n(o,f):await o3(t,o,f)},children:n})]}),Le("div",{className:"check",children:[re("input",{type:"checkbox"}),re("p",{children:"By continuing, i agree with services and privacy policy."})]}),re("div",{className:"bots",children:n==="Sign up"?Le("p",{children:["Do you have an account? ",re("span",{onClick:()=>e("Login"),children:"Login"})]}):Le("p",{children:["New for Netflix? ",re("span",{onClick:()=>e("Sign up"),children:"Create account"})]})})]})]})]})},S3=()=>{const n=g_();return W.useEffect(()=>{iR(Xp,async e=>{e?(console.log("Logged In"),n("/")):(console.log("Logged out"),n("/login"))})},[]),re("div",{className:"app",children:Le(IS,{className:"route",children:[re(rc,{path:"/",element:re(w3,{})}),re(rc,{path:"/login",element:re(I3,{})}),re(rc,{path:"/player/:id",element:re(E3,{})})]})})};iT.createRoot(document.getElementById("root")).render(re(GS,{children:re(S3,{})}));
