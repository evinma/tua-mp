!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.TuaWx={})}(this,function(t){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};console.log("Tua-Wx Version: 0.2.0");var s=function(e,o){Object.keys(e).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))})},p=function(f){var t=function r(a){if(Array.isArray(a))return e=a.map(t),["pop","push","sort","shift","splice","unshift","reverse"].forEach(function(t){var n=e[t];e[t]=function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];var o=n.apply(this,e);return f.setData(c),o}}),e;var e;if("object"===(void 0===a?"undefined":o(a))){var i=Object.create(null);return Object.keys(a).forEach(function(t){var e,o,n;/^__.*__$/.test(t)||(e=i,n=r(a[o=t]),Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:function(){return n},set:function(t){t!==n&&(n=t,f.setData(c))}}))}),i}return a},c=t(f.data);f.$data=c,s(c,f)};t.TuaWxPage=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=t.data,o=void 0===e?{}:e,n=t.methods,r=void 0===n?{}:n,a=t.computed,i=void 0===a?{}:a,f=function(t,e){var o={};for(var n in t)0<=e.indexOf(n)||Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n]);return o}(t,["data","methods","computed"]),c="function"==typeof o?o():o;Page(u({},f,r,{data:c,onLoad:function(){for(var e,o,n,t=arguments.length,r=new Array(t);t--;)r[t]=arguments[t];p(this),e=this,o=i,n=Object.create(null),Object.keys(o).forEach(function(t){Object.defineProperty(n,t,{enumerable:!0,configurable:!0,get:o[t].bind(e),set:function(){}})}),s(n,e),s(n,e.$data),e.setData(n),f.onLoad&&f.onLoad.apply(this,r)}}))},Object.defineProperty(t,"__esModule",{value:!0})});
