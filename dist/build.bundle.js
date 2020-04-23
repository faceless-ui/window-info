module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=o.a.createContext({}),u=function(){return Object(r.useContext)(i)},c=n(1),a=n.n(c),f=function(e){var t=e.children,n=u();return t&&"function"==typeof t?t(n):null};f.defaultProps={children:void 0},f.propTypes={children:a.a.func};var l=f;function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=y(t).call(this,e),n=!o||"object"!==s(o)&&"function"!=typeof o?m(r):o,O(m(n),"updateWindowInfoWithTimeout",(function(){setTimeout((function(){n.requestAnimation()}),500)})),O(m(n),"requestAnimation",(function(){n.state.animationScheduled||n.setState({animationScheduled:!0},(function(){return requestAnimationFrame(n.updateWindowInfo)}))})),O(m(n),"updateWindowInfo",(function(){var e=n.props.breakpoints,t=e.xs,r=e.s,o=e.m,i=e.l,u=e.xl,c=n.state.eventsFired,a=window.innerWidth,f=window.innerHeight;n.setState({width:a,height:f,breakpoints:{xs:a<=t,s:a<=r,m:a<=o,l:a<=i,xl:a<=u},eventsFired:c+1,animationScheduled:!1}),n.setCSSVariables()})),O(m(n),"setCSSVariables",(function(){var e=document.documentElement,t=e.style,n=e.clientWidth,r=e.clientHeight;t.setProperty("--vw","".concat(.01*n,"px")),t.setProperty("--vh","".concat(.01*r,"px"))})),n.state={width:0,height:0,breakpoints:{xs:!1,s:!1,m:!1,l:!1,xl:!1},eventsFired:0,animationScheduled:!1},n}var n,r,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.requestAnimation),window.addEventListener("orientationchange",this.updateWindowInfoWithTimeout),this.updateWindowInfo()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.requestAnimation),window.removeEventListener("orientationchange",this.updateWindowInfoWithTimeout)}},{key:"render",value:function(){var e=this.props.children,t=d({},this.state);return delete t.animationScheduled,o.a.createElement(i.Provider,{value:d({},t)},e&&e)}}])&&b(n.prototype,r),u&&b(n,u),t}(r.Component);v.defaultProps={children:void 0,breakpoints:{}},v.propTypes={children:a.a.node,breakpoints:a.a.shape({xs:a.a.number,s:a.a.number,m:a.a.number,l:a.a.number,xl:a.a.number})};var w=v;function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){return function(t){return o.a.createElement(i.Consumer,null,(function(n){return o.a.createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{windowInfo:n}))}))}};n.d(t,"useWindowInfo",(function(){return u})),n.d(t,"WindowInfo",(function(){return l})),n.d(t,"WindowInfoContext",(function(){return i})),n.d(t,"WindowInfoProvider",(function(){return w})),n.d(t,"withWindowInfo",(function(){return g}))}]);
//# sourceMappingURL=build.bundle.js.map