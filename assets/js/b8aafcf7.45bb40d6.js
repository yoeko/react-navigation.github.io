"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[7430],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(v,o(o({ref:t},s),{},{components:n})):a.createElement(v,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(99558),c=n(86010),s="tabItem_1uMI";function p(e){var t,n,a,i=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),k=b.tabGroupChoices,N=b.setTabGroupChoices,w=(0,r.useState)(y),x=w[0],O=w[1],R=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=k[m];null!=E&&E!==x&&h.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var t=e.currentTarget,n=R.indexOf(t),a=h[n].value;a!==x&&(T(t),O(a),null!=m&&N(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;n=R[a]||R[0];break;case"ArrowLeft":var r=R.indexOf(e.currentTarget)-1;n=R[r]||R[R.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":x===t}),key:t,ref:function(e){return R.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},16433:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),l=n(58215),u=["components"],c={id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},s=void 0,p={unversionedId:"getting-started",id:"version-3.x/getting-started",isDocsHomePage:!1,title:"Getting started",description:"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives.",source:"@site/versioned_docs/version-3.x/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/3.x/getting-started",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/getting-started.md",tags:[],version:"3.x",frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started"},sidebar:"version-3.x-docs",next:{title:"Hello React Navigation",permalink:"/docs/3.x/hello-react-navigation"}},d=[{value:"What to expect",id:"what-to-expect",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Hybrid iOS Applications (Skip for RN only projects)",id:"hybrid-ios-applications-skip-for-rn-only-projects",children:[],level:2}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"React Navigation is born from the React Native community's need for an extensible yet easy-to-use navigation solution written entirely in JavaScript (so you can read and understand all of the source), on top of powerful native primitives."),(0,i.kt)("p",null,"Before you commit to using React Navigation for your project, you might want to read the ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/pitch"},"anti-pitch")," ","\u2014"," it will help you to understand the tradeoffs that we have chosen along with the areas where we consider the library to be deficient currently."),(0,i.kt)("h2",{id:"what-to-expect"},"What to expect"),(0,i.kt)("p",null,"If you're already familiar with React Native then you'll be able to get moving with React Navigation quickly! If not, you may want to read sections 1 to 4 (inclusive) of ",(0,i.kt)("a",{parentName:"p",href:"http://reactnativeexpress.com/"},"React Native Express")," first, then come back here when you're done."),(0,i.kt)("p",null,"What follows within the ",(0,i.kt)("em",{parentName:"p"},"Fundamentals")," section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-navigation")," package in your React Native project."),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation\n")))),(0,i.kt)("p",null,"Next, install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),"."),(0,i.kt)("p",null,"If you're using Expo, to ensure that you get the compatible versions of the libraries you should run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"expo install react-native-gesture-handler react-native-reanimated\n")),(0,i.kt)("p",null,"Otherwise, just use yarn or npm directly:"),(0,i.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-gesture-handler react-native-reanimated\n"))),(0,i.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-gesture-handler react-native-reanimated\n")))),(0,i.kt)("p",null,"Next, if you are not using the Expo managed workflow then you need to link these libraries if you haven't already. The steps depends on your React Native version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native 0.60 and higher")),(0,i.kt)("p",{parentName:"li"},"On newer versions of React Native, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"linking is automatic"),"."),(0,i.kt)("p",{parentName:"li"},"On iOS, to complete the linking, make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org/"},"Cocoapods")," installed. Then run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd ios\npod install\ncd ..\n")),(0,i.kt)("p",{parentName:"li"},"On Android, it shouldn't need any more steps. But if you get errors regarding Android Support library during building the app, you need to install and configure ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier"},"jetifier"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"React Native 0.59 and lower")),(0,i.kt)("p",{parentName:"li"},"If you're on an older React Native version, you need to manually link the dependencies. To do that, run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"react-native link react-native-reanimated\nreact-native link react-native-gesture-handler\n")))),(0,i.kt)("p",null,"To finalize installation of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," for Android, be sure to make the necessary modifications to ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n+ import com.facebook.react.ReactActivityDelegate;\n+ import com.facebook.react.ReactRootView;\n+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n+  @Override\n+  protected ReactActivityDelegate createReactActivityDelegate() {\n+    return new ReactActivityDelegate(this, getMainComponentName()) {\n+      @Override\n+      protected ReactRootView createRootView() {\n+       return new RNGestureHandlerEnabledRootView(MainActivity.this);\n+      }\n+    };\n+  }\n}\n')),(0,i.kt)("p",null,"Finally, run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native run-android")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native run-ios")," to launch the app on your device/simulator."),(0,i.kt)("h2",{id:"hybrid-ios-applications-skip-for-rn-only-projects"},"Hybrid iOS Applications (Skip for RN only projects)"),(0,i.kt)("p",null,"If you're using React Navigation within a hybrid app - an iOS app that has both Swift/ObjC and React Native parts - you may be missing the ",(0,i.kt)("inlineCode",{parentName:"p"},"RCTLinkingIOS")," subspec in your Podfile, which is installed by default in new RN projects. To add this, ensure your Podfile looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," pod 'React', :path => '../node_modules/react-native', :subspecs => [\n    . . . // other subspecs\n    'RCTLinkingIOS',\n    . . .\n  ]\n")),(0,i.kt)("p",null,"You're good to go! Continue to ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.x/hello-react-navigation"},'"Hello React Navigation"')," to start writing some code."))}v.isMDXComponent=!0}}]);