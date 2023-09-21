import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-2b9b71ef.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"94-tree",children:[t.jsx(n.code,{children:"#94"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/94/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tree"})]}),`
`,t.jsx(n.p,{children:"Tree: Ever wanted to be a gardener? Go on and code yourself a tree."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/mdaBpRM",target:"_blank",rel:"nofollow noopener noreferrer",children:"#94 CSS Challenge / Tree"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#94 CSS Challenge / Tree",src:"https://codepen.io/mulander/embed/mdaBpRM?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="tree">
		<div class="leaves"></div>
		<div class="trunk">
			<div class="branch"></div>
			<div class="branch"></div>
			<div class="branch"></div>
			<div class="branch"></div>
		</div>
		<div class="base"></div>
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
	background: honeydew;
}
.tree {
	position: absolute;
	height: 200px;
	width: 200px;
	top: 100px;
	left: 100px;
	.base {
		position: absolute;
		left: 10%;
		bottom: 0;
		height: 4px;
		width: 80%;
		border-radius: 4px;
		background: saddlebrown;
		transform: scaleX(0);
		animation: scaleX 0.7s ease-in-out both;
	}
	.trunk {
		position: relative;
		margin: 0 auto;
		height: 100%;
		width: 4px;
		background: #e8c87e;
		border-radius: 2px;
		transform: scaleY(0);
		transform-origin: center bottom;
		animation: scaleY 0.7s ease-in-out both;
		.branch {
			position: absolute;
			width: 4px;
			height: 20px;
			border-radius: 2px;
			background: #e8c87e;
			transform-origin: 0 0;
		}
	}

	.leaves {
		position: absolute;
		top: -40px;
		width: 100%;
		height: 100%;
		transform-origin: center bottom;
		transform: scaleX(0);
		animation: scaleX 1s 0.7s ease-in-out both;
		background: linear-gradient(
			to right,
			seagreen,
			seagreen 50%,
			green 50%,
			green
		);
		clip-path: polygon(
			50% 0,
			30% 20%,
			45% 20%,
			20% 60%,
			35% 60%,
			0 100%,
			100% 100%,
			65% 60%,
			80% 60%,
			55% 20%,
			70% 20%,
			50% 0
		);
	}
}

.branch:nth-child(1) {
	transform: rotate(45deg) translateX(20px);
}
.branch:nth-child(2) {
	transform: rotate(135deg) translate(30px, -34px) scaleY(1.2);
}
.branch:nth-child(3) {
	transform: rotate(45deg) translate(50px, 20px) scaleY(1.5);
}
.branch:nth-child(4) {
	transform: rotate(135deg) translate(80px, -85px) scaleY(1.7);
}

@keyframes scaleX {
	to {
		transform: scaleX(1);
	}
}
@keyframes scaleY {
	0% {
		transform: scaleY(0);
	}

	60% {
		transform: scaleY(1.1);
	}
	80% {
		transform: scaleY(0.95);
	}
	100% {
		transform: scaleY(1);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=094-71879c1c.js.map
