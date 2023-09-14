import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-33e7d280.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"47-pixel-art",children:[t.jsx(n.code,{children:"#47"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/47/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Pixel Art"})]}),`
`,t.jsx(n.p,{children:"Pixel Art: You don't like Space Invaders? No problem, click on the pixels to create your own piece of art."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/bGOwoLz",target:"_blank",rel:"nofollow noopener noreferrer",children:"#47 CSS Challenge / Pixel Art"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#47 CSS Challenge / Pixel Art",src:"https://codepen.io/mulander/embed/bGOwoLz?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

- const inits = [130, 131, 149, 150, 151, 152, 168, 169, 170, 171, 172, 173, 187, 188, 190, 191, 193, 194, 207, 208, 209, 210, 211, 212, 213, 214, 229, 232, 248, 250, 251, 253, 267, 269, 272, 274];
.frame: .canvas
	- for(let i = 0; i <= 400; i++)
		.pixel
			if inits.includes(i)
				input(type="checkbox", name='pixel-' + i, id='pixel-' + i, checked)
			else
				input(type="checkbox", name='pixel-' + i, id='pixel-' + i)
			label(for='pixel-' + i)
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$cell: 20;
$light: #24f6f0;
$dark: #fe2d52;

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
	background: $light;
	color: #fff;
}
.canvas {
	height: 400px;
	width: 400px;
	display: grid;
	grid-template-columns: repeat($cell, 1fr);
	.pixel {
		label {
			display: block;
			box-sizing: border-box;
			height: $cell * 1px;
			width: $cell * 1px;
			background: $dark;
			border: 1px solid $light;
			transition: all 0.3s ease;
			&:hover {
				background: $light;
				border-color: $dark;
			}
		}
		input[type="checkbox"] {
			appearance: none;
			display: none;
			&:checked ~ label {
				background: #fff;
				filter: drop-shadow(-2px -2px 0 $light) contrast(150%) brightness(110%);
				box-shadow: 0 0 10px #fff;
				animation: move 5s ease-in infinite;
			}
		}
	}
}

@keyframes move {
	4% {
		background: $light;
		transform: skewX(7deg) translate(-30px);
	}
	7% {
		transform: skewX(-6deg) translate(18px);
	}
	9% {
		background: $dark;
		transform: skewX(5deg) translate(-8px);
	}
	10% {
		transform: skewX(-4deg) translate(6px);
	}
	11% {
		background: $light;
		transform: skewX(3deg) translate(-4px);
	}
	12% {
		transform: skewX(-2deg) translate(2px);
	}
	13% {
		background: #fff;
		transform: skewX(1deg) translate(0px);
		filter: drop-shadow(-2px -2px 0 $light) contrast(120%) brightness(110%);
	}
	30% {
		filter: drop-shadow(-2px -2px 0 $light) contrast(150%) brightness(120%);
	}
}
`})})]})}function k(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{k as default};
//# sourceMappingURL=047-01071555.js.map
