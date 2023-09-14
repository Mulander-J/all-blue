import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-33e7d280.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",pre:"pre",h3:"h3"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"86-newtons-cradle",children:[t.jsx(n.code,{children:"#86"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/86/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Newton's Cradle"})]}),`
`,t.jsx(n.p,{children:"Newton's Cradle: Do you have one of these click-clack-things on your desk? If not, just look at this one."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/LYMLMNy",target:"_blank",rel:"nofollow noopener noreferrer",children:"#86 CSS Challenge / Newton's Cradle"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#86 CSS Challenge / Newton's Cradle",src:"https://codepen.io/mulander/embed/LYMLMNy?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/rotate",target:"_blank",rel:"nofollow noopener noreferrer",children:"rotate"})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"rotate"})," CSS property allows you to specify rotation transforms individually and independently of the ",t.jsx(n.code,{children:"transform"})," property."]}),`
`,t.jsxs(n.p,{children:["This maps better to typical user interface usage, and saves having to remember the exact order of ",t.jsx(n.code,{children:"transform"})," functions to specify in the ",t.jsx(n.code,{children:"transform"})," property."]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Syntax"})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-yaml",children:`/* Keyword values */
rotate: none;

/* Angle value */
rotate: 90deg;
rotate: 0.25turn;
rotate: 1.57rad;

/* x, y, or z axis name plus angle */
rotate: x 90deg;
rotate: y 0.25turn;
rotate: z 1.57rad;

/* Vector plus angle value */
rotate: 1 1 1 90deg;

/* Global values */
rotate: inherit;
rotate: initial;
rotate: revert;
rotate: revert-layer;
rotate: unset;
`})}),`
`,t.jsxs(n.h3,{id:"transformrotate-vs-rotate",children:[t.jsx(n.code,{children:"transform.rotate"})," vs ",t.jsx(n.code,{children:"rotate"})]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`.rotate {
  rotate: 0 0 1 30deg;
}
/* equals */
.rotate {
  rotate: z 30deg;
}
/* equals */
.rotate {
  transform: rotate(30deg);
}

`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="top"></div>
		<div class="hangs">
			<div class="hang"></div>
			<div class="hang"></div>
			<div class="hang"></div>
			<div class="hang"></div>
			<div class="hang"></div>
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
	background: #34495e;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.top {
	width: 200px;
	height: 4px;
	border-radius: 4px;
	background: #efefef;
}
.hangs {
	margin: 0 auto;
	display: grid;
	width: 180px;
	height: 140px;
	grid-template-columns: repeat(5, 1fr);
	.hang {
		position: relative;
		height: 100%;
		width: 100%;
		transform-origin: center top;
		rotate: 0deg;
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			height: 70%;
			width: 2px;
			background: #fff;
			box-shadow: 1px 0 4px 1px rgba(0, 0, 0, 0.3);
		}
		&::after {
			cursor: pointer;
			content: "";
			position: absolute;
			top: 70%;
			width: 100%;
			aspect-ratio: 1/1;
			border-radius: 50%;
			background: radial-gradient(#fff, #333);
		}
	}
}

.hang:nth-child(1) {
	animation: swing-l 0.8s ease-out both alternate infinite;
}
.hang:nth-child(5) {
	animation: swing-r 0.8s 0.8s ease-out both alternate infinite;
}
@keyframes swing-l {
	0%,
	50% {
		rotate: z 0deg;
		/* transform: rotate(0); */
	}
	100% {
		rotate: z 30deg;
		/* transform: rotate(30deg); */
	}
}
@keyframes swing-r {
	0%,
	50% {
		rotate: 0 0.5 0 0deg;
		/* transform: rotate(0); */
	}
	100% {
		rotate: 0 0.5 1 -30deg;
		/* transform: rotate(-30deg); */
	}
}
`})})]})}function b(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{b as default};
//# sourceMappingURL=086-85e6e053.js.map
