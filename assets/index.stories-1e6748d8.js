import{S as U,i as Y,s as Z,e as _,f as D,b as y,c as w,n as C,d as k,g as x,o as $,t as ee,a as b,j as m,l as te,h as ne,k as ie}from"./index-a39d685e.js";import{e as N}from"./each-e59479a4.js";function M(n,e,t){const i=n.slice();return i[12]=e[t],i[14]=t,i}function T(n){let e;return{c(){e=_("div"),b(e,"class","indicators"),m(e,"isChanged",n[1]),m(e,"hidden",n[14]!==n[0])},m(t,i){y(t,e,i)},p(t,i){i&2&&m(e,"isChanged",t[1]),i&1&&m(e,"hidden",t[14]!==t[0])},d(t){t&&k(e)}}}function A(n){let e,t=n[12]+"",i,o,c,a,s=n[4]&&T(n);function r(...u){return n[9](n[14],...u)}return{c(){e=_("li"),i=ee(t),o=D(),s&&s.c(),b(e,"role","none"),m(e,"active",n[14]===n[0])},m(u,l){y(u,e,l),w(e,i),w(e,o),s&&s.m(e,null),c||(a=te(e,"click",r),c=!0)},p(u,l){n=u,l&32&&t!==(t=n[12]+"")&&ne(i,t),n[4]?s?s.p(n,l):(s=T(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),l&1&&m(e,"active",n[14]===n[0])},d(u){u&&k(e),s&&s.d(),c=!1,a()}}}function E(n){let e;return{c(){e=_("div"),b(e,"class","indicator"),m(e,"isChanged",n[1])},m(t,i){y(t,e,i),n[10](e)},p(t,i){i&2&&m(e,"isChanged",t[1])},d(t){t&&k(e),n[10](null)}}}function ae(n){let e,t,i=N(n[5]),o=[];for(let a=0;a<i.length;a+=1)o[a]=A(M(n,i,a));let c=n[3]&&E(n);return{c(){e=_("nav");for(let a=0;a<o.length;a+=1)o[a].c();t=D(),c&&c.c()},m(a,s){y(a,e,s);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(e,null);w(e,t),c&&c.m(e,null)},p(a,[s]){if(s&115){i=N(a[5]);let r;for(r=0;r<i.length;r+=1){const u=M(a,i,r);o[r]?o[r].p(u,s):(o[r]=A(u),o[r].c(),o[r].m(e,t))}for(;r<o.length;r+=1)o[r].d(1);o.length=i.length}a[3]?c?c.p(a,s):(c=E(a),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i:C,o:C,d(a){a&&k(e),x(o,a),c&&c.d()}}}function se(n,e,t){let i,o,c,{count:a=3}=e,{animation:s="static"}=e,r=0,u=!1,l;const v=(d,p)=>{t(0,r=p),t(1,u=!u),o&&S(d.target)},S=d=>{!d||!l||(t(2,l.style.left=d.offsetLeft+"px",l),t(2,l.style.width=d.offsetWidth+"px",l),t(2,l.style.filter="hue-rotate("+Math.random()*360+"deg)",l))};$(()=>{o&&l&&S(l.parentElement.children[r])});const G=(d,p)=>v(p,d);function K(d){ie[d?"unshift":"push"](()=>{l=d,t(2,l)})}return n.$$set=d=>{"count"in d&&t(7,a=d.count),"animation"in d&&t(8,s=d.animation)},n.$$.update=()=>{n.$$.dirty&128&&t(5,i=new Array(a||1).fill(null).map((d,p)=>`Nav_${p}`)),n.$$.dirty&256&&t(3,o=s!=="static"),n.$$.dirty&256&&t(4,c=s!=="slide")},[r,u,l,o,c,i,v,a,s,G,K]}class F extends U{constructor(e){super(),Y(this,e,se,ae,Z,{count:7,animation:8})}}const oe=F;F.__docgen={version:3,name:"TripleNav.svelte",data:[{keywords:[{name:"type",description:"{number} Menu Count"}],visibility:"public",description:"",name:"count",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"number",type:"number"},defaultValue:3},{keywords:[{name:"type",description:"{string} Animation Type"}],visibility:"public",description:"",name:"animation",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"static"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const le={component:oe,argTypes:{animation:{description:"Animation Type",control:{type:"select"},options:["static","slide","shadow"]},count:{description:"Menu Count",control:{type:"number",min:1,max:6,step:1}}},tags:["autodocs"],parameters:{docs:{description:{component:`[Refrence:Magic Navigation Menu Indicator using CSS & Javascript](https://www.youtube.com/watch?v=k26kBQP2XH0)

Reproduce via svelte`}}}},f={args:{animation:"static",count:4}},h={args:{animation:"slide",count:4}},g={args:{animation:"shadow",count:4}};var I,R,V,j,q;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    animation: 'static',
    count: 4
  }
}`,...(V=(R=f.parameters)==null?void 0:R.docs)==null?void 0:V.source},description:{story:"None animation, only affect with active.",...(q=(j=f.parameters)==null?void 0:j.docs)==null?void 0:q.description}}};var B,H,J,L,O;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    animation: 'slide',
    count: 4
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"Slide animation, slide between actived targets.",...(O=(L=h.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var P,Q,W,X,z;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    animation: 'shadow',
    count: 4
  }
}`,...(W=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:W.source},description:{story:"Shadow animation, slide with a shadow between actived targets.",...(z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:z.description}}};const de=["Static","Slide","Shadow"];export{g as Shadow,h as Slide,f as Static,de as __namedExportsOrder,le as default};
//# sourceMappingURL=index.stories-1e6748d8.js.map