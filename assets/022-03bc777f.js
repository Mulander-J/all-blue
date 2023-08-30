import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-89363db9.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a3b60eb7.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",pre:"pre"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"22-fitness-tracker",children:[t.jsx(n.code,{children:"#22"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/22/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Fitness Tracker"})]}),`
`,t.jsx(n.p,{children:"Fitness Tracker: Don't sit on your chair all day long. Get up, jump, run, exercice and burn some calories."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/qBLdgLe",target:"_blank",rel:"nofollow noopener noreferrer",children:"#22 CSS Challenge / Fitness Tracker"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#22 CSS Challenge / Fitness Tracker",src:"https://codepen.io/mulander/embed/qBLdgLe?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsxs(n.p,{children:[t.jsx(n.code,{children:"Progress Circle Bar"})," Like ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/dywbQMJ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#10 Watch"})]}),`
`,t.jsx(n.h3,{id:"svg-animate",children:t.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate",target:"_blank",rel:"nofollow noopener noreferrer",children:"SVG Animate"})}),`
`,t.jsxs(n.p,{children:["The SVG ",t.jsx(n.code,{children:"<animate>"})," element provides a way to animate an attribute of an element over time."]}),`
`,t.jsx(n.p,{children:"Animation Attributes"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-yaml",children:`# Animation timing attributes
begin, dur, end, min, max, restart, repeatCount, repeatDur, fill
# Animation value attributes
calcMode, values, keyTimes, keySplines, from, to, by
# Other Animation attributes
Most notably: attributeName, additive, accumulate
# Animation event attributes
Most notably: onbegin, onend, onrepeat
`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="title">
		<p class="short">your daily</p>
		progress
	</div>
	<div class="center">
		<div class="stats">
			<svg class="progress" fill="none">
				<circle cx="50" cy="50" r="45" stroke="black" stroke-width="10px"></circle>
				<circle cx="50" cy="50" r="45" stroke="aqua" stroke-width="10px" stroke-linecap="round" stroke-dasharray="314">
					<animate attributeName="stroke-dasharray" values="0,314;314,0" dur="3" repeatCount="indefinite" calcMode="linear" />
					<animate attributeName="stroke" values="#f85b5b;aqua" dur="3" repeatCount="indefinite" calcMode="linear" />
				</circle>
			</svg>
			<div class="content">
				<h5>SVG</h5>
				<h6>Animate</h6>
			</div>
		</div>
		<div class="stats">
			<div class="ring">
				<div class="content">
					<h5>CSS</h5>
					<h6>Animate</h6>
				</div>
			</div>
		</div>
	</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$r: 50px;
$d: 2 * $r;
$h: 10px;

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
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
	font-family: "Open Sans", Helvetica, sans-serif;
	overflow: hidden;
	color: #fff;
	background-color: #28404e;
}
.title {
	font-weight: 600;
	font-size: 24px;
	text-transform: uppercase;
	text-align: center;
	line-height: 22px;
	margin: 50px 20px;
	.short {
		font-weight: 300;
		font-size: 16px;
	}
}
.center {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: column nowrap;
	gap: 20px;
}
.stats {
	position: relative;
	height: $d;
	width: $d;
}
.progress {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	transform: rotate(-90deg);
	transform-origin: center center;
}
.content {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
}
.ring {
	position: relative;
	width: $d;
	height: $d;
	padding: $h;
	border-radius: 50%;
	background: conic-gradient(#f85b5b calc(var(--angle, 0) * 1turn), black 0turn);
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	animation: an-ring 3s linear infinite;
	/* ring head */
	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 0px;
		left: calc(#{$r - $h / 2});
		width: $h;
		height: $h;
		border-radius: 50%;
		background: #f85b5b;
	}
	&::after {
		transform-origin: center $r;
		animation: an-head 3s linear infinite;
	}
	.content {
		width: $d - 2 * $h;
		height: $d - 2 * $h;
		border-radius: 50%;
		background: #28404e;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
}

@property --angle {
	syntax: "<number>";
	inherits: false;
	initial-value: 0;
}
@keyframes an-ring {
	to {
		--angle: 1;
	}
}
@keyframes an-head {
	to {
		rotate: 360deg;
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=022-03bc777f.js.map
