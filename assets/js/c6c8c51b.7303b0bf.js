"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2771],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return v}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),v=r,h=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return t?a.createElement(h,i(i({ref:n},l),{},{components:t})):a.createElement(h,i({ref:n},l))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59499:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],p={id:"app-containers",title:"App containers",sidebar_label:"App containers"},c=void 0,s={unversionedId:"app-containers",id:"version-3.x/app-containers",isDocsHomePage:!1,title:"App containers",description:"Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native.",source:"@site/versioned_docs/version-3.x/app-containers.md",sourceDirName:".",slug:"/app-containers",permalink:"/docs/3.x/app-containers",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/app-containers.md",tags:[],version:"3.x",frontMatter:{id:"app-containers",title:"App containers",sidebar_label:"App containers"},sidebar:"version-3.x-docs",previous:{title:"Header buttons",permalink:"/docs/3.x/header-buttons"},next:{title:"Opening a full-screen modal",permalink:"/docs/3.x/modal"}},l=[{value:"Props of <code>createAppContainer</code> on React Native",id:"props-of-createappcontainer-on-react-native",children:[{value:"<code>onNavigationStateChange(prevState, newState, action)</code>",id:"onnavigationstatechangeprevstate-newstate-action",children:[],level:3},{value:"<code>uriPrefix</code>",id:"uriprefix",children:[],level:3}],level:2},{value:"Calling Dispatch or Navigate on App Container",id:"calling-dispatch-or-navigate-on-app-container",children:[],level:2},{value:"App Containers on the web",id:"app-containers-on-the-web",children:[],level:2}],u={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Containers are responsible for managing your app state and linking your top-level navigator to the app environment. On Android, the app container uses the Linking API to handle the back button. The container can also be configured to persist your navigation state. On web, you'd use different containers than React Native."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: In v2 and earlier, the containers in React Navigation are automatically provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"create*Navigator")," functions. As of v3, you are required to use the container directly. In v3 we also renamed ",(0,o.kt)("inlineCode",{parentName:"p"},"createNavigationContainer")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"createAppContainer"),".")),(0,o.kt)("p",null,"A quick example of ",(0,o.kt)("inlineCode",{parentName:"p"},"createAppContainer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import { createAppContainer, createStackNavigator } from 'react-navigation';\n// you can also import from @react-navigation/native\n\nconst AppNavigator = createStackNavigator(...);\n\nconst AppContainer = createAppContainer(AppNavigator);\n\n// Now AppContainer is the main component for React to render\n\nexport default AppContainer;\n")),(0,o.kt)("h2",{id:"props-of-createappcontainer-on-react-native"},"Props of ",(0,o.kt)("inlineCode",{parentName:"h2"},"createAppContainer")," on React Native"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<AppContainer\n  onNavigationStateChange={handleNavigationChange}\n  uriPrefix="/app"\n/>\n')),(0,o.kt)("h3",{id:"onnavigationstatechangeprevstate-newstate-action"},(0,o.kt)("inlineCode",{parentName:"h3"},"onNavigationStateChange(prevState, newState, action)")),(0,o.kt)("p",null,"Function that gets called every time navigation state managed by the navigator changes. It receives the previous state, the new state of the navigation and the action that issued state change. By default it prints state changes to the console."),(0,o.kt)("h3",{id:"uriprefix"},(0,o.kt)("inlineCode",{parentName:"h3"},"uriPrefix")),(0,o.kt)("p",null,"The prefix of the URIs that the app might handle. This will be used when handling a ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.x/deep-linking"},"deep link")," to extract the path passed to the router."),(0,o.kt)("h2",{id:"calling-dispatch-or-navigate-on-app-container"},"Calling Dispatch or Navigate on App Container"),(0,o.kt)("p",null,"In case you want to dispatch actions on an app container, you can use a React ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute"},(0,o.kt)("inlineCode",{parentName:"a"},"ref"))," to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," method on it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const AppContainer = createAppContainer(AppNavigator);\n\nclass App extends React.Component {\n  someEvent() {\n    // call navigate for AppNavigator here:\n    this.navigator &&\n      this.navigator.dispatch(\n        NavigationActions.navigate({ routeName: someRouteName })\n      );\n  }\n  render() {\n    return (\n      <AppContainer\n        ref={nav => {\n          this.navigator = nav;\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("h2",{id:"app-containers-on-the-web"},"App Containers on the web"),(0,o.kt)("p",null,"On the web, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"createBrowserApp")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"handleServerRequest")," to maintain the state for your top-level navigator."))}d.isMDXComponent=!0}}]);