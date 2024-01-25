import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"97-puppet",children:[t.jsx(n.code,{children:"#97"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/97/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Puppet"})]}),`
`,t.jsx(n.p,{children:"Puppet: Hello there, do you have a minute to talk about HTML and CSS?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/VwqMdLQ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#97 CSS Challenge / Puppet"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#97 CSS Challenge / Puppet",src:"https://codepen.io/mulander/embed/VwqMdLQ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="body">
		<div class="head"></div>
		<div class="leg"></div>
		<div class="leg"></div>
		<div class="arm arm-l"></div>
		<div class="arm arm-r">
			<div class="hand"></div>
		</div>
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
	background: #8e44ad;
}

.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.body {
	position: absolute;
	top: 37.5%;
	left: 43.75%;
	width: 12.5%;
	height: 25%;
	border-radius: 12px 12px 0 0;
	background: #fff;
	.head {
		position: absolute;
		top: -50px;
		left: 4px;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background: #fff;
	}

	.leg {
		position: absolute;
		bottom: -90px;
		height: 100px;
		width: 24px;
		background: #fff;
		border-radius: 12px;
		&:nth-of-type(2) {
			right: 0;
		}
	}

	.arm {
		position: absolute;
		top: 0;
		width: 14px;
		height: 100px;
	}
	.arm-l {
		left: 0;
		transform: translateX(-100%);
	}

	.arm-r {
		right: 0;
		transform: translateX(100%);
	}

	.arm-l::after,
	.arm-l::before,
	.arm-r::before,
	.arm-r .hand::after {
		content: "";
		position: absolute;
		background: #fff;
		width: 100%;
		height: 50%;
		border-radius: 12px;
	}

	.arm-l::before {
		top: 0;
		transform: rotate(30deg) translate(4px, 0px);
	}

	.arm-l::after {
		top: 50%;
		transform: rotate(36deg) translate(-23px, 0px);
	}

	.arm-r::before {
		top: 0;
		transform: rotate(-60deg) translate(7px, 0px);
	}

	.arm-r .hand {
		top: -50%;
		position: absolute;
		width: 100%;
		height: 100%;
		transform: translate(54px, 9px) rotate(-75deg);
	}

	.arm-r .hand::after {
		animation: wave 0.3s ease both alternate infinite;
		transform-origin: left center;
	}
}

@keyframes wave {
	0% {
		transform: rotate(-105deg);
	}
	100% {
		transform: rotate(-100deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=097-3e1919c3.js.map
