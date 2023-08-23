import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-ee8be65f.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3a78df81.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"18-elastic",children:[t.jsx(n.code,{children:"#18"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/18/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Elastic"})]}),`
`,t.jsx(n.p,{children:"Elastic: I thought for a long time about the best way to achieve this effect. In the end, the solution was easier than expected."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/bGONzqW",target:"_blank",rel:"nofollow noopener noreferrer",children:"#18 CSS Challenge / Elastic"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#18 CSS Challenge / Elastic",src:"https://codepen.io/mulander/embed/bGONzqW?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsxs(n.p,{children:["Like ",t.jsx(n.a,{href:"https://100dayscss.com/days/14/",target:"_blank",rel:"nofollow noopener noreferrer",children:"#14 Byciclopter"})]}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .wrap
	- for(let i = 0; i < 4; i++)
		.center
			.top
			.bottom
			.plate: .flip
				.up
				.down
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
	background: #333;
	font-family: "Open Sans", Helvetica, sans-serif;
	--a: aquamarine;
	--b: palevioletred;
}
.wrap {
	position: absolute;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	top: 0;
	left: 0;
	width: 400px;
	height: 400px;
	.center {
		position: relative;
		.top,
		.bottom {
			width: 200px;
			height: 100px;
		}
		.plate {
			top: 0;
			left: 0;
			position: absolute;
			perspective: 1000px;
			height: 200px;
			width: 200px;
			overflow: hidden;
			.flip {
				position: relative;
				height: 100%;
				width: 100%;
				transform-style: preserve-3d;
				animation: swing forwards 5s ease-in-out infinite;
				.up,
				.down {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					backface-visibility: hidden;
				}
			}
		}
	}
}

.top,
.up {
	background: var(--a);
}
.bottom,
.down {
	background: var(--b);
	transform: rotateX(180deg);
}
@keyframes swing {
	0%,
	100% {
		transform: rotateX(90deg);
	}
	15% {
		transform: rotateX(140deg);
	}
	20% {
		transform: roateX(50deg);
	}
	25% {
		transform: rotateX(120deg);
	}
	30% {
		transform: rotateX(70deg);
	}
	35% {
		transform: rotateX(100deg);
	}
	40% {
		transform: rotateX(83deg);
	}
	45% {
		transform: rotateX(93deg);
	}
	50% {
		transform: rotateX(90deg);
	}
	65% {
		transform: rotateX(30deg);
	}
	70% {
		transform: roateX(130deg);
	}
	75% {
		transform: rotateX(50deg);
	}
	80% {
		transform: rotateX(110deg);
	}
	85% {
		transform: rotateX(83deg);
	}
	90% {
		transform: rotateX(93deg);
	}
	95% {
		transform: rotateX(88deg);
	}
}

.center:nth-child(1),
.center:nth-last-child(1) {
	transform: rotate(180deg);
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=018-e3ba3155.js.map
