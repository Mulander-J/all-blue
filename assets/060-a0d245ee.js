import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as l}from"./index-2b9b71ef.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(l,{}),`
`,t.jsxs(n.h1,{id:"60-blurry-overlay",children:[t.jsx(n.code,{children:"#60"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/60/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Blurry Overlay"})]}),`
`,t.jsx(n.p,{children:"Blurry Overlay: Backdrop blur effects are very trendy, but they are difficult to implement with CSS without any tricks."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/yLGbPWL",target:"_blank",rel:"nofollow noopener noreferrer",children:"#60 CSS Challenge / Blurry Overlay"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#60 CSS Challenge / Blurry Overlay",src:"https://codepen.io/mulander/embed/yLGbPWL?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .center
	- for(let i = 0; i < 10; i++)
		.hov
	.cover
		.text hover
	.text hover
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$lines: 10;
$h: 400 / $lines;

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
	color: #fff;
	background: #34495e;
}
.center {
	position: relative;
	height: 400px;
	width: 400px;
	display: grid;
	.hov {
		position: relative;
		z-index: 4;
		width: 100%;
		height: #{$h}px;
		@for $i from 1 through $lines {
			&:nth-child(#{$i}):hover {
				// background: rgba(255,255,255,.3);
				& ~ .cover {
					height: #{$h * $i}px;
				}
			}
		}
	}
	.text {
		position: absolute;
		top: 200px;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		font-size: 60px;
		line-height: 60px;
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;
	}
	.cover {
		position: absolute;
		z-index: 3;
		top: 0;
		left: 0;
		width: 100%;
		height: 200px;
		// background: rgba(230, 126, 34, 0.8);
		background:#e67e22;
		// backdrop-filter: blur(4px);
		overflow:hidden;
		transition: height 0.3s ease;
		.text {
			color: transparent;
			text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=060-a0d245ee.js.map
