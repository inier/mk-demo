webpackJsonp([0],{1584:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,i=n(2),a=u(i),c=n(58),f=u(c),d=n(5),l=u(d),s=n(9),p=u(s),m=n(7),h=u(m),v=n(8),g=u(v),y=n(0),_=(u(y),n(272)),k=n(618),M=u(k),A=(o=(0,_.wrapper)(M.default))(r=function(e){function t(){return(0,l.default)(this,t),(0,h.default)(this,(t.__proto__||(0,f.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a.default)({},this.props,{path:"root"}))}}]),t}(y.Component))||r;t.default=A,e.exports=t.default},1585:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=new m.action(e),n=new g((0,i.default)({},e,{metaAction:t})),u=(0,i.default)({},t,n);return t.config({metaHandlers:u}),u}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=u(r),a=n(275),c=u(a),f=n(5),d=u(f);t.default=o;var l=n(0),s=u(l),p=n(276),m=n(272),h=n(608),v=u(h),g=function e(t){var u=this;(0,d.default)(this,e),this.onInit=function(e){var t=e.component,n=e.injections;u.component=t,u.injections=n,n.reduce("init")},this.getLogo=function(){return u.config.logo},this.getPhoto=function(){return n(1596)},this.getMenuChildren=function(){var e=u.metaAction.gf("data.menu").toJS();return function e(t){var n=[];return t.forEach(function(t){t.children?n.push(s.default.createElement(p.Menu.SubMenu,{key:t.key,title:t.name},e(t.children))):n.push(s.default.createElement(p.Menu.Item,{key:t.key},t.name))}),n}(e)},this.menuClick=function(e){var t=u.metaAction.gf("data.menu").toJS(),n=function t(n){var u=!0,o=!1,r=void 0;try{for(var i,a=(0,c.default)(n);!(u=(i=a.next()).done);u=!0){var f=i.value;if(f.key==e.key)return f;if(f.children){var d=t(f.children);if(d)return d}}}catch(e){o=!0,r=e}finally{try{!u&&a.return&&a.return()}finally{if(o)throw r}}}(t);n&&u.injections.reduce("setContent",n.app,{})},this.myMenuClick=function(e){"logout"==e.key&&u.component.props.onRedirect&&u.config.goAfterLogout&&(u.metaAction.context.set("user",void 0),u.component.props.onRedirect(u.config.goAfterLogout))},this.metaAction=t.metaAction,this.config=v.default.current};e.exports=t.default},1586:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=new f.reducer(e),n=new s((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=u(r),a=n(5),c=u(a);t.default=o;var f=(n(80),n(272)),d=n(608),l=u(d),s=function e(t){var n=this;(0,c.default)(this,e),this.init=function(e,t){var u={data:{menu:n.config.menu,menuDefaultSelectedKeys:n.config.menuDefaultSelectedKeys,menuDefaultOpenKeys:n.config.menuDefaultOpenKeys,content:n.config.defaultContent}};return n.metaReducer.init(e,u)},this.setContent=function(e,t,u){return e=n.metaReducer.sf(e,"data.content.appName",t),e=n.metaReducer.sf(e,"data.content.appParams",u)},this.metaReducer=t.metaReducer,this.config=l.default.current};e.exports=t.default},1596:function(e,t,n){e.exports=n.p+"photo.ac003cd4.png"}});