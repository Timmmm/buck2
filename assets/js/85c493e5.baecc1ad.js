"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[525],{3905:(e,r,t)=>{t.r(r),t.d(r,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){return function(r){var t=p(r.components);return n.createElement(e,a({},r,{components:t}))}},p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},x=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=x;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},13043:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={id:"ActionErrorCtx"},i="ActionErrorCtx type",l={unversionedId:"api/build/ActionErrorCtx",id:"api/build/ActionErrorCtx",title:"ActionErrorCtx type",description:"Methods available on ActionErrorCtx to help categorize the action failure. These categorizations should be finer grain, and most likely language specific.",source:"@site/../docs/api/build/ActionErrorCtx.generated.md",sourceDirName:"api/build",slug:"/api/build/ActionErrorCtx",permalink:"/docs/api/build/ActionErrorCtx",draft:!1,tags:[],version:"current",frontMatter:{id:"ActionErrorCtx"},sidebar:"manualSidebar",previous:{title:"globals",permalink:"/docs/api/build/globals"},next:{title:"actions type",permalink:"/docs/api/build/actions"}},c={},s=[{value:"ActionErrorCtx.new_error_location",id:"actionerrorctxnew_error_location",level:2},{value:"ActionErrorCtx.new_sub_error",id:"actionerrorctxnew_sub_error",level:2},{value:"ActionErrorCtx.stderr",id:"actionerrorctxstderr",level:2},{value:"ActionErrorCtx.stdout",id:"actionerrorctxstdout",level:2}],u={toc:s};function p(e){let{components:r,...t}=e;return(0,o.mdx)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"actionerrorctx-type"},(0,o.mdx)("inlineCode",{parentName:"h1"},"ActionErrorCtx")," type"),(0,o.mdx)("p",null,"Methods available on ",(0,o.mdx)("inlineCode",{parentName:"p"},"ActionErrorCtx")," to help categorize the action failure. These categorizations should be finer grain, and most likely language specific."),(0,o.mdx)("h2",{id:"actionerrorctxnew_error_location"},"ActionErrorCtx.new","_","error","_","location"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"def ActionErrorCtx.new_error_location(\n    *,\n    file: str,\n    line: int = _\n) -> ActionErrorLocation\n")),(0,o.mdx)("p",null,"Create a new error location, specifying a file path and an optional line number."),(0,o.mdx)("p",null,"The file path should be either a project-relative path, or an absolute path."),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"actionerrorctxnew_sub_error"},"ActionErrorCtx.new","_","sub","_","error"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"def ActionErrorCtx.new_sub_error(\n    *,\n    category: str,\n    message: str = _,\n    locations: list[ActionErrorLocation] | tuple[ActionErrorLocation, ...] = _\n) -> ActionSubError\n")),(0,o.mdx)("p",null,"Create a new sub error, specifying an error category name, optional message, and an optional list of error locations."),(0,o.mdx)("p",null,"The category should be finer grain error categorizations provided by the rule authors,\nand tend to be language specific. These should not be any kind of shared concepts\namong all errors for all languages/rules. For example, timeouts and infra errors\nshould not go here - buck2 tries to categorize these types of errors automatically.\nAn example of a finer grain error category may be the error code for rustc outputs."),(0,o.mdx)("p",null,"The message will be emitted to the build report, and to the stderr in the error diagnostics\nsection."),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"actionerrorctxstderr"},"ActionErrorCtx.stderr"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"ActionErrorCtx.stderr: str\n")),(0,o.mdx)("p",null,"The stderr of the failed action."),(0,o.mdx)("hr",null),(0,o.mdx)("h2",{id:"actionerrorctxstdout"},"ActionErrorCtx.stdout"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"ActionErrorCtx.stdout: str\n")),(0,o.mdx)("p",null,"The stdout of the failed action."))}p.isMDXComponent=!0}}]);