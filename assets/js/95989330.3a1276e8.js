"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[439],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>i,MDXProvider:()=>c,mdx:()=>_,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){return function(t){var a=p(t.components);return n.createElement(e,l({},t,{components:a}))}},p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,m=u["".concat(o,".").concat(c)]||u[c]||g[c]||l;return a?n.createElement(m,d(d({ref:t},i),{},{components:a})):n.createElement(m,d({ref:t},i))}));function _(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[m]="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={id:"target_node"},o="target_node type",d={unversionedId:"api/bxl/target_node",id:"api/bxl/target_node",title:"target_node type",description:"target\\node.attrs\\eager",source:"@site/../docs/api/bxl/target_node.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/target_node",permalink:"/docs/api/bxl/target_node",draft:!1,tags:[],version:"current",frontMatter:{id:"target_node"},sidebar:"manualSidebar",previous:{title:"target_label type",permalink:"/docs/api/bxl/target_label"},next:{title:"target_universe type",permalink:"/docs/api/bxl/target_universe"}},s={},i=[{value:"target_node.attrs_eager",id:"target_nodeattrs_eager",level:2},{value:"target_node.attrs_lazy",id:"target_nodeattrs_lazy",level:2},{value:"target_node.buildfile_path",id:"target_nodebuildfile_path",level:2},{value:"target_node.get_source",id:"target_nodeget_source",level:2},{value:"target_node.label",id:"target_nodelabel",level:2},{value:"target_node.resolved_attrs_eager",id:"target_noderesolved_attrs_eager",level:2},{value:"target_node.resolved_attrs_lazy",id:"target_noderesolved_attrs_lazy",level:2},{value:"target_node.rule_type",id:"target_noderule_type",level:2},{value:"target_node.sources",id:"target_nodesources",level:2}],u={toc:i};function p(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"target_node-type"},(0,r.mdx)("inlineCode",{parentName:"h1"},"target_node")," type"),(0,r.mdx)("h2",{id:"target_nodeattrs_eager"},"target","_","node.attrs","_","eager"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def target_node.attrs_eager()\n")),(0,r.mdx)("p",null,"Returns a struct of all the attributes of this target node. The structs fields are the attributes names, and the values are ","[",(0,r.mdx)("inlineCode",{parentName:"p"},"StarlarkConfiguredAttr"),"]","."),(0,r.mdx)("p",null,"If you need to access many or all attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_lazy()")," would be a better option for only accessing only a few attrs, although this really\ndepends on what kind of attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_eager()")," each time you need to access the attrs."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_attrs_eager(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.attrs_eager() # cache once\n    ctx.output.print(attrs)\n    # do more stuff with attrs\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_nodeattrs_lazy"},"target","_","node.attrs","_","lazy"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def target_node.attrs_lazy() -> lazy_attrs\n")),(0,r.mdx)("p",null,"Returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"lazy_attrs")," object that you can call ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," on that gets an attr one at a time."),(0,r.mdx)("p",null,"If you need to access only few attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_eager()")," would be a better option for accessing many or all attrs, although this really\ndepends on what kind of attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"attrs_lazy()")," each time to get the ",(0,r.mdx)("inlineCode",{parentName:"p"},"lazy_attrs")," object. Note that if the ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),",\nthen any methods called on ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," will result in an error."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_attrs_lazy(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.attrs_lazy() # cache once\n    ctx.output.print(attrs.get("some_attributes").value())\n    ctx.output.print(attrs.get("some_attribute").label)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_nodebuildfile_path"},"target","_","node.buildfile","_","path"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"target_node.buildfile_path: file_node\n")),(0,r.mdx)("p",null,"Gets the buildfile path from the configured target node."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl_label(ctx):\n    target_node = ctx.cquery().eval(\"owner('path/to/file')\")[0]\n    ctx.output.print(target_node.buildfile_path)\n")),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_nodeget_source"},"target","_","node.get","_","source"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def target_node.get_source(path: str, ctx: bxl_ctx) -> None | artifact\n")),(0,r.mdx)("p",null,"Gets the source ",(0,r.mdx)("inlineCode",{parentName:"p"},"Artifact")," that corresponds to the given ",(0,r.mdx)("inlineCode",{parentName:"p"},"path")," given a context. The path should be the project relative path to the file, or an absolute path."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_get_source(ctx):\n    owner = ctx.cquery().owner("project/relative/path/to/file")[0]\n    artifact = owner.sources()[0]\n    ctx.output.print(artifact)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_nodelabel"},"target","_","node.label"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"target_node.label: configured_target_label\n")),(0,r.mdx)("p",null,"Gets the configured target label of this target node."),(0,r.mdx)("p",null,"Note that you cannot get a non-configured label from a configured target node because the\nconfigured target node is not uniquely identified a non-configured label, only by the configured target label."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_label(ctx):\n    node = ctx.configured_targets("my_cell//bin:the_binary")\n    ctx.output.print(node.label)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_noderesolved_attrs_eager"},"target","_","node.resolved","_","attrs","_","eager"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def target_node.resolved_attrs_eager(ctx: bxl_ctx)\n")),(0,r.mdx)("p",null,"Returns a struct of all the resolved attributes of this target node. The structs fields are the attributes names, and the values are the underlying Starlark values of the attributes."),(0,r.mdx)("p",null,"If you need to access many or all resolved attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_lazy()")," would be a better option for accessing only a few resolved attrs, although this really\ndepends on what kind of resolved attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_eager()")," each time you need all the resolved attrs."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_resolved_attrs_eager(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.resolved_attrs_eager(ctx) # cache once\n    ctx.output.print(attrs)\n    # do more stuff with attrs\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_noderesolved_attrs_lazy"},"target","_","node.resolved","_","attrs","_","lazy"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def target_node.resolved_attrs_lazy(ctx: bxl_ctx) -> lazy_resolved_attrs\n")),(0,r.mdx)("p",null,"Returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"lazy_resolved_attrs")," object that you can call ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," on that gets a resolved attr one at a time."),(0,r.mdx)("p",null,"If you need to access only few resolved attrs on the same node, then this is the preferred way. Otherwise,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_eager()")," would be a better option for accessing many or all resolved attrs, although this really\ndepends on what kind of resolved attrs are on the node. Benchmarking performance will give you the best\nindication on which method to use."),(0,r.mdx)("p",null,"You should store the result of this function call for further usage in the code rather than calling\n",(0,r.mdx)("inlineCode",{parentName:"p"},"resolved_attrs_lazy()")," each time to get the ",(0,r.mdx)("inlineCode",{parentName:"p"},"lazy_resolved_attrs")," object. Note that if the ",(0,r.mdx)("inlineCode",{parentName:"p"},"get()")," is ",(0,r.mdx)("inlineCode",{parentName:"p"},"None"),",\nthen any methods called on ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," will result in an error."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_resolved_attrs_lazy(ctx):\n    node = ctx.cquery().owner("cell//path/to/TARGETS")[0]\n    attrs = node.resolved_attrs_lazy(ctx) # cache once\n    ctx.output.print(attrs.get("some_attributes").value())\n    ctx.output.print(attrs.get("some_attribute").label)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_noderule_type"},"target","_","node.rule","_","type"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"target_node.rule_type: str\n")),(0,r.mdx)("p",null,"Gets the targets' corresponding rule's name. This is the fully qualified rule name including the import path."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_rule_type(ctx):\n    node = ctx.configured_targets("my_cell//bin:the_binary")\n    ctx.output.print(node.rule_type)\n')),(0,r.mdx)("hr",null),(0,r.mdx)("h2",{id:"target_nodesources"},"target","_","node.sources"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"def target_node.sources() -> list[artifact]\n")),(0,r.mdx)("p",null,"Returns a List of all the sources used by this node."),(0,r.mdx)("p",null,"Sample usage:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_sources(ctx):\n    node = ctx.configured_targets("my_cell//bin:the_binary")\n    ctx.output.print(node.sources())\n')))}p.isMDXComponent=!0}}]);