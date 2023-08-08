import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-ae74a2ae.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a2466b54.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function t(a){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),a.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsxs(e.h1,{id:"4-loading",children:[n.jsx(e.code,{children:"#4"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/4/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Loading"})]}),`
`,n.jsx(e.p,{children:"Loading: The best are always websites that do not need a loading status. If they do, here would be a calming one."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/PoxgNPv",target:"_blank",rel:"nofollow noopener noreferrer",children:"#4 CSS Challenge / Loading"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#4 CSS Challenge / Loading",src:"https://codepen.io/mulander/embed/PoxgNPv?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"animation-direction"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`animation-direction: normal | reverse | alternate | alternate-reverse
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.loading {
  animation: an-dot-1 4s ease infinite;
}

@keyframes an-dot-1 {
  0%,
  5%,
  95%,
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
}

/* equals */

.loading {
  animation: an-dot-1 2s ease infinite alternate;
}

@keyframes an-dot-1-alternate {
  0%,
  10% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <div class="circle">
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
    </div>
    <div class="circle-alternate">
      <div class="dot dot1"></div>
      <div class="dot dot2"></div>
      <div class="dot dot3"></div>
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: #e56262;
  color: #fff;
  --dur: 4s;
  --rMin: 30px;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dot {
  position: absolute;
  border-radius: 50%;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dot1 {
  z-index: 1;
  background: rgba(255, 255, 255, 0.4);
  width: calc(var(--rMin) * 3);
  height: calc(var(--rMin) * 3);
}
.dot2 {
  z-index: 2;
  background: rgba(255, 255, 255, 0.6);
  width: calc(var(--rMin) * 2);
  height: calc(var(--rMin) * 2);
}
.dot3 {
  z-index: 3;
  background: rgba(255, 255, 255, 0.8);
  width: calc(var(--rMin) * 1);
  height: calc(var(--rMin) * 1);
}
.circle,
.circle-alternate {
  position: relative;
  width: 100px;
  height: 100px;
}
.circle .dot1 {
  animation: an-dot-1 var(--dur) ease-in-out infinite;
}
.circle .dot2 {
  animation: an-dot-2 var(--dur) ease-in-out infinite;
}
.circle .dot3 {
  animation: an-dot-3 var(--dur) ease-in-out infinite;
}
.circle-alternate .dot1 {
  animation: an-dot-1-alternate calc(var(--dur) / 2) ease-in-out infinite alternate;
}
.circle-alternate .dot2 {
  animation: an-dot-2-alternate calc(var(--dur) / 2) ease-in-out infinite alternate;
}
.circle-alternate .dot3 {
  animation: an-dot-3-alternate calc(var(--dur) / 2) ease-in-out infinite alternate;
}

@keyframes an-dot-1 {
  0%,
  5%,
  95%,
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes an-dot-2 {
  0%,
  20%,
  80%,
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes an-dot-3 {
  0%,
  35%,
  65%,
  100% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes an-dot-1-alternate {
  0%,
  10% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes an-dot-2-alternate {
  0%,
  40% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes an-dot-3-alternate {
  0%,
  70% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
`})})]})}function b(a={}){const{wrapper:e}=Object.assign({},r(),a.components);return e?n.jsx(e,Object.assign({},a,{children:n.jsx(t,a)})):t(a)}export{b as default};
//# sourceMappingURL=004-d1be9000.js.map
