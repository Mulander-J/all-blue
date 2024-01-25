import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{}),`
`,n.jsxs(t.h1,{id:"99-circle-square",children:[n.jsx(t.code,{children:"#99"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/99/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Circle-Square"})]}),`
`,n.jsx(t.p,{children:"Circle-Square: Click me for a moment of joy and excitement"}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/vYveazL",target:"_blank",rel:"nofollow noopener noreferrer",children:"#99 CSS Challenge / Circle-Square"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#99 CSS Challenge / Circle-Square",src:"https://codepen.io/mulander/embed/vYveazL?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`// pug

.frame
	input#checker(type="checkbox", name="check")
	label.dot(for="checker"): .ring
	.bg
	.lines
		- for(let i = 0; i < 20; i++)
			.line
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`$lines: 20;

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
	background: hsl(282, 44%, 47%);
}

input[type="checkbox"] {
	display: none;
}

.dot {
	position: absolute;
	display: block;
	z-index: 2;
	top: 180px;
	left: 180px;
	height: 40px;
	width: 40px;
	background: #fff;
	box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
	border-radius: 50%;
	cursor: pointer;
	.ring {
		position: absolute;
		top: -1px;
		left: -1px;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		border: 2px solid #fff;
		transform: scale(0);
		opacity: 1;
	}
}

.lines {
	position: absolute;
	width: 300px;
	height: 300px;
	top: 50px;
	left: 50px;
	transform: scale(0);

	.line {
		position: absolute;
		height: 26px;
		width: 4px;
		background: #fff;
		top: 137px;
		left: 148px;
		@for $i from 1 through $lines {
			&:nth-child(#{$i}) {
				transform: rotate(360deg / $lines * ($i - 1)) translateY(-120px);
			}
		}
	}
}

.bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 400px;
	height: 400px;
	transform-origin: 200px 200px;
	background: hsl(282, 50%, 67%);
	border-radius: 50%;
	transform: scale(0);
}

.dot,
.bg {
	transition: all 0.6s ease-in-out;
}

.ring,
.lines {
	transition: opacity 0.3s ease-in, transform 0.6s 0.15s ease-in;
}

#checker:checked ~ .dot {
	border-radius: 0;
	transform: rotate(180deg) scale(1.1);
}

#checker:checked ~ .dot .ring {
	opacity: 0;
	transform: scale(2);
	transition: transform 0.6s ease-out, opacity 0.3s ease-out 0.3s;
}

#checker:checked ~ .lines {
	opacity: 0;
	transform: scale(0.75);
	transition: transform 0.6s ease-out, opacity 0.3s ease-out 0.3s;
}

#checker:checked ~ .bg {
	transform: scale(4);
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=099-18b7be55.js.map
