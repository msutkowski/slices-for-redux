(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(6),o=(r(0),r(113)),i={id:"procedureFilePattern",title:"Procedure File pattern",sidebar_label:"Procedure File pattern",hide_title:!0},c=[],l={id:"internal/procedureFilePattern",title:"Procedure File pattern",description:"# `Procedure File pattern (WIP)`",source:"@site/docs/internal/procedureFilePattern.md",permalink:"/slices-for-redux/docs/internal/procedureFilePattern",sidebar_label:"Procedure File pattern"},s={rightToc:c,metadata:l},p="wrapper";function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"procedure-file-pattern-wip"},Object(o.b)("inlineCode",{parentName:"h1"},"Procedure File pattern (WIP)")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Slices for Redux"),' promotes a pattern that we call "Procedure File":'),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},'"a file that contains all items that create and process a Redux Action and its side effects"'),"."),Object(o.b)("p",null,"Rules - A procedure file:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"the file should be named after the primary action creator that it exports\nor if no action creator is exported, it should be named after the\nprocedure that it performs."),Object(o.b)("p",{parentName:"li"},"the")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"may contain 0 or more action creators but may only export one.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"may export 0 or more action action type constants"))),Object(o.b)("p",null,"and sometimes one or more Action Type constant(s) to allow other Procedure Files to have a Saga Watcher listening to those Action s and perform additional work."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Exporting Action Type constant(s) makes these and their expected payload part of the public API. So be carful what you export and how a")),Object(o.b)("p",null,"when refactoring exported Actions."),Object(o.b)("p",null,"A Procedure File contains:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Action type constant for one primary and some secondary actions if any."),Object(o.b)("li",{parentName:"ul"},"Action creator functions for those (only the primary action creator function is exported !)"),Object(o.b)("li",{parentName:"ul"},"Action reducers"),Object(o.b)("li",{parentName:"ul"},"Saga watchers & Saga workers"),Object(o.b)("li",{parentName:"ul"},"API delegate")),Object(o.b)("p",null,'The Redux Procedure File idea of keeping all items that create and process a Redux Action and its side effects close together, is similar to the "Folder By Feature" pattern.',Object(o.b)("br",{parentName:"p"}),"\n","These items are coupled, and by keeping them together inside a single file we have a high cohesion."),Object(o.b)("p",null,"Using this pattern helps writing modular code that better scales."),Object(o.b)("p",null,"A procedure file contain the case reducers, action creators and side effects for one feature like: loadX, selectY, removeZ, ..."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A procedure file name should be named by the primary action that it exports.\n",Object(o.b)("inlineCode",{parentName:"p"},"loadFoo.proc.js"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A procedure should define and export only one primary action file adds its case reducers to the ",Object(o.b)("inlineCode",{parentName:"p"},"Slice"),"."))),Object(o.b)("p",null,"A procedure file adds its case reducers to the ",Object(o.b)("inlineCode",{parentName:"p"},"Slice"),".\nA procedure file exports only those public action creator functions that views can import and call.\nA procedure file exports only those public action type constant that other procedure files\nmay listen to and act upon.\nA procedure file contains the code for the side effects (like Sagas) for the actions it defines."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Slices for Redux"),"'s Slice promotes writing your case reducers in separate files from the file that created the Slice.\nWe call these procedure files."),Object(o.b)("p",null,"The code is simple. Each procedure file adds its case reducers to the slice.\nThe slice no longer needs contain nor import all the cases reducers.\nNo boiler plate code and merge conflicts in the files that create the slices."),Object(o.b)("p",null,"Promoting writing case reducers in separate files form the file to be written is But"),Object(o.b)("p",null,"The slice's reducer is dynamic which allows to add case reducers as needed.\nThis promotes modular code that better scales as you application becomes large.\nThe slice file no longer needs to import all the files that containing case reducers.\nAs a new feature is implemented new files containing cases reducers are written and using the slice addCaseReducers function"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"someSlice.addCaseReducers({ [actionKey]: caseReducer })")))}d.isMDXComponent=!0},113:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),p=i(r),d=n,u=p[c+"."+d]||p[d]||s[d]||o;return r?a.a.createElement(u,Object.assign({},{ref:t},l,{components:r})):a.a.createElement(u,Object.assign({},{ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:n,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);