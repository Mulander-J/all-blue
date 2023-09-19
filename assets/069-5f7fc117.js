import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"69-eye",children:[t.jsx(n.code,{children:"#69"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/69/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Eye"})]}),`
`,t.jsx(n.p,{children:"Eye: Do you also feel a little observed? Why not give that eye a few chic eyelashes?"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/gOZRrpY",target:"_blank",rel:"nofollow noopener noreferrer",children:"#69 CSS Challenge / Eye"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#69 CSS Challenge / Eye",src:"https://codepen.io/mulander/embed/gOZRrpY?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="eye">
		<div class="lid">
			<div class="ball"></div>
		</div>
	</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$c_bg: #363847;
$c_eye: #d8d8d8;

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
	background: $c_bg;
}
.eye {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(45deg);
	width: 160px;
	height: 160px;
	border-radius: 100% 0;
	background: $c_bg;
	overflow: hidden;
}
.ball {
	position: absolute;
	top: 73.45px;
	left: 73.45px;
	height: 80px;
	width: 80px;
	border-radius: 50%;
	box-sizing: border-box;
	border: 20px solid #fff;
	background: radial-gradient(
		#418d2c,
		#5faf4a,
		#6ba44b,
		#86a414,
		#4f7135,
		#273120,
		#148977,
		#1eb6bb
	);
	animation: ball 3s ease-in-out both infinite;
}
.lid {
	position: absolute;
	top: -21%;
	left: -21%;
	width: 141%;
	height: 141%;
	transform: rotate(45deg);
	background: $c_eye;
	clip-path: ellipse(22% 50% at 50% 50%);
	animation: lid 3s ease-in-out both infinite;
}
@keyframes lid {
	0%,
	10%,
	18%,
	26%,
	34%,
	48%,
	56%,
	76%,
	84%,
	100% {
		clip-path: ellipse(22% 50% at 50% 50%);
	}
	14%,
	30%,
	52%,
	80% {
		clip-path: ellipse(0% 50% at 50% 50%);
	}
}
@keyframes ball {
	0%,
	14%,
	56% {
		transform: rotate(-45deg) translateX(0);
	}
	18%,
	30% {
		transform: rotate(-45deg) translate(-25px, 5px) scale(0.9);
	}
	34%,
	52% {
		transform: rotate(-45deg) translate(25px, 10px) scale(0.9);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=069-5f7fc117.js.map
