(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{372:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return f})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"j",(function(){return m}));n(35),n(93),n(373),n(120),n(376),n(206),n(92),n(122),n(10),n(123),n(42),n(125),n(204);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function f(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:h(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return g(t);var o=a.sidebar||s.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=u.base,c=u.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function g(t){var e=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function v(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},373:function(t,e,n){"use strict";var i=n(6),r=n(200),s=n(11),a=n(94),o=n(16),u=n(28),l=n(65),c=n(201),h=n(202);r("match",(function(t,e,n){return[function(e){var n=u(this),r=null==e?void 0:l(e,t);return r?i(r,e,n):new RegExp(e)[t](o(n))},function(t){var i=s(this),r=o(t),u=n(e,i,r);if(u.done)return u.value;if(!i.global)return h(i,r);var l=i.unicode;i.lastIndex=0;for(var f,p=[],d=0;null!==(f=h(i,r));){var g=o(f[0]);p[d]=g,""===g&&(i.lastIndex=c(r,a(i.lastIndex),l)),d++}return 0===d?null:p}]}))},374:function(t,e,n){"use strict";var i=n(1),r=n(44).find,s=n(124),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},376:function(t,e,n){"use strict";var i=n(43),r=n(6),s=n(2),a=n(200),o=n(205),u=n(11),l=n(28),c=n(126),h=n(201),f=n(94),p=n(16),d=n(65),g=n(207),v=n(202),m=n(96),b=n(203),x=n(3),_=b.UNSUPPORTED_Y,k=Math.min,y=[].push,w=s(/./.exec),C=s(y),$=s("".slice);a("split",(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=p(l(this)),a=void 0===n?4294967295:n>>>0;if(0===a)return[];if(void 0===t)return[s];if(!o(t))return r(e,s,t,a);for(var u,c,h,f=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,b=new RegExp(t.source,d+"g");(u=r(m,b,s))&&!((c=b.lastIndex)>v&&(C(f,$(s,v,u.index)),u.length>1&&u.index<s.length&&i(y,f,g(u,1)),h=u[0].length,v=c,f.length>=a));)b.lastIndex===u.index&&b.lastIndex++;return v===s.length?!h&&w(b,"")||C(f,""):C(f,$(s,v)),f.length>a?g(f,0,a):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=l(this),a=null==e?void 0:d(e,t);return a?r(a,e,i,n):r(s,p(i),e,n)},function(t,i){var r=u(this),a=p(t),o=n(s,r,a,i,s!==e);if(o.done)return o.value;var l=c(r,RegExp),d=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(_?"g":"y"),m=new l(_?"^(?:"+r.source+")":r,g),b=void 0===i?4294967295:i>>>0;if(0===b)return[];if(0===a.length)return null===v(m,a)?[a]:[];for(var x=0,y=0,w=[];y<a.length;){m.lastIndex=_?0:y;var S,L=v(m,_?$(a,y):a);if(null===L||(S=k(f(m.lastIndex+(_?y:0)),a.length))===x)y=h(a,y,d);else{if(C(w,$(a,x,y)),w.length===b)return w;for(var O=1;O<=L.length-1;O++)if(C(w,L[O]),w.length===b)return w;y=x=S}}return C(w,$(a,x)),w}]}),!!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),_)},514:function(t,e,n){},515:function(t,e,n){"use strict";var i=n(1),r=n(209).trim;i({target:"String",proto:!0,forced:n(552)("trim")},{trim:function(){return r(this)}})},516:function(t,e,n){var i=n(8),r=n(0),s=n(2),a=n(97),o=n(130),u=n(20),l=n(45).f,c=n(29),h=n(205),f=n(16),p=n(517),d=n(203),g=n(216),v=n(14),m=n(3),b=n(9),x=n(36).enforce,_=n(211),k=n(5),y=n(208),w=n(215),C=k("match"),$=r.RegExp,S=$.prototype,L=r.SyntaxError,O=s(S.exec),I=s("".charAt),E=s("".replace),j=s("".indexOf),R=s("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,A=/a/g,T=/a/g,P=new $(A)!==A,D=d.MISSED_STICKY,H=d.UNSUPPORTED_Y,W=i&&(!P||D||y||w||m((function(){return T[C]=!1,$(A)!=A||$(T)==T||"/a/i"!=$(A,"i")})));if(a("RegExp",W)){for(var G=function(t,e){var n,i,r,s,a,l,d=c(S,this),g=h(t),v=void 0===e,m=[],_=t;if(!d&&g&&v&&t.constructor===G)return t;if((g||c(S,t))&&(t=t.source,v&&(e=p(_))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),_=t,y&&"dotAll"in A&&(i=!!e&&j(e,"s")>-1)&&(e=E(e,/s/g,"")),n=e,D&&"sticky"in A&&(r=!!e&&j(e,"y")>-1)&&H&&(e=E(e,/y/g,"")),w&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],a={},o=!1,u=!1,l=0,c="";i<=n;i++){if("\\"===(e=I(t,i)))e+=I(t,++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:O(N,R(t,i+1))&&(i+=2,u=!0),r+=e,l++;continue;case">"===e&&u:if(""===c||b(a,c))throw new L("Invalid capture group name");a[c]=!0,s[s.length]=[c,l],u=!1,c="";continue}u?c+=e:r+=e}return[r,s]}(t))[0],m=s[1]),a=o($(t,e),d?this:S,G),(i||r||m.length)&&(l=x(a),i&&(l.dotAll=!0,l.raw=G(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=I(t,i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+I(t,++i);return r}(t),n)),r&&(l.sticky=!0),m.length&&(l.groups=m)),t!==_)try{u(a,"source",""===_?"(?:)":_)}catch(t){}return a},B=l($),M=0;B.length>M;)g(G,$,B[M++]);S.constructor=G,G.prototype=S,v(r,"RegExp",G)}_("RegExp")},517:function(t,e,n){var i=n(6),r=n(9),s=n(29),a=n(214),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||r(t,"flags")||!s(o,t)?e:i(a,t)}},518:function(t,e,n){var i=n(0),r=n(8),s=n(208),a=n(24),o=n(12).f,u=n(36).get,l=RegExp.prototype,c=i.TypeError;r&&s&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===a(this))return!!u(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},519:function(t,e,n){var i=n(0),r=n(8),s=n(203).MISSED_STICKY,a=n(24),o=n(12).f,u=n(36).get,l=RegExp.prototype,c=i.TypeError;r&&s&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===a(this))return!!u(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},520:function(t,e,n){"use strict";var i=n(95).PROPER,r=n(14),s=n(11),a=n(16),o=n(3),u=n(517),l=RegExp.prototype.toString,c=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=i&&"toString"!=l.name;(c||h)&&r(RegExp.prototype,"toString",(function(){var t=s(this);return"/"+a(t.source)+"/"+a(u(t))}),{unsafe:!0})},521:function(t,e,n){"use strict";var i,r=n(1),s=n(2),a=n(30).f,o=n(94),u=n(16),l=n(128),c=n(28),h=n(129),f=n(15),p=s("".endsWith),d=s("".slice),g=Math.min,v=h("endsWith");r({target:"String",proto:!0,forced:!!(f||v||(i=a(String.prototype,"endsWith"),!i||i.writable))&&!v},{endsWith:function(t){var e=u(c(this));l(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:g(o(n),i),s=u(t);return p?p(e,s,r):d(e,r-s.length,r)===s}})},522:function(t,e,n){},523:function(t,e,n){},524:function(t,e,n){},525:function(t,e,n){},526:function(t,e,n){},527:function(t,e,n){},528:function(t,e){t.exports=function(t){return null==t}},531:function(t,e,n){},532:function(t,e,n){},534:function(t,e,n){},543:function(t,e,n){"use strict";n.r(e);n(121),n(10);var i=n(372),r={name:"SidebarGroup",components:{DropdownTransition:n(545).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(543).default},methods:{isActive:i.e}},s=(n(563),n(34));function a(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),r=e.children.some((function(e){return"group"===e.type?a(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||r}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports,SidebarLink:n(582).a},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(a(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},u=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},545:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(555),n(34)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},546:function(t,e,n){"use strict";var i=n(1),r=n(547);i({target:"String",proto:!0,forced:n(548)("link")},{link:function(t){return r(this,"a","href",t)}})},547:function(t,e,n){var i=n(2),r=n(28),s=n(16),a=/"/g,o=i("".replace);t.exports=function(t,e,n,i){var u=s(r(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+o(s(i),a,"&quot;")+'"'),l+">"+u+"</"+e+">"}},548:function(t,e,n){var i=n(3);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},549:function(t,e,n){"use strict";n(514)},550:function(t,e,n){var i=n(1),r=n(551);i({global:!0,forced:parseInt!=r},{parseInt:r})},551:function(t,e,n){var i=n(0),r=n(3),s=n(2),a=n(16),o=n(209).trim,u=n(210),l=i.parseInt,c=i.Symbol,h=c&&c.iterator,f=/^[+-]?0x/i,p=s(f.exec),d=8!==l(u+"08")||22!==l(u+"0x16")||h&&!r((function(){l(Object(h))}));t.exports=d?function(t,e){var n=o(a(t));return l(n,e>>>0||(p(f,n)?16:10))}:l},552:function(t,e,n){var i=n(95).PROPER,r=n(3),s=n(210);t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!=="​᠎"[t]()||i&&s[t].name!==t}))}},553:function(t,e,n){"use strict";n(522)},554:function(t,e,n){"use strict";n(523)},555:function(t,e,n){"use strict";n(524)},556:function(t,e,n){"use strict";n(525)},557:function(t,e,n){"use strict";n(526)},558:function(t,e,n){"use strict";n(527)},560:function(t,e,n){var i=n(46),r=n(21),s=n(37);t.exports=function(t){return"string"==typeof t||!r(t)&&s(t)&&"[object String]"==i(t)}},562:function(t,e,n){"use strict";n(531)},563:function(t,e,n){"use strict";n(532)},565:function(t,e,n){"use strict";n(534)},584:function(t,e,n){"use strict";n.r(e);n(546),n(121),n(10),n(127);var i=n(372),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(34),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null).exports,o={name:"Home",components:{NavLink:a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},u=(n(549),Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):n("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports),l=(n(550),n(515),n(204),n(125),n(42),n(35),n(373),n(217),n(218),n(206),n(93),n(516),n(518),n(519),n(520),n(92),n(376),n(120),n(521),n(220)),c=n.n(l),h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=c()(e,"title","");return c()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),f(t,i)},f=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},p={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],s=0;s<e.length&&!(r.length>=n);s++){var a=e[s];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(h(t,a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=n);o++){var u=a.headers[o];u.title&&h(t,a,u.title)&&r.push(Object.assign({},a,{path:a.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},d=(n(553),Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(554),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=n(63),m=(n(219),n(545)),b=n(221),x=n.n(b),_={name:"DropdownLink",components:{NavLink:a,DropdownTransition:m.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return x()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},k=(n(556),{name:"NavLinks",components:{NavLink:a,DropdownLink:Object(s.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(s){var a,o=e[s],u=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===a}))||(a=s)),{text:u,link:a}}))};return[].concat(Object(v.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),y=(n(557),Object(s.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function w(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var C={name:"Navbar",components:{SidebarButton:g,NavLinks:y,SearchBox:d,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(w(this.$el,"paddingLeft"))+parseInt(w(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},$=(n(558),Object(s.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),S=n(580),L=n(581),O={components:{PageEdit:S.a,PageNav:L.a},props:["sidebarItems"]},I=(n(562),Object(s.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),E={name:"Sidebar",components:{SidebarLinks:n(543).default,NavLinks:y},props:["items"]},j=(n(565),{name:"Layout",components:{Home:u,Page:I,Sidebar:Object(s.a)(E,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:$},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),R=Object(s.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=R.exports}}]);