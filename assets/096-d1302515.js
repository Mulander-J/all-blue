import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"96-jumping-square",children:[n.jsx(t.code,{children:"#96"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/96/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Jumping Square"})]}),`
`,n.jsx(t.p,{children:"Jumping Square: Squashed and stretched, this is how objects in motion should look like."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/jOXGxPp",target:"_blank",rel:"nofollow noopener noreferrer",children:"#96 CSS Challenge / Jumping Square"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#96 CSS Challenge / Jumping Square",src:"https://codepen.io/mulander/embed/jOXGxPp?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(t.p,{children:"When dealing with animations, if the keyframes are complex, consider splitting the animation"}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="translate">
			<div class="rotate">
				<div class="cube"></div>
			</div>
		</div>
		<div class="shadow"></div>
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
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
	background: skyblue;
}

.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.translate {
	animation: translate 0.8s ease-in-out alternate both infinite;
}

.rotate {
	animation: rotate 1.6s linear both infinite;
}

.cube {
	width: 100px;
	height: 100px;
	background: #fff;
	transform-origin: center center;
	animation: scale 1.6s ease-in-out both infinite;
}
.shadow {
	position: absolute;
	width: 80%;
	left: 10%;
	height: 2px;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.2);
	box-shadow: 0 0 0px 8px rgba(0, 0, 0, 0.2);
	animation: scale 1.6s ease-in-out both infinite;
}

@keyframes translate {
	from {
		transform: translateY(-100px);
	}
	to {
		transform: translateY(0px);
	}
}

@keyframes rotate {
	0% {
		transform: rotate(-135deg);
	}
	20%,
	93.66% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(45deg);
	}
}

@keyframes scale {
	0%,
	4% {
		transform: scale(1);
	}
	45% {
		transform: scale(1.8, 0.4);
	}
	100% {
		transform: scale(1);
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=096-d1302515.js.map
