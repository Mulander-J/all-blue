import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-462ee75c.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},i(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{}),`
`,t.jsxs(n.h1,{id:"51-css-counter",children:[t.jsx(n.code,{children:"#51"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/51/",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS Counter"})]}),`
`,t.jsx(n.p,{children:"CSS Counter: You think with CSS you can't count to a thousand and even pause the whole thing at the push of a button? Then take a look at the code."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/NWeRVjE",target:"_blank",rel:"nofollow noopener noreferrer",children:"#51 CSS Challenge / CSS Counter"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#51 CSS Challenge / CSS Counter",src:"https://codepen.io/mulander/embed/NWeRVjE?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame
	input#counter.toggle(type="checkbox", name="state")
	label(for="counter")
		button.play Play
		button.pause Pause
	.timeBoard
		.unit.m_ten
			- for(let i = 0; i < 6; i++)
				span
		.unit.m_single
			- for(let i = 0; i < 10; i++)
				span
		.unit: span :
		.unit.s_ten
			- for(let i = 0; i < 6; i++)
				span
		.unit.s_single
			- for(let i = 0; i < 10; i++)
				span
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
	background: skyblue;
	color: #333;
}

$h: 80px;
$min_sec: 60;

/* Counter Toggle */
.toggle {
	display: none;
	& ~ label {
		position: absolute;
		display: block;
		width: 100px;
		height: 30px;
		top: 200px;
		left: 150px;
		button {
			position: absolute;
			cursor: pointer;
			pointer-events: none;
			width: 100%;
			height: 100%;
			appearance: none;
			outline: none;
			border: none;
			padding: 0;
			margin: 0;
			box-sizing: border-box;
			transition: all 0.6s ease;
		}
		.play {
			opacity: 0;
			transform: scale(0);
			visibility: hidden;
		}
		.pause {
			opacity: 1;
			transform: scale(1);
			visibility: visible;
		}
	}

	&:checked {
		& ~ label {
			.play {
				opacity: 1;
				transform: scale(1);
				visibility: visible;
			}
			.pause {
				opacity: 0;
				transform: scale(1);
				visibility: hidden;
			}
		}
		~ .timeBoard .unit {
			animation-play-state: paused;
		}
	}
}

/* Time Board */
.timeBoard {
	position: absolute;
	top: 100px;
	left: 100px;
	width: 200px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	background: #fff;
	border-radius: 3px;
	box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.3);
	padding: 0 6px;
	overflow: hidden;
	.unit {
		position: relative;
		text-align: center;
		display: grid;
		height: $h;
		line-height: $h;
		box-sizing: border-box;
		span {
			display: block;
			font-size: 24px;
			font-weight: 800;
		}
	}
}

/* Specific unit */
.s_single {
	counter-reset: s_s -1;
	animation: count-10 10s steps(1) both infinite;
}
.s_single span::after {
	counter-increment: s_s 1;
	content: counter(s_s);
}
.s_ten {
	counter-reset: s_t -1;
	animation: count-6 $min_sec * 1s steps(1) both infinite;
}
.s_ten span::after {
	counter-increment: s_t 1;
	content: counter(s_t);
}
.m_single {
	counter-reset: m_s -1;
	animation: count-10 $min_sec * 10s steps(1) both infinite;
}
.m_single span::after {
	counter-increment: m_s 1;
	content: counter(m_s);
}
.m_ten {
	counter-reset: m_t -1;
	animation: count-6 $min_sec * 6 * 10s steps(1) both infinite;
}
.m_ten span::after {
	counter-increment: m_t 1;
	content: counter(m_t);
}

@keyframes count-10 {
	@for $i from 0 through 9 {
		#{$i}0% {
			transform: translateY(-1 * $i * $h);
		}
	}
}
@keyframes count-6 {
	@for $i from 0 through 5 {
		#{$i * 100 / 6}% {
			transform: translateY(-1 * $i * $h);
		}
	}
}
`})})]})}function _(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{_ as default};
//# sourceMappingURL=051-3b1521b0.js.map
