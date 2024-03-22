"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[7540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||f[d]||a;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const a={title:"",sidebar_label:"fleet cleanup"},i=void 0,c={unversionedId:"cli/fleet-cli/fleet_cleanup",id:"cli/fleet-cli/fleet_cleanup",title:"",description:"fleet cleanup",source:"@site/docs/cli/fleet-cli/fleet_cleanup.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet_cleanup",permalink:"/cli/fleet-cli/fleet_cleanup",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/cli/fleet-cli/fleet_cleanup.md",tags:[],version:"current",lastUpdatedAt:1711112603,formattedLastUpdatedAt:"Mar 22, 2024",frontMatter:{title:"",sidebar_label:"fleet cleanup"},sidebar:"docs",previous:{title:"fleet apply",permalink:"/cli/fleet-cli/fleet_apply"},next:{title:"fleet deploy",permalink:"/cli/fleet-cli/fleet_deploy"}},o={},p=[{value:"fleet cleanup",id:"fleet-cleanup",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fleet-cleanup"},"fleet cleanup"),(0,r.kt)("p",null,"Clean up outdated cluster registrations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fleet cleanup [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --context string      kubeconfig context for authentication\n      --debug               Turn on debug logging\n      --debug-level int     If debugging is enabled, set klog -v=X\n      --factor string       Factor to increase delay between deletes (default: 1.1)\n  -h, --help                help for cleanup\n  -k, --kubeconfig string   kubeconfig for authentication\n      --max string          Maximum delay between deletes (default: 5s)\n      --min string          Minimum delay between deletes (default: 10ms)\n  -n, --namespace string    namespace (default "fleet-local")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./fleet"},"fleet"),"\t -")))}f.isMDXComponent=!0}}]);