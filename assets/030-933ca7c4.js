import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-94a16e9f.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c1bd5c42.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"30-random-line",children:[t.jsx(n.code,{children:"#30"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/30/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Random Line"})]}),`
`,t.jsx(n.p,{children:"Random Line: What can I say, it is a line. A line that moves and circles something. What should it be? That's for you to decide."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/qBLbXOa",target:"_blank",rel:"nofollow noopener noreferrer",children:"#30 CSS Challenge / Random Line"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#30 CSS Challenge / Random Line",src:"https://codepen.io/mulander/embed/qBLbXOa?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="reflect1">
		<div class="reflect">
			<svg viewBox="0 0 400 65">
				<path d="M0,4.67941475 C0,4.67941475 42.5049504,21.0558251 95.0896109,21.0558243 C147.674271,21.0558235 149.896403,2 196.011077,2 C242.125751,2 242.386923,58.3217419 200.000004,58.3217392 C157.613085,58.3217365 163.18433,13.5133498 212.755329,13.5133498 C262.326328,13.5133498 284.162205,38.9236796 335.140774,38.9236794 C386.119343,38.9236791 399.999996,30.1608696 399.999996,30.1608696"></path>
			</svg>
		</div>
	</div>
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
	font-family: "Open Sans", Helvetica, sans-serif;
	background: #333;
	color: #0f0;
}
.frame::before {
	content: "";
	position: absolute;
	top: 180px;
	left: 180px;
	width: 30px;
	height: 30px;
	border: 4px solid;
	border-radius: 50%;
	animation: ring 2.5s ease infinite both;
}
@keyframes ring {
	0%,
	50% {
		opacity: 1;
		transform: scale(0);
	}
	70%,
	100% {
		opacity: 0;
		transform: scale(0.8);
	}
}

.reflect1 {
	position: absolute;
	height: 200px;
	width: 400px;
	-webkit-box-reflect: below 0;
	.reflect {
		position: absolute;
		top: 0;
		left: 0;
		width: 200px;
		height: 400px;
		-webkit-box-reflect: right 0;
		svg {
			position: absolute;
			top: 50%;
			transform: translateY(-50%) rotate(45deg);
			filter: hue-rotate(0deg);
			width: 400px;
			height: 65px;
			fill: none;
			stroke: currentColor;
			stroke-width: 3px;
			stroke-linecap: round;
			stroke-dasharray: 50 660;
			stroke-dashoffset: 780;
			animation: line 2.5s linear infinite both;
		}
	}
}

@keyframes line {
	to {
		stroke-dashoffset: 70;
		filter: hue-rotate(360deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=030-933ca7c4.js.map
