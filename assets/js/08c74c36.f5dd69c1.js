"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[8639],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73764:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},l=void 0,c={unversionedId:"tab-based-navigation",id:"version-1.x/tab-based-navigation",isDocsHomePage:!1,title:"Tab navigation",description:"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top, below the header (or in place of the header).",source:"@site/versioned_docs/version-1.x/tab-based-navigation.md",sourceDirName:".",slug:"/tab-based-navigation",permalink:"/docs/1.x/tab-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/tab-based-navigation.md",tags:[],version:"1.x",frontMatter:{id:"tab-based-navigation",title:"Tab navigation",sidebar_label:"Tab navigation"},sidebar:"version-1.x/docs",previous:{title:"Glossary of terms",permalink:"/docs/1.x/glossary-of-terms"},next:{title:"Drawer navigation",permalink:"/docs/1.x/drawer-based-navigation"}},p=[{value:"Minimal example of tab-based navigation",id:"minimal-example-of-tab-based-navigation",children:[],level:2},{value:"Customizing the appearance",id:"customizing-the-appearance",children:[],level:2},{value:"Jumping between tabs",id:"jumping-between-tabs",children:[],level:2},{value:"A <code>StackNavigator</code> for each tab",id:"a-stacknavigator-for-each-tab",children:[],level:2},{value:"Why do we need a TabNavigator instead of TabBarIOS or some other component?",id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component",children:[],level:2},{value:"A tab icon that doesn&#39;t navigate",id:"a-tab-icon-that-doesnt-navigate",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the bottom of the screen or on the top, below the header (or in place of the header)."),(0,i.kt)("h2",{id:"minimal-example-of-tab-based-navigation"},"Minimal example of tab-based navigation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { TabNavigator } from 'react-navigation';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n      </View>\n    );\n  }\n}\n\nexport default TabNavigator({\n  Home: { screen: HomeScreen },\n  Settings: { screen: SettingsScreen },\n});\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/basic-tabs",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"customizing-the-appearance"},"Customizing the appearance"),(0,i.kt)("p",null,"This is similar to how you would customize a ",(0,i.kt)("inlineCode",{parentName:"p"},"StackNavigator")," ","\u2014"," there are some properties that are set when you initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"TabNavigator")," and others that can be customized per-screen in ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// You can import Ionicons from @expo/vector-icons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\nimport { TabNavigator, TabBarBottom } from 'react-navigation';\n\nexport default TabNavigator(\n  {\n    Home: { screen: HomeScreen },\n    Settings: { screen: SettingsScreen },\n  },\n  {\n    navigationOptions: ({ navigation }) => ({\n      tabBarIcon: ({ focused, tintColor }) => {\n        const { routeName } = navigation.state;\n        let iconName;\n        if (routeName === 'Home') {\n          iconName = `ios-information-circle${focused ? '' : '-outline'}`;\n        } else if (routeName === 'Settings') {\n          iconName = `ios-options${focused ? '' : '-outline'}`;\n        }\n\n        // You can return any component that you like here! We usually use an\n        // icon component from react-native-vector-icons\n        return <Ionicons name={iconName} size={25} color={tintColor} />;\n      },\n    }),\n    tabBarOptions: {\n      activeTintColor: 'tomato',\n      inactiveTintColor: 'gray',\n    },\n    tabBarComponent: TabBarBottom,\n    tabBarPosition: 'bottom',\n    animationEnabled: false,\n    swipeEnabled: false,\n  }\n);\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/tabs-with-icons",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("p",null,"Let's dissect this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is a property on ",(0,i.kt)("inlineCode",{parentName:"li"},"navigationOptions"),", so we know we can use it on our screen components, but in this case chose to put it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"TabNavigator")," configuration in order to centralize the icon configuration for convenience."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is a function that is given the ",(0,i.kt)("inlineCode",{parentName:"li"},"focused")," state and ",(0,i.kt)("inlineCode",{parentName:"li"},"tintColor"),". If you take a peek further down in the configuration you will see ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarOptions")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"activeTintColor")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"inactiveTintColor"),". These default to the iOS platform defaults, but you can change them here. The ",(0,i.kt)("inlineCode",{parentName:"li"},"tintColor")," that is passed through to the ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarIcon")," is either the active or inactive one, depending on the ",(0,i.kt)("inlineCode",{parentName:"li"},"focused")," state (focused is active)."),(0,i.kt)("li",{parentName:"ul"},"In order to make the behavior the same on iOS and Android, we have explicitly provided ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarComponent"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tabBarPosition"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"animationEnabled"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"swipeEnabled"),". The default behavior of ",(0,i.kt)("inlineCode",{parentName:"li"},"TabNavigator")," is to show a tab bar on the top of the screen on Android and on the bottom on iOS, but here we force it to be on the bottom on both platforms."),(0,i.kt)("li",{parentName:"ul"},"Read the ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.x/tab-navigator"},"full API reference")," for further information on ",(0,i.kt)("inlineCode",{parentName:"li"},"TabNavigator")," configuration options.")),(0,i.kt)("h2",{id:"jumping-between-tabs"},"Jumping between tabs"),(0,i.kt)("p",null,"Switching from one tab to another has a familiar API ","\u2014"," ",(0,i.kt)("inlineCode",{parentName:"p"},"this.props.navigation.navigate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Button, Text, View } from 'react-native';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n        <Button\n          title=\"Go to Settings\"\n          onPress={() => this.props.navigation.navigate('Settings')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n        <Button\n          title=\"Go to Home\"\n          onPress={() => this.props.navigation.navigate('Home')}\n        />\n      </View>\n    );\n  }\n}\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/jumping-between-tabs",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"a-stacknavigator-for-each-tab"},"A ",(0,i.kt)("inlineCode",{parentName:"h2"},"StackNavigator")," for each tab"),(0,i.kt)("p",null,"Usually tabs don't just display one screen ","\u2014"," for example, on your Twitter feed, you can tap on a tweet and it brings you to a new screen within that tab with all of the replies. You can think of this as there being separate navigation stacks within each tab, and that's exactly how we will model it in React Navigation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { TabNavigator, StackNavigator } from 'react-navigation';\n\nclass DetailsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Details!</Text>\n      </View>\n    );\n  }\n}\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        { /* other code from before here */ }\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        { /* other code from before here */ }\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n      </View>\n    );\n  }\n}\n\nconst HomeStack = StackNavigator({\n  Home: { screen: HomeScreen },\n  Details: { screen: DetailsScreen },\n});\n\nconst SettingsStack = StackNavigator({\n  Settings: { screen: SettingsScreen },\n  Details: { screen: DetailsScreen },\n});\n\nexport default TabNavigator(\n  {\n    Home: { screen: HomeStack },\n    Settings: { screen: SettingsStack },\n  },\n  {\n    /* Other configuration remains unchanged */\n  }\n);\n")),(0,i.kt)("a",{href:"https://snack.expo.io/@react-navigation/stacks-in-tabs",target:"blank",class:"run-code-button"},"\u2192 Run this code"),(0,i.kt)("h2",{id:"why-do-we-need-a-tabnavigator-instead-of-tabbarios-or-some-other-component"},"Why do we need a TabNavigator instead of TabBarIOS or some other component?"),(0,i.kt)("p",null,"It's common to attempt to use a standalone tab bar component without integrating it into the navigation library you use in your app. In some cases, this works fine! You should be warned, however, that you may run into some frustrating unanticipated issues when doing this."),(0,i.kt)("p",null,"For example, React Navigation's ",(0,i.kt)("inlineCode",{parentName:"p"},"TabNavigator"),' takes care of handling the Android back button for you, while standalone components typically do not. Additionally, it is more difficult for you (as the developer) to perform actions such as "jump to this tab and then go to this screen" if you need to call into two distinct APIs for it. Lastly, mobile user interfaces have numerous small design details that require that certain components are aware of the layout or presence of other components ',"\u2014"," for example, if you have a translucent tab bar, content should scroll underneath it and the scroll view should have an inset on the bottom equal to the height of the tab bar so you can see all of the content. Double tapping the tab bar should make the active navigation stack pop to the top of the stack, and doing it again should scroll the active scroll view in that stack scroll to the top. While not all of these behaviors are implemented out of the box yet with React Navigation, they will be and you will not get any of this if you use a standalone tab view component."),(0,i.kt)("h2",{id:"a-tab-icon-that-doesnt-navigate"},"A tab icon that doesn't navigate"),(0,i.kt)("p",null,"If you want a tab icon that never actually opens a stack navigator, simple provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"tabBarOnPress")," callback for the tab's ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationOptions")," without invoking the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"jumpToIndex")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new TabNavigator({\n  ...,\n  Placeholder: {\n      screen: () => null,\n      navigationOptions: {\n        tabBarOnPress: () => {\n          // do something custom here\n        },\n      },\n  }\n  ...\n});\n")))}d.isMDXComponent=!0}}]);