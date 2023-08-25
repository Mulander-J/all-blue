import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-6eebfeed.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-769d2acc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"23-animated-typography",children:[t.jsx(n.code,{children:"#23"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/23/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Animated Typography"})]}),`
`,t.jsx(n.p,{children:"Animated Typography: Some big, bold and beautiful animated typography will enhance every boring header section."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/QWzbRwK",target:"_blank",rel:"nofollow noopener noreferrer",children:"#23 CSS Challenge / Animated Typography"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#23 CSS Challenge / Animated Typography",src:"https://codepen.io/mulander/embed/QWzbRwK?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Animation"})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-yaml",children:`# Transform Height
height: v
# or
transform: scaleY(v)
# Transform Width
width: v
# or
transform: scaleX(v)
# expand
clip-path: inset(top right botton left)
`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="circle"></div>
	<div class="line line-left"></div>
	<div class="line line-right"></div>
	<div class="bracket left"></div>
	<div class="bracket right"></div>
	<div class="text1">collect</div>
	<div class="text2">moments</div>
	<div class="text3">not things</div>
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
	background: #e16d6c;
	color: #fff;
	font-family: "Open Sans", Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.circle {
	position: absolute;
	z-index: 10;
	height: 50px;
	width: 50px;
	top: 175px;
	left: 175px;
	background: #fff;
	border-radius: 50%;
	animation: circle 1s ease-in-out forwards;
}
.line {
	position: absolute;
	z-index: 10;
	height: 4px;
	top: 198px;
	background: #fff;
}
.line-left {
	border-radius: 2px 0 0 2px;
	animation: line-left 1s 0.8s ease;
}
.line-right {
	border-radius: 0 2px 2px 0;
	animation: line-right 1s 0.8s ease;
}

.bracket {
	position: absolute;
	z-index: 10;
	height: 70px;
	width: 4px;
	top: 165px;
	background: #fff;
	animation: bracket 0.4s ease-out 2s;
	animation-fill-mode: both;
	&:before {
		position: absolute;
		display: block;
		content: "";
		width: 25px;
		height: 100%;
		border: 4px solid #fff;
		border-left: none;
		border-right: none;
		box-sizing: border-box;
	}
	&.left {
		left: 50px;
		&:before {
			top: 0;
			left: 0;
			transform-origin: left center;
			animation: bracket-line 0.2s ease-out 2.4s both;
		}
	}
	&.right {
		right: 50px;
		&:before {
			top: 0;
			right: 0;
			transform-origin: right center;
			animation: bracket-line 0.2s ease-out 2.4s both;
		}
	}
}

.text2 {
	position: absolute;
	z-index: 5;
	top: 173px;
	width: 400px;
	text-align: center;
	font-weight: 800;
	font-size: 50px;
	color: #ffffff;
	line-height: 50px;
	text-transform: uppercase;
	clip-path: inset(50% 0% 50% 0);
	animation: text-2 0.3s ease-out 2.6s both;
}
.text1 {
	position: absolute;
	z-index: 10;
	width: 100%;
	text-align: center;
	left: 0;
	top: 130px;
	font-weight: 300;
	font-size: 30px;
	color: #ffffff;
	line-height: 30px;
	text-transform: uppercase;
	animation: text-1 0.3s ease-out 2.6s both;
}
.text3 {
	position: absolute;
	z-index: 10;
	width: 100%;
	text-align: center;
	left: 0;
	bottom: 130px;
	font-weight: 300;
	font-size: 30px;
	color: #ffffff;
	line-height: 30px;
	text-transform: uppercase;
	animation: text-3 0.3s ease-out 2.6s both;
}

@keyframes circle {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	90%,
	100% {
		transform: scale(0);
	}
}

@keyframes line-left {
	0% {
		right: 200px;
		left: auto;
		width: 0px;
	}
	49% {
		right: 200px;
		left: auto;
		width: 100px;
	}
	51% {
		right: auto;
		left: 100px;
		width: 100px;
	}
	99% {
		right: auto;
		left: 100px;
		width: 0px;
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@keyframes line-right {
	0% {
		left: 200px;
		right: auto;
		width: 0px;
	}
	49% {
		left: 200px;
		right: auto;
		width: 100px;
	}
	51% {
		left: auto;
		right: 100px;
		width: 100px;
	}
	99% {
		left: auto;
		right: 100px;
		width: 0px;
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@keyframes bracket {
	from {
		transform: scaleY(0);
	}
	to {
		transform: scaleY(1);
	}
}

@keyframes bracket-line {
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
}

@keyframes text-2 {
	0% {
		clip-path: inset(50% 0% 50% 0);
		opacity: 0;
	}
	100% {
		clip-path: inset(0);
		opacity: 1;
	}
}

@keyframes text-1 {
	0% {
		transform: translateX(-20px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
@keyframes text-3 {
	0% {
		transform: translateX(20px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
}
`})})]})}function y(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{y as default};
//# sourceMappingURL=023-914fe552.js.map
