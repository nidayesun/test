/*! production by xiongchuanyu */
webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),f=n(45),s=n(128),p=r(s),d=n(130),y=r(d),b=n(131),m=r(b),h=n(129),v=r(h);n(139);var _=[{path:"/",component:y.default,name:"主页"},{path:"/list",component:m.default,name:"列表页面"},{path:"/detail/:paramsId",component:v.default,name:"详情页面"}],w=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(f.Router,{history:f.hashHistory},_.map(function(e,t){return l.default.createElement(f.Route,{key:t,path:e.path,component:e.component})})))}}]),t}(l.default.Component);(0,p.default)(w,function(){})},128:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),f=n(67),s=n(87),p=n(132);t.default=function(e,t,n){var r=(0,p.storeFactory)(t),c=function(t){function n(e){return o(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e))}return a(n,t),i(n,[{key:"getHeader",value:function(){return l.default.createElement("div",{style:{marginTop:"20",marginBottom:"20"}},"我是顶部(后期扩展导航)")}},{key:"getFooter",value:function(){return l.default.createElement("div",{style:{marginTop:"20",marginBottom:"20"}},"我的footer部分！！")}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("div",null,this.getHeader(),l.default.createElement(f.Provider,{store:r},l.default.createElement(e,null)),this.getFooter()))}}]),n}(l.default.Component);(0,s.render)(l.default.createElement(c,null),document.getElementById("root"))}},129:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c);n(137);var f=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("div",{style:{marginTop:"20",marginBottom:"20"}},l.default.createElement("a",{href:"javascript:;"},"我是Detail页面！！我的页面参数为: ",this.props.params.paramsId)))}}]),t}(l.default.Component);t.default=f},130:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),f=n(45);n(138);var s=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),i(t,[{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement("div",{style:{marginTop:"20",marginBottom:"20"}},"我是home页面！！"),l.default.createElement(f.Link,{to:"/list"},"点击跳转到列表页面"))}}]),t}(l.default.Component);t.default=s},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),l=r(c),f=n(45);n(140);var s=[1,2,3,4],p=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),i(t,[{key:"goDetai",value:function(e){f.hashHistory.push("/detail/"+e)}},{key:"render",value:function(){var e=this;return l.default.createElement("div",null,l.default.createElement("div",null,"我是List页面！"),l.default.createElement("div",null,s.map(function(t,n){return l.default.createElement("div",{style:{marginTop:"20",marginBottom:"20"},key:n,onClick:e.goDetai.bind(e,t)},l.default.createElement("a",{href:"javascript:;"},"点击跳转到",t,"页面"))})))}}]),t}(l.default.Component);t.default=p},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){var t={},n=(0,c.compose)((0,c.applyMiddleware)(i.default),window.devToolsExtension?window.devToolsExtension():function(e){return e})(c.createStore);return n(e,t)}function u(e,t){return function(n){return(0,l.connect)(e,function(e){var n={};return Object.keys(t).forEach(function(r){n[r]=(0,c.bindActionCreators)(t[r],e)}),n})(n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.storeFactory=o,t.connectFactory=u;var a=n(124),i=r(a),c=n(72),l=n(67)},137:function(e,t){},138:function(e,t){},139:function(e,t){},140:function(e,t){}});