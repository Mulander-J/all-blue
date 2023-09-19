import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"59-slice-transition",children:[t.jsx(n.code,{children:"#59"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/59/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slice Transition"})]}),`
`,t.jsx(n.p,{children:"Slice Transition: Not the everyday transition between two images."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/LYMyeXJ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#59 CSS Challenge / Slice Transition"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#59 CSS Challenge / Slice Transition",src:"https://codepen.io/mulander/embed/LYMyeXJ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .card
	- for(let i = 0; i < 10; i++)
		.slice
	.text
		h1 Slice
		h2 Transition
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`* {
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
	overflow: hidden;
	background: skyblue;
	color: #fff;
}

$count: 10;
$width: 400px / $count;
$offset: 40px;

.card {
	position: absolute;
	width: 400px;
	height: 400px;
	background: url("https://100dayscss.com/codepen/slice-image-1.jpg") center
		center no-repeat;
	background-size: 400px 400px;
	cursor: pointer;
	display: grid;
	grid-template-columns: repeat($count, 1fr);
	&:hover {
		.text {
			h2 {
				transform: translateX(1 * $offset);
				opacity: 0;
			}
			h1 {
				transform: translateX(-1 * $offset);
				opacity: 0;
			}
		}
		.slice {
			transform: translateY(0) !important;
			opacity: 1;
		}
	}
	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-transform: uppercase;
		font-weight: 700;
		text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
		h1 {
			font-size: 60px;
			line-height: 60px;
			transition: all 1s ease-in-out;
			transform: translateX(0);
		}
		h2 {
			font-size: 40px;
			line-height: 40px;
			transition: all 1s ease-in-out;
			transform: translateX(0);
		}
	}
	.slice {
		height: 100%;
		width: $width;
		z-index: 2;
		opacity: 0;
		box-sizing: border-box;
		background: url("https://100dayscss.com/codepen/slice-image-2.jpg") no-repeat;
		background-size: 400px 400px;
		transition: all 1s ease-in-out;
		&:nth-of-type(even) {
			transform: translateY($offset);
		}
		&:nth-of-type(odd) {
			transform: translateY(-1 * $offset);
		}
		@for $i from 1 through $count {
			&:nth-of-type(#{$i}) {
				background-position: (-1 * ($i - 1) * $width) 0;
			}
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=059-f53d69af.js.map
