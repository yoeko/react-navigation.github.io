"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3937],{36742:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(63366),r=n(67294),i=n(73727),l=n(52263),o=n(13919),s=n(10412),c=(0,r.createContext)({collectLink:function(){}}),d=n(44996),u=n(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,f=e.to,p=e.href,h=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,_=(0,a.Z)(e,m),N=(0,l.Z)().siteConfig,Z=N.trailingSlash,L=N.baseUrl,U=(0,d.C)().withBaseUrl,w=(0,r.useContext)(c),C=f||p,y=(0,o.Z)(C),T=null==C?void 0:C.replace("pathname://",""),M=void 0!==T?(n=T,k&&function(e){return e.startsWith("/")}(n)?U(n):n):void 0;M&&y&&(M=(0,u.applyTrailingSlash)(M,{trailingSlash:Z,baseUrl:L}));var A,O=(0,r.useRef)(!1),x=v?i.OL:i.rU,B=s.default.canUseIntersectionObserver;(0,r.useEffect)((function(){return!B&&y&&null!=M&&window.docusaurus.prefetch(M),function(){B&&A&&A.disconnect()}}),[M,B,y]);var H=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,S=!M||!y||H;return M&&y&&!H&&!b&&w.collectLink(M),S?r.createElement("a",Object.assign({href:M},C&&!y&&{target:"_blank",rel:"noopener noreferrer"},_)):r.createElement(x,Object.assign({},_,{onMouseEnter:function(){O.current||null==M||(window.docusaurus.preload(M),O.current=!0)},innerRef:function(e){var t,n;B&&e&&y&&(t=e,n=function(){null!=M&&window.docusaurus.prefetch(M)},(A=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(A.unobserve(t),A.disconnect(),n())}))}))).observe(t))},to:M||""},v&&{isActive:g,activeClassName:h}))}},13919:function(e,t,n){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},44996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return l}});var a=n(52263),r=n(13919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,l=i.forcePrependBaseUrl,o=void 0!==l&&l,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+d:d}(i,n,e,t)}}}function l(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},86146:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),r=n(24973),i=n(87462),l=n(63366),o=n(86010),s="iconEdit_2_ui",c=["className"],d=function(e){var t=e.className,n=(0,l.Z)(e,c);return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=n(99558);function m(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},a.createElement(d,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},28408:function(e,t,n){n.d(t,{N:function(){return m},Z:function(){return v}});var a=n(63366),r=n(87462),i=n(67294),l=n(86010),o=n(24973),s=n(99558),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",u=["id"],m=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?m:(t=e,function(e){var n,m=e.id,v=(0,a.Z)(e,u),f=(0,s.LU)().navbar.hideOnScroll;return m?i.createElement(t,(0,r.Z)({},v,{className:(0,l.Z)("anchor",(n={},n[d]=f,n[c]=!f,n)),id:m}),v.children,i.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+m,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},41217:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(99105),i=n(99558),l=n(44996);function o(e){var t=e.title,n=e.description,o=e.keywords,s=e.image,c=e.children,d=(0,i.pe)(t),u=(0,l.C)().withBaseUrl,m=s?u(s,{absolute:!0}):void 0;return a.createElement(r.Z,null,t&&a.createElement("title",null,d),t&&a.createElement("meta",{property:"og:title",content:d}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),o&&a.createElement("meta",{name:"keywords",content:Array.isArray(o)?o.join(","):o}),m&&a.createElement("meta",{property:"og:image",content:m}),m&&a.createElement("meta",{name:"twitter:image",content:m}),c)}},67588:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(63366),i=n(67294),l=n(86010),o=n(25002),s="tableOfContents_35-E",c=["className"];var d=function(e){var t=e.className,n=(0,r.Z)(e,c);return i.createElement("div",{className:(0,l.Z)(s,"thin-scrollbar",t)},i.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(87462),r=n(63366),i=n(67294),l=n(99558),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?i.createElement("ul",{className:r?void 0:n},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(s,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}function c(e){var t=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,d=e.linkClassName,u=void 0===d?"table-of-contents__link":d,m=e.linkActiveClassName,v=void 0===m?void 0:m,f=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,r.Z)(e,o),g=(0,l.LU)(),b=null!=f?f:g.tableOfContents.minHeadingLevel,E=null!=p?p:g.tableOfContents.maxHeadingLevel,k=(0,l.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:E}),_=(0,i.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:E}}),[u,v,b,E]);return(0,l.Si)(_),i.createElement(s,(0,a.Z)({toc:k,className:c,linkClassName:u},h))}},37211:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),i=n(36742),l="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,n=e.permalink,c=e.name,d=e.count;return a.createElement(i.Z,{href:n,className:(0,r.Z)(l,(t={},t[o]=!d,t[s]=d,t))},c,d&&a.createElement("span",null,d))}},87682:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),i=n(24973),l=n(37211),o="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:s},a.createElement(l.Z,{name:t,permalink:n}))}))))}},93783:function(e,t,n){var a=n(67294),r=n(10412),i="desktop",l="mobile",o="ssr";function s(){return r.default.canUseDOM?window.innerWidth>996?i:l:o}t.Z=function(){var e=(0,a.useState)((function(){return s()})),t=e[0],n=e[1];return(0,a.useEffect)((function(){function e(){n(s())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,i=e.split(/[#?]/)[0],l="/"===i||i===a?i:(r=i,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(i,l)}},18780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(i).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},59644:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(67294),r=n(86010),i=n(93783),l=n(36742),o=n(24973);var s=function(e){var t=e.metadata;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},a.createElement("div",{className:"pagination-nav__sublabel"},a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=n(52263),d=n(80907),u=n(99558);var m={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=m[e.versionMetadata.banner];return a.createElement(t,e)}function f(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,n=e.versionMetadata,i=(0,c.Z)().siteConfig.title,l=(0,d.gA)({failfast:!0}).pluginId,o=(0,u.J)(l).savePreferredVersionName,s=(0,d.Jo)(l),m=s.latestDocSuggestion,p=s.latestVersionSuggestion,h=null!=m?m:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:i,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(f,{versionLabel:p.label,to:h.path,onClick:function(){return o(p.name)}})))}var h=function(e){var t=e.versionMetadata;return t.banner?a.createElement(p,{versionMetadata:t}):a.createElement(a.Fragment,null)},g=n(41217);function b(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function E(e){var t=e.lastUpdatedBy;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:u.kM.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(E,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var _=n(86146),N=n(87682),Z="lastUpdated_13-_";function L(e){return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(N.Z,e)))}function U(e){var t=e.editUrl,n=e.lastUpdatedAt,i=e.lastUpdatedBy,l=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(u.kM.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(_.Z,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",Z)},(n||i)&&a.createElement(k,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:i})))}function w(e){var t=e.content.metadata,n=t.editUrl,i=t.lastUpdatedAt,l=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,s=t.tags,c=s.length>0,d=!!(n||i||o);return c||d?a.createElement("footer",{className:(0,r.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&a.createElement(L,{tags:s}),d&&a.createElement(U,{editUrl:n,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:l})):a.createElement(a.Fragment,null)}var C=n(67588),y="tocCollapsible_1PrD",T="tocCollapsibleButton_2O1e",M="tocCollapsibleContent_2Ydz",A="tocCollapsibleExpanded_3GYr",O=n(25002);function x(e){var t,n=e.toc,i=e.className,l=e.minHeadingLevel,s=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),d=c.collapsed,m=c.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(y,(t={},t[A]=!d,t),i)},a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",T),onClick:m},a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),a.createElement(u.zF,{lazy:!0,className:M,collapsed:d},a.createElement(O.Z,{toc:n,minHeadingLevel:l,maxHeadingLevel:s})))}var B=n(28408),H="docItemContainer_33ec",S="docItemCol_3FnS",D="tocMobile_3Hoh";function I(e){var t,n=e.content,l=e.versionMetadata,o=n.metadata,c=n.frontMatter,d=c.image,m=c.keywords,v=c.hide_title,f=c.hide_table_of_contents,p=c.toc_min_heading_level,b=c.toc_max_heading_level,E=o.description,k=o.title,_=!v&&void 0===n.contentTitle,N=(0,i.Z)(),Z=!f&&n.toc&&n.toc.length>0,L=Z&&("desktop"===N||"ssr"===N);return a.createElement(a.Fragment,null,a.createElement(g.Z,{title:k,description:E,keywords:m,image:d}),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",(t={},t[S]=!f,t))},a.createElement(h,{versionMetadata:l}),a.createElement("div",{className:H},a.createElement("article",null,l.badge&&a.createElement("span",{className:(0,r.Z)(u.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",l.label),Z&&a.createElement(x,{toc:n.toc,minHeadingLevel:p,maxHeadingLevel:b,className:(0,r.Z)(u.kM.docs.docTocMobile,D)}),a.createElement("div",{className:(0,r.Z)(u.kM.docs.docMarkdown,"markdown")},_&&a.createElement(B.N,null,k),a.createElement(n,null)),a.createElement(w,e)),a.createElement(s,{metadata:o}))),L&&a.createElement("div",{className:"col col--3"},a.createElement(C.Z,{toc:n.toc,minHeadingLevel:p,maxHeadingLevel:b,className:u.kM.docs.docTocDesktop}))))}var F=n(10412);var P=function(e){return F.default.canUseDOM?a.createElement(I,e):null}}}]);