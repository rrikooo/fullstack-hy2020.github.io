(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{133:function(e,a,t){"use strict";t.r(a);var n=t(6),r=t.n(n),o=t(0),l=t.n(o),c=t(293),i=t(147),s=t(159),m=t(161),u=t(160),p=t(153),g=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={siteLanguage:"fi"},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=-1!==window.location.pathname.indexOf("/en")?"en":"fi";this.setState({siteLanguage:e})},t.render=function(){var e="en"===this.state.siteLanguage?"Page not found":"Sivua ei löytynyt";return l.a.createElement(m.a,null,l.a.createElement(u.a,{title:e+" | Full stack -websovelluskehitys",lang:this.state.siteLanguage}),l.a.createElement(i.a,{className:"container spacing--large spacing--after"},l.a.createElement("h1",null,"404 - ",e),l.a.createElement("p",{className:"col-10 spacing--small spacing--after"},"Uncaught ReferenceError: unknown is not defined"),l.a.createElement(c.a,{className:"col-10 arrow__container--with-link",bold:!0,thickBorder:!0,link:"en"===this.state.siteLanguage?"/en":"/",content:[{backgroundColor:p.main,text:"Go back home"}]})),l.a.createElement(s.a,{lang:this.state.siteLanguage}))},a}(o.Component);a.default=g},153:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},159:function(e,a,t){"use strict";t(163);var n=t(147),r=t(149),o=t(146),l=t(0),c=t.n(l),i=t(155),s=t.n(i),m=t(220),u=t(152),p=[{src:t.n(u).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:s.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(e){var a=e.lang;return c.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},c.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return c.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},c.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),c.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},c.a.createElement("div",{className:"footer__navigation-link-container"},m.b[a].map(function(e){return c.a.createElement(o.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},163:function(e,a,t){},293:function(e,a,t){"use strict";t(28),t(245),t(295);var n=t(148),r=t.n(n),o=(t(296),t(147)),l=t(146),c=t(4),i=t.n(c),s=t(0),m=t.n(s),u=t(153),p=function(e){var a,t=e.className,n=e.wrapperClassName,c=e.link,i=e.content,s=e.stack,p=e.bold,g=e.thickBorder,f=e.upperCase,k=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),d=m.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},i.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===u.black?"white":u.black};return m.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},k),m.a.createElement("div",{className:"arrow__rectangle "+(p?"bold":"")+" "+(g?"arrow__rectangle--thick-border":""),style:t},e.link?m.a.createElement(l.Link,{to:e.link},f?e.text.toUpperCase():e.text):f?e.text.toUpperCase():e.text),m.a.createElement("div",{className:"arrow__point "+(g?"arrow__point--thick-border":""),style:t}))}));return s||c?!s&&c?a=m.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},m.a.createElement(l.Link,{to:c,style:{display:"inline-block"}},d)):s&&(a=m.a.createElement("div",{className:"col-10 spacing--after "+n},m.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},i.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===u.black?"white":u.black};return m.a.createElement(l.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},k),m.a.createElement(o.a,{flex:!0,className:"arrow__rectangle",style:a},m.a.createElement("p",{className:"arrow--stacked-title"},m.a.createElement("span",null,e.text))),m.a.createElement("div",{className:"arrow__point",style:a}))})))):a=m.a.createElement("div",{className:"col-10 spacing--after"},d),a};p.propTypes={className:i.a.string,wrapperClassName:i.a.string,link:i.a.string,content:i.a.array.isRequired,stack:i.a.bool,upperCase:i.a.bool,bold:i.a.bool,thickBorder:i.a.bool},p.defaultProps={className:"",wrapperClassName:""},a.a=p},295:function(e,a,t){"use strict";t(294)("link",function(e){return function(a){return e(this,"a","href",a)}})},296:function(e,a,t){}}]);
//# sourceMappingURL=component---src-pages-404-js-7fe4f22c5c90f814abf3.js.map