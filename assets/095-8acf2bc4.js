import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",strong:"strong",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),`
`,t.jsxs(n.h1,{id:"95-pig",children:[t.jsx(n.code,{children:"#95"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/95/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Pig"})]}),`
`,t.jsx(n.p,{children:"Pig: Innocent, cute and consists entirely of simple basic shapes."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/OJrxzEw",target:"_blank",rel:"nofollow noopener noreferrer",children:"#95 CSS Challenge / Pig"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#95 CSS Challenge / Pig",src:"https://codepen.io/mulander/embed/OJrxzEw?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.h3,{id:"transformskew",children:"Transform.Skew"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew",target:"_blank",rel:"nofollow noopener noreferrer",children:t.jsx(n.code,{children:"skew()"})})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"skew()"})," CSS function defines a transformation that skews an element on the 2D plane. Its result is a ",t.jsx(n.code,{children:"<transform-function>"})," data type."]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Syntax"})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"skew()"})," function is specified with either one or two values, which represent the amount of skewing to be applied in each direction."]}),`
`,t.jsx(n.p,{children:"If you only specify one value it is used for the x-axis and there will be no skewing on the y-axis."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-yaml",children:`skew(ax)

skew(ax, ay)
`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="face">
			<div class="reflect">
				<div class="ear"></div>
				<div class="eye"></div>
			</div>
			<div class="nose"></div>
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
	background: #ffdcb5;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.face {
	position: relative;
	width: 160px;
	height: 160px;
	background: hsl(356, 86%, 77%);
	border-radius: 50%;
	.reflect {
		position: absolute;
		width: 80px;
		height: 100%;
		-webkit-box-reflect: right 0;
		.ear {
			position: absolute;
			width: 100px;
			height: 100px;
			background: hsl(356, 100%, 86%);
			border: 7px solid hsl(356, 86%, 77%);
			transform: skew(10deg, 10deg) translateY(11px);
			border-radius: 10%;
			clip-path: polygon(0 0, 50% 0, 0 50%);
			box-shadow: inset 1px 0px 10px 2px hsl(356, 86%, 67%);
		}
		.eye {
			position: absolute;
			top: 30%;
			right: 20%;
			box-sizing: border-box;
			height: 22px;
			width: 22px;
			border: 9px solid #fff;
			background: #000;
			border-radius: 50%;
			animation: blink 15s ease both infinite;
		}
	}
	.nose {
		position: absolute;
		height: 50px;
		width: 60px;
		top: 80px;
		left: 50px;
		background: hsl(356, 100%, 86%);
		border-radius: 90px/80px;
		box-shadow: 0px 4px 10px 2px hsl(356, 100%, 76%);
		&::before,
		&::after {
			content: "";
			position: absolute;
			top: 15px;
			left: 50%;
			height: 12px;
			width: 12px;
			border-radius: 50%;
			background: hsl(356, 51%, 60%);
			box-shadow: inset 1px 0 4px 2px hsl(356, 51%, 40%);
		}
		&::before {
			transform: translateX(-16px);
		}
		&::after {
			transform: translateX(4px);
		}
	}
}

@keyframes blink {
	0%,
	23%,
	25%,
	65%,
	67%,
	89%,
	91%,
	100% {
		transform: scaleY(1);
	}

	24%,
	66%,
	90% {
		transform: scaleY(0);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=095-8acf2bc4.js.map
