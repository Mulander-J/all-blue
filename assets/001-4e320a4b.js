import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-83d9217b.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function t(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},i(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsxs(e.h1,{id:"1-100-days-css",children:[n.jsx(e.code,{children:"#1"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/1/",target:"_blank",rel:"nofollow noopener noreferrer",children:"100 Days CSS"})]}),`
`,n.jsx(e.p,{children:"100 Days CSS: An easy start into the challenge with a custom build number with gradient."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/LYXqJrm",target:"_blank",rel:"nofollow noopener noreferrer",children:"#1 CSS Challenge / 100 Days CSS"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#1 CSS Challenge / 100 Days CSS",src:"https://codepen.io/mulander/embed/LYXqJrm?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsxs(e.p,{children:["If ",n.jsx(e.code,{children:"z-index"})," is set for both the element and the pseudo-class, the pseudo-class's ",n.jsx(e.code,{children:"z-index"})," will fail."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.item{
  /* ... */
  z-index: 1;
}
.item::after{
  /* ... */
  /* not work */
  z-index: -1;
}
`})}),`
`,n.jsxs(e.p,{children:["Fix Solution: Use ",n.jsx(e.code,{children:"transform-3d"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.item{
  /* ... */
  z-index: 1;
  transform-style: preserve-3d;
}
.item::after{
  /* ... */
  z-index: -1;
  transform: translateZ(-1px);
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <div class="number">
        <i style="z-index:3"></i>
        <i style="z-index:2;margin: 0 -6px;"></i>
        <i style="z-index:1"></i>
    </div>
    <p>DAYS</p>
    <p>CSS CHALLENGE</p>
  </div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/*
    delete the following line if no text is used
    edit the line if you wanna use other fonts
*/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:700,300);

/*use only the available space inside the 400x400 frame*/

* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.frame {
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
  background: linear-gradient(to top right, #43389f 0%, #4ec6ca 100%);
	animation: animate infinite 10s ease;
  color: #fff;
  font-family: "Courier New", "Courier", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@keyframes animate {
	50%{ filter: hue-rotate(0deg) }
	0%,100%{ filter: hue-rotate(360deg) }
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* word lines */
  p {
    /* line 2 */
    &:nth-child(2) {
      position: relative;
      z-index: 20;
      display: block;
      font-size: 82px;
      line-height: 60px;
      text-transform: uppercase;
      font-weight: 700;
      margin-top: 6px;
    }
    /* line 3 */
    &:nth-child(3) {
      position: relative;
      z-index: 20;
      display: block;
      font-size: 23px;
      line-height: 20px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.04em;
    }
  }
  .number {
    display: flex;
    height: 100px;
    margin: 10px 0;
    align-items: center;
    justify-self: start;
    i {
      /* Number-1 */
      &:nth-child(1) {
        position: relative;
        height: 100%;
        width: 24px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2);
        /* fix z-index */
        transform-style: preserve-3d;
        &::before {
          position: absolute;
          content: "";
          height: 40px;
          width: 20px;
          border-radius: 3px;
          background: #fff;
          z-index: -1;
          transform-origin: 0 0;
          transform: rotate(50deg) translateY(-2px) translateZ(-1px);
        }
      }
      /* Number-0 */
      &:nth-child(n + 2) {
        display: inline-block;
        box-sizing: border-box;
        height: 100%;
        aspect-ratio: 1/1;
        border-radius: 50%;
        border: 24px solid #fff;
        box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }
}
`})})]})}function j(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(t,r)})):t(r)}export{j as default};
//# sourceMappingURL=001-4e320a4b.js.map
