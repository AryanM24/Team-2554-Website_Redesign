(()=>{var e={};e.id=409,e.ids=[409],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5468:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),s(9333),s(996),s(6792);var r=s(170),a=s(5002),n=s(3876),o=s.n(n),i=s(6299),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.t.bind(s,996,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,6792)),"C:\\Users\\abrmo\\OneDrive\\Documents\\2554-website\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,996,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found/page",f={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2229:(e,t,s)=>{Promise.resolve().then(s.bind(s,5062)),Promise.resolve().then(s.t.bind(s,5889,23)),Promise.resolve().then(s.t.bind(s,4080,23))},1866:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3642,23)),Promise.resolve().then(s.t.bind(s,7586,23)),Promise.resolve().then(s.t.bind(s,7838,23)),Promise.resolve().then(s.t.bind(s,8057,23)),Promise.resolve().then(s.t.bind(s,7741,23)),Promise.resolve().then(s.t.bind(s,3118,23))},5062:(e,t,s)=>{"use strict";s.d(t,{default:()=>k});var r=s(7247),a=s(8964),n=s(9906),o=s(4597),i=s(9008),l=s(7972),d=s(1929),c=s(5770);function u(...e){return(0,c.m6)((0,d.W)(e))}let f=(0,l.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=a.forwardRef(({className:e,variant:t,size:s,asChild:a=!1,...n},o)=>{let l=a?i.g7:"button";return r.jsx(l,{className:u(f({variant:t,size:s,className:e})),ref:o,...n})});m.displayName="Button";var x=s(7782),h=s(7013);let p=x.fC,g=x.xz;x.x8;let b=x.h_,v=a.forwardRef(({className:e,...t},s)=>r.jsx(x.aV,{className:u("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:s}));v.displayName=x.aV.displayName;let j=(0,l.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),y=a.forwardRef(({side:e="right",className:t,children:s,...a},n)=>(0,r.jsxs)(b,{children:[r.jsx(v,{}),(0,r.jsxs)(x.VY,{ref:n,className:u(j({side:e}),t),...a,children:[s,(0,r.jsxs)(x.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[r.jsx(h.Z,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));y.displayName=x.VY.displayName,a.forwardRef(({className:e,...t},s)=>r.jsx(x.Dx,{ref:s,className:u("text-lg font-semibold text-foreground",e),...t})).displayName=x.Dx.displayName,a.forwardRef(({className:e,...t},s)=>r.jsx(x.dk,{ref:s,className:u("text-sm text-muted-foreground",e),...t})).displayName=x.dk.displayName;var N=s(6683),w=s(4178);function _({children:e,className:t=""}){return r.jsx("div",{className:`container mx-auto px-4 sm:px-6 lg:px-8 ${t}`,children:e})}let P=[{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/executive-board",label:"Executive Board"},{href:"/sponsors",label:"Sponsors"},{href:"/gallery",label:"Gallery"},{href:"/press",label:"Press"},{href:"/info",label:"Info"}];function k(){let e=(0,w.usePathname)();return r.jsx("header",{className:"w-full border-b border-neutral-800 bg-neutral-900",children:(0,r.jsxs)(_,{className:"flex h-16 items-center justify-between",children:[r.jsx(n.default,{href:"/",className:"flex items-center space-x-2",children:r.jsx(o.default,{src:"/2554-logo.png",alt:"Warhawks Logo",width:140,height:40,className:"h-10 w-auto"})}),r.jsx("nav",{className:"hidden md:flex items-center space-x-1",children:P.map(({href:t,label:s})=>r.jsx(n.default,{href:t,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors ${e===t?"bg-green-700 text-white":"text-gray-300 hover:text-green-500"}`,children:s},t))}),r.jsx("div",{className:"flex items-center space-x-4",children:(0,r.jsxs)(p,{children:[r.jsx(g,{asChild:!0,children:(0,r.jsxs)(m,{variant:"outline",size:"icon",className:"border-neutral-700 text-gray-300 hover:bg-neutral-800",children:[r.jsx(N.Z,{className:"h-5 w-5"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]})}),r.jsx(y,{side:"right",className:"bg-neutral-900 border-neutral-800",children:r.jsx("nav",{className:"flex flex-col space-y-4 mt-4",children:P.map(({href:t,label:s})=>r.jsx(n.default,{href:t,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors ${e===t?"bg-green-700 text-white":"text-gray-300 hover:text-green-500"}`,children:s},t))})})]})})]})})}},6792:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>m});var r=s(2051),a=s(3750),n=s.n(a);s(6269),s(7272);let o=(0,s(5347).createProxy)(String.raw`C:\Users\abrmo\OneDrive\Documents\2554-website\components\header.tsx#default`);var i=s(9624),l=s(2349),d=s(3828),c=s(7305),u=s(8631);function f(){return r.jsx("footer",{className:"border-t border-neutral-800 bg-neutral-900 py-8",children:r.jsx(u.W,{children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0",children:[(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[r.jsx(i.default,{src:"/2554-logo.png",alt:"Warhawks Logo",width:140,height:40,className:"h-10 w-auto"}),r.jsx("p",{className:"text-sm text-gray-300"})]}),r.jsx("p",{className:"text-sm text-gray-300 text-center md:text-left",children:"made with ❤️ by the operations programming team :)"}),(0,r.jsxs)("div",{className:"flex space-x-4",children:[r.jsx(l.default,{href:"https://www.youtube.com/@WarhawksTeam2554",className:"text-gray-300 hover:text-green-500 transition-colors duration-200",children:r.jsx(d.Z,{className:"h-5 w-5"})}),r.jsx(l.default,{href:"https://www.instagram.com/jpsrobotics2554/",className:"text-gray-300 hover:text-green-500 transition-colors duration-200",children:r.jsx(c.Z,{className:"h-5 w-5"})})]})]})})})}let m={title:"Warhawks FRC Team 2554 - JPS Robotics",description:"John P. Stevens High School FIRST Robotics Team"};function x({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{className:`${n().className} flex flex-col min-h-screen`,children:[r.jsx(o,{}),r.jsx("main",{className:"flex-grow",children:e}),r.jsx(f,{})]})})}},8631:(e,t,s)=>{"use strict";s.d(t,{W:()=>a});var r=s(2051);function a({children:e,className:t=""}){return r.jsx("div",{className:`container mx-auto px-4 sm:px-6 lg:px-8 ${t}`,children:e})}s(6269)},6868:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{isNotFoundError:function(){return a},notFound:function(){return r}});let s="NEXT_NOT_FOUND";function r(){let e=Error(s);throw e.digest=s,e}function a(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===s}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9333:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return a},default:function(){return n}});let r=s(6868),a="next/dist/client/components/parallel-route-default.js";function n(){(0,r.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[869],()=>s(5468));module.exports=r})();