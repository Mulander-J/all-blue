import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function t(r){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",pre:"pre"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),`
`,e.jsxs(n.h1,{id:"50-easter-egg",children:[e.jsx(n.code,{children:"#50"})," ",e.jsx(n.a,{href:"https://100dayscss.com/days/50/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Easter Egg"})]}),`
`,e.jsx(n.p,{children:"Easter Egg: Are you familier with the 12 Basic Principles of Animation? This is an example for squash and stretch."}),`
`,e.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See the Pen ",e.jsx(n.a,{href:"https://codepen.io/mulander/pen/KKbgQqL",target:"_blank",rel:"nofollow noopener noreferrer",children:"#50 CSS Challenge / Easter Egg"}),`
by Mulander (`,e.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,e.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,e.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#50 CSS Challenge / Easter Egg",src:"https://codepen.io/mulander/embed/KKbgQqL?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,e.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius",target:"_blank",rel:"nofollow noopener noreferrer",children:"border-radius"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"border-radius"})," CSS property rounds the corners of an element's outer border edge."]}),`
`,e.jsxs(n.p,{children:["You can set a ",e.jsx(n.code,{children:"single radius"})," to make ",e.jsx(n.code,{children:"circular corners"}),", or ",e.jsx(n.code,{children:"two radii"})," to make ",e.jsx(n.code,{children:"elliptical corners"}),"."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Syntax"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`/* The syntax of the first radius allows one to four values */
/* Radius is set for all 4 sides */
border-radius: 10px;

/* top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5%;

/* top-left | top-right-and-bottom-left | bottom-right */
border-radius: 2px 4px 2px;

/* top-left | top-right | bottom-right | bottom-left */
border-radius: 1px 0 3px 4px;

/* The syntax of the second radius allows one to four values */
/* (first radius values) / radius */
border-radius: 10px / 20px;

/* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
border-radius: 10px 5% / 20px 30px;

/* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (first radius values) / top-left | top-right | bottom-right | bottom-left */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Global values */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: revert-layer;
border-radius: unset;
`})}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="frame">
  <div class="egg"></div>
</div>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: skyblue;
}
.egg {
  position: absolute;
  width: 100px;
  height: 130px;
  top: 135px;
  left: 150px;
  background: #fff;
  border-radius: 50px/80px 80px 50px 50px;
  transform-origin: center bottom;
  animation: egg 3s ease-in-out both infinite;
}
@keyframes egg {
  0% {
    transform: translate3d(0, -350px, 0) scale(0.8, 1.2);
  }
  25% {
    transform: translate3d(0, 40px, 0) scale(1.05, 0.9);
  }
  30% {
    transform: translate3d(0, -20px, 0) scale(0.95, 1.02);
  }
  35% {
    transform: translate3d(0, 10px, 0) scale(1.01, 0.98);
  }
  40%,
  45% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0);
  }
  50% {
    transform: translate3d(0, 0, 0) scale(1) rotate(5deg);
  }
  55% {
    transform: translate3d(0, 0, 0) scale(1) rotate(-5deg);
  }
  60% {
    transform: translate3d(0, 0, 0) scale(1) rotate(5deg);
  }
  65%,
  70% {
    transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
  }
  75% {
    transform: translate3d(0, 10px, 0) scale(1.01, 0.98);
  }
  80% {
    transform: translate3d(0, -20px, 0) scale(1.02, 0.95);
  }
  100% {
    transform: translate3d(0, 350px, 0) scale(0.9, 1.1);
  }
}
`})})]})}function j(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{j as default};
//# sourceMappingURL=050-63e38206.js.map
