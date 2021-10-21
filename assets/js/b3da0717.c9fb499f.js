"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[9786],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"navigation-actions",title:"CommonActions reference",sidebar_label:"CommonActions"},l=void 0,c={unversionedId:"navigation-actions",id:"version-5.x/navigation-actions",isDocsHomePage:!1,title:"CommonActions reference",description:"A navigation action is an object containing at least a type property. Internally, the action can be handled by routers with the getStateForAction method to return a new state from an existing navigation state.",source:"@site/versioned_docs/version-5.x/navigation-actions.md",sourceDirName:".",slug:"/navigation-actions",permalink:"/docs/5.x/navigation-actions",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/navigation-actions.md",tags:[],version:"5.x",frontMatter:{id:"navigation-actions",title:"CommonActions reference",sidebar_label:"CommonActions"},sidebar:"version-5.x/docs",previous:{title:"useTheme",permalink:"/docs/5.x/use-theme"},next:{title:"StackActions",permalink:"/docs/5.x/stack-actions"}},p=[{value:"Common actions",id:"common-actions",children:[{value:"navigate",id:"navigate",children:[],level:3},{value:"reset",id:"reset",children:[],level:3},{value:"goBack",id:"goback",children:[],level:3},{value:"setParams",id:"setparams",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A navigation action is an object containing at least a ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," property. Internally, the action can be handled by ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/custom-routers"},"routers")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"getStateForAction")," method to return a new state from an existing ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state"),"."),(0,i.kt)("p",null,"Each navigation actions can contain at least the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (required) - A string which represents the name of the action."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payload")," (options) - An object containing additional information about the action. For example, it will contain ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"params")," for ",(0,i.kt)("inlineCode",{parentName:"li"},"navigate"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," (optional) - The key of the route which should be considered as the source of the action. This is used for some actions to determine which route to apply the action on. By default, ",(0,i.kt)("inlineCode",{parentName:"li"},"navigation.dispatch")," adds the key of the route that dispatched the action."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"target")," (optional) - The key of the ",(0,i.kt)("a",{parentName:"li",href:"/docs/5.x/navigation-state"},"navigation state")," the action should be applied on.")),(0,i.kt)("p",null,"It's important to highlight that dispatching a navigation action doesn't throw any error when the action is unhandled (similar to when you dispatch an action that isn't handled by a reducer in redux and nothing happens)."),(0,i.kt)("h2",{id:"common-actions"},"Common actions"),(0,i.kt)("p",null,"The library exports several action creators under the ",(0,i.kt)("inlineCode",{parentName:"p"},"CommonActions")," namespace. You should use these action creators instead of writing action objects manually."),(0,i.kt)("h3",{id:"navigate"},"navigate"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," action allows to navigate to a specific route. It takes the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - ",(0,i.kt)("em",{parentName:"li"},"string")," - A destination name of the route that has been registered somewhere.."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," - ",(0,i.kt)("em",{parentName:"li"},"string")," - The identifier for the route to navigate to. Navigate back to this route if it already exists.."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,i.kt)("em",{parentName:"li"},"object")," - Params to merge into the destination route..")),(0,i.kt)("p",null,"The options object passed should at least contain a ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property, and optionally ",(0,i.kt)("inlineCode",{parentName:"p"},"params"),". If both ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," are passed, stack navigator will create a new route with the specified key if no matches were found."),(0,i.kt)("samp",{id:"common-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.navigate({\n    name: 'Profile',\n    params: {\n      user: 'jane',\n    },\n  })\n);\n")),(0,i.kt)("p",null,"In a ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/stack-navigator"},"stack navigator"),", calling ",(0,i.kt)("inlineCode",{parentName:"p"},"navigate")," with a screen name will result in different behavior based on if the screen is already present or not. If the screen is already present in the stack's history, it'll go back to that screen and remove any screens after that. If the screen is not present, it'll push a new screen."),(0,i.kt)("p",null,"By default, the screen is identified by its name. But you can also customize it to take the params into account by using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/screen#getid"},(0,i.kt)("inlineCode",{parentName:"a"},"getId"))," prop."),(0,i.kt)("h3",{id:"reset"},"reset"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," action allows to reset the ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," to the given state. It takes the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"state")," - ",(0,i.kt)("em",{parentName:"li"},"object")," - The new ",(0,i.kt)("a",{parentName:"li",href:"/docs/5.x/navigation-state"},"navigation state")," object to use.")),(0,i.kt)("samp",{id:"common-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.reset({\n    index: 1,\n    routes: [\n      { name: 'Home' },\n      {\n        name: 'Profile',\n        params: { user: 'jane' },\n      },\n    ],\n  })\n);\n")),(0,i.kt)("p",null,"The state object specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," replaces the existing ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," with the new one. This means that if you provide new route objects without a key, or route objects with a different key, it'll remove the existing screens for those routes and add new screens."),(0,i.kt)("p",null,"If you want to preserve the existing screens but only want to modify the state, you can pass a function to ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," where you can get the existing state. Then you can change it as you like (make sure not to mutate the existing state, but create new state object for your changes). and return a ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," action with the desired state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(state => {\n  // Remove the home route from the stack\n  const routes = state.routes.filter(r => r.name !== 'Home');\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," state object except ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"routes"),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue.")),(0,i.kt)("h3",{id:"goback"},"goBack"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"goBack")," action creator allows to go back to the previous route in history. It doesn't take any arguments."),(0,i.kt)("samp",{id:"common-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.goBack());\n")),(0,i.kt)("p",null,"If you want to go back from a particular route, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," property referring to the route key and a ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," property referring to the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," of the navigator which contains the route:"),(0,i.kt)("samp",{id:"common-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.goBack(),\n  source: route.key,\n  target: state.key,\n});\n")),(0,i.kt)("p",null,"By default, the key of the route which dispatched the action is passed as the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," property and the ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," property is ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h3",{id:"setparams"},"setParams"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"setParams")," action allows to update params for a certain route. It takes the following arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"params")," - ",(0,i.kt)("em",{parentName:"li"},"object")," - required - New params to be merged into existing route params.")),(0,i.kt)("samp",{id:"common-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(CommonActions.setParams({ user: 'Wojtek' }));\n")),(0,i.kt)("p",null,"If you want to set params for a particular route, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," property referring to the route key:"),(0,i.kt)("samp",{id:"common-actions"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.setParams({ user: 'Wojtek' }),\n  source: route.key,\n});\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," property is explicitly set to ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),", it'll set the params for the focused route."))}u.isMDXComponent=!0}}]);