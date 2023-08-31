import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-ea668d1f.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-56087800.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(t){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(e.h1,{id:"11-walking-boots",children:[n.jsx(e.code,{children:"#11"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/11/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Walking Boots"})]}),`
`,n.jsx(e.p,{children:"Walking Boots: These boots are made for walking. Where are they going and for how long?"}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/BavazPg",target:"_blank",rel:"nofollow noopener noreferrer",children:"#11 CSS Challenge / Walking Boots"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#11 CSS Challenge / Walking Boots",src:"https://codepen.io/mulander/embed/BavazPg?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="wrapper">
    <div class="leg left">
      <div class="shoe"></div>
    </div>
    <div class="leg right">
      <div class="shoe"></div>
    </div>
  </div>
  <div class="floor"></div>
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
  background: rgb(155, 218, 160);
  background: radial-gradient(
    ellipse at center,
    rgb(215, 246, 222) 0%,
    rgb(155, 218, 160) 100%
  );
  overflow: hidden;
}

.floor {
  position: absolute;
  top: 244px;
  left: 0;
  right: 0;
  bottom: 0;
  background: conic-gradient(
      white 0.25turn,
      black 0.25turn 0.5turn,
      white 0.5turn 0.75turn,
      black 0.75turn
    ) top left / 25% 25% repeat;
  animation: road-past 1s 0.8s ease-in-out infinite;
}

.wrapper {
  opacity: 0;
  animation: fade-in 0.8s ease-out 1s both;
}

.leg {
  position: absolute;
  top: 0px;
  left: 147px;
  width: 151px;
  height: 245px;
  transform-origin: 50% 0;
}

.shoe {
  position: absolute;
  width: 151px;
  height: 128px;
  left: 0;
  bottom: 0;
  background: url("https://100dayscss.com/codepen/doc-martens.svg") center
    center no-repeat;
  transform-origin: 0 95%;
}
.left {
  animation: leg-swing 2s ease-in-out infinite;
}
.left .shoe {
  animation: shoe-turn 2s ease-in-out infinite;
}
.right {
  animation: leg-swing 2s ease-in-out 1s infinite;
}
.right .shoe {
  animation: shoe-turn 2s ease-in-out 1s infinite;
}

@keyframes road-past {
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: -100%;
  }
}
@keyframes fade-in {
  to {
    opacity: 1;
  }
}
@keyframes leg-swing {
  0%,
  100% {
    transform: rotate(-22deg);
  }
  50% {
    transform: rotate(40deg);
  }
}
@keyframes shoe-turn {
  0%,
  100% {
    transform: rotate(-10deg) translateY(-5px) translateX(10px);
  }
  25% {
    transform: rotate(0deg) translateY(0px) translateX(0);
  }
  50% {
    transform: rotate(10deg) translateY(-10px) translateX(10px);
  }
  75% {
    transform: rotate(0deg) translateY(-30px) translateX(0);
  }
}
`})})]})}function j(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{j as default};
//# sourceMappingURL=011-4f80ea2a.js.map
