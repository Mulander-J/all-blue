import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as l}from"./index-462ee75c.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{}),`
`,t.jsxs(n.h1,{id:"49-css-follow",children:[t.jsx(n.code,{children:"#49"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/49/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Follow"})]}),`
`,t.jsx(n.p,{children:"CSS Follow: It wouldn't be a big challenge to implement that with JS only, but with CSS you have to come up with a good solution."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/WNLGdzM",target:"_blank",rel:"nofollow noopener noreferrer",children:"#49 CSS Challenge / CSS Follow"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#49 CSS Challenge / CSS Follow",src:"https://codepen.io/mulander/embed/WNLGdzM?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame
	- for(let i = 1; i <= 400; i++)
		.pixel(class='pixel-' + i)
	.mouse
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$tol: 400;
$d: 20px;
$delta: 1px * $tol / $d;
$c: #2c3e50;

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
	background: $c;
	display: grid;
	grid-template-columns: repeat(20, 1fr);
	.pixel {
		height: $d;
		width: $d;
		background: $c;
		box-sizing: border-box;
		transition: all 0.3s ease-in-out;
	}
	.mouse {
		position: absolute;
		top: -10px;
		left: -10px;
		height: $d;
		width: $d;
		background: hsl(145, 63%, 49%);
		border-radius: 50%;
		transform: translate(200px, 200px);
		transition: all 0.3s ease-out;
		pointer-events: none;
		&::after {
			display: block;
			content: " ";
			height: 120%;
			width: 120%;
			position: absolute;
			border-radius: 50%;
			border: hsl(145, 70%, 49%) solid 2px;
			top: -20%;
			left: -20%;
			transform-origin: center center;
			animation: pulse 1.5s ease-in-out infinite both;
		}
	}

	@for $i from 1 through $tol {
		.pixel-#{$i}:hover {
			background: hsl(210deg 29.03% 10.31%);
			& ~ .mouse {
				transform: translate(
					(10 + (($i - 1) % $delta) * $delta) * 1px,
					(10 + floor(($i - 1) / $delta) * $delta) * 1px
				);
			}
		}
	}
}

@keyframes pulse {
	0% {
		transform: scale(0.5);
		opacity: 1;
	}
	100% {
		transform: scale(2);
		opacity: 0;
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=049-c0f52332.js.map
