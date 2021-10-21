"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[2405],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return p}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=s.createContext({}),u=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return s.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,h=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return t?s.createElement(h,a(a({ref:n},l),{},{components:t})):s.createElement(h,a({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36409:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var s=t(87462),r=t(63366),o=(t(67294),t(3905)),a=["components"],i={id:"use-focus-effect",title:"useFocusEffect",sidebar_label:"useFocusEffect"},c=void 0,u={unversionedId:"use-focus-effect",id:"version-6.x/use-focus-effect",isDocsHomePage:!1,title:"useFocusEffect",description:"Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using focus and blur events, it's not very ergonomic.",source:"@site/versioned_docs/version-6.x/use-focus-effect.md",sourceDirName:".",slug:"/use-focus-effect",permalink:"/docs/use-focus-effect",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-focus-effect.md",tags:[],version:"6.x",frontMatter:{id:"use-focus-effect",title:"useFocusEffect",sidebar_label:"useFocusEffect"},sidebar:"version-6.x/docs",previous:{title:"useNavigationState",permalink:"/docs/use-navigation-state"},next:{title:"useIsFocused",permalink:"/docs/use-is-focused"}},l=[{value:"Running asynchronous effects",id:"running-asynchronous-effects",children:[],level:2},{value:"Delaying effect until transition finishes",id:"delaying-effect-until-transition-finishes",children:[],level:2},{value:"How is <code>useFocusEffect</code> different from adding a listener for <code>focus</code> event",id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event",children:[],level:2},{value:"Using with class component",id:"using-with-class-component",children:[],level:2}],f={toc:l};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sometimes we want to run side-effects when a screen is focused. A side effect may involve things like adding an event listener, fetching data, updating document title, etc. While this can be achieved using ",(0,o.kt)("inlineCode",{parentName:"p"},"focus")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"blur")," events, it's not very ergonomic."),(0,o.kt)("p",null,"To make this easier, the library exports a ",(0,o.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," hook:"),(0,o.kt)("samp",{id:"simple-focus-effect"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, user => setUser(user));\n\n      return () => unsubscribe();\n    }, [userId])\n  );\n\n  return <ProfileContent user={user} />;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: To avoid the running the effect too often, it's important to wrap the callback in ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback")," before passing it to ",(0,o.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," as shown in the example.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," is analogous to React's ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook. The only difference is that it only runs if the screen is currently focused."),(0,o.kt)("p",null,"The effect will run whenever the dependencies passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useCallback")," change, i.e. it'll run on initial render (if the screen is focused) as well as on subsequent renders if the dependencies have changed. If you don't wrap your effect in ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useCallback"),", the effect will run every render if the screen is focused."),(0,o.kt)("p",null,"The cleanup function runs when the previous effect needs to be cleaned up, i.e. when dependencies change and a new effect is scheduled and when the screen unmounts or blurs."),(0,o.kt)("h2",{id:"running-asynchronous-effects"},"Running asynchronous effects"),(0,o.kt)("p",null,"When running asynchronous effects such as fetching data from server, it's important to make sure that you cancel the request in the cleanup function (similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useEffect"),"). If you're using an API that doesn't provide a cancellation mechanism, make sure to ignore the state updates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useFocusEffect(\n  React.useCallback(() => {\n    let isActive = true;\n\n    const fetchUser = async () => {\n      try {\n        const user = await API.fetch({ userId });\n\n        if (isActive) {\n          setUser(user);\n        }\n      } catch (e) {\n        // Handle error\n      }\n    };\n\n    fetchUser();\n\n    return () => {\n      isActive = false;\n    };\n  }, [userId])\n);\n")),(0,o.kt)("p",null,"If you don't ignore the result, then you might end up with inconsistent data due to race conditions in your API calls."),(0,o.kt)("h2",{id:"delaying-effect-until-transition-finishes"},"Delaying effect until transition finishes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," hook runs the effect as soon as the screen comes into focus. This often means that if there is an animation for the screen change, it might not have finished yet."),(0,o.kt)("p",null,"React Navigation runs its animations in native thread, so it's not a problem in many cases. But if the effect updates the UI or renders something expensive, then it can affect the animation performance. In such cases, we can use ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/interactionmanager"},(0,o.kt)("inlineCode",{parentName:"a"},"InteractionManager"))," to defer our work until the animations or gestures have finished:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"useFocusEffect(\n  React.useCallback(() => {\n    const task = InteractionManager.runAfterInteractions(() => {\n      // Expensive task\n    });\n\n    return () => task.cancel();\n  }, [])\n);\n")),(0,o.kt)("h2",{id:"how-is-usefocuseffect-different-from-adding-a-listener-for-focus-event"},"How is ",(0,o.kt)("inlineCode",{parentName:"h2"},"useFocusEffect")," different from adding a listener for ",(0,o.kt)("inlineCode",{parentName:"h2"},"focus")," event"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"focus")," event fires when a screen comes into focus. Since it's an event, your listener won't be called if the screen was already focused when you subscribed to the event. This also doesn't provide a way to perform a cleanup function when the screen becomes unfocused. You can subscribe to the ",(0,o.kt)("inlineCode",{parentName:"p"},"blur")," event and handle it manually, but it can get messy. You will usually need to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount")," as well in addition to these events, which complicates it even more."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useFocusEffect")," allows you to run an effect on focus and clean it up when the screen becomes unfocused. It also handles cleanup on unmount. It re-runs the effect when dependencies change, so you don't need to worry about stale values in your listener."),(0,o.kt)("h2",{id:"using-with-class-component"},"Using with class component"),(0,o.kt)("p",null,"You can make a component for your effect and use it in your class component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function FetchUserData({ userId, onUpdate }) {\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, onUpdate);\n\n      return () => unsubscribe();\n    }, [userId, onUpdate])\n  );\n\n  return null;\n}\n\n// ...\n\nclass Profile extends React.Component {\n  _handleUpdate = user => {\n    // Do something with user object\n  };\n\n  render() {\n    return (\n      <>\n        <FetchUserData\n          userId={this.props.userId}\n          onUpdate={this._handleUpdate}\n        />\n        {/* rest of your code */}\n      </>\n    );\n  }\n}\n")))}d.isMDXComponent=!0}}]);