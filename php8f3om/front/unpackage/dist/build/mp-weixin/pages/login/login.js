(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"029a":function(t,n,e){"use strict";var o=e("4fa7"),a=e.n(o);a.a},"1c0c":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]},"4fa7":function(t,n,e){},"709f":function(t,n,e){"use strict";var o=e("743a"),a=e.n(o);a.a},"743a":function(t,n,e){},"8c26":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("a34a")),a=i(e("7db1"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,o,a,i,r){try{var u=t[i](r),s=u.value}catch(c){return void e(c)}u.done?n(s):Promise.resolve(s).then(o,a)}function u(t){return function(){var n=this,e=arguments;return new Promise((function(o,a){var i=t.apply(n,e);function u(t){r(i,o,a,u,s,"next",t)}function s(t){r(i,o,a,u,s,"throw",t)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var t=["请选择登录用户类型"],n=a.default.list();this.menuList=n;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&(t.push(this.menuList[e].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=t,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(n){t.setStorageSync("loginTable",n),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var n=this;return u(o.default.mark((function e(){var a;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.optionsValues[n.index]){e.next=3;break}return n.$utils.msg("请选择登陆用户类型"),e.abrupt("return");case 3:return e.next=5,n.$api.login("".concat(n.optionsValues[n.index]),{username:n.username,password:n.password});case 5:return a=e.sent,t.removeStorageSync("useridTag"),t.setStorageSync("token",a.token),t.setStorageSync("nickname",n.username),t.setStorageSync("nowTable","".concat(n.optionsValues[n.index])),e.next=12,n.$api.session("".concat(n.optionsValues[n.index]));case 12:a=e.sent,t.setStorageSync("userid",a.data.id),a.data.vip&&t.setStorageSync("vip",a.data.vip),t.setStorageSync("role","".concat(n.options[n.index])),n.$utils.tab("../index/index");case 17:case"end":return e.stop()}}),e)})))()},optionsChange:function(t){this.index=t.target.value}}};n.default=s}).call(this,e("543d")["default"])},b799:function(t,n,e){"use strict";(function(t){e("43f1");o(e("66fd"));var n=o(e("d6f8"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},d6f8:function(t,n,e){"use strict";e.r(n);var o=e("1c0c"),a=e("eb17");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("709f"),e("029a");var r,u=e("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"0000a85c",null,!1,o["a"],r);n["default"]=s.exports},eb17:function(t,n,e){"use strict";e.r(n);var o=e("8c26"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=a.a}},[["b799","common/runtime","common/vendor"]]]);