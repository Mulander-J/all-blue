import{S as k,i as v,s as T,e as l,a as d,b,c as g,l as w,n as m,d as $}from"./index-38fcc8a7.js";import{R as E}from"./index-d179bc74.js";function _(r){let e,o,s,i,t;return{c(){e=l("div"),o=l("div"),s=l("p"),s.textContent=`${E}`,d(o,"class","p-10 border-2 bg-white text-black dark:text-white dark:bg-black"),d(e,"id","box"),d(e,"role","presentation")},m(n,a){b(n,e,a),g(e,o),g(o,s),i||(t=w(e,"click",r[0]),i=!0)},p:m,i:m,o:m,d(n){n&&$(e),i=!1,t()}}}function y(r){let e;const o=()=>{var t;return/dark/i.test((t=document.documentElement)==null?void 0:t.className)},s=()=>{e=o(),console.log("isDark",e),e?(document.documentElement.classList.remove("dark"),document.documentElement.classList.add("light")):(document.documentElement.classList.remove("light"),document.documentElement.classList.add("dark"))};return[t=>{if(!(document!=null&&document.startViewTransition)){s();return}const n=t.clientX,a=t.clientY,u=Math.hypot(Math.max(n,document.querySelector("#box").clientWidth-n),Math.max(a,document.querySelector("#box").clientHeight-a));console.log("sda",u),document.startViewTransition(s).ready.then(()=>{console.log("issss",e);const p=[`circle(0px at ${n}px ${a}px)`,`circle(${u}px at ${n}px ${a}px)`];document.documentElement.animate({clipPath:e?[...p].reverse():p},{duration:500,easing:"ease-in",pseudoElement:e?"::view-transition-old(root)":"::view-transition-new(root)"})})}]}class S extends k{constructor(e){super(),v(this,e,y,_,T,{})}}const L=S,M={component:L},c={};var x,h,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(f=(h=c.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const R=["Preview"];export{c as Preview,R as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories-9881038a.js.map