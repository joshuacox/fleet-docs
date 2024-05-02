"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[9863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Architecture",s={unversionedId:"architecture",id:"version-0.7/architecture",title:"Architecture",description:"Fleet has two primary components.  The Fleet manager and the cluster agents.  These",source:"@site/versioned_docs/version-0.7/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/0.7/architecture",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/architecture.md",tags:[],version:"0.7",lastUpdatedAt:1714639534,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Uninstall",permalink:"/0.7/uninstall"},next:{title:"Core Concepts",permalink:"/0.7/concepts"}},l={},c=[{value:"Fleet Manager",id:"fleet-manager",level:2},{value:"Cluster Agents",id:"cluster-agents",level:2},{value:"Security",id:"security",level:2},{value:"Component Overview",id:"component-overview",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Fleet has two primary components.  The Fleet manager and the cluster agents.  These\ncomponents work in a two-stage pull model.  The Fleet manager will pull from git and the\ncluster agents will pull from the Fleet manager."),(0,a.kt)("h2",{id:"fleet-manager"},"Fleet Manager"),(0,a.kt)("p",null,"The Fleet manager is a set of Kubernetes controllers running in any standard Kubernetes\ncluster.  The only API exposed by the Fleet manager is the Kubernetes API, there is no\ncustom API for the fleet controller."),(0,a.kt)("h2",{id:"cluster-agents"},"Cluster Agents"),(0,a.kt)("p",null,"One cluster agent runs in each cluster and is responsible for talking to the Fleet manager.\nThe only communication from cluster to Fleet manager is by this agent and all communication\ngoes from the managed cluster to the Fleet manager. The fleet manager does not initiate\nconnections to downstream clusters. This means managed clusters can run in private networks and behind\nNATs. The only requirement is the cluster agent needs to be able to communicate with the\nKubernetes API of the cluster running the Fleet manager. The one exception to this is if you use\nthe ",(0,a.kt)("a",{parentName:"p",href:"/0.7/cluster-registration#manager-initiated"},"manager initiated")," cluster registration flow.  This is not required, but\nan optional pattern."),(0,a.kt)("p",null,'The cluster agents are not assumed to have an "always on" connection.  They will resume operation as\nsoon as they can connect. Future enhancements will probably add the ability to schedule times of when\nthe agent checks in, as it stands right now they will always attempt to connect.'),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,'The Fleet manager dynamically creates service accounts, manages their RBAC and then gives the\ntokens to the downstream clusters. Clusters are registered by optionally expiring cluster registration tokens.\nThe cluster registration token is used only during the registration process to generate a credential specific\nto that cluster. After the cluster credential is established the cluster "forgets" the cluster registration\ntoken.'),(0,a.kt)("p",null,"The service accounts given to the clusters only have privileges to list ",(0,a.kt)("inlineCode",{parentName:"p"},"BundleDeployment")," in the namespace created\nspecifically for that cluster. It can also update the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," subresource of ",(0,a.kt)("inlineCode",{parentName:"p"},"BundleDeployment")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"status"),"\nsubresource of it's ",(0,a.kt)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,a.kt)("h2",{id:"component-overview"},"Component Overview"),(0,a.kt)("p",null,"An overview of the components and how they interact on a high level."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Components",src:n(1913).Z,width:"1319",height:"1281"})))}p.isMDXComponent=!0},1913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/FleetComponents-2746fa09558c69f438948ab9bc659edb.svg"}}]);