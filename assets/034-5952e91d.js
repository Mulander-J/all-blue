import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-04ed5b14.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),`
`,t.jsxs(n.h1,{id:"34-hello",children:[t.jsx(n.code,{children:"#34"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/34/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Hello"})]}),`
`,t.jsx(n.p,{children:"Hello: Yes, another animation of some text. But this time I used SVGs as a base. What kind of animation will you make?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/Yzdwomp",target:"_blank",rel:"nofollow noopener noreferrer",children:"#34 CSS Challenge / Hello"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#34 CSS Challenge / Hello",src:"https://codepen.io/mulander/embed/Yzdwomp?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<svg viewBox="0 0 1000 300">
			<use href="#line-text" class="text"></use>
			<use href="#line-text" class="text"></use>
			<symbol id="line-text">
				<text text-anchor="middle" x="50%" y="50%" dy=".4em">hello</text>
			</symbol>
		</svg>
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
	background: #EA4C89;
	color: #fff;
}
.center {
	position: absolute;
	width: 180px;
	height: 40px;
	padding: 10px;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: 16rem;
	font-weight: 800;
	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		left: 0;
		background: #fff;
		animation: line 0.8s ease both;
	}
	&::before {
		top: -2px;
	}
	&::after {
		bottom: -2px;
	}
}

@keyframes line {
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
}

svg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	.text {
		fill: transparent;
		stroke-width: 20px;
		&:nth-child(n + 1) {
			stroke: rgb(39, 153, 238);
			stroke-dasharray: 0 600;
			animation: text 3.8s ease-in-out infinite;
		}
		&:nth-child(n + 2) {
			stroke: rgb(126 15 213);
			animation: text2 3.8s ease-in-out infinite;
		}
	}
}

@keyframes text {
	100% {
		stroke-dasharray: 1200 600;
		fill: rgba(255, 255, 255, 0.6);
	}
}
@keyframes text2 {
	90% {
		stroke-dasharray: 1200 600;
		stroke-dashoffset: 800;
	}
	100% {
		stroke: rgb(39, 153, 238);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=034-5952e91d.js.map
