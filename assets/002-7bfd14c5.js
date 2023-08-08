import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-ae74a2ae.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a2466b54.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function a(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},t(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsxs(e.h1,{id:"2-menu-icon",children:[n.jsx(e.code,{children:"#2"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/2/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Menu Icon"})]}),`
`,n.jsx(e.p,{children:"Menu Icon: Used on almost every website by now, simple but impressively animated it becomes a real eye-catcher"}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/PoxVxzK",target:"_blank",rel:"nofollow noopener noreferrer",children:"#2 CSS Challenge / Menu Icon"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:" #2 CSS Challenge / Menu Icon",src:"https://codepen.io/mulander/embed/PoxVxzK?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsxs(e.p,{children:["Animation Frames: ",n.jsx(e.code,{children:"transformY"}),"(or ",n.jsx(e.code,{children:"top"}),"+",n.jsx(e.code,{children:"absolute"}),") + ",n.jsx(e.code,{children:"rotate"})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"You can skip the animation if there's only one frame."}),`
`]}),`
`,n.jsxs(e.p,{children:["Use ",n.jsx(e.code,{children:"input:checkbox"})," replace ",n.jsx(e.code,{children:"click"})," script."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`input[checkbox] {
  position: absolute;
  z-index: 4;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  appearance: none;
}
input[checkbox]:checked {
    /*...*/
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
    <div class="center">
        <div class="btn init" onclick="this.classList.remove('init')">
            <input class="trigger" type="checkbox"></input>
            <div class="icon">
                <i style="z-index: 1;"></i>
                <i style="z-index: 2;"></i>
                <i style="z-index: 3;"></i>
            </div>
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
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #3faf82;
  color: #fff;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --dur: 0.7s;
  --gap: calc(14px + 8px);
  --deg: 45deg;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.icon {
  width: 80px;
  display: flex;
  flex-flow: column nowrap;
  gap: 14px;
  cursor: pointer;
}
.icon i {
  position: relative;
  display: inline-block;
  height: 8px;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  transition: var(--dur) ease-in-out;
}
input.trigger {
  position: absolute;
  z-index: 4;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  appearance: none;
}
/* animations */
.icon i:nth-child(1) {
  animation: move1-rev var(--dur) ease-in-out backwards;
}
.icon i:nth-child(3) {
  animation: move3-rev var(--dur) ease-in-out backwards;
}
.trigger:checked + .icon i:nth-child(1) {
  animation: move1 var(--dur) ease-in-out forwards;
}
.trigger:checked ~ .icon i:nth-child(3) {
  animation: move3 var(--dur) ease-in-out forwards;
}
.trigger:checked ~ .icon i:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}
.btn.init i {
  animation: none;
}
/* keyframes */
@keyframes move1 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(var(--gap)) rotate(0);
  }
  100% {
    transform: translateY(var(--gap)) rotate(var(--deg));
  }
}
@keyframes move1-rev {
  0% {
    transform: translateY(var(--gap)) rotate(var(--deg));
  }
  50% {
    transform: translateY(var(--gap)) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
@keyframes move3 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(calc(-1 * var(--gap))) rotate(0);
  }
  100% {
    transform: translateY(calc(-1 * var(--gap))) rotate(
        calc(180deg - var(--deg))
      );
  }
}
@keyframes move3-rev {
  0% {
    transform: translateY(calc(-1 * var(--gap))) rotate(
        calc(180deg - var(--deg))
      );
  }
  50% {
    transform: translateY(calc(-1 * var(--gap))) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
`})})]})}function b(r={}){const{wrapper:e}=Object.assign({},t(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(a,r)})):a(r)}export{b as default};
//# sourceMappingURL=002-7bfd14c5.js.map
