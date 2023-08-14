import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-976f87ca.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-e8c5d2f5.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(o){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},t(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(e.h1,{id:"74-pagination",children:[n.jsx(e.code,{children:"#74"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/74/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Pagination"})]}),`
`,n.jsx(e.p,{children:"Pagination: Does anyone still use pagination at all or is everything now equipped with endless scroll?"}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/MWzdLWY",target:"_blank",rel:"nofollow noopener noreferrer",children:"#74 CSS Challenge / Pagination"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#74 CSS Challenge / Pagination",src:"https://codepen.io/mulander/embed/MWzdLWY?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsxs(e.p,{children:["CSS ",n.jsx(e.code,{children:"counter()"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.parent {
  /*重置计数器*/
  counter-reset: key;
}
.elements::after {
  /* 增加计数器值 */
  counter-increment: key;
  /* 显示计数器 */
  content: "Label:" + counter(key);
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`//pug

.frame: .center: .pagination
	- for (var x = 0; x < 4; x++)
		input(type="radio" name="page")

// html
<div class="frame">
  <div class="center">
    <div class="pagination">
      <input type="radio" name="page" />
      <input type="radio" name="page" />
      <input type="radio" name="page" />
      <input type="radio" name="page" />
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`* {
  padding: 0;
  margin: 0;
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
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  color: #fff;
  background: #1abc9c;
}
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.pagination {
  display: flex;
  gap: 10px;
  counter-reset: page;
}
input[type="radio"] {
  appearance: none;
  outline: none;
}
.pagination input {
  position: relative;
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #fff;
  color: #fff;
  transition: background 0.3s ease-in-out;
}
.pagination input::before {
  /* 增加计数器值 */
  counter-increment: page;
  /* 显示计数器 */
  content: counter(page);
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  background: inherit;
  color: inherit;
  background: none;
  transition: color 0.5s ease-in-out;
}
.pagination input::after {
  display: block;
  content: "";
  position: absolute;
  z-index: -1;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: 50%;
  background: #fff;
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}
.pagination input:hover {
  background: #16a085;
}
.pagination input:checked {
  color: #1abc9c;
  background: none;
}
.pagination input:checked::after {
  transform: scale(1);
}
`})})]})}function j(o={}){const{wrapper:e}=Object.assign({},t(),o.components);return e?n.jsx(e,Object.assign({},o,{children:n.jsx(r,o)})):r(o)}export{j as default};
//# sourceMappingURL=074-893ca258.js.map
