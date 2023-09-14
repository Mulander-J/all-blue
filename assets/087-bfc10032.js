import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-33e7d280.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"87-ruby",children:[t.jsx(n.code,{children:"#87"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/87/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Ruby"})]}),`
`,t.jsx(n.p,{children:"Ruby: Shine bright like a diamond...uh...ruby. Look carefully and don't forget the polish."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/VwqWReL",target:"_blank",rel:"nofollow noopener noreferrer",children:"#87 CSS Challenge / Ruby"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#87 CSS Challenge / Ruby",src:"https://codepen.io/mulander/embed/VwqWReL?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="ruby">
		<div class="top">
			<div class="tri-1"></div>
			<div class="tri-2"></div>
			<div class="tri-3"></div>
			<div class="append"></div>
		</div>
		<div class="bottom">
			<div class="tri-4"></div>
			<div class="tri-5"></div>
			<div class="tri-6"></div>
		</div>
	</div>
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
	background: #ffc902;
}
.ruby {
	position: absolute;
	width: 200px;
	height: 200px;
	left: 100px;
	top: 100px;
	&:hover .append::after {
		right: -150%;
		opacity: 0.2;
	}
}
.top {
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1.56fr 1fr;
	height: 42px;
	.tri-1 {
		z-index: 2;
		background: #9e0707;
		clip-path: polygon(0 100%, 59.3% 0%, 100% 100%);
	}
	.tri-3 {
		z-index: 2;
		background: #b90b0c;
		clip-path: polygon(0 100%, 40.7% 0%, 100% 100%);
	}
	.tri-2 {
		z-index: 2;
		background: #bc0e0e;
		clip-path: polygon(0 100%, 50% 0%, 100% 100%);
	}
	.append {
		position: absolute;
		z-index: 1;
		left: 16.6575%;
		height: 100%;
		width: 66.685%;
		overflow: hidden;
		background: linear-gradient(
			to right,
			#dc2323,
			#dc2323 50%,
			#f58181 50%,
			#f58181
		);
		&::after {
			content: "";
			position: absolute;
			top: 0;
			right: -230%;
			width: 400%;
			height: 4px;
			background: #ffdfdf;
			box-shadow: 0 0 5px 0 #ffdfdf;
			transform-origin: center center;
			transform: rotate(45deg);
			transition: all 0.4s ease;
		}
	}
}

.bottom {
	position: absolute;
	height: 84px;
	width: 100%;
	top: 41px;
	.tri-4 {
		position: absolute;
		left: 0;
		height: 100%;
		width: 50%;
		background: #890505;
		clip-path: polygon(0 0, 56% 0%, 100% 100%);
	}
	.tri-5 {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		height: 100%;
		width: 43.82%;
		background: #a51012;
		clip-path: polygon(0 0, 100% 0, 50% 100%);
	}
	.tri-6 {
		position: absolute;
		right: 0;
		height: 100%;
		width: 50%;
		background: #c81718;
		clip-path: polygon(100% 0, 44% 0%, 0% 100%);
	}
}
`})})]})}function v(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{v as default};
//# sourceMappingURL=087-bfc10032.js.map
