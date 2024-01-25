import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"89-animated-pattern",children:[t.jsx(n.code,{children:"#89"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/89/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Animated Pattern"})]}),`
`,t.jsx(n.p,{children:"Animated Pattern: Looking closely will you make feel dizzy, but you have to if you want to figure out the movements."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/VwqzpZp",target:"_blank",rel:"nofollow noopener noreferrer",children:"#89 CSS Challenge / Animated Pattern"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#89 CSS Challenge / Animated Pattern",src:"https://codepen.io/mulander/embed/VwqzpZp?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

- let total = 10 * 10 / 2;
.frame: .reflect
	- for(let i = 0; i < total; i++)
		.cell
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
	background: #75409a;
	filter: contrast(2);
}
.reflect {
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	height: 100%;
	width: 100%;
	-webkit-box-reflect: below var(--offset);
	animation: strike 10s ease-in-out both alternate infinite;
}
@property --offset {
	syntax: "<percentage>";
	inherits: false;
	initial-value: 0%;
}
@keyframes strike {
	0% {
		--offset: 0%;
	}
	30%,
	70% {
		--offset: -100%;
		transform: scale(1, 1);
	}
	50% {
		transform: scale(2, 2);
	}
	100% {
		--offset: -200%;
	}
}
.cell {
	position: relative;
	aspect-ratio: 1/1;
	width: 100%;
	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 37.5%;
		left: 0;
		width: 100%;
		height: 25%;
		background: #9af80d;
	}
	&::before {
		animation: moveY 4s ease-in-out both infinite;
		opacity: 0.9;
	}
	&::after {
		opacity: 0.8;
		animation: moveX 4s ease-in-out both infinite;
	}
}

@keyframes moveX {
	0% {
		transform: rotate(0);
	}
	20% {
		transform: rotate(45deg);
	}
	40% {
		transform: rotate(45deg) translateX(-20px);
	}
	60%,
	80% {
		transform: rotate(45deg) scaleY(2) scaleX(0.5);
	}
	100% {
		transform: rotate(90deg);
	}
}
@keyframes moveY {
	0% {
		transform: rotate(90deg);
	}
	20% {
		transform: rotate(135deg);
	}
	40% {
		transform: rotate(135deg) translateY(-10px);
	}
	60% {
		transform: rotate(135deg) scaleY(2) scaleX(0.5);
	}
	80% {
		transform: rotate(180deg) scaleY(2) scaleX(0.5);
	}
	100% {
		transform: rotate(180deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=089-4d149605.js.map
