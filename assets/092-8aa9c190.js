import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-83d9217b.js";import{u as l}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function a(t){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},l(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(r,{}),`
`,n.jsxs(e.h1,{id:"92-dancing-points",children:[n.jsx(e.code,{children:"#92"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/92/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Dancing Points"})]}),`
`,n.jsx(e.p,{children:"Dancing Points: Can you recognize the underlying pattern which controls the single points?"}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/eYbERKX",target:"_blank",rel:"nofollow noopener noreferrer",children:"#92 CSS Challenge / Dancing Points"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#92 CSS Challenge / Dancing Points",src:"https://codepen.io/mulander/embed/eYbERKX?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
	<div class="bottom-half">
		<div class="top-half">
			<div class="ball ball-x"></div>
			<div class="ball ball-x-2"></div>
			<div class="ball ball-y"></div>
			<div class="ball ball-y-2"></div>
		</div>
	</div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`$frame_size: 400px;
$ball_size: 10px;
$halfFrame: $frame_size / 2;
$halfBall: $ball_size / 2;
$dur: 1.5s;

.frame {
	position: absolute;
	top: 50%;
	left: 50%;
	width: $frame_size;
	height: $frame_size;
	margin-top: -1 * $halfFrame;
	margin-left: -1 * $halfFrame;
	border-radius: 2px;
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	background: #27ae60;
}

.ball {
	position: absolute;
	width: $ball_size;
	height: $ball_size;
	border-radius: 50%;
	background: #fff;
}
.ball-x {
	top: 0;
	left: $halfFrame - $halfBall;
	animation: an-ball-1 $dur linear alternate both infinite;
}
.ball-x-2 {
	top: $halfFrame - $halfBall;
	left: 0;
	animation: an-ball-2 $dur linear alternate both infinite;
}
.ball-y {
	top: 0;
	left: 0;
	animation: an-ball-3 $dur * 2 linear alternate both infinite;
}
.ball-y-2 {
	top: 0;
	left: 0;
	animation: an-ball-4 $dur * 2 linear alternate both infinite;
}
@keyframes an-ball-1 {
	to {
		transform: translate(-1 * ($halfFrame - $halfBall), $halfFrame - $halfBall);
	}
}
@keyframes an-ball-2 {
	to {
		transform: translate($halfFrame - $halfBall, -1 * ($halfFrame - $halfBall));
	}
}
@keyframes an-ball-3 {
	to {
		transform: translate($frame_size - $halfBall, $halfFrame - $halfBall);
	}
}
@keyframes an-ball-4 {
	to {
		transform: translate($halfFrame - $halfBall, $frame_size - $halfBall);
	}
}
.top-half {
	width: $halfFrame;
	height: $halfFrame;
	-webkit-box-reflect: right 0;
}
.bottom-half {
	width: $frame_size;
	height: $halfFrame;
	-webkit-box-reflect: below 0;
}
`})})]})}function g(t={}){const{wrapper:e}=Object.assign({},l(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(a,t)})):a(t)}export{g as default};
//# sourceMappingURL=092-8aa9c190.js.map
