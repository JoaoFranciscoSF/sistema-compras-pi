(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();function fy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zh={exports:{}},Ea={},Bh={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function H0(){if(Am)return Ie;Am=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.iterator;function R(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,J={};function K(O,$,we){this.props=O,this.context=$,this.refs=J,this.updater=we||z}K.prototype.isReactComponent={},K.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},K.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function pe(){}pe.prototype=K.prototype;function de(O,$,we){this.props=O,this.context=$,this.refs=J,this.updater=we||z}var Te=de.prototype=new pe;Te.constructor=de,X(Te,K.prototype),Te.isPureReactComponent=!0;var Se=Array.isArray,qe=Object.prototype.hasOwnProperty,Pe={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function w(O,$,we){var Ee,Ae={},ke=null,Me=null;if($!=null)for(Ee in $.ref!==void 0&&(Me=$.ref),$.key!==void 0&&(ke=""+$.key),$)qe.call($,Ee)&&!N.hasOwnProperty(Ee)&&(Ae[Ee]=$[Ee]);var Ve=arguments.length-2;if(Ve===1)Ae.children=we;else if(1<Ve){for(var Ue=Array(Ve),Ut=0;Ut<Ve;Ut++)Ue[Ut]=arguments[Ut+2];Ae.children=Ue}if(O&&O.defaultProps)for(Ee in Ve=O.defaultProps,Ve)Ae[Ee]===void 0&&(Ae[Ee]=Ve[Ee]);return{$$typeof:i,type:O,key:ke,ref:Me,props:Ae,_owner:Pe.current}}function I(O,$){return{$$typeof:i,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function D(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(we){return $[we]})}var b=/\/+/g;function A(O,$){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):$.toString(36)}function Be(O,$,we,Ee,Ae){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(ke){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case i:case e:Me=!0}}if(Me)return Me=O,Ae=Ae(Me),O=Ee===""?"."+A(Me,0):Ee,Se(Ae)?(we="",O!=null&&(we=O.replace(b,"$&/")+"/"),Be(Ae,$,we,"",function(Ut){return Ut})):Ae!=null&&(P(Ae)&&(Ae=I(Ae,we+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(b,"$&/")+"/")+O)),$.push(Ae)),1;if(Me=0,Ee=Ee===""?".":Ee+":",Se(O))for(var Ve=0;Ve<O.length;Ve++){ke=O[Ve];var Ue=Ee+A(ke,Ve);Me+=Be(ke,$,we,Ue,Ae)}else if(Ue=R(O),typeof Ue=="function")for(O=Ue.call(O),Ve=0;!(ke=O.next()).done;)ke=ke.value,Ue=Ee+A(ke,Ve++),Me+=Be(ke,$,we,Ue,Ae);else if(ke==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Me}function yt(O,$,we){if(O==null)return O;var Ee=[],Ae=0;return Be(O,Ee,"","",function(ke){return $.call(we,ke,Ae++)}),Ee}function xt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(we){(O._status===0||O._status===-1)&&(O._status=1,O._result=we)},function(we){(O._status===0||O._status===-1)&&(O._status=2,O._result=we)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var Ye={current:null},Z={transition:null},le={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Pe};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:yt,forEach:function(O,$,we){yt(O,function(){$.apply(this,arguments)},we)},count:function(O){var $=0;return yt(O,function(){$++}),$},toArray:function(O){return yt(O,function($){return $})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ie.Component=K,Ie.Fragment=t,Ie.Profiler=a,Ie.PureComponent=de,Ie.StrictMode=s,Ie.Suspense=y,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ie.act=ne,Ie.cloneElement=function(O,$,we){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ee=X({},O.props),Ae=O.key,ke=O.ref,Me=O._owner;if($!=null){if($.ref!==void 0&&(ke=$.ref,Me=Pe.current),$.key!==void 0&&(Ae=""+$.key),O.type&&O.type.defaultProps)var Ve=O.type.defaultProps;for(Ue in $)qe.call($,Ue)&&!N.hasOwnProperty(Ue)&&(Ee[Ue]=$[Ue]===void 0&&Ve!==void 0?Ve[Ue]:$[Ue])}var Ue=arguments.length-2;if(Ue===1)Ee.children=we;else if(1<Ue){Ve=Array(Ue);for(var Ut=0;Ut<Ue;Ut++)Ve[Ut]=arguments[Ut+2];Ee.children=Ve}return{$$typeof:i,type:O.type,key:Ae,ref:ke,props:Ee,_owner:Me}},Ie.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ie.createElement=w,Ie.createFactory=function(O){var $=w.bind(null,O);return $.type=O,$},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(O){return{$$typeof:m,render:O}},Ie.isValidElement=P,Ie.lazy=function(O){return{$$typeof:T,_payload:{_status:-1,_result:O},_init:xt}},Ie.memo=function(O,$){return{$$typeof:v,type:O,compare:$===void 0?null:$}},Ie.startTransition=function(O){var $=Z.transition;Z.transition={};try{O()}finally{Z.transition=$}},Ie.unstable_act=ne,Ie.useCallback=function(O,$){return Ye.current.useCallback(O,$)},Ie.useContext=function(O){return Ye.current.useContext(O)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(O){return Ye.current.useDeferredValue(O)},Ie.useEffect=function(O,$){return Ye.current.useEffect(O,$)},Ie.useId=function(){return Ye.current.useId()},Ie.useImperativeHandle=function(O,$,we){return Ye.current.useImperativeHandle(O,$,we)},Ie.useInsertionEffect=function(O,$){return Ye.current.useInsertionEffect(O,$)},Ie.useLayoutEffect=function(O,$){return Ye.current.useLayoutEffect(O,$)},Ie.useMemo=function(O,$){return Ye.current.useMemo(O,$)},Ie.useReducer=function(O,$,we){return Ye.current.useReducer(O,$,we)},Ie.useRef=function(O){return Ye.current.useRef(O)},Ie.useState=function(O){return Ye.current.useState(O)},Ie.useSyncExternalStore=function(O,$,we){return Ye.current.useSyncExternalStore(O,$,we)},Ie.useTransition=function(){return Ye.current.useTransition()},Ie.version="18.3.1",Ie}var km;function xd(){return km||(km=1,Bh.exports=H0()),Bh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function W0(){if(Cm)return Ea;Cm=1;var i=xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,v){var T,C={},R=null,z=null;v!==void 0&&(R=""+v),y.key!==void 0&&(R=""+y.key),y.ref!==void 0&&(z=y.ref);for(T in y)s.call(y,T)&&!u.hasOwnProperty(T)&&(C[T]=y[T]);if(m&&m.defaultProps)for(T in y=m.defaultProps,y)C[T]===void 0&&(C[T]=y[T]);return{$$typeof:e,type:m,key:R,ref:z,props:C,_owner:a.current}}return Ea.Fragment=t,Ea.jsx=h,Ea.jsxs=h,Ea}var Rm;function G0(){return Rm||(Rm=1,zh.exports=W0()),zh.exports}var k=G0(),$t=xd();const K0=fy($t);var pu={},$h={exports:{}},Yt={},qh={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function Q0(){return xm||(xm=1,(function(i){function e(Z,le){var ne=Z.length;Z.push(le);e:for(;0<ne;){var O=ne-1>>>1,$=Z[O];if(0<a($,le))Z[O]=le,Z[ne]=$,ne=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var le=Z[0],ne=Z.pop();if(ne!==le){Z[0]=ne;e:for(var O=0,$=Z.length,we=$>>>1;O<we;){var Ee=2*(O+1)-1,Ae=Z[Ee],ke=Ee+1,Me=Z[ke];if(0>a(Ae,ne))ke<$&&0>a(Me,Ae)?(Z[O]=Me,Z[ke]=ne,O=ke):(Z[O]=Ae,Z[Ee]=ne,O=Ee);else if(ke<$&&0>a(Me,ne))Z[O]=Me,Z[ke]=ne,O=ke;else break e}}return le}function a(Z,le){var ne=Z.sortIndex-le.sortIndex;return ne!==0?ne:Z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var y=[],v=[],T=1,C=null,R=3,z=!1,X=!1,J=!1,K=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Te(Z){for(var le=t(v);le!==null;){if(le.callback===null)s(v);else if(le.startTime<=Z)s(v),le.sortIndex=le.expirationTime,e(y,le);else break;le=t(v)}}function Se(Z){if(J=!1,Te(Z),!X)if(t(y)!==null)X=!0,xt(qe);else{var le=t(v);le!==null&&Ye(Se,le.startTime-Z)}}function qe(Z,le){X=!1,J&&(J=!1,pe(w),w=-1),z=!0;var ne=R;try{for(Te(le),C=t(y);C!==null&&(!(C.expirationTime>le)||Z&&!D());){var O=C.callback;if(typeof O=="function"){C.callback=null,R=C.priorityLevel;var $=O(C.expirationTime<=le);le=i.unstable_now(),typeof $=="function"?C.callback=$:C===t(y)&&s(y),Te(le)}else s(y);C=t(y)}if(C!==null)var we=!0;else{var Ee=t(v);Ee!==null&&Ye(Se,Ee.startTime-le),we=!1}return we}finally{C=null,R=ne,z=!1}}var Pe=!1,N=null,w=-1,I=5,P=-1;function D(){return!(i.unstable_now()-P<I)}function b(){if(N!==null){var Z=i.unstable_now();P=Z;var le=!0;try{le=N(!0,Z)}finally{le?A():(Pe=!1,N=null)}}else Pe=!1}var A;if(typeof de=="function")A=function(){de(b)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,yt=Be.port2;Be.port1.onmessage=b,A=function(){yt.postMessage(null)}}else A=function(){K(b,0)};function xt(Z){N=Z,Pe||(Pe=!0,A())}function Ye(Z,le){w=K(function(){Z(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){X||z||(X=!0,xt(qe))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return R},i.unstable_getFirstCallbackNode=function(){return t(y)},i.unstable_next=function(Z){switch(R){case 1:case 2:case 3:var le=3;break;default:le=R}var ne=R;R=le;try{return Z()}finally{R=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ne=R;R=Z;try{return le()}finally{R=ne}},i.unstable_scheduleCallback=function(Z,le,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,Z={id:T++,callback:le,priorityLevel:Z,startTime:ne,expirationTime:$,sortIndex:-1},ne>O?(Z.sortIndex=ne,e(v,Z),t(y)===null&&Z===t(v)&&(J?(pe(w),w=-1):J=!0,Ye(Se,ne-O))):(Z.sortIndex=$,e(y,Z),X||z||(X=!0,xt(qe))),Z},i.unstable_shouldYield=D,i.unstable_wrapCallback=function(Z){var le=R;return function(){var ne=R;R=le;try{return Z.apply(this,arguments)}finally{R=ne}}}})(Hh)),Hh}var Pm;function Y0(){return Pm||(Pm=1,qh.exports=Q0()),qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function J0(){if(Nm)return Yt;Nm=1;var i=xd(),e=Y0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T={},C={};function R(n){return y.call(C,n)?!0:y.call(T,n)?!1:v.test(n)?C[n]=!0:(T[n]=!0,!1)}function z(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X(n,r,o,c){if(r===null||typeof r>"u"||z(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function J(n,r,o,c,d,f,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=f,this.removeEmptyString=_}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){K[n]=new J(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];K[r]=new J(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){K[n]=new J(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){K[n]=new J(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){K[n]=new J(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){K[n]=new J(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){K[n]=new J(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){K[n]=new J(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){K[n]=new J(n,5,!1,n.toLowerCase(),null,!1,!1)});var pe=/[\-:]([a-z])/g;function de(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(pe,de);K[r]=new J(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(pe,de);K[r]=new J(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(pe,de);K[r]=new J(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!1,!1)}),K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){K[n]=new J(n,1,!1,n.toLowerCase(),null,!0,!0)});function Te(n,r,o,c){var d=K.hasOwnProperty(r)?K[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,o,d,c)&&(o=null),c||d===null?R(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(r=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(r):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var Se=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),yt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Ye=Symbol.for("react.offscreen"),Z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var we=!1;function Ee(n,r){if(!n||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var c=j}Reflect.construct(n,[],r)}else{try{r.call()}catch(j){c=j}n.call(r.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),f=c.stack.split(`
`),_=d.length-1,S=f.length-1;1<=_&&0<=S&&d[_]!==f[S];)S--;for(;1<=_&&0<=S;_--,S--)if(d[_]!==f[S]){if(_!==1||S!==1)do if(_--,S--,0>S||d[_]!==f[S]){var x=`
`+d[_].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=_&&0<=S);break}}}finally{we=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function Ae(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Pe:return"Portal";case I:return"Profiler";case w:return"StrictMode";case A:return"Suspense";case Be:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case b:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case yt:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case xt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function Me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ut(n){var r=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,f.call(this,_)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function ps(n){n._valueTracker||(n._valueTracker=Ut(n))}function Co(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function Nr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ms(n,r){var o=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Za(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=Ve(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gs(n,r){r=r.checked,r!=null&&Te(n,"checked",r,!1)}function Ri(n,r){gs(n,r);var o=Ve(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?at(n,r.type,o):r.hasOwnProperty("defaultValue")&&at(n,r.type,Ve(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ro(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function at(n,r,o){(r!=="number"||Nr(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var rt=Array.isArray;function vn(n,r,o,c){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ve(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function xo(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Po(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(rt(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Ve(o)}}function el(n,r){var o=Ve(r.value),c=Ve(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Dr(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function No(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ys(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?No(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vr,tl=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Vr=Vr||document.createElement("div"),Vr.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Vr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xi(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nl=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(n){nl.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),br[r]=br[n]})});function Or(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||br.hasOwnProperty(n)&&br[n]?(""+r).trim():r+"px"}function _s(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Or(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Do=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wn(n,r){if(r){if(Do[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function vs(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lr=null;function ws(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var sr=null,or=null,tt=null;function Vo(n){if(n=oa(n)){if(typeof sr!="function")throw Error(t(280));var r=n.stateNode;r&&(r=xl(r),sr(n.stateNode,n.type,r))}}function Mr(n){or?tt?tt.push(n):tt=[n]:or=n}function Fr(){if(or){var n=or,r=tt;if(tt=or=null,Vo(n),r)for(n=0;n<r.length;n++)Vo(r[n])}}function rl(n,r){return n(r)}function il(){}var Dn=!1;function sl(n,r,o){if(Dn)return n(r,o);Dn=!0;try{return rl(n,r,o)}finally{Dn=!1,(or!==null||tt!==null)&&(il(),Fr())}}function Pi(n,r){var o=n.stateNode;if(o===null)return null;var c=xl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var jr=!1;if(m)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){jr=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{jr=!1}function ol(n,r,o,c,d,f,_,S,x){var j=Array.prototype.slice.call(arguments,3);try{r.apply(o,j)}catch(W){this.onError(W)}}var ar=!1,Vn=null,Es=!1,cn=null,al={onError:function(n){ar=!0,Vn=n}};function ll(n,r,o,c,d,f,_,S,x){ar=!1,Vn=null,ol.apply(al,arguments)}function bo(n,r,o,c,d,f,_,S,x){if(ll.apply(this,arguments),ar){if(ar){var j=Vn;ar=!1,Vn=null}else throw Error(t(198));Es||(Es=!0,cn=j)}}function En(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Oo(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ul(n){if(En(n)!==n)throw Error(t(188))}function cl(n){var r=n.alternate;if(!r){if(r=En(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var d=o.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===o)return ul(d),n;if(f===c)return ul(d),r;f=f.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=f;else{for(var _=!1,S=d.child;S;){if(S===o){_=!0,o=d,c=f;break}if(S===c){_=!0,c=d,o=f;break}S=S.sibling}if(!_){for(S=f.child;S;){if(S===o){_=!0,o=f,c=d;break}if(S===c){_=!0,c=f,o=d;break}S=S.sibling}if(!_)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function hl(n){return n=cl(n),n!==null?Ni(n):null}function Ni(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ni(n);if(r!==null)return r;n=n.sibling}return null}var Lo=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Di=e.unstable_shouldYield,lr=e.unstable_requestPaint,He=e.unstable_now,_c=e.unstable_getCurrentPriorityLevel,Is=e.unstable_ImmediatePriority,Mo=e.unstable_UserBlockingPriority,Vi=e.unstable_NormalPriority,Fo=e.unstable_LowPriority,Ss=e.unstable_IdlePriority,bi=null,Zt=null;function dl(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(bi,n,void 0,(n.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:Oi,bn=Math.log,hn=Math.LN2;function Oi(n){return n>>>=0,n===0?32:31-(bn(n)/hn|0)|0}var On=64,zr=4194304;function Le(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ur(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,f=n.pingedLanes,_=o&268435455;if(_!==0){var S=_&~d;S!==0?c=Le(S):(f&=_,f!==0&&(c=Le(f)))}else _=o&~d,_!==0?c=Le(_):f!==0&&(c=Le(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,f=r&-r,d>=f||d===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-en(r),d=1<<o,c|=n[o],r&=~d;return c}function Li(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mi(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,f=n.pendingLanes;0<f;){var _=31-en(f),S=1<<_,x=d[_];x===-1?((S&o)===0||(S&c)!==0)&&(d[_]=Li(S,r)):x<=r&&(n.expiredLanes|=S),f&=~S}}function jo(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Uo(){var n=On;return On<<=1,(On&4194240)===0&&(On=64),n}function zo(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Fi(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-en(r),n[r]=o}function vc(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-en(o),f=1<<d;r[d]=0,c[d]=-1,n[d]=-1,o&=~f}}function Bo(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-en(o),d=1<<c;d&r|n[c]&r&&(n[c]|=r),o&=~d}}var Ne=0;function Ln(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var $o,As,qo,Ho,Wo,Mn=!1,ks=[],Fn=null,jn=null,Tt=null,ji=new Map,cr=new Map,tn=[],fl="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Br(n,r){switch(n){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":jn=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(r.pointerId)}}function Tn(n,r,o,c,d,f){return n===null||n.nativeEvent!==f?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},r!==null&&(r=oa(r),r!==null&&As(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function pl(n,r,o,c,d){switch(r){case"focusin":return Fn=Tn(Fn,n,r,o,c,d),!0;case"dragenter":return jn=Tn(jn,n,r,o,c,d),!0;case"mouseover":return Tt=Tn(Tt,n,r,o,c,d),!0;case"pointerover":var f=d.pointerId;return ji.set(f,Tn(ji.get(f)||null,n,r,o,c,d)),!0;case"gotpointercapture":return f=d.pointerId,cr.set(f,Tn(cr.get(f)||null,n,r,o,c,d)),!0}return!1}function Cs(n){var r=$i(n.target);if(r!==null){var o=En(r);if(o!==null){if(r=o.tag,r===13){if(r=Oo(o),r!==null){n.blockedOn=r,Wo(n.priority,function(){qo(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ze(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Rs(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Lr=c,o.target.dispatchEvent(c),Lr=null}else return r=oa(o),r!==null&&As(r),n.blockedOn=o,!1;r.shift()}return!0}function ml(n,r,o){ze(n)&&o.delete(r)}function wc(){Mn=!1,Fn!==null&&ze(Fn)&&(Fn=null),jn!==null&&ze(jn)&&(jn=null),Tt!==null&&ze(Tt)&&(Tt=null),ji.forEach(ml),cr.forEach(ml)}function $r(n,r){n.blockedOn===r&&(n.blockedOn=null,Mn||(Mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wc)))}function qr(n){function r(d){return $r(d,n)}if(0<ks.length){$r(ks[0],n);for(var o=1;o<ks.length;o++){var c=ks[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Fn!==null&&$r(Fn,n),jn!==null&&$r(jn,n),Tt!==null&&$r(Tt,n),ji.forEach(r),cr.forEach(r),o=0;o<tn.length;o++)c=tn[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<tn.length&&(o=tn[0],o.blockedOn===null);)Cs(o),o.blockedOn===null&&tn.shift()}var hr=Se.ReactCurrentBatchConfig,dr=!0;function Un(n,r,o,c){var d=Ne,f=hr.transition;hr.transition=null;try{Ne=1,Go(n,r,o,c)}finally{Ne=d,hr.transition=f}}function gl(n,r,o,c){var d=Ne,f=hr.transition;hr.transition=null;try{Ne=4,Go(n,r,o,c)}finally{Ne=d,hr.transition=f}}function Go(n,r,o,c){if(dr){var d=Rs(n,r,o,c);if(d===null)Nc(n,r,c,zn,o),Br(n,c);else if(pl(d,n,r,o,c))c.stopPropagation();else if(Br(n,c),r&4&&-1<fl.indexOf(n)){for(;d!==null;){var f=oa(d);if(f!==null&&$o(f),f=Rs(n,r,o,c),f===null&&Nc(n,r,c,zn,o),f===d)break;d=f}d!==null&&c.stopPropagation()}else Nc(n,r,c,null,o)}}var zn=null;function Rs(n,r,o,c){if(zn=null,n=ws(c),n=$i(n),n!==null)if(r=En(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Oo(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return zn=n,null}function xs(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_c()){case Is:return 1;case Mo:return 4;case Vi:case Fo:return 16;case Ss:return 536870912;default:return 16}default:return 16}}var nn=null,Ps=null,fr=null;function yl(){if(fr)return fr;var n,r=Ps,o=r.length,c,d="value"in nn?nn.value:nn.textContent,f=d.length;for(n=0;n<o&&r[n]===d[n];n++);var _=o-n;for(c=1;c<=_&&r[o-c]===d[f-c];c++);return fr=d.slice(n,1<c?1-c:void 0)}function Ui(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Ko(){return!1}function Pt(n){function r(o,c,d,f,_){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bn:Ko,this.isPropagationStopped=Ko,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zi=Pt($n),Hr=ne({},$n,{view:0,detail:0}),Ns=Pt(Hr),Ds,Vs,rn,Bi=ne({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_e,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==rn&&(rn&&n.type==="mousemove"?(Ds=n.screenX-rn.screenX,Vs=n.screenY-rn.screenY):Vs=Ds=0,rn=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:Vs}}),Qo=Pt(Bi),_l=ne({},Bi,{dataTransfer:0}),vl=Pt(_l),bs=ne({},Hr,{relatedTarget:0}),It=Pt(bs),wl=ne({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),El=Pt(wl),Wr=ne({},$n,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),l=Pt(Wr),p=ne({},$n,{data:0}),g=Pt(p),E={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=U[n])?!!r[n]:!1}function _e(){return Y}var it=ne({},Hr,{key:function(n){if(n.key){var r=E[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ui(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?M[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_e,charCode:function(n){return n.type==="keypress"?Ui(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ui(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),je=Pt(it),lt=ne({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sn=Pt(lt),pr=ne({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_e}),qn=Pt(pr),Hn=ne({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),Os=Pt(Hn),Yo=ne({},Bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=Pt(Yo),Uv=[9,13,27,32],Ec=m&&"CompositionEvent"in window,Jo=null;m&&"documentMode"in document&&(Jo=document.documentMode);var zv=m&&"TextEvent"in window&&!Jo,yf=m&&(!Ec||Jo&&8<Jo&&11>=Jo),_f=" ",vf=!1;function wf(n,r){switch(n){case"keyup":return Uv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ef(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Bv(n,r){switch(n){case"compositionend":return Ef(r);case"keypress":return r.which!==32?null:(vf=!0,_f);case"textInput":return n=r.data,n===_f&&vf?null:n;default:return null}}function $v(n,r){if(Ls)return n==="compositionend"||!Ec&&wf(n,r)?(n=yl(),fr=Ps=nn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return yf&&r.locale!=="ko"?null:r.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!qv[n.type]:r==="textarea"}function If(n,r,o,c){Mr(c),r=kl(r,"onChange"),0<r.length&&(o=new zi("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Xo=null,Zo=null;function Hv(n){zf(n,0)}function Tl(n){var r=zs(n);if(Co(r))return n}function Wv(n,r){if(n==="change")return r}var Sf=!1;if(m){var Tc;if(m){var Ic="oninput"in document;if(!Ic){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Ic=typeof Af.oninput=="function"}Tc=Ic}else Tc=!1;Sf=Tc&&(!document.documentMode||9<document.documentMode)}function kf(){Xo&&(Xo.detachEvent("onpropertychange",Cf),Zo=Xo=null)}function Cf(n){if(n.propertyName==="value"&&Tl(Zo)){var r=[];If(r,Zo,n,ws(n)),sl(Hv,r)}}function Gv(n,r,o){n==="focusin"?(kf(),Xo=r,Zo=o,Xo.attachEvent("onpropertychange",Cf)):n==="focusout"&&kf()}function Kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(Zo)}function Qv(n,r){if(n==="click")return Tl(r)}function Yv(n,r){if(n==="input"||n==="change")return Tl(r)}function Jv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var In=typeof Object.is=="function"?Object.is:Jv;function ea(n,r){if(In(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!y.call(r,d)||!In(n[d],r[d]))return!1}return!0}function Rf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xf(n,r){var o=Rf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rf(o)}}function Pf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Pf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Nf(){for(var n=window,r=Nr();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Nr(n.document)}return r}function Sc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Xv(n){var r=Nf(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Pf(o.ownerDocument.documentElement,o)){if(c!==null&&Sc(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!n.extend&&f>c&&(d=c,c=f,f=d),d=xf(o,f);var _=xf(o,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),f>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zv=m&&"documentMode"in document&&11>=document.documentMode,Ms=null,Ac=null,ta=null,kc=!1;function Df(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;kc||Ms==null||Ms!==Nr(c)||(c=Ms,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ta&&ea(ta,c)||(ta=c,c=kl(Ac,"onSelect"),0<c.length&&(r=new zi("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=Ms)))}function Il(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Fs={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},Cc={},Vf={};m&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function Sl(n){if(Cc[n])return Cc[n];if(!Fs[n])return n;var r=Fs[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Vf)return Cc[n]=r[o];return n}var bf=Sl("animationend"),Of=Sl("animationiteration"),Lf=Sl("animationstart"),Mf=Sl("transitionend"),Ff=new Map,jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,r){Ff.set(n,r),u(r,[n])}for(var Rc=0;Rc<jf.length;Rc++){var xc=jf[Rc],e0=xc.toLowerCase(),t0=xc[0].toUpperCase()+xc.slice(1);Gr(e0,"on"+t0)}Gr(bf,"onAnimationEnd"),Gr(Of,"onAnimationIteration"),Gr(Lf,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Mf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Uf(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,bo(c,r,void 0,n),n.currentTarget=null}function zf(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var _=c.length-1;0<=_;_--){var S=c[_],x=S.instance,j=S.currentTarget;if(S=S.listener,x!==f&&d.isPropagationStopped())break e;Uf(d,S,j),f=x}else for(_=0;_<c.length;_++){if(S=c[_],x=S.instance,j=S.currentTarget,S=S.listener,x!==f&&d.isPropagationStopped())break e;Uf(d,S,j),f=x}}}if(Es)throw n=cn,Es=!1,cn=null,n}function We(n,r){var o=r[Mc];o===void 0&&(o=r[Mc]=new Set);var c=n+"__bubble";o.has(c)||(Bf(r,n,2,!1),o.add(c))}function Pc(n,r,o){var c=0;r&&(c|=4),Bf(o,n,c,r)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[Al]){n[Al]=!0,s.forEach(function(o){o!=="selectionchange"&&(n0.has(o)||Pc(o,!1,n),Pc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Al]||(r[Al]=!0,Pc("selectionchange",!1,r))}}function Bf(n,r,o,c){switch(xs(r)){case 1:var d=Un;break;case 4:d=gl;break;default:d=Go}o=d.bind(null,r,o,n),d=void 0,!jr||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function Nc(n,r,o,c,d){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var x=_.tag;if((x===3||x===4)&&(x=_.stateNode.containerInfo,x===d||x.nodeType===8&&x.parentNode===d))return;_=_.return}for(;S!==null;){if(_=$i(S),_===null)return;if(x=_.tag,x===5||x===6){c=f=_;continue e}S=S.parentNode}}c=c.return}sl(function(){var j=f,W=ws(o),G=[];e:{var q=Ff.get(n);if(q!==void 0){var ee=zi,ie=n;switch(n){case"keypress":if(Ui(o)===0)break e;case"keydown":case"keyup":ee=je;break;case"focusin":ie="focus",ee=It;break;case"focusout":ie="blur",ee=It;break;case"beforeblur":case"afterblur":ee=It;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=vl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=qn;break;case bf:case Of:case Lf:ee=El;break;case Mf:ee=Os;break;case"scroll":ee=Ns;break;case"wheel":ee=jv;break;case"copy":case"cut":case"paste":ee=l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=sn}var se=(r&4)!==0,st=!se&&n==="scroll",L=se?q!==null?q+"Capture":null:q;se=[];for(var V=j,F;V!==null;){F=V;var Q=F.stateNode;if(F.tag===5&&Q!==null&&(F=Q,L!==null&&(Q=Pi(V,L),Q!=null&&se.push(ia(V,Q,F)))),st)break;V=V.return}0<se.length&&(q=new ee(q,ie,null,o,W),G.push({event:q,listeners:se}))}}if((r&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",q&&o!==Lr&&(ie=o.relatedTarget||o.fromElement)&&($i(ie)||ie[mr]))break e;if((ee||q)&&(q=W.window===W?W:(q=W.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(ie=o.relatedTarget||o.toElement,ee=j,ie=ie?$i(ie):null,ie!==null&&(st=En(ie),ie!==st||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=j),ee!==ie)){if(se=Qo,Q="onMouseLeave",L="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(se=sn,Q="onPointerLeave",L="onPointerEnter",V="pointer"),st=ee==null?q:zs(ee),F=ie==null?q:zs(ie),q=new se(Q,V+"leave",ee,o,W),q.target=st,q.relatedTarget=F,Q=null,$i(W)===j&&(se=new se(L,V+"enter",ie,o,W),se.target=F,se.relatedTarget=st,Q=se),st=Q,ee&&ie)t:{for(se=ee,L=ie,V=0,F=se;F;F=js(F))V++;for(F=0,Q=L;Q;Q=js(Q))F++;for(;0<V-F;)se=js(se),V--;for(;0<F-V;)L=js(L),F--;for(;V--;){if(se===L||L!==null&&se===L.alternate)break t;se=js(se),L=js(L)}se=null}else se=null;ee!==null&&$f(G,q,ee,se,!1),ie!==null&&st!==null&&$f(G,st,ie,se,!0)}}e:{if(q=j?zs(j):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var oe=Wv;else if(Tf(q))if(Sf)oe=Yv;else{oe=Kv;var ce=Gv}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(oe=Qv);if(oe&&(oe=oe(n,j))){If(G,oe,o,W);break e}ce&&ce(n,q,j),n==="focusout"&&(ce=q._wrapperState)&&ce.controlled&&q.type==="number"&&at(q,"number",q.value)}switch(ce=j?zs(j):window,n){case"focusin":(Tf(ce)||ce.contentEditable==="true")&&(Ms=ce,Ac=j,ta=null);break;case"focusout":ta=Ac=Ms=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Df(G,o,W);break;case"selectionchange":if(Zv)break;case"keydown":case"keyup":Df(G,o,W)}var he;if(Ec)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Ls?wf(n,o)&&(me="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(me="onCompositionStart");me&&(yf&&o.locale!=="ko"&&(Ls||me!=="onCompositionStart"?me==="onCompositionEnd"&&Ls&&(he=yl()):(nn=W,Ps="value"in nn?nn.value:nn.textContent,Ls=!0)),ce=kl(j,me),0<ce.length&&(me=new g(me,n,null,o,W),G.push({event:me,listeners:ce}),he?me.data=he:(he=Ef(o),he!==null&&(me.data=he)))),(he=zv?Bv(n,o):$v(n,o))&&(j=kl(j,"onBeforeInput"),0<j.length&&(W=new g("onBeforeInput","beforeinput",null,o,W),G.push({event:W,listeners:j}),W.data=he))}zf(G,r)})}function ia(n,r,o){return{instance:n,listener:r,currentTarget:o}}function kl(n,r){for(var o=r+"Capture",c=[];n!==null;){var d=n,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Pi(n,o),f!=null&&c.unshift(ia(n,f,d)),f=Pi(n,r),f!=null&&c.push(ia(n,f,d))),n=n.return}return c}function js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $f(n,r,o,c,d){for(var f=r._reactName,_=[];o!==null&&o!==c;){var S=o,x=S.alternate,j=S.stateNode;if(x!==null&&x===c)break;S.tag===5&&j!==null&&(S=j,d?(x=Pi(o,f),x!=null&&_.unshift(ia(o,x,S))):d||(x=Pi(o,f),x!=null&&_.push(ia(o,x,S)))),o=o.return}_.length!==0&&n.push({event:r,listeners:_})}var r0=/\r\n?/g,i0=/\u0000|\uFFFD/g;function qf(n){return(typeof n=="string"?n:""+n).replace(r0,`
`).replace(i0,"")}function Cl(n,r,o){if(r=qf(r),qf(n)!==r&&o)throw Error(t(425))}function Rl(){}var Dc=null,Vc=null;function bc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,s0=typeof clearTimeout=="function"?clearTimeout:void 0,Hf=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hf<"u"?function(n){return Hf.resolve(null).then(n).catch(a0)}:Oc;function a0(n){setTimeout(function(){throw n})}function Lc(n,r){var o=r,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),qr(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);qr(r)}function Kr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Wf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Us,sa="__reactProps$"+Us,mr="__reactContainer$"+Us,Mc="__reactEvents$"+Us,l0="__reactListeners$"+Us,u0="__reactHandles$"+Us;function $i(n){var r=n[Wn];if(r)return r;for(var o=n.parentNode;o;){if(r=o[mr]||o[Wn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Wf(n);n!==null;){if(o=n[Wn])return o;n=Wf(n)}return r}n=o,o=n.parentNode}return null}function oa(n){return n=n[Wn]||n[mr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xl(n){return n[sa]||null}var Fc=[],Bs=-1;function Qr(n){return{current:n}}function Ge(n){0>Bs||(n.current=Fc[Bs],Fc[Bs]=null,Bs--)}function $e(n,r){Bs++,Fc[Bs]=n.current,n.current=r}var Yr={},Nt=Qr(Yr),Ht=Qr(!1),qi=Yr;function $s(n,r){var o=n.type.contextTypes;if(!o)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in o)d[f]=r[f];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Pl(){Ge(Ht),Ge(Nt)}function Gf(n,r,o){if(Nt.current!==Yr)throw Error(t(168));$e(Nt,r),$e(Ht,o)}function Kf(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Me(n)||"Unknown",d));return ne({},o,c)}function Nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,qi=Nt.current,$e(Nt,n),$e(Ht,Ht.current),!0}function Qf(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Kf(n,r,qi),c.__reactInternalMemoizedMergedChildContext=n,Ge(Ht),Ge(Nt),$e(Nt,n)):Ge(Ht),$e(Ht,o)}var gr=null,Dl=!1,jc=!1;function Yf(n){gr===null?gr=[n]:gr.push(n)}function c0(n){Dl=!0,Yf(n)}function Jr(){if(!jc&&gr!==null){jc=!0;var n=0,r=Ne;try{var o=gr;for(Ne=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}gr=null,Dl=!1}catch(d){throw gr!==null&&(gr=gr.slice(n+1)),Lo(Is,Jr),d}finally{Ne=r,jc=!1}}return null}var qs=[],Hs=0,Vl=null,bl=0,dn=[],fn=0,Hi=null,yr=1,_r="";function Wi(n,r){qs[Hs++]=bl,qs[Hs++]=Vl,Vl=n,bl=r}function Jf(n,r,o){dn[fn++]=yr,dn[fn++]=_r,dn[fn++]=Hi,Hi=n;var c=yr;n=_r;var d=32-en(c)-1;c&=~(1<<d),o+=1;var f=32-en(r)+d;if(30<f){var _=d-d%5;f=(c&(1<<_)-1).toString(32),c>>=_,d-=_,yr=1<<32-en(r)+d|o<<d|c,_r=f+n}else yr=1<<f|o<<d|c,_r=n}function Uc(n){n.return!==null&&(Wi(n,1),Jf(n,1,0))}function zc(n){for(;n===Vl;)Vl=qs[--Hs],qs[Hs]=null,bl=qs[--Hs],qs[Hs]=null;for(;n===Hi;)Hi=dn[--fn],dn[fn]=null,_r=dn[--fn],dn[fn]=null,yr=dn[--fn],dn[fn]=null}var on=null,an=null,Je=!1,Sn=null;function Xf(n,r){var o=yn(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Zf(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,on=n,an=Kr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,on=n,an=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Hi!==null?{id:yr,overflow:_r}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=yn(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,on=n,an=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(Je){var r=an;if(r){var o=r;if(!Zf(n,r)){if(Bc(n))throw Error(t(418));r=Kr(o.nextSibling);var c=on;r&&Zf(n,r)?Xf(c,o):(n.flags=n.flags&-4097|2,Je=!1,on=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Je=!1,on=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Ol(n){if(n!==on)return!1;if(!Je)return ep(n),Je=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!bc(n.type,n.memoizedProps)),r&&(r=an)){if(Bc(n))throw tp(),Error(t(418));for(;r;)Xf(n,r),r=Kr(r.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){an=Kr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}an=null}}else an=on?Kr(n.stateNode.nextSibling):null;return!0}function tp(){for(var n=an;n;)n=Kr(n.nextSibling)}function Ws(){an=on=null,Je=!1}function qc(n){Sn===null?Sn=[n]:Sn.push(n)}var h0=Se.ReactCurrentBatchConfig;function aa(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,f=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(_){var S=d.refs;_===null?delete S[f]:S[f]=_},r._stringRef=f,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ll(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function np(n){var r=n._init;return r(n._payload)}function rp(n){function r(L,V){if(n){var F=L.deletions;F===null?(L.deletions=[V],L.flags|=16):F.push(V)}}function o(L,V){if(!n)return null;for(;V!==null;)r(L,V),V=V.sibling;return null}function c(L,V){for(L=new Map;V!==null;)V.key!==null?L.set(V.key,V):L.set(V.index,V),V=V.sibling;return L}function d(L,V){return L=si(L,V),L.index=0,L.sibling=null,L}function f(L,V,F){return L.index=F,n?(F=L.alternate,F!==null?(F=F.index,F<V?(L.flags|=2,V):F):(L.flags|=2,V)):(L.flags|=1048576,V)}function _(L){return n&&L.alternate===null&&(L.flags|=2),L}function S(L,V,F,Q){return V===null||V.tag!==6?(V=Oh(F,L.mode,Q),V.return=L,V):(V=d(V,F),V.return=L,V)}function x(L,V,F,Q){var oe=F.type;return oe===N?W(L,V,F.props.children,Q,F.key):V!==null&&(V.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===xt&&np(oe)===V.type)?(Q=d(V,F.props),Q.ref=aa(L,V,F),Q.return=L,Q):(Q=ou(F.type,F.key,F.props,null,L.mode,Q),Q.ref=aa(L,V,F),Q.return=L,Q)}function j(L,V,F,Q){return V===null||V.tag!==4||V.stateNode.containerInfo!==F.containerInfo||V.stateNode.implementation!==F.implementation?(V=Lh(F,L.mode,Q),V.return=L,V):(V=d(V,F.children||[]),V.return=L,V)}function W(L,V,F,Q,oe){return V===null||V.tag!==7?(V=es(F,L.mode,Q,oe),V.return=L,V):(V=d(V,F),V.return=L,V)}function G(L,V,F){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Oh(""+V,L.mode,F),V.return=L,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case qe:return F=ou(V.type,V.key,V.props,null,L.mode,F),F.ref=aa(L,null,V),F.return=L,F;case Pe:return V=Lh(V,L.mode,F),V.return=L,V;case xt:var Q=V._init;return G(L,Q(V._payload),F)}if(rt(V)||le(V))return V=es(V,L.mode,F,null),V.return=L,V;Ll(L,V)}return null}function q(L,V,F,Q){var oe=V!==null?V.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:S(L,V,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case qe:return F.key===oe?x(L,V,F,Q):null;case Pe:return F.key===oe?j(L,V,F,Q):null;case xt:return oe=F._init,q(L,V,oe(F._payload),Q)}if(rt(F)||le(F))return oe!==null?null:W(L,V,F,Q,null);Ll(L,F)}return null}function ee(L,V,F,Q,oe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return L=L.get(F)||null,S(V,L,""+Q,oe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case qe:return L=L.get(Q.key===null?F:Q.key)||null,x(V,L,Q,oe);case Pe:return L=L.get(Q.key===null?F:Q.key)||null,j(V,L,Q,oe);case xt:var ce=Q._init;return ee(L,V,F,ce(Q._payload),oe)}if(rt(Q)||le(Q))return L=L.get(F)||null,W(V,L,Q,oe,null);Ll(V,Q)}return null}function ie(L,V,F,Q){for(var oe=null,ce=null,he=V,me=V=0,wt=null;he!==null&&me<F.length;me++){he.index>me?(wt=he,he=null):wt=he.sibling;var Oe=q(L,he,F[me],Q);if(Oe===null){he===null&&(he=wt);break}n&&he&&Oe.alternate===null&&r(L,he),V=f(Oe,V,me),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe,he=wt}if(me===F.length)return o(L,he),Je&&Wi(L,me),oe;if(he===null){for(;me<F.length;me++)he=G(L,F[me],Q),he!==null&&(V=f(he,V,me),ce===null?oe=he:ce.sibling=he,ce=he);return Je&&Wi(L,me),oe}for(he=c(L,he);me<F.length;me++)wt=ee(he,L,me,F[me],Q),wt!==null&&(n&&wt.alternate!==null&&he.delete(wt.key===null?me:wt.key),V=f(wt,V,me),ce===null?oe=wt:ce.sibling=wt,ce=wt);return n&&he.forEach(function(oi){return r(L,oi)}),Je&&Wi(L,me),oe}function se(L,V,F,Q){var oe=le(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var ce=oe=null,he=V,me=V=0,wt=null,Oe=F.next();he!==null&&!Oe.done;me++,Oe=F.next()){he.index>me?(wt=he,he=null):wt=he.sibling;var oi=q(L,he,Oe.value,Q);if(oi===null){he===null&&(he=wt);break}n&&he&&oi.alternate===null&&r(L,he),V=f(oi,V,me),ce===null?oe=oi:ce.sibling=oi,ce=oi,he=wt}if(Oe.done)return o(L,he),Je&&Wi(L,me),oe;if(he===null){for(;!Oe.done;me++,Oe=F.next())Oe=G(L,Oe.value,Q),Oe!==null&&(V=f(Oe,V,me),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return Je&&Wi(L,me),oe}for(he=c(L,he);!Oe.done;me++,Oe=F.next())Oe=ee(he,L,me,Oe.value,Q),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?me:Oe.key),V=f(Oe,V,me),ce===null?oe=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(q0){return r(L,q0)}),Je&&Wi(L,me),oe}function st(L,V,F,Q){if(typeof F=="object"&&F!==null&&F.type===N&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case qe:e:{for(var oe=F.key,ce=V;ce!==null;){if(ce.key===oe){if(oe=F.type,oe===N){if(ce.tag===7){o(L,ce.sibling),V=d(ce,F.props.children),V.return=L,L=V;break e}}else if(ce.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===xt&&np(oe)===ce.type){o(L,ce.sibling),V=d(ce,F.props),V.ref=aa(L,ce,F),V.return=L,L=V;break e}o(L,ce);break}else r(L,ce);ce=ce.sibling}F.type===N?(V=es(F.props.children,L.mode,Q,F.key),V.return=L,L=V):(Q=ou(F.type,F.key,F.props,null,L.mode,Q),Q.ref=aa(L,V,F),Q.return=L,L=Q)}return _(L);case Pe:e:{for(ce=F.key;V!==null;){if(V.key===ce)if(V.tag===4&&V.stateNode.containerInfo===F.containerInfo&&V.stateNode.implementation===F.implementation){o(L,V.sibling),V=d(V,F.children||[]),V.return=L,L=V;break e}else{o(L,V);break}else r(L,V);V=V.sibling}V=Lh(F,L.mode,Q),V.return=L,L=V}return _(L);case xt:return ce=F._init,st(L,V,ce(F._payload),Q)}if(rt(F))return ie(L,V,F,Q);if(le(F))return se(L,V,F,Q);Ll(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,V!==null&&V.tag===6?(o(L,V.sibling),V=d(V,F),V.return=L,L=V):(o(L,V),V=Oh(F,L.mode,Q),V.return=L,L=V),_(L)):o(L,V)}return st}var Gs=rp(!0),ip=rp(!1),Ml=Qr(null),Fl=null,Ks=null,Hc=null;function Wc(){Hc=Ks=Fl=null}function Gc(n){var r=Ml.current;Ge(Ml),n._currentValue=r}function Kc(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Qs(n,r){Fl=n,Hc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(Fl===null)throw Error(t(308));Ks=n,Fl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var Gi=null;function Qc(n){Gi===null?Gi=[n]:Gi.push(n)}function sp(n,r,o,c){var d=r.interleaved;return d===null?(o.next=o,Qc(r)):(o.next=d.next,d.next=o),r.interleaved=o,vr(n,c)}function vr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Xr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function wr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,vr(n,o)}return d=c.interleaved,d===null?(r.next=r,Qc(c)):(r.next=d.next,d.next=r),c.interleaved=r,vr(n,o)}function jl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Bo(n,o)}}function ap(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var _={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?d=f=_:f=f.next=_,o=o.next}while(o!==null);f===null?d=f=r:f=f.next=r}else d=f=r;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Ul(n,r,o,c){var d=n.updateQueue;Xr=!1;var f=d.firstBaseUpdate,_=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var x=S,j=x.next;x.next=null,_===null?f=j:_.next=j,_=x;var W=n.alternate;W!==null&&(W=W.updateQueue,S=W.lastBaseUpdate,S!==_&&(S===null?W.firstBaseUpdate=j:S.next=j,W.lastBaseUpdate=x))}if(f!==null){var G=d.baseState;_=0,W=j=x=null,S=f;do{var q=S.lane,ee=S.eventTime;if((c&q)===q){W!==null&&(W=W.next={eventTime:ee,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=n,se=S;switch(q=r,ee=o,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){G=ie.call(ee,G,q);break e}G=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,q=typeof ie=="function"?ie.call(ee,G,q):ie,q==null)break e;G=ne({},G,q);break e;case 2:Xr=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,q=d.effects,q===null?d.effects=[S]:q.push(S))}else ee={eventTime:ee,lane:q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},W===null?(j=W=ee,x=G):W=W.next=ee,_|=q;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;q=S,S=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);if(W===null&&(x=G),d.baseState=x,d.firstBaseUpdate=j,d.lastBaseUpdate=W,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else f===null&&(d.shared.lanes=0);Yi|=_,n.lanes=_,n.memoizedState=G}}function lp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var la={},Gn=Qr(la),ua=Qr(la),ca=Qr(la);function Ki(n){if(n===la)throw Error(t(174));return n}function Jc(n,r){switch($e(ca,r),$e(ua,n),$e(Gn,la),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ys(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ys(r,n)}Ge(Gn),$e(Gn,r)}function Ys(){Ge(Gn),Ge(ua),Ge(ca)}function up(n){Ki(ca.current);var r=Ki(Gn.current),o=ys(r,n.type);r!==o&&($e(ua,n),$e(Gn,o))}function Xc(n){ua.current===n&&(Ge(Gn),Ge(ua))}var Xe=Qr(0);function zl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Zc=[];function eh(){for(var n=0;n<Zc.length;n++)Zc[n]._workInProgressVersionPrimary=null;Zc.length=0}var Bl=Se.ReactCurrentDispatcher,th=Se.ReactCurrentBatchConfig,Qi=0,Ze=null,dt=null,_t=null,$l=!1,ha=!1,da=0,d0=0;function Dt(){throw Error(t(321))}function nh(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!In(n[o],r[o]))return!1;return!0}function rh(n,r,o,c,d,f){if(Qi=f,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Bl.current=n===null||n.memoizedState===null?g0:y0,n=o(c,d),ha){f=0;do{if(ha=!1,da=0,25<=f)throw Error(t(301));f+=1,_t=dt=null,r.updateQueue=null,Bl.current=_0,n=o(c,d)}while(ha)}if(Bl.current=Wl,r=dt!==null&&dt.next!==null,Qi=0,_t=dt=Ze=null,$l=!1,r)throw Error(t(300));return n}function ih(){var n=da!==0;return da=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ze.memoizedState=_t=n:_t=_t.next=n,_t}function mn(){if(dt===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var r=_t===null?Ze.memoizedState:_t.next;if(r!==null)_t=r,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},_t===null?Ze.memoizedState=_t=n:_t=_t.next=n}return _t}function fa(n,r){return typeof r=="function"?r(n):r}function sh(n){var r=mn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=dt,d=c.baseQueue,f=o.pending;if(f!==null){if(d!==null){var _=d.next;d.next=f.next,f.next=_}c.baseQueue=d=f,o.pending=null}if(d!==null){f=d.next,c=c.baseState;var S=_=null,x=null,j=f;do{var W=j.lane;if((Qi&W)===W)x!==null&&(x=x.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var G={lane:W,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};x===null?(S=x=G,_=c):x=x.next=G,Ze.lanes|=W,Yi|=W}j=j.next}while(j!==null&&j!==f);x===null?_=c:x.next=S,In(c,r.memoizedState)||(Gt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=x,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do f=d.lane,Ze.lanes|=f,Yi|=f,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function oh(n){var r=mn(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,f=r.memoizedState;if(d!==null){o.pending=null;var _=d=d.next;do f=n(f,_.action),_=_.next;while(_!==d);In(f,r.memoizedState)||(Gt=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),o.lastRenderedState=f}return[f,c]}function cp(){}function hp(n,r){var o=Ze,c=mn(),d=r(),f=!In(c.memoizedState,d);if(f&&(c.memoizedState=d,Gt=!0),c=c.queue,ah(pp.bind(null,o,c,n),[n]),c.getSnapshot!==r||f||_t!==null&&_t.memoizedState.tag&1){if(o.flags|=2048,pa(9,fp.bind(null,o,c,d,r),void 0,null),vt===null)throw Error(t(349));(Qi&30)!==0||dp(o,r,d)}return d}function dp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function fp(n,r,o,c){r.value=o,r.getSnapshot=c,mp(r)&&gp(n)}function pp(n,r,o){return o(function(){mp(r)&&gp(n)})}function mp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!In(n,o)}catch{return!0}}function gp(n){var r=vr(n,1);r!==null&&Rn(r,n,1,-1)}function yp(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},r.queue=n,n=n.dispatch=m0.bind(null,Ze,n),[r.memoizedState,n]}function pa(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function _p(){return mn().memoizedState}function ql(n,r,o,c){var d=Kn();Ze.flags|=n,d.memoizedState=pa(1|r,o,void 0,c===void 0?null:c)}function Hl(n,r,o,c){var d=mn();c=c===void 0?null:c;var f=void 0;if(dt!==null){var _=dt.memoizedState;if(f=_.destroy,c!==null&&nh(c,_.deps)){d.memoizedState=pa(r,o,f,c);return}}Ze.flags|=n,d.memoizedState=pa(1|r,o,f,c)}function vp(n,r){return ql(8390656,8,n,r)}function ah(n,r){return Hl(2048,8,n,r)}function wp(n,r){return Hl(4,2,n,r)}function Ep(n,r){return Hl(4,4,n,r)}function Tp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Ip(n,r,o){return o=o!=null?o.concat([n]):null,Hl(4,4,Tp.bind(null,r,n),o)}function lh(){}function Sp(n,r){var o=mn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function Ap(n,r){var o=mn();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&nh(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function kp(n,r,o){return(Qi&21)===0?(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=o):(In(o,r)||(o=Uo(),Ze.lanes|=o,Yi|=o,n.baseState=!0),r)}function f0(n,r){var o=Ne;Ne=o!==0&&4>o?o:4,n(!0);var c=th.transition;th.transition={};try{n(!1),r()}finally{Ne=o,th.transition=c}}function Cp(){return mn().memoizedState}function p0(n,r,o){var c=ri(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Rp(n))xp(r,o);else if(o=sp(n,r,o,c),o!==null){var d=Bt();Rn(o,n,c,d),Pp(o,r,c)}}function m0(n,r,o){var c=ri(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rp(n))xp(r,d);else{var f=n.alternate;if(n.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var _=r.lastRenderedState,S=f(_,o);if(d.hasEagerState=!0,d.eagerState=S,In(S,_)){var x=r.interleaved;x===null?(d.next=d,Qc(r)):(d.next=x.next,x.next=d),r.interleaved=d;return}}catch{}finally{}o=sp(n,r,d,c),o!==null&&(d=Bt(),Rn(o,n,c,d),Pp(o,r,c))}}function Rp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function xp(n,r){ha=$l=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Pp(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Bo(n,o)}}var Wl={readContext:pn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},g0={readContext:pn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:vp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,ql(4194308,4,Tp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return ql(4194308,4,n,r)},useInsertionEffect:function(n,r){return ql(4,2,n,r)},useMemo:function(n,r){var o=Kn();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=Kn();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=p0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:yp,useDebugValue:lh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=yp(!1),r=n[0];return n=f0.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=Ze,d=Kn();if(Je){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),vt===null)throw Error(t(349));(Qi&30)!==0||dp(c,r,o)}d.memoizedState=o;var f={value:o,getSnapshot:r};return d.queue=f,vp(pp.bind(null,c,f,n),[n]),c.flags|=2048,pa(9,fp.bind(null,c,f,o,r),void 0,null),o},useId:function(){var n=Kn(),r=vt.identifierPrefix;if(Je){var o=_r,c=yr;o=(c&~(1<<32-en(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=da++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=d0++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},y0={readContext:pn,useCallback:Sp,useContext:pn,useEffect:ah,useImperativeHandle:Ip,useInsertionEffect:wp,useLayoutEffect:Ep,useMemo:Ap,useReducer:sh,useRef:_p,useState:function(){return sh(fa)},useDebugValue:lh,useDeferredValue:function(n){var r=mn();return kp(r,dt.memoizedState,n)},useTransition:function(){var n=sh(fa)[0],r=mn().memoizedState;return[n,r]},useMutableSource:cp,useSyncExternalStore:hp,useId:Cp,unstable_isNewReconciler:!1},_0={readContext:pn,useCallback:Sp,useContext:pn,useEffect:ah,useImperativeHandle:Ip,useInsertionEffect:wp,useLayoutEffect:Ep,useMemo:Ap,useReducer:oh,useRef:_p,useState:function(){return oh(fa)},useDebugValue:lh,useDeferredValue:function(n){var r=mn();return dt===null?r.memoizedState=n:kp(r,dt.memoizedState,n)},useTransition:function(){var n=oh(fa)[0],r=mn().memoizedState;return[n,r]},useMutableSource:cp,useSyncExternalStore:hp,useId:Cp,unstable_isNewReconciler:!1};function An(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function uh(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:ne({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Gl={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=Bt(),d=ri(n),f=wr(c,d);f.payload=r,o!=null&&(f.callback=o),r=Zr(n,f,d),r!==null&&(Rn(r,n,d,c),jl(r,n,d))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=Bt(),d=ri(n),f=wr(c,d);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Zr(n,f,d),r!==null&&(Rn(r,n,d,c),jl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Bt(),c=ri(n),d=wr(o,c);d.tag=2,r!=null&&(d.callback=r),r=Zr(n,d,c),r!==null&&(Rn(r,n,c,o),jl(r,n,c))}};function Np(n,r,o,c,d,f,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,f,_):r.prototype&&r.prototype.isPureReactComponent?!ea(o,c)||!ea(d,f):!0}function Dp(n,r,o){var c=!1,d=Yr,f=r.contextType;return typeof f=="object"&&f!==null?f=pn(f):(d=Wt(r)?qi:Nt.current,c=r.contextTypes,f=(c=c!=null)?$s(n,d):Yr),r=new r(o,f),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Gl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=f),r}function Vp(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&Gl.enqueueReplaceState(r,r.state,null)}function ch(n,r,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Yc(n);var f=r.contextType;typeof f=="object"&&f!==null?d.context=pn(f):(f=Wt(r)?qi:Nt.current,d.context=$s(n,f)),d.state=n.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(uh(n,r,f,o),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Gl.enqueueReplaceState(d,d.state,null),Ul(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,r){try{var o="",c=r;do o+=Ae(c),c=c.return;while(c);var d=o}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:n,source:r,stack:d,digest:null}}function hh(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function dh(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function bp(n,r,o){o=wr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){eu||(eu=!0,Ch=c),dh(n,r)},o}function Op(n,r,o){o=wr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;o.payload=function(){return c(d)},o.callback=function(){dh(n,r)}}var f=n.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){dh(n,r),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),o}function Lp(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new v0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(o)||(d.add(o),n=V0.bind(null,n,r,o),r.then(n,n))}function Mp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Fp(n,r,o,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=wr(-1,1),r.tag=2,Zr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var w0=Se.ReactCurrentOwner,Gt=!1;function zt(n,r,o,c){r.child=n===null?ip(r,null,o,c):Gs(r,n.child,o,c)}function jp(n,r,o,c,d){o=o.render;var f=r.ref;return Qs(r,d),c=rh(n,r,o,c,f,d),o=ih(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Er(n,r,d)):(Je&&o&&Uc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Up(n,r,o,c,d){if(n===null){var f=o.type;return typeof f=="function"&&!bh(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=f,zp(n,r,f,c,d)):(n=ou(o.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(f=n.child,(n.lanes&d)===0){var _=f.memoizedProps;if(o=o.compare,o=o!==null?o:ea,o(_,c)&&n.ref===r.ref)return Er(n,r,d)}return r.flags|=1,n=si(f,c),n.ref=r.ref,n.return=r,r.child=n}function zp(n,r,o,c,d){if(n!==null){var f=n.memoizedProps;if(ea(f,c)&&n.ref===r.ref)if(Gt=!1,r.pendingProps=c=f,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gt=!0);else return r.lanes=n.lanes,Er(n,r,d)}return fh(n,r,o,c,d)}function Bp(n,r,o){var c=r.pendingProps,d=c.children,f=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Zs,ln),ln|=o;else{if((o&1073741824)===0)return n=f!==null?f.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(Zs,ln),ln|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:o,$e(Zs,ln),ln|=c}else f!==null?(c=f.baseLanes|o,r.memoizedState=null):c=o,$e(Zs,ln),ln|=c;return zt(n,r,d,o),r.child}function $p(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function fh(n,r,o,c,d){var f=Wt(o)?qi:Nt.current;return f=$s(r,f),Qs(r,d),o=rh(n,r,o,c,f,d),c=ih(),n!==null&&!Gt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,Er(n,r,d)):(Je&&c&&Uc(r),r.flags|=1,zt(n,r,o,d),r.child)}function qp(n,r,o,c,d){if(Wt(o)){var f=!0;Nl(r)}else f=!1;if(Qs(r,d),r.stateNode===null)Ql(n,r),Dp(r,o,c),ch(r,o,c,d),c=!0;else if(n===null){var _=r.stateNode,S=r.memoizedProps;_.props=S;var x=_.context,j=o.contextType;typeof j=="object"&&j!==null?j=pn(j):(j=Wt(o)?qi:Nt.current,j=$s(r,j));var W=o.getDerivedStateFromProps,G=typeof W=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==c||x!==j)&&Vp(r,_,c,j),Xr=!1;var q=r.memoizedState;_.state=q,Ul(r,c,_,d),x=r.memoizedState,S!==c||q!==x||Ht.current||Xr?(typeof W=="function"&&(uh(r,o,W,c),x=r.memoizedState),(S=Xr||Np(r,o,S,c,q,x,j))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=x),_.props=c,_.state=x,_.context=j,c=S):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,op(n,r),S=r.memoizedProps,j=r.type===r.elementType?S:An(r.type,S),_.props=j,G=r.pendingProps,q=_.context,x=o.contextType,typeof x=="object"&&x!==null?x=pn(x):(x=Wt(o)?qi:Nt.current,x=$s(r,x));var ee=o.getDerivedStateFromProps;(W=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==G||q!==x)&&Vp(r,_,c,x),Xr=!1,q=r.memoizedState,_.state=q,Ul(r,c,_,d);var ie=r.memoizedState;S!==G||q!==ie||Ht.current||Xr?(typeof ee=="function"&&(uh(r,o,ee,c),ie=r.memoizedState),(j=Xr||Np(r,o,j,c,q,ie,x)||!1)?(W||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,x),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,x)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),_.props=c,_.state=ie,_.context=x,c=j):(typeof _.componentDidUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&q===n.memoizedState||(r.flags|=1024),c=!1)}return ph(n,r,o,c,f,d)}function ph(n,r,o,c,d,f){$p(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&Qf(r,o,!1),Er(n,r,f);c=r.stateNode,w0.current=r;var S=_&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=Gs(r,n.child,null,f),r.child=Gs(r,null,S,f)):zt(n,r,S,f),r.memoizedState=c.state,d&&Qf(r,o,!0),r.child}function Hp(n){var r=n.stateNode;r.pendingContext?Gf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Gf(n,r.context,!1),Jc(n,r.containerInfo)}function Wp(n,r,o,c,d){return Ws(),qc(d),r.flags|=256,zt(n,r,o,c),r.child}var mh={dehydrated:null,treeContext:null,retryLane:0};function gh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,r,o){var c=r.pendingProps,d=Xe.current,f=!1,_=(r.flags&128)!==0,S;if((S=_)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(f=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Xe,d&1),n===null)return $c(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,f?(c=r.mode,f=r.child,_={mode:"hidden",children:_},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=_):f=au(_,c,0,null),n=es(n,c,o,null),f.return=r,n.return=r,f.sibling=n,r.child=f,r.child.memoizedState=gh(o),r.memoizedState=mh,n):yh(r,_));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return E0(n,r,_,c,S,d,o);if(f){f=c.fallback,_=r.mode,d=n.child,S=d.sibling;var x={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=x,r.deletions=null):(c=si(d,x),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?f=si(S,f):(f=es(f,_,o,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,_=n.child.memoizedState,_=_===null?gh(o):{baseLanes:_.baseLanes|o,cachePool:null,transitions:_.transitions},f.memoizedState=_,f.childLanes=n.childLanes&~o,r.memoizedState=mh,c}return f=n.child,n=f.sibling,c=si(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function yh(n,r){return r=au({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Kl(n,r,o,c){return c!==null&&qc(c),Gs(r,n.child,null,o),n=yh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function E0(n,r,o,c,d,f,_){if(o)return r.flags&256?(r.flags&=-257,c=hh(Error(t(422))),Kl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(f=c.fallback,d=r.mode,c=au({mode:"visible",children:c.children},d,0,null),f=es(f,d,_,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Gs(r,n.child,null,_),r.child.memoizedState=gh(_),r.memoizedState=mh,f);if((r.mode&1)===0)return Kl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,f=Error(t(419)),c=hh(f,c,void 0),Kl(n,r,_,c)}if(S=(_&n.childLanes)!==0,Gt||S){if(c=vt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,vr(n,d),Rn(c,n,d,-1))}return Vh(),c=hh(Error(t(421))),Kl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=b0.bind(null,n),d._reactRetry=r,null):(n=f.treeContext,an=Kr(d.nextSibling),on=r,Je=!0,Sn=null,n!==null&&(dn[fn++]=yr,dn[fn++]=_r,dn[fn++]=Hi,yr=n.id,_r=n.overflow,Hi=r),r=yh(r,c.children),r.flags|=4096,r)}function Kp(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Kc(n.return,r,o)}function _h(n,r,o,c,d){var f=n.memoizedState;f===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=o,f.tailMode=d)}function Qp(n,r,o){var c=r.pendingProps,d=c.revealOrder,f=c.tail;if(zt(n,r,c.children,o),c=Xe.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,o,r);else if(n.tag===19)Kp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Xe,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&zl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),_h(r,!1,d,o,f);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&zl(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}_h(r,!0,o,null,f);break;case"together":_h(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ql(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Er(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Yi|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=si(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=si(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function T0(n,r,o){switch(r.tag){case 3:Hp(r),Ws();break;case 5:up(r);break;case 1:Wt(r.type)&&Nl(r);break;case 4:Jc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(Ml,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Xe,Xe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Gp(n,r,o):($e(Xe,Xe.current&1),n=Er(n,r,o),n!==null?n.sibling:null);$e(Xe,Xe.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Qp(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,Bp(n,r,o)}return Er(n,r,o)}var Yp,vh,Jp,Xp;Yp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},vh=function(){},Jp=function(n,r,o,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Ki(Gn.current);var f=null;switch(o){case"input":d=ms(n,d),c=ms(n,c),f=[];break;case"select":d=ne({},d,{value:void 0}),c=ne({},c,{value:void 0}),f=[];break;case"textarea":d=xo(n,d),c=xo(n,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Rl)}wn(o,c);var _;o=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(_ in S)S.hasOwnProperty(_)&&(o||(o={}),o[_]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(a.hasOwnProperty(j)?f||(f=[]):(f=f||[]).push(j,null));for(j in c){var x=c[j];if(S=d?.[j],c.hasOwnProperty(j)&&x!==S&&(x!=null||S!=null))if(j==="style")if(S){for(_ in S)!S.hasOwnProperty(_)||x&&x.hasOwnProperty(_)||(o||(o={}),o[_]="");for(_ in x)x.hasOwnProperty(_)&&S[_]!==x[_]&&(o||(o={}),o[_]=x[_])}else o||(f||(f=[]),f.push(j,o)),o=x;else j==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,S=S?S.__html:void 0,x!=null&&S!==x&&(f=f||[]).push(j,x)):j==="children"?typeof x!="string"&&typeof x!="number"||(f=f||[]).push(j,""+x):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(a.hasOwnProperty(j)?(x!=null&&j==="onScroll"&&We("scroll",n),f||S===x||(f=[])):(f=f||[]).push(j,x))}o&&(f=f||[]).push("style",o);var j=f;(r.updateQueue=j)&&(r.flags|=4)}},Xp=function(n,r,o,c){o!==c&&(r.flags|=4)};function ma(n,r){if(!Je)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function I0(n,r,o){var c=r.pendingProps;switch(zc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Wt(r.type)&&Pl(),Vt(r),null;case 3:return c=r.stateNode,Ys(),Ge(Ht),Ge(Nt),eh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ol(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sn!==null&&(Ph(Sn),Sn=null))),vh(n,r),Vt(r),null;case 5:Xc(r);var d=Ki(ca.current);if(o=r.type,n!==null&&r.stateNode!=null)Jp(n,r,o,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=Ki(Gn.current),Ol(r)){c=r.stateNode,o=r.type;var f=r.memoizedProps;switch(c[Wn]=r,c[sa]=f,n=(r.mode&1)!==0,o){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<na.length;d++)We(na[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Za(c,f),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},We("invalid",c);break;case"textarea":Po(c,f),We("invalid",c)}wn(o,f),d=null;for(var _ in f)if(f.hasOwnProperty(_)){var S=f[_];_==="children"?typeof S=="string"?c.textContent!==S&&(f.suppressHydrationWarning!==!0&&Cl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(f.suppressHydrationWarning!==!0&&Cl(c.textContent,S,n),d=["children",""+S]):a.hasOwnProperty(_)&&S!=null&&_==="onScroll"&&We("scroll",c)}switch(o){case"input":ps(c),Ro(c,f,!0);break;case"textarea":ps(c),Dr(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=Rl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=No(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(o,{is:c.is}):(n=_.createElement(o),o==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,o),n[Wn]=r,n[sa]=c,Yp(n,r,!1,!1),r.stateNode=n;e:{switch(_=vs(o,c),o){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<na.length;d++)We(na[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":Za(n,c),d=ms(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ne({},c,{value:void 0}),We("invalid",n);break;case"textarea":Po(n,c),d=xo(n,c),We("invalid",n);break;default:d=c}wn(o,d),S=d;for(f in S)if(S.hasOwnProperty(f)){var x=S[f];f==="style"?_s(n,x):f==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&tl(n,x)):f==="children"?typeof x=="string"?(o!=="textarea"||x!=="")&&xi(n,x):typeof x=="number"&&xi(n,""+x):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(a.hasOwnProperty(f)?x!=null&&f==="onScroll"&&We("scroll",n):x!=null&&Te(n,f,x,_))}switch(o){case"input":ps(n),Ro(n,c,!1);break;case"textarea":ps(n),Dr(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,f=c.value,f!=null?vn(n,!!c.multiple,f,!1):c.defaultValue!=null&&vn(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Rl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)Xp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=Ki(ca.current),Ki(Gn.current),Ol(r)){if(c=r.stateNode,o=r.memoizedProps,c[Wn]=r,(f=c.nodeValue!==o)&&(n=on,n!==null))switch(n.tag){case 3:Cl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Cl(c.nodeValue,o,(n.mode&1)!==0)}f&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Wn]=r,r.stateNode=c}return Vt(r),null;case 13:if(Ge(Xe),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Je&&an!==null&&(r.mode&1)!==0&&(r.flags&128)===0)tp(),Ws(),r.flags|=98560,f=!1;else if(f=Ol(r),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(t(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(t(317));f[Wn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),f=!1}else Sn!==null&&(Ph(Sn),Sn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Xe.current&1)!==0?ft===0&&(ft=3):Vh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Ys(),vh(n,r),n===null&&ra(r.stateNode.containerInfo),Vt(r),null;case 10:return Gc(r.type._context),Vt(r),null;case 17:return Wt(r.type)&&Pl(),Vt(r),null;case 19:if(Ge(Xe),f=r.memoizedState,f===null)return Vt(r),null;if(c=(r.flags&128)!==0,_=f.rendering,_===null)if(c)ma(f,!1);else{if(ft!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=zl(n),_!==null){for(r.flags|=128,ma(f,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)f=o,n=c,f.flags&=14680066,_=f.alternate,_===null?(f.childLanes=0,f.lanes=n,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=_.childLanes,f.lanes=_.lanes,f.child=_.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=_.memoizedProps,f.memoizedState=_.memoizedState,f.updateQueue=_.updateQueue,f.type=_.type,n=_.dependencies,f.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $e(Xe,Xe.current&1|2),r.child}n=n.sibling}f.tail!==null&&He()>eo&&(r.flags|=128,c=!0,ma(f,!1),r.lanes=4194304)}else{if(!c)if(n=zl(_),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ma(f,!0),f.tail===null&&f.tailMode==="hidden"&&!_.alternate&&!Je)return Vt(r),null}else 2*He()-f.renderingStartTime>eo&&o!==1073741824&&(r.flags|=128,c=!0,ma(f,!1),r.lanes=4194304);f.isBackwards?(_.sibling=r.child,r.child=_):(o=f.last,o!==null?o.sibling=_:r.child=_,f.last=_)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=He(),r.sibling=null,o=Xe.current,$e(Xe,c?o&1|2:o&1),r):(Vt(r),null);case 22:case 23:return Dh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ln&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function S0(n,r){switch(zc(r),r.tag){case 1:return Wt(r.type)&&Pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ys(),Ge(Ht),Ge(Nt),eh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Xc(r),null;case 13:if(Ge(Xe),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ge(Xe),null;case 4:return Ys(),null;case 10:return Gc(r.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var Yl=!1,bt=!1,A0=typeof WeakSet=="function"?WeakSet:Set,re=null;function Xs(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){nt(n,r,c)}else o.current=null}function wh(n,r,o){try{o()}catch(c){nt(n,r,c)}}var Zp=!1;function k0(n,r){if(Dc=dr,n=Nf(),Sc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var _=0,S=-1,x=-1,j=0,W=0,G=n,q=null;t:for(;;){for(var ee;G!==o||d!==0&&G.nodeType!==3||(S=_+d),G!==f||c!==0&&G.nodeType!==3||(x=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===n)break t;if(q===o&&++j===d&&(S=_),q===f&&++W===c&&(x=_),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}o=S===-1||x===-1?null:{start:S,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for(Vc={focusedElem:n,selectionRange:o},dr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,st=ie.memoizedState,L=r.stateNode,V=L.getSnapshotBeforeUpdate(r.elementType===r.type?se:An(r.type,se),st);L.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){nt(r,r.return,Q)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=Zp,Zp=!1,ie}function ga(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var f=d.destroy;d.destroy=void 0,f!==void 0&&wh(r,o,f)}d=d.next}while(d!==c)}}function Jl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function Eh(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function em(n){var r=n.alternate;r!==null&&(n.alternate=null,em(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Wn],delete r[sa],delete r[Mc],delete r[l0],delete r[u0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Th(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Rl));else if(c!==4&&(n=n.child,n!==null))for(Th(n,r,o),n=n.sibling;n!==null;)Th(n,r,o),n=n.sibling}function Ih(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ih(n,r,o),n=n.sibling;n!==null;)Ih(n,r,o),n=n.sibling}var St=null,kn=!1;function ei(n,r,o){for(o=o.child;o!==null;)rm(n,r,o),o=o.sibling}function rm(n,r,o){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(bi,o)}catch{}switch(o.tag){case 5:bt||Xs(o,r);case 6:var c=St,d=kn;St=null,ei(n,r,o),St=c,kn=d,St!==null&&(kn?(n=St,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):St.removeChild(o.stateNode));break;case 18:St!==null&&(kn?(n=St,o=o.stateNode,n.nodeType===8?Lc(n.parentNode,o):n.nodeType===1&&Lc(n,o),qr(n)):Lc(St,o.stateNode));break;case 4:c=St,d=kn,St=o.stateNode.containerInfo,kn=!0,ei(n,r,o),St=c,kn=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,_=f.destroy;f=f.tag,_!==void 0&&((f&2)!==0||(f&4)!==0)&&wh(o,r,_),d=d.next}while(d!==c)}ei(n,r,o);break;case 1:if(!bt&&(Xs(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(S){nt(o,r,S)}ei(n,r,o);break;case 21:ei(n,r,o);break;case 22:o.mode&1?(bt=(c=bt)||o.memoizedState!==null,ei(n,r,o),bt=c):ei(n,r,o);break;default:ei(n,r,o)}}function im(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new A0),r.forEach(function(c){var d=O0.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Cn(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var f=n,_=r,S=_;e:for(;S!==null;){switch(S.tag){case 5:St=S.stateNode,kn=!1;break e;case 3:St=S.stateNode.containerInfo,kn=!0;break e;case 4:St=S.stateNode.containerInfo,kn=!0;break e}S=S.return}if(St===null)throw Error(t(160));rm(f,_,d),St=null,kn=!1;var x=d.alternate;x!==null&&(x.return=null),d.return=null}catch(j){nt(d,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)sm(r,n),r=r.sibling}function sm(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Cn(r,n),Qn(n),c&4){try{ga(3,n,n.return),Jl(3,n)}catch(se){nt(n,n.return,se)}try{ga(5,n,n.return)}catch(se){nt(n,n.return,se)}}break;case 1:Cn(r,n),Qn(n),c&512&&o!==null&&Xs(o,o.return);break;case 5:if(Cn(r,n),Qn(n),c&512&&o!==null&&Xs(o,o.return),n.flags&32){var d=n.stateNode;try{xi(d,"")}catch(se){nt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var f=n.memoizedProps,_=o!==null?o.memoizedProps:f,S=n.type,x=n.updateQueue;if(n.updateQueue=null,x!==null)try{S==="input"&&f.type==="radio"&&f.name!=null&&gs(d,f),vs(S,_);var j=vs(S,f);for(_=0;_<x.length;_+=2){var W=x[_],G=x[_+1];W==="style"?_s(d,G):W==="dangerouslySetInnerHTML"?tl(d,G):W==="children"?xi(d,G):Te(d,W,G,j)}switch(S){case"input":Ri(d,f);break;case"textarea":el(d,f);break;case"select":var q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var ee=f.value;ee!=null?vn(d,!!f.multiple,ee,!1):q!==!!f.multiple&&(f.defaultValue!=null?vn(d,!!f.multiple,f.defaultValue,!0):vn(d,!!f.multiple,f.multiple?[]:"",!1))}d[sa]=f}catch(se){nt(n,n.return,se)}}break;case 6:if(Cn(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,f=n.memoizedProps;try{d.nodeValue=f}catch(se){nt(n,n.return,se)}}break;case 3:if(Cn(r,n),Qn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{qr(r.containerInfo)}catch(se){nt(n,n.return,se)}break;case 4:Cn(r,n),Qn(n);break;case 13:Cn(r,n),Qn(n),d=n.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(kh=He())),c&4&&im(n);break;case 22:if(W=o!==null&&o.memoizedState!==null,n.mode&1?(bt=(j=bt)||W,Cn(r,n),bt=j):Cn(r,n),Qn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!W&&(n.mode&1)!==0)for(re=n,W=n.child;W!==null;){for(G=re=W;re!==null;){switch(q=re,ee=q.child,q.tag){case 0:case 11:case 14:case 15:ga(4,q,q.return);break;case 1:Xs(q,q.return);var ie=q.stateNode;if(typeof ie.componentWillUnmount=="function"){c=q,o=q.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){nt(c,o,se)}}break;case 5:Xs(q,q.return);break;case 22:if(q.memoizedState!==null){lm(G);continue}}ee!==null?(ee.return=q,re=ee):lm(G)}W=W.sibling}e:for(W=null,G=n;;){if(G.tag===5){if(W===null){W=G;try{d=G.stateNode,j?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(S=G.stateNode,x=G.memoizedProps.style,_=x!=null&&x.hasOwnProperty("display")?x.display:null,S.style.display=Or("display",_))}catch(se){nt(n,n.return,se)}}}else if(G.tag===6){if(W===null)try{G.stateNode.nodeValue=j?"":G.memoizedProps}catch(se){nt(n,n.return,se)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;W===G&&(W=null),G=G.return}W===G&&(W=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Cn(r,n),Qn(n),c&4&&im(n);break;case 21:break;default:Cn(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(tm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xi(d,""),c.flags&=-33);var f=nm(n);Ih(n,f,d);break;case 3:case 4:var _=c.stateNode.containerInfo,S=nm(n);Th(n,S,_);break;default:throw Error(t(161))}}catch(x){nt(n,n.return,x)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function C0(n,r,o){re=n,om(n)}function om(n,r,o){for(var c=(n.mode&1)!==0;re!==null;){var d=re,f=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Yl;if(!_){var S=d.alternate,x=S!==null&&S.memoizedState!==null||bt;S=Yl;var j=bt;if(Yl=_,(bt=x)&&!j)for(re=d;re!==null;)_=re,x=_.child,_.tag===22&&_.memoizedState!==null?um(d):x!==null?(x.return=_,re=x):um(d);for(;f!==null;)re=f,om(f),f=f.sibling;re=d,Yl=S,bt=j}am(n)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,re=f):am(n)}}function am(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bt||Jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!bt)if(o===null)c.componentDidMount();else{var d=r.elementType===r.type?o.memoizedProps:An(r.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&lp(r,f,c);break;case 3:var _=r.updateQueue;if(_!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}lp(r,_,o)}break;case 5:var S=r.stateNode;if(o===null&&r.flags&4){o=S;var x=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&o.focus();break;case"img":x.src&&(o.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var W=j.memoizedState;if(W!==null){var G=W.dehydrated;G!==null&&qr(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||r.flags&512&&Eh(r)}catch(q){nt(r,r.return,q)}}if(r===n){re=null;break}if(o=r.sibling,o!==null){o.return=r.return,re=o;break}re=r.return}}function lm(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var o=r.sibling;if(o!==null){o.return=r.return,re=o;break}re=r.return}}function um(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Jl(4,r)}catch(x){nt(r,o,x)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(x){nt(r,d,x)}}var f=r.return;try{Eh(r)}catch(x){nt(r,f,x)}break;case 5:var _=r.return;try{Eh(r)}catch(x){nt(r,_,x)}}}catch(x){nt(r,r.return,x)}if(r===n){re=null;break}var S=r.sibling;if(S!==null){S.return=r.return,re=S;break}re=r.return}}var R0=Math.ceil,Xl=Se.ReactCurrentDispatcher,Sh=Se.ReactCurrentOwner,gn=Se.ReactCurrentBatchConfig,be=0,vt=null,ut=null,At=0,ln=0,Zs=Qr(0),ft=0,ya=null,Yi=0,Zl=0,Ah=0,_a=null,Kt=null,kh=0,eo=1/0,Tr=null,eu=!1,Ch=null,ti=null,tu=!1,ni=null,nu=0,va=0,Rh=null,ru=-1,iu=0;function Bt(){return(be&6)!==0?He():ru!==-1?ru:ru=He()}function ri(n){return(n.mode&1)===0?1:(be&2)!==0&&At!==0?At&-At:h0.transition!==null?(iu===0&&(iu=Uo()),iu):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:xs(n.type)),n)}function Rn(n,r,o,c){if(50<va)throw va=0,Rh=null,Error(t(185));Fi(n,o,c),((be&2)===0||n!==vt)&&(n===vt&&((be&2)===0&&(Zl|=o),ft===4&&ii(n,At)),Qt(n,c),o===1&&be===0&&(r.mode&1)===0&&(eo=He()+500,Dl&&Jr()))}function Qt(n,r){var o=n.callbackNode;Mi(n,r);var c=ur(n,n===vt?At:0);if(c===0)o!==null&&Ts(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&Ts(o),r===1)n.tag===0?c0(hm.bind(null,n)):Yf(hm.bind(null,n)),o0(function(){(be&6)===0&&Jr()}),o=null;else{switch(Ln(c)){case 1:o=Is;break;case 4:o=Mo;break;case 16:o=Vi;break;case 536870912:o=Ss;break;default:o=Vi}o=vm(o,cm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function cm(n,r){if(ru=-1,iu=0,(be&6)!==0)throw Error(t(327));var o=n.callbackNode;if(to()&&n.callbackNode!==o)return null;var c=ur(n,n===vt?At:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=su(n,c);else{r=c;var d=be;be|=2;var f=fm();(vt!==n||At!==r)&&(Tr=null,eo=He()+500,Xi(n,r));do try{N0();break}catch(S){dm(n,S)}while(!0);Wc(),Xl.current=f,be=d,ut!==null?r=0:(vt=null,At=0,r=ft)}if(r!==0){if(r===2&&(d=jo(n),d!==0&&(c=d,r=xh(n,d))),r===1)throw o=ya,Xi(n,0),ii(n,c),Qt(n,He()),o;if(r===6)ii(n,c);else{if(d=n.current.alternate,(c&30)===0&&!x0(d)&&(r=su(n,c),r===2&&(f=jo(n),f!==0&&(c=f,r=xh(n,f))),r===1))throw o=ya,Xi(n,0),ii(n,c),Qt(n,He()),o;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Zi(n,Kt,Tr);break;case 3:if(ii(n,c),(c&130023424)===c&&(r=kh+500-He(),10<r)){if(ur(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Oc(Zi.bind(null,n,Kt,Tr),r);break}Zi(n,Kt,Tr);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-en(c);f=1<<_,_=r[_],_>d&&(d=_),c&=~f}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*R0(c/1960))-c,10<c){n.timeoutHandle=Oc(Zi.bind(null,n,Kt,Tr),c);break}Zi(n,Kt,Tr);break;case 5:Zi(n,Kt,Tr);break;default:throw Error(t(329))}}}return Qt(n,He()),n.callbackNode===o?cm.bind(null,n):null}function xh(n,r){var o=_a;return n.current.memoizedState.isDehydrated&&(Xi(n,r).flags|=256),n=su(n,r),n!==2&&(r=Kt,Kt=o,r!==null&&Ph(r)),n}function Ph(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function x0(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],f=d.getSnapshot;d=d.value;try{if(!In(f(),d))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ii(n,r){for(r&=~Ah,r&=~Zl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-en(r),c=1<<o;n[o]=-1,r&=~c}}function hm(n){if((be&6)!==0)throw Error(t(327));to();var r=ur(n,0);if((r&1)===0)return Qt(n,He()),null;var o=su(n,r);if(n.tag!==0&&o===2){var c=jo(n);c!==0&&(r=c,o=xh(n,c))}if(o===1)throw o=ya,Xi(n,0),ii(n,r),Qt(n,He()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Zi(n,Kt,Tr),Qt(n,He()),null}function Nh(n,r){var o=be;be|=1;try{return n(r)}finally{be=o,be===0&&(eo=He()+500,Dl&&Jr())}}function Ji(n){ni!==null&&ni.tag===0&&(be&6)===0&&to();var r=be;be|=1;var o=gn.transition,c=Ne;try{if(gn.transition=null,Ne=1,n)return n()}finally{Ne=c,gn.transition=o,be=r,(be&6)===0&&Jr()}}function Dh(){ln=Zs.current,Ge(Zs)}function Xi(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,s0(o)),ut!==null)for(o=ut.return;o!==null;){var c=o;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pl();break;case 3:Ys(),Ge(Ht),Ge(Nt),eh();break;case 5:Xc(c);break;case 4:Ys();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Gc(c.type._context);break;case 22:case 23:Dh()}o=o.return}if(vt=n,ut=n=si(n.current,null),At=ln=r,ft=0,ya=null,Ah=Zl=Yi=0,Kt=_a=null,Gi!==null){for(r=0;r<Gi.length;r++)if(o=Gi[r],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,f=o.pending;if(f!==null){var _=f.next;f.next=d,c.next=_}o.pending=c}Gi=null}return n}function dm(n,r){do{var o=ut;try{if(Wc(),Bl.current=Wl,$l){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$l=!1}if(Qi=0,_t=dt=Ze=null,ha=!1,da=0,Sh.current=null,o===null||o.return===null){ft=1,ya=r,ut=null;break}e:{var f=n,_=o.return,S=o,x=r;if(r=At,S.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var j=x,W=S,G=W.tag;if((W.mode&1)===0&&(G===0||G===11||G===15)){var q=W.alternate;q?(W.updateQueue=q.updateQueue,W.memoizedState=q.memoizedState,W.lanes=q.lanes):(W.updateQueue=null,W.memoizedState=null)}var ee=Mp(_);if(ee!==null){ee.flags&=-257,Fp(ee,_,S,f,r),ee.mode&1&&Lp(f,j,r),r=ee,x=j;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(x),r.updateQueue=se}else ie.add(x);break e}else{if((r&1)===0){Lp(f,j,r),Vh();break e}x=Error(t(426))}}else if(Je&&S.mode&1){var st=Mp(_);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),Fp(st,_,S,f,r),qc(Js(x,S));break e}}f=x=Js(x,S),ft!==4&&(ft=2),_a===null?_a=[f]:_a.push(f),f=_;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var L=bp(f,x,r);ap(f,L);break e;case 1:S=x;var V=f.type,F=f.stateNode;if((f.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ti===null||!ti.has(F)))){f.flags|=65536,r&=-r,f.lanes|=r;var Q=Op(f,S,r);ap(f,Q);break e}}f=f.return}while(f!==null)}mm(o)}catch(oe){r=oe,ut===o&&o!==null&&(ut=o=o.return);continue}break}while(!0)}function fm(){var n=Xl.current;return Xl.current=Wl,n===null?Wl:n}function Vh(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||(Yi&268435455)===0&&(Zl&268435455)===0||ii(vt,At)}function su(n,r){var o=be;be|=2;var c=fm();(vt!==n||At!==r)&&(Tr=null,Xi(n,r));do try{P0();break}catch(d){dm(n,d)}while(!0);if(Wc(),be=o,Xl.current=c,ut!==null)throw Error(t(261));return vt=null,At=0,ft}function P0(){for(;ut!==null;)pm(ut)}function N0(){for(;ut!==null&&!Di();)pm(ut)}function pm(n){var r=_m(n.alternate,n,ln);n.memoizedProps=n.pendingProps,r===null?mm(n):ut=r,Sh.current=null}function mm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=I0(o,r,ln),o!==null){ut=o;return}}else{if(o=S0(o,r),o!==null){o.flags&=32767,ut=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,ut=null;return}}if(r=r.sibling,r!==null){ut=r;return}ut=r=n}while(r!==null);ft===0&&(ft=5)}function Zi(n,r,o){var c=Ne,d=gn.transition;try{gn.transition=null,Ne=1,D0(n,r,o,c)}finally{gn.transition=d,Ne=c}return null}function D0(n,r,o,c){do to();while(ni!==null);if((be&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var f=o.lanes|o.childLanes;if(vc(n,f),n===vt&&(ut=vt=null,At=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||tu||(tu=!0,vm(Vi,function(){return to(),null})),f=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||f){f=gn.transition,gn.transition=null;var _=Ne;Ne=1;var S=be;be|=4,Sh.current=null,k0(n,o),sm(o,n),Xv(Vc),dr=!!Dc,Vc=Dc=null,n.current=o,C0(o),lr(),be=S,Ne=_,gn.transition=f}else n.current=o;if(tu&&(tu=!1,ni=n,nu=d),f=n.pendingLanes,f===0&&(ti=null),dl(o.stateNode),Qt(n,He()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)d=r[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(eu)throw eu=!1,n=Ch,Ch=null,n;return(nu&1)!==0&&n.tag!==0&&to(),f=n.pendingLanes,(f&1)!==0?n===Rh?va++:(va=0,Rh=n):va=0,Jr(),null}function to(){if(ni!==null){var n=Ln(nu),r=gn.transition,o=Ne;try{if(gn.transition=null,Ne=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,nu=0,(be&6)!==0)throw Error(t(331));var d=be;for(be|=4,re=n.current;re!==null;){var f=re,_=f.child;if((re.flags&16)!==0){var S=f.deletions;if(S!==null){for(var x=0;x<S.length;x++){var j=S[x];for(re=j;re!==null;){var W=re;switch(W.tag){case 0:case 11:case 15:ga(8,W,f)}var G=W.child;if(G!==null)G.return=W,re=G;else for(;re!==null;){W=re;var q=W.sibling,ee=W.return;if(em(W),W===j){re=null;break}if(q!==null){q.return=ee,re=q;break}re=ee}}}var ie=f.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var st=se.sibling;se.sibling=null,se=st}while(se!==null)}}re=f}}if((f.subtreeFlags&2064)!==0&&_!==null)_.return=f,re=_;else e:for(;re!==null;){if(f=re,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ga(9,f,f.return)}var L=f.sibling;if(L!==null){L.return=f.return,re=L;break e}re=f.return}}var V=n.current;for(re=V;re!==null;){_=re;var F=_.child;if((_.subtreeFlags&2064)!==0&&F!==null)F.return=_,re=F;else e:for(_=V;re!==null;){if(S=re,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Jl(9,S)}}catch(oe){nt(S,S.return,oe)}if(S===_){re=null;break e}var Q=S.sibling;if(Q!==null){Q.return=S.return,re=Q;break e}re=S.return}}if(be=d,Jr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(bi,n)}catch{}c=!0}return c}finally{Ne=o,gn.transition=r}}return!1}function gm(n,r,o){r=Js(o,r),r=bp(n,r,1),n=Zr(n,r,1),r=Bt(),n!==null&&(Fi(n,1,r),Qt(n,r))}function nt(n,r,o){if(n.tag===3)gm(n,n,o);else for(;r!==null;){if(r.tag===3){gm(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=Js(o,n),n=Op(r,n,1),r=Zr(r,n,1),n=Bt(),r!==null&&(Fi(r,1,n),Qt(r,n));break}}r=r.return}}function V0(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&o,vt===n&&(At&o)===o&&(ft===4||ft===3&&(At&130023424)===At&&500>He()-kh?Xi(n,0):Ah|=o),Qt(n,r)}function ym(n,r){r===0&&((n.mode&1)===0?r=1:(r=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var o=Bt();n=vr(n,r),n!==null&&(Fi(n,r,o),Qt(n,o))}function b0(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),ym(n,o)}function O0(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),ym(n,o)}var _m;_m=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ht.current)Gt=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Gt=!1,T0(n,r,o);Gt=(n.flags&131072)!==0}else Gt=!1,Je&&(r.flags&1048576)!==0&&Jf(r,bl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ql(n,r),n=r.pendingProps;var d=$s(r,Nt.current);Qs(r,o),d=rh(null,r,c,n,d,o);var f=ih();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(f=!0,Nl(r)):f=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(r),d.updater=Gl,r.stateNode=d,d._reactInternals=r,ch(r,c,n,o),r=ph(null,r,c,!0,f,o)):(r.tag=0,Je&&f&&Uc(r),zt(null,r,d,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Ql(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=M0(c),n=An(c,n),d){case 0:r=fh(null,r,c,n,o);break e;case 1:r=qp(null,r,c,n,o);break e;case 11:r=jp(null,r,c,n,o);break e;case 14:r=Up(null,r,c,An(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),fh(n,r,c,d,o);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),qp(n,r,c,d,o);case 3:e:{if(Hp(r),n===null)throw Error(t(387));c=r.pendingProps,f=r.memoizedState,d=f.element,op(n,r),Ul(r,c,null,o);var _=r.memoizedState;if(c=_.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){d=Js(Error(t(423)),r),r=Wp(n,r,c,o,d);break e}else if(c!==d){d=Js(Error(t(424)),r),r=Wp(n,r,c,o,d);break e}else for(an=Kr(r.stateNode.containerInfo.firstChild),on=r,Je=!0,Sn=null,o=ip(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ws(),c===d){r=Er(n,r,o);break e}zt(n,r,c,o)}r=r.child}return r;case 5:return up(r),n===null&&$c(r),c=r.type,d=r.pendingProps,f=n!==null?n.memoizedProps:null,_=d.children,bc(c,d)?_=null:f!==null&&bc(c,f)&&(r.flags|=32),$p(n,r),zt(n,r,_,o),r.child;case 6:return n===null&&$c(r),null;case 13:return Gp(n,r,o);case 4:return Jc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Gs(r,null,c,o):zt(n,r,c,o),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),jp(n,r,c,d,o);case 7:return zt(n,r,r.pendingProps,o),r.child;case 8:return zt(n,r,r.pendingProps.children,o),r.child;case 12:return zt(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,f=r.memoizedProps,_=d.value,$e(Ml,c._currentValue),c._currentValue=_,f!==null)if(In(f.value,_)){if(f.children===d.children&&!Ht.current){r=Er(n,r,o);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var S=f.dependencies;if(S!==null){_=f.child;for(var x=S.firstContext;x!==null;){if(x.context===c){if(f.tag===1){x=wr(-1,o&-o),x.tag=2;var j=f.updateQueue;if(j!==null){j=j.shared;var W=j.pending;W===null?x.next=x:(x.next=W.next,W.next=x),j.pending=x}}f.lanes|=o,x=f.alternate,x!==null&&(x.lanes|=o),Kc(f.return,o,r),S.lanes|=o;break}x=x.next}}else if(f.tag===10)_=f.type===r.type?null:f.child;else if(f.tag===18){if(_=f.return,_===null)throw Error(t(341));_.lanes|=o,S=_.alternate,S!==null&&(S.lanes|=o),Kc(_,o,r),_=f.sibling}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===r){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}zt(n,r,d.children,o),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Qs(r,o),d=pn(d),c=c(d),r.flags|=1,zt(n,r,c,o),r.child;case 14:return c=r.type,d=An(c,r.pendingProps),d=An(c.type,d),Up(n,r,c,d,o);case 15:return zp(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:An(c,d),Ql(n,r),r.tag=1,Wt(c)?(n=!0,Nl(r)):n=!1,Qs(r,o),Dp(r,c,d),ch(r,c,d,o),ph(null,r,c,!0,n,o);case 19:return Qp(n,r,o);case 22:return Bp(n,r,o)}throw Error(t(156,r.tag))};function vm(n,r){return Lo(n,r)}function L0(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,o,c){return new L0(n,r,o,c)}function bh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function M0(n){if(typeof n=="function")return bh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===yt)return 14}return 2}function si(n,r){var o=n.alternate;return o===null?(o=yn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ou(n,r,o,c,d,f){var _=2;if(c=n,typeof n=="function")bh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return es(o.children,d,f,r);case w:_=8,d|=8;break;case I:return n=yn(12,o,r,d|2),n.elementType=I,n.lanes=f,n;case A:return n=yn(13,o,r,d),n.elementType=A,n.lanes=f,n;case Be:return n=yn(19,o,r,d),n.elementType=Be,n.lanes=f,n;case Ye:return au(o,d,f,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case D:_=9;break e;case b:_=11;break e;case yt:_=14;break e;case xt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(_,o,r,d),r.elementType=n,r.type=c,r.lanes=f,r}function es(n,r,o,c){return n=yn(7,n,c,r),n.lanes=o,n}function au(n,r,o,c){return n=yn(22,n,c,r),n.elementType=Ye,n.lanes=o,n.stateNode={isHidden:!1},n}function Oh(n,r,o){return n=yn(6,n,null,r),n.lanes=o,n}function Lh(n,r,o){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function F0(n,r,o,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Mh(n,r,o,c,d,f,_,S,x){return n=new F0(n,r,o,S,x),r===1?(r=1,f===!0&&(r|=8)):r=0,f=yn(3,null,null,r),n.current=f,f.stateNode=n,f.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(f),n}function j0(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function wm(n){if(!n)return Yr;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Wt(o))return Kf(n,o,r)}return r}function Em(n,r,o,c,d,f,_,S,x){return n=Mh(o,c,!0,n,d,f,_,S,x),n.context=wm(null),o=n.current,c=Bt(),d=ri(o),f=wr(c,d),f.callback=r??null,Zr(o,f,d),n.current.lanes=d,Fi(n,d,c),Qt(n,c),n}function lu(n,r,o,c){var d=r.current,f=Bt(),_=ri(d);return o=wm(o),r.context===null?r.context=o:r.pendingContext=o,r=wr(f,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Zr(d,r,_),n!==null&&(Rn(n,d,_,f),jl(n,d,_)),_}function uu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Fh(n,r){Tm(n,r),(n=n.alternate)&&Tm(n,r)}function U0(){return null}var Im=typeof reportError=="function"?reportError:function(n){console.error(n)};function jh(n){this._internalRoot=n}cu.prototype.render=jh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));lu(n,r,null,null)},cu.prototype.unmount=jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ji(function(){lu(null,n,null,null)}),r[mr]=null}};function cu(n){this._internalRoot=n}cu.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ho();n={blockedOn:null,target:n,priority:r};for(var o=0;o<tn.length&&r!==0&&r<tn[o].priority;o++);tn.splice(o,0,n),o===0&&Cs(n)}};function Uh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Sm(){}function z0(n,r,o,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var j=uu(_);f.call(j)}}var _=Em(r,c,n,0,null,!1,!1,"",Sm);return n._reactRootContainer=_,n[mr]=_.current,ra(n.nodeType===8?n.parentNode:n),Ji(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=uu(x);S.call(j)}}var x=Mh(n,0,!1,null,null,!1,!1,"",Sm);return n._reactRootContainer=x,n[mr]=x.current,ra(n.nodeType===8?n.parentNode:n),Ji(function(){lu(r,x,o,c)}),x}function du(n,r,o,c,d){var f=o._reactRootContainer;if(f){var _=f;if(typeof d=="function"){var S=d;d=function(){var x=uu(_);S.call(x)}}lu(r,_,n,d)}else _=z0(o,r,n,d,c);return uu(_)}$o=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Le(r.pendingLanes);o!==0&&(Bo(r,o|1),Qt(r,He()),(be&6)===0&&(eo=He()+500,Jr()))}break;case 13:Ji(function(){var c=vr(n,1);if(c!==null){var d=Bt();Rn(c,n,1,d)}}),Fh(n,1)}},As=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var o=Bt();Rn(r,n,134217728,o)}Fh(n,134217728)}},qo=function(n){if(n.tag===13){var r=ri(n),o=vr(n,r);if(o!==null){var c=Bt();Rn(o,n,r,c)}Fh(n,r)}},Ho=function(){return Ne},Wo=function(n,r){var o=Ne;try{return Ne=n,r()}finally{Ne=o}},sr=function(n,r,o){switch(r){case"input":if(Ri(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var d=xl(c);if(!d)throw Error(t(90));Co(c),Ri(c,d)}}}break;case"textarea":el(n,o);break;case"select":r=o.value,r!=null&&vn(n,!!o.multiple,r,!1)}},rl=Nh,il=Ji;var B0={usingClientEntryPoint:!1,Events:[oa,zs,xl,Mr,Fr,Nh]},wa={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$0={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Se.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=hl(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{bi=fu.inject($0),Zt=fu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B0,Yt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(r))throw Error(t(200));return j0(n,r,null,o)},Yt.createRoot=function(n,r){if(!Uh(n))throw Error(t(299));var o=!1,c="",d=Im;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Mh(n,1,!1,null,null,o,!1,c,d),n[mr]=r.current,ra(n.nodeType===8?n.parentNode:n),new jh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=hl(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Ji(n)},Yt.hydrate=function(n,r,o){if(!hu(r))throw Error(t(200));return du(null,n,r,!0,o)},Yt.hydrateRoot=function(n,r,o){if(!Uh(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,f="",_=Im;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(_=o.onRecoverableError)),r=Em(r,null,n,1,o??null,d,!1,f,_),n[mr]=r.current,ra(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,d]:r.mutableSourceEagerHydrationData.push(o,d);return new cu(r)},Yt.render=function(n,r,o){if(!hu(r))throw Error(t(200));return du(null,n,r,!1,o)},Yt.unmountComponentAtNode=function(n){if(!hu(n))throw Error(t(40));return n._reactRootContainer?(Ji(function(){du(null,null,n,!1,function(){n._reactRootContainer=null,n[mr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Nh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!hu(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return du(n,r,o,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Dm;function X0(){if(Dm)return $h.exports;Dm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),$h.exports=J0(),$h.exports}var Vm;function Z0(){if(Vm)return pu;Vm=1;var i=X0();return pu.createRoot=i.createRoot,pu.hydrateRoot=i.hydrateRoot,pu}var ew=Z0();const tw=fy(ew);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rw=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),bm=i=>{const e=rw(i);return e.charAt(0).toUpperCase()+e.slice(1)},py=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=$t.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:u,iconNode:h,...m},y)=>$t.createElement("svg",{ref:y,...iw,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:py("lucide",a),...m},[...h.map(([v,T])=>$t.createElement(v,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(i,e)=>{const t=$t.forwardRef(({className:s,...a},u)=>$t.createElement(sw,{ref:u,iconNode:e,className:py(`lucide-${nw(bm(i))}`,`lucide-${i}`,s),...a}));return t.displayName=bm(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Om=qt("arrow-right",ow);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],lw=qt("building-2",aw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Lm=qt("check",uw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],hw=qt("circle-check",cw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],fw=qt("clipboard-list",dw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],mw=qt("clock",pw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],yw=qt("layout-grid",gw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],vw=qt("log-out",_w);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Mm=qt("package",ww);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Tw=qt("plus",Ew);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Sw=qt("tag",Iw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Fm=qt("trending-up",Aw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Cw=qt("triangle-alert",kw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],xw=qt("users",Rw);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Nw=qt("x",Pw),Dw=()=>{};var jm={};/**
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
 */const my=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Vw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=i[t++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=i[t++],h=i[t++],m=i[t++],y=((a&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|h&63)}}return e.join("")},gy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const u=i[a],h=a+1<i.length,m=h?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,T=u>>2,C=(u&3)<<4|m>>4;let R=(m&15)<<2|v>>6,z=v&63;y||(z=64,h||(R=64)),s.push(t[T],t[C],t[R],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(my(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Vw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const u=t[i.charAt(a++)],m=a<i.length?t[i.charAt(a)]:0;++a;const v=a<i.length?t[i.charAt(a)]:64;++a;const C=a<i.length?t[i.charAt(a)]:64;if(++a,u==null||m==null||v==null||C==null)throw new bw;const R=u<<2|m>>4;if(s.push(R),v!==64){const z=m<<4&240|v>>2;if(s.push(z),C!==64){const X=v<<6&192|C;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class bw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ow=function(i){const e=my(i);return gy.encodeByteArray(e,!0)},Nu=function(i){return Ow(i).replace(/\./g,"")},yy=function(i){try{return gy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mw=()=>Lw().__FIREBASE_DEFAULTS__,Fw=()=>{if(typeof process>"u"||typeof jm>"u")return;const i=jm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},jw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&yy(i[1]);return e&&JSON.parse(e)},Ju=()=>{try{return Dw()||Mw()||Fw()||jw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},_y=i=>Ju()?.emulatorHosts?.[i],Uw=i=>{const e=_y(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},vy=()=>Ju()?.config,wy=i=>Ju()?.[`_${i}`];/**
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
 */class zw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function wo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ey(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function Bw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Nu(JSON.stringify(t)),Nu(JSON.stringify(h)),""].join(".")}const Ca={};function $w(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ca))Ca[e]?i.emulator.push(e):i.prod.push(e);return i}function qw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Um=!1;function Ty(i,e){if(typeof window>"u"||typeof document>"u"||!wo(window.location.host)||Ca[i]===e||Ca[i]||Um)return;Ca[i]=e;function t(R){return`__firebase__banner__${R}`}const s="__firebase__banner",u=$w().prod.length>0;function h(){const R=document.getElementById(s);R&&R.remove()}function m(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function y(R,z){R.setAttribute("width","24"),R.setAttribute("id",z),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function v(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{Um=!0,h()},R}function T(R,z){R.setAttribute("id",z),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function C(){const R=qw(s),z=t("text"),X=document.getElementById(z)||document.createElement("span"),J=t("learnmore"),K=document.getElementById(J)||document.createElement("a"),pe=t("preprendIcon"),de=document.getElementById(pe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const Te=R.element;m(Te),T(K,J);const Se=v();y(de,pe),Te.append(de,X,K,Se),document.body.appendChild(Te)}u?(X.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function Ww(){const i=Ju()?.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kw(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Qw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yw(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Jw(){return!Ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Zw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{e(a.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const eE="FirebaseError";class Pr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=eE,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,u=this.errors[e],h=u?tE(u,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Pr(a,m,s)}}function tE(i,e){return i.replace(nE,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const nE=/\{\$([^}]+)}/g;function rE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function os(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const u=i[a],h=e[a];if(zm(u)&&zm(h)){if(!os(u,h))return!1}else if(u!==h)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function zm(i){return i!==null&&typeof i=="object"}/**
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
 */function qa(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function iE(i,e){const t=new sE(i,e);return t.subscribe.bind(t)}class sE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");oE(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Wh),a.error===void 0&&(a.error=Wh),a.complete===void 0&&(a.complete=Wh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Wh(){}/**
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
 */function jt(i){return i&&i._delegate?i._delegate:i}class as{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ts="[DEFAULT]";/**
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
 */class aE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new zw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uE(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(a)}return a}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),a=this.onInitCallbacks.get(s)??new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lE(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lE(i){return i===ts?void 0:i}function uE(i){return i.instantiationMode==="EAGER"}/**
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
 */class cE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new aE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ce||(Ce={}));const hE={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},dE=Ce.INFO,fE={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},pE=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=fE[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=dE,this._logHandler=pE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const mE=(i,e)=>e.some(t=>i instanceof t);let Bm,$m;function gE(){return Bm||(Bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yE(){return $m||($m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,sd=new WeakMap,Sy=new WeakMap,Gh=new WeakMap,Nd=new WeakMap;function _E(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(fi(i.result)),a()},h=()=>{s(i.error),a()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Iy.set(t,i)}).catch(()=>{}),Nd.set(e,i),e}function vE(i){if(sd.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),a()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});sd.set(i,e)}let od={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return sd.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Sy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function wE(i){od=i(od)}function EE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Kh(this),e,...t);return Sy.set(s,e.sort?e.sort():[e]),fi(s)}:yE().includes(i)?function(...e){return i.apply(Kh(this),e),fi(Iy.get(this))}:function(...e){return fi(i.apply(Kh(this),e))}}function TE(i){return typeof i=="function"?EE(i):(i instanceof IDBTransaction&&vE(i),mE(i,gE())?new Proxy(i,od):i)}function fi(i){if(i instanceof IDBRequest)return _E(i);if(Gh.has(i))return Gh.get(i);const e=TE(i);return e!==i&&(Gh.set(i,e),Nd.set(e,i)),e}const Kh=i=>Nd.get(i);function IE(i,e,{blocked:t,upgrade:s,blocking:a,terminated:u}={}){const h=indexedDB.open(i,e),m=fi(h);return s&&h.addEventListener("upgradeneeded",y=>{s(fi(h.result),y.oldVersion,y.newVersion,fi(h.transaction),y)}),t&&h.addEventListener("blocked",y=>t(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const SE=["get","getKey","getAll","getAllKeys","count"],AE=["put","add","delete","clear"],Qh=new Map;function qm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Qh.get(e))return Qh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=AE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||SE.includes(t)))return;const u=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let v=y.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),a&&y.done]))[0]};return Qh.set(e,u),u}wE(i=>({...i,get:(e,t,s)=>qm(e,t)||i.get(e,t,s),has:(e,t)=>!!qm(e,t)||i.has(e,t)}));/**
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
 */class kE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(CE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function CE(i){return i.getComponent()?.type==="VERSION"}const ad="@firebase/app",Hm="0.14.9";/**
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
 */const Ar=new Pd("@firebase/app"),RE="@firebase/app-compat",xE="@firebase/analytics-compat",PE="@firebase/analytics",NE="@firebase/app-check-compat",DE="@firebase/app-check",VE="@firebase/auth",bE="@firebase/auth-compat",OE="@firebase/database",LE="@firebase/data-connect",ME="@firebase/database-compat",FE="@firebase/functions",jE="@firebase/functions-compat",UE="@firebase/installations",zE="@firebase/installations-compat",BE="@firebase/messaging",$E="@firebase/messaging-compat",qE="@firebase/performance",HE="@firebase/performance-compat",WE="@firebase/remote-config",GE="@firebase/remote-config-compat",KE="@firebase/storage",QE="@firebase/storage-compat",YE="@firebase/firestore",JE="@firebase/ai",XE="@firebase/firestore-compat",ZE="firebase",eT="12.10.0";/**
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
 */const ld="[DEFAULT]",tT={[ad]:"fire-core",[RE]:"fire-core-compat",[PE]:"fire-analytics",[xE]:"fire-analytics-compat",[DE]:"fire-app-check",[NE]:"fire-app-check-compat",[VE]:"fire-auth",[bE]:"fire-auth-compat",[OE]:"fire-rtdb",[LE]:"fire-data-connect",[ME]:"fire-rtdb-compat",[FE]:"fire-fn",[jE]:"fire-fn-compat",[UE]:"fire-iid",[zE]:"fire-iid-compat",[BE]:"fire-fcm",[$E]:"fire-fcm-compat",[qE]:"fire-perf",[HE]:"fire-perf-compat",[WE]:"fire-rc",[GE]:"fire-rc-compat",[KE]:"fire-gcs",[QE]:"fire-gcs-compat",[YE]:"fire-fst",[XE]:"fire-fst-compat",[JE]:"fire-vertex","fire-js":"fire-js",[ZE]:"fire-js-all"};/**
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
 */const Du=new Map,nT=new Map,ud=new Map;function Wm(i,e){try{i.container.addComponent(e)}catch(t){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function po(i){const e=i.name;if(ud.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;ud.set(e,i);for(const t of Du.values())Wm(t,i);for(const t of nT.values())Wm(t,i);return!0}function Dd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function xn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const rT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new $a("app","Firebase",rT);/**
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
 */class iT{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=eT;function Ay(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s={name:ld,automaticDataCollectionEnabled:!0,...e},a=s.name;if(typeof a!="string"||!a)throw pi.create("bad-app-name",{appName:String(a)});if(t||(t=vy()),!t)throw pi.create("no-options");const u=Du.get(a);if(u){if(os(t,u.options)&&os(s,u.config))return u;throw pi.create("duplicate-app",{appName:a})}const h=new cE(a);for(const y of ud.values())h.addComponent(y);const m=new iT(t,s,h);return Du.set(a,m),m}function ky(i=ld){const e=Du.get(i);if(!e&&i===ld&&vy())return Ay();if(!e)throw pi.create("no-app",{appName:i});return e}function mi(i,e,t){let s=tT[i]??i;t&&(s+=`-${t}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(h.join(" "));return}po(new as(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sT="firebase-heartbeat-database",oT=1,Va="firebase-heartbeat-store";let Yh=null;function Cy(){return Yh||(Yh=IE(sT,oT,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Va)}catch(t){console.warn(t)}}}}).catch(i=>{throw pi.create("idb-open",{originalErrorMessage:i.message})})),Yh}async function aT(i){try{const t=(await Cy()).transaction(Va),s=await t.objectStore(Va).get(Ry(i));return await t.done,s}catch(e){if(e instanceof Pr)Ar.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e?.message});Ar.warn(t.message)}}}async function Gm(i,e){try{const s=(await Cy()).transaction(Va,"readwrite");await s.objectStore(Va).put(e,Ry(i)),await s.done}catch(t){if(t instanceof Pr)Ar.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t?.message});Ar.warn(s.message)}}}function Ry(i){return`${i.name}!${i.options.appId}`}/**
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
 */const lT=1024,uT=30;class cT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Km();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>uT){const a=fT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ar.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Km(),{heartbeatsToSend:t,unsentEntries:s}=hT(this._heartbeatsCache.heartbeats),a=Nu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Ar.warn(e),""}}}function Km(){return new Date().toISOString().substring(0,10)}function hT(i,e=lT){const t=[];let s=i.slice();for(const a of i){const u=t.find(h=>h.agent===a.agent);if(u){if(u.dates.push(a.date),Qm(t)>e){u.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Qm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Gm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qm(i){return Nu(JSON.stringify({version:2,heartbeats:i})).length}function fT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function pT(i){po(new as("platform-logger",e=>new kE(e),"PRIVATE")),po(new as("heartbeat",e=>new cT(e),"PRIVATE")),mi(ad,Hm,i),mi(ad,Hm,"esm2020"),mi("fire-js","")}pT("");var mT="firebase",gT="12.10.0";/**
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
 */mi(mT,gT,"app");var Ym=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gi,xy;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,w){function I(){}I.prototype=w.prototype,N.F=w.prototype,N.prototype=new I,N.prototype.constructor=N,N.D=function(P,D,b){for(var A=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)A[Be-2]=arguments[Be];return w.prototype[D].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,w,I){I||(I=0);const P=Array(16);if(typeof w=="string")for(var D=0;D<16;++D)P[D]=w.charCodeAt(I++)|w.charCodeAt(I++)<<8|w.charCodeAt(I++)<<16|w.charCodeAt(I++)<<24;else for(D=0;D<16;++D)P[D]=w[I++]|w[I++]<<8|w[I++]<<16|w[I++]<<24;w=N.g[0],I=N.g[1],D=N.g[2];let b=N.g[3],A;A=w+(b^I&(D^b))+P[0]+3614090360&4294967295,w=I+(A<<7&4294967295|A>>>25),A=b+(D^w&(I^D))+P[1]+3905402710&4294967295,b=w+(A<<12&4294967295|A>>>20),A=D+(I^b&(w^I))+P[2]+606105819&4294967295,D=b+(A<<17&4294967295|A>>>15),A=I+(w^D&(b^w))+P[3]+3250441966&4294967295,I=D+(A<<22&4294967295|A>>>10),A=w+(b^I&(D^b))+P[4]+4118548399&4294967295,w=I+(A<<7&4294967295|A>>>25),A=b+(D^w&(I^D))+P[5]+1200080426&4294967295,b=w+(A<<12&4294967295|A>>>20),A=D+(I^b&(w^I))+P[6]+2821735955&4294967295,D=b+(A<<17&4294967295|A>>>15),A=I+(w^D&(b^w))+P[7]+4249261313&4294967295,I=D+(A<<22&4294967295|A>>>10),A=w+(b^I&(D^b))+P[8]+1770035416&4294967295,w=I+(A<<7&4294967295|A>>>25),A=b+(D^w&(I^D))+P[9]+2336552879&4294967295,b=w+(A<<12&4294967295|A>>>20),A=D+(I^b&(w^I))+P[10]+4294925233&4294967295,D=b+(A<<17&4294967295|A>>>15),A=I+(w^D&(b^w))+P[11]+2304563134&4294967295,I=D+(A<<22&4294967295|A>>>10),A=w+(b^I&(D^b))+P[12]+1804603682&4294967295,w=I+(A<<7&4294967295|A>>>25),A=b+(D^w&(I^D))+P[13]+4254626195&4294967295,b=w+(A<<12&4294967295|A>>>20),A=D+(I^b&(w^I))+P[14]+2792965006&4294967295,D=b+(A<<17&4294967295|A>>>15),A=I+(w^D&(b^w))+P[15]+1236535329&4294967295,I=D+(A<<22&4294967295|A>>>10),A=w+(D^b&(I^D))+P[1]+4129170786&4294967295,w=I+(A<<5&4294967295|A>>>27),A=b+(I^D&(w^I))+P[6]+3225465664&4294967295,b=w+(A<<9&4294967295|A>>>23),A=D+(w^I&(b^w))+P[11]+643717713&4294967295,D=b+(A<<14&4294967295|A>>>18),A=I+(b^w&(D^b))+P[0]+3921069994&4294967295,I=D+(A<<20&4294967295|A>>>12),A=w+(D^b&(I^D))+P[5]+3593408605&4294967295,w=I+(A<<5&4294967295|A>>>27),A=b+(I^D&(w^I))+P[10]+38016083&4294967295,b=w+(A<<9&4294967295|A>>>23),A=D+(w^I&(b^w))+P[15]+3634488961&4294967295,D=b+(A<<14&4294967295|A>>>18),A=I+(b^w&(D^b))+P[4]+3889429448&4294967295,I=D+(A<<20&4294967295|A>>>12),A=w+(D^b&(I^D))+P[9]+568446438&4294967295,w=I+(A<<5&4294967295|A>>>27),A=b+(I^D&(w^I))+P[14]+3275163606&4294967295,b=w+(A<<9&4294967295|A>>>23),A=D+(w^I&(b^w))+P[3]+4107603335&4294967295,D=b+(A<<14&4294967295|A>>>18),A=I+(b^w&(D^b))+P[8]+1163531501&4294967295,I=D+(A<<20&4294967295|A>>>12),A=w+(D^b&(I^D))+P[13]+2850285829&4294967295,w=I+(A<<5&4294967295|A>>>27),A=b+(I^D&(w^I))+P[2]+4243563512&4294967295,b=w+(A<<9&4294967295|A>>>23),A=D+(w^I&(b^w))+P[7]+1735328473&4294967295,D=b+(A<<14&4294967295|A>>>18),A=I+(b^w&(D^b))+P[12]+2368359562&4294967295,I=D+(A<<20&4294967295|A>>>12),A=w+(I^D^b)+P[5]+4294588738&4294967295,w=I+(A<<4&4294967295|A>>>28),A=b+(w^I^D)+P[8]+2272392833&4294967295,b=w+(A<<11&4294967295|A>>>21),A=D+(b^w^I)+P[11]+1839030562&4294967295,D=b+(A<<16&4294967295|A>>>16),A=I+(D^b^w)+P[14]+4259657740&4294967295,I=D+(A<<23&4294967295|A>>>9),A=w+(I^D^b)+P[1]+2763975236&4294967295,w=I+(A<<4&4294967295|A>>>28),A=b+(w^I^D)+P[4]+1272893353&4294967295,b=w+(A<<11&4294967295|A>>>21),A=D+(b^w^I)+P[7]+4139469664&4294967295,D=b+(A<<16&4294967295|A>>>16),A=I+(D^b^w)+P[10]+3200236656&4294967295,I=D+(A<<23&4294967295|A>>>9),A=w+(I^D^b)+P[13]+681279174&4294967295,w=I+(A<<4&4294967295|A>>>28),A=b+(w^I^D)+P[0]+3936430074&4294967295,b=w+(A<<11&4294967295|A>>>21),A=D+(b^w^I)+P[3]+3572445317&4294967295,D=b+(A<<16&4294967295|A>>>16),A=I+(D^b^w)+P[6]+76029189&4294967295,I=D+(A<<23&4294967295|A>>>9),A=w+(I^D^b)+P[9]+3654602809&4294967295,w=I+(A<<4&4294967295|A>>>28),A=b+(w^I^D)+P[12]+3873151461&4294967295,b=w+(A<<11&4294967295|A>>>21),A=D+(b^w^I)+P[15]+530742520&4294967295,D=b+(A<<16&4294967295|A>>>16),A=I+(D^b^w)+P[2]+3299628645&4294967295,I=D+(A<<23&4294967295|A>>>9),A=w+(D^(I|~b))+P[0]+4096336452&4294967295,w=I+(A<<6&4294967295|A>>>26),A=b+(I^(w|~D))+P[7]+1126891415&4294967295,b=w+(A<<10&4294967295|A>>>22),A=D+(w^(b|~I))+P[14]+2878612391&4294967295,D=b+(A<<15&4294967295|A>>>17),A=I+(b^(D|~w))+P[5]+4237533241&4294967295,I=D+(A<<21&4294967295|A>>>11),A=w+(D^(I|~b))+P[12]+1700485571&4294967295,w=I+(A<<6&4294967295|A>>>26),A=b+(I^(w|~D))+P[3]+2399980690&4294967295,b=w+(A<<10&4294967295|A>>>22),A=D+(w^(b|~I))+P[10]+4293915773&4294967295,D=b+(A<<15&4294967295|A>>>17),A=I+(b^(D|~w))+P[1]+2240044497&4294967295,I=D+(A<<21&4294967295|A>>>11),A=w+(D^(I|~b))+P[8]+1873313359&4294967295,w=I+(A<<6&4294967295|A>>>26),A=b+(I^(w|~D))+P[15]+4264355552&4294967295,b=w+(A<<10&4294967295|A>>>22),A=D+(w^(b|~I))+P[6]+2734768916&4294967295,D=b+(A<<15&4294967295|A>>>17),A=I+(b^(D|~w))+P[13]+1309151649&4294967295,I=D+(A<<21&4294967295|A>>>11),A=w+(D^(I|~b))+P[4]+4149444226&4294967295,w=I+(A<<6&4294967295|A>>>26),A=b+(I^(w|~D))+P[11]+3174756917&4294967295,b=w+(A<<10&4294967295|A>>>22),A=D+(w^(b|~I))+P[2]+718787259&4294967295,D=b+(A<<15&4294967295|A>>>17),A=I+(b^(D|~w))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+w&4294967295,N.g[1]=N.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+b&4294967295}s.prototype.v=function(N,w){w===void 0&&(w=N.length);const I=w-this.blockSize,P=this.C;let D=this.h,b=0;for(;b<w;){if(D==0)for(;b<=I;)a(this,N,b),b+=this.blockSize;if(typeof N=="string"){for(;b<w;)if(P[D++]=N.charCodeAt(b++),D==this.blockSize){a(this,P),D=0;break}}else for(;b<w;)if(P[D++]=N[b++],D==this.blockSize){a(this,P),D=0;break}}this.h=D,this.o+=w},s.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var w=1;w<N.length-8;++w)N[w]=0;w=this.o*8;for(var I=N.length-8;I<N.length;++I)N[I]=w&255,w/=256;for(this.v(N),N=Array(16),w=0,I=0;I<4;++I)for(let P=0;P<32;P+=8)N[w++]=this.g[I]>>>P&255;return N};function u(N,w){var I=m;return Object.prototype.hasOwnProperty.call(I,N)?I[N]:I[N]=w(N)}function h(N,w){this.h=w;const I=[];let P=!0;for(let D=N.length-1;D>=0;D--){const b=N[D]|0;P&&b==w||(I[D]=b,P=!1)}this.g=I}var m={};function y(N){return-128<=N&&N<128?u(N,function(w){return new h([w|0],w<0?-1:0)}):new h([N|0],N<0?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return C;if(N<0)return K(v(-N));const w=[];let I=1;for(let P=0;N>=I;P++)w[P]=N/I|0,I*=4294967296;return new h(w,0)}function T(N,w){if(N.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N.charAt(0)=="-")return K(T(N.substring(1),w));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=v(Math.pow(w,8));let P=C;for(let b=0;b<N.length;b+=8){var D=Math.min(8,N.length-b);const A=parseInt(N.substring(b,b+D),w);D<8?(D=v(Math.pow(w,D)),P=P.j(D).add(v(A))):(P=P.j(I),P=P.add(v(A)))}return P}var C=y(0),R=y(1),z=y(16777216);i=h.prototype,i.m=function(){if(J(this))return-K(this).m();let N=0,w=1;for(let I=0;I<this.g.length;I++){const P=this.i(I);N+=(P>=0?P:4294967296+P)*w,w*=4294967296}return N},i.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(X(this))return"0";if(J(this))return"-"+K(this).toString(N);const w=v(Math.pow(N,6));var I=this;let P="";for(;;){const D=Se(I,w).g;I=pe(I,D.j(w));let b=((I.g.length>0?I.g[0]:I.h)>>>0).toString(N);if(I=D,X(I))return b+P;for(;b.length<6;)b="0"+b;P=b+P}},i.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function X(N){if(N.h!=0)return!1;for(let w=0;w<N.g.length;w++)if(N.g[w]!=0)return!1;return!0}function J(N){return N.h==-1}i.l=function(N){return N=pe(this,N),J(N)?-1:X(N)?0:1};function K(N){const w=N.g.length,I=[];for(let P=0;P<w;P++)I[P]=~N.g[P];return new h(I,~N.h).add(R)}i.abs=function(){return J(this)?K(this):this},i.add=function(N){const w=Math.max(this.g.length,N.g.length),I=[];let P=0;for(let D=0;D<=w;D++){let b=P+(this.i(D)&65535)+(N.i(D)&65535),A=(b>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);P=A>>>16,b&=65535,A&=65535,I[D]=A<<16|b}return new h(I,I[I.length-1]&-2147483648?-1:0)};function pe(N,w){return N.add(K(w))}i.j=function(N){if(X(this)||X(N))return C;if(J(this))return J(N)?K(this).j(K(N)):K(K(this).j(N));if(J(N))return K(this.j(K(N)));if(this.l(z)<0&&N.l(z)<0)return v(this.m()*N.m());const w=this.g.length+N.g.length,I=[];for(var P=0;P<2*w;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(let D=0;D<N.g.length;D++){const b=this.i(P)>>>16,A=this.i(P)&65535,Be=N.i(D)>>>16,yt=N.i(D)&65535;I[2*P+2*D]+=A*yt,de(I,2*P+2*D),I[2*P+2*D+1]+=b*yt,de(I,2*P+2*D+1),I[2*P+2*D+1]+=A*Be,de(I,2*P+2*D+1),I[2*P+2*D+2]+=b*Be,de(I,2*P+2*D+2)}for(N=0;N<w;N++)I[N]=I[2*N+1]<<16|I[2*N];for(N=w;N<2*w;N++)I[N]=0;return new h(I,0)};function de(N,w){for(;(N[w]&65535)!=N[w];)N[w+1]+=N[w]>>>16,N[w]&=65535,w++}function Te(N,w){this.g=N,this.h=w}function Se(N,w){if(X(w))throw Error("division by zero");if(X(N))return new Te(C,C);if(J(N))return w=Se(K(N),w),new Te(K(w.g),K(w.h));if(J(w))return w=Se(N,K(w)),new Te(K(w.g),w.h);if(N.g.length>30){if(J(N)||J(w))throw Error("slowDivide_ only works with positive integers.");for(var I=R,P=w;P.l(N)<=0;)I=qe(I),P=qe(P);var D=Pe(I,1),b=Pe(P,1);for(P=Pe(P,2),I=Pe(I,2);!X(P);){var A=b.add(P);A.l(N)<=0&&(D=D.add(I),b=A),P=Pe(P,1),I=Pe(I,1)}return w=pe(N,D.j(w)),new Te(D,w)}for(D=C;N.l(w)>=0;){for(I=Math.max(1,Math.floor(N.m()/w.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),b=v(I),A=b.j(w);J(A)||A.l(N)>0;)I-=P,b=v(I),A=b.j(w);X(b)&&(b=R),D=D.add(b),N=pe(N,A)}return new Te(D,N)}i.B=function(N){return Se(this,N).h},i.and=function(N){const w=Math.max(this.g.length,N.g.length),I=[];for(let P=0;P<w;P++)I[P]=this.i(P)&N.i(P);return new h(I,this.h&N.h)},i.or=function(N){const w=Math.max(this.g.length,N.g.length),I=[];for(let P=0;P<w;P++)I[P]=this.i(P)|N.i(P);return new h(I,this.h|N.h)},i.xor=function(N){const w=Math.max(this.g.length,N.g.length),I=[];for(let P=0;P<w;P++)I[P]=this.i(P)^N.i(P);return new h(I,this.h^N.h)};function qe(N){const w=N.g.length+1,I=[];for(let P=0;P<w;P++)I[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(I,N.h)}function Pe(N,w){const I=w>>5;w%=32;const P=N.g.length-I,D=[];for(let b=0;b<P;b++)D[b]=w>0?N.i(b+I)>>>w|N.i(b+I+1)<<32-w:N.i(b+I);return new h(D,N.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,xy=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=T,gi=h}).apply(typeof Ym<"u"?Ym:typeof self<"u"?self:typeof window<"u"?window:{});var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Py,Ia,Ny,Eu,cd,Dy,Vy,by;(function(){var i,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof mu=="object"&&mu];for(var p=0;p<l.length;++p){var g=l[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function a(l,p){if(p)e:{var g=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var M=l[E];if(!(M in g))break e;g=g[M]}l=l[l.length-1],E=g[l],p=p(E),p!=E&&p!=null&&e(g,l,{configurable:!0,writable:!0,value:p})}}a("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(l){return l||function(p){var g=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&g.push([E,p[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function m(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function y(l,p,g){return l.call.apply(l.bind,arguments)}function v(l,p,g){return v=y,v.apply(null,arguments)}function T(l,p){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function C(l,p){function g(){}g.prototype=p.prototype,l.Z=p.prototype,l.prototype=new g,l.prototype.constructor=l,l.Ob=function(E,M,U){for(var Y=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)Y[_e-2]=arguments[_e];return p.prototype[M].apply(E,Y)}}var R=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function z(l){const p=l.length;if(p>0){const g=Array(p);for(let E=0;E<p;E++)g[E]=l[E];return g}return[]}function X(l,p){for(let E=1;E<arguments.length;E++){const M=arguments[E];var g=typeof M;if(g=g!="object"?g:M?Array.isArray(M)?"array":g:"null",g=="array"||g=="object"&&typeof M.length=="number"){g=l.length||0;const U=M.length||0;l.length=g+U;for(let Y=0;Y<U;Y++)l[g+Y]=M[Y]}else l.push(M)}}class J{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function K(l){h.setTimeout(()=>{throw l},0)}function pe(){var l=N;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class de{constructor(){this.h=this.g=null}add(p,g){const E=Te.get();E.set(p,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Te=new J(()=>new Se,l=>l.reset());class Se{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,Pe=!1,N=new de,w=()=>{const l=Promise.resolve(void 0);qe=()=>{l.then(I)}};function I(){for(var l;l=pe();){try{l.h.call(l.g)}catch(g){K(g)}var p=Te;p.j(l),p.h<100&&(p.h++,l.next=p.g,p.g=l)}Pe=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var b=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};h.addEventListener("test",g,p),h.removeEventListener("test",g,p)}catch{}return l})();function A(l){return/^[\s\xa0]*$/.test(l)}function Be(l,p){D.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,p)}C(Be,D),Be.prototype.init=function(l,p){const g=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget,p||(g=="mouseover"?p=l.fromElement:g=="mouseout"&&(p=l.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&Be.Z.h.call(this)},Be.prototype.h=function(){Be.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var yt="closure_listenable_"+(Math.random()*1e6|0),xt=0;function Ye(l,p,g,E,M){this.listener=l,this.proxy=null,this.src=p,this.type=g,this.capture=!!E,this.ha=M,this.key=++xt,this.da=this.fa=!1}function Z(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function le(l,p,g){for(const E in l)p.call(g,l[E],E,l)}function ne(l,p){for(const g in l)p.call(void 0,l[g],g,l)}function O(l){const p={};for(const g in l)p[g]=l[g];return p}const $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(l,p){let g,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(g in E)l[g]=E[g];for(let U=0;U<$.length;U++)g=$[U],Object.prototype.hasOwnProperty.call(E,g)&&(l[g]=E[g])}}function Ee(l){this.src=l,this.g={},this.h=0}Ee.prototype.add=function(l,p,g,E,M){const U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);const Y=ke(l,p,E,M);return Y>-1?(p=l[Y],g||(p.fa=!1)):(p=new Ye(p,this.src,U,!!E,M),p.fa=g,l.push(p)),p};function Ae(l,p){const g=p.type;if(g in l.g){var E=l.g[g],M=Array.prototype.indexOf.call(E,p,void 0),U;(U=M>=0)&&Array.prototype.splice.call(E,M,1),U&&(Z(p),l.g[g].length==0&&(delete l.g[g],l.h--))}}function ke(l,p,g,E){for(let M=0;M<l.length;++M){const U=l[M];if(!U.da&&U.listener==p&&U.capture==!!g&&U.ha==E)return M}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Ve={};function Ue(l,p,g,E,M){if(Array.isArray(p)){for(let U=0;U<p.length;U++)Ue(l,p[U],g,E,M);return null}return g=Ro(g),l&&l[yt]?l.J(p,g,m(E)?!!E.capture:!1,M):Ut(l,p,g,!1,E,M)}function Ut(l,p,g,E,M,U){if(!p)throw Error("Invalid event type");const Y=m(M)?!!M.capture:!!M;let _e=gs(l);if(_e||(l[Me]=_e=new Ee(l)),g=_e.add(p,g,E,Y,U),g.proxy)return g;if(E=ps(),g.proxy=E,E.src=l,E.listener=g,l.addEventListener)b||(M=Y),M===void 0&&(M=!1),l.addEventListener(p.toString(),E,M);else if(l.attachEvent)l.attachEvent(ms(p.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ps(){function l(g){return p.call(l.src,l.listener,g)}const p=Za;return l}function Co(l,p,g,E,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)Co(l,p[U],g,E,M);else E=m(E)?!!E.capture:!!E,g=Ro(g),l&&l[yt]?(l=l.i,U=String(p).toString(),U in l.g&&(p=l.g[U],g=ke(p,g,E,M),g>-1&&(Z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete l.g[U],l.h--)))):l&&(l=gs(l))&&(p=l.g[p.toString()],l=-1,p&&(l=ke(p,g,E,M)),(g=l>-1?p[l]:null)&&Nr(g))}function Nr(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[yt])Ae(p.i,l);else{var g=l.type,E=l.proxy;p.removeEventListener?p.removeEventListener(g,E,l.capture):p.detachEvent?p.detachEvent(ms(g),E):p.addListener&&p.removeListener&&p.removeListener(E),(g=gs(p))?(Ae(g,l),g.h==0&&(g.src=null,p[Me]=null)):Z(l)}}}function ms(l){return l in Ve?Ve[l]:Ve[l]="on"+l}function Za(l,p){if(l.da)l=!0;else{p=new Be(p,this);const g=l.listener,E=l.ha||l.src;l.fa&&Nr(l),l=g.call(E,p)}return l}function gs(l){return l=l[Me],l instanceof Ee?l:null}var Ri="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ro(l){return typeof l=="function"?l:(l[Ri]||(l[Ri]=function(p){return l.handleEvent(p)}),l[Ri])}function at(){P.call(this),this.i=new Ee(this),this.M=this,this.G=null}C(at,P),at.prototype[yt]=!0,at.prototype.removeEventListener=function(l,p,g,E){Co(this,l,p,g,E)};function rt(l,p){var g,E=l.G;if(E)for(g=[];E;E=E.G)g.push(E);if(l=l.M,E=p.type||p,typeof p=="string")p=new D(p,l);else if(p instanceof D)p.target=p.target||l;else{var M=p;p=new D(E,l),we(p,M)}M=!0;let U,Y;if(g)for(Y=g.length-1;Y>=0;Y--)U=p.g=g[Y],M=vn(U,E,!0,p)&&M;if(U=p.g=l,M=vn(U,E,!0,p)&&M,M=vn(U,E,!1,p)&&M,g)for(Y=0;Y<g.length;Y++)U=p.g=g[Y],M=vn(U,E,!1,p)&&M}at.prototype.N=function(){if(at.Z.N.call(this),this.i){var l=this.i;for(const p in l.g){const g=l.g[p];for(let E=0;E<g.length;E++)Z(g[E]);delete l.g[p],l.h--}}this.G=null},at.prototype.J=function(l,p,g,E){return this.i.add(String(l),p,!1,g,E)},at.prototype.K=function(l,p,g,E){return this.i.add(String(l),p,!0,g,E)};function vn(l,p,g,E){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let U=0;U<p.length;++U){const Y=p[U];if(Y&&!Y.da&&Y.capture==g){const _e=Y.listener,it=Y.ha||Y.src;Y.fa&&Ae(l.i,Y),M=_e.call(it,E)!==!1&&M}}return M&&!E.defaultPrevented}function xo(l,p){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=v(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:h.setTimeout(l,p||0)}function Po(l){l.g=xo(()=>{l.g=null,l.i&&(l.i=!1,Po(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class el extends P{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Po(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(l){P.call(this),this.h=l,this.g={}}C(Dr,P);var No=[];function ys(l){le(l.g,function(p,g){this.g.hasOwnProperty(g)&&Nr(p)},l),l.g={}}Dr.prototype.N=function(){Dr.Z.N.call(this),ys(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=h.JSON.stringify,tl=h.JSON.parse,xi=class{stringify(l){return h.JSON.stringify(l,void 0)}parse(l){return h.JSON.parse(l,void 0)}};function br(){}function nl(){}var Or={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){D.call(this,"d")}C(_s,D);function Do(){D.call(this,"c")}C(Do,D);var wn={},vs=null;function Lr(){return vs=vs||new at}wn.Ia="serverreachability";function ws(l){D.call(this,wn.Ia,l)}C(ws,D);function sr(l){const p=Lr();rt(p,new ws(p))}wn.STAT_EVENT="statevent";function or(l,p){D.call(this,wn.STAT_EVENT,l),this.stat=p}C(or,D);function tt(l){const p=Lr();rt(p,new or(p,l))}wn.Ja="timingevent";function Vo(l,p){D.call(this,wn.Ja,l),this.size=p}C(Vo,D);function Mr(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){l()},p)}function Fr(){this.g=!0}Fr.prototype.ua=function(){this.g=!1};function rl(l,p,g,E,M,U){l.info(function(){if(l.g)if(U){var Y="",_e=U.split("&");for(let je=0;je<_e.length;je++){var it=_e[je].split("=");if(it.length>1){const lt=it[0];it=it[1];const sn=lt.split("_");Y=sn.length>=2&&sn[1]=="type"?Y+(lt+"="+it+"&"):Y+(lt+"=redacted&")}}}else Y=null;else Y=U;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+p+`
`+g+`
`+Y})}function il(l,p,g,E,M,U,Y){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+p+`
`+g+`
`+U+" "+Y})}function Dn(l,p,g,E){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+Pi(l,g)+(E?" "+E:"")})}function sl(l,p){l.info(function(){return"TIMEOUT: "+p})}Fr.prototype.info=function(){};function Pi(l,p){if(!l.g)return p;if(!p)return null;try{const U=JSON.parse(p);if(U){for(l=0;l<U.length;l++)if(Array.isArray(U[l])){var g=U[l];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var M=E[0];if(M!="noop"&&M!="stop"&&M!="close")for(let Y=1;Y<E.length;Y++)E[Y]=""}}}}return Vr(U)}catch{return p}}var jr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ur={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ol;function ar(){}C(ar,br),ar.prototype.g=function(){return new XMLHttpRequest},ol=new ar;function Vn(l){return encodeURIComponent(String(l))}function Es(l){var p=1;l=l.split(":");const g=[];for(;p>0&&l.length;)g.push(l.shift()),p--;return l.length&&g.push(l.join(":")),g}function cn(l,p,g,E){this.j=l,this.i=p,this.l=g,this.S=E||1,this.V=new Dr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var ll={},bo={};function En(l,p,g){l.M=1,l.A=ur(hn(p)),l.u=g,l.R=!0,Oo(l,null)}function Oo(l,p){l.F=Date.now(),Ni(l),l.B=hn(l.A);var g=l.B,E=l.S;Array.isArray(E)||(E=[String(E)]),Ho(g.i,"t",E),l.C=0,g=l.j.L,l.h=new al,l.g=_l(l.j,g?p:null,!l.u),l.P>0&&(l.O=new el(v(l.Y,l,l.g),l.P)),p=l.V,g=l.g,E=l.ba;var M="readystatechange";Array.isArray(M)||(M&&(No[0]=M.toString()),M=No);for(let U=0;U<M.length;U++){const Y=Ue(g,M[U],E||p.handleEvent,!1,p.h||p);if(!Y)break;p.g[Y.key]=Y}p=l.J?O(l.J):{},l.u?(l.v||(l.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,p)):(l.v="GET",l.g.ea(l.B,l.v,null,p)),sr(),rl(l.i,l.v,l.B,l.l,l.S,l.u)}cn.prototype.ba=function(l){l=l.target;const p=this.O;p&&Un(l)==3?p.j():this.Y(l)},cn.prototype.Y=function(l){try{if(l==this.g)e:{const _e=Un(this.g),it=this.g.ya(),je=this.g.ca();if(!(_e<3)&&(_e!=3||this.g&&(this.h.h||this.g.la()||gl(this.g)))){this.K||_e!=4||it==7||(it==8||je<=0?sr(3):sr(2)),Ts(this);var p=this.g.ca();this.X=p;var g=ul(this);if(this.o=p==200,il(this.i,this.v,this.B,this.l,this.S,_e,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,M=this.g;if((E=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(E)){var U=E;break t}}U=null}if(l=U)Dn(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,He(this,l);else{this.o=!1,this.m=3,tt(12),lr(this),Di(this);break e}}if(this.R){l=!0;let lt;for(;!this.K&&this.C<g.length;)if(lt=hl(this,g),lt==bo){_e==4&&(this.m=4,tt(14),l=!1),Dn(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==ll){this.m=4,tt(15),Dn(this.i,this.l,g,"[Invalid Chunk]"),l=!1;break}else Dn(this.i,this.l,lt,null),He(this,lt);if(cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||g.length!=0||this.h.h||(this.m=1,tt(16),l=!1),this.o=this.o&&l,!l)Dn(this.i,this.l,g,"[Invalid Chunked Response]"),lr(this),Di(this);else if(g.length>0&&!this.W){this.W=!0;var Y=this.j;Y.g==this&&Y.aa&&!Y.P&&(Y.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),zi(Y),Y.P=!0,tt(11))}}else Dn(this.i,this.l,g,null),He(this,g);_e==4&&lr(this),this.o&&!this.K&&(_e==4?Ds(this.j,this):(this.o=!1,Ni(this)))}else Go(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),lr(this),Di(this)}}}catch{}finally{}};function ul(l){if(!cl(l))return l.g.la();const p=gl(l.g);if(p==="")return"";let g="";const E=p.length,M=Un(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return lr(l),Di(l),"";l.h.i=new h.TextDecoder}for(let U=0;U<E;U++)l.h.h=!0,g+=l.h.i.decode(p[U],{stream:!(M&&U==E-1)});return p.length=0,l.h.g+=g,l.C=0,l.h.g}function cl(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function hl(l,p){var g=l.C,E=p.indexOf(`
`,g);return E==-1?bo:(g=Number(p.substring(g,E)),isNaN(g)?ll:(E+=1,E+g>p.length?bo:(p=p.slice(E,E+g),l.C=E+g,p)))}cn.prototype.cancel=function(){this.K=!0,lr(this)};function Ni(l){l.T=Date.now()+l.H,Lo(l,l.H)}function Lo(l,p){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Mr(v(l.aa,l),p)}function Ts(l){l.D&&(h.clearTimeout(l.D),l.D=null)}cn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(sl(this.i,this.B),this.M!=2&&(sr(),tt(17)),lr(this),this.m=2,Di(this)):Lo(this,this.T-l)};function Di(l){l.j.I==0||l.K||Ds(l.j,l)}function lr(l){Ts(l);var p=l.O;p&&typeof p.dispose=="function"&&p.dispose(),l.O=null,ys(l.V),l.g&&(p=l.g,l.g=null,p.abort(),p.dispose())}function He(l,p){try{var g=l.j;if(g.I!=0&&(g.g==l||Fo(g.h,l))){if(!l.L&&Fo(g.h,l)&&g.I==3){try{var E=g.Ba.g.parse(p)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<l.F)Ns(g),nn(g);else break e;$n(g),tt(18)}}else g.xa=M[1],0<g.xa-g.K&&M[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Mr(v(g.Va,g),6e3));Vi(g.h)<=1&&g.ta&&(g.ta=void 0)}else rn(g,11)}else if((l.L||g.g==l)&&Ns(g),!A(p))for(M=g.Ba.g.parse(p),p=0;p<M.length;p++){let je=M[p];const lt=je[0];if(!(lt<=g.K))if(g.K=lt,je=je[1],g.I==2)if(je[0]=="c"){g.M=je[1],g.ba=je[2];const sn=je[3];sn!=null&&(g.ka=sn,g.j.info("VER="+g.ka));const pr=je[4];pr!=null&&(g.za=pr,g.j.info("SVER="+g.za));const qn=je[5];qn!=null&&typeof qn=="number"&&qn>0&&(E=1.5*qn,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const Hn=l.g;if(Hn){const Os=Hn.g?Hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Os){var U=E.h;U.g||Os.indexOf("spdy")==-1&&Os.indexOf("quic")==-1&&Os.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ss(U,U.h),U.h=null))}if(E.G){const Yo=Hn.g?Hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yo&&(E.wa=Yo,Le(E.J,E.G,Yo))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-l.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var Y=l;if(E.na=Qo(E,E.L?E.ba:null,E.W),Y.L){bi(E.h,Y);var _e=Y,it=E.O;it&&(_e.H=it),_e.D&&(Ts(_e),Ni(_e)),E.g=Y}else Pt(E);g.i.length>0&&fr(g)}else je[0]!="stop"&&je[0]!="close"||rn(g,7);else g.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?rn(g,7):xs(g):je[0]!="noop"&&g.l&&g.l.qa(je),g.A=0)}}sr(4)}catch{}}var _c=class{constructor(l,p){this.g=l,this.map=p}};function Is(l){this.l=l||10,h.PerformanceNavigationTiming?(l=h.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mo(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Vi(l){return l.h?1:l.g?l.g.size:0}function Fo(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function Ss(l,p){l.g?l.g.add(p):l.h=p}function bi(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Is.prototype.cancel=function(){if(this.i=Zt(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Zt(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const g of l.g.values())p=p.concat(g.G);return p}return z(l.i)}var dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function en(l,p){if(l){l=l.split("&");for(let g=0;g<l.length;g++){const E=l[g].indexOf("=");let M,U=null;E>=0?(M=l[g].substring(0,E),U=l[g].substring(E+1)):M=l[g],p(M,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function bn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;l instanceof bn?(this.l=l.l,Oi(this,l.j),this.o=l.o,this.g=l.g,On(this,l.u),this.h=l.h,zr(this,Wo(l.i)),this.m=l.m):l&&(p=String(l).match(dl))?(this.l=!1,Oi(this,p[1]||"",!0),this.o=Li(p[2]||""),this.g=Li(p[3]||"",!0),On(this,p[4]),this.h=Li(p[5]||"",!0),zr(this,p[6]||"",!0),this.m=Li(p[7]||"")):(this.l=!1,this.i=new Ne(null,this.l))}bn.prototype.toString=function(){const l=[];var p=this.j;p&&l.push(Mi(p,Uo,!0),":");var g=this.g;return(g||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Mi(p,Uo,!0),"@"),l.push(Vn(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&l.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Mi(g,g.charAt(0)=="/"?Fi:zo,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Mi(g,Bo)),l.join("")},bn.prototype.resolve=function(l){const p=hn(this);let g=!!l.j;g?Oi(p,l.j):g=!!l.o,g?p.o=l.o:g=!!l.g,g?p.g=l.g:g=l.u!=null;var E=l.h;if(g)On(p,l.u);else if(g=!!l.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var M=p.h.lastIndexOf("/");M!=-1&&(E=p.h.slice(0,M+1)+E)}if(M=E,M==".."||M==".")E="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){E=M.lastIndexOf("/",0)==0,M=M.split("/");const U=[];for(let Y=0;Y<M.length;){const _e=M[Y++];_e=="."?E&&Y==M.length&&U.push(""):_e==".."?((U.length>1||U.length==1&&U[0]!="")&&U.pop(),E&&Y==M.length&&U.push("")):(U.push(_e),E=!0)}E=U.join("/")}else E=M}return g?p.h=E:g=l.i.toString()!=="",g?zr(p,Wo(l.i)):g=!!l.m,g&&(p.m=l.m),p};function hn(l){return new bn(l)}function Oi(l,p,g){l.j=g?Li(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function On(l,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);l.u=p}else l.u=null}function zr(l,p,g){p instanceof Ne?(l.i=p,ks(l.i,l.l)):(g||(p=Mi(p,vc)),l.i=new Ne(p,l.l))}function Le(l,p,g){l.i.set(p,g)}function ur(l){return Le(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Li(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Mi(l,p,g){return typeof l=="string"?(l=encodeURI(l).replace(p,jo),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function jo(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Uo=/[#\/\?@]/g,zo=/[#\?:]/g,Fi=/[#\?]/g,vc=/[#\?@]/g,Bo=/#/g;function Ne(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Ln(l){l.g||(l.g=new Map,l.h=0,l.i&&en(l.i,function(p,g){l.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}i=Ne.prototype,i.add=function(l,p){Ln(this),this.i=null,l=Mn(this,l);let g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(p),this.h+=1,this};function $o(l,p){Ln(l),p=Mn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function As(l,p){return Ln(l),p=Mn(l,p),l.g.has(p)}i.forEach=function(l,p){Ln(this),this.g.forEach(function(g,E){g.forEach(function(M){l.call(p,M,E,this)},this)},this)};function qo(l,p){Ln(l);let g=[];if(typeof p=="string")As(l,p)&&(g=g.concat(l.g.get(Mn(l,p))));else for(l=Array.from(l.g.values()),p=0;p<l.length;p++)g=g.concat(l[p]);return g}i.set=function(l,p){return Ln(this),this.i=null,l=Mn(this,l),As(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},i.get=function(l,p){return l?(l=qo(this,l),l.length>0?String(l[0]):p):p};function Ho(l,p,g){$o(l,p),g.length>0&&(l.i=null,l.g.set(Mn(l,p),z(g)),l.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var g=p[E];const M=Vn(g);g=qo(this,g);for(let U=0;U<g.length;U++){let Y=M;g[U]!==""&&(Y+="="+Vn(g[U])),l.push(Y)}}return this.i=l.join("&")};function Wo(l){const p=new Ne;return p.i=l.i,l.g&&(p.g=new Map(l.g),p.h=l.h),p}function Mn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function ks(l,p){p&&!l.j&&(Ln(l),l.i=null,l.g.forEach(function(g,E){const M=E.toLowerCase();E!=M&&($o(this,E),Ho(this,M,g))},l)),l.j=p}function Fn(l,p){const g=new Fr;if(h.Image){const E=new Image;E.onload=T(Tt,g,"TestLoadImage: loaded",!0,p,E),E.onerror=T(Tt,g,"TestLoadImage: error",!1,p,E),E.onabort=T(Tt,g,"TestLoadImage: abort",!1,p,E),E.ontimeout=T(Tt,g,"TestLoadImage: timeout",!1,p,E),h.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else p(!1)}function jn(l,p){const g=new Fr,E=new AbortController,M=setTimeout(()=>{E.abort(),Tt(g,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(M),U.ok?Tt(g,"TestPingServer: ok",!0,p):Tt(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Tt(g,"TestPingServer: error",!1,p)})}function Tt(l,p,g,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(g)}catch{}}function ji(){this.g=new xi}function cr(l){this.i=l.Sb||null,this.h=l.ab||!1}C(cr,br),cr.prototype.g=function(){return new tn(this.i,this.h)};function tn(l,p){at.call(this),this.H=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(tn,at),i=tn.prototype,i.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=p,this.readyState=1,Tn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(p.body=l),(this.H||h).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},i.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fl(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function fl(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}i.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Br(this):Tn(this),this.readyState==3&&fl(this)}},i.Oa=function(l){this.g&&(this.response=this.responseText=l,Br(this))},i.Na=function(l){this.g&&(this.response=l,Br(this))},i.ga=function(){this.g&&Br(this)};function Br(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Tn(l)}i.setRequestHeader=function(l,p){this.A.append(l,p)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=p.next();return l.join(`\r
`)};function Tn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pl(l){let p="";return le(l,function(g,E){p+=E,p+=":",p+=g,p+=`\r
`}),p}function Cs(l,p,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=pl(g),typeof l=="string"?g!=null&&Vn(g):Le(l,p,g))}function ze(l){at.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(ze,at);var ml=/^https?$/i,wc=["POST","PUT"];i=ze.prototype,i.Fa=function(l){this.H=l},i.ea=function(l,p,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ol.g(),this.g.onreadystatechange=R(v(this.Ca,this));try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){$r(this,U);return}if(l=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)g.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),M=h.FormData&&l instanceof h.FormData,!(Array.prototype.indexOf.call(wc,p,void 0)>=0)||E||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Y]of g)this.g.setRequestHeader(U,Y);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(U){$r(this,U)}};function $r(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.o=5,qr(l),dr(l)}function qr(l){l.A||(l.A=!0,rt(l,"complete"),rt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,rt(this,"complete"),rt(this,"abort"),dr(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dr(this,!0)),ze.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hr(this):this.Xa())},i.Xa=function(){hr(this)};function hr(l){if(l.h&&typeof u<"u"){if(l.v&&Un(l)==4)setTimeout(l.Ca.bind(l),0);else if(rt(l,"readystatechange"),Un(l)==4){l.h=!1;try{const U=l.ca();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var E;if(E=U===0){let Y=String(l.D).match(dl)[1]||null;!Y&&h.self&&h.self.location&&(Y=h.self.location.protocol.slice(0,-1)),E=!ml.test(Y?Y.toLowerCase():"")}g=E}if(g)rt(l,"complete"),rt(l,"success");else{l.o=6;try{var M=Un(l)>2?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.ca()+"]",qr(l)}}finally{dr(l)}}}}function dr(l,p){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const g=l.g;l.g=null,p||rt(l,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Un(l){return l.g?l.g.readyState:0}i.ca=function(){try{return Un(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),tl(p)}};function gl(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Go(l){const p={};l=(l.g&&Un(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(A(l[E]))continue;var g=Es(l[E]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=p[M]||[];p[M]=U,U.push(g)}ne(p,function(E){return E.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||p}function Rs(l){this.za=0,this.i=[],this.j=new Fr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zn("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zn("baseRetryDelayMs",5e3,l),this.Za=zn("retryDelaySeedMs",1e4,l),this.Ta=zn("forwardChannelMaxRetries",2,l),this.va=zn("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Is(l&&l.concurrentRequestLimit),this.Ba=new ji,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Rs.prototype,i.ka=8,i.I=1,i.connect=function(l,p,g,E){tt(0),this.W=l,this.H=p||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=Qo(this,null,this.W),fr(this)};function xs(l){if(Ps(l),l.I==3){var p=l.V++,g=hn(l.J);if(Le(g,"SID",l.M),Le(g,"RID",p),Le(g,"TYPE","terminate"),Bn(l,g),p=new cn(l,l.j,p),p.M=2,p.A=ur(hn(g)),g=!1,h.navigator&&h.navigator.sendBeacon)try{g=h.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&h.Image&&(new Image().src=p.A,g=!0),g||(p.g=_l(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Ni(p)}Bi(l)}function nn(l){l.g&&(zi(l),l.g.cancel(),l.g=null)}function Ps(l){nn(l),l.v&&(h.clearTimeout(l.v),l.v=null),Ns(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&h.clearTimeout(l.m),l.m=null)}function fr(l){if(!Mo(l.h)&&!l.m){l.m=!0;var p=l.Ea;qe||w(),Pe||(qe(),Pe=!0),N.add(p,l),l.D=0}}function yl(l,p){return Vi(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=p.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Mr(v(l.Ea,l,p),Vs(l,l.D)),l.D++,!0)}i.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const M=new cn(this,this.j,l);let U=this.o;if(this.U&&(U?(U=O(U),we(U,this.U)):U=this.U),this.u!==null||this.R||(M.J=U,U=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Ko(this,M,p),g=hn(this.J),Le(g,"RID",l),Le(g,"CVER",22),this.G&&Le(g,"X-HTTP-Session-Id",this.G),Bn(this,g),U&&(this.R?p="headers="+Vn(pl(U))+"&"+p:this.u&&Cs(g,this.u,U)),Ss(this.h,M),this.Ra&&Le(g,"TYPE","init"),this.S?(Le(g,"$req",p),Le(g,"SID","null"),M.U=!0,En(M,g,null)):En(M,g,p),this.I=2}}else this.I==3&&(l?Ui(this,l):this.i.length==0||Mo(this.h)||Ui(this))};function Ui(l,p){var g;p?g=p.l:g=l.V++;const E=hn(l.J);Le(E,"SID",l.M),Le(E,"RID",g),Le(E,"AID",l.K),Bn(l,E),l.u&&l.o&&Cs(E,l.u,l.o),g=new cn(l,l.j,g,l.D+1),l.u===null&&(g.J=l.o),p&&(l.i=p.G.concat(l.i)),p=Ko(l,g,1e3),g.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),Ss(l.h,g),En(g,E,p)}function Bn(l,p){l.H&&le(l.H,function(g,E){Le(p,E,g)}),l.l&&le({},function(g,E){Le(p,E,g)})}function Ko(l,p,g){g=Math.min(l.i.length,g);const E=l.l?v(l.l.Ka,l.l,l):null;e:{var M=l.i;let _e=-1;for(;;){const it=["count="+g];_e==-1?g>0?(_e=M[0].g,it.push("ofs="+_e)):_e=0:it.push("ofs="+_e);let je=!0;for(let lt=0;lt<g;lt++){var U=M[lt].g;const sn=M[lt].map;if(U-=_e,U<0)_e=Math.max(0,M[lt].g-100),je=!1;else try{U="req"+U+"_"||"";try{var Y=sn instanceof Map?sn:Object.entries(sn);for(const[pr,qn]of Y){let Hn=qn;m(qn)&&(Hn=Vr(qn)),it.push(U+pr+"="+encodeURIComponent(Hn))}}catch(pr){throw it.push(U+"type="+encodeURIComponent("_badmap")),pr}}catch{E&&E(sn)}}if(je){Y=it.join("&");break e}}Y=void 0}return l=l.i.splice(0,g),p.G=l,Y}function Pt(l){if(!l.g&&!l.v){l.Y=1;var p=l.Da;qe||w(),Pe||(qe(),Pe=!0),N.add(p,l),l.A=0}}function $n(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Mr(v(l.Da,l),Vs(l,l.A)),l.A++,!0)}i.Da=function(){if(this.v=null,Hr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Mr(v(this.Wa,this),l)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),nn(this),Hr(this))};function zi(l){l.B!=null&&(h.clearTimeout(l.B),l.B=null)}function Hr(l){l.g=new cn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var p=hn(l.na);Le(p,"RID","rpc"),Le(p,"SID",l.M),Le(p,"AID",l.K),Le(p,"CI",l.F?"0":"1"),!l.F&&l.ia&&Le(p,"TO",l.ia),Le(p,"TYPE","xmlhttp"),Bn(l,p),l.u&&l.o&&Cs(p,l.u,l.o),l.O&&(l.g.H=l.O);var g=l.g;l=l.ba,g.M=1,g.A=ur(hn(p)),g.u=null,g.R=!0,Oo(g,l)}i.Va=function(){this.C!=null&&(this.C=null,nn(this),$n(this),tt(19))};function Ns(l){l.C!=null&&(h.clearTimeout(l.C),l.C=null)}function Ds(l,p){var g=null;if(l.g==p){Ns(l),zi(l),l.g=null;var E=2}else if(Fo(l.h,p))g=p.G,bi(l.h,p),E=1;else return;if(l.I!=0){if(p.o)if(E==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var M=l.D;E=Lr(),rt(E,new Vo(E,g)),fr(l)}else Pt(l);else if(M=p.m,M==3||M==0&&p.X>0||!(E==1&&yl(l,p)||E==2&&$n(l)))switch(g&&g.length>0&&(p=l.h,p.i=p.i.concat(g)),M){case 1:rn(l,5);break;case 4:rn(l,10);break;case 3:rn(l,6);break;default:rn(l,2)}}}function Vs(l,p){let g=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(g*=2),g*p}function rn(l,p){if(l.j.info("Error code "+p),p==2){var g=v(l.bb,l),E=l.Ua;const M=!E;E=new bn(E||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||Oi(E,"https"),ur(E),M?Fn(E.toString(),g):jn(E.toString(),g)}else tt(2);l.I=0,l.l&&l.l.pa(p),Bi(l),Ps(l)}i.bb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Bi(l){if(l.I=0,l.ja=[],l.l){const p=Zt(l.h);(p.length!=0||l.i.length!=0)&&(X(l.ja,p),X(l.ja,l.i),l.h.i.length=0,z(l.i),l.i.length=0),l.l.oa()}}function Qo(l,p,g){var E=g instanceof bn?hn(g):new bn(g);if(E.g!="")p&&(E.g=p+"."+E.g),On(E,E.u);else{var M=h.location;E=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const U=new bn(null);E&&Oi(U,E),p&&(U.g=p),M&&On(U,M),g&&(U.h=g),E=U}return g=l.G,p=l.wa,g&&p&&Le(E,g,p),Le(E,"VER",l.ka),Bn(l,E),E}function _l(l,p,g){if(p&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Aa&&!l.ma?new ze(new cr({ab:g})):new ze(l.ma),p.Fa(l.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function vl(){}i=vl.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function bs(){}bs.prototype.g=function(l,p){return new It(l,p)};function It(l,p){at.call(this),this.g=new Rs(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(l?l["X-WebChannel-Client-Profile"]=p.sa:l={"X-WebChannel-Client-Profile":p.sa}),this.g.U=l,(l=p&&p.Qb)&&!A(l)&&(this.g.u=l),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Wr(this)}C(It,at),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){xs(this.g)},It.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.v&&(g={},g.__data__=Vr(l),l=g);p.i.push(new _c(p.Ya++,l)),p.I==3&&fr(p)},It.prototype.N=function(){this.g.l=null,delete this.j,xs(this.g),delete this.g,It.Z.N.call(this)};function wl(l){_s.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const g in p){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}C(wl,_s);function El(){Do.call(this),this.status=1}C(El,Do);function Wr(l){this.g=l}C(Wr,vl),Wr.prototype.ra=function(){rt(this.g,"a")},Wr.prototype.qa=function(l){rt(this.g,new wl(l))},Wr.prototype.pa=function(l){rt(this.g,new El)},Wr.prototype.oa=function(){rt(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,by=function(){return new bs},Vy=function(){return Lr()},Dy=wn,cd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jr.NO_ERROR=0,jr.TIMEOUT=8,jr.HTTP_ERROR=6,Eu=jr,Ur.COMPLETE="complete",Ny=Ur,nl.EventType=Or,Or.OPEN="a",Or.CLOSE="b",Or.ERROR="c",Or.MESSAGE="d",at.prototype.listen=at.prototype.J,Ia=nl,ze.prototype.listenOnce=ze.prototype.K,ze.prototype.getLastError=ze.prototype.Ha,ze.prototype.getLastErrorCode=ze.prototype.ya,ze.prototype.getStatus=ze.prototype.ca,ze.prototype.getResponseJson=ze.prototype.La,ze.prototype.getResponseText=ze.prototype.la,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Fa,Py=ze}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let To="12.10.0";function yT(i){To=i}/**
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
 *//**
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
 */const ls=new Pd("@firebase/firestore");function no(){return ls.logLevel}function te(i,...e){if(ls.logLevel<=Ce.DEBUG){const t=e.map(Vd);ls.debug(`Firestore (${To}): ${i}`,...t)}}function kr(i,...e){if(ls.logLevel<=Ce.ERROR){const t=e.map(Vd);ls.error(`Firestore (${To}): ${i}`,...t)}}function us(i,...e){if(ls.logLevel<=Ce.WARN){const t=e.map(Vd);ls.warn(`Firestore (${To}): ${i}`,...t)}}function Vd(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function fe(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Oy(i,s,t)}function Oy(i,e,t){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw kr(s),new Error(s)}function Fe(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||Oy(e,a,s)}function ve(i,e){return i}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ae extends Pr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Ly{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class vT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class wT{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const a=y=>this.i!==s?(s=this.i,t(y)):Promise.resolve();let u=new rs;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new rs,e.enqueueRetryable((()=>a(this.currentUser)))};const h=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await a(this.currentUser)}))},m=y=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((y=>m(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new rs)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new Ly(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class ET{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class TT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new ET(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const a=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>a(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?a(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Jm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Jm(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ST(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class bd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=ST(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<t&&(s+=e.charAt(a[u]%62))}return s}}function Re(i,e){return i<e?-1:i>e?1:0}function hd(i,e){const t=Math.min(i.length,e.length);for(let s=0;s<t;s++){const a=i.charAt(s),u=e.charAt(s);if(a!==u)return Jh(a)===Jh(u)?Re(a,u):Jh(a)?1:-1}return Re(i.length,e.length)}const AT=55296,kT=57343;function Jh(i){const e=i.charCodeAt(0);return e>=AT&&e<=kT}function mo(i,e,t){return i.length===e.length&&i.every(((s,a)=>t(s,e[a])))}/**
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
 */const Xm="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&fe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&fe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const u=Yn.compareSegments(e.get(a),t.get(a));if(u!==0)return u}return Re(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),a=Yn.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):hd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gi.fromString(e.substring(4,e.length-2))}}class Ke extends Yn{construct(e,t,s){return new Ke(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ae(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((a=>a.length>0)))}return new Ke(t)}static emptyPath(){return new Ke([])}}const CT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Yn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return CT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xm}static keyField(){return new Ct([Xm])}static fromServerFormat(e){const t=[];let s="",a=0;const u=()=>{if(s.length===0)throw new ae(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ae(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ae(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(u(),a++)}if(u(),h)throw new ae(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ke.fromString(e))}static fromName(e){return new ue(Ke.fromString(e).popFirst(5))}static empty(){return new ue(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ke(e.slice()))}}/**
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
 */function My(i,e,t){if(!t)throw new ae(H.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function RT(i,e,t,s){if(e===!0&&s===!0)throw new ae(H.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Zm(i){if(!ue.isDocumentKey(i))throw new ae(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function eg(i){if(ue.isDocumentKey(i))throw new ae(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Fy(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Od(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":fe(12329,{type:typeof i})}function is(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ae(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Od(i);throw new ae(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ht(i,e){const t={typeString:i};return e&&(t.value=e),t}function Ha(i,e){if(!Fy(i))throw new ae(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const h=i[s];if(a&&typeof h!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(u!==void 0&&h!==u.value){t=`Expected '${s}' field to equal '${u.value}'`;break}}if(t)throw new ae(H.INVALID_ARGUMENT,t);return!0}/**
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
 */const tg=-62135596800,ng=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ng);return new Qe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ae(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tg)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ae(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ng}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ha(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:ht("string",Qe._jsonSchemaVersion),seconds:ht("number"),nanoseconds:ht("number")};/**
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
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new Qe(0,0))}static max(){return new ye(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ba=-1;function xT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=ye.fromTimestamp(s===1e9?new Qe(t+1,0):new Qe(t,s));return new vi(a,ue.empty(),e)}function PT(i){return new vi(i.readTime,i.key,ba)}class vi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vi(ye.min(),ue.empty(),ba)}static max(){return new vi(ye.max(),ue.empty(),ba)}}function NT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(i.documentKey,e.documentKey),t!==0?t:Re(i.largestBatchId,e.largestBatchId))}/**
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
 */const DT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Io(i){if(i.code!==H.FAILED_PRECONDITION||i.message!==DT)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B(((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):B.reject(t)}static resolve(e){return new B(((t,s)=>{t(e)}))}static reject(e){return new B(((t,s)=>{s(e)}))}static waitFor(e){return new B(((t,s)=>{let a=0,u=0,h=!1;e.forEach((m=>{++a,m.next((()=>{++u,h&&u===a&&t()}),(y=>s(y)))})),h=!0,u===a&&t()}))}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next((a=>a?B.resolve(a):s()));return t}static forEach(e,t){const s=[];return e.forEach(((a,u)=>{s.push(t.call(this,a,u))})),this.waitFor(s)}static mapArray(e,t){return new B(((s,a)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const v=y;t(e[v]).next((T=>{h[v]=T,++m,m===u&&s(h)}),(T=>a(T)))}}))}static doWhile(e,t){return new B(((s,a)=>{const u=()=>{e()===!0?t().next((()=>{u()}),a):s()};u()}))}}function bT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function So(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Xu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xu.ce=-1;/**
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
 */const Ld=-1;function Zu(i){return i==null}function Vu(i){return i===0&&1/i==-1/0}function OT(i){return typeof i=="number"&&Number.isInteger(i)&&!Vu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const jy="";function LT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=rg(e)),e=MT(i.get(t),e);return rg(e)}function MT(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const u=i.charAt(a);switch(u){case"\0":t+="";break;case jy:t+="";break;default:t+=u}}return t}function rg(i){return i+jy+""}/**
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
 */function ig(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ki(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Uy(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||kt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}}class gu{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,t,s,a,u){this.key=e,this.value=t,this.color=s??kt.RED,this.left=a??kt.EMPTY,this.right=u??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,u){return new kt(e??this.key,t??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,t,s),null):u===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return kt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw fe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw fe(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw fe(57766)}get value(){throw fe(16141)}get color(){throw fe(16727)}get left(){throw fe(29726)}get right(){throw fe(36894)}copy(e,t,s,a,u){return this}insert(e,t,s){return new kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sg(this.data.getIterator())}getIteratorFrom(e){return new sg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class sg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class un{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new un([])}unionWith(e){let t=new gt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class zy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new zy("Invalid base64 string: "+u):u}})(e);return new Rt(t)}static fromUint8Array(e){const t=(function(a){let u="";for(let h=0;h<a.length;++h)u+=String.fromCharCode(a[h]);return u})(e);return new Rt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const FT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=FT.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ot(i.seconds),nanos:ot(i.nanos)}}function ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ei(i){return typeof i=="string"?Rt.fromBase64String(i):Rt.fromUint8Array(i)}/**
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
 */const By="server_timestamp",$y="__type__",qy="__previous_value__",Hy="__local_write_time__";function Md(i){return(i?.mapValue?.fields||{})[$y]?.stringValue===By}function ec(i){const e=i.mapValue.fields[qy];return Md(e)?ec(e):e}function Oa(i){const e=wi(i.mapValue.fields[Hy].timestampValue);return new Qe(e.seconds,e.nanos)}/**
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
 */class jT{constructor(e,t,s,a,u,h,m,y,v,T,C){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=v,this.isUsingEmulator=T,this.apiKey=C}}const bu="(default)";class La{constructor(e,t){this.projectId=e,this.database=t||bu}static empty(){return new La("","")}get isDefaultDatabase(){return this.database===bu}isEqual(e){return e instanceof La&&e.projectId===this.projectId&&e.database===this.database}}function UT(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ae(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new La(i.options.projectId,e)}/**
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
 */const Wy="__type__",zT="__max__",yu={mapValue:{}},Gy="__vector__",Ou="value";function Ti(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Md(i)?4:$T(i)?9007199254740991:BT(i)?10:11:fe(28295,{value:i})}function rr(i,e){if(i===e)return!0;const t=Ti(i);if(t!==Ti(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Oa(i).isEqual(Oa(e));case 3:return(function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const h=wi(a.timestampValue),m=wi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(a,u){return Ei(a.bytesValue).isEqual(Ei(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(a,u){return ot(a.geoPointValue.latitude)===ot(u.geoPointValue.latitude)&&ot(a.geoPointValue.longitude)===ot(u.geoPointValue.longitude)})(i,e);case 2:return(function(a,u){if("integerValue"in a&&"integerValue"in u)return ot(a.integerValue)===ot(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const h=ot(a.doubleValue),m=ot(u.doubleValue);return h===m?Vu(h)===Vu(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return mo(i.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return(function(a,u){const h=a.mapValue.fields||{},m=u.mapValue.fields||{};if(ig(h)!==ig(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!rr(h[y],m[y])))return!1;return!0})(i,e);default:return fe(52216,{left:i})}}function Ma(i,e){return(i.values||[]).find((t=>rr(t,e)))!==void 0}function go(i,e){if(i===e)return 0;const t=Ti(i),s=Ti(e);if(t!==s)return Re(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=ot(u.integerValue||u.doubleValue),y=ot(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1})(i,e);case 3:return og(i.timestampValue,e.timestampValue);case 4:return og(Oa(i),Oa(e));case 5:return hd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=Ei(u),y=Ei(h);return m.compareTo(y)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),y=h.split("/");for(let v=0;v<m.length&&v<y.length;v++){const T=Re(m[v],y[v]);if(T!==0)return T}return Re(m.length,y.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Re(ot(u.latitude),ot(h.latitude));return m!==0?m:Re(ot(u.longitude),ot(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return ag(i.arrayValue,e.arrayValue);case 10:return(function(u,h){const m=u.fields||{},y=h.fields||{},v=m[Ou]?.arrayValue,T=y[Ou]?.arrayValue,C=Re(v?.values?.length||0,T?.values?.length||0);return C!==0?C:ag(v,T)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===yu.mapValue&&h===yu.mapValue)return 0;if(u===yu.mapValue)return 1;if(h===yu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),v=h.fields||{},T=Object.keys(v);y.sort(),T.sort();for(let C=0;C<y.length&&C<T.length;++C){const R=hd(y[C],T[C]);if(R!==0)return R;const z=go(m[y[C]],v[T[C]]);if(z!==0)return z}return Re(y.length,T.length)})(i.mapValue,e.mapValue);default:throw fe(23264,{he:t})}}function og(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Re(i,e);const t=wi(i),s=wi(e),a=Re(t.seconds,s.seconds);return a!==0?a:Re(t.nanos,s.nanos)}function ag(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const u=go(t[a],s[a]);if(u)return u}return Re(t.length,s.length)}function yo(i){return dd(i)}function dd(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=wi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return Ei(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return ue.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",a=!0;for(const u of t.values||[])a?a=!1:s+=",",s+=dd(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${dd(t.fields[h])}`;return a+"}"})(i.mapValue):fe(61005,{value:i})}function Tu(i){switch(Ti(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ec(i);return e?16+Tu(e):16;case 5:return 2*i.stringValue.length;case 6:return Ei(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((a,u)=>a+Tu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let a=0;return ki(s.fields,((u,h)=>{a+=u.length+Tu(h)})),a})(i.mapValue);default:throw fe(13486,{value:i})}}function fd(i){return!!i&&"integerValue"in i}function Fd(i){return!!i&&"arrayValue"in i}function lg(i){return!!i&&"nullValue"in i}function ug(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Iu(i){return!!i&&"mapValue"in i}function BT(i){return(i?.mapValue?.fields||{})[Wy]?.stringValue===Gy}function Ra(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return ki(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Ra(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ra(i.arrayValue.values[t]);return e}return{...i}}function $T(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===zT}/**
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
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Iu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(t)}setAll(e){let t=Ct.emptyPath(),s={},a=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const y=this.getFieldsMap(t);this.applyChanges(y,s,a),s={},a=[],t=m.popLast()}h?s[m.lastSegment()]=Ra(h):a.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,a)}delete(e){const t=this.field(e.popLast());Iu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Iu(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){ki(t,((a,u)=>e[a]=u));for(const a of s)delete e[a]}clone(){return new Xt(Ra(this.value))}}function Ky(i){const e=[];return ki(i.fields,((t,s)=>{const a=new Ct([t]);if(Iu(s)){const u=Ky(s.mapValue).fields;if(u.length===0)e.push(a);else for(const h of u)e.push(a.child(h))}else e.push(a)})),new un(e)}/**
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
 */class Mt{constructor(e,t,s,a,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,ye.min(),ye.min(),ye.min(),Xt.empty(),0)}static newFoundDocument(e,t,s,a){return new Mt(e,1,t,ye.min(),s,a,0)}static newNoDocument(e,t){return new Mt(e,2,t,ye.min(),ye.min(),Xt.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,ye.min(),ye.min(),Xt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lu{constructor(e,t){this.position=e,this.inclusive=t}}function cg(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const u=e[a],h=i.position[a];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=go(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function hg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!rr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mu{constructor(e,t="asc"){this.field=e,this.dir=t}}function qT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Qy{}class pt extends Qy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new WT(e,t,s):t==="array-contains"?new QT(e,s):t==="in"?new YT(e,s):t==="not-in"?new JT(e,s):t==="array-contains-any"?new XT(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new GT(e,s):new KT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(go(t,this.value)):t!==null&&Ti(this.value)===Ti(t)&&this.matchesComparison(go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends Qy{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new ir(e,t)}matches(e){return Yy(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Yy(i){return i.op==="and"}function Jy(i){return HT(i)&&Yy(i)}function HT(i){for(const e of i.filters)if(e instanceof ir)return!1;return!0}function pd(i){if(i instanceof pt)return i.field.canonicalString()+i.op.toString()+yo(i.value);if(Jy(i))return i.filters.map((e=>pd(e))).join(",");{const e=i.filters.map((t=>pd(t))).join(",");return`${i.op}(${e})`}}function Xy(i,e){return i instanceof pt?(function(s,a){return a instanceof pt&&s.op===a.op&&s.field.isEqual(a.field)&&rr(s.value,a.value)})(i,e):i instanceof ir?(function(s,a){return a instanceof ir&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce(((u,h,m)=>u&&Xy(h,a.filters[m])),!0):!1})(i,e):void fe(19439)}function Zy(i){return i instanceof pt?(function(t){return`${t.field.canonicalString()} ${t.op} ${yo(t.value)}`})(i):i instanceof ir?(function(t){return t.op.toString()+" {"+t.getFilters().map(Zy).join(" ,")+"}"})(i):"Filter"}class WT extends pt{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class GT extends pt{constructor(e,t){super(e,"in",t),this.keys=e_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class KT extends pt{constructor(e,t){super(e,"not-in",t),this.keys=e_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function e_(i,e){return(e.arrayValue?.values||[]).map((t=>ue.fromName(t.referenceValue)))}class QT extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Fd(t)&&Ma(t.arrayValue,this.value)}}class YT extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ma(this.value.arrayValue,t)}}class JT extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ma(this.value.arrayValue,t)}}class XT extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Fd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ma(this.value.arrayValue,s)))}}/**
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
 */class ZT{constructor(e,t=null,s=[],a=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=h,this.endAt=m,this.Te=null}}function dg(i,e=null,t=[],s=[],a=null,u=null,h=null){return new ZT(i,e,t,s,a,u,h)}function jd(i){const e=ve(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>pd(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Zu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>yo(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>yo(s))).join(",")),e.Te=t}return e.Te}function Ud(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!qT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Xy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!hg(i.startAt,e.startAt)&&hg(i.endAt,e.endAt)}function md(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class tc{constructor(e,t=null,s=[],a=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function eI(i,e,t,s,a,u,h,m){return new tc(i,e,t,s,a,u,h,m)}function zd(i){return new tc(i)}function fg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function tI(i){return ue.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function nI(i){return i.collectionGroup!==null}function xa(i){const e=ve(i);if(e.Ie===null){e.Ie=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new gt(Ct.comparator);return h.filters.forEach((y=>{y.getFlattenedFilters().forEach((v=>{v.isInequality()&&(m=m.add(v.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new Mu(u,s))})),t.has(Ct.keyField().canonicalString())||e.Ie.push(new Mu(Ct.keyField(),s))}return e.Ie}function Jn(i){const e=ve(i);return e.Ee||(e.Ee=rI(e,xa(i))),e.Ee}function rI(i,e){if(i.limitType==="F")return dg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((a=>{const u=a.dir==="desc"?"asc":"desc";return new Mu(a.field,u)}));const t=i.endAt?new Lu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Lu(i.startAt.position,i.startAt.inclusive):null;return dg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function gd(i,e,t){return new tc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function nc(i,e){return Ud(Jn(i),Jn(e))&&i.limitType===e.limitType}function t_(i){return`${jd(Jn(i))}|lt:${i.limitType}`}function ro(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((a=>Zy(a))).join(", ")}]`),Zu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((a=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(a))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((a=>yo(a))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((a=>yo(a))).join(",")),`Target(${s})`})(Jn(i))}; limitType=${i.limitType})`}function rc(i,e){return e.isFoundDocument()&&(function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,a){for(const u of xa(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0})(i,e)&&(function(s,a){return!(s.startAt&&!(function(h,m,y){const v=cg(h,m,y);return h.inclusive?v<=0:v<0})(s.startAt,xa(s),a)||s.endAt&&!(function(h,m,y){const v=cg(h,m,y);return h.inclusive?v>=0:v>0})(s.endAt,xa(s),a))})(i,e)}function iI(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function n_(i){return(e,t)=>{let s=!1;for(const a of xa(i)){const u=sI(a,e,t);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function sI(i,e,t){const s=i.field.isKeyField()?ue.comparator(e.key,t.key):(function(u,h,m){const y=h.data.field(u),v=m.data.field(u);return y!==null&&v!==null?go(y,v):fe(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return fe(19790,{direction:i.dir})}}/**
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
 */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,((t,s)=>{for(const[a,u]of s)e(a,u)}))}isEmpty(){return Uy(this.inner)}size(){return this.innerSize}}/**
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
 */const oI=new et(ue.comparator);function Cr(){return oI}const r_=new et(ue.comparator);function Sa(...i){let e=r_;for(const t of i)e=e.insert(t.key,t);return e}function i_(i){let e=r_;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ns(){return Pa()}function s_(){return Pa()}function Pa(){return new ds((i=>i.toString()),((i,e)=>i.isEqual(e)))}const aI=new et(ue.comparator),lI=new gt(ue.comparator);function xe(...i){let e=lI;for(const t of i)e=e.add(t);return e}const uI=new gt(Re);function cI(){return uI}/**
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
 */function Bd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(e)?"-0":e}}function o_(i){return{integerValue:""+i}}function hI(i,e){return OT(e)?o_(e):Bd(i,e)}/**
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
 */class ic{constructor(){this._=void 0}}function dI(i,e,t){return i instanceof Fu?(function(a,u){const h={fields:{[$y]:{stringValue:By},[Hy]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&Md(u)&&(u=ec(u)),u&&(h.fields[qy]=u),{mapValue:h}})(t,e):i instanceof Fa?l_(i,e):i instanceof ja?u_(i,e):(function(a,u){const h=a_(a,u),m=pg(h)+pg(a.Ae);return fd(h)&&fd(a.Ae)?o_(m):Bd(a.serializer,m)})(i,e)}function fI(i,e,t){return i instanceof Fa?l_(i,e):i instanceof ja?u_(i,e):t}function a_(i,e){return i instanceof ju?(function(s){return fd(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Fu extends ic{}class Fa extends ic{constructor(e){super(),this.elements=e}}function l_(i,e){const t=c_(e);for(const s of i.elements)t.some((a=>rr(a,s)))||t.push(s);return{arrayValue:{values:t}}}class ja extends ic{constructor(e){super(),this.elements=e}}function u_(i,e){let t=c_(e);for(const s of i.elements)t=t.filter((a=>!rr(a,s)));return{arrayValue:{values:t}}}class ju extends ic{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function pg(i){return ot(i.integerValue||i.doubleValue)}function c_(i){return Fd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function pI(i,e){return i.field.isEqual(e.field)&&(function(s,a){return s instanceof Fa&&a instanceof Fa||s instanceof ja&&a instanceof ja?mo(s.elements,a.elements,rr):s instanceof ju&&a instanceof ju?rr(s.Ae,a.Ae):s instanceof Fu&&a instanceof Fu})(i.transform,e.transform)}class mI{constructor(e,t){this.version=e,this.transformResults=t}}class Xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Su(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class sc{}function h_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new f_(i.key,Xn.none()):new Wa(i.key,i.data,Xn.none());{const t=i.data,s=Xt.empty();let a=new gt(Ct.comparator);for(let u of e.fields)if(!a.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),a=a.add(u)}return new Ci(i.key,s,new un(a.toArray()),Xn.none())}}function gI(i,e,t){i instanceof Wa?(function(a,u,h){const m=a.value.clone(),y=gg(a.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof Ci?(function(a,u,h){if(!Su(a.precondition,u))return void u.convertToUnknownDocument(h.version);const m=gg(a.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(d_(a)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()})(i,e,t):(function(a,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Na(i,e,t,s){return i instanceof Wa?(function(u,h,m,y){if(!Su(u.precondition,h))return m;const v=u.value.clone(),T=yg(u.fieldTransforms,y,h);return v.setAll(T),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null})(i,e,t,s):i instanceof Ci?(function(u,h,m,y){if(!Su(u.precondition,h))return m;const v=yg(u.fieldTransforms,y,h),T=h.data;return T.setAll(d_(u)),T.setAll(v),h.convertToFoundDocument(h.version,T).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((C=>C.field)))})(i,e,t,s):(function(u,h,m){return Su(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function yI(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),u=a_(s.transform,a||null);u!=null&&(t===null&&(t=Xt.empty()),t.set(s.field,u))}return t||null}function mg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&mo(s,a,((u,h)=>pI(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Wa extends sc{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ci extends sc{constructor(e,t,s,a,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function d_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function gg(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let a=0;a<t.length;a++){const u=i[a],h=u.transform,m=e.data.field(u.field);s.set(u.field,fI(h,m,t[a]))}return s}function yg(i,e,t){const s=new Map;for(const a of i){const u=a.transform,h=t.data.field(a.field);s.set(a.field,dI(u,h,e))}return s}class f_ extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _I extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vI{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&gI(u,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=s_();return this.mutations.forEach((a=>{const u=e.get(a.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(a.key)?null:m;const y=h_(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(ye.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),xe())}isEqual(e){return this.batchId===e.batchId&&mo(this.mutations,e.mutations,((t,s)=>mg(t,s)))&&mo(this.baseMutations,e.baseMutations,((t,s)=>mg(t,s)))}}class $d{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let a=(function(){return aI})();const u=e.mutations;for(let h=0;h<u.length;h++)a=a.insert(u[h].key,s[h].version);return new $d(e,t,s,a)}}/**
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
 */class wI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class EI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ct,De;function TI(i){switch(i){case H.OK:return fe(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return fe(15467,{code:i})}}function p_(i){if(i===void 0)return kr("GRPC error has no .code"),H.UNKNOWN;switch(i){case ct.OK:return H.OK;case ct.CANCELLED:return H.CANCELLED;case ct.UNKNOWN:return H.UNKNOWN;case ct.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case ct.INTERNAL:return H.INTERNAL;case ct.UNAVAILABLE:return H.UNAVAILABLE;case ct.UNAUTHENTICATED:return H.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case ct.NOT_FOUND:return H.NOT_FOUND;case ct.ALREADY_EXISTS:return H.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return H.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case ct.ABORTED:return H.ABORTED;case ct.OUT_OF_RANGE:return H.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return H.UNIMPLEMENTED;case ct.DATA_LOSS:return H.DATA_LOSS;default:return fe(39323,{code:i})}}(De=ct||(ct={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function II(){return new TextEncoder}/**
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
 */const SI=new gi([4294967295,4294967295],0);function _g(i){const e=II().encode(i),t=new xy;return t.update(e),new Uint8Array(t.digest())}function vg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new gi([t,s],0),new gi([a,u],0)]}class qd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Aa(`Invalid padding: ${t}`);if(s<0)throw new Aa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=gi.fromNumber(this.ge)}ye(e,t,s){let a=e.add(t.multiply(gi.fromNumber(s)));return a.compare(SI)===1&&(a=new gi([a.getBits(0),a.getBits(1)],0)),a.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=_g(e),[s,a]=vg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,a,u);if(!this.we(h))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new qd(u,a,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.ge===0)return;const t=_g(e),[s,a]=vg(t);for(let u=0;u<this.hashCount;u++){const h=this.ye(s,a,u);this.be(h)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oc{constructor(e,t,s,a,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,Ga.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new oc(ye.min(),a,new et(Re),Cr(),xe())}}class Ga{constructor(e,t,s,a,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ga(s,t,xe(),xe(),xe())}}/**
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
 */class Au{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=a}}class m_{constructor(e,t){this.targetId=e,this.Ce=t}}class g_{constructor(e,t,s=Rt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class wg{constructor(){this.ve=0,this.Fe=Eg(),this.Me=Rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),t=xe(),s=xe();return this.Fe.forEach(((a,u)=>{switch(u){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:fe(38017,{changeType:u})}})),new Ga(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Eg()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class AI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.He=_u(),this.Je=_u(),this.Ze=new et(Re)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:fe(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,a)=>{this.rt(a)&&t(a)}))}st(e){const t=e.targetId,s=e.Ce.count,a=this.ot(t);if(a){const u=a.target;if(md(u))if(s===0){const h=new ue(u.path);this.et(t,h,Mt.newNoDocument(h,ye.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this._t(t);if(h!==s){const m=this.ut(e),y=m?this.ct(m,e,h):1;if(y!==0){this.it(t);const v=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:u=0}=t;let h,m;try{h=Ei(s).toUint8Array()}catch(y){if(y instanceof zy)return us("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new qd(h,a,u)}catch(y){return us(y instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.ge===0?null:m}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let a=0;return s.forEach((u=>{const h=this.Ge.ht(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.et(t,u,null),a++)})),a}Tt(e){const t=new Map;this.ze.forEach(((u,h)=>{const m=this.ot(h);if(m){if(u.current&&md(m.target)){const y=new ue(m.target.path);this.It(y).has(h)||this.Et(h,y)||this.et(h,y,Mt.newNoDocument(y,e))}u.Be&&(t.set(h,u.ke()),u.Ke())}}));let s=xe();this.Je.forEach(((u,h)=>{let m=!0;h.forEachWhile((y=>{const v=this.ot(y);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.je.forEach(((u,h)=>h.setReadTime(e)));const a=new oc(e,t,this.Ze,this.je,s);return this.je=Cr(),this.He=_u(),this.Je=_u(),this.Ze=new et(Re),a}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const a=this.nt(e);this.Et(e,t)?a.qe(t,1):a.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new wg,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new gt(Re),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new gt(Re),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wg),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function _u(){return new et(ue.comparator)}function Eg(){return new et(ue.comparator)}const kI={asc:"ASCENDING",desc:"DESCENDING"},CI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RI={and:"AND",or:"OR"};class xI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yd(i,e){return i.useProto3Json||Zu(e)?e:{value:e}}function Uu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function PI(i,e){return Uu(i,e.toTimestamp())}function Zn(i){return Fe(!!i,49232),ye.fromTimestamp((function(t){const s=wi(t);return new Qe(s.seconds,s.nanos)})(i))}function Hd(i,e){return _d(i,e).canonicalString()}function _d(i,e){const t=(function(a){return new Ke(["projects",a.projectId,"databases",a.database])})(i).child("documents");return e===void 0?t:t.child(e)}function __(i){const e=Ke.fromString(i);return Fe(I_(e),10190,{key:e.toString()}),e}function vd(i,e){return Hd(i.databaseId,e.path)}function Xh(i,e){const t=__(e);if(t.get(1)!==i.databaseId.projectId)throw new ae(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ae(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ue(w_(t))}function v_(i,e){return Hd(i.databaseId,e)}function NI(i){const e=__(i);return e.length===4?Ke.emptyPath():w_(e)}function wd(i){return new Ke(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function w_(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Tg(i,e,t){return{name:vd(i,e),fields:t.value.mapValue.fields}}function DI(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:fe(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],u=(function(v,T){return v.useProto3Json?(Fe(T===void 0||typeof T=="string",58123),Rt.fromBase64String(T||"")):(Fe(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Rt.fromUint8Array(T||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(v){const T=v.code===void 0?H.UNKNOWN:p_(v.code);return new ae(T,v.message||"")})(h);t=new g_(s,a,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Xh(i,s.document.name),u=Zn(s.document.updateTime),h=s.document.createTime?Zn(s.document.createTime):ye.min(),m=new Xt({mapValue:{fields:s.document.fields}}),y=Mt.newFoundDocument(a,u,h,m),v=s.targetIds||[],T=s.removedTargetIds||[];t=new Au(v,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Xh(i,s.document),u=s.readTime?Zn(s.readTime):ye.min(),h=Mt.newNoDocument(a,u),m=s.removedTargetIds||[];t=new Au([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Xh(i,s.document),u=s.removedTargetIds||[];t=new Au([],u,a,null)}else{if(!("filter"in e))return fe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:u}=s,h=new EI(a,u),m=s.targetId;t=new m_(m,h)}}return t}function VI(i,e){let t;if(e instanceof Wa)t={update:Tg(i,e.key,e.value)};else if(e instanceof f_)t={delete:vd(i,e.key)};else if(e instanceof Ci)t={update:Tg(i,e.key,e.data),updateMask:BI(e.fieldMask)};else{if(!(e instanceof _I))return fe(16599,{dt:e.type});t={verify:vd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Fu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Fa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof ju)return{fieldPath:h.field.canonicalString(),increment:m.Ae};throw fe(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(a,u){return u.updateTime!==void 0?{updateTime:PI(a,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:fe(27497)})(i,e.precondition)),t}function bI(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((t=>(function(a,u){let h=a.updateTime?Zn(a.updateTime):Zn(u);return h.isEqual(ye.min())&&(h=Zn(u)),new mI(h,a.transformResults||[])})(t,e)))):[]}function OI(i,e){return{documents:[v_(i,e.path)]}}function LI(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=v_(i,a);const u=(function(v){if(v.length!==0)return T_(ir.create(v,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(v){if(v.length!==0)return v.map((T=>(function(R){return{field:io(R.field),direction:jI(R.dir)}})(T)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=yd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:a}}function MI(i){let e=NI(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Fe(s===1,65062);const T=t.from[0];T.allDescendants?a=T.collectionId:e=e.child(T.collectionId)}let u=[];t.where&&(u=(function(C){const R=E_(C);return R instanceof ir&&Jy(R)?R.getFilters():[R]})(t.where));let h=[];t.orderBy&&(h=(function(C){return C.map((R=>(function(X){return new Mu(so(X.field),(function(K){switch(K){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(X.direction))})(R)))})(t.orderBy));let m=null;t.limit&&(m=(function(C){let R;return R=typeof C=="object"?C.value:C,Zu(R)?null:R})(t.limit));let y=null;t.startAt&&(y=(function(C){const R=!!C.before,z=C.values||[];return new Lu(z,R)})(t.startAt));let v=null;return t.endAt&&(v=(function(C){const R=!C.before,z=C.values||[];return new Lu(z,R)})(t.endAt)),eI(e,a,h,u,m,"F",y,v)}function FI(i,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe(28987,{purpose:a})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function E_(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=so(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=so(t.unaryFilter.field);return pt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=so(t.unaryFilter.field);return pt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=so(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return fe(61313);default:return fe(60726)}})(i):i.fieldFilter!==void 0?(function(t){return pt.create(so(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return fe(58110);default:return fe(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return ir.create(t.compositeFilter.filters.map((s=>E_(s))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return fe(1026)}})(t.compositeFilter.op))})(i):fe(30097,{filter:i})}function jI(i){return kI[i]}function UI(i){return CI[i]}function zI(i){return RI[i]}function io(i){return{fieldPath:i.canonicalString()}}function so(i){return Ct.fromServerFormat(i.fieldPath)}function T_(i){return i instanceof pt?(function(t){if(t.op==="=="){if(ug(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NAN"}};if(lg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ug(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NAN"}};if(lg(t.value))return{unaryFilter:{field:io(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(t.field),op:UI(t.op),value:t.value}}})(i):i instanceof ir?(function(t){const s=t.getFilters().map((a=>T_(a)));return s.length===1?s[0]:{compositeFilter:{op:zI(t.op),filters:s}}})(i):fe(54877,{filter:i})}function BI(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function I_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function S_(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */class di{constructor(e,t,s,a,u=ye.min(),h=ye.min(),m=Rt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $I{constructor(e){this.yt=e}}function qI(i){const e=MI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?gd(e,e.limit,"L"):e}/**
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
 */class HI{constructor(){this.Sn=new WI}addToCollectionParentIndex(e,t){return this.Sn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(vi.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class WI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new gt(Ke.comparator),u=!a.has(s);return this.index[t]=a.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new gt(Ke.comparator)).toArray()}}/**
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
 */const Ig={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},A_=41943040;class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(A_,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
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
 */class _o{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new _o(0)}static ar(){return new _o(-1)}}/**
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
 */const Sg="LruGarbageCollector",GI=1048576;function Ag([i,e],[t,s]){const a=Re(i,t);return a===0?Re(e,s):a}class KI{constructor(e){this.Pr=e,this.buffer=new gt(Ag),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Ag(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class QI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){te(Sg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){So(t)?te(Sg,"Ignoring IndexedDB error during garbage collection: ",t):await Io(t)}await this.Ar(3e5)}))}}class YI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return B.resolve(Xu.ce);const s=new KI(t);return this.Vr.forEachTarget(e,(a=>s.Er(a.sequenceNumber))).next((()=>this.Vr.mr(e,(a=>s.Er(a))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Ig)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ig):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,a,u,h,m,y,v;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),a=this.params.maximumSequenceNumbersToCollect):a=C,h=Date.now(),this.nthSequenceNumber(e,a)))).next((C=>(s=C,m=Date.now(),this.removeTargets(e,s,t)))).next((C=>(u=C,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(v=Date.now(),no()<=Ce.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-T}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${C} documents in `+(v-y)+`ms
Total Duration: ${v-T}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:u,documentsRemoved:C}))))}}function JI(i,e){return new YI(i,e)}/**
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
 */class XI{constructor(){this.changes=new ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class e1{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(s=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(s!==null&&Na(s.mutation,a,un.empty(),Qe.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=xe()){const a=ns();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,s).next((u=>{let h=Sa();return u.forEach(((m,y)=>{h=h.insert(m,y.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=ns();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,xe())))}populateOverlays(e,t,s){const a=[];return s.forEach((u=>{t.has(u)||a.push(u)})),this.documentOverlayCache.getOverlays(e,a).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,a){let u=Cr();const h=Pa(),m=(function(){return Pa()})();return t.forEach(((y,v)=>{const T=s.get(v.key);a.has(v.key)&&(T===void 0||T.mutation instanceof Ci)?u=u.insert(v.key,v):T!==void 0?(h.set(v.key,T.mutation.getFieldMask()),Na(T.mutation,v,T.mutation.getFieldMask(),Qe.now())):h.set(v.key,un.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((v,T)=>h.set(v,T))),t.forEach(((v,T)=>m.set(v,new ZI(T,h.get(v)??null)))),m)))}recalculateAndSaveOverlays(e,t){const s=Pa();let a=new et(((h,m)=>h-m)),u=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((y=>{const v=t.get(y);if(v===null)return;let T=s.get(y)||un.empty();T=m.applyToLocalView(v,T),s.set(y,T);const C=(a.get(m.batchId)||xe()).add(y);a=a.insert(m.batchId,C)}))})).next((()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),v=y.key,T=y.value,C=s_();T.forEach((R=>{if(!u.has(R)){const z=h_(t.get(R),s.get(R));z!==null&&C.set(R,z),u=u.add(R)}})),h.push(this.documentOverlayCache.saveOverlays(e,v,C))}return B.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,a){return tI(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next((u=>{const h=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-u.size):B.resolve(ns());let m=ba,y=u;return h.next((v=>B.forEach(v,((T,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(T)?B.resolve():this.remoteDocumentCache.getEntry(e,T).next((R=>{y=y.insert(T,R)}))))).next((()=>this.populateOverlays(e,v,u))).next((()=>this.computeViews(e,y,v,xe()))).next((T=>({batchId:m,changes:i_(T)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next((s=>{let a=Sa();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const u=t.collectionGroup;let h=Sa();return this.indexManager.getCollectionParents(e,u).next((m=>B.forEach(m,(y=>{const v=(function(C,R){return new tc(R,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,a).next((T=>{T.forEach(((C,R)=>{h=h.insert(C,R)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,a)))).next((h=>{u.forEach(((y,v)=>{const T=v.getKey();h.get(T)===null&&(h=h.insert(T,Mt.newInvalidDocument(T)))}));let m=Sa();return h.forEach(((y,v)=>{const T=u.get(y);T!==void 0&&Na(T.mutation,v,un.empty(),Qe.now()),rc(t,v)&&(m=m.insert(y,v))})),m}))}}/**
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
 */class t1{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return B.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Zn(a.createTime)}})(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(a){return{name:a.name,query:qI(a.bundledQuery),readTime:Zn(a.readTime)}})(t)),B.resolve()}}/**
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
 */class n1{constructor(){this.overlays=new et(ue.comparator),this.Lr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ns();return B.forEach(t,(a=>this.getOverlay(e,a).next((u=>{u!==null&&s.set(a,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((a,u)=>{this.bt(e,t,u)})),B.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.Lr.get(s);return a!==void 0&&(a.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const a=ns(),u=t.length+1,h=new ue(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,v=y.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&y.largestBatchId>s&&a.set(y.getKey(),y)}return B.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let u=new et(((v,T)=>v-T));const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let T=u.get(v.largestBatchId);T===null&&(T=ns(),u=u.insert(v.largestBatchId,T)),T.set(v.getKey(),v)}}const m=ns(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((v,T)=>m.set(v,T))),!(m.size()>=a)););return B.resolve(m)}bt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.Lr.get(a.largestBatchId).delete(s.key);this.Lr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new wI(t,s));let u=this.Lr.get(t);u===void 0&&(u=xe(),this.Lr.set(t,u)),this.Lr.set(t,u.add(s.key))}}/**
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
 */class r1{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class Wd{constructor(){this.kr=new gt(Et.Kr),this.qr=new gt(Et.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Et(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new ue(new Ke([])),s=new Et(t,e),a=new Et(t,e+1),u=[];return this.qr.forEachInRange([s,a],(h=>{this.Wr(h),u.push(h.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new ue(new Ke([])),s=new Et(t,e),a=new Et(t,e+1);let u=xe();return this.qr.forEachInRange([s,a],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new Et(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return ue.comparator(e.key,t.key)||Re(e.Hr,t.Hr)}static Ur(e,t){return Re(e.Hr,t.Hr)||ue.comparator(e.key,t.key)}}/**
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
 */class i1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new gt(Et.Kr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new vI(u,t,s,a);this.mutationQueue.push(h);for(const m of a)this.Jr=this.Jr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),u=a<0?0:a;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Ld:this.Yn-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),a=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,a],(h=>{const m=this.Zr(h.Hr);u.push(m)})),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(Re);return t.forEach((a=>{const u=new Et(a,0),h=new Et(a,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,h],(m=>{s=s.add(m.Hr)}))})),B.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new Et(new ue(u),0);let m=new gt(Re);return this.Jr.forEachWhile((y=>{const v=y.key.path;return!!s.isPrefixOf(v)&&(v.length===a&&(m=m.add(y.Hr)),!0)}),h),B.resolve(this.Yr(m))}Yr(e){const t=[];return e.forEach((s=>{const a=this.Zr(s);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){Fe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return B.forEach(t.mutations,(a=>{const u=new Et(a.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Et(t,0),a=this.Jr.firstAfterOrEqual(s);return B.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class s1{constructor(e){this.ti=e,this.docs=(function(){return new et(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),u=a?a.size:0,h=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Cr();return t.forEach((a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():Mt.newInvalidDocument(a))})),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let u=Cr();const h=t.path,m=new ue(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:v,value:{document:T}}=y.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||NT(PT(T),s)<=0||(a.has(T.key)||rc(t,T))&&(u=u.insert(T.key,T.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,a){fe(9500)}ni(e,t){return B.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new o1(this)}getSize(e){return B.resolve(this.size)}}class o1 extends XI{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,a)=>{a.isValidDocument()?t.push(this.Mr.addEntry(e,a)):this.Mr.removeEntry(s)})),B.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class a1{constructor(e){this.persistence=e,this.ri=new ds((t=>jd(t)),Ud),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.ii=0,this.si=new Wd,this.targetCount=0,this.oi=_o._r()}forEachTarget(e,t){return this.ri.forEach(((s,a)=>t(a))),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),B.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new _o(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.lr(t),B.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let a=0;const u=[];return this.ri.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.ri.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)})),B.waitFor(u).next((()=>a))}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const a=this.persistence.referenceDelegate,u=[];return a&&t.forEach((h=>{u.push(a.markPotentiallyOrphaned(e,h))})),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.si.containsKey(t))}}/**
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
 */class k_{constructor(e,t){this._i={},this.overlays={},this.ai=new Xu(0),this.ui=!1,this.ui=!0,this.ci=new r1,this.referenceDelegate=e(this),this.li=new a1(this),this.indexManager=new HI,this.remoteDocumentCache=(function(a){return new s1(a)})((s=>this.referenceDelegate.hi(s))),this.serializer=new $I(t),this.Pi=new t1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new i1(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const a=new l1(this.ai.next());return this.referenceDelegate.Ti(),s(a).next((u=>this.referenceDelegate.Ii(a).next((()=>u)))).toPromise().then((u=>(a.raiseOnCommittedEvent(),u)))}Ei(e,t){return B.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class l1 extends VT{constructor(e){super(),this.currentSequenceNumber=e}}class Gd{constructor(e){this.persistence=e,this.Ri=new Wd,this.Ai=null}static Vi(e){return new Gd(e)}get di(){if(this.Ai)return this.Ai;throw fe(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),B.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((a=>this.di.add(a.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,(s=>{const a=ue.fromPath(s);return this.mi(e,a).next((u=>{u||t.removeEntry(a,ye.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return B.or([()=>B.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class zu{constructor(e,t){this.persistence=e,this.fi=new ds((s=>LT(s.path)),((s,a)=>s.isEqual(a))),this.garbageCollector=JI(this,t)}static Vi(e,t){return new zu(e,t)}Ti(){}Ii(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((a=>s+a))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return B.forEach(this.fi,((s,a)=>this.wr(e,s,a).next((u=>u?B.resolve():t(a)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),u=a.newChangeBuffer();return a.ni(e,(h=>this.wr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,ye.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),B.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Tu(e.data.value)),t}wr(e,t,s){return B.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.fi.get(t);return B.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Kd{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=a}static Es(e,t){let s=xe(),a=xe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new Kd(e,t.fromCache,s,a)}}/**
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
 */class u1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c1{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Jw()?8:bT(Ft())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,a){const u={result:null};return this.gs(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.ps(e,t,a,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new u1;return this.ys(e,t,h).next((m=>{if(u.result=m,this.As)return this.ws(e,t,h,m.size)}))})).next((()=>u.result))}ws(e,t,s,a){return s.documentReadCount<this.Vs?(no()<=Ce.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ro(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(no()<=Ce.DEBUG&&te("QueryEngine","Query:",ro(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ds*a?(no()<=Ce.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ro(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(t))):B.resolve())}gs(e,t){if(fg(t))return B.resolve(null);let s=Jn(t);return this.indexManager.getIndexType(e,s).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=gd(t,null,"F"),s=Jn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=xe(...u);return this.fs.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((y=>{const v=this.bs(t,m);return this.Ss(t,v,h,y.readTime)?this.gs(e,gd(t,null,"F")):this.Ds(e,v,t,y)}))))})))))}ps(e,t,s,a){return fg(t)||a.isEqual(ye.min())?B.resolve(null):this.fs.getDocuments(e,s).next((u=>{const h=this.bs(t,u);return this.Ss(t,h,s,a)?B.resolve(null):(no()<=Ce.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ro(t)),this.Ds(e,h,t,xT(a,ba)).next((m=>m)))}))}bs(e,t){let s=new gt(n_(e));return t.forEach(((a,u)=>{rc(e,u)&&(s=s.add(u))})),s}Ss(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}ys(e,t,s){return no()<=Ce.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ro(t)),this.fs.getDocumentsMatchingQuery(e,t,vi.min(),s)}Ds(e,t,s,a){return this.fs.getDocumentsMatchingQuery(e,s,a).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Qd="LocalStore",h1=3e8;class d1{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.vs=new et(Re),this.Fs=new ds((u=>jd(u)),Ud),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e1(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function f1(i,e,t,s){return new d1(i,e,t,s)}async function C_(i,e){const t=ve(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next((u=>(a=u,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let y=xe();for(const v of a){h.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}for(const v of u){m.push(v.batchId);for(const T of v.mutations)y=y.add(T.key)}return t.localDocuments.getDocuments(s,y).next((v=>({Ns:v,removedBatchIds:h,addedBatchIds:m})))}))}))}function p1(i,e){const t=ve(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const a=e.batch.keys(),u=t.xs.newChangeBuffer({trackRemovals:!0});return(function(m,y,v,T){const C=v.batch,R=C.keys();let z=B.resolve();return R.forEach((X=>{z=z.next((()=>T.getEntry(y,X))).next((J=>{const K=v.docVersions.get(X);Fe(K!==null,48541),J.version.compareTo(K)<0&&(C.applyToRemoteDocument(J,v),J.isValidDocument()&&(J.setReadTime(v.commitVersion),T.addEntry(J)))}))})),z.next((()=>m.mutationQueue.removeMutationBatch(y,C)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let y=xe();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(y=y.add(m.batch.mutations[v].key));return y})(e)))).next((()=>t.localDocuments.getDocuments(s,a)))}))}function R_(i){const e=ve(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function m1(i,e){const t=ve(i),s=e.snapshotVersion;let a=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.xs.newChangeBuffer({trackRemovals:!0});a=t.vs;const m=[];e.targetChanges.forEach(((T,C)=>{const R=a.get(C);if(!R)return;m.push(t.li.removeMatchingKeys(u,T.removedDocuments,C).next((()=>t.li.addMatchingKeys(u,T.addedDocuments,C))));let z=R.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?z=z.withResumeToken(Rt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):T.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(T.resumeToken,s)),a=a.insert(C,z),(function(J,K,pe){return J.resumeToken.approximateByteSize()===0||K.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=h1?!0:pe.addedDocuments.size+pe.modifiedDocuments.size+pe.removedDocuments.size>0})(R,z,T)&&m.push(t.li.updateTargetData(u,z))}));let y=Cr(),v=xe();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,T))})),m.push(g1(u,h,e.documentUpdates).next((T=>{y=T.Bs,v=T.Ls}))),!s.isEqual(ye.min())){const T=t.li.getLastRemoteSnapshotVersion(u).next((C=>t.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(T)}return B.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,y,v))).next((()=>y))})).then((u=>(t.vs=a,u)))}function g1(i,e,t){let s=xe(),a=xe();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Cr();return t.forEach(((m,y)=>{const v=u.get(m);y.isFoundDocument()!==v.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(ye.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!v.isValidDocument()||y.version.compareTo(v.version)>0||y.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):te(Qd,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",y.version)})),{Bs:h,Ls:a}}))}function y1(i,e){const t=ve(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ld),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function _1(i,e){const t=ve(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let a;return t.li.getTargetData(s,e).next((u=>u?(a=u,B.resolve(a)):t.li.allocateTargetId(s).next((h=>(a=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,a).next((()=>a)))))))})).then((s=>{const a=t.vs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function Ed(i,e,t){const s=ve(i),a=s.vs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,a)))}catch(h){if(!So(h))throw h;te(Qd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.vs=s.vs.remove(e),s.Fs.delete(a.target)}function kg(i,e,t){const s=ve(i);let a=ye.min(),u=xe();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(y,v,T){const C=ve(y),R=C.Fs.get(T);return R!==void 0?B.resolve(C.vs.get(R)):C.li.getTargetData(v,T)})(s,h,Jn(e)).next((m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(h,m.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(h,e,t?a:ye.min(),t?u:xe()))).next((m=>(v1(s,iI(e),m),{documents:m,ks:u})))))}function v1(i,e,t){let s=i.Ms.get(e)||ye.min();t.forEach(((a,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ms.set(e,s)}class Cg{constructor(){this.activeTargetIds=cI()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w1{constructor(){this.vo=new Cg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Cg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class E1{Mo(e){}shutdown(){}}/**
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
 */const Rg="ConnectivityMonitor";class xg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){te(Rg,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){te(Rg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vu=null;function Td(){return vu===null?vu=(function(){return 268435456+Math.round(2147483648*Math.random())})():vu++,"0x"+vu.toString(16)}/**
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
 */const Zh="RestConnection",T1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class I1{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.$o=this.databaseId.database===bu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,u){const h=Td(),m=this.Qo(e,t.toUriEncodedString());te(Zh,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,a,u);const{host:v}=new URL(m),T=wo(v);return this.zo(e,m,y,s,T).then((C=>(te(Zh,`Received RPC '${e}' ${h}: `,C),C)),(C=>{throw us(Zh,`RPC '${e}' ${h} failed with error: `,C,"url: ",m,"request:",s),C}))}jo(e,t,s,a,u,h){return this.Wo(e,t,s,a,u)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+To})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((a,u)=>e[u]=a)),s&&s.headers.forEach(((a,u)=>e[u]=a))}Qo(e,t){const s=T1[e];let a=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(a=`${a}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),a}terminate(){}}/**
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
 */class S1{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ot="WebChannelConnection",Ta=(i,e,t)=>{i.listen(e,(s=>{try{t(s)}catch(a){setTimeout((()=>{throw a}),0)}}))};class ao extends I1{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ao.c_){const e=Vy();Ta(e,Dy.STAT_EVENT,(t=>{t.stat===cd.PROXY?te(Ot,"STAT_EVENT: detected buffering proxy"):t.stat===cd.NOPROXY&&te(Ot,"STAT_EVENT: detected no buffering proxy")})),ao.c_=!0}}zo(e,t,s,a,u){const h=Td();return new Promise(((m,y)=>{const v=new Py;v.setWithCredentials(!0),v.listenOnce(Ny.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case Eu.NO_ERROR:const C=v.getResponseJson();te(Ot,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(C)),m(C);break;case Eu.TIMEOUT:te(Ot,`RPC '${e}' ${h} timed out`),y(new ae(H.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const R=v.getStatus();if(te(Ot,`RPC '${e}' ${h} failed with status:`,R,"response text:",v.getResponseText()),R>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const X=z?.error;if(X&&X.status&&X.message){const J=(function(pe){const de=pe.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(de)>=0?de:H.UNKNOWN})(X.status);y(new ae(J,X.message))}else y(new ae(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else y(new ae(H.UNAVAILABLE,"Connection failed."));break;default:fe(9055,{l_:e,streamId:h,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{te(Ot,`RPC '${e}' ${h} completed.`)}}));const T=JSON.stringify(a);te(Ot,`RPC '${e}' ${h} sending request:`,a),v.send(t,"POST",T,s,15)}))}T_(e,t,s){const a=Td(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=this.createWebChannelTransport(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Go(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const v=u.join("");te(Ot,`Creating RPC '${e}' stream ${a}: ${v}`,m);const T=h.createWebChannel(v,m);this.I_(T);let C=!1,R=!1;const z=new S1({Ho:X=>{R?te(Ot,`Not sending because RPC '${e}' stream ${a} is closed:`,X):(C||(te(Ot,`Opening RPC '${e}' stream ${a} transport.`),T.open(),C=!0),te(Ot,`RPC '${e}' stream ${a} sending:`,X),T.send(X))},Jo:()=>T.close()});return Ta(T,Ia.EventType.OPEN,(()=>{R||(te(Ot,`RPC '${e}' stream ${a} transport opened.`),z.i_())})),Ta(T,Ia.EventType.CLOSE,(()=>{R||(R=!0,te(Ot,`RPC '${e}' stream ${a} transport closed`),z.o_(),this.E_(T))})),Ta(T,Ia.EventType.ERROR,(X=>{R||(R=!0,us(Ot,`RPC '${e}' stream ${a} transport errored. Name:`,X.name,"Message:",X.message),z.o_(new ae(H.UNAVAILABLE,"The operation could not be completed")))})),Ta(T,Ia.EventType.MESSAGE,(X=>{if(!R){const J=X.data[0];Fe(!!J,16349);const K=J,pe=K?.error||K[0]?.error;if(pe){te(Ot,`RPC '${e}' stream ${a} received error:`,pe);const de=pe.status;let Te=(function(Pe){const N=ct[Pe];if(N!==void 0)return p_(N)})(de),Se=pe.message;de==="NOT_FOUND"&&Se.includes("database")&&Se.includes("does not exist")&&Se.includes(this.databaseId.database)&&us(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Te===void 0&&(Te=H.INTERNAL,Se="Unknown error status: "+de+" with message "+pe.message),R=!0,z.o_(new ae(Te,Se)),T.close()}else te(Ot,`RPC '${e}' stream ${a} received:`,J),z.__(J)}})),ao.u_(),setTimeout((()=>{z.s_()}),0),z}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return by()}}/**
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
 */function A1(i){return new ao(i)}function ed(){return typeof document<"u"?document:null}/**
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
 */function ac(i){return new xI(i,!0)}/**
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
 */ao.c_=!1;class x_{constructor(e,t,s=1e3,a=1.5,u=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=a,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),a=Math.max(0,t-s);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Pg="PersistentStream";class P_{constructor(e,t,s,a,u,h,m,y){this.Ci=e,this.b_=s,this.S_=a,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new x_(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(kr(t.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,a])=>{this.D_===t&&this.G_(s,a)}),(s=>{e((()=>{const a=new ae(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(a)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((a=>{s((()=>this.z_(a)))})),this.stream.onMessage((a=>{s((()=>++this.F_==1?this.H_(a):this.onNext(a)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return te(Pg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(te(Pg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class k1 extends P_{constructor(e,t,s,a,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=DI(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ye.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ye.min():h.readTime?Zn(h.readTime):ye.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=wd(this.serializer),t.addTarget=(function(u,h){let m;const y=h.target;if(m=md(y)?{documents:OI(u,y)}:{query:LI(u,y).ft},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=y_(u,h.resumeToken);const v=yd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(ye.min())>0){m.readTime=Uu(u,h.snapshotVersion.toTimestamp());const v=yd(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m})(this.serializer,e);const s=FI(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=wd(this.serializer),t.removeTarget=e,this.K_(t)}}class C1 extends P_{constructor(e,t,s,a,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,h),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=bI(e.writeResults,e.commitTime),s=Zn(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=wd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>VI(this.serializer,s)))};this.K_(t)}}/**
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
 */class R1{}class x1 extends R1{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ia=!1}sa(){if(this.ia)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Wo(e,_d(t,s),a,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ae(H.UNKNOWN,u.toString())}))}jo(e,t,s,a,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.jo(e,_d(t,s),a,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ae(H.UNKNOWN,h.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function P1(i,e,t,s){return new x1(i,e,t,s)}class N1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kr(t),this.aa=!1):te("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const cs="RemoteStore";class D1{constructor(e,t,s,a,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((h=>{s.enqueueAndForget((async()=>{fs(this)&&(te(cs,"Restarting streams for network reachability change."),await(async function(y){const v=ve(y);v.Ea.add(4),await Ka(v),v.Va.set("Unknown"),v.Ea.delete(4),await lc(v)})(this))}))})),this.Va=new N1(s,a)}}async function lc(i){if(fs(i))for(const e of i.Ra)await e(!0)}async function Ka(i){for(const e of i.Ra)await e(!1)}function N_(i,e){const t=ve(i);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Zd(t)?Xd(t):Ao(t).O_()&&Jd(t,e))}function Yd(i,e){const t=ve(i),s=Ao(t);t.Ia.delete(e),s.O_()&&D_(t,e),t.Ia.size===0&&(s.O_()?s.L_():fs(t)&&t.Va.set("Unknown"))}function Jd(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ao(i).Z_(e)}function D_(i,e){i.da.$e(e),Ao(i).X_(e)}function Xd(i){i.da=new AI({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ia.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),Ao(i).start(),i.Va.ua()}function Zd(i){return fs(i)&&!Ao(i).x_()&&i.Ia.size>0}function fs(i){return ve(i).Ea.size===0}function V_(i){i.da=void 0}async function V1(i){i.Va.set("Online")}async function b1(i){i.Ia.forEach(((e,t)=>{Jd(i,e)}))}async function O1(i,e){V_(i),Zd(i)?(i.Va.ha(e),Xd(i)):i.Va.set("Unknown")}async function L1(i,e,t){if(i.Va.set("Online"),e instanceof g_&&e.state===2&&e.cause)try{await(async function(a,u){const h=u.cause;for(const m of u.targetIds)a.Ia.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.Ia.delete(m),a.da.removeTarget(m))})(i,e)}catch(s){te(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Bu(i,s)}else if(e instanceof Au?i.da.Xe(e):e instanceof m_?i.da.st(e):i.da.tt(e),!t.isEqual(ye.min()))try{const s=await R_(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.da.Tt(h);return m.targetChanges.forEach(((y,v)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(v);T&&u.Ia.set(v,T.withResumeToken(y.resumeToken,h))}})),m.targetMismatches.forEach(((y,v)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(Rt.EMPTY_BYTE_STRING,T.snapshotVersion)),D_(u,y);const C=new di(T.target,y,v,T.sequenceNumber);Jd(u,C)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){te(cs,"Failed to raise snapshot:",s),await Bu(i,s)}}async function Bu(i,e,t){if(!So(e))throw e;i.Ea.add(1),await Ka(i),i.Va.set("Offline"),t||(t=()=>R_(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{te(cs,"Retrying IndexedDB access"),await t(),i.Ea.delete(1),await lc(i)}))}function b_(i,e){return e().catch((t=>Bu(i,t,e)))}async function uc(i){const e=ve(i),t=Ii(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ld;for(;M1(e);)try{const a=await y1(e.localStore,s);if(a===null){e.Ta.length===0&&t.L_();break}s=a.batchId,F1(e,a)}catch(a){await Bu(e,a)}O_(e)&&L_(e)}function M1(i){return fs(i)&&i.Ta.length<10}function F1(i,e){i.Ta.push(e);const t=Ii(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function O_(i){return fs(i)&&!Ii(i).x_()&&i.Ta.length>0}function L_(i){Ii(i).start()}async function j1(i){Ii(i).ra()}async function U1(i){const e=Ii(i);for(const t of i.Ta)e.ea(t.mutations)}async function z1(i,e,t){const s=i.Ta.shift(),a=$d.from(s,e,t);await b_(i,(()=>i.remoteSyncer.applySuccessfulWrite(a))),await uc(i)}async function B1(i,e){e&&Ii(i).Y_&&await(async function(s,a){if((function(h){return TI(h)&&h!==H.ABORTED})(a.code)){const u=s.Ta.shift();Ii(s).B_(),await b_(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,a))),await uc(s)}})(i,e),O_(i)&&L_(i)}async function Ng(i,e){const t=ve(i);t.asyncQueue.verifyOperationInProgress(),te(cs,"RemoteStore received new credentials");const s=fs(t);t.Ea.add(3),await Ka(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await lc(t)}async function $1(i,e){const t=ve(i);e?(t.Ea.delete(2),await lc(t)):e||(t.Ea.add(2),await Ka(t),t.Va.set("Unknown"))}function Ao(i){return i.ma||(i.ma=(function(t,s,a){const u=ve(t);return u.sa(),new k1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)})(i.datastore,i.asyncQueue,{Zo:V1.bind(null,i),Yo:b1.bind(null,i),t_:O1.bind(null,i),J_:L1.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),Zd(i)?Xd(i):i.Va.set("Unknown")):(await i.ma.stop(),V_(i))}))),i.ma}function Ii(i){return i.fa||(i.fa=(function(t,s,a){const u=ve(t);return u.sa(),new C1(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:j1.bind(null,i),t_:B1.bind(null,i),ta:U1.bind(null,i),na:z1.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await uc(i)):(await i.fa.stop(),i.Ta.length>0&&(te(cs,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
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
 */class ef{constructor(e,t,s,a,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,u){const h=Date.now()+s,m=new ef(e,t,h,a,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ae(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tf(i,e){if(kr("AsyncQueue",`${e}: ${i}`),So(i))return new ae(H.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Sa(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,u=s.getNext().key;if(!a.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Dg{constructor(){this.ga=new et(ue.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):fe(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class vo{constructor(e,t,s,a,u,h,m,y,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,a,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new vo(e,t,lo.emptySet(t),h,s,a,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
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
 */class q1{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class H1{constructor(){this.queries=Vg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const a=ve(t),u=a.queries;a.queries=Vg(),u.forEach(((h,m)=>{for(const y of m.ba)y.onError(s)}))})(this,new ae(H.ABORTED,"Firestore shutting down"))}}function Vg(){return new ds((i=>t_(i)),nc)}async function W1(i,e){const t=ve(i);let s=3;const a=e.query;let u=t.queries.get(a);u?!u.Sa()&&e.Da()&&(s=2):(u=new q1,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await t.onListen(a,!0);break;case 1:u.wa=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(h){const m=tf(h,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(m)}t.queries.set(a,u),u.ba.push(e),e.va(t.onlineState),u.wa&&e.Fa(u.wa)&&nf(t)}async function G1(i,e){const t=ve(i),s=e.query;let a=3;const u=t.queries.get(s);if(u){const h=u.ba.indexOf(e);h>=0&&(u.ba.splice(h,1),u.ba.length===0?a=e.Da()?0:1:!u.Sa()&&e.Da()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function K1(i,e){const t=ve(i);let s=!1;for(const a of e){const u=a.query,h=t.queries.get(u);if(h){for(const m of h.ba)m.Fa(a)&&(s=!0);h.wa=a}}s&&nf(t)}function Q1(i,e,t){const s=ve(i),a=s.queries.get(e);if(a)for(const u of a.ba)u.onError(t);s.queries.delete(e)}function nf(i){i.Ca.forEach((e=>{e.next()}))}var Id,bg;(bg=Id||(Id={})).Ma="default",bg.Cache="cache";class Y1{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Id.Cache}}/**
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
 */class M_{constructor(e){this.key=e}}class F_{constructor(e){this.key=e}}class J1{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=xe(),this.mutatedKeys=xe(),this.eu=n_(e),this.tu=new lo(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Dg,a=t?t.tu:this.tu;let u=t?t.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,v=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((T,C)=>{const R=a.get(T),z=rc(this.query,C)?C:null,X=!!R&&this.mutatedKeys.has(R.key),J=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let K=!1;R&&z?R.data.isEqual(z.data)?X!==J&&(s.track({type:3,doc:z}),K=!0):this.su(R,z)||(s.track({type:2,doc:z}),K=!0,(y&&this.eu(z,y)>0||v&&this.eu(z,v)<0)&&(m=!0)):!R&&z?(s.track({type:0,doc:z}),K=!0):R&&!z&&(s.track({type:1,doc:R}),K=!0,(y||v)&&(m=!0)),K&&(z?(h=h.add(z),u=J?u.add(T):u.delete(T)):(h=h.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const T=this.query.limitType==="F"?h.last():h.first();h=h.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:h,iu:s,Ss:m,mutatedKeys:u}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const h=e.iu.ya();h.sort(((T,C)=>(function(z,X){const J=K=>{switch(K){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe(20277,{Vt:K})}};return J(z)-J(X)})(T.type,C.type)||this.eu(T.doc,C.doc))),this.ou(s),a=a??!1;const m=t&&!a?this._u():[],y=this.Ya.size===0&&this.current&&!a?1:0,v=y!==this.Xa;return this.Xa=y,h.length!==0||v?{snapshot:new vo(this.query,e.tu,u,h,e.mutatedKeys,y===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:m}:{au:m}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Dg,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=xe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new F_(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new M_(s))})),t}cu(e){this.Za=e.ks,this.Ya=xe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return vo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const rf="SyncEngine";class X1{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Z1{constructor(e){this.key=e,this.hu=!1}}class eS{constructor(e,t,s,a,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Pu={},this.Tu=new ds((m=>t_(m)),nc),this.Iu=new Map,this.Eu=new Set,this.Ru=new et(ue.comparator),this.Au=new Map,this.Vu=new Wd,this.du={},this.mu=new Map,this.fu=_o.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function tS(i,e,t=!0){const s=q_(i);let a;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),a=u.view.lu()):a=await j_(s,e,t,!0),a}async function nS(i,e){const t=q_(i);await j_(t,e,!0,!1)}async function j_(i,e,t,s){const a=await _1(i.localStore,Jn(e)),u=a.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await rS(i,e,u,h==="current",a.resumeToken)),i.isPrimaryClient&&t&&N_(i.remoteStore,a),m}async function rS(i,e,t,s,a){i.pu=(C,R,z)=>(async function(J,K,pe,de){let Te=K.view.ru(pe);Te.Ss&&(Te=await kg(J.localStore,K.query,!1).then((({documents:N})=>K.view.ru(N,Te))));const Se=de&&de.targetChanges.get(K.targetId),qe=de&&de.targetMismatches.get(K.targetId)!=null,Pe=K.view.applyChanges(Te,J.isPrimaryClient,Se,qe);return Lg(J,K.targetId,Pe.au),Pe.snapshot})(i,C,R,z);const u=await kg(i.localStore,e,!0),h=new J1(e,u.ks),m=h.ru(u.documents),y=Ga.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),v=h.applyChanges(m,i.isPrimaryClient,y);Lg(i,t,v.au);const T=new X1(e,t,h);return i.Tu.set(e,T),i.Iu.has(t)?i.Iu.get(t).push(e):i.Iu.set(t,[e]),v.snapshot}async function iS(i,e,t){const s=ve(i),a=s.Tu.get(e),u=s.Iu.get(a.targetId);if(u.length>1)return s.Iu.set(a.targetId,u.filter((h=>!nc(h,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Ed(s.localStore,a.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(a.targetId),t&&Yd(s.remoteStore,a.targetId),Sd(s,a.targetId)})).catch(Io)):(Sd(s,a.targetId),await Ed(s.localStore,a.targetId,!0))}async function sS(i,e){const t=ve(i),s=t.Tu.get(e),a=t.Iu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Yd(t.remoteStore,s.targetId))}async function oS(i,e,t){const s=fS(i);try{const a=await(function(h,m){const y=ve(h),v=Qe.now(),T=m.reduce(((z,X)=>z.add(X.key)),xe());let C,R;return y.persistence.runTransaction("Locally write mutations","readwrite",(z=>{let X=Cr(),J=xe();return y.xs.getEntries(z,T).next((K=>{X=K,X.forEach(((pe,de)=>{de.isValidDocument()||(J=J.add(pe))}))})).next((()=>y.localDocuments.getOverlayedDocuments(z,X))).next((K=>{C=K;const pe=[];for(const de of m){const Te=yI(de,C.get(de.key).overlayedDocument);Te!=null&&pe.push(new Ci(de.key,Te,Ky(Te.value.mapValue),Xn.exists(!0)))}return y.mutationQueue.addMutationBatch(z,v,pe,m)})).next((K=>{R=K;const pe=K.applyToLocalDocumentSet(C,J);return y.documentOverlayCache.saveOverlays(z,K.batchId,pe)}))})).then((()=>({batchId:R.batchId,changes:i_(C)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),(function(h,m,y){let v=h.du[h.currentUser.toKey()];v||(v=new et(Re)),v=v.insert(m,y),h.du[h.currentUser.toKey()]=v})(s,a.batchId,t),await Qa(s,a.changes),await uc(s.remoteStore)}catch(a){const u=tf(a,"Failed to persist write");t.reject(u)}}async function U_(i,e){const t=ve(i);try{const s=await m1(t.localStore,e);e.targetChanges.forEach(((a,u)=>{const h=t.Au.get(u);h&&(Fe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?h.hu=!0:a.modifiedDocuments.size>0?Fe(h.hu,14607):a.removedDocuments.size>0&&(Fe(h.hu,42227),h.hu=!1))})),await Qa(t,s,e)}catch(s){await Io(s)}}function Og(i,e,t){const s=ve(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Tu.forEach(((u,h)=>{const m=h.view.va(e);m.snapshot&&a.push(m.snapshot)})),(function(h,m){const y=ve(h);y.onlineState=m;let v=!1;y.queries.forEach(((T,C)=>{for(const R of C.ba)R.va(m)&&(v=!0)})),v&&nf(y)})(s.eventManager,e),a.length&&s.Pu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function aS(i,e,t){const s=ve(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Au.get(e),u=a&&a.key;if(u){let h=new et(ue.comparator);h=h.insert(u,Mt.newNoDocument(u,ye.min()));const m=xe().add(u),y=new oc(ye.min(),new Map,new et(Re),h,m);await U_(s,y),s.Ru=s.Ru.remove(u),s.Au.delete(e),sf(s)}else await Ed(s.localStore,e,!1).then((()=>Sd(s,e,t))).catch(Io)}async function lS(i,e){const t=ve(i),s=e.batch.batchId;try{const a=await p1(t.localStore,e);B_(t,s,null),z_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Qa(t,a)}catch(a){await Io(a)}}async function uS(i,e,t){const s=ve(i);try{const a=await(function(h,m){const y=ve(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let T;return y.mutationQueue.lookupMutationBatch(v,m).next((C=>(Fe(C!==null,37113),T=C.keys(),y.mutationQueue.removeMutationBatch(v,C)))).next((()=>y.mutationQueue.performConsistencyCheck(v))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(v,T,m))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,T))).next((()=>y.localDocuments.getDocuments(v,T)))}))})(s.localStore,e);B_(s,e,t),z_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Qa(s,a)}catch(a){await Io(a)}}function z_(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function B_(i,e,t){const s=ve(i);let a=s.du[s.currentUser.toKey()];if(a){const u=a.get(e);u&&(t?u.reject(t):u.resolve(),a=a.remove(e)),s.du[s.currentUser.toKey()]=a}}function Sd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Iu.get(e))i.Tu.delete(s),t&&i.Pu.yu(s,t);i.Iu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((s=>{i.Vu.containsKey(s)||$_(i,s)}))}function $_(i,e){i.Eu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(Yd(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),sf(i))}function Lg(i,e,t){for(const s of t)s instanceof M_?(i.Vu.addReference(s.key,e),cS(i,s)):s instanceof F_?(te(rf,"Document no longer in limbo: "+s.key),i.Vu.removeReference(s.key,e),i.Vu.containsKey(s.key)||$_(i,s.key)):fe(19791,{wu:s})}function cS(i,e){const t=e.key,s=t.path.canonicalString();i.Ru.get(t)||i.Eu.has(s)||(te(rf,"New document in limbo: "+t),i.Eu.add(s),sf(i))}function sf(i){for(;i.Eu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Eu.values().next().value;i.Eu.delete(e);const t=new ue(Ke.fromString(e)),s=i.fu.next();i.Au.set(s,new Z1(t)),i.Ru=i.Ru.insert(t,s),N_(i.remoteStore,new di(Jn(zd(t.path)),s,"TargetPurposeLimboResolution",Xu.ce))}}async function Qa(i,e,t){const s=ve(i),a=[],u=[],h=[];s.Tu.isEmpty()||(s.Tu.forEach(((m,y)=>{h.push(s.pu(y,e,t).then((v=>{if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:t?.targetChanges.get(y.targetId)?.current;s.sharedClientState.updateQueryState(y.targetId,T?"current":"not-current")}if(v){a.push(v);const T=Kd.Es(y.targetId,v);u.push(T)}})))})),await Promise.all(h),s.Pu.J_(a),await(async function(y,v){const T=ve(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>B.forEach(v,(R=>B.forEach(R.Ts,(z=>T.persistence.referenceDelegate.addReference(C,R.targetId,z))).next((()=>B.forEach(R.Is,(z=>T.persistence.referenceDelegate.removeReference(C,R.targetId,z)))))))))}catch(C){if(!So(C))throw C;te(Qd,"Failed to update sequence numbers: "+C)}for(const C of v){const R=C.targetId;if(!C.fromCache){const z=T.vs.get(R),X=z.snapshotVersion,J=z.withLastLimboFreeSnapshotVersion(X);T.vs=T.vs.insert(R,J)}}})(s.localStore,u))}async function hS(i,e){const t=ve(i);if(!t.currentUser.isEqual(e)){te(rf,"User change. New user:",e.toKey());const s=await C_(t.localStore,e);t.currentUser=e,(function(u,h){u.mu.forEach((m=>{m.forEach((y=>{y.reject(new ae(H.CANCELLED,h))}))})),u.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Qa(t,s.Ns)}}function dS(i,e){const t=ve(i),s=t.Au.get(e);if(s&&s.hu)return xe().add(s.key);{let a=xe();const u=t.Iu.get(e);if(!u)return a;for(const h of u){const m=t.Tu.get(h);a=a.unionWith(m.view.nu)}return a}}function q_(i){const e=ve(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=U_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aS.bind(null,e),e.Pu.J_=K1.bind(null,e.eventManager),e.Pu.yu=Q1.bind(null,e.eventManager),e}function fS(i){const e=ve(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uS.bind(null,e),e}class $u{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ac(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return f1(this.persistence,new c1,e.initialUser,this.serializer)}Cu(e){return new k_(Gd.Vi,this.serializer)}Du(e){return new w1}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$u.provider={build:()=>new $u};class pS extends $u{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Fe(this.persistence.referenceDelegate instanceof zu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new QI(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new k_((s=>zu.Vi(s,t)),this.serializer)}}class Ad{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Og(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=hS.bind(null,this.syncEngine),await $1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new H1})()}createDatastore(e){const t=ac(e.databaseInfo.databaseId),s=A1(e.databaseInfo);return P1(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,a,u,h,m){return new D1(s,a,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>Og(this.syncEngine,t,0)),(function(){return xg.v()?new xg:new E1})())}createSyncEngine(e,t){return(function(a,u,h,m,y,v,T){const C=new eS(a,u,h,m,y,v);return T&&(C.gu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const s=ve(t);te(cs,"RemoteStore shutting down."),s.Ea.add(5),await Ka(s),s.Aa.shutdown(),s.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Ad.provider={build:()=>new Ad};/**
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
 *//**
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
 */class mS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Si="FirestoreClient";class gS{constructor(e,t,s,a,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=a,this.user=Lt.UNAUTHENTICATED,this.clientId=bd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{te(Si,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(te(Si,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=tf(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function td(i,e){i.asyncQueue.verifyOperationInProgress(),te(Si,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async a=>{s.isEqual(a)||(await C_(e.localStore,a),s=a)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function Mg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await yS(i);te(Si,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Ng(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,a)=>Ng(e.remoteStore,a))),i._onlineComponents=e}async function yS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(Si,"Using user provided OfflineComponentProvider");try{await td(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(a){return a.name==="FirebaseError"?a.code===H.FAILED_PRECONDITION||a.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11})(t))throw t;us("Error using user provided cache. Falling back to memory cache: "+t),await td(i,new $u)}}else te(Si,"Using default OfflineComponentProvider"),await td(i,new pS(void 0));return i._offlineComponents}async function H_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(Si,"Using user provided OnlineComponentProvider"),await Mg(i,i._uninitializedComponentsProvider._online)):(te(Si,"Using default OnlineComponentProvider"),await Mg(i,new Ad))),i._onlineComponents}function _S(i){return H_(i).then((e=>e.syncEngine))}async function Fg(i){const e=await H_(i),t=e.eventManager;return t.onListen=tS.bind(null,e.syncEngine),t.onUnlisten=iS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sS.bind(null,e.syncEngine),t}function vS(i,e,t,s){const a=new mS(s),u=new Y1(e,a,t);return i.asyncQueue.enqueueAndForget((async()=>W1(await Fg(i),u))),()=>{a.Nu(),i.asyncQueue.enqueueAndForget((async()=>G1(await Fg(i),u)))}}function wS(i,e){const t=new rs;return i.asyncQueue.enqueueAndForget((async()=>oS(await _S(i),e,t))),t.promise}/**
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
 */function W_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const ES="ComponentProvider",jg=new Map;function TS(i,e,t,s,a){return new jT(i,e,t,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,W_(a.experimentalLongPollingOptions),a.useFetchStreams,a.isUsingEmulator,s)}/**
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
 */const G_="firestore.googleapis.com",Ug=!0;class zg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ae(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=G_,this.ssl=Ug}else this.host=e.host,this.ssl=e.ssl??Ug;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=A_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GI)throw new ae(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=W_(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ae(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,a){return s.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ae(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ae(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new _T;switch(s.type){case"firstParty":return new TT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ae(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=jg.get(t);s&&(te(ES,"Removing Datastore"),jg.delete(t),s.terminate())})(this),Promise.resolve()}}function IS(i,e,t,s={}){i=is(i,cc);const a=wo(e),u=i._getSettings(),h={...u,emulatorOptions:i._getEmulatorOptions()},m=`${e}:${t}`;a&&(Ey(`https://${m}`),Ty("Firestore",!0)),u.host!==G_&&u.host!==m&&us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:m,ssl:a,emulatorOptions:s};if(!os(y,h)&&(i._setSettings(y),s.mockUserToken)){let v,T;if(typeof s.mockUserToken=="string")v=s.mockUserToken,T=Lt.MOCK_USER;else{v=Bw(s.mockUserToken,i._app?.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new ae(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Lt(C)}i._authCredentials=new vT(new Ly(v,T))}}/**
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
 */class hc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new hc(this.firestore,e,this._query)}}class mt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Ha(t,mt._jsonSchema))return new mt(e,s||null,new ue(Ke.fromString(t.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:ht("string",mt._jsonSchemaVersion),referencePath:ht("string")};class yi extends hc{constructor(e,t,s){super(e,t,zd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new ue(e))}withConverter(e){return new yi(this.firestore,e,this._path)}}function Bg(i,e,...t){if(i=jt(i),My("collection","path",e),i instanceof cc){const s=Ke.fromString(e,...t);return eg(s),new yi(i,null,s)}{if(!(i instanceof mt||i instanceof yi))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return eg(s),new yi(i.firestore,null,s)}}function K_(i,e,...t){if(i=jt(i),arguments.length===1&&(e=bd.newId()),My("doc","path",e),i instanceof cc){const s=Ke.fromString(e,...t);return Zm(s),new mt(i,null,new ue(s))}{if(!(i instanceof mt||i instanceof yi))throw new ae(H.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ke.fromString(e,...t));return Zm(s),new mt(i.firestore,i instanceof yi?i.converter:null,new ue(s))}}/**
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
 */const $g="AsyncQueue";class qg{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new x_(this,"async_queue_retry"),this._c=()=>{const s=ed();s&&te($g,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=ed();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ed();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new rs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!So(e))throw e;te($g,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,kr("INTERNAL UNHANDLED ERROR: ",Hg(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const a=ef.createAndSchedule(this,e,t,s,(u=>this.hc(u)));return this.tc.push(a),a}uc(){this.nc&&fe(47125,{Pc:Hg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Hg(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Ua extends cc{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new qg,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qg(e),this._firestoreClient=void 0,await e}}}function SS(i,e){const t=typeof i=="object"?i:ky(),s=typeof i=="string"?i:bu,a=Dd(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=Uw("firestore");u&&IS(a,...u)}return a}function Q_(i){if(i._terminated)throw new ae(H.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||AS(i),i._firestoreClient}function AS(i){const e=i._freezeSettings(),t=TS(i._databaseId,i._app?.options.appId||"",i._persistenceKey,i._app?.options.apiKey,e);i._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new gS(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(a){const u=a?._online.build();return{_offline:a?._offline.build(u),_online:u}})(i._componentsProvider))}/**
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
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(Rt.fromBase64String(e))}catch(t){throw new ae(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ha(e,_n._jsonSchema))return _n.fromBase64String(e.bytes)}}_n._jsonSchemaVersion="firestore/bytes/1.0",_n._jsonSchema={type:ht("string",_n._jsonSchemaVersion),bytes:ht("string")};/**
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
 */class of{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ae(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class af{constructor(e){this._methodName=e}}/**
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
 */class er{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ae(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ae(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:er._jsonSchemaVersion}}static fromJSON(e){if(Ha(e,er._jsonSchema))return new er(e.latitude,e.longitude)}}er._jsonSchemaVersion="firestore/geoPoint/1.0",er._jsonSchema={type:ht("string",er._jsonSchemaVersion),latitude:ht("number"),longitude:ht("number")};/**
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
 */class Nn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ha(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Nn(e.vectorValues);throw new ae(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:ht("string",Nn._jsonSchemaVersion),vectorValues:ht("object")};/**
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
 */const kS=/^__.*__$/;class CS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wa(e,this.data,t,this.fieldTransforms)}}class Y_{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function J_(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe(40011,{dataSource:i})}}class lf{constructor(e,t,s,a,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new lf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){const t=this.path?.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return qu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(J_(this.dataSource)&&kS.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class RS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ac(e)}createContext(e,t,s,a=!1){return new lf({dataSource:e,methodName:t,targetDoc:s,path:Ct.emptyPath(),arrayElement:!1,hasConverter:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X_(i){const e=i._freezeSettings(),t=ac(i._databaseId);return new RS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function xS(i,e,t,s,a,u={}){const h=i.createContext(u.merge||u.mergeFields?2:0,e,t,a);uf("Data must be an object, but it was:",h,s);const m=Z_(s,h);let y,v;if(u.merge)y=new un(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const T=[];for(const C of u.mergeFields){const R=za(e,C,t);if(!h.contains(R))throw new ae(H.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);nv(T,R)||T.push(R)}y=new un(T),v=h.fieldTransforms.filter((C=>y.covers(C.field)))}else y=null,v=h.fieldTransforms;return new CS(new Xt(m),y,v)}class dc extends af{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function PS(i,e,t,s){const a=i.createContext(1,e,t);uf("Data must be an object, but it was:",a,s);const u=[],h=Xt.empty();ki(s,((y,v)=>{const T=tv(e,y,t);v=jt(v);const C=a.childContextForFieldPath(T);if(v instanceof dc)u.push(T);else{const R=fc(v,C);R!=null&&(u.push(T),h.set(T,R))}}));const m=new un(u);return new Y_(h,m,a.fieldTransforms)}function NS(i,e,t,s,a,u){const h=i.createContext(1,e,t),m=[za(e,s,t)],y=[a];if(u.length%2!=0)throw new ae(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<u.length;R+=2)m.push(za(e,u[R])),y.push(u[R+1]);const v=[],T=Xt.empty();for(let R=m.length-1;R>=0;--R)if(!nv(v,m[R])){const z=m[R];let X=y[R];X=jt(X);const J=h.childContextForFieldPath(z);if(X instanceof dc)v.push(z);else{const K=fc(X,J);K!=null&&(v.push(z),T.set(z,K))}}const C=new un(v);return new Y_(T,C,h.fieldTransforms)}function fc(i,e){if(ev(i=jt(i)))return uf("Unsupported field value:",e,i),Z_(i,e);if(i instanceof af)return(function(s,a){if(!J_(a.dataSource))throw a.createError(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(a);u&&a.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,a){const u=[];let h=0;for(const m of s){let y=fc(m,a.childContextForArray(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,a){if((s=jt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return hI(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Qe.fromDate(s);return{timestampValue:Uu(a.serializer,u)}}if(s instanceof Qe){const u=new Qe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Uu(a.serializer,u)}}if(s instanceof er)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _n)return{bytesValue:y_(a.serializer,s._byteString)};if(s instanceof mt){const u=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw a.createError(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Hd(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Nn)return(function(h,m){const y=h instanceof Nn?h.toArray():h;return{mapValue:{fields:{[Wy]:{stringValue:Gy},[Ou]:{arrayValue:{values:y.map((T=>{if(typeof T!="number")throw m.createError("VectorValues must only contain numeric values.");return Bd(m.serializer,T)}))}}}}}})(s,a);if(S_(s))return s._toProto(a.serializer);throw a.createError(`Unsupported field value: ${Od(s)}`)})(i,e)}function Z_(i,e){const t={};return Uy(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(i,((s,a)=>{const u=fc(a,e.childContextForField(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function ev(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Qe||i instanceof er||i instanceof _n||i instanceof mt||i instanceof af||i instanceof Nn||S_(i))}function uf(i,e,t){if(!ev(t)||!Fy(t)){const s=Od(t);throw s==="an object"?e.createError(i+" a custom object"):e.createError(i+" "+s)}}function za(i,e,t){if((e=jt(e))instanceof of)return e._internalPath;if(typeof e=="string")return tv(i,e);throw qu("Field path arguments must be of type string or ",i,!1,void 0,t)}const DS=new RegExp("[~\\*/\\[\\]]");function tv(i,e,t){if(e.search(DS)>=0)throw qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new of(...e.split("."))._internalPath}catch{throw qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function qu(i,e,t,s,a){const u=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${a}`),y+=")"),new ae(H.INVALID_ARGUMENT,m+i+y)}function nv(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class VS{convertValue(e,t="none"){switch(Ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ot(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ei(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw fe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ki(e,((a,u)=>{s[a]=this.convertValue(u,t)})),s}convertVectorValue(e){const t=e.fields?.[Ou].arrayValue?.values?.map((s=>ot(s.doubleValue)));return new Nn(t)}convertGeoPoint(e){return new er(ot(e.latitude),ot(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ec(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Oa(e));default:return null}}convertTimestamp(e){const t=wi(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ke.fromString(e);Fe(I_(s),9688,{name:e});const a=new La(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return a.isEqual(t)||kr(`Document ${u} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */class rv extends VS{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}const Wg="@firebase/firestore",Gg="4.12.0";/**
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
 */function Kg(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const u of s)if(u in a&&typeof a[u]=="function")return!0;return!1})(i,["next","error","complete"])}/**
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
 */class iv{constructor(e,t,s,a,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(za("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bS extends iv{data(){return super.data()}}/**
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
 */function OS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ae(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function LS(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class ka{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ss extends iv{constructor(e,t,s,a,u,h){super(e,t,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(za("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ss._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ss._jsonSchemaVersion="firestore/documentSnapshot/1.0",ss._jsonSchema={type:ht("string",ss._jsonSchemaVersion),bundleSource:ht("string","DocumentSnapshot"),bundleName:ht("string"),bundle:ht("string")};class ku extends ss{data(e={}){return super.data(e)}}class uo{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new ka(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ku(this._firestore,this._userDataWriter,s.key,s,new ka(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ae(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,u){if(a._snapshot.oldDocs.isEmpty()){let h=0;return a._snapshot.docChanges.map((m=>{const y=new ku(a._firestore,a._userDataWriter,m.doc.key,m.doc,new ka(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);return m.doc,{type:"added",doc:y,oldIndex:-1,newIndex:h++}}))}{let h=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const y=new ku(a._firestore,a._userDataWriter,m.doc.key,m.doc,new ka(a._snapshot.mutatedKeys.has(m.doc.key),a._snapshot.fromCache),a.query.converter);let v=-1,T=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),T=h.indexOf(m.doc.key)),{type:MS(m.type),doc:y,oldIndex:v,newIndex:T}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ae(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=uo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach((u=>{u._document!==null&&(t.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),a.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe(61501,{type:i})}}/**
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
 */uo._jsonSchemaVersion="firestore/querySnapshot/1.0",uo._jsonSchema={type:ht("string",uo._jsonSchemaVersion),bundleSource:ht("string","QuerySnapshot"),bundleName:ht("string"),bundle:ht("string")};function FS(i,e,t,...s){i=is(i,mt);const a=is(i.firestore,Ua),u=X_(a);let h;return h=typeof(e=jt(e))=="string"||e instanceof of?NS(u,"updateDoc",i._key,e,t,s):PS(u,"updateDoc",i._key,e),sv(a,[h.toMutation(i._key,Xn.exists(!0))])}function jS(i,e){const t=is(i.firestore,Ua),s=K_(i),a=LS(i.converter,e),u=X_(i.firestore);return sv(t,[xS(u,"addDoc",s._key,a,i.converter!==null,{}).toMutation(s._key,Xn.exists(!1))]).then((()=>s))}function US(i,...e){i=jt(i);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Kg(e[s])||(t=e[s++]);const a={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Kg(e[s])){const v=e[s];e[s]=v.next?.bind(v),e[s+1]=v.error?.bind(v),e[s+2]=v.complete?.bind(v)}let u,h,m;if(i instanceof mt)h=is(i.firestore,Ua),m=zd(i._key.path),u={next:v=>{e[s]&&e[s](zS(h,i,v))},error:e[s+1],complete:e[s+2]};else{const v=is(i,hc);h=is(v.firestore,Ua),m=v._query;const T=new rv(h);u={next:C=>{e[s]&&e[s](new uo(h,T,v,C))},error:e[s+1],complete:e[s+2]},OS(i._query)}const y=Q_(h);return vS(y,m,a,u)}function sv(i,e){const t=Q_(i);return wS(t,e)}function zS(i,e,t){const s=t.docs.get(e._key),a=new rv(i);return new ss(i,a,e._key,s,new ka(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){yT(Eo),po(new as("firestore",((s,{instanceIdentifier:a,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Ua(new wT(s.getProvider("auth-internal")),new IT(h,s.getProvider("app-check-internal")),UT(h,a),h);return u={useFetchStreams:t,...u},m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),mi(Wg,Gg,e),mi(Wg,Gg,"esm2020")})();function ov(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const BS=ov,av=new $a("auth","Firebase",ov());/**
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
 */const Hu=new Pd("@firebase/auth");function $S(i,...e){Hu.logLevel<=Ce.WARN&&Hu.warn(`Auth (${Eo}): ${i}`,...e)}function Cu(i,...e){Hu.logLevel<=Ce.ERROR&&Hu.error(`Auth (${Eo}): ${i}`,...e)}/**
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
 */function Rr(i,...e){throw cf(i,...e)}function tr(i,...e){return cf(i,...e)}function lv(i,e,t){const s={...BS(),[e]:t};return new $a("auth","Firebase",s).create(e,{appName:i.name})}function _i(i){return lv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return av.create(i,...e)}function ge(i,e,...t){if(!i)throw cf(e,...t)}function Ir(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Cu(e),new Error(e)}function xr(i,e){i||Ir(e)}/**
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
 */function kd(){return typeof self<"u"&&self.location?.href||""}function qS(){return Qg()==="http:"||Qg()==="https:"}function Qg(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function HS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qS()||Kw()||"connection"in navigator)?navigator.onLine:!0}function WS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ya{constructor(e,t){this.shortDelay=e,this.longDelay=t,xr(t>e,"Short delay should be less than long delay!"),this.isMobile=Hw()||Qw()}get(){return HS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hf(i,e){xr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class uv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const GS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const KS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QS=new Ya(3e4,6e4);function pc(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function ko(i,e,t,s,a={}){return cv(i,a,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=qa({key:i.config.apiKey,...h}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:e,headers:y,...u};return Gw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&wo(i.emulatorConfig.host)&&(v.credentials="include"),uv.fetch()(await dv(i,i.config.apiHost,t,m),v)})}async function cv(i,e,t){i._canInitEmulator=!1;const s={...GS,...e};try{const a=new YS(i),u=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw wu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[y,v]=m.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(i,"credential-already-in-use",h);if(y==="EMAIL_EXISTS")throw wu(i,"email-already-in-use",h);if(y==="USER_DISABLED")throw wu(i,"user-disabled",h);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw lv(i,T,v);Rr(i,T)}}catch(a){if(a instanceof Pr)throw a;Rr(i,"network-request-failed",{message:String(a)})}}async function hv(i,e,t,s,a={}){const u=await ko(i,e,t,s,a);return"mfaPendingCredential"in u&&Rr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function dv(i,e,t,s){const a=`${e}${t}?${s}`,u=i,h=u.config.emulator?hf(i.config,a):`${i.config.apiScheme}://${a}`;return KS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class YS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(tr(this.auth,"network-request-failed")),QS.get())})}}function wu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=tr(i,e,s);return a.customData._tokenResponse=t,a}/**
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
 */async function JS(i,e){return ko(i,"POST","/v1/accounts:delete",e)}async function Wu(i,e){return ko(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Da(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XS(i,e=!1){const t=jt(i),s=await t.getIdToken(e),a=df(s);ge(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,h=u?.sign_in_provider;return{claims:a,token:s,authTime:Da(nd(a.auth_time)),issuedAtTime:Da(nd(a.iat)),expirationTime:Da(nd(a.exp)),signInProvider:h||null,signInSecondFactor:u?.sign_in_second_factor||null}}function nd(i){return Number(i)*1e3}function df(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const a=yy(t);return a?JSON.parse(a):(Cu("Failed to decode base64 JWT payload"),null)}catch(a){return Cu("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Yg(i){const e=df(i);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Pr&&ZS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function ZS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class eA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Da(this.lastLoginAt),this.creationTime=Da(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(i){const e=i.auth,t=await i.getIdToken(),s=await Ba(i,Wu(e,{idToken:t}));ge(s?.users.length,e,"internal-error");const a=s.users[0];i._notifyReloadListener(a);const u=a.providerUserInfo?.length?fv(a.providerUserInfo):[],h=nA(i.providerData,u),m=i.isAnonymous,y=!(i.email&&a.passwordHash)&&!h?.length,v=m?y:!1,T={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Cd(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(i,T)}async function tA(i){const e=jt(i);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nA(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function fv(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function rA(i,e){const t=await cv(i,{},async()=>{const s=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=i.config,h=await dv(i,a,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:m,body:s};return i.emulatorConfig&&wo(i.emulatorConfig.host)&&(y.credentials="include"),uv.fetch()(h,y)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iA(i,e){return ko(i,"POST","/v2/accounts:revokeToken",pc(i,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=Yg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:u}=await rA(e,t);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:u}=t,h=new co;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),a&&(ge(typeof a=="string","internal-error",{appName:e}),h.accessToken=a),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
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
 */function ai(i,e){ge(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Pn{constructor({uid:e,auth:t,stsTokenManager:s,...a}){this.providerId="firebase",this.proactiveRefresh=new eA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cd(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ba(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return XS(this,e)}reload(){return tA(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(_i(this.auth));const e=await this.getIdToken();return await Ba(this,JS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,a=t.email??void 0,u=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,y=t._redirectEventId??void 0,v=t.createdAt??void 0,T=t.lastLoginAt??void 0,{uid:C,emailVerified:R,isAnonymous:z,providerData:X,stsTokenManager:J}=t;ge(C&&J,e,"internal-error");const K=co.fromJSON(this.name,J);ge(typeof C=="string",e,"internal-error"),ai(s,e.name),ai(a,e.name),ge(typeof R=="boolean",e,"internal-error"),ge(typeof z=="boolean",e,"internal-error"),ai(u,e.name),ai(h,e.name),ai(m,e.name),ai(y,e.name),ai(v,e.name),ai(T,e.name);const pe=new Pn({uid:C,auth:e,email:a,emailVerified:R,displayName:s,isAnonymous:z,photoURL:h,phoneNumber:u,tenantId:m,stsTokenManager:K,createdAt:v,lastLoginAt:T});return X&&Array.isArray(X)&&(pe.providerData=X.map(de=>({...de}))),y&&(pe._redirectEventId=y),pe}static async _fromIdTokenResponse(e,t,s=!1){const a=new co;a.updateFromServerResponse(t);const u=new Pn({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];ge(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?fv(a.providerUserInfo):[],h=!(a.email&&a.passwordHash)&&!u?.length,m=new co;m.updateFromIdToken(s);const y=new Pn({uid:a.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Cd(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!u?.length};return Object.assign(y,v),y}}/**
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
 */const Jg=new Map;function Sr(i){xr(i instanceof Function,"Expected a class definition");let e=Jg.get(i);return e?(xr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Jg.set(i,e),e)}/**
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
 */class pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pv.type="NONE";const Xg=pv;/**
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
 */function Ru(i,e,t){return`firebase:${i}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=Ru(this.userKey,a.apiKey,u),this.fullPersistenceKey=Ru("persistence",a.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Wu(this.auth,{idToken:e}).catch(()=>{});return t?Pn._fromGetAccountInfoResponse(this.auth,t,e):null}return Pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(Sr(Xg),e,s);const a=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=a[0]||Sr(Xg);const h=Ru(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const T=await v._get(h);if(T){let C;if(typeof T=="string"){const R=await Wu(e,{idToken:T}).catch(()=>{});if(!R)break;C=await Pn._fromGetAccountInfoResponse(e,R,T)}else C=Pn._fromJSON(e,T);v!==u&&(m=C),u=v;break}}catch{}const y=a.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new ho(u,e,s):(u=y[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new ho(u,e,s))}}/**
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
 */function Zg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wv(e))return"Blackberry";if(Ev(e))return"Webos";if(gv(e))return"Safari";if((e.includes("chrome/")||yv(e))&&!e.includes("edge/"))return"Chrome";if(vv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function mv(i=Ft()){return/firefox\//i.test(i)}function gv(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yv(i=Ft()){return/crios\//i.test(i)}function _v(i=Ft()){return/iemobile/i.test(i)}function vv(i=Ft()){return/android/i.test(i)}function wv(i=Ft()){return/blackberry/i.test(i)}function Ev(i=Ft()){return/webos/i.test(i)}function ff(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function sA(i=Ft()){return ff(i)&&!!window.navigator?.standalone}function oA(){return Yw()&&document.documentMode===10}function Tv(i=Ft()){return ff(i)||vv(i)||Ev(i)||wv(i)||/windows phone/i.test(i)||_v(i)}/**
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
 */function Iv(i,e=[]){let t;switch(i){case"Browser":t=Zg(Ft());break;case"Worker":t=`${Zg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
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
 */class aA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const y=e(u);h(y)}catch(y){m(y)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function lA(i,e={}){return ko(i,"GET","/v2/passwordPolicy",pc(i,e))}/**
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
 */const uA=6;class cA{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??uA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class hA{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ey(this),this.idTokenSubscription=new ey(this),this.beforeStateQueue=new aA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=av,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Wu(this,{idToken:e}),s=await Pn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(xn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===h)&&m?.user&&(s=m.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(_i(this));const t=e?jt(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(_i(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(_i(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lA(this),t=new cA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await iA(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const y=e.addObserver(t,s,a);return()=>{h=!0,y()}}else{const y=e.addObserver(t);return()=>{h=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&$S(`Error while retrieving App Check token: ${e.error}`),e?.token}}function mc(i){return jt(i)}class ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=iE(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dA(i){pf=i}function fA(i){return pf.loadJS(i)}function pA(){return pf.gapiScript}function mA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function gA(i,e){const t=Dd(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),u=t.getOptions();if(os(u,e??{}))return a;Rr(a,"already-initialized")}return t.initialize({options:e})}function yA(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Sr);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function _A(i,e,t){const s=mc(i);ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,u=Sv(e),{host:h,port:m}=vA(e),y=m===null?"":`:${m}`,v={url:`${u}//${h}${y}/`},T=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){ge(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ge(os(v,s.config.emulator)&&os(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,wo(h)?(Ey(`${u}//${h}${y}`),Ty("Auth",!0)):wA()}function Sv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function vA(i){const e=Sv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const u=a[1];return{host:u,port:ty(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ty(h)}}}function ty(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function wA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Av{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}/**
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
 */async function fo(i,e){return hv(i,"POST","/v1/accounts:signInWithIdp",pc(i,e))}/**
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
 */const EA="http://localhost";class hs extends Av{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a,...u}=t;if(!s||!a)return null;const h=new hs(s,a);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:EA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qa(t)}return e}}/**
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
 */class kv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ja extends kv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class li extends Ja{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
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
 */class ui extends Ja{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return hs._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
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
 */class ci extends Ja{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
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
 */class hi extends Ja{constructor(){super("twitter.com")}static credential(e,t){return hs._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
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
 */async function TA(i,e){return hv(i,"POST","/v1/accounts:signUp",pc(i,e))}/**
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
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const u=await Pn._fromIdTokenResponse(e,s,a),h=ny(s);return new Ai({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=ny(s);return new Ai({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function ny(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function IA(i){if(xn(i.app))return Promise.reject(_i(i));const e=mc(i);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Ai({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await TA(e,{returnSecureToken:!0}),s=await Ai._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
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
 */class Ku extends Pr{constructor(e,t,s,a){super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Ku.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Ku(e,t,s,a)}}function Cv(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Ku._fromErrorAndOperation(i,u,e,s):u})}async function SA(i,e,t=!1){const s=await Ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ai._forOperation(i,"link",s)}/**
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
 */async function AA(i,e,t=!1){const{auth:s}=i;if(xn(s.app))return Promise.reject(_i(s));const a="reauthenticate";try{const u=await Ba(i,Cv(s,a,e,i),t);ge(u.idToken,s,"internal-error");const h=df(u.idToken);ge(h,s,"internal-error");const{sub:m}=h;return ge(i.uid===m,s,"user-mismatch"),Ai._forOperation(i,a,u)}catch(u){throw u?.code==="auth/user-not-found"&&Rr(s,"user-mismatch"),u}}/**
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
 */async function kA(i,e,t=!1){if(xn(i.app))return Promise.reject(_i(i));const s="signIn",a=await Cv(i,s,e),u=await Ai._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(u.user),u}function CA(i,e,t,s){return jt(i).onIdTokenChanged(e,t,s)}function RA(i,e,t){return jt(i).beforeAuthStateChanged(e,t)}function xA(i,e,t,s){return jt(i).onAuthStateChanged(e,t,s)}const Qu="__sak";/**
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
 */class Rv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Qu,"1"),this.storage.removeItem(Qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const PA=1e3,NA=10;class xv extends Rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Tv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,y)=>{this.notifyListeners(h,y)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);oA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,NA):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xv.type="LOCAL";const DA=xv;/**
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
 */class Pv extends Rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pv.type="SESSION";const Nv=Pv;/**
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
 */function VA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new gc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:u}=t.data,h=this.handlersMap[a];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const m=Array.from(h).map(async v=>v(t.origin,u)),y=await VA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:y})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gc.receivers=[];/**
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
 */function mf(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class bA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,h;return new Promise((m,y)=>{const v=mf("",20);a.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);h={messageChannel:a,onMessage(C){const R=C;if(R.data.eventId===v)switch(R.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(R.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(h),a.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[a.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function nr(){return window}function OA(i){nr().location.href=i}/**
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
 */function Dv(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function LA(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MA(){return navigator?.serviceWorker?.controller||null}function FA(){return Dv()?self:null}/**
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
 */const Vv="firebaseLocalStorageDb",jA=1,Yu="firebaseLocalStorage",bv="fbase_key";class Xa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yc(i,e){return i.transaction([Yu],e?"readwrite":"readonly").objectStore(Yu)}function UA(){const i=indexedDB.deleteDatabase(Vv);return new Xa(i).toPromise()}function Rd(){const i=indexedDB.open(Vv,jA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Yu,{keyPath:bv})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Yu)?e(s):(s.close(),await UA(),e(await Rd()))})})}async function ry(i,e,t){const s=yc(i,!0).put({[bv]:e,value:t});return new Xa(s).toPromise()}async function zA(i,e){const t=yc(i,!1).get(e),s=await new Xa(t).toPromise();return s===void 0?null:s.value}function iy(i,e){const t=yc(i,!0).delete(e);return new Xa(t).toPromise()}const BA=800,$A=3;class Ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>$A)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gc._getInstance(FA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await LA(),!this.activeServiceWorker)return;this.sender=new bA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rd();return await ry(e,Qu,"1"),await iy(e,Qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ry(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>zA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>iy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=yc(a,!1).getAll();return new Xa(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ov.type="LOCAL";const qA=Ov;new Ya(3e4,6e4);/**
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
 */function HA(i,e){return e?Sr(e):(ge(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class gf extends Av{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function WA(i){return kA(i.auth,new gf(i),i.bypassAuthState)}function GA(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),AA(t,new gf(i),i.bypassAuthState)}async function KA(i){const{auth:e,user:t}=i;return ge(t,e,"internal-error"),SA(t,new gf(i),i.bypassAuthState)}/**
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
 */class Lv{constructor(e,t,s,a,u=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const y={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(y))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WA;case"linkViaPopup":case"linkViaRedirect":return KA;case"reauthViaPopup":case"reauthViaRedirect":return GA;default:Rr(this.auth,"internal-error")}}resolve(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const QA=new Ya(2e3,1e4);class oo extends Lv{constructor(e,t,s,a,u){super(e,t,a,u),this.provider=s,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){xr(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,QA.get())};e()}}oo.currentPopupAction=null;/**
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
 */const YA="pendingRedirect",xu=new Map;class JA extends Lv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=xu.get(this.auth._key());if(!e){try{const s=await XA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}xu.set(this.auth._key(),e)}return this.bypassAuthState||xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XA(i,e){const t=tk(e),s=ek(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function ZA(i,e){xu.set(i._key(),e)}function ek(i){return Sr(i._redirectPersistence)}function tk(i){return Ru(YA,i.config.apiKey,i.name)}async function nk(i,e,t=!1){if(xn(i.app))return Promise.reject(_i(i));const s=mc(i),a=HA(s,e),h=await new JA(s,a,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const rk=600*1e3;class ik{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Mv(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(tr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(sy(e))}saveEventToCache(e){this.cachedEventUids.add(sy(e)),this.lastProcessedEventTime=Date.now()}}function sy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Mv({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function sk(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mv(i);default:return!1}}/**
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
 */async function ok(i,e={}){return ko(i,"GET","/v1/projects",e)}/**
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
 */const ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lk=/^https?/;async function uk(i){if(i.config.emulator)return;const{authorizedDomains:e}=await ok(i);for(const t of e)try{if(ck(t))return}catch{}Rr(i,"unauthorized-domain")}function ck(i){const e=kd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!lk.test(t))return!1;if(ak.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const hk=new Ya(3e4,6e4);function oy(){const i=nr().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function dk(i){return new Promise((e,t)=>{function s(){oy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oy(),t(tr(i,"network-request-failed"))},timeout:hk.get()})}if(nr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(nr().gapi?.load)s();else{const a=mA("iframefcb");return nr()[a]=()=>{gapi.load?s():t(tr(i,"network-request-failed"))},fA(`${pA()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function fk(i){return Pu=Pu||dk(i),Pu}/**
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
 */const pk=new Ya(5e3,15e3),mk="__/auth/iframe",gk="emulator/auth/iframe",yk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_k=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vk(i){const e=i.config;ge(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?hf(e,gk):`https://${i.config.authDomain}/${mk}`,s={apiKey:e.apiKey,appName:i.name,v:Eo},a=_k.get(i.config.apiHost);a&&(s.eid=a);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${qa(s).slice(1)}`}async function wk(i){const e=await fk(i),t=nr().gapi;return ge(t,i,"internal-error"),e.open({where:document.body,url:vk(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yk,dontclear:!0},s=>new Promise(async(a,u)=>{await s.restyle({setHideOnLeave:!1});const h=tr(i,"network-request-failed"),m=nr().setTimeout(()=>{u(h)},pk.get());function y(){nr().clearTimeout(m),a(s)}s.ping(y).then(y,()=>{u(h)})}))}/**
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
 */const Ek={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tk=500,Ik=600,Sk="_blank",Ak="http://localhost";class ay{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kk(i,e,t,s=Tk,a=Ik){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const y={...Ek,width:s.toString(),height:a.toString(),top:u,left:h},v=Ft().toLowerCase();t&&(m=yv(v)?Sk:t),mv(v)&&(e=e||Ak,y.scrollbars="yes");const T=Object.entries(y).reduce((R,[z,X])=>`${R}${z}=${X},`,"");if(sA(v)&&m!=="_self")return Ck(e||"",m),new ay(null);const C=window.open(e||"",m,T);ge(C,i,"popup-blocked");try{C.focus()}catch{}return new ay(C)}function Ck(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Rk="__/auth/handler",xk="emulator/auth/handler",Pk=encodeURIComponent("fac");async function ly(i,e,t,s,a,u){ge(i.config.authDomain,i,"auth-domain-config-required"),ge(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Eo,eventId:a};if(e instanceof kv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",rE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,C]of Object.entries({}))h[T]=C}if(e instanceof Ja){const T=e.getScopes().filter(C=>C!=="");T.length>0&&(h.scopes=T.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const T of Object.keys(m))m[T]===void 0&&delete m[T];const y=await i._getAppCheckToken(),v=y?`#${Pk}=${encodeURIComponent(y)}`:"";return`${Nk(i)}?${qa(m).slice(1)}${v}`}function Nk({config:i}){return i.emulator?hf(i,xk):`https://${i.authDomain}/${Rk}`}/**
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
 */const rd="webStorageSupport";class Dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nv,this._completeRedirectFn=nk,this._overrideRedirectResult=ZA}async _openPopup(e,t,s,a){xr(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const u=await ly(e,t,s,kd(),a);return kk(e,u,mf())}async _openRedirect(e,t,s,a){await this._originValidation(e);const u=await ly(e,t,s,kd(),a);return OA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:u}=this.eventManagers[t];return a?Promise.resolve(a):(xr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wk(e),s=new ik(e);return t.register("authEvent",a=>(ge(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rd,{type:rd},a=>{const u=a?.[0]?.[rd];u!==void 0&&t(!!u),Rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tv()||gv()||ff()}}const Vk=Dk;var uy="@firebase/auth",cy="1.12.1";/**
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
 */class bk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ok(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lk(i){po(new as("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iv(i)},v=new hA(s,a,u,y);return yA(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),po(new as("auth-internal",e=>{const t=mc(e.getProvider("auth").getImmediate());return(s=>new bk(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mi(uy,cy,Ok(i)),mi(uy,cy,"esm2020")}/**
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
 */const Mk=300,Fk=wy("authIdTokenMaxAge")||Mk;let hy=null;const jk=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Fk)return;const a=t?.token;hy!==a&&(hy=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Uk(i=ky()){const e=Dd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=gA(i,{popupRedirectResolver:Vk,persistence:[qA,DA,Nv]}),s=wy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=jk(u.toString());RA(t,h,()=>h(t.currentUser)),CA(t,m=>h(m))}}const a=_y("auth");return a&&_A(t,`http://${a}`),t}function zk(){return document.getElementsByTagName("head")?.[0]??document}dA({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const u=tr("internal-error");u.customData=a,t(u)},s.type="text/javascript",s.charset="UTF-8",zk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lk("Browser");const Bk={apiKey:"AIzaSyB3kQn2daZ9uePxT1pQfLUg675oPxo_PnU",authDomain:"https://www.google.com/search?q=sistema-de-compras-pi.firebaseapp.com",projectId:"sistema-de-compras-pi",storageBucket:"sistema-de-compras-pi.firebasestorage.app",messagingSenderId:"450182601332",appId:"1:450182601332:web:6d22845c36a0bcd9218f21"},Fv=Ay(Bk),id=SS(Fv),dy=Uk(Fv);function $k(){const[i,e]=$t.useState(null),[t,s]=$t.useState(null),[a,u]=$t.useState("login"),[h,m]=$t.useState([]),[y,v]=$t.useState(!1),[T,C]=$t.useState(null),[R,z]=$t.useState({filial:"",descricao:"",categoria:"",centroCusto:"",prioridade:"Média",valorEstimado:0,quantidade:1,justificativa:""});$t.useEffect(()=>{IA(dy).then(()=>console.log("✅ Autenticado no Firebase")).catch(I=>{console.error("❌ Erro Auth:",I),I.code==="auth/configuration-not-found"?C("Login Anônimo não ativado no Firebase Console."):C("Erro ao conectar ao Firebase. Verifique sua conexão.")});const w=xA(dy,s);return()=>w()},[]),$t.useEffect(()=>{if(!t)return;const w=Bg(id,"solicitacoes"),I=US(w,P=>{const D=P.docs.map(b=>({id:b.id,...b.data()}));m(D.sort((b,A)=>(A.timestamp||0)-(b.timestamp||0))),C(null)},P=>{console.error("❌ Erro Firestore:",P)});return()=>I()},[t]);const X=w=>{e(w==="Requisitante"?{id:1,nome:"Ana Ribeiro",papel:"Requisitante"}:{id:2,nome:"Marcos Silva",papel:"Gestor"}),u(w==="Requisitante"?"form":"gestor")},J=()=>{e(null),u("login")},K=async w=>{if(w.preventDefault(),!!t){v(!0);try{await jS(Bg(id,"solicitacoes"),{requisitante:i?.nome,filial:R.filial,descricao:R.descricao,categoria:R.categoria,centroCusto:R.centroCusto,prioridade:R.prioridade,valorEstimado:Number(R.valorEstimado),quantidade:Number(R.quantidade),justificativa:R.justificativa,status:"Pendente",data:new Date().toISOString(),timestamp:Date.now()}),u("sucesso"),z({filial:"",descricao:"",categoria:"",centroCusto:"",prioridade:"Média",valorEstimado:0,quantidade:1,justificativa:""})}catch(I){console.error("Erro ao enviar:",I)}v(!1)}},pe=async(w,I)=>{if(t)try{await FS(K_(id,"solicitacoes",w),{status:I})}catch(P){console.error("Erro ao atualizar status:",P)}},de=h.reduce((w,I)=>w+I.valorEstimado*I.quantidade,0),Te=h.filter(w=>w.status==="Pendente").length,Se=w=>i?.nome?w.filter(I=>I.requisitante?.toString().trim().toLowerCase()===i.nome.trim().toLowerCase()):[],qe=()=>{const w={};return h.forEach(I=>{w[I.filial]=(w[I.filial]||0)+I.valorEstimado*I.quantidade}),w},Pe=()=>{const w={Alta:0,Média:0,Baixa:0};return h.forEach(I=>{w[I.prioridade]=(w[I.prioridade]||0)+I.valorEstimado*I.quantidade}),w},N=()=>{const w={};return h.forEach(I=>{const P=I.categoria||"Outros";w[P]||(w[P]={total:0,qtd:0}),w[P].total+=I.valorEstimado*I.quantidade,w[P].qtd+=1}),w};return a==="login"?k.jsx("div",{className:"min-h-screen bg-[#030213] flex items-center justify-center p-6 text-slate-900 font-sans",children:k.jsxs("div",{className:"bg-white p-10 rounded-[40px] shadow-2xl max-w-4xl w-full flex flex-col md:flex-row gap-10",children:[k.jsxs("div",{className:"flex-1 flex flex-col justify-center",children:[T&&k.jsxs("div",{className:"bg-rose-50 border border-rose-100 p-4 rounded-2xl mb-6",children:[k.jsx("p",{className:"text-rose-600 text-[10px] font-black uppercase tracking-widest mb-1",children:"Aviso Técnico"}),k.jsx("p",{className:"text-slate-600 text-xs font-medium",children:T})]}),k.jsx("div",{className:"bg-[#1e40af] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-100",children:k.jsx(Mm,{className:"text-white w-8 h-8"})}),k.jsx("h2",{className:"text-4xl font-black text-[#030213] mb-2 uppercase italic tracking-tighter leading-none",children:"PI Compras"}),k.jsx("p",{className:"text-slate-500 mb-10 font-medium italic",children:"Gestão e Governança Conectada."}),k.jsxs("div",{className:"space-y-4",children:[k.jsxs("button",{onClick:()=>X("Requisitante"),className:"w-full flex items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-[32px] hover:border-blue-600 hover:bg-blue-50 transition group active:scale-95 text-left",children:[k.jsxs("div",{className:"flex items-center gap-5",children:[k.jsx("div",{className:"bg-blue-100 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors",children:k.jsx(xw,{className:"w-7 h-7"})}),k.jsxs("div",{children:[k.jsx("p",{className:"font-black text-slate-800 text-xl leading-none",children:"Ana Ribeiro"}),k.jsx("p",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2",children:"Requisitante Operacional"})]})]}),k.jsx(Om,{className:"text-blue-600"})]}),k.jsxs("button",{onClick:()=>X("Gestor"),className:"w-full flex items-center justify-between p-8 bg-slate-50 border border-slate-200 rounded-[32px] hover:border-[#030213] hover:bg-slate-100 transition group active:scale-95 text-left",children:[k.jsxs("div",{className:"flex items-center gap-5",children:[k.jsx("div",{className:"bg-slate-200 p-4 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors",children:k.jsx(fw,{className:"w-7 h-7"})}),k.jsxs("div",{children:[k.jsx("p",{className:"font-black text-slate-800 text-xl leading-none",children:"Marcos Silva"}),k.jsx("p",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2",children:"Gestor de Suprimentos"})]})]}),k.jsx(Om,{})]})]})]}),k.jsxs("div",{className:"hidden md:flex flex-1 bg-[#1e40af] rounded-[40px] items-center justify-center p-12 text-white relative overflow-hidden",children:[k.jsx(Fm,{className:"w-32 h-32 absolute top-10 right-10 opacity-10"}),k.jsxs("div",{className:"z-10 text-center",children:[k.jsx("h3",{className:"text-3xl font-black uppercase italic tracking-tighter mb-4",children:"Análise em Tempo Real"}),k.jsx("p",{className:"opacity-70 leading-relaxed font-medium",children:"Sincronização imediata entre a ponta requisitante e a gestão financeira."})]})]})]})}):k.jsxs("div",{className:"min-h-screen bg-[#f8f9fc] flex flex-col text-slate-900 font-sans",children:[k.jsx("header",{className:`${i?.papel==="Gestor"?"bg-[#030213]":"bg-[#1e40af]"} text-white p-5 sticky top-0 z-50 shadow-xl transition-colors`,children:k.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[k.jsxs("div",{className:"flex items-center gap-2 font-black text-xl uppercase italic tracking-tighter",children:[k.jsx(Mm,{className:"w-5 h-5 text-blue-300"})," PI Compras"]}),k.jsxs("nav",{className:"flex gap-4 items-center",children:[k.jsx("button",{onClick:()=>u(i?.papel==="Gestor"?"gestor":"form"),className:"text-[10px] font-black uppercase tracking-widest opacity-80 hover:opacity-100 transition",children:"Início"}),i?.papel==="Gestor"&&k.jsx("button",{onClick:()=>u("gestor-resumo"),className:"text-[10px] font-black uppercase tracking-widest opacity-80 hover:opacity-100 transition",children:"Matriz Analítica"}),i?.papel==="Requisitante"&&k.jsx("button",{onClick:()=>u("rastreamento"),className:"text-[10px] font-black uppercase tracking-widest opacity-80 hover:opacity-100 transition",children:"Meus Pedidos"}),k.jsx("button",{onClick:J,className:"p-2 bg-white/10 rounded-xl hover:bg-white/20 transition",children:k.jsx(vw,{className:"w-4 h-4"})})]})]})}),k.jsxs("main",{className:"container mx-auto p-6 flex-1",children:[a==="form"&&k.jsxs("div",{className:"max-w-2xl mx-auto bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 animate-in fade-in duration-500",children:[k.jsx("h2",{className:"text-2xl font-black uppercase italic mb-8 border-b pb-4 tracking-tighter",children:"Nova Solicitação"}),k.jsxs("form",{onSubmit:K,className:"space-y-6",children:[k.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Unidade / Filial"}),k.jsxs("select",{required:!0,className:"w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none",value:R.filial,onChange:w=>z({...R,filial:w.target.value}),children:[k.jsx("option",{value:"",children:"Selecione..."}),k.jsx("option",{value:"Filial A - SP",children:"Filial A - SP"}),k.jsx("option",{value:"Filial B - RJ",children:"Filial B - RJ"}),k.jsx("option",{value:"Matriz - BH",children:"Matriz - BH"})]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Centro de Custo"}),k.jsxs("select",{required:!0,className:"w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none",value:R.centroCusto,onChange:w=>z({...R,centroCusto:w.target.value}),children:[k.jsx("option",{value:"",children:"Selecione..."}),k.jsx("option",{value:"Administrativo",children:"Administrativo"}),k.jsx("option",{value:"TI",children:"TI"}),k.jsx("option",{value:"Operacional",children:"Operacional"}),k.jsx("option",{value:"Marketing",children:"Marketing"})]})]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Descrição do Material"}),k.jsx("input",{type:"text",placeholder:"Ex: Monitor Dell 27'",required:!0,className:"w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold focus:ring-2 focus:ring-blue-500 outline-none transition",value:R.descricao,onChange:w=>z({...R,descricao:w.target.value})})]}),k.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Valor Unitário (R$)"}),k.jsx("input",{type:"number",step:"0.01",placeholder:"0,00",required:!0,className:"w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none transition",value:R.valorEstimado||"",onChange:w=>z({...R,valorEstimado:Number(w.target.value)})})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Quantidade"}),k.jsx("input",{type:"number",min:"1",required:!0,className:"w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none transition",value:R.quantidade,onChange:w=>z({...R,quantidade:Number(w.target.value)})})]})]}),k.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Categoria"}),k.jsxs("select",{required:!0,className:"w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold outline-none",value:R.categoria,onChange:w=>z({...R,categoria:w.target.value}),children:[k.jsx("option",{value:"",children:"Selecione..."}),k.jsx("option",{value:"Material de Escritório",children:"Material de Escritório"}),k.jsx("option",{value:"Manutenção",children:"Manutenção"}),k.jsx("option",{value:"Tecnologia e Equipamentos",children:"Tecnologia e Equipamentos"}),k.jsx("option",{value:"Transporte",children:"Transporte"}),k.jsx("option",{value:"Serviço",children:"Serviço"})]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Prioridade"}),k.jsx("div",{className:"flex gap-2",children:["Baixa","Média","Alta"].map(w=>k.jsx("button",{type:"button",onClick:()=>z({...R,prioridade:w}),className:`flex-1 py-4 rounded-xl text-[10px] font-black uppercase border transition-all ${R.prioridade===w?"bg-blue-600 border-blue-600 text-white shadow-lg":"bg-white border-slate-100 text-slate-400"}`,children:w},w))})]})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsx("label",{className:"text-[10px] font-black uppercase text-slate-400 tracking-widest",children:"Justificativa da Compra"}),k.jsx("textarea",{placeholder:"Explique a necessidade...",required:!0,className:"w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl h-32 outline-none resize-none transition",value:R.justificativa,onChange:w=>z({...R,justificativa:w.target.value})})]}),k.jsx("button",{type:"submit",disabled:y,className:"w-full py-6 bg-blue-600 text-white font-black rounded-3xl uppercase tracking-widest text-xs shadow-xl shadow-blue-200 hover:bg-blue-700 transition active:scale-95",children:y?"Gravando Dados...":"Finalizar Pedido"})]})]}),a==="rastreamento"&&k.jsxs("div",{className:"max-w-5xl mx-auto animate-in fade-in duration-500",children:[k.jsxs("div",{className:"flex justify-between items-center mb-10",children:[k.jsxs("div",{children:[k.jsx("h2",{className:"text-3xl font-black text-[#030213] uppercase italic mb-1 tracking-tighter",children:"Acompanhamento"}),k.jsx("p",{className:"text-slate-400 font-medium",children:"Histórico de suas requisições sincronizadas em nuvem."})]}),k.jsxs("button",{onClick:()=>u("form"),className:"bg-blue-600 text-white px-8 py-5 rounded-3xl font-black flex items-center gap-2 shadow-xl hover:bg-blue-700 transition text-[10px] uppercase tracking-widest",children:[k.jsx(Tw,{className:"w-5 h-5"})," Novo Pedido"]})]}),k.jsx("div",{className:"bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden",children:k.jsxs("table",{className:"w-full text-left",children:[k.jsx("thead",{className:"bg-slate-50 text-[10px] font-black uppercase text-slate-400 tracking-widest",children:k.jsxs("tr",{children:[k.jsx("th",{className:"px-8 py-6",children:"Protocolo"}),k.jsx("th",{className:"px-8 py-6",children:"Descrição"}),k.jsx("th",{className:"px-8 py-6",children:"Valor Total"}),k.jsx("th",{className:"px-8 py-6 text-center",children:"Estado"})]})}),k.jsxs("tbody",{className:"divide-y divide-slate-50",children:[Se(h).map(w=>k.jsxs("tr",{className:"hover:bg-blue-50/10 transition",children:[k.jsxs("td",{className:"px-8 py-6 font-black text-slate-300",children:["#",w.id.substring(0,4)]}),k.jsxs("td",{className:"px-8 py-6",children:[k.jsx("p",{className:"font-black text-slate-800 uppercase italic text-sm",children:w.descricao}),k.jsxs("p",{className:"text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1",children:[w.categoria," • ",w.filial]})]}),k.jsxs("td",{className:"px-8 py-6 font-black text-blue-600 italic",children:["R$ ",(w.valorEstimado*w.quantidade).toLocaleString("pt-BR",{minimumFractionDigits:2})]}),k.jsx("td",{className:"px-8 py-6 text-center",children:k.jsxs("span",{className:`px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 mx-auto w-32 ${w.status==="Pendente"?"bg-amber-100 text-amber-600":w.status==="Aprovado"?"bg-emerald-100 text-emerald-600":"bg-rose-100 text-rose-600"}`,children:[w.status==="Pendente"?k.jsx(mw,{className:"w-3.5 h-3.5"}):w.status==="Aprovado"?k.jsx(Lm,{className:"w-3.5 h-3.5"}):k.jsx(Nw,{className:"w-3.5 h-3.5"}),w.status]})})]},w.id)),Se(h).length===0&&k.jsx("tr",{children:k.jsx("td",{colSpan:4,className:"py-20 text-center text-slate-300 font-black uppercase text-xs tracking-widest italic opacity-50",children:"Nenhum pedido encontrado."})})]})]})})]}),a==="gestor"&&k.jsxs("div",{className:"max-w-3xl mx-auto space-y-4 animate-in slide-in-from-bottom-4 duration-500",children:[k.jsxs("div",{className:"flex justify-between items-end mb-6",children:[k.jsxs("div",{children:[k.jsx("h2",{className:"text-3xl font-black uppercase italic tracking-tighter leading-none",children:"Fila de Análise"}),k.jsx("p",{className:"text-slate-400 text-xs mt-1",children:"Gestão de aprovações pendentes."})]}),k.jsxs("div",{className:"bg-white p-3 rounded-2xl border border-slate-100 text-center min-w-[100px] shadow-sm",children:[k.jsx("p",{className:"text-[9px] font-black uppercase text-amber-500 tracking-widest leading-none mb-1",children:"Pendentes"}),k.jsx("p",{className:"text-2xl font-black text-slate-800",children:Te})]})]}),k.jsxs("div",{className:"space-y-3",children:[h.filter(w=>w.status==="Pendente").map(w=>k.jsxs("div",{className:"bg-white rounded-[32px] shadow-sm border border-slate-50 overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-lg",children:[k.jsx("div",{className:`w-2 md:w-3 ${w.prioridade==="Alta"?"bg-rose-500":"bg-blue-500"}`}),k.jsxs("div",{className:"flex-1 p-5 md:p-6",children:[k.jsxs("div",{className:"flex flex-col md:flex-row justify-between gap-4 mb-4 border-b border-slate-50 pb-4",children:[k.jsxs("div",{className:"flex-1",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[k.jsxs("span",{className:"bg-slate-100 text-slate-400 px-2 py-0.5 rounded text-[8px] font-black uppercase",children:["#",w.id.substring(0,4)]}),k.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-widest",children:w.requisitante})]}),k.jsx("h3",{className:"text-xl font-black text-slate-800 uppercase italic leading-none",children:w.descricao}),k.jsxs("p",{className:"text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1",children:[w.categoria," | ",w.filial]})]}),k.jsxs("div",{className:"text-right flex flex-col justify-center min-w-[160px]",children:[k.jsxs("p",{className:"text-[9px] font-black text-slate-400 uppercase tracking-widest italic leading-none mb-1",children:[w.quantidade," UN x R$ ",w.valorEstimado.toLocaleString("pt-BR",{minimumFractionDigits:2})]}),k.jsxs("p",{className:"text-2xl font-black text-blue-600 leading-none tracking-tighter italic",children:["R$ ",(w.valorEstimado*w.quantidade).toLocaleString("pt-BR",{minimumFractionDigits:2})]})]})]}),k.jsxs("div",{className:"mb-5",children:[k.jsx("p",{className:"text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest",children:"Justificativa Operacional:"}),k.jsxs("p",{className:"text-xs italic text-slate-500 bg-slate-50 p-3 rounded-xl",children:['"',w.justificativa,'"']})]}),k.jsxs("div",{className:"flex gap-3 justify-end",children:[k.jsx("button",{onClick:()=>pe(w.id,"Rejeitado"),className:"px-5 py-2.5 border-2 border-rose-50 text-rose-500 rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-rose-50 transition",children:"Negar"}),k.jsx("button",{onClick:()=>pe(w.id,"Aprovado"),className:"px-8 py-2.5 bg-[#030213] text-white rounded-xl font-black text-[9px] uppercase tracking-widest hover:bg-slate-800 transition shadow-lg",children:"Autorizar"})]})]})]},w.id)),Te===0&&k.jsxs("div",{className:"text-center py-16 bg-white rounded-[40px] border border-dashed border-slate-200",children:[k.jsx(hw,{className:"w-10 h-10 text-slate-200 mx-auto mb-3"}),k.jsx("p",{className:"text-slate-300 font-black uppercase text-[10px] tracking-widest",children:"Nenhuma requisição aguardando análise."})]})]})]}),a==="gestor-resumo"&&k.jsxs("div",{className:"max-w-6xl mx-auto space-y-10 scale-in duration-500",children:[k.jsxs("div",{className:"flex justify-between items-end mb-8",children:[k.jsxs("div",{children:[k.jsx("h2",{className:"text-5xl font-black text-[#030213] tracking-tighter uppercase italic leading-none",children:"Matriz Analítica"}),k.jsx("p",{className:"text-slate-500 font-medium mt-4",children:"Monitoramento orçamentário consolidado em tempo real."})]}),k.jsxs("button",{onClick:()=>u("gestor"),className:"bg-blue-600 text-white px-10 py-6 rounded-[32px] font-black flex items-center gap-3 hover:bg-blue-700 transition shadow-2xl active:scale-95 text-[10px] uppercase tracking-widest",children:[k.jsx(yw,{className:"w-5 h-5"})," Ver Fila"]})]}),k.jsxs("div",{className:"bg-[#030213] p-12 rounded-[56px] text-white flex flex-col md:flex-row justify-around items-center shadow-2xl relative overflow-hidden",children:[k.jsx(Fm,{className:"w-96 h-96 absolute -right-20 -bottom-20 opacity-5 pointer-events-none"}),k.jsxs("div",{className:"text-center z-10",children:[k.jsx("p",{className:"text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4",children:"Volume Total Solicitado"}),k.jsxs("p",{className:"text-6xl font-black italic tracking-tighter uppercase",children:["R$ ",de.toLocaleString("pt-BR",{minimumFractionDigits:2})]})]}),k.jsx("div",{className:"w-px h-24 bg-white/10 hidden md:block"}),k.jsxs("div",{className:"text-center z-10",children:[k.jsx("p",{className:"text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4",children:"Ticket Médio / Pedido"}),k.jsxs("p",{className:"text-6xl font-black italic tracking-tighter uppercase",children:["R$ ",h.length>0?(de/h.length).toLocaleString("pt-BR",{minimumFractionDigits:2}):"0,00"]})]})]}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[k.jsxs("div",{className:"bg-white p-10 rounded-[48px] shadow-sm border border-slate-50 flex flex-col transition-all hover:shadow-2xl",children:[k.jsxs("div",{className:"flex items-center gap-4 mb-10 text-[#030213]",children:[k.jsx("div",{className:"bg-rose-50 p-4 rounded-3xl",children:k.jsx(Cw,{className:"text-rose-600 w-6 h-6"})}),k.jsx("h3",{className:"text-xl font-black tracking-tighter uppercase italic",children:"Criticidade"})]}),k.jsx("div",{className:"space-y-8 flex-1",children:Object.entries(Pe()).map(([w,I])=>{const P=de>0?I/de*100:0;return k.jsxs("div",{children:[k.jsxs("div",{className:"flex justify-between items-end mb-3",children:[k.jsx("p",{className:"text-[10px] font-black uppercase tracking-widest text-slate-500",children:w}),k.jsxs("p",{className:"font-black text-slate-800 text-base tracking-tighter italic uppercase",children:["R$ ",I.toLocaleString("pt-BR",{minimumFractionDigits:2})]})]}),k.jsx("div",{className:"w-full h-2.5 bg-slate-50 rounded-full overflow-hidden",children:k.jsx("div",{className:`h-full transition-all duration-1000 ${w==="Alta"?"bg-rose-500":w==="Média"?"bg-amber-400":"bg-blue-400"}`,style:{width:`${P}%`}})})]},w)})})]}),k.jsxs("div",{className:"bg-white p-10 rounded-[48px] shadow-sm border border-slate-100 transition-all hover:shadow-2xl",children:[k.jsxs("div",{className:"flex items-center gap-4 mb-10 text-[#030213]",children:[k.jsx("div",{className:"bg-blue-50 p-4 rounded-3xl",children:k.jsx(lw,{className:"text-blue-600 w-6 h-6"})}),k.jsx("h3",{className:"text-xl font-black tracking-tighter uppercase italic",children:"Filiais"})]}),k.jsx("div",{className:"space-y-8",children:Object.entries(qe()).map(([w,I])=>{const P=de>0?I/de*100:0;return k.jsxs("div",{children:[k.jsxs("div",{className:"flex justify-between items-center mb-3 text-[10px] font-black uppercase text-slate-700 tracking-widest",children:[k.jsx("p",{children:w}),k.jsxs("p",{className:"text-blue-800 font-black",children:[P.toFixed(1),"%"]})]}),k.jsx("div",{className:"w-full h-3.5 bg-slate-50 rounded-full overflow-hidden",children:k.jsx("div",{className:"h-full bg-blue-600 transition-all duration-1000 shadow-inner",style:{width:`${P}%`}})})]},w)})})]}),k.jsxs("div",{className:"bg-white p-10 rounded-[48px] shadow-sm border border-slate-50 transition-all hover:shadow-2xl",children:[k.jsxs("div",{className:"flex items-center gap-4 mb-10 text-[#030213]",children:[k.jsx("div",{className:"bg-emerald-50 p-4 rounded-3xl",children:k.jsx(Sw,{className:"text-emerald-600 w-6 h-6"})}),k.jsx("h3",{className:"text-xl font-black tracking-tighter uppercase italic",children:"Categorias"})]}),k.jsx("div",{className:"space-y-4",children:Object.entries(N()).map(([w,I])=>k.jsxs("div",{className:"flex justify-between items-center p-5 bg-slate-50/50 rounded-[28px] border border-slate-100 transition hover:bg-emerald-50/20 group",children:[k.jsxs("div",{children:[k.jsx("p",{className:"font-black text-slate-800 text-[10px] uppercase tracking-widest leading-none",children:w}),k.jsxs("p",{className:"text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-2 leading-none",children:[I.qtd," Pedidos"]})]}),k.jsx("div",{className:"text-right",children:k.jsxs("p",{className:"text-base font-black text-emerald-600 italic uppercase leading-none",children:["R$ ",I.total.toLocaleString("pt-BR",{minimumFractionDigits:2})]})})]},w))})]})]})]}),a==="sucesso"&&k.jsxs("div",{className:"text-center py-24 animate-in zoom-in-95 duration-700",children:[k.jsx("div",{className:"bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner",children:k.jsx(Lm,{className:"text-emerald-500 w-12 h-12"})}),k.jsx("h2",{className:"text-4xl font-black uppercase italic mb-4 tracking-tighter",children:"Pedido Protocolado!"}),k.jsx("p",{className:"text-slate-400 mb-10 max-w-xs mx-auto text-sm font-medium",children:"Sua solicitação foi enviada para a fila de análise orçamentária em tempo real."}),k.jsxs("div",{className:"flex gap-4 justify-center",children:[k.jsx("button",{onClick:()=>u("rastreamento"),className:"px-10 py-6 bg-[#030213] text-white font-black rounded-3xl uppercase text-[10px] tracking-widest shadow-xl transition active:scale-95",children:"Ver Meus Pedidos"}),k.jsx("button",{onClick:()=>u("form"),className:"px-10 py-6 bg-blue-600 text-white font-black rounded-3xl uppercase text-[10px] tracking-widest shadow-xl shadow-blue-100 transition active:scale-95",children:"Nova Solicitação"})]})]})]}),k.jsx("footer",{className:"py-12 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] italic opacity-50",children:"© 2025 • PI Compras • Gestão de Suprimentos & Governança Corporativa"})]})}tw.createRoot(document.getElementById("root")).render(k.jsx(K0.StrictMode,{children:k.jsx($k,{})}));
