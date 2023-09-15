import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-8438cb78.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"66-sparkle-checkbox",children:[t.jsx(n.code,{children:"#66"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/66/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Sparkle Checkbox"})]}),`
`,t.jsx(n.p,{children:"Sparkle Checkbox: Looks quite ordinary at first, but click on it for a little surprise."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/BavRxMy",target:"_blank",rel:"nofollow noopener noreferrer",children:"#66 CSS Challenge / Sparkle Checkbox"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#66 CSS Challenge / Sparkle Checkbox",src:"https://codepen.io/mulander/embed/BavRxMy?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .box
	input#checker(type="checkbox", name="isChecked")
	label.trigger(for="checker")
		.lines: .quarter
			- for(let i = 0; i < 4; i++)
				.line
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
	background: #5a717b;
}
.box {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	input[type="checkbox"] {
		appearance: none;
		display: none;
		&:checked {
			& ~ .trigger {
				border-width: 12px;
				background: #5fd17a;
				.line::after {
					transform: scaleX(1);
					opacity: 0;
					transition: all 0.5s ease-in-out;
				}
			}
		}
	}
	.trigger {
		box-sizing: border-box;
		display: block;
		height: 32px;
		width: 32px;
		background: transparent;
		border: 1px solid #fff;
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
		.lines {
			position: absolute;
			top: 0;
			left: 0;
			box-sizing: border-box;
			height: 32px;
			width: 32px;
			-webkit-box-reflect: below -32px;
			.quarter {
				-webkit-box-reflect: right -32px;
				.line {
					position: absolute;
					width: 20px;
					height: 1px;
					left: 0;
					top: 0;
					transform-origin: 16px 16px;
					@for $i from 1 through 4 {
						&:nth-child(#{$i}) {
							transform: rotate(30deg * ($i - 1));
						}
					}
					&::after {
						content: "";
						position: absolute;
						width: 20px;
						height: 1px;
						left: -40px;
						top: 16px;
						border-radius: 2px;
						background: #fff;
						transform-origin: right bottom;
						transform: scaleX(0);
						opacity: 1;
					}
				}
			}
		}
	}
}
`})})]})}function k(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{k as default};
//# sourceMappingURL=066-4035aac2.js.map
