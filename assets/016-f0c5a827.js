import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-6eebfeed.js";import{u as e}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-769d2acc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(a){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},e(),a.components);return t.jsxs(t.Fragment,{children:[t.jsx(o,{}),`
`,t.jsxs(n.h1,{id:"16-blobby",children:[t.jsx(n.code,{children:"#16"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/16/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Blobby"})]}),`
`,t.jsx(n.p,{children:"Blobby: It appears, wobbles, changes its shape and disappears again. Just like that."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/ExGaZpZ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#16 CSS Challenge / Blobby"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#16 CSS Challenge / Blobby",src:"https://codepen.io/mulander/embed/ExGaZpZ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame
	.shape
	.octa-spark
		- for(let i = 0; i < 4; i++)
			i
	.triangle-spark
		- for(let i = 0; i < 3; i++)
			i
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
	background: #46a6da;
	font-family: "Open Sans", Helvetica, sans-serif;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	--color: #c7c7f0;
}
.shape {
	position: relative;
	height: 100px;
	width: 100px;
	background: var(--color);
	animation: an-shape 5s ease-in-out infinite, an-hue 5s ease infinite;
}
@keyframes an-hue {
	from {
		filter: hue-rotate(0);
	}
	to {
		filter: hue-rotate(720deg);
	}
}
@keyframes an-shape {
	0% {
		border-radius: 50%;
		transform: translateY(-300px) scaleY(1.2);
	}
	10% {
		transform: translateY(50px) scaleY(0.8);
	}
	14% {
		transform: translateY(-30px) scaleY(1.1);
	}
	18% {
		transform: translateY(10px) scaleY(0.9);
	}
	20%,
	22% {
		transform: translateY(0) scaleY(1);
	}
	26% {
		transform: translateY(0) scale(1.2);
	}
	32%,
	34% {
		transform: translateY(0) scale(0);
		border-radius: 50%;
	}
	35% {
		transform: translateY(0) scale(0) rotate(22.5deg);
		clip-path: polygon(
			30px 0,
			70px 0,
			100px 30px,
			100px 70px,
			70px 100px,
			30px 100px,
			0 70px,
			0 30px
		);
		border-radius: 0;
	}
	36% {
		transform: scale(1.2) rotate(22.5deg);
	}
	42%,
	44% {
		transform: scale(0.9) rotate(22.5deg);
	}
	48% {
		transform: scale(1.2) rotate(22.5deg);
	}
	52%,
	54% {
		transform: scale(0) rotate(22.5deg);
		clip-path: polygon(
			30px 0,
			70px 0,
			100px 30px,
			100px 70px,
			70px 100px,
			30px 100px,
			0 70px,
			0 30px
		);
		border-radius: 0;
	}
	55% {
		transform: translateY(0) scale(0) rotate(0);
		clip-path: polygon(55px 0, 100px 90px, 0 90px);
		border-radius: 0;
	}
	56% {
		transform: scale(0) rotate(0);
	}
	58% {
		transform: scale(1.2) rotate(0);
	}
	60% {
		transform: scale(0.9) rotate(0);
	}
	62%,
	64% {
		transform: scale(1) rotate(0);
	}
	68% {
		transform: scale(1.2) rotate(0);
	}
	72%,
	74% {
		transform: translateY(0) scale(0) rotate(0);
		clip-path: polygon(55px 0, 100px 90px, 0 90px);
		border-radius: 0;
	}
	76% {
		transform: translateY(0) scale(0);
		border-radius: 50%;
		clip-path: none;
	}
	80% {
		transform: translateY(0) scale(1.2);
	}
	84% {
		transform: translateY(0) scale(0.9);
	}
	86%,
	88% {
		transform: translateY(0) scale(1);
	}
	92% {
		transform: translateY(-30px) scaleY(0.9);
	}
	100% {
		transform: translateY(300px) scaleY(1.2);
		border-radius: 50%;
	}
}
.shape::after {
	content: "";
	position: absolute;
	top: -5px;
	left: -5px;
	width: 110px;
	height: 110px;
	border: 3px solid var(--color);
	border-radius: 50%;
	animation: an-ring 5s ease-in-out infinite;
}
@keyframes an-ring {
	0%,
	76% {
		transform: translate3d(0, 0, 0) scale(0);
		opacity: 1;
	}
	80% {
		opacity: 1;
	}
	84%,
	100% {
		transform: translate3d(0, 0, 0) scale(1.4);
		opacity: 0;
	}
}
.octa-spark {
	position: absolute;
	width: 200px;
	height: 200px;
	top: 100px;
	left: 100px;
	animation: an-octa-spark 5s ease-in-out infinite;
}
.octa-spark i {
	display: block;
	position: absolute;
	width: 4px;
	height: 200px;
	border-radius: 2px;
	background: linear-gradient(
		to top,
		var(--color) 0,
		var(--color) 10%,
		transparent 10%,
		transparent 90%,
		var(--color) 90%,
		var(--color) 100%
	);
	left: 98px;
}
.octa-spark i:nth-child(2) {
	transform: rotate(45deg);
}
.octa-spark i:nth-child(3) {
	transform: rotate(90deg);
}
.octa-spark i:nth-child(4) {
	transform: rotate(135deg);
}
@keyframes an-octa-spark {
	0%,
	34% {
		transform: translate3d(0, 0, 0) scale(0);
		opacity: 1;
	}
	44% {
		opacity: 1;
	}
	54%,
	100% {
		transform: translate3d(0, 0, 0) scale(1.4);
		opacity: 0;
	}
}
.triangle-spark {
	position: absolute;
	width: 200px;
	height: 200px;
	top: 100px;
	left: 100px;
	animation: an-triangle-spark 5s ease-in-out infinite;
}
.triangle-spark i {
	display: block;
	position: absolute;
	width: 4px;
	height: 200px;
	border-radius: 2px;
	background: linear-gradient(
		to top,
		transparent 0,
		transparent 90%,
		var(--color) 90%,
		var(--color) 100%
	);
	left: 98px;
}
.triangle-spark i:nth-child(1) {
	top: 10px;
}
.triangle-spark i:nth-child(2) {
	top: 0px;
	transform: rotate(124deg);
}
.triangle-spark i:nth-child(3) {
	top: 0px;
	transform: rotate(237deg);
}
@keyframes an-triangle-spark {
	0%,
	56% {
		transform: translate3d(0, 0, 0) scale(0);
		opacity: 1;
	}
	65% {
		opacity: 1;
	}
	74%,
	100% {
		transform: translate3d(0, 0, 0) scale(1.4);
		opacity: 0;
	}
}
`})})]})}function y(a={}){const{wrapper:n}=Object.assign({},e(),a.components);return n?t.jsx(n,Object.assign({},a,{children:t.jsx(r,a)})):r(a)}export{y as default};
//# sourceMappingURL=016-f0c5a827.js.map
