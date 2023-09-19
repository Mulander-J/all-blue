import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-04ed5b14.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function a(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",pre:"pre"},t(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsxs(e.h1,{id:"79-lines-animation",children:[n.jsx(e.code,{children:"#79"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/79/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Lines Animation"})]}),`
`,n.jsx(e.p,{children:"Lines Animation: Now and then, animation can also be loud and exciting. What will you make out of the initial square?"}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/VwVogbW",target:"_blank",rel:"nofollow noopener noreferrer",children:"#79 CSS Challenge / Lines Animation"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#79 CSS Challenge / Lines Animation",src:"https://codepen.io/mulander/embed/VwVogbW?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.p,{children:"When designing an animation, several parameters can be varied to create visual effects such as:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"color"}),`
`,n.jsx(e.li,{children:"border"}),`
`,n.jsx(e.li,{children:"box-shadow"}),`
`,n.jsx(e.li,{children:"clip-path"}),`
`,n.jsxs(e.li,{children:["transform",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"scale"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"translate"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"rotate"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"And transform can be re-added repeatedly in a keyframe."})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@keyframes animate {
  10%{
    transform: rotate(10deg) translate(0, -100px) scale(0.25, 0.25) rotate(179deg);
  }
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`// pug

.frame: .center
  - for(let i = 0; i < 10; i++) 
    .line(class='line-' + i)
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`$numberOfLines: 10 - 1; // sync with HTML
$cubeSize: 40px;

.frame {
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
  background: #607d8b;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  width: $cubeSize;
  height: $cubeSize;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.line {
  box-sizing: border-box;
  position: absolute;
  width: $cubeSize;
  height: $cubeSize;
  top: 0;
  left: 0;
  background: rgba(255,255,255,.8);
  will-change: transform, box-shadow;
}

@for $i from 0 through $numberOfLines {
  $degree: 360 / $numberOfLines;

  .line-#{$i} {
    animation: line-#{$i} 10s ease-in-out infinite;
  }

  @keyframes line-#{$i} {
    0% {
      transform: rotate(0) translate(0, 0) scale(0.01);
      clip-path: none;
    }
    5% {
      transform: rotate(0) translate(0, 0) scale(1);
      clip-path: polygon(
        25% 0,
        50% 20%,
        75% 0,
        100% 20%,
        100% 60%,
        50% 95%,
        0 60%,
        0 20%
      );
    }
    15% {
      transform: rotate(($i * $degree) + deg) translate(0, 0) scale(1);
    }
    20% {
      transform: rotate(($i * $degree) + deg) translate(0, -100px)
        scale(0.25, 1);
      clip-path: none;
    }
    25% {
      transform: rotate(($i * $degree) + deg) translate(0, -100px)
        scale(0.25, 0.25) rotate(179deg);
    }
    30% {
      transform: rotate(($i * $degree) + deg) translate(0, -100px)
        scale(1, 0.25) rotate(179deg);
    }
    35% {
      transform: rotate(($i * $degree) + deg) translate(0, -60px) scale(1, 0.1);
    }
    40% {
      transform: rotate(($i * $degree) + deg) translate(0, -60px) scale(1, 0.1)
        translate(-30px, 0);
      box-shadow: none;
    }
    45% {
      transform: rotate(($i * $degree) + deg) translate(0, -60px) scale(10, 0.1)
        translate(30px, 0);
      box-shadow: 0 0 10px 10px white;
    }
    50% {
      transform: rotate(($i * $degree) + deg) translate(0, -60px) scale(10, 0.1);
      box-shadow: 0 0 10px 10px white;
    }
    55% {
      transform: rotate(($i * $degree) + deg) translate(0, 0px) scale(10, 0.1);
      border-radius: 0;
      box-shadow: none;
    }
    60% {
      transform: rotate(($i * $degree) + deg) translate(0, -80px)
        scale(0.5, 0.5) rotate(179deg);
      border-radius: 50%;
    }
    65% {
      transform: rotate(($i * $degree) + deg) translate(0, 0) scale(0.2, 0.2);
      border-radius: 50%;
    }
    70% {
      transform: rotate(($i * $degree) + deg) translate(0, -100px)
        scale(0.25, 1);
      border-radius: 0;
    }
    75% {
      transform: rotate(($i * $degree) + deg) translate(0, -100px)
        scale(0.25, 0.25);
      clip-path: none;
    }
    80% {
      transform: rotate(($i * $degree) + deg) translate(0, -50px)
        scale(0.5, 0.5);
      clip-path: polygon(
        25% 0,
        50% 20%,
        75% 0,
        100% 20%,
        100% 60%,
        50% 95%,
        0 60%,
        0 20%
      );
    }
    85% {
      transform: rotate(($i * $degree) + deg) translate(0, -50px)
        scale(0.5, 0.5) rotate(179deg) translate(-50px, 50px);
    }
    90% {
      transform: rotate(($i * $degree) + deg) translate(0, -30px)
        scale(0.5, 0.1);
      clip-path: none;
    }
    95% {
      transform: rotate(($i * $degree) + deg) translate(0, -10px)
        scale(0.1, 0.5);
    }
    100% {
      transform: rotate(($i * $degree) + deg) translate(0, -300px)
        scale(0.1, 0.5);
    }
  }
}
`})})]})}function $(r={}){const{wrapper:e}=Object.assign({},t(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(a,r)})):a(r)}export{$ as default};
//# sourceMappingURL=079-dafa6750.js.map
