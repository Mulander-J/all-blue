import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-94a16e9f.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c1bd5c42.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"43-lightbulb",children:[t.jsx(n.code,{children:"#43"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/43/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Lightbulb"})]}),`
`,t.jsx(n.p,{children:"Lightbulb: Light on, light off, light on, light off, light on."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/MWZeWeE",target:"_blank",rel:"nofollow noopener noreferrer",children:"#43 CSS Challenge / Lightbulb"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#43 CSS Challenge / Lightbulb",src:"https://codepen.io/mulander/embed/MWZeWeE?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="lightbulb">
		<div class="light"></div>
		<div class="base"></div>
		<svg class="rope" viewBox="0 0 1024 1024">
			<path d="M544 388.5V32c0-17.7-14.3-32-32-32s-32 14.3-32 32v356.5c0 42.2-21.2 81.3-55.9 105.2-86.6 59.4-147.7 195.6-147.7 294.7 0 130.1 105.5 235.6 235.6 235.6s235.6-105.5 235.6-235.6c0-99-61.1-235.2-147.7-294.7-34.7-23.8-55.9-63-55.9-105.2z m89.3 521.2C600.9 942.1 557.8 960 512 960s-88.9-17.9-121.3-50.3c-32.4-32.4-50.3-75.5-50.3-121.3 0-52.8 23-121.8 58.5-175.8 17.9-27.3 38.3-49.5 58.8-64.2 18.8-13.5 37.1-20.4 54.4-20.4s35.5 6.8 54.4 20.4c20.5 14.7 40.8 36.9 58.8 64.2 35.5 54 58.5 123 58.5 175.8-0.2 45.8-18 88.9-50.5 121.3z"></path>
		</svg>
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
	background: #404556;
	color: #fff;
}
.lightbulb {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	--highlight: #ffff00;
	.light {
		position: relative;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: var(--highlight);
		transition: all 0.8s ease;
		/* light shadow */
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			border-radius: 50%;
			height: 100%;
			width: 100%;
			box-shadow: 0 0 50px 8px var(--highlight);
			transition: all 1s ease;
		}
		/* bulb foot */
		&::after {
			content: "";
			position: absolute;
			left: 50%;
			top: 100%;
			height: 10px;
			width: 20px;
			border-radius: 10px;
			background: var(--highlight);
			transform: translate(-50%, -4px);
			transition: all 0.8s ease;
		}
	}
	.base {
		position: relative;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		grid-gap: 4px;
		&::before,
		&::after {
			content: "";
			width: 20px;
			height: 4px;
			border-radius: 4px;
			background: #fff;
		}
		&::after {
			width: 16px;
		}
	}
	.rope {
		position: absolute;
		top: 76px;
		left: 15px;
		height: 20px;
		transform: scaleY(3) scaleX(2);
		transform-origin: center 0;
		animation: swing 1.2s linear alternate infinite;
	}
	&:hover {
		.light,
		.light::after {
			background: gray;
		}
		.light::before {
			box-shadow: none;
		}
	}
}

@keyframes swing {
	from {
		transform: scaleY(3) scaleX(2) rotate(-15deg);
	}
	to {
		transform: scaleY(3) scaleX(2) rotate(15deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=043-c1912e58.js.map
