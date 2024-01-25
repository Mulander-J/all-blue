import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"64-button",children:[t.jsx(n.code,{children:"#64"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/64/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Button"})]}),`
`,t.jsx(n.p,{children:"Button: A nice effect for very important buttons with that certain wow factor."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/xxmdYoK",target:"_blank",rel:"nofollow noopener noreferrer",children:"#64 CSS Challenge / Button"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#64 CSS Challenge / Button",src:"https://codepen.io/mulander/embed/xxmdYoK?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="button">Hover</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`.frame {
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
	background: skyblue;
}
.button {
	position: absolute;
	z-index: 2;
	width: 200px;
	height: 70px;
	top: 160px;
	left: 100px;
	color: #2c3e50;
	background: #fff;
	font-size: 25px;
	font-weight: 400;
	line-height: 68px;
	letter-spacing: 1px;
	text-transform: uppercase;
	text-align: center;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	transform-style: preserve-3d;
	&::after {
		content: "";
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: blueviolet;
		transition: all 0.3s ease-in-out;
		transform: translate3d(13px, 12px, -10px);
	}
	&:hover {
		background: blueviolet;
		color: #ffff;
		transform: translate3d(13px, 12px, 0);
		&::after {
			background: #fff;
			transform: translate3d(-15px, -10px, -10px);
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=064-209e13f2.js.map
