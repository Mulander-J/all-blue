import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-94a16e9f.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c1bd5c42.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{}),`
`,e.jsxs(n.h1,{id:"78-hover-shadow",children:[e.jsx(n.code,{children:"#78"})," ",e.jsx(n.a,{href:"https://100dayscss.com/days/78/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Hover Shadow"})]}),`
`,e.jsx(n.p,{children:"Hover Shadow: Three similar hover effects for buttons, which nevertheless create quite different results."}),`
`,e.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See the Pen ",e.jsx(n.a,{href:"https://codepen.io/mulander/pen/jOQgQRB",target:"_blank",rel:"nofollow noopener noreferrer",children:"#78 CSS Challenge / Hover Shadow"}),`
by Mulander (`,e.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,e.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,e.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#78 CSS Challenge / Hover Shadow",src:"https://codepen.io/mulander/embed/jOQgQRB?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`// pug
.frame: .center 
  - for(let i = 0; i < 3; i++) 
    .button hover me
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
	color: #fff;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.button {
	margin: 20px 0;
	width: 200px;
	height: 60px;
	background: #fff;
	color: #34495e;
	font-size: 18px;
	line-height: 58px;
	font-weight: 400;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	@for $i from 1 through 3 {
		&:nth-child(#{$i}):hover {
			transform: scale(1.02 + $i * 0.01) translate3d(0, 0, 0);
			box-shadow: (2px * $i) (4px * $i) (6px * $i) 0 rgba(0, 0, 0, 0.25);
		}
	}
}
`})})]})}function j(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{j as default};
//# sourceMappingURL=078-e752c02f.js.map
