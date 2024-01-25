import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-83d9217b.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function a(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsxs(t.h1,{id:"21-pac-man",children:[n.jsx(t.code,{children:"#21"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/21/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Pac-Man"})]}),`
`,n.jsx(t.p,{children:"Pac-Man: Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka Waka…"}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/XWobyqJ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#21 CSS Challenge / Pac-Man"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#21 CSS Challenge / Pac-Man",src:"https://codepen.io/mulander/embed/XWobyqJ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(t.p,{children:"How to make a mouth"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`	<svg>
		<circle cx="50" cy="50" r="25"/>
	</svg>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`.ring {
	fill: none;
	stroke: #F4D146;
}
.circle {
	fill: none;
	stroke: #F4D146;
	stroke-width: $radius;
	stroke-linecap: butt;
	stroke-dasharray: ($radius * 3.14);
}
.mouth {
  fill: none;
	stroke: #F4D146;
	stroke-width: $radius;
	stroke-linecap: butt;
  stroke-dashoffset: ($radius * 3.14 / 4);
  transform: rotate(45deg);
}
`})}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="beanMan">
		<div class="eye"></div>
		<div class="mouth up"></div>
		<div class="mouth down"></div>
	</div>
	<svg class="dots">
		<polyline points="0,7 240,7"></polyline>
	</svg>
</div>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.frame {
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
	overflow: hidden;
	color: #fff;
	background: conic-gradient(
			rgb(255, 90, 216) 0.25turn,
			rgb(82, 208, 247) 0.25turn 0.5turn,
			rgb(6, 125, 249) 0.5turn 0.75turn,
			rgb(59, 33, 219) 0.75turn
		)
		top left / 25% 25% repeat;
	animation: an-frame infinite 0.8s linear both;
}
@keyframes an-frame {
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: -100px 0;
	}
}
.beanMan {
	position: absolute;
	z-index: 2;
	height: 110px;
	width: 110px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.eye {
	position: absolute;
	top: 18px;
	left: 40px;
	height: 16px;
	width: 16px;
	background: black;
	border-radius: 50%;
	z-index: 2;
}
.mouth {
	position: absolute;
	height: 50px;
	width: 100px;
	border: 10px solid #0f0;
	border-radius: 100px 100px 0 0;
	border-bottom: none;
	background: #f00;
	transform-origin: center 100%;
}
.mouth::after {
	content: "";
	position: absolute;
	bottom: -10px;
	right: 0;
	height: 10px;
	width: 50%;
	background: linear-gradient(
		135deg,
		transparent 33.33%,
		#0f0 33.33%,
		#0f0 66.66%,
		transparent 66.66%
	);
	background-size: 10% 200%;
	transform: rotate(180deg);
}
.mouth.up {
	animation: eat 0.5s ease-in-out infinite both;
}
.mouth.down {
	animation: eat-2 0.5s ease-in-out infinite both;
}
@keyframes eat {
	0% {
		rotate: -45deg;
	}
	100% {
		rotate: 0deg;
	}
}
@keyframes eat-2 {
	0% {
		transform: rotateX(180deg) rotateZ(-45deg);
	}
	100% {
		transform: rotateX(180deg) rotateZ(0);
	}
}

.dots {
	position: absolute;
	height: 14px;
	width: 200px;
	top: 193px;
	left: 200px;
	stroke: #f00;
	stroke-width: 14px;
	stroke-dasharray: 0px 50px;
	stroke-linecap: round;
	animation: points 0.7s linear infinite;
	stroke-dashoffset: 14;
}

@keyframes points {
	0% {
		stroke-dashoffset: 14;
		transform: translate3d(0, 0, 0);
	}
	100% {
		stroke-dashoffset: 64;
	}
}
`})})]})}function b(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(a,e)})):a(e)}export{b as default};
//# sourceMappingURL=021-b4bcd979.js.map
