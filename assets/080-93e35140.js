import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as t}from"./index-462ee75c.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(o){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{}),`
`,e.jsxs(n.h1,{id:"80-flexbox-accordeon",children:[e.jsx(n.code,{children:"#80"})," ",e.jsx(n.a,{href:"https://100dayscss.com/days/80/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Flexbox Accordeon"})]}),`
`,e.jsx(n.p,{children:"Flexbox Accordeon: I implemented the whole thing with Flexbox, but I'm sure you can think of many other variations to create this effect."}),`
`,e.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See the Pen ",e.jsx(n.a,{href:"https://codepen.io/mulander/pen/ExOqMKv",target:"_blank",rel:"nofollow noopener noreferrer",children:"#80 CSS Challenge / Flexbox Accordeon"}),`
by Mulander (`,e.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,e.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,e.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#80 CSS Challenge / Flexbox Accordeon",src:"https://codepen.io/mulander/embed/ExOqMKv?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,e.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.ele:hover {
  width: 100%
}
/* equals */
.ele:hover {
  flex-basis: 100%;
}
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis",target:"_blank",rel:"nofollow noopener noreferrer",children:"flex-basis"})}),`
`,e.jsx(n.p,{children:"The flex-basis CSS property describes the initial main size of the flex item before any free space is distributed according to the flex factors described in the flex property (flex-grow and flex-shrink)."}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Note: In case both flex-basis (other than auto) and width (or height in case of flex-direction: column) are set for an element, flex-basis has priority."}),`
`]}),`
`,e.jsx(n.p,{children:"Syntax"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`/* Specify <'width'> */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: 50%;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatically size based on the flex item's content */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: revert;
flex-basis: revert-layer;
flex-basis: unset;
`})}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="frame">
  <div class="wrapper">
    <div class="box"><span>First</span></div>
    <div class="box"><span>Second</span></div>
    <div class="box"><span>Third</span></div>
    <div class="box"><span>Fourth</span></div>
  </div>
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
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  background: #3498db;
  color: #000;
}
.wrapper {
  display: flex;
  height: 400px;
  width: 400px;
}
.box {
  position: relative;
  flex-basis: 25%;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(even) {
    background-color: transparent;
  }
  &:nth-child(odd) {
    background-color: antiquewhite;
  }
  span {
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    flex-basis: 100%;
    span {
      opacity: 1;
      transform: scale(1);
    }
  }
}
`})})]})}function j(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(r,o)})):r(o)}export{j as default};
//# sourceMappingURL=080-93e35140.js.map
