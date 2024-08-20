"use strict";(self.webpackChunklotus_denova_web_client=self.webpackChunklotus_denova_web_client||[]).push([["461"],{241:function(e,t,r){r.d(t,{Uy:function(){return B},mv:function(){return s},o$:function(){return l}});var n,o=Symbol.for("immer-nothing"),i=Symbol.for("immer-draftable"),a=Symbol.for("immer-state");function c(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var u=Object.getPrototypeOf;function s(e){return!!e&&!!e[a]}function l(e){return!!e&&(_(e)||Array.isArray(e)||!!e[i]||!!e.constructor?.[i]||b(e)||m(e))}var f=Object.prototype.constructor.toString();function _(e){if(!e||"object"!=typeof e)return!1;let t=u(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===f}function p(e,t){0===d(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function d(e){let t=e[a];return t?t.type_:Array.isArray(e)?1:b(e)?2:m(e)?3:0}function y(e,t){return 2===d(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function h(e,t,r){let n=d(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function b(e){return e instanceof Map}function m(e){return e instanceof Set}function v(e){return e.copy_||e.base_}function w(e,t){if(b(e))return new Map(e);if(m(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=_(e);if(!0!==t&&("class_only"!==t||r)){let t=u(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[a];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(u(e),t)}}function P(e,t=!1){return S(e)||s(e)||!l(e)?e:(d(e)>1&&(e.set=e.add=e.clear=e.delete=g),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>P(t,!0)),e)}function g(){c(2)}function S(e){return Object.isFrozen(e)}var z={};function O(e){let t=z[e];return!t&&c(0,e),t}function j(){return n}function F(e,t){t&&(O("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function A(e){D(e),e.drafts_.forEach(k),e.drafts_=null}function D(e){e===n&&(n=e.parent_)}function C(e){var t;return t=n,n={drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function k(e){let t=e[a];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function M(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[a].modified_&&(A(t),c(4)),l(e)&&(e=E(t,e),!t.parent_&&R(t,e)),t.patches_&&O("Patches").generateReplacementPatches_(r[a].base_,e,t.patches_,t.inversePatches_)):e=E(t,r,[]),A(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==o?e:void 0}function E(e,t,r){if(S(t))return t;let n=t[a];if(!n)return p(t,(o,i)=>N(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return R(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),p(o,(o,a)=>N(e,n,t,o,a,r,i)),R(e,t,!1),r&&e.patches_&&O("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function N(e,t,r,n,o,i,a){if(s(o)){let a=E(e,o,i&&t&&3!==t.type_&&!y(t.assigned_,n)?i.concat(n):void 0);if(h(r,n,a),!s(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(l(o)&&!S(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;E(e,o),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&R(e,o)}}function R(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&P(t,r)}var K={get(e,t){if(t===a)return e;let r=v(e);if(!y(r,t))return function(e,t,r){let n=x(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!l(n)?n:n===W(e.base_,t)?(L(e),e.copy_[t]=X(n,e)):n},has:(e,t)=>t in v(e),ownKeys:e=>Reflect.ownKeys(v(e)),set(e,t,r){let n=x(v(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){var o,i;let n=W(v(e),t),c=n?.[a];if(c&&c.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(((o=r)===(i=n)?0!==o||1/o==1/i:o!=o&&i!=i)&&(void 0!==r||y(e.base_,t)))return!0;L(e),I(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==W(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,L(e),I(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){c(11)},getPrototypeOf:e=>u(e.base_),setPrototypeOf(){c(12)}},U={};function W(e,t){let r=e[a];return(r?v(r):e)[t]}p(K,(e,t)=>{U[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),U.deleteProperty=function(e,t){return U.set.call(this,e,t,void 0)},U.set=function(e,t,r){return K.set.call(this,e[0],t,r,e[0])};function x(e,t){if(!(t in e))return;let r=u(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=u(r)}}function I(e){!e.modified_&&(e.modified_=!0,e.parent_&&I(e.parent_))}function L(e){!e.copy_&&(e.copy_=w(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var $=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&c(6),void 0!==r&&"function"!=typeof r&&c(7),l(e)){let o=C(this),i=X(e,void 0),a=!0;try{n=t(i),a=!1}finally{a?A(o):D(o)}return F(o,r),M(n,o)}if(e&&"object"==typeof e)c(1,e);else{if(void 0===(n=t(e))&&(n=e),n===o&&(n=void 0),this.autoFreeze_&&P(n,!0),r){let t=[],o=[];O("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){!l(e)&&c(8),s(e)&&(e=function(e){return!s(e)&&c(10,e),function e(t){let r;if(!l(t)||S(t))return t;let n=t[a];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=w(t,n.scope_.immer_.useStrictShallowCopy_)}else r=w(t,!0);return p(r,(t,n)=>{h(r,t,e(n))}),n&&(n.finalized_=!1),r}(e)}(e));let t=C(this),r=X(e,void 0);return r[a].isManual_=!0,D(t),r}finishDraft(e,t){let r=e&&e[a];(!r||!r.isManual_)&&c(9);let{scope_:n}=r;return F(n,t),M(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=O("Patches").applyPatches_;return s(e)?n(e,t):this.produce(e,e=>n(e,t))}};function X(e,t){let r=b(e)?O("MapSet").proxyMap_(e,t):m(e)?O("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),o={type_:r?1:0,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=o,a=K;r&&(i=[o],a=U);let{revoke:c,proxy:u}=Proxy.revocable(i,a);return o.draft_=u,o.revoke_=c,u}(e,t);return(t?t.scope_:n).drafts_.push(r),r}var q=new $,B=q.produce;q.produceWithPatches.bind(q),q.setAutoFreeze.bind(q),q.setUseStrictShallowCopy.bind(q),q.applyPatches.bind(q),q.createDraft.bind(q),q.finishDraft.bind(q)}}]);