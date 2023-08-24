import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-fee99f1a.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2ce38ec7.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",pre:"pre"},t(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsxs(e.h1,{id:"72-the-rings",children:[n.jsx(e.code,{children:"#72"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/72/",target:"_blank",rel:"nofollow noopener noreferrer",children:"The Rings"})]}),`
`,n.jsx(e.p,{children:"The Rings: A simple and meditative animation made of circles. What geometric patterns of circles come to your mind?"}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/yLQWZvJ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#72 CSS Challenge / The Rings"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#72 CSS Challenge / The Rings",src:"https://codepen.io/mulander/embed/yLQWZvJ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.h3,{id:"each-pug",children:"Each Pug"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pugjs.org/language/code.html#unbuffered-code",target:"_blank",rel:"nofollow noopener noreferrer",children:"Unbuffered Code"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`- for (var x = 0; x < 10; x++)
    div
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://pugjs.org/language/iteration.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Pug-iteration"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`each val in [1, 2, 3, 4, 5]
    li= val
`})}),`
`,n.jsx(e.h3,{id:"each-scss",children:"Each SCSS"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@for $i from 1 through 10 {
  &:nth-child(#{$i}) {
    animation-delay: ($i * 0.2s);
  }
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-pug",children:`//pug

.frame: .center 
  - for (var x = 0; x < 10; x++)
    .ring
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
  color: #fff;
  background: #1abc9c;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.ring {
  box-sizing: border-box;
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid #fff;
  border-radius: 50%;
  transform-origin: center;
  animation: an-ring 5s 0s ease-in-out infinite;
  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      animation-delay: ($i * 0.2s);
    }
  }
}

@keyframes an-ring {
  4% {
    transform: rotateX(0) rotateY(0) rotateZ(0);
  }
  100% {
    transform: rotateX(360deg) rotateY(-360deg) rotateZ(0);
  }
}
`})})]})}function b(r={}){const{wrapper:e}=Object.assign({},t(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(o,r)})):o(r)}export{b as default};
//# sourceMappingURL=072-c703aa35.js.map
