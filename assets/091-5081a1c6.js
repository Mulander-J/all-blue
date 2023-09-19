import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-04ed5b14.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(o,{}),`
`,t.jsxs(n.h1,{id:"91-cube-loader",children:[t.jsx(n.code,{children:"#91"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/91/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cube Loader"})]}),`
`,t.jsx(n.p,{children:"Cube Loader: This will be the result if you have too much time coding a loading animation."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/qBLXjBw",target:"_blank",rel:"nofollow noopener noreferrer",children:"#91 CSS Challenge / Cube Loader"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#91 CSS Challenge / Cube Loader",src:"https://codepen.io/mulander/embed/qBLXjBw?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="cube">
		<div class="slice front"></div>
		<div class="slice back"></div>
		<div class="slice top"></div>
		<div class="slice topFloat"></div>
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
	background: #34495e;
	perspective: 800px;
}

$l: 100px;
$halfL: $l / 2;
$dur: 2s;
$wall: rgba(#000, 0.1);
$highlight: blue;

.cube {
	position: absolute;
	top: 150px;
	left: 150px;
	height: $l;
	width: $l;
	transform-origin: center center;
	transform-style: preserve-3d;
	transform: rotateX(-25deg) rotateY(45deg);
	transition: all 0.5s ease-in-out;
	&:hover {
		transform: rotateX(-25deg) rotateY(45deg) translateY(-15px);
	}
	.slice {
		position: absolute;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		border: 1px solid rgba(#fff, 0.1);
		top: 0;
		left: 0;
		opacity: 0.8;
		background: rgba(#000, 0.1);
	}

	.front {
		transform: rotateY(0) translateZ($halfL);
	}

	.back {
		transform: rotateY(180deg) translateZ($halfL);
	}

	.left {
		transform: rotateY(-90deg) translateZ($halfL);
	}

	.right {
		transform: rotateY(90deg) translateZ($halfL);
	}

	.top {
		transform: rotateX(90deg) translateZ($halfL);
	}
	.topFloat {
		transform: rotateX(90deg) translateZ(-1 * $halfL);
		background: linear-gradient(225deg, rgba(#000,.6), $highlight);
		background-size: 100% 200%;
		animation: float-top $dur linear both alternate infinite,
			float $dur / 2 ease both alternate infinite;
	}

	.bottom {
		transform: rotateX(-90deg) translateZ($halfL);
		background: $highlight;
		box-shadow: -4px -4px 10px 10px rgba(0, 0, 0, 0.4);
	}
	.front,
	.back,
	.left,
	.right {
		background: linear-gradient(
			to bottom,
			$wall,
			$wall 50%,
			$highlight 50%,
			$highlight
		);
		background-size: 100% 200%;
		animation: float $dur linear both alternate infinite;
	}
}

@keyframes float {
	80%,
	100% {
		background-position: 0% 100%;
	}
}
@keyframes float-top {
	80%,
	100% {
		transform: rotateX(90deg) translateZ($halfL);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=091-5081a1c6.js.map
