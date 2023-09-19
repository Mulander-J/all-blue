import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-04ed5b14.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsxs(t.h1,{id:"63-hypnotic-ring",children:[n.jsx(t.code,{children:"#63"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/63/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Hypnotic Ring"})]}),`
`,n.jsx(t.p,{children:"Hypnotic Ring: A few animated dots on circles and you find yourself in the longest tunnel in the world."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/PoXmQyW",target:"_blank",rel:"nofollow noopener noreferrer",children:"#63 CSS Challenge / Hypnotic Ring"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#63 CSS Challenge / Hypnotic Ring",src:"https://codepen.io/mulander/embed/PoXmQyW?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`// pug

.frame
	- for(let i = 0; i < 50; i ++)
		.dotRing
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`$count: 50;

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
	background: #27ae60;
}
.dotRing {
	position: absolute;
	width: 200px;
	height: 200px;
	top: 100px;
	left: 100px;
	border-radius: 50%;
	border: 2px dotted #fff;
	transform-origin: 50% 50%;
	animation: ring 10s ease both infinite;
	@for $i from 1 through $count {
		&:nth-child(#{$i}) {
			animation-delay: 0.2s * $i;
		}
	}
	&:nth-child(odd){
		border-style:dashed;
		border-color: #ff0;
	}
	&:nth-child(even){
		border-style:dotted;
		border-color: #fff;
	}
}
@keyframes ring {
	0% {
		transform: scale(0) translate(-200px, -200px);
		opacity: 0.4;
	}
	100% {
		transform: scale(3.5) translate(0px, 0px);
		opacity: 1;
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=063-529644d7.js.map
