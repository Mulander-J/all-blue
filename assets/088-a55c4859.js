import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"88-candle",children:[n.jsx(t.code,{children:"#88"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/88/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Candle"})]}),`
`,n.jsx(t.p,{children:"Candle: Thanks to the magic of border-radius, this flame is animated by CSS only. It looks way better than I would have imagined."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/mdaMOay",target:"_blank",rel:"nofollow noopener noreferrer",children:"#88 CSS Challenge / Candle"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#88 CSS Challenge / Candle",src:"https://codepen.io/mulander/embed/mdaMOay?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="fire"></div>
		<div class="candle"></div>
	</div>
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
	background: radial-gradient(#666, #2c3e50);
}
.center {
	position: absolute;
	top: 125px;
	left: 130px;
	width: 120px;
	height: 150px;
}
.candle {
	position: relative;
	margin: 0 auto;
	width: 60px;
	height: 100px;
	border-radius: 3px;
	background: linear-gradient(
		to right,
		#fefefe,
		#fefefe 90%,
		#e0e5ff 90%,
		#e0e5ff
	);
}
.candle::after {
	content: "";
	position: absolute;
	width: 120px;
	height: 8px;
	bottom: -8px;
	left: -50%;
	border-radius: 3px;
	background: #1b233e;
}
.fire {
	position: relative;
	width: 16px;
	height: 26px;
	margin: 0 auto 10px;
	background: #ffad00;
	border-radius: 8px /20px 20px 8px 8px;
	animation: flame 10s ease-in-out both infinite;
}
.fire::after {
	content: "";
	position: absolute;
	width: 4px;
	height: 15px;
	bottom: -15px;
	left: 6px;
	background: #ad88a9;
	border-radius: 2px 2px 0 0;
}
@keyframes flame {
	0%,
	22%,
	49%,
	62%,
	81%,
	100% {
		border-radius: 2px 14px 8px 8px/20px 20px 8px 8px;
		box-shadow: 0 0 10px 4px hsl(41, 100%, 60%);
	}
	14%,
	32%,
	56%,
	70%,
	89% {
		border-radius: 14px 2px 8px 8px/20px 20px 8px 8px;
		box-shadow: 0 0 10px 2px hsl(41, 100%, 50%);
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=088-a55c4859.js.map
