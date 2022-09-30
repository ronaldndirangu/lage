"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[623],{5318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(5773),r=(a(7378),a(5318));const o={sidebar_position:4,title:"4. Local Caching"},i=void 0,c={unversionedId:"Tutorial/cache",id:"Tutorial/cache",title:"4. Local Caching",description:"lage by default will cache tasks that it has already done recently locally on disk. As long as the source file and the command arguments have not changed, those cached results will be restored.",source:"@site/docs/Tutorial/cache.md",sourceDirName:"Tutorial",slug:"/Tutorial/cache",permalink:"/lage/docs/Tutorial/cache",draft:!1,editUrl:"https://github.com/microsoft/lage/docs/Tutorial/cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"4. Local Caching"},sidebar:"tutorialSidebar",previous:{title:"3. Scoping by packages",permalink:"/lage/docs/Tutorial/scopes"},next:{title:"5. Remote Cache",permalink:"/lage/docs/Tutorial/remote-cache"}},l={},s=[{value:"Turn off cache",id:"turn-off-cache",level:2},{value:"Resetting cache",id:"resetting-cache",level:2},{value:"Cache Options",id:"cache-options",level:2}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lage")," by default will cache tasks that it has already done recently locally on disk. As long as the source file and the command arguments have not changed, those cached results will be restored."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/lage/docs/Tutorial/remote-cache"},"Remote Cache")," for details about speeding up local dev environment even further with a remote cache from Continuous Integration jobs."),(0,r.kt)("h2",{id:"turn-off-cache"},"Turn off cache"),(0,r.kt)("p",null,"Sometimes, this incremental behavior is not desired. You can override the caching behavior by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-cache")," argument."),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"$ lage build --no-cache"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"$ lage build --no-cache")))))),(0,r.kt)("h2",{id:"resetting-cache"},"Resetting cache"),(0,r.kt)("p",null,"Once in a while, the cache might need to be recreated from scratch. In those situations, you can reset the cache by passing in the ",(0,r.kt)("inlineCode",{parentName:"p"},"--reset-cache")," argument to the command line."),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"lage build --reset-cache"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"lage build --reset-cache")))))),(0,r.kt)("h2",{id:"cache-options"},"Cache Options"),(0,r.kt)("p",null,"Caching capability is provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"backfill"),". All of the configuration under the ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheOptions")," key is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"backfill"),". For the complete documentation of ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheOptions"),", see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/backfill#configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"backfill")," configuration documentation")))}p.isMDXComponent=!0}}]);