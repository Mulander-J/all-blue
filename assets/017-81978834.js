import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-94a16e9f.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c1bd5c42.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"17-penrose-triangle",children:[n.jsx(t.code,{children:"#17"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/17/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Penrose Triangle"})]}),`
`,n.jsx(t.p,{children:"Penrose Triangle: CSS makes even the impossible possible. Can you find out how it was done?"}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/VwqYEjZ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#17 CSS Challenge / Penrose Triangle"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#17 CSS Challenge / Penrose Triangle",src:"https://codepen.io/mulander/embed/VwqYEjZ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="shape shape1"></div>
		<div class="shape shape2"></div>
		<div class="shape shape3"></div>
	</div>
</div>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`.frame {
	--color: #353535;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 2px;
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	font-family: "Open Sans", Helvetica, sans-serif;
	&::after {
		content: "";
		position: absolute;
		z-index: -1;
		width: 400px;
		height: 400px;
		background: repeating-linear-gradient(
				45deg,
				var(--color),
				var(--color) 3px,
				white 3px,
				white 20px
			)
			100% 400%;
		transition: all 0.8s ease;
	}
}
.center {
	position: absolute;
	width: 200px;
	height: 200px;
	background: var(--color);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.shape {
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 200px;
	transition: all 0.3s ease;
}
.shape1 {
	background: #ccc;
	clip-path: polygon(45% 30%, 55% 30%, 80% 70%, 40% 70%, 45% 60%, 65% 60%);
}
.shape2 {
	background: #aaa;
	clip-path: polygon(45% 30%, 65% 60%, 55% 60%, 45% 45%, 25% 80%, 20% 70%);
}
.shape3 {
	background: #eee;
	clip-path: polygon(50% 52%, 45% 45%, 25% 80%, 75% 80%, 80% 70%, 40% 70%);
}
.frame:hover {
	&::after {
		background-position-y: 400px;
		filter: grayscale(1) invert(1);
	}
	.shape1 {
		background: #eee;
	}
	.shape2 {
		background: #ccc;
	}
	.shape3 {
		background: #aaa;
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=017-81978834.js.map
