import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-462ee75c.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"35-loading-circle",children:[t.jsx(n.code,{children:"#35"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/35/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Loading Circle"})]}),`
`,t.jsx(n.p,{children:"Loading Circle: Is that a dark circle with a white stripe or the other way around?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/YzdqQYP",target:"_blank",rel:"nofollow noopener noreferrer",children:"#35 CSS Challenge / Loading Circle"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#35 CSS Challenge / Loading Circle",src:"https://codepen.io/mulander/embed/YzdqQYP?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<svg class="progress" fill="none">
			<circle cx="50" cy="50" r="45" stroke="rgba(0,0,0,.4)" stroke-width="10px"></circle>
			<circle class="line" cx="50" cy="50" r="45" stroke="black" stroke-width="10px" stroke-linecap="round">
				<animate attributeName="stroke-dashoffset" values="314;-314" dur="4" repeatCount="indefinite" calcMode="linear" />
			</circle>
		</svg>
		<div class="underline"></div>
		<p>HarmonyOS</p>
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
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	font-family: "Open Sans", Helvetica, sans-serif;
	background: #1bbe9e;
	color: #000;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.progress {
		height: 100px;
		width: 100px;
		.line {
			transform: rotate(-90deg);
			transform-origin: center center;
			stroke-dasharray: 314;
			animation: rotate 3s linear both infinite;
		}
	}

	.underline {
		transform-origin: 0 0;
		margin: 20px 10px;
		height: 10px;
		width: 80px;
		background: #2468f5;
		& ~ p {
			margin: 0;
			letter-spacing: 4px;
			font-weight: 800;
			font-size: 20px;
		}
	}
}

@keyframes rotate {
	from {
		transform: rotate(-90deg);
	}
	to {
		transform: rotate(270deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=035-9772a8b7.js.map
