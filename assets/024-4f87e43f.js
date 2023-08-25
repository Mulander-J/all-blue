import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-6eebfeed.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-769d2acc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"24-button",children:[n.jsx(t.code,{children:"#24"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/24/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Button"})]}),`
`,n.jsx(t.p,{children:"Button: Do you really wanna let your users guess if their actions were successful? No! So give them some feedback if they click a button."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/wvRKgVY",target:"_blank",rel:"nofollow noopener noreferrer",children:"#24 CSS Challenge / Button"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#24 CSS Challenge / Button",src:"https://codepen.io/mulander/embed/wvRKgVY?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame" id="box">
	<input type="checkbox" id="checker" />
	<label for="checker" class="button">
		<span>finish</span>
		<div class="emoji">
			👌
		</div>
	</label>
	<svg class="circle">
		<circle cx="30" cy="30" r="29"></circle>
	</svg>
</div>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`* {
	margin: 0;
	padding: 0;
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
	overflow: hidden;
	font-family: "Open Sans", Helvetica, sans-serif;
	background: hsl(149, 62%, 59%);
	color: #fff;
}
.button {
	position: relative;
	display: block;
	margin: 180px auto;
	width: 260px;
	height: 60px;
	padding: 10px 16px;
	text-align: center;
	line-height: 40px;
	border: 1px solid white;
	border-radius: 30px;
	font-size: 20px;
	font-weight: 600;
	text-transform: capitalize;
	cursor: pointer;
	background-color: transparent;
	transition: background-color 0.3s ease;
}
.button:hover {
	background-color: hsl(149, 62%, 40%);
}
.circle {
	position: absolute;
	width: 60px;
	height: 60px;
	z-index: 2;
	top: 180px;
	left: 170px;
	transform: rotate(-90deg);
	fill: none;
	stroke: #fff;
	stroke-width: 2px;
	stroke-linecap: round;
	stroke-dasharray: 0 314;
}
.emoji {
	position: absolute;
	top: 50%;
	left: 50%;
	color: #45b078;
	transform: translate(-50%, -50%);
	opacity: 0;
}
input[type="checkbox"] {
	display: none;
}
input[type="checkbox"]:checked ~ .button {
	animation: an-button 0.5s ease forwards, an-btn-fill 0.5s ease 1.5s forwards;
}
input[type="checkbox"]:checked ~ .circle {
	animation: an-circle 2s ease 0.5s backwards;
}
input[type="checkbox"]:checked ~ .button .emoji {
	animation: an-emoji 0.5s ease 1.5s forwards;
}

@keyframes an-button {
	0% {
		width: 260px;
		border-color: #fff;
		color: #fff;
	}
	50% {
		color: transparent;
	}
	100% {
		width: 60px;
		border-color: #45b078;
		background: transparent;
		color: transparent;
	}
}
@keyframes an-btn-fill {
	0% {
		background: transparent;
	}
	100% {
		background: #fff;
	}
}
@keyframes an-circle {
	0% {
		stroke-dashoffset: 0 314;
		opacity: 1;
	}
	50% {
		stroke-dasharray: 314 0;
		transform: rotate(-90deg) scale(1);
		opacity: 1;
	}
	90%,
	100% {
		stroke-dasharray: 314 0;
		transform: rotate(-90deg) scale(2);
		opacity: 0;
	}
}
@keyframes an-emoji {
	to {
		opacity: 1;
	}
}
`})})]})}function k(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{k as default};
//# sourceMappingURL=024-4f87e43f.js.map
