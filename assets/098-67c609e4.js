import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-2b9b71ef.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),`
`,t.jsxs(n.h1,{id:"98-plopp",children:[t.jsx(n.code,{children:"#98"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/98/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Plopp"})]}),`
`,t.jsx(n.p,{children:"Plopp: What do you want to fill your box with?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/KKbXeBM",target:"_blank",rel:"nofollow noopener noreferrer",children:"#98 CSS Challenge / Plopp"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#98 CSS Challenge / Plopp",src:"https://codepen.io/mulander/embed/KKbXeBM?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="box">
		<div class="slice"></div>
		<div class="slice"></div>
		<div class="slice"></div>
		<div class="slice"></div>
	</div>
	<div class="center">
		<div class="sprit-1"></div>
		<div class="sprit-2"></div>
		<div class="sprit-3"></div>
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
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
	background: #2c3e50;
}

.center {
	position: absolute;
	top: 100px;
	left: 100px;
	height: 200px;
	width: 200px;
	opacity: 0;
	transform: scale(0);
	animation: sprits 2s ease both alternate infinite;
	.sprit-1 {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 4px solid salmon;
	}
	.sprit-2 {
		position: absolute;
		top: 20%;
		left: 40%;
		width: 30px;
		height: 30px;
		border: 4px solid seagreen;
		transform: rotate(14deg);
	}
	.sprit-3 {
		position: absolute;
		top: 70%;
		left: 20%;
		border-style: solid;
		border-width: 20px 20px 0 20px;
		border-color: lightcyan transparent transparent transparent;
		transform: rotate(35deg);
	}
}

.slice {
	position: absolute;
	border-style: solid;
	top: 120px;
	left: 120px;
	height: 0;
	width: 0;
	&:nth-child(1) {
		top: 120px;
		left: 120px;
		border-width: 80px 80px 0 80px;
		border-color: hsl(204, 55%, 51%) transparent transparent transparent;
		animation: slice-t 2s ease both alternate infinite;
	}
	&:nth-child(2) {
		top: 120px;
		left: 120px;
		border-width: 80px 0 80px 80px;
		border-color: transparent transparent transparent hsl(204, 50%, 48%);
		animation: slice-l 2s ease both alternate infinite;
	}
	&:nth-child(3) {
		top: 200px;
		left: 120px;
		border-width: 0 80px 80px 80px;
		border-color: transparent transparent hsl(204, 45%, 45%) transparent;
		animation: slice-b 2s ease both alternate infinite;
	}
	&:nth-child(4) {
		top: 120px;
		left: 200px;
		border-width: 80px 80px 80px 0;
		border-color: transparent hsl(204, 40%, 42%) transparent transparent;
		animation: slice-r 2s ease both alternate infinite;
	}
}

@keyframes slice-t {
	0%,
	20% {
		transform: translateY(0);
	}
	80%,
	100% {
		transform: translateY(-180px);
	}
}
@keyframes slice-b {
	0%,
	20% {
		transform: translateY(0);
	}
	80%,
	100% {
		transform: translateY(180px);
	}
}
@keyframes slice-l {
	0%,
	20% {
		transform: translateX(0);
	}
	80%,
	100% {
		transform: translateX(-180px);
	}
}
@keyframes slice-r {
	0%,
	20% {
		transform: translateX(0);
	}
	80%,
	100% {
		transform: translateX(180px);
	}
}
@keyframes sprits {
	0%,
	20% {
		opacity: 0;
		transform: scale(0);
	}
	80%,
	100% {
		opacity: 1;
		transform: scale(1.2);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=098-67c609e4.js.map
