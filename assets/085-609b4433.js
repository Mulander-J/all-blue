import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-8438cb78.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(s,{}),`
`,t.jsxs(n.h1,{id:"85-its-something",children:[t.jsx(n.code,{children:"#85"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/85/",target:"_blank",rel:"nofollow noopener noreferrer",children:"It's something"})]}),`
`,t.jsx(n.p,{children:"It's something: I really don't know what this should be. But is it rotating or just going up and down for you?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/GRPEwWW",target:"_blank",rel:"nofollow noopener noreferrer",children:"#85 CSS Challenge / It's something"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#85 CSS Challenge / It's something",src:"https://codepen.io/mulander/embed/GRPEwWW?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="left"></div>
</div>
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
	overflow: hidden;
	background: #333;
	transform-style: preserve-3d;
}
.left {
	position: absolute;
	width: 200px;
	height: 200px;
	overflow: hidden;
	transform: rotateX(0);
	transform-origin: 200px 200px;
	animation: swing 2s linear both alternate infinite;
	-webkit-box-reflect: right -4px;
	color: #fff;
}
.left::after {
	content: "";
	position: absolute;
	bottom: 0;
	right: 0;
	height: 400px;
	width: 400px;
	border: 4px dotted;
	border-radius: 50%;
}
@keyframes swing {
	0% {
		transform: rotateX(30deg);
		opacity: 1;
		color: #0f0;
	}
	50% {
		opacity: 0;
		color: #fff;
	}
	100% {
		opacity: 1;
		color: #f00;
		transform: rotateX(150deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=085-609b4433.js.map
