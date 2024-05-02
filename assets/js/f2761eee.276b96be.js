"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3062],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),s=a,g=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1979:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o="List of Deployed Resources",i={unversionedId:"ref-resources",id:"version-0.9/ref-resources",title:"List of Deployed Resources",description:"After installing Fleet in Rancher these resources are created in the upstream cluster.",source:"@site/versioned_docs/version-0.9/ref-resources.md",sourceDirName:".",slug:"/ref-resources",permalink:"/0.9/ref-resources",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/ref-resources.md",tags:[],version:"0.9",lastUpdatedAt:1714639534,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/0.9/ref-configuration"},next:{title:"Custom Resources Spec",permalink:"/0.9/ref-crds"}},p={},u=[],d={toc:u};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list-of-deployed-resources"},"List of Deployed Resources"),(0,a.kt)("p",null,"After installing Fleet in Rancher these resources are created in the upstream cluster."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Namespace"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"From Helm, intial setup:"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ClusterRole"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ClusterRole"),(0,a.kt)("td",{parentName:"tr",align:null},"gitjob"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ClusterRoleBinding"),(0,a.kt)("td",{parentName:"tr",align:null},"gitjob-binding"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ConfigMap"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,a.kt)("td",{parentName:"tr",align:null},"gitjob"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Role"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Role"),(0,a.kt)("td",{parentName:"tr",align:null},"gitjob"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RoleBinding"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RoleBinding"),(0,a.kt)("td",{parentName:"tr",align:null},"gitjob"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service"),(0,a.kt)("td",{parentName:"tr",align:null},"gitjob"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ServiceAccount"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ServiceAccount"),(0,a.kt)("td",{parentName:"tr",align:null},"gitjob"),(0,a.kt)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Generated:"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters.fleet.cattle.io"),(0,a.kt)("td",{parentName:"tr",align:null},"local"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters.provisioning.cattle.io"),(0,a.kt)("td",{parentName:"tr",align:null},"local"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters.management.cattle.io"),(0,a.kt)("td",{parentName:"tr",align:null},"local"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ClusterGroup"),(0,a.kt)("td",{parentName:"tr",align:null},"default"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bundle"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-agent-local"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"For each registered cluster:"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters.provisioning.cattle.io"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"by default fleet-default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters.management.cattle.io"),(0,a.kt)("td",{parentName:"tr",align:null},"generated"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clusters.fleet.cattle.io"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-default"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bundle"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-default"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"BundleDeployment"),(0,a.kt)("td",{parentName:"tr",align:null},"cluster-fleet-local-local-ID"),(0,a.kt)("td",{parentName:"tr",align:null},"fleet-agent-local")))),(0,a.kt)("p",null,"Also see ","[namespaces]"))}m.isMDXComponent=!0}}]);