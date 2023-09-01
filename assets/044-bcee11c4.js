import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-94a16e9f.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c1bd5c42.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"44-twisted-pyramid",children:[n.jsx(t.code,{children:"#44"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/44/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Twisted Pyramid"})]}),`
`,n.jsx(t.p,{children:"Twisted Pyramid: Impressive how quickly squares can become a spiral."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/BavzaxQ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#44 CSS Challenge / Twisted Pyramid"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#44 CSS Challenge / Twisted Pyramid",src:"https://codepen.io/mulander/embed/BavzaxQ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`// pug

.frame
	- for(let i = 0; i < 20; i++)
		.cube
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
	background: black;
}
$gap: 10px;
$countCube: 200px / $gap; /* 20 */
.cube {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid;
	background: #222;
	aspect-ratio: 1/1;
	animation: rotate 2s linear alternate infinite,
		clip 8s linear alternate infinite;
	@for $i from 1 through $countCube {
		&:nth-of-type(#{$i}) {
			height: $gap * ($countCube - $i);
			z-index: $i;
			color: hsl(5 * $i, 100%, 50%);
			animation-delay: 0.03s * $i;
		}
	}
}
@keyframes rotate {
	from {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	to {
		transform: translate(-50%, -50%) rotate(360deg);
	}
}
@keyframes clip {
	0% {
		clip-path: none;
	}
	25% {
		clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
	}
	50% {
		clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
	}
	75% {
		clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
	}
	100% {
		clip-path: polygon(0 33%, 34% 33%, 35% 0%, 65% 0%, 65% 33%, 100% 33%, 100% 59%, 65% 58%, 65% 100%, 35% 100%, 35% 59%, 0 58%);
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=044-bcee11c4.js.map
