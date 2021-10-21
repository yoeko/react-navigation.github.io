"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[1393],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return g}});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var p=a.createContext({}),c=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):r(r({},e),n)),t},l=function(n){var e=c(n.components);return a.createElement(p.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,p=n.parentName,l=s(n,["components","mdxType","originalType","parentName"]),d=c(t),g=i,v=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return t?a.createElement(v,r(r({ref:e},l),{},{components:t})):a.createElement(v,r({ref:e},l))}));function g(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=n,s.mdxType="string"==typeof n?n:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87216:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],s={id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},p=void 0,c={unversionedId:"navigating-without-navigation-prop",id:"version-6.x/navigating-without-navigation-prop",isDocsHomePage:!1,title:"Navigating without the navigation prop",description:"Sometimes you need to trigger a navigation action from places where you do not have access to the navigation prop, such as a Redux middleware. For such cases, you can dispatch navigation actions from the navigation container.",source:"@site/versioned_docs/version-6.x/navigating-without-navigation-prop.md",sourceDirName:".",slug:"/navigating-without-navigation-prop",permalink:"/docs/navigating-without-navigation-prop",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigating-without-navigation-prop.md",tags:[],version:"6.x",frontMatter:{id:"navigating-without-navigation-prop",title:"Navigating without the navigation prop",sidebar_label:"Navigating without the navigation prop"},sidebar:"version-6.x/docs",previous:{title:"Access the navigation prop from any component",permalink:"/docs/connecting-navigation-prop"},next:{title:"Deep linking",permalink:"/docs/deep-linking"}},l=[{value:"Handling initialization",id:"handling-initialization",children:[],level:2}],u={toc:l};function d(n){var e=n.components,t=(0,i.Z)(n,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes you need to trigger a navigation action from places where you do not have access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop, such as a Redux middleware. For such cases, you can dispatch navigation actions from the navigation container."),(0,o.kt)("p",null,"If you're looking for a way to navigate from inside a component without needing to pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop down, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/use-navigation"},(0,o.kt)("inlineCode",{parentName:"a"},"useNavigation")),". ",(0,o.kt)("strong",{parentName:"p"},"Do not")," use this method when you have access to a ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation")," prop or ",(0,o.kt)("inlineCode",{parentName:"p"},"useNavigation")," since it will behave differently, and many helper methods specific to screens won't be available."),(0,o.kt)("p",null,"You can get access to the root navigation object through a ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," and pass it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootNavigation")," which we will later use to navigate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// App.js\n\nimport { NavigationContainer } from '@react-navigation/native';\nimport { navigationRef } from './RootNavigation';\n\nexport default function App() {\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n")),(0,o.kt)("p",null,"In the next step, we define ",(0,o.kt)("inlineCode",{parentName:"p"},"RootNavigation"),", which is a simple module with functions that dispatch user-defined navigation actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// RootNavigation.js\n\nimport { createNavigationContainerRef } from '@react-navigation/native';\n\nexport const navigationRef = createNavigationContainerRef()\n\nexport function navigate(name, params) {\n  if (navigationRef.isReady()) {\n    navigationRef.navigate(name, params);\n  }\n}\n\n// add other navigation functions that you need and export them\n")),(0,o.kt)("p",null,"Then, in any of your javascript modules, import the ",(0,o.kt)("inlineCode",{parentName:"p"},"RootNavigation")," and call functions which you exported from it. You may use this approach outside of your React components and, in fact, it works as well when used from within them."),(0,o.kt)("samp",{id:"no-nav-prop"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// any js module\nimport * as RootNavigation from './path/to/RootNavigation.js';\n\n// ...\n\nRootNavigation.navigate('ChatScreen', { userName: 'Lucy' });\n")),(0,o.kt)("p",null,"Apart from ",(0,o.kt)("inlineCode",{parentName:"p"},"navigate"),", you can add other navigation actions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { StackActions } from '@react-navigation/native';\n\n// ...\n\nexport function push(...args) {\n  if (navigationRef.isReady()) {\n    navigationRef.dispatch(StackActions.push(...args));\n  }\n}\n")),(0,o.kt)("p",null,"Note that a stack navigators needs to be rendered to handle this action. You may want to check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator"},"docs for nesting")," for more details."),(0,o.kt)("p",null,"When writing tests, you may mock the navigation functions, and make assertions on whether the correct functions are called with the correct parameters."),(0,o.kt)("h2",{id:"handling-initialization"},"Handling initialization"),(0,o.kt)("p",null,"When using this pattern, you need to keep few things in mind to avoid crashes in your app."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ref is set only after the navigation container renders, this can be async when handling deep links"),(0,o.kt)("li",{parentName:"ul"},"A navigator needs to be rendered to be able to handle actions")),(0,o.kt)("p",null,"If you try to navigate without rendering a navigator or before the navigator finishes mounting, it will print an error and do nothing. So you'll need to add an additional check to decide what to do until your app mounts."),(0,o.kt)("p",null,"For an example, consider the following scenario, you have a screen somewhere in the app, and that screen dispatches a redux action on ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount"),". You are listening for this action in your middleware and try to perform navigation when you get it. This will throw an error, because by this time, the parent navigator hasn't finished mounting and isn't ready. Parent's ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," is always called ",(0,o.kt)("strong",{parentName:"p"},"after")," child's ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount"),"."),(0,o.kt)("p",null,"To avoid this, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isReady()")," method available on the ref as shown in the above examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// RootNavigation.js\n\nimport * as React from 'react';\n\nexport const navigationRef = createNavigationContainerRef()\n\nexport function navigate(name, params) {\n  if (navigationRef.isReady()) {\n    // Perform navigation if the react navigation is ready to handle actions\n    navigationRef.navigate(name, params);\n  } else {\n    // You can decide what to do if react navigation is not ready\n    // You can ignore this, or add these actions to a queue you can call later\n  }\n}\n")),(0,o.kt)("p",null,"If you're unsure if a navigator is rendered, you can call ",(0,o.kt)("inlineCode",{parentName:"p"},"navigationRef.current.getRootState()"),", and it'll return a valid state object if any navigators are rendered, otherwise it will return ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."))}d.isMDXComponent=!0}}]);