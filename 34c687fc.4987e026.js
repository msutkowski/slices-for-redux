(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,r,a){"use strict";a.d(r,"a",(function(){return o})),a.d(r,"b",(function(){return u}));var t=a(0),n=a.n(t),c=n.a.createContext({}),i=function(e){var r=n.a.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):Object.assign({},r,e)),a},o=function(e){var r=i(e.components);return n.a.createElement(c.Provider,{value:r},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=Object(t.forwardRef)((function(e,r){var a=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,p=function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===r.indexOf(t)&&(a[t]=e[t]);return a}(e,["components","mdxType","originalType","parentName"]),b=i(a),u=t,d=b[o+"."+u]||b[u]||l[u]||c;return a?n.a.createElement(d,Object.assign({},{ref:r},p,{components:a})):n.a.createElement(d,Object.assign({},{ref:r},p))}));function u(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[p]="string"==typeof e?e:t,i[1]=o;for(var u=2;u<c;u++)i[u]=a[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},98:function(e,r,a){"use strict";a.r(r),a.d(r,"frontMatter",(function(){return i})),a.d(r,"rightToc",(function(){return o})),a.d(r,"metadata",(function(){return p})),a.d(r,"default",(function(){return u}));var t=a(1),n=a(6),c=(a(0),a(113)),i={id:"createSliceGroup",title:"createSliceGroup",sidebar_label:"createSliceGroup",hide_title:!0},o=[{value:"Parameters",id:"parameters",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>parent</code>",id:"parent",children:[]}]},{value:"Return Value",id:"return-value",children:[]}],p={id:"api/createSliceGroup",title:"createSliceGroup",description:"# `createSliceGroup`",source:"@site/docs/api/createSliceGroup.md",permalink:"/slices-for-redux/docs/api/createSliceGroup",sidebar_label:"createSliceGroup",sidebar:"docs",previous:{title:"Slice",permalink:"/slices-for-redux/docs/api/Slice"},next:{title:"SliceGroup",permalink:"/slices-for-redux/docs/api/SliceGroup"}},l={rightToc:o,metadata:p},b="wrapper";function u(e){var r=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(b,Object(t.a)({},l,a,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"createslicegroup"},Object(c.b)("inlineCode",{parentName:"h1"},"createSliceGroup")),Object(c.b)("p",null,"Slice Groups are used to group Slices under some arbitrary named group.\nThis can help organize and ease navigation of a large store state object\nwithin the Redux Dev Tools."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"createSliceGroup")," creates a ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup"))," object."),Object(c.b)("h2",{id:"parameters"},"Parameters"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"createSliceGroup")," accepts a single configuration object argument, with the following options:"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"function createSliceGroup({\n  /**\n   * The SliceGroup name.\n   */\n  name: string;\n\n  /**\n   * Optional - The SliceGroup's parent.\n   */\n  parent?: SliceParent | string;\n})\n")),Object(c.b)("h3",{id:"name"},Object(c.b)("inlineCode",{parentName:"h3"},"name")),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup")),"'s name.",Object(c.b)("br",{parentName:"p"}),"\n","The name cannot contain the path separator '/'.",Object(c.b)("br",{parentName:"p"}),"\n","The name is used to build the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup")),"'s path property."),Object(c.b)("h3",{id:"parent"},Object(c.b)("inlineCode",{parentName:"h3"},"parent")),Object(c.b)("p",null,"optional - The ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup")),"'s parent.",Object(c.b)("br",{parentName:"p"}),"\n","Default value is: ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/rootSliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"rootSliceGroup")),Object(c.b)("br",{parentName:"p"}),"\n","When ",Object(c.b)("inlineCode",{parentName:"p"},"parent")," is ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/rootSliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"rootSliceGroup"))," this ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup")),"'s ",Object(c.b)("inlineCode",{parentName:"p"},"reducer")," will be added to the ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/rootReducer"}),Object(c.b)("inlineCode",{parentName:"a"},"rootReducer")),".",Object(c.b)("br",{parentName:"p"}),"\n","When ",Object(c.b)("inlineCode",{parentName:"p"},"parent")," is a ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceParent"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceParent")),", this ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup")),"'s ",Object(c.b)("inlineCode",{parentName:"p"},"reducer")," will be added to that parent's reducer.",Object(c.b)("br",{parentName:"p"}),"\n","When ",Object(c.b)("inlineCode",{parentName:"p"},"parent")," is a string, it represents the parent's path, and this\n",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup")),"'s reducer will needs to be manually added to that parent's reducer."),Object(c.b)("h2",{id:"return-value"},"Return Value"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"createSliceGroup")," returns a ",Object(c.b)("a",Object(t.a)({parentName:"p"},{href:"/slices-for-redux/docs/api/SliceGroup"}),Object(c.b)("inlineCode",{parentName:"a"},"SliceGroup"))," object."))}u.isMDXComponent=!0}}]);