import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-2b9b71ef.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"48-3d-cube",children:[t.jsx(n.code,{children:"#48"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/48/",target:"_blank",rel:"nofollow noopener noreferrer",children:"3D Cube"})]}),`
`,t.jsx(n.p,{children:"3D Cube: With CSS you can work not only two-dimensional but also three-dimensional. Simple objects and animation are no problem."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/VwqKyKY",target:"_blank",rel:"nofollow noopener noreferrer",children:"#48 CSS Challenge / 3D Cube"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#48 CSS Challenge / 3D Cube",src:"https://codepen.io/mulander/embed/VwqKyKY?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="cube">
		<div class="slice front"></div>
		<div class="slice back"></div>
		<div class="slice top"></div>
		<div class="slice bottom"></div>
		<div class="slice left"></div>
		<div class="slice right"></div>
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
	font-family: "Open Sans", Helvetica, sans-serif;
	background: #e47512;
	perspective: 800px;
}

$l: 200px;
$halfL: $l / 2;

.cube {
	position: absolute;
	top: 100px;
	left: 100px;
	height: $l;
	width: $l;
	transform-origin: center center;
	transform-style: preserve-3d;
	animation: rotate 5s infinite linear;
	.slice {
		position: absolute;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid #444;
		box-shadow: 0 0 4px 16px #e9d35c;
		top: 0;
		left: 0;
		opacity: 0.8;
		--c: white;
		background: linear-gradient(
					to left,
					black,
					black 1px,
					transparent 1px,
					transparent
				)
				top left / 33.33% 33.33% repeat,
			linear-gradient(to top, black, black 1px, var(--c) 1px, var(--c)) top left /
				33.33% 33.33% repeat;
	}

	.front {
		transform: rotateY(0) translateZ($halfL);
		--c: white;
	}

	.back {
		--c: green;
		transform: rotateY(180deg) translateZ($halfL);
	}

	.left {
		--c: blue;
		transform: rotateY(-90deg) translateZ($halfL);
	}

	.right {
		--c: yellow;
		transform: rotateY(90deg) translateZ($halfL);
	}

	.top {
		--c: orange;
		transform: rotateX(90deg) translateZ($halfL);
	}

	.bottom {
		--c: red;
		transform: rotateX(-90deg) translateZ($halfL);
	}
}

@keyframes rotate {
	from {
		transform: rotateX(0deg) rotateY(0deg);
	}
	to {
		transform: rotateX(360deg) rotateY(360deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=048-0a999625.js.map
