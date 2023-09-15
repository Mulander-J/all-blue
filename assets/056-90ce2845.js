import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-8438cb78.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"56-flower",children:[t.jsx(n.code,{children:"#56"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/56/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Flower"})]}),`
`,t.jsx(n.p,{children:"Flower: When was the last time you picked a daisy?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/wvRJNKo",target:"_blank",rel:"nofollow noopener noreferrer",children:"#56 CSS Challenge / Flower"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#56 CSS Challenge / Flower",src:"https://codepen.io/mulander/embed/wvRJNKo?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .center
	- for(let i = 0; i < 18; i++)
		.leaf
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
	background: #16a078;
}
.center {
	position: absolute;
	height: 50px;
	width: 50px;
	left: 175px;
	top: 175px;
	transition: all 0.5s ease;
	animation: flower 7s ease infinite;
	&:hover {
		.leaf,
		.dot {
			opacity: 0.3;
		}
	}
	.dot {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		background: #f1c40f;
		z-index: 20;
		transform: scale(0);
		animation: dot 7s ease-in infinite both;
	}
	.leaf {
		position: absolute;
		width: 50px;
		height: 50px;
		top: 0;
		left: 0;
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 50px;
			height: 50px;
			border-radius: 2px 50px;
			opacity: 0.8;
			transition: all 0.5s ease-in-out;
			box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
			animation: leafs 7s ease infinite both;
		}
		@for $i from 1 through 18 {
			&:nth-of-type(#{$i}) {
				z-index: $i;
				transform: rotate(20deg * $i);
			}
		}
	}
}
@keyframes flower {
	0% {
		transform: rotate(0);
	}
	60% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
@keyframes leafs {
	0%,
	100% {
		transform: translateY(0);
		background: #fff;
	}
	35.3125% {
		transform: translate(-35px, -35px) scale(2);
		box-shadow: -5px -5px 1px 0 rgba(0, 0, 0, 0.06);
	}
	60% {
		transform: translate(-35px, -35px) scale(2);
		box-shadow: -5px -5px 1px 0 rgba(0, 0, 0, 0.06);
	}
	75% {
		transform: translate(-35px, -35px) scale(2);
		box-shadow: -5px -5px 1px 0 rgba(0, 0, 0, 0.06);
		background: #edf9ed;
	}
}
@keyframes dot {
	12% {
		transform: scale(0);
	}
	20% {
		transform: scale(1.1);
	}
	25% {
		transform: scale(0.95);
	}
	30%,
	55% {
		transform: scale(1);
	}
	57.9% {
		transform: scale(1.1);
	}
	70% {
		transform: scale(0);
	}
}
`})})]})}function w(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{w as default};
//# sourceMappingURL=056-90ce2845.js.map
