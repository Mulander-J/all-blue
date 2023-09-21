import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-2b9b71ef.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"83-warp-drive",children:[t.jsx(n.code,{children:"#83"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/83/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Warp Drive"})]}),`
`,t.jsx(n.p,{children:"Warp Drive: Is this what traveling at near light speed looks like? Physicists would probably disagree, but for the sake of learning some CSS, let's ignore that."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/LYMLJpy",target:"_blank",rel:"nofollow noopener noreferrer",children:"#83 CSS Challenge / Warp Drive"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#83 CSS Challenge / Warp Drive",src:"https://codepen.io/mulander/embed/LYMLJpy?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .tunnel
	- for(let i = 0; i< 30; i++)
		.ring
			- for(let i = 0; i< 24; i++)
				.line
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$ringNumber: 30;
$lineNumber: 24;
$animationDuration: 4s;

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
	background: #333;
}
.tunnel {
	position: absolute;
	width: 200px;
	height: 200px;
	top: 100px;
	left: 100px;
}
.ring {
	position: absolute;
	height: 200px;
	width: 200px;
	animation: drive $animationDuration cubic-bezier(0.98, 0.02, 0.97, 0.12) both infinite;
	.line {
		position: absolute;
		width: 2px;
		height: 20px;
		top: 0;
		left: 99px;
		border-radius: 2px;
		transform-origin: center 100px;
		box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.2);
	}
	@for $i from 1 through $ringNumber {
		&:nth-child(#{$i}) {
			animation-delay: ($animationDuration / $ringNumber) * -1 * ($i - 1);
			.line {
				@for $i from 1 through $lineNumber {
					$deg: 360 / $lineNumber;
					&:nth-child(#{$i}) {
						background: hsl(random(30) * $i, 50%, 60%);
						transform: rotate(($deg * $i - random(10)) + deg)
							translateY(random(50) + px)
							scaleY(random(1));
					}
				}
			}
		}
	}
}

@keyframes drive {
	0% {
		opacity: 0.1;
		transform: scale(1);
	}
	90% {
		opacity: 1;
	}
	100% {
		transform: scale(4);
		opacity: 1;
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=083-68038618.js.map
