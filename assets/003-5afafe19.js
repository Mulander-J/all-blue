import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-976f87ca.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e8c5d2f5.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function a(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li",pre:"pre"},i(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsxs(e.h1,{id:"3-the-pyramide",children:[n.jsx(e.code,{children:"#3"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/3/",target:"_blank",rel:"nofollow noopener noreferrer",children:"The Pyramide"})]}),`
`,n.jsx(e.p,{children:"The Pyramide: Not as challenging as the real pyramids in Egypt, but the shadow path is not easy."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/qBQvaEr",target:"_blank",rel:"nofollow noopener noreferrer",children:"#3 CSS Challenge / The Pyramide"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:" #3 CSS Challenge / The Pyramide",src:"https://codepen.io/mulander/embed/qBQvaEr?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.h3,{id:"1design-ideas-for-shadows",children:"1.Design ideas for shadows"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Horizontal shading"})}),`
`]}),`
`,n.jsx(e.p,{children:"Split into left and right sides, with one side at a slight angle."}),`
`,n.jsx(e.p,{children:"In this case - Mountain, is reproduced by a large triangle overlaid with an inclined triangle."}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"Vertical shading"})}),`
`]}),`
`,n.jsx(e.p,{children:"Attached to an inverted graph, with height and angle varying accordingly."}),`
`,n.jsx(e.p,{children:"In this case - Ground, is reproduced by an inverted triangle."}),`
`,n.jsx(e.h3,{id:"2transform-origin",children:"2.transform origin"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"transform-origin"})," is used to set the base (center) of the animation, and applies to all block-level elements and some inline elements."]}),`
`,n.jsxs(e.p,{children:["It must be used in conjunction with ",n.jsx(e.code,{children:"transform"}),". By default, the reference point for an element's animation is the center of the element's box."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Horizontal: left    center      right
            0       50%       100%
Vertical:   top    center     bottom
            0       50%       100%
Default:    50% 50%  
            center center
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`transform-origin: x-axis y-axis z-axis;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`-x  -y  -z
  \\  |  /
     |
  ↙  ↓  ↘
+z  +y  +x

`})}),`
`,n.jsx(e.h3,{id:"3clip-path",children:"3.clip-path"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`clip-path: <clip-source> | [ <basic-shape> || <geometry-box> ] | none
`})}),`
`,n.jsx(e.p,{children:"e.g. 1.circle"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.round{
  height:100px;
  width:100px;
  border-radius: 50%;
  overflow:hidden;
}
/* equals */
.round{
  height:100px;
  width:100px;
  clip-path: circle(50px at 50px 50px);
}
`})}),`
`,n.jsx(e.p,{children:"e.g. 2.triangle"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.triangle{
  width: 0;
  height: 0;
  border-left: var(--halfWidth) solid transparent;
  border-right: var(--halfWidth) solid transparent;
  border-bottom: var(--height) solid var(--bgColor);
  border-top: none;
}
/* equals */
.triangle{
  height: var(--height);
  width: var(--Width);
  background: var(--bgColor);
  clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <div class="circle">
      <div class="sky"></div>
      <div class="sun"></div>
      <div class="side-full"></div>
      <div class="side-right"></div>
      <div class="shadow"></div>
      <div class="ground"></div>
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
  background: #272c34;
  color: #fff;
  --dur: 4s;
  --hGround: 56px;
  --hSide: 58px;
  --cWall: #f4f4f4;
  --cWallS: #dddada;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 100px;
}
.circle {
  position: relative;
  width: 180px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: #fff;
  clip-path: circle(90px at 90px 90px);
  overflow: hidden;
  animation: an-circle var(--dur) ease-in-out infinite;
}
.sky {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #7ddffc;
  animation: an-sky var(--dur) ease-in-out infinite;
}
.sun {
  position: absolute;
  width: 34px;
  z-index: 2;
  aspect-ratio: 1/1;
  border-radius: 50%;
  top: 7px;
  left: calc(50% - 32px / 2);
  background-color: #ffef00;
  transform-origin: 50% 400%;
  animation: an-sun var(--dur) ease-in-out infinite;
}
.side-full {
  position: absolute;
  bottom: var(--hGround);
  left: calc(50% - var(--hSide));
  width: 0;
  height: 0;
  border-left: var(--hSide) solid transparent;
  border-right: var(--hSide) solid transparent;
  border-bottom: var(--hSide) solid var(--cWall);
  border-top: none;
  animation: an-side-full var(--dur) ease-in-out infinite;
}
.side-right {
  position: absolute;
  bottom: var(--hGround);
  left: 50%;
  height: var(--hSide);
  width: var(--hSide);
  background: var(--cWallS);
  clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
  animation: an-side-right var(--dur) ease-in-out infinite;
}
.shadow {
  position: absolute;
  z-index: 2;
  bottom: calc(var(--hGround) - 30px);
  left: -80px;
  height: 30px;
  width: 360px;
  background: rgba(0, 0, 0, 0.2);
  clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
  transform-origin: 50% 0%;
  animation: an-shadow var(--dur) ease-in-out infinite;
}
.ground {
  position: absolute;
  width: 100%;
  height: var(--hGround);
  bottom: 0;
  background-color: #f0de75;
  animation: an-ground var(--dur) ease-in-out infinite;
}

@keyframes an-circle {
  0%,
  100% {
    opacity: 0;
  }
  25%,
  75% {
    opacity: 1;
  }
}
@keyframes an-sky {
  0%,
  100% {
    background: #272c34;
  }
  25%,
  75% {
    background: #7ddffc;
  }
}
@keyframes an-sun {
  0% {
    background-color: #f57209;
    transform: rotate(-70deg);
  }
  25% {
    background: #ffef00;
    transform: rotate(-28deg);
  }
  75% {
    background: #ffef00;
    transform: rotate(0);
  }
  100% {
    transform: rotate(70deg);
    background-color: #f57209;
  }
}
@keyframes an-side-full {
  0%,
  100% {
    border-bottom-color: #272c34;
  }
  25% {
    border-bottom-color: var(--cWall);
  }
  75% {
    border-bottom-color: var(--cWallS);
  }
}
@keyframes an-side-right {
  0%,
  100% {
    background: #272c34;
  }
  25% {
    background: var(--cWallS);
  }
  75% {
    background: var(--cWall);
  }
}
@keyframes an-shadow {
  0% {
    transform: scaleY(0);
    clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
  }
  25% {
    transform: scaleY(1);
    clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
  }
  55% {
    transform: scaleY(0.4);
  }
  75% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
    clip-path: polygon(115px 0%, 231px 0%, 0% 100%);
  }
}
@keyframes an-ground {
  0%,
  100% {
    background: #272c34;
  }
  25%,
  75% {
    background: #f0de75;
  }
}
`})})]})}function v(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(a,r)})):a(r)}export{v as default};
//# sourceMappingURL=003-5afafe19.js.map
