"use strict";(self.webpackChunk_lage_run_docs=self.webpackChunk_lage_run_docs||[]).push([[859],{5318:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var n=t(7378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),k=r,N=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return t?n.createElement(N,o(o({ref:a},d),{},{components:t})):n.createElement(N,o({ref:a},d))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6874:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(5773),r=(t(7378),t(5318));const l={sidebar_position:2,sidebar_label:"Quick Start",title:"Quick Start"},o=void 0,s={unversionedId:"Quick Start",id:"Quick Start",title:"Quick Start",description:"Automated Installation",source:"@site/docs/Quick Start.md",sourceDirName:".",slug:"/Quick Start",permalink:"/lage/docs/Quick Start",draft:!1,editUrl:"https://github.com/microsoft/lage/docs/Quick Start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Quick Start",title:"Quick Start"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/lage/docs/Introduction"},next:{title:"Introducing Lage",permalink:"/lage/docs/Tutorial/"}},i={},p=[{value:"Automated Installation",id:"automated-installation",level:2},{value:"Customize <code>lage.config.js</code>",id:"customize-lageconfigjs",level:2},{value:"Customize workspace (root level) <code>package.json</code>",id:"customize-workspace-root-level-packagejson",level:2},{value:"Ready to Build, Test, and Lint!",id:"ready-to-build-test-and-lint",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"automated-installation"},"Automated Installation"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"npx lage init"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"npx lage init")))))),(0,r.kt)("p",null,"This will let ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," install the latest version of lage into your repo as a one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"devDependencies")," at the root level."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"lage")," is compatible with all the popular workspace managers, this can be applied to a ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"rush")," workspace."),(0,r.kt)("h2",{id:"customize-lageconfigjs"},"Customize ",(0,r.kt)("inlineCode",{parentName:"h2"},"lage.config.js")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command will also generate a default ",(0,r.kt)("inlineCode",{parentName:"p"},"lage.config.js"),". This will likely need to be modified. In particular, pay attention to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline"),"\nconfiguration:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"module"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"exports"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  pipeline"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    build"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"^build"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    test"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ["),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"build"'),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"]"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    lint"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," []"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"js"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"module"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"exports"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"pipeline"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"build"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"^build"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"test"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," ["),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"build"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"]"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"lint"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," []"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,r.kt)("h2",{id:"customize-workspace-root-level-packagejson"},"Customize workspace (root level) ",(0,r.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"lage")," to run your tasks:"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"name"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"workspace-root"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"scripts"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"build"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"lage build"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"test"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"lage test"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"lint"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"lage lint"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"devDependencies"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},'"lage"'),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"latest"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"json"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"name"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"workspace-root"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"scripts"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"build"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage build"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"test"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage test"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lint"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lage lint"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"devDependencies"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"lage"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,r.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"latest"),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,r.kt)("h2",{id:"ready-to-build-test-and-lint"},"Ready to Build, Test, and Lint!"),(0,r.kt)("p",null,"You are now ready to start running all the commands in your repository with ",(0,r.kt)("inlineCode",{parentName:"p"},"lage"),". You'll notice that tasks are now cached!"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"npm run build"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"npm run build")))))),(0,r.kt)("p",null,"or "),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"yarn build"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"yarn build")))))),(0,r.kt)("p",null,"or"),(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"pnpm build"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"undefined"}},"pnpm build")))))),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Now that you've configured ",(0,r.kt)("inlineCode",{parentName:"p"},"lage"),", dig deeper in the ",(0,r.kt)("a",{parentName:"p",href:"/lage/docs/Tutorial/pipeline"},"Tutorial")," section for features like remote caching, task skipping, customized pipelines, and setting priorities."))}c.isMDXComponent=!0}}]);