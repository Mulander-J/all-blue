import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-2b9b71ef.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsxs(t.h1,{id:"52-dot-wave",children:[n.jsx(t.code,{children:"#52"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/52/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dot Wave"})]}),`
`,n.jsx(t.p,{children:"Dot Wave: I feel like I go into hypnosis if I stare at it too long."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/XWopBdX",target:"_blank",rel:"nofollow noopener noreferrer",children:"#52 CSS Challenge / Dot Wave"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#52 CSS Challenge / Dot Wave",src:"https://codepen.io/mulander/embed/XWopBdX?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
	<div class="ring"></div>
</div>
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`.frame {
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
	background: #000;
	perspective: 100px;
}
.ring {
	position: absolute;
	aspect-ratio: 1/1;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	transform-style: preserve-3d;
	border: 0px dotted white;
	opacity: 0;
	transform: translate3d(-50%, -50%, 0) rotate(0);
	box-shadow: inset 0 0 4px 2px #0f0, 0 0 4px 1px #0f0;
	@for $i from 1 through 10 {
		&:nth-of-type(#{$i}) {
			height: #{(80 + $i * 20)}px;
			animation: blink2 2s #{$i / 3}s ease-in-out infinite both;
		}
	}
}

@keyframes blink2 {
	0%,
	100% {
		border: 0px dotted #fff;
		opacity: 0;
		transform: translate3d(-50%, -50%, 0) rotate(0);
	}
	50% {
		border: 8px dotted #ff0;
		opacity: 1;
		transform: translate3d(-50%, -50%, 10px) rotate(90deg);
	}
}
`})})]})}function b(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{b as default};
//# sourceMappingURL=052-a6bd3efc.js.map
