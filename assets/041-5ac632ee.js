import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-94a16e9f.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c1bd5c42.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"41-error-modal",children:[n.jsx(t.code,{children:"#41"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/41/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Error Modal"})]}),`
`,n.jsx(t.p,{children:"Error Modal: Don't worry, it's not a real error, this is part of the challenge."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/QWzNerJ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#41 CSS Challenge / Error Modal"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#41 CSS Challenge / Error Modal",src:"https://codepen.io/mulander/embed/QWzNerJ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="notify">
		<h3>Oh snap!</h3>
		<p>An error has occured while creating an error report.</p>
		<button onclick="document.querySelector('.notify').classList.toggle('hide')">dismiss</button>
	</div>
	<button onclick="document.querySelector('.notify').classList.toggle('hide')">toggle</button>
</div>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`.frame {
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
	background: #3f3f3f;
	color: #415868;
}

.notify {
	position: absolute;
	left: 40px;
	top: 100px;
	width: 320px;
	background: #fefefe;
	text-align: center;
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	animation: show 1.2s ease both;
	&.hide {
		animation: show-rev 1.2s ease both reverse;
	}
	h3 {
		font-size: 18px;
		line-height: 24px;
		font-weight: 400;
		margin: 14px 0 5px 0;
	}
	p {
		font-size: 14px;
		font-weight: 300;
		line-height: 19px;
		margin: 20px 0;
		padding: 0 30px;
	}
}

button {
	outline: none;
	border: none;
	appearance: none;
	height: 40px;
	width: 100%;
	background: hsl(0, 90%, 65%);
	color: #fff;
	line-height: 40px;
	font-size: 14px;
	font-weight: 400;
	text-transform: capitalize;
	cursor: pointer;
	transition: background 0.3s ease-in-out;
	&:hover {
		background: hsl(0, 90%, 45%);
	}
}

@keyframes show {
	0% {
		transform: scale(0);
	}
	60% {
		transform: scale(1.1);
	}
	80% {
		transform: scale(0.95);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes show-rev {
	0% {
		transform: scale(0);
	}
	60% {
		transform: scale(1.1);
	}
	80% {
		transform: scale(0.95);
	}
	100% {
		transform: scale(1);
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=041-5ac632ee.js.map
