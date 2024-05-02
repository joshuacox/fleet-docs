"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[2425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Cluster Registration Tokens",s={unversionedId:"cluster-tokens",id:"version-0.4/cluster-tokens",title:"Cluster Registration Tokens",description:"Not needed for Manager initiated registration:",source:"@site/versioned_docs/version-0.4/cluster-tokens.md",sourceDirName:".",slug:"/cluster-tokens",permalink:"/0.4/cluster-tokens",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/cluster-tokens.md",tags:[],version:"0.4",lastUpdatedAt:1714639534,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/0.4/cluster-overview"},next:{title:"Agent Initiated",permalink:"/0.4/agent-initiated"}},l={},c=[{value:"Token TTL",id:"token-ttl",level:2},{value:"Create a new Token",id:"create-a-new-token",level:2},{value:"Obtaining Token Value (Agent values.yaml)",id:"obtaining-token-value-agent-valuesyaml",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cluster-registration-tokens"},"Cluster Registration Tokens"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Not needed for Manager initiated registration"),":\nFor manager initiated registrations the token is managed by the Fleet manager and does\nnot need to be manually created and obtained.")),(0,r.kt)("p",null,"For an agent initiated registration the downstream cluster must have a cluster registration token.\nCluster registration tokens are used to establish a new identity for a cluster. Internally\ncluster registration tokens are managed by creating Kubernetes service accounts that have the\npermissions to create ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRegistrationRequests")," within a specific namespace.  Once the\ncluster is registered a new ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," is created for that cluster that is used as\nthe unique identity of the cluster. The agent is designed to forget the cluster registration\ntoken after registration. While the agent will not maintain a reference to the cluster registration\ntoken after a successful registration please note that usually other system bootstrap scripts do."),(0,r.kt)("p",null,"Since the cluster registration token is forgotten, if you need to re-register a cluster you must\ngive the cluster a new registration token."),(0,r.kt)("h2",{id:"token-ttl"},"Token TTL"),(0,r.kt)("p",null,"Cluster registration tokens can be reused by any cluster in a namespace.  The tokens can be given a TTL\nsuch that it will expire after a specific time."),(0,r.kt)("h2",{id:"create-a-new-token"},"Create a new Token"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRegistationToken")," is a namespaced type and should be created in the same namespace\nin which you will create ",(0,r.kt)("inlineCode",{parentName:"p"},"GitRepo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterGroup")," resources. For in depth details on how namespaces\nare used in Fleet refer to the documentation on ",(0,r.kt)("a",{parentName:"p",href:"/0.4/namespaces"},"namespaces"),".  Create a new\ntoken with the below YAML."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ClusterRegistrationToken\napiVersion: "fleet.cattle.io/v1alpha1"\nmetadata:\n    name: new-token\n    namespace: clusters\nspec:\n    # A duration string for how long this token is valid for. A value <= 0 or null means infinite time.\n    ttl: 240h\n')),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRegistrationToken")," is created, Fleet will create a corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," with the same name.\nAs the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," creation is performed asynchronously, you will need to wait until it's available before using it."),(0,r.kt)("p",null,"One way to do so is via the following one-liner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"while ! kubectl --namespace=clusters  get secret new-token; do sleep 5; done\n")),(0,r.kt)("h2",{id:"obtaining-token-value-agent-valuesyaml"},"Obtaining Token Value (Agent values.yaml)"),(0,r.kt)("p",null,"The token value contains YAML content for a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file that is expected to be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install"),"\nto install the Fleet agent on a downstream cluster."),(0,r.kt)("p",null,"Such value is contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"values")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," mentioned above. To obtain the YAML content for the\nabove example one can run the following one-liner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl --namespace clusters get secret new-token -o 'jsonpath={.data.values}' | base64 --decode > values.yaml\n")),(0,r.kt)("p",null,"Once the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," is ready it can be used repeatedly by clusters to register until the TTL expires."))}p.isMDXComponent=!0}}]);