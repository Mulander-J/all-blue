import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-83d9217b.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),`
`,t.jsxs(n.h1,{id:"45-button",children:[t.jsx(n.code,{children:"#45"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/45/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Button"})]}),`
`,t.jsx(n.p,{children:"Button: If normal hover effects aren't enough for you anymore, try this."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/rNoLpEa",target:"_blank",rel:"nofollow noopener noreferrer",children:"#45 CSS Challenge / Button"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#45 CSS Challenge / Button",src:"https://codepen.io/mulander/embed/rNoLpEa?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<button class="btn_svg">
		<span>hover me</span>
		<svg class="base">
			<rect class="bg" />
			<rect class="line" />
		</svg>
	</button>
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
	background: #5ca4ea;
	color: #fff;
}
$lineH: 58;
$padY: 8;
$width: 200;
$gap: 50;
$c: ($lineH + $padY * 2 + $width) * 2;
button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: pointer;
	appearance: none;
	border: none;
	position: relative;
	text-align: center;
	line-height: $lineH * 1px;
	font-size: 18px;
	letter-spacing: 1px;
	font-weight: 300;
	text-transform: uppercase;
	padding: $padY * 1px 12px;
	box-sizing: border-box;
	width: $width * 1px;
	color: #fff;
	background: none;
	.base {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		.line {
			position: relative;
			width: 100%;
			height: 100%;
			fill: none;
			stroke-width: 2;
			stroke: #fff;
			stroke-dasharray: $gap $c;
			stroke-dashoffset: $gap;
			transition: all 0.8s ease;
		}
		.bg {
			width: 100%;
			height: 100%;
			fill: hsl(210, 77%, 64%);
			stroke: hsl(209, 100%, 78%);
			stroke-width: 2;
			transition: all 0.8s ease;
		}
	}
	&:hover {
		.line {
			stroke-dashoffset: $c * -1;
			z-index: -1;
		}
		.bg {
			fill: hsl(210, 65%, 58%);
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=045-688cf48b.js.map
