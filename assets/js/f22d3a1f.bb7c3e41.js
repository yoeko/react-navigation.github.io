"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[4193],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=i,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(d,o(o({ref:t},h),{},{components:a})):n.createElement(d,o({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},52014:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},c=void 0,l={unversionedId:"pitch",id:"version-5.x/pitch",isDocsHomePage:!1,title:"Pitch & anti-pitch",description:'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please submit a pull request if you believe we have omitted important information!',source:"@site/versioned_docs/version-5.x/pitch.md",sourceDirName:".",slug:"/pitch",permalink:"/docs/5.x/pitch",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/pitch.md",tags:[],version:"5.x",frontMatter:{id:"pitch",title:"Pitch & anti-pitch",sidebar_label:"Pitch & anti-pitch"},sidebar:"version-5.x/docs",previous:{title:"More Resources",permalink:"/docs/5.x/more-resources"},next:{title:"Alternative libraries",permalink:"/docs/5.x/alternatives"}},h=[{value:"Pitch",id:"pitch",children:[],level:2},{value:"Anti-pitch",id:"anti-pitch",children:[],level:2}],u={toc:h};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'It\'s useful when considering whether or not to use a project to understand the tradeoffs that the developers of the project made when building it. What problems does it explicitly try to solve for you, and which ones does it ignore? What are the current limitations of the project and common problems that people encounter? These are the kinds of questions that we believe you should have answers to when making an important technology decision for your project, and so we have documented answers to these questions as best we can here, in the form of a "pitch" (why you should use it) and "anti-pitch" (why you should not use it). Please ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation.github.io"},"submit a pull request")," if you believe we have omitted important information!"),(0,r.kt)("h2",{id:"pitch"},"Pitch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Navigation doesn't include any native code in the library itself, but we use many native libraries such as ",(0,r.kt)("a",{parentName:"li",href:"https://software-mansion.github.io/react-native-reanimated/"},"Reanimated"),", ",(0,r.kt)("a",{parentName:"li",href:"https://software-mansion.github.io/react-native-gesture-handler/"},"Gesture Handler"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-screens"},"Screens")," etc. to implement performant animations and gestures. Depending on the navigator, many UI components are written in JavaScript on top of React Native primitives. This has a lot of benefits:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Easy OTA updates"),(0,r.kt)("li",{parentName:"ul"},"Debuggable"),(0,r.kt)("li",{parentName:"ul"},"Customizable"))),(0,r.kt)("li",{parentName:"ul"},"Most apps heavily customize navigation, to do this with an API that wraps native navigation you will need to write a lot of native code. In React Navigation, we provide navigators written fully with JavaScript (e.g. ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.x/stack-navigator"},"Stack Navigator"),") and navigators implemented on top of platform navigation primitives (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-screens/tree/master/native-stack"},"Native Stack Navigator"),"). This lets you pick the navigators suitable for your use case, depending on whether you want native platform behavior or full customizability."),(0,r.kt)("li",{parentName:"ul"},"It's easy to write your own navigators that integrate cleanly with standard navigators, or to fork the standard navigators and create your own version of them with the exact look and feel you want in your app.")),(0,r.kt)("h2",{id:"anti-pitch"},"Anti-pitch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improvements may require breaking changes. We are working to make ",(0,r.kt)("a",{parentName:"li",href:"https://www.quora.com/What-is-the-origin-of-the-phrase-make-the-easy-things-easy-and-the-hard-things-possible"},'"easy things easy and hard things possible"')," and this may require us to change the API at times."),(0,r.kt)("li",{parentName:"ul"},"Many navigators don't directly use the native navigation APIs on iOS and Android; rather, they use the lowest level pieces and then re-creates some subset of the APIs on top. This is a conscious choice in order to make it possible for users to customize any part of the navigation experience (because it's implemented in JavaScript) and to be able to debug issues that they encounter without needing to learn Objective C / Swift / Java / Kotlin.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you need the exact platform behavior, you can choose to use the navigators that use native platform primitives (e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/software-mansion/react-native-screens/tree/master/native-stack"},"Native Stack Navigator"),"), or use another library that wraps the platform APIs. Read more about these in ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.x/alternatives"},"Alternatives")," and be sure to understand the tradeoffs that they make before digging in!"))),(0,r.kt)("li",{parentName:"ul"},"There are other limitations which you may want to consider, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/5.x/limitations"},"Limitations")," for more details.")))}p.isMDXComponent=!0}}]);