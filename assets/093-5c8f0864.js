import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"93-padlock",children:[t.jsx(n.code,{children:"#93"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/93/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Padlock"})]}),`
`,t.jsx(n.p,{children:"Padlock: Did you know you can combine multiple box-shadows? This will help you on this one."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/XWoaaed",target:"_blank",rel:"nofollow noopener noreferrer",children:"#93 CSS Challenge / Padlock"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#93 CSS Challenge / Padlock",src:"https://codepen.io/mulander/embed/XWoaaed?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .lock
	.hang
	.plate
		.dot
		.ring
			- for(let i = 0; i < 24; i++)
				.split
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$splits: 24;
$degs: 360deg / $splits;

* {
	margin: 0;
	padding: 0;
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
	overflow: hidden;
	background: #f57e15;
}
.lock {
	width: 200px;
	height: 200px;
	margin: 100px auto;
	&:hover {
		.plate .ring {
			transform: rotate(360deg);
		}
	}
}
.hang {
	margin: 0 auto;
	width: 120px;
	height: 120px;
	border-radius: 60px 60px 0 0;
	border: 10px solid #d1dde5;
	box-shadow: inset 4px 4px 1px 0 rgba(0, 0, 0, 0.3),
		inset -3px -2px 1px 0 rgba(255, 255, 255, 0.8),
		4px 8px 12px 0 rgba(0, 0, 0, 0.2);
}
.plate {
	position: relative;
	margin: -30px auto 0;
	width: 160px;
	height: 160px;
	background: radial-gradient(
		circle at 50%,
		#333,
		#333 59.5%,
		#d1dde5 60.5%,
		#d1dde5
	);
	border-radius: 50%;
	box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.2);
	.dot {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background: #d1dde5;
		box-shadow: inset 2px 4px 1px 0 rgba(255, 255, 255, 0.8),
			inset -1px -2px 1px 0 rgba(0, 0, 0, 0.2);
	}
	.ring {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 14px;
		transition: all 1s ease;
		counter-reset: split;
		.split {
			position: absolute;
			height: 10px;
			width: 2px;
			border-radius: 2px;
			top: 135px;
			left: 79px;
			transform-origin: center -55px;
			&:nth-child(odd) {
				background: #d1dde5;
				box-shadow: 0 -11px 0px 5px #f57e15;
			}
			&:nth-child(even) {
				background: #0f0;
			}
			&::after {
				display: block;
				top: -12px;
				left: 50%;
				transform: translate(-50%, 0);
				position: absolute;
				color: #fff;
				font-size: 8px;
				counter-increment: split;
				content: counter(split);
			}
		}
	}
}

@for $i from 1 through $splits {
	.split:nth-child(#{$i}) {
		transform: rotate(($i - 1) * $degs);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=093-5c8f0864.js.map
