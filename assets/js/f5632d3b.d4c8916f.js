"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8878],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=c(t),h=i,v=g["".concat(l,".").concat(h)]||g[h]||p[h]||r;return t?a.createElement(v,o(o({ref:n},d),{},{components:t})):a.createElement(v,o({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5847:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return g}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={id:"nesting-navigators",title:"Nesting navigators",sidebar_label:"Nesting navigators"},l=void 0,c={unversionedId:"nesting-navigators",id:"version-5.x/nesting-navigators",isDocsHomePage:!1,title:"Nesting navigators",description:"Nesting navigators means rendering a navigator inside a screen of another navigator, for example:",source:"@site/versioned_docs/version-5.x/nesting-navigators.md",sourceDirName:".",slug:"/nesting-navigators",permalink:"/docs/5.x/nesting-navigators",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/nesting-navigators.md",tags:[],version:"5.x",frontMatter:{id:"nesting-navigators",title:"Nesting navigators",sidebar_label:"Nesting navigators"},sidebar:"version-5.x/docs",previous:{title:"Header buttons",permalink:"/docs/5.x/header-buttons"},next:{title:"Navigation lifecycle",permalink:"/docs/5.x/navigation-lifecycle"}},d=[{value:"How nesting navigators affects the behaviour",id:"how-nesting-navigators-affects-the-behaviour",children:[{value:"Each navigator keeps its own navigation history",id:"each-navigator-keeps-its-own-navigation-history",children:[],level:3},{value:"Each navigator has its own options",id:"each-navigator-has-its-own-options",children:[],level:3},{value:"Each screen in a navigator has its own params",id:"each-screen-in-a-navigator-has-its-own-params",children:[],level:3},{value:"Navigation actions are handled by current navigator and bubble up if couldn&#39;t be handled",id:"navigation-actions-are-handled-by-current-navigator-and-bubble-up-if-couldnt-be-handled",children:[],level:3},{value:"Navigator specific methods are available in the navigators nested inside",id:"navigator-specific-methods-are-available-in-the-navigators-nested-inside",children:[],level:3},{value:"Nested navigators don&#39;t receive parent&#39;s events",id:"nested-navigators-dont-receive-parents-events",children:[],level:3},{value:"Parent navigator&#39;s UI is rendered on top of child navigator",id:"parent-navigators-ui-is-rendered-on-top-of-child-navigator",children:[],level:3}],level:2},{value:"Navigating to a screen in a nested navigator",id:"navigating-to-a-screen-in-a-nested-navigator",children:[{value:"Passing params to a screen in a nested navigator",id:"passing-params-to-a-screen-in-a-nested-navigator",children:[],level:3},{value:"Rendering initial route defined in the navigator",id:"rendering-initial-route-defined-in-the-navigator",children:[],level:3}],level:2},{value:"Nesting multiple navigators",id:"nesting-multiple-navigators",children:[],level:2},{value:"Best practices when nesting",id:"best-practices-when-nesting",children:[],level:2}],p={toc:d};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nesting navigators means rendering a navigator inside a screen of another navigator, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Home() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={Feed} />\n      <Tab.Screen name="Messages" component={Messages} />\n    </Tab.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name="Home" component={Home} />\n        <Stack.Screen name="Profile" component={Profile} />\n        <Stack.Screen name="Settings" component={Settings} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"In the above example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," component contains a tab navigator. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," component is also used for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," screen in your stack navigator inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," component. So here, a tab navigator is nested inside a stack navigator:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Stack.Navigator"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Home")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Tab.Navigator"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Feed")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Messages")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Profile")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Screen"),")")))),(0,r.kt)("p",null,"Nesting navigators work very much like nesting regular components. To achieve the behavior you want, it's often necessary to nest multiple navigators."),(0,r.kt)("h2",{id:"how-nesting-navigators-affects-the-behaviour"},"How nesting navigators affects the behaviour"),(0,r.kt)("p",null,"When nesting navigators, there are some things to keep in mind:"),(0,r.kt)("h3",{id:"each-navigator-keeps-its-own-navigation-history"},"Each navigator keeps its own navigation history"),(0,r.kt)("p",null,"For example, when you press the back button when inside a screen in a nested stack navigator, it'll go back to the previous screen inside the nested stack even if there's another navigator as the parent."),(0,r.kt)("h3",{id:"each-navigator-has-its-own-options"},"Each navigator has its own options"),(0,r.kt)("p",null,"For example, specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," option in a screen nested in a child navigator won't affect the title shown in a parent navigator."),(0,r.kt)("p",null,"If you want to achieve this behavior, see the guide for ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/screen-options-resolution#setting-parent-screen-options-based-on-child-navigators-state"},"screen options with nested navigators"),". this could be useful if you are rendering a tab navigator inside a stack navigator and want to show the title of the active screen inside the tab navigator in the header of the stack navigator."),(0,r.kt)("h3",{id:"each-screen-in-a-navigator-has-its-own-params"},"Each screen in a navigator has its own params"),(0,r.kt)("p",null,"For example, any ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," passed to a screen in a nested navigator are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," prop of that screen and aren't accessible from a screen in a parent or child navigator."),(0,r.kt)("p",null,"If you need to access params of the parent screen from a child screen, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"React Context")," to expose params to children."),(0,r.kt)("h3",{id:"navigation-actions-are-handled-by-current-navigator-and-bubble-up-if-couldnt-be-handled"},"Navigation actions are handled by current navigator and bubble up if couldn't be handled"),(0,r.kt)("p",null,"For example, if you're calling ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.goBack()")," in a nested screen, it'll only go back in the parent navigator if you're already on the first screen of the navigator. Other actions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," work similarly, i.e. navigation will happen in the nested navigator and if the nested navigator couldn't handle it, then the parent navigator will try to handle it. In the above example, when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate('Messages')"),", inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Feed")," screen, the nested tab navigator will handle it, but if you call ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate('Settings')"),", the parent stack navigator will handle it."),(0,r.kt)("h3",{id:"navigator-specific-methods-are-available-in-the-navigators-nested-inside"},"Navigator specific methods are available in the navigators nested inside"),(0,r.kt)("p",null,"For example, if you have a stack inside a drawer navigator, the drawer's ",(0,r.kt)("inlineCode",{parentName:"p"},"openDrawer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"closeDrawer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"toggleDrawer")," methods etc. will also be available on the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop in the screen's inside the stack navigator. But say you have a stack navigator as the parent of the drawer, then the screens inside the stack navigator won't have access to these methods, because they aren't nested inside the drawer."),(0,r.kt)("p",null,"Similarly, if you have a tab navigator inside stack navigator, the screens in the tab navigator will get the ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," methods for stack in their ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop."),(0,r.kt)("p",null,"If you need to dispatch actions to the nested child navigators from a parent, you can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-prop#dispatch"},(0,r.kt)("inlineCode",{parentName:"a"},"navigation.dispatch")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.dispatch(DrawerActions.toggleDrawer());\n")),(0,r.kt)("h3",{id:"nested-navigators-dont-receive-parents-events"},"Nested navigators don't receive parent's events"),(0,r.kt)("p",null,"For example, if you have a stack navigator nested inside a tab navigator, the screens in the stack navigator won't receive the events emitted by the parent tab navigator such as (",(0,r.kt)("inlineCode",{parentName:"p"},"tabPress"),") when using ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.addListener"),"."),(0,r.kt)("p",null,"To receive events from parent navigator, you can explicitly listen to parent's events with ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation.getParent()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const unsubscribe = navigation\n  .getParent()\n  .addListener('tabPress', (e) => {\n    // Do something\n  });\n")),(0,r.kt)("h3",{id:"parent-navigators-ui-is-rendered-on-top-of-child-navigator"},"Parent navigator's UI is rendered on top of child navigator"),(0,r.kt)("p",null,"For example, when you nest a stack navigator inside a drawer navigator, you'll see that the drawer appears above the stack navigator's header. However, if you nest the drawer navigator inside a stack, the drawer will appear below the header of the stack. This is an important point to consider when deciding how to nest your navigators."),(0,r.kt)("p",null,"In your app, you will probably use these patterns depending on the behavior you want:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tab navigator nested inside the initial screen of stack navigator - New screens cover the tab bar when you push them."),(0,r.kt)("li",{parentName:"ul"},"Drawer navigator nested inside the initial screen of stack navigator with the initial screen's stack header hidden - The drawer can only be opened from the first screen of the stack."),(0,r.kt)("li",{parentName:"ul"},"Stack navigators nested inside each screen of drawer navigator - The drawer appears over the header from the stack."),(0,r.kt)("li",{parentName:"ul"},"Stack navigators nested inside each screen of tab navigator - The tab bar is always visible. Usually pressing the tab again also pops the stack to top.")),(0,r.kt)("h2",{id:"navigating-to-a-screen-in-a-nested-navigator"},"Navigating to a screen in a nested navigator"),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Root() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name="Profile" component={Profile} />\n      <Stack.Screen name="Settings" component={Settings} />\n    </Stack.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator>\n        <Drawer.Screen name="Home" component={Home} />\n        <Drawer.Screen name="Root" component={Root} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"Here, you might want to navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Root")," stack from your ",(0,r.kt)("inlineCode",{parentName:"p"},"Home")," component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root');\n")),(0,r.kt)("p",null,"It works, and the initial screen inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Root")," component is shown, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile"),". But sometimes you may want to control the screen that should be shown upon navigation. To achieve it, you can pass the name of the screen in params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', { screen: 'Settings' });\n")),(0,r.kt)("p",null,"Now, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," screen will be rendered instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"Profile")," upon navigation."),(0,r.kt)("summary",null,"This may look very different from the way navigation used to work with nested screens previously. The difference is that in the previous versions, all configuration was static, so React Navigation could statically find the list of all the navigators and their screens by recursing into nested configurations. But with dynamic configuration, React Navigation doesn't know which screens are available and where until the navigator containing the screen renders. Normally, a screen doesn't render its contents until you navigate to it, so the configuration of navigators which haven't rendered is not yet available. This makes it necessary to specify the hierarchy you're navigating to. This is also why you should have as little nesting of navigators as possible to keep your code simpler."),(0,r.kt)("h3",{id:"passing-params-to-a-screen-in-a-nested-navigator"},"Passing params to a screen in a nested navigator"),(0,r.kt)("p",null,"You can also pass params by specifying a ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," key:"),(0,r.kt)("samp",{id:"nest-navigators"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', {\n  screen: 'Settings',\n  params: { user: 'jane' },\n});\n")),(0,r.kt)("p",null,"If the navigator was already rendered, navigating to another screen will push a new screen in case of stack navigator."),(0,r.kt)("p",null,"You can follow similar approach for deeply nested screens. Note that the second argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"navigate")," here is just ",(0,r.kt)("inlineCode",{parentName:"p"},"params"),", so you can do something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', {\n  screen: 'Settings',\n  params: {\n    screen: 'Sound',\n    params: {\n      screen: 'Media',\n    },\n  },\n});\n")),(0,r.kt)("p",null,"In the above case, you're navigating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Media")," screen, which is in a navigator nested inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sound")," screen, which is in a navigator nested inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," screen."),(0,r.kt)("h3",{id:"rendering-initial-route-defined-in-the-navigator"},"Rendering initial route defined in the navigator"),(0,r.kt)("p",null,"By default, when you navigate a screen in the nested navigator, the specified screen is used as the initial screen and the initial route prop on the navigator is ignored. This behaviour is different from the React Navigation 4."),(0,r.kt)("p",null,"If you need to render the initial route specified in the navigator, you can disable the behaviour of using the specified screen as the initial screen by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"initial: false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigation.navigate('Root', {\n  screen: 'Settings',\n  initial: false,\n});\n")),(0,r.kt)("h2",{id:"nesting-multiple-navigators"},"Nesting multiple navigators"),(0,r.kt)("p",null,"It's sometimes useful to nest multiple navigators such as stack or drawer, for example, to have ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/modal"},"some screens in a modal stack and some in regular stack"),"."),(0,r.kt)("p",null,"When nesting multiple stack or drawer navigator, headers from both child and parent navigators would be shown. However, usually it's more desirable to show the header in the child navigator and hide the header in the stack navigator."),(0,r.kt)("p",null,"To achieve this, you can hide the header in the screen containing the navigator using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headerShown: false")," option."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function Home() {\n  return (\n    <NestedStack.Navigator>\n      <NestedStack.Screen name="Profile" component={Profile} />\n      <NestedStack.Screen name="Settings" component={Settings} />\n    </NestedStack.Navigator>\n  );\n}\n\nfunction App() {\n  return (\n    <NavigationContainer>\n      <RootStack.Navigator mode="modal">\n        <RootStack.Screen\n          name="Home"\n          component={Home}\n          options={{ headerShown: false }}\n        />\n        <RootStack.Screen name="EditPost" component={EditPost} />\n      </RootStack.Navigator>\n    </NavigationContainer>\n  );\n}\n')),(0,r.kt)("p",null,"A complete example can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.x/modal"},"modal guide"),". However, the principle isn't only specific to modals, but any kind of nesting of navigators."),(0,r.kt)("p",null,"In these examples, we have used a stack navigator directly nested inside another stack navigator, but the same principle applies when there are other navigators in the middle, for example: stack navigator inside a tab navigator which is inside another stack navigator, stack navigator inside drawer navigator etc."),(0,r.kt)("p",null,"When nesting multiple stack navigators, we recommend nesting at most 2 stack navigators, unless absolutely necessary."),(0,r.kt)("h2",{id:"best-practices-when-nesting"},"Best practices when nesting"),(0,r.kt)("p",null,"We recommend to reduce nesting navigators to minimal. Try to achieve the behavior you want with as little nesting as possible. Nesting has many downsides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It results in deeply nested view hierarchy which can cause memory and performance issues in lower end devices"),(0,r.kt)("li",{parentName:"ul"},"Nesting same type of navigators (e.g. tabs inside tabs, drawer inside drawer etc.) might lead to a confusing UX"),(0,r.kt)("li",{parentName:"ul"},"With excessive nesting, code becomes difficult to follow when navigating to nested screens, configuring deep link etc.")),(0,r.kt)("p",null,"Think of nesting navigators as a way to achieve the UI you want rather than a way to organize your code. If you want to create separate group of screens for organization, instead of using separate navigators, consider doing something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Define multiple groups of screens in objects like this\nconst commonScreens = {\n  Help: HelpScreen,\n};\n\nconst authScreens = {\n  SignIn: SignInScreen,\n  SignUp: SignUpScreen,\n};\n\nconst userScreens = {\n  Home: HomeScreen,\n  Profile: ProfileScreen,\n};\n\n// Then use them in your components by looping over the object and creating screen configs\n// You could extract this logic to a utility function and reuse it to simplify your code\n<Stack.Navigator>\n  {Object.entries({\n    // Use the screens normally\n    ...commonScreens,\n    // Use some screens conditionally based on some condition\n    ...(isLoggedIn ? userScreens : authScreens),\n  }).map(([name, component]) => (\n    <Stack.Screen name={name} component={component} />\n  ))}\n</Stack.Navigator>;\n")))}g.isMDXComponent=!0}}]);