import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"55-thermostat",children:[t.jsx(n.code,{children:"#55"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/55/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Thermostat"})]}),`
`,t.jsx(n.p,{children:"Thermostat: It's getting hot in here! Direct visual feedback will help your users understand their actions."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/LYMxXYx",target:"_blank",rel:"nofollow noopener noreferrer",children:"#55 CSS Challenge / Thermostat"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#55 CSS Challenge / Thermostat",src:"https://codepen.io/mulander/embed/LYMxXYx?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="plate">
			<span>23°</span>
			<div class="values">
				<div>19°</div>
				<div>20°</div>
			</div>
			<span>Bedroom</span>
		</div>
	</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
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
	background: skyblue;
}
.center {
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 10px solid white;
	overflow: hidden;
	padding: 25px;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transform: rotate(180deg);
		box-shadow: inset 0 0 8px 8px rgba(0, 0, 0, 0.3);
		background: conic-gradient(
			#fff,
			#fff 9.8%,
			#672b95 10%,
			#ce2e5f 90%,
			#fff 90.2%,
			#fff
		);
	}
}
.plate {
	position: relative;
	z-index: 2;
	height: 100%;
	width: 100%;
	background: #fff;
	border-radius: 50%;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
	display: flex;
	flex-direction: column;
	gap: 4px;
	justify-content: center;
	align-items: center;
	&::after {
		content: "";
		position: absolute;
		top: 0%;
		left: 50%;
		width: 1px;
		height: 10px;
		background: #333;
		transform-origin: center 65px;
		transform: rotate(280deg);
		transition: all 0.3s ease-in-out;
	}
	&:hover {
		&::after {
			transform: rotate(320deg);
		}
		.values div {
			&:nth-child(1) {
				opacity: 0;
				transform: translateX(50px) scale(0.5);
			}
			&:nth-child(2) {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
		}
	}
	span {
		text-align: center;
		font-weight: 300;
		font-size: 12px;
	}
	.values {
		position: relative;
		height: 60px;
		width: 60px;
		div {
			position: absolute;
			top: 0;
			left: 0%;
			text-align: center;
			font-weight: 400;
			font-size: 60px;
			line-height: 60px;
			color: #873183;
			letter-spacing: -8px;
			padding-right: 12px;
			opacity: 1;
			transform: translateX(0);
			transition: all 0.5s ease-in-out;
			&:nth-child(1) {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
			&:nth-child(2) {
				opacity: 0;
				transform: translateX(-50px) scale(0.5);
			}
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=055-4f33bc1a.js.map
