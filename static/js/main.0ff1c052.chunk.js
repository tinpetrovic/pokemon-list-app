(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,r){e.exports=r.p+"static/media/pokeball-png-45331.b6d07b13.png"},39:function(e,t,r){e.exports=r.p+"static/media/pokeballs.6563d6fb.jpg"},45:function(e,t,r){e.exports=r(62)},53:function(e,t,r){},57:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(41),i=r.n(o),c=(r(53),r(1)),l=(r(55),r(57),r(14)),s=r(74),u=r(64),f=r(38),m=r.n(f);r(39);var p=function(){return a.a.createElement("div",{className:"landing-container d-flex justify-content-center align-items-center"},a.a.createElement(s.a,{className:"pokeball-wrapper w-75 text-center"},a.a.createElement(s.a.Body,{className:"d-flex flex-column justify-content-between align-items-center"},a.a.createElement(s.a.Title,{className:"card-title"},"Pokemon List App"),a.a.createElement(l.b,{to:"/pokemon-list-app/pokemon"},a.a.createElement(u.a,{className:"pokeball-image fluid",src:m.a})),a.a.createElement(s.a.Text,{className:"card-text"},"Click Pokeball to Enter!"))))},h=r(10),d=r(4),v=r(75),y=Object(n.createContext)();function g(e){var t=e.children,r=Object(n.useState)(0),o=Object(d.a)(r,2),i=o[0],c=o[1];return a.a.createElement(y.Provider,{value:[i,c]},t)}var E=function(e){var t=e.setPokemonList,r=Object(n.useContext)(y),o=Object(d.a)(r,2),i=o[0],c=o[1];return a.a.createElement(v.a,null,a.a.createElement(v.a.First,{disabled:0===i,onClick:function(){t([]),c(0)}},"First"),a.a.createElement(v.a.Prev,{disabled:0===i,onClick:function(){t([]),c(i+20),i<20&&c(0)}},"Prev"),a.a.createElement(v.a.Next,{disabled:i>150,onClick:function(){t([]),c(i+20),i>150&&c(131)}},"Next"),a.a.createElement(v.a.Last,{disabled:151===i,onClick:function(){t([]),c(131)}},"Last"))};var w=function(e){var t=e.children,r=e.className;return a.a.createElement("nav",{className:r},a.a.createElement("h1",null,t),a.a.createElement(l.b,{to:"/pokemon-list-app/"},a.a.createElement("img",{className:"nav-image",src:m.a,alt:"pokeball"})))},b=r(73),x=r(65),k=function(e){var t=[];return e.map(function(e){return t.push(e.type.name)}),[("grass"===t[0]?"card-pokemon text-success grass":"bug"===t[0]&&"card-pokemon text-success grass")||"poison"===t[0]&&"card-pokemon text-success grass"||"fire"===t[0]&&"card-pokemon text-danger fire"||"water"===t[0]&&"card-pokemon text-primary water"||"electric"===t[0]&&"card-pokemon text-warning electric"||"ground"===t[0]&&"card-pokemon text-dark ground"||"rock"===t[0]&&"card-pokemon text-dark ground"||"fighting"===t[0]&&"card-pokemon text-dark ground"||"psychic"===t[0]&&"card-pokemon text-dark psychic"||"ghost"===t[0]&&"card-pokemon text-dark psychic"||"normal"===t[0]&&"card-pokemon text-dark normal"]},L=function(e){var t=[];return e.map(function(e){return t.push(e.type.name)}),("grass"===t[0]?"success":"bug"===t[0]&&"success")||"poison"===t[0]&&"success"||"fire"===t[0]&&"danger"||"water"===t[0]&&"primary"||"electric"===t[0]&&"warning"||"ground"===t[0]&&"dark"||"rock"===t[0]&&"dark"||"fighting"===t[0]&&"dark"||"psychic"===t[0]&&"dark"||"ghost"===t[0]&&"dark"||"normal"===t[0]&&"secondary"};var N=function(e){var t=e.pokemon;return a.a.createElement(l.b,{to:"/pokemon-list-app/pokemon/".concat(t.name),className:"card-link w-sm-100 text-dark"},a.a.createElement(s.a,{className:k(t.types)},a.a.createElement(s.a.Img,{className:"img",variant:"top",src:t.sprites.front_default}),a.a.createElement(s.a.Body,null,a.a.createElement(s.a.Title,{className:"card-title"},t.name),a.a.createElement("div",{className:"text-secondary"},"Type: ",t.types.map(function(e,t){return a.a.createElement("span",{className:"text-secondary",key:t},e.type.name," ")}))),a.a.createElement(b.a,{className:"list-group-flush"},t.stats.map(function(e,r){return a.a.createElement(b.a,{key:r,horizontal:!0},a.a.createElement(b.a.Item,{className:"w-50"},e.stat.name),a.a.createElement(b.a.Item,{className:"w-50"},a.a.createElement(x.a,{className:"progress",now:e.base_stat,max:160,label:"".concat(e.base_stat),variant:L(t.types)})))}))))},j=r(66),O=r(67),_=r(68),P=r(69);function S(){S=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:b(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var f={};function m(){}function p(){}function h(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,o)&&(d=y);var g=h.prototype=m.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function b(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var F=function(){var e=Object(n.useContext)(y),t=Object(d.a)(e,1)[0],r=Object(n.useState)([]),o=Object(d.a)(r,2),i=o[0],c=o[1],l=!1,s="https://pokeapi.co/api/v2/pokemon?limit=20&offset=".concat(t),u=function(){var e=Object(h.a)(S().mark(function e(){var t,r,n,a,o;return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s);case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,n=r.results,a=[],o=function(){var e=Object(h.a)(S().mark(function e(t){var r,n,o;return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=0;case 1:if(!(r<t.length)){e.next=12;break}return e.next=4,fetch(t[r].url);case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,a.push(o);case 9:r++,e.next=1;break;case 12:c(a);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),l||o(n);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return u(),function(){l=!0}},[t]),a.a.createElement("main",null,a.a.createElement(w,{className:"main-nav"},"Pokemon Fetch App"),0===i.length?a.a.createElement("div",{className:"spinner-wrapper"},a.a.createElement(j.a,{animation:"border",variant:"primary",className:"spinner"}),a.a.createElement("p",{className:"large text-primary"},"Loading...")):a.a.createElement(O.a,null,a.a.createElement(_.a,null,i.map(function(e,t){return a.a.createElement(P.a,{key:t,className:"mb-3",md:"6",lg:"4"},a.a.createElement(N,{pokemonList:i,pokemon:e}))}),a.a.createElement(E,{setPokemonList:c}))))},T=r(72),I=function(e){var t=e.pokemon;return console.log(t),a.a.createElement(T.a,{className:"carousel"},a.a.createElement(T.a.Item,null,a.a.createElement("img",{className:"d-block",src:t.sprites.front_default,alt:"First slide"})),a.a.createElement(T.a.Item,null,a.a.createElement("img",{className:"d-block",src:t.sprites.back_default,alt:"Second slide"})),a.a.createElement(T.a.Item,null,a.a.createElement("img",{className:"d-block",src:t.sprites.front_shiny,alt:"Third slide"})),a.a.createElement(T.a.Item,null,a.a.createElement("img",{className:"d-block",src:t.sprites.back_shiny,alt:"Third slide"})))},G=r(70);function C(){C=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new N(a||[]);return n(i,"_invoke",{value:b(e,r,c)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=s;var f={};function m(){}function p(){}function h(){}var d={};l(d,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,o)&&(d=y);var g=h.prototype=m.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return n("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function b(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var A=function(){var e=Object(c.o)().pokemonId,t=Object(n.useState)({}),r=Object(d.a)(t,2),o=r[0],i=r[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),u=s[0],f=s[1],m=Object(n.useState)({start:0,end:20}),p=Object(d.a)(m,2),v=p[0],y=p[1],g=!1,E=function(e){var t=e&&e.slice(v.start,v.end);f(t)},b=function(){var e=Object(h.a)(C().mark(function e(t){var r,n,a;return C().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,i(a),E(a.moves);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){return g||b(e),function(){g=!0}},[v]),a.a.createElement(a.a.Fragment,null,a.a.createElement(w,{className:o.types&&k(o.types)},o.name),o.sprites&&a.a.createElement(I,{pokemon:o}),a.a.createElement(O.a,null,a.a.createElement(_.a,{className:"justify-content-center p-2"},a.a.createElement("h3",{className:"text-center mb-3"},"Moves ",a.a.createElement("span",{className:"move-count"},o.moves&&o.moves.length)),0!==u.length?u.map(function(e,t){return a.a.createElement(P.a,{key:t,md:3,sm:12,className:"".concat(k(o.types)," mb-3 me-2 rounded d-flex flex-md-column justify-content-between")},a.a.createElement("div",null,"Name: ",a.a.createElement("span",{className:"move-name"},e.move.name)),a.a.createElement("div",null,"Learned at level: ",e.version_group_details[0].level_learned_at))}):a.a.createElement("div",{className:"pokemon-info--spinner-wrapper d-flex justify-content-center align-items-center"},a.a.createElement(j.a,{animation:"border",variant:"primary",className:"pokemon-info--spinner me-3"}),a.a.createElement("p",{className:"large text-primary"},"Loading..."))),a.a.createElement(_.a,{className:"flex-row justify-content-center mb-4"},a.a.createElement(G.a,{className:"w-25",variant:"outline-secondary",onClick:function(){(v.end>=40||v.start>20)&&(f([]),y({start:v.start-20,end:v.end-20}))},disabled:v.start<20},"Prev"),a.a.createElement(G.a,{className:"w-25",variant:"outline-secondary",onClick:function(){(v.end<o.moves.length||v.start<o.moves.length-20)&&(f([]),y({start:v.start+20,end:v.end+20}))},disabled:o.moves&&v.end>=o.moves.length-20},"Next"))))};var B=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.c,null,a.a.createElement(c.a,{path:"/pokemon-list-app/",element:a.a.createElement(p,null)}),a.a.createElement(c.a,{path:"/pokemon-list-app/pokemon",element:a.a.createElement(F,null)}),a.a.createElement(c.a,{path:"/pokemon-list-app/pokemon/:pokemonId",element:a.a.createElement(A,null)})))},Y=function(e){e&&e instanceof Function&&r.e(1).then(r.bind(null,71)).then(function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(l.a,null,a.a.createElement(g,null,a.a.createElement(B,null)))),Y()}},[[45,3,2]]]);
//# sourceMappingURL=main.0ff1c052.chunk.js.map