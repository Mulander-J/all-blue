import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-ea668d1f.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-56087800.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"31-pendulum-wave",children:[t.jsx(n.code,{children:"#31"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/31/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Pendulum Wave"})]}),`
`,t.jsx(n.p,{children:"Pendulum Wave: If you are not yet fascinated by mathematics, you should be now at the latest. Wonderful what a small calculations brings forth."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/wvRMqZb",target:"_blank",rel:"nofollow noopener noreferrer",children:"#31 CSS Challenge / Pendulum Wave"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#31 CSS Challenge / Pendulum Wave",src:"https://codepen.io/mulander/embed/wvRMqZb?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .dots
	- for(let i = 0; i < 20; i++)
		.dot
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
	background: skyblue;
	color: #fff;
}

$total: 20;
$dur: 60;
$gap: $dur - $total;

.dots {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	display: grid;
	gap: 4px;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		width: 2px;
		border-radius: 50%;
		background: linear-gradient(to bottom, transparent, white, transparent, black)
			100% 200%;
		animation: line 1s linear infinite both;
	}
	.dot {
		display: block;
		height: 12px;
		width: 12px;
		border-radius: 50%;
		background: linear-gradient(45deg, black, transparent);
		@for $i from 1 through $total {
			&:nth-child(#{$i}) {
				animation: move ($dur / ($gap + $i)) + s ease-in-out infinite alternate;
			}
			&:nth-child(even) {
				background: linear-gradient(45deg, white, transparent);
			}
		}
	}
}
@keyframes move {
	0% {
		transform: translateX(-50px);
	}
	100% {
		transform: translateX(50px);
	}
}
@keyframes line {
	to {
		background-position-y: 316px;
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=031-a56acc83.js.map
