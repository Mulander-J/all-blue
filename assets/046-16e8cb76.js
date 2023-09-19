import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"46-iris-circles",children:[t.jsx(n.code,{children:"#46"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/46/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Iris Circles"})]}),`
`,t.jsx(n.p,{children:"Iris Circles: What do you see? Camera shutter, tornado, flower or dancing people from above?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/ZEVpJOj",target:"_blank",rel:"nofollow noopener noreferrer",children:"#46 CSS Challenge / Iris Circles"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#46 CSS Challenge / Iris Circles",src:"https://codepen.io/mulander/embed/ZEVpJOj?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame
	- for(let i = 0; i < 6; i++)
		.group: .layer
			- for(let k = 0; k < 4; k++)
				.dot
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$center: 100px;
$numberOfRings: 6;

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
	background: black;
	color: #fff;
}
.group {
	position: absolute;
	top: $center;
	left: $center;
	height: $center;
	width: $center;
	transform-origin: $center $center;
	-webkit-box-reflect: below -20px;
	@for $i from 1 through $numberOfRings {
		&:nth-child(#{$i}) {
			$nullBase: $i - 1;
			opacity: (1 - ($nullBase / 10));
			animation: ring#{$i} 6s ease-in-out alternate infinite;
		}
	}
	.layer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		-webkit-box-reflect: right 0;
		.dot {
			position: absolute;
			width: 10px;
			height: 10px;
			bottom: 0;
			left: 0;
			border-radius: 50%;
			transform-origin: $center 0;
			@for $i from 1 through 4 {
				&:nth-child(#{$i}) {
					transform: rotate(30deg * ($i - 1)) translate(-50%, -50%);
					background: hsl(20 * $i, 50%, 50%);
				}
			}
		}
	}
}

@for $i from 1 through $numberOfRings {
	@keyframes ring#{$i} {
		$nullBase: $i - 1;
		0% {
			transform: scale(1 - ($nullBase / 7)) rotate(($nullBase * 5) + deg);
		}
		100% {
			transform: scale(1 - ($nullBase / 22)) rotate((($nullBase * 10) + 360) + deg);
		}
	}
}
`})})]})}function $(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{$ as default};
//# sourceMappingURL=046-16e8cb76.js.map
