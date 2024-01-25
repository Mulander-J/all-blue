import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-83d9217b.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre"},a(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsxs(e.h1,{id:"53-range-slider",children:[n.jsx(e.code,{children:"#53"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/53/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Range Slider"})]}),`
`,n.jsx(e.p,{children:"Range Slider: Let's face it, the plane HTML inputs are often boring. But you can easily spice them up with some CSS."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/LYMxJjM",target:"_blank",rel:"nofollow noopener noreferrer",children:"#53 CSS Challenge / Range Slider"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#53 CSS Challenge / Range Slider",src:"https://codepen.io/mulander/embed/LYMxJjM?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'input[type="range"]'})," css beautify"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clear default"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`input[type="range"] {
  -webkit-appearance: none;
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clear fosuc"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`input[type="range"]:focus {
  outline: none;
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Set track"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/*chrome、safari*/
input[type="range"]::-webkit-slider-runnable-track {
  background-color: #eee;
}
/*firefox*/
input[type="range"]::-moz-range-track {
  background-color: #eee;
}
/*IE*/
input[type="range"]::-ms-track {
  color: transparent;
  border-color: transparent;
  background-color: #eee;
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Set thumb"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/*chrome，safar*/
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 3px solid #fff;
  height: 7px;
  width: 7px;
  border-radius: 8px;
  background: red;
  cursor: pointer;
}
/*firefox*/
input[type="range"]::-moz-range-thumb {
  border: 3px solid #fff;
  height: 7px;
  width: 7px;
  border-radius: 8px;
  background: red;
  cursor: pointer;
}
/*IE*/
input[type="range"]::-ms-thumb {
  border: 3px solid #fff;
  height: 7px;
  width: 7px;
  border-radius: 8px;
  background: red;
  cursor: pointer;
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Fill & Unfill"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/*firefox-fill*/
input[type="range"]::-moz-range-progress {
  background: linear-gradient(to right, red, white 100%, white);
  height: 20px;
  border-radius: 10px;
}
/*IE*/
/*unfill*/
input[type="range"]::-ms-fill-upper {
  height: 20px;
  border-radius: 10px;
  background: #ffffff;
}
/*fill*/
input[type="range"]::-ms-fill-lower {
  height: 20px;
  border-radius: 10px;
  background: linear-gradient(to right, red, white 100%, white);
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <input type="range" />
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
  overflow: hidden;
  font-family: "Open Sans", Helvetica, sans-serif;
  background: skyblue;
  color: #fff;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: #fff;
  border-radius: 3px;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 5px 15px;
}
[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  margin: 0;
  outline: 0;
  background-color: transparent;
  width: 300px;
}
[type="range"]:focus {
  border: none;
  outline: none;
}
[type="range"]::-webkit-slider-runnable-track {
  height: 4px;
  border-radius: 4px;
  background: #f44336;
}
[type="range" i]::-webkit-slider-container {
  height: 20px;
  overflow: hidden;
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: -8px;
  border: 2px solid #f44336;
  background: #fff url(https://100dayscss.com/codepen/slider-thumb.png) center
    center no-repeat;
  background-size: 50% 50%;
  cursor: pointer;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.1);
}
`})})]})}function j(r={}){const{wrapper:e}=Object.assign({},a(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(o,r)})):o(r)}export{j as default};
//# sourceMappingURL=053-88ecfbe2.js.map
