import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-6eebfeed.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-769d2acc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function t(r){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{}),`
`,e.jsxs(n.h1,{id:"75-spinning-discs",children:[e.jsx(n.code,{children:"#75"})," ",e.jsx(n.a,{href:"https://100dayscss.com/days/75/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Spinning Discs"})]}),`
`,e.jsx(n.p,{children:"Spinning Discs: A real 3D sphere is not possible with CSS only as far as I know. But the illusion of a sphere can be achieved in several ways."}),`
`,e.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See the Pen ",e.jsx(n.a,{href:"https://codepen.io/mulander/pen/vYQqywv",target:"_blank",rel:"nofollow noopener noreferrer",children:"#75 CSS Challenge / Spinning Discs"}),`
by Mulander (`,e.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,e.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,e.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#75 CSS Challenge / Spinning Discs",src:"https://codepen.io/mulander/embed/vYQqywv?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,e.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"rotate3d"})," needs ",e.jsx(n.code,{children:"transform-style: preserve-3d;"})," and ",e.jsx(n.code,{children:"perspective"})]}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`// pug

.frame: .center: .circle
	- for(let i = 0; i < 14; i++)
		.slice
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`// delete the following line if no text is used
// edit the line if you wanna use other fonts
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);

// use only the available space inside the 400x400 frame
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background: #d33526;
  color: #fff;
  filter: contrast(1.2);
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 1500px;
}
.circle {
  position: relative;
  width: 200px;
  height: 200px;
  animation: rotate 7s ease-in-out infinite;
  transform-style: preserve-3d;
}
.slice {
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
  border-radius: 50%;
  @for $i from 1 through 7 {
    &:nth-child(#{$i}) {
      border: 10px solid rgba(255,255,255,.2);
      filter: blur(1px);
      transform: rotateX($i * 30deg);
    }
  }
  @for $i from 8 through 14 {
    &:nth-child(#{$i}) {
      background: hsl(60 * $i, 80%, 50%);
      opacity: 0.3;
      transform: rotateY($i * 30deg) scale(.6);
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }
  25% {
    transform: rotateY(45deg) rotateX(180deg) rotateZ(20deg);
  }
  50% {
    transform: rotateY(225deg) rotateX(0deg) rotateZ(90deg);
  }
  75% {
    transform: rotateY(0deg) rotateX(45deg) rotateZ(120deg);
  }
  100% {
    transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
  }
}
`})})]})}function b(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{b as default};
//# sourceMappingURL=075-6a1a2c35.js.map
