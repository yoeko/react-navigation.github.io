"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8777],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return b}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),b=i,h=u["".concat(d,".").concat(b)]||u[b]||c[b]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(87462),i=a(67294),r=a(72389),o=a(79443);var l=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=a(99558),s=a(86010),p="tabItem_1uMI";function c(e){var t,a,n,r=e.lazy,o=e.block,c=e.defaultValue,u=e.values,b=e.groupId,h=e.className,m=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:m.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,d.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(a=m.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=m[0])?void 0:n.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),N=g.tabGroupChoices,y=g.setTabGroupChoices,C=(0,i.useState)(k),w=C[0],T=C[1],O=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=N[b];null!=E&&E!==w&&v.some((function(e){return e.value===E}))&&T(E)}var j=function(e){var t=e.currentTarget,a=O.indexOf(t),n=v[a].value;n!==w&&(x(t),T(n),null!=b&&y(b,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;a=O[i]||O[O.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":w===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:j,onClick:j},null!=a?a:t)}))),r?(0,i.cloneElement)(m.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function u(e){var t=(0,r.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},66216:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=a(55064),l=a(58215),d=["components"],s={id:"material-top-tab-navigator",title:"createMaterialTopTabNavigator",sidebar_label:"createMaterialTopTabNavigator"},p=void 0,c={unversionedId:"material-top-tab-navigator",id:"version-4.x/material-top-tab-navigator",isDocsHomePage:!1,title:"createMaterialTopTabNavigator",description:"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the route or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately.",source:"@site/versioned_docs/version-4.x/material-top-tab-navigator.md",sourceDirName:".",slug:"/material-top-tab-navigator",permalink:"/docs/4.x/material-top-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/material-top-tab-navigator.md",tags:[],version:"4.x",frontMatter:{id:"material-top-tab-navigator",title:"createMaterialTopTabNavigator",sidebar_label:"createMaterialTopTabNavigator"},sidebar:"version-4.x-docs",previous:{title:"createMaterialBottomTabNavigator",permalink:"/docs/4.x/material-bottom-tab-navigator"},next:{title:"NavigationActions",permalink:"/docs/4.x/navigation-actions"}},u=[{value:"API",id:"api",children:[],level:2},{value:"RouteConfigs",id:"routeconfigs",children:[],level:2},{value:"TabNavigatorConfig",id:"tabnavigatorconfig",children:[{value:"<code>initialRouteName</code>",id:"initialroutename",children:[],level:3},{value:"<code>navigationOptions</code>",id:"navigationoptions",children:[],level:3},{value:"<code>defaultNavigationOptions</code>",id:"defaultnavigationoptions",children:[],level:3},{value:"<code>order</code>",id:"order",children:[],level:3},{value:"<code>paths</code>",id:"paths",children:[],level:3},{value:"<code>backBehavior</code>",id:"backbehavior",children:[],level:3},{value:"<code>tabBarPosition</code>",id:"tabbarposition",children:[],level:3},{value:"<code>swipeEnabled</code>",id:"swipeenabled",children:[],level:3},{value:"<code>lazy</code>",id:"lazy",children:[],level:3},{value:"<code>lazyPlaceholderComponent</code>",id:"lazyplaceholdercomponent",children:[],level:3},{value:"<code>initialLayout</code>",id:"initiallayout",children:[],level:3},{value:"<code>pagerComponent</code>",id:"pagercomponent",children:[],level:3},{value:"<code>tabBarComponent</code>",id:"tabbarcomponent",children:[],level:3},{value:"<code>tabBarOptions</code>",id:"tabbaroptions",children:[],level:3}],level:2},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[{value:"<code>title</code>",id:"title",children:[],level:4},{value:"<code>swipeEnabled</code>",id:"swipeenabled-1",children:[],level:4},{value:"<code>tabBarIcon</code>",id:"tabbaricon",children:[],level:4},{value:"<code>tabBarLabel</code>",id:"tabbarlabel",children:[],level:4},{value:"<code>tabBarAccessibilityLabel</code>",id:"tabbaraccessibilitylabel",children:[],level:4},{value:"<code>tabBarTestID</code>",id:"tabbartestid",children:[],level:4},{value:"<code>tabBarOnPress</code>",id:"tabbaronpress",children:[],level:4},{value:"<code>tabBarOnLongPress</code>",id:"tabbaronlongpress",children:[],level:4}],level:2}],b={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A material-design themed tab bar on the top of the screen that lets you switch between different routes by tapping the route or swiping horizontally. Transitions are animated by default. Screen components for each route are mounted immediately."),(0,r.kt)("p",null,"To use this navigator, ensure that you have ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/getting-started"},"react-navigation and its dependencies installed"),", then install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/4.x/packages/tabs"},(0,r.kt)("inlineCode",{parentName:"a"},"react-navigation-tabs")),"."),(0,r.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-navigation-tabs\n"))),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-navigation-tabs\n")))),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createMaterialTopTabNavigator } from 'react-navigation-tabs';\n\ncreateMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);\n")),(0,r.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,r.kt)("p",null,"The route configs object is a mapping from route name to a route config."),(0,r.kt)("h2",{id:"tabnavigatorconfig"},"TabNavigatorConfig"),(0,r.kt)("h3",{id:"initialroutename"},(0,r.kt)("inlineCode",{parentName:"h3"},"initialRouteName")),(0,r.kt)("p",null,"The routeName for the initial tab route when first loading."),(0,r.kt)("h3",{id:"navigationoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"navigationOptions")),(0,r.kt)("p",null,"Navigation options for the navigator itself, to configure a parent navigator"),(0,r.kt)("h3",{id:"defaultnavigationoptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultNavigationOptions")),(0,r.kt)("p",null,"Default navigation options to use for screens"),(0,r.kt)("h3",{id:"order"},(0,r.kt)("inlineCode",{parentName:"h3"},"order")),(0,r.kt)("p",null,"Array of routeNames which defines the order of the tabs."),(0,r.kt)("h3",{id:"paths"},(0,r.kt)("inlineCode",{parentName:"h3"},"paths")),(0,r.kt)("p",null,"Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),(0,r.kt)("h3",{id:"backbehavior"},(0,r.kt)("inlineCode",{parentName:"h3"},"backBehavior")),(0,r.kt)("p",null,"Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"initialRoute")," to return to initial tab, ",(0,r.kt)("inlineCode",{parentName:"p"},"order")," to return to previous tab, ",(0,r.kt)("inlineCode",{parentName:"p"},"history")," to return to last visited tab, or ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),"."),(0,r.kt)("h3",{id:"tabbarposition"},(0,r.kt)("inlineCode",{parentName:"h3"},"tabBarPosition")),(0,r.kt)("p",null,"Position of the tab bar, can be ",(0,r.kt)("inlineCode",{parentName:"p"},"'top'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'bottom'"),", default is ",(0,r.kt)("inlineCode",{parentName:"p"},"top"),"."),(0,r.kt)("h3",{id:"swipeenabled"},(0,r.kt)("inlineCode",{parentName:"h3"},"swipeEnabled")),(0,r.kt)("p",null,"Whether to allow swiping between tabs."),(0,r.kt)("h3",{id:"lazy"},(0,r.kt)("inlineCode",{parentName:"h3"},"lazy")),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", tabs are rendered only when they are made active or on peek swipe. When ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", all tabs are rendered immediately."),(0,r.kt)("h3",{id:"lazyplaceholdercomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"lazyPlaceholderComponent")),(0,r.kt)("p",null,"React component to render for routes that haven't been rendered yet. Receives an object containing the route as the argument. The ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," prop also needs to be enabled."),(0,r.kt)("h3",{id:"initiallayout"},(0,r.kt)("inlineCode",{parentName:"h3"},"initialLayout")),(0,r.kt)("p",null,"Optional object containing the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"width"),", can be passed to prevent the one frame delay in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-tab-view#avoid-one-frame-delay"},"react-native-tab-view")," rendering."),(0,r.kt)("h3",{id:"pagercomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"pagerComponent")),(0,r.kt)("p",null,"React component to use as the pager. The pager handles swipe gestures and page switching. By default we use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-gesture-handler"))," for handling gestures. You can switch out the pager for a different implementation to customize the experience."),(0,r.kt)("p",null,"For example, to use pager backed by the native ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewPager"),", you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-tab-view-viewpager-adapter"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-tab-view-viewpager-adapter")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import ViewPagerAdapter from 'react-native-tab-view-viewpager-adapter';\n\n// ...\n\nconst Tabs = createMaterialTopTabNavigator(\n  {\n    // routes\n  },\n  {\n    pagerComponent: ViewPagerAdapter,\n  }\n);\n")),(0,r.kt)("h3",{id:"tabbarcomponent"},(0,r.kt)("inlineCode",{parentName:"h3"},"tabBarComponent")),(0,r.kt)("p",null,"Optional, override the component to use as the tab bar."),(0,r.kt)("h3",{id:"tabbaroptions"},(0,r.kt)("inlineCode",{parentName:"h3"},"tabBarOptions")),(0,r.kt)("p",null,"An object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activeTintColor")," - Label and icon color of the active tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inactiveTintColor")," - Label and icon color of the inactive tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"showIcon")," - Whether to show icon for tab, default is false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"showLabel")," - Whether to show label for tab, default is true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upperCaseLabel")," - Whether to make label uppercase, default is true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pressColor")," - Color for material ripple (Android >= 5.0 only)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pressOpacity")," - Opacity for pressed tab (iOS and Android < 5.0 only)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scrollEnabled")," - Whether to enable scrollable tabs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tabStyle")," - Style object for the tab."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"indicatorStyle")," - Style object for the tab indicator (line at the bottom of the tab)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labelStyle")," - Style object for the tab label."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"iconStyle")," - Style object for the tab icon."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style")," - Style object for the tab bar."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowFontScaling")," - Whether label font should scale to respect Text Size accessibility settings, default is true."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"renderIndicator")," - Function which takes an object with the current route and returns a custom React Element to be used as a tab indicator.")),(0,r.kt)("p",null,"These options are passed as props to the tab bar component."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"tabBarOptions: {\n  labelStyle: {\n    fontSize: 12,\n  },\n  tabStyle: {\n    width: 100,\n  },\n  style: {\n    backgroundColor: 'blue',\n  },\n}\n")),(0,r.kt)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},(0,r.kt)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),(0,r.kt)("h4",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h4"},"title")),(0,r.kt)("p",null,"Generic title that can be used as a fallback for ",(0,r.kt)("inlineCode",{parentName:"p"},"headerTitle")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),(0,r.kt)("h4",{id:"swipeenabled-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"swipeEnabled")),(0,r.kt)("p",null,"True or false to enable or disable swiping between tabs, if not set then defaults to TabNavigatorConfig option swipeEnabled."),(0,r.kt)("h4",{id:"tabbaricon"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarIcon")),(0,r.kt)("p",null,"React Element or a function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",(0,r.kt)("inlineCode",{parentName:"p"},"horizontal")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),(0,r.kt)("h4",{id:"tabbarlabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarLabel")),(0,r.kt)("p",null,"Title string of a tab displayed in the tab bar or React Element or a function that given ",(0,r.kt)("inlineCode",{parentName:"p"},"{ focused: boolean, tintColor: string }")," returns a React.Node, to display in tab bar. When undefined, scene ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",(0,r.kt)("inlineCode",{parentName:"p"},"tabBarOptions.showLabel")," in the previous section."),(0,r.kt)("h4",{id:"tabbaraccessibilitylabel"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),(0,r.kt)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),(0,r.kt)("h4",{id:"tabbartestid"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarTestID")),(0,r.kt)("p",null,"ID to locate this tab button in tests."),(0,r.kt)("h4",{id:"tabbaronpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarOnPress")),(0,r.kt)("p",null,"Callback to handle press events; the argument is an object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),(0,r.kt)("p",null,"Useful for adding a custom logic before the transition to the next scene (the\ntapped one) starts. When setting tabBarOnPress the defaultHandler needs to be called in order to execute the default action (i.e. switch tab)."),(0,r.kt)("h4",{id:"tabbaronlongpress"},(0,r.kt)("inlineCode",{parentName:"h4"},"tabBarOnLongPress")),(0,r.kt)("p",null,"Callback to handle long press events; the argument is an object containing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")))}h.isMDXComponent=!0}}]);