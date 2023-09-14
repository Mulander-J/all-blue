import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-33e7d280.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"32-counter",children:[t.jsx(n.code,{children:"#32"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/32/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Counter"})]}),`
`,t.jsx(n.p,{children:"Counter: I wonder how high or low is the maximum you can count here? The transitions are pure CSS, but I used some JS for the counting."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/PoXZLep",target:"_blank",rel:"nofollow noopener noreferrer",children:"#32 CSS Challenge / Counter"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#32 CSS Challenge / Counter",src:"https://codepen.io/mulander/embed/PoXZLep?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .counter
	.action.mins(onclick="count(-1)") —
	#val.value(def="0", fr="0", to="0")
	.action.add(onclick="count(1)") +
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
	background: linear-gradient(45deg, orange, yellow);
	color: white;
}
.counter {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: min-content;
	padding: 4px;
	border-radius: 20px;
	background: white;
	box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	.action {
		cursor: pointer;
		user-select: none;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		text-align: center;
		line-height: 40px;
		font-weight: 600;
		font-size: 18px;
		background: transparent;
		box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		&.add {
			color: #0f0;
			&:hover {
				background: #0f0;
				color: white;
			}
		}
		&.mins {
			color: #f00;
			&:hover {
				background: #f00;
				color: white;
			}
		}
	}
	.value {
		position: relative;
		width: 50px;
		height: 40px;
		&::after,
		&::before {
			position: absolute;
			width: 100%;
			line-height: 40px;
			text-align: center;
			font-weight: 600;
			color: #333;
		}
		&::before {
			content: attr(to);
			opacity: 1;
		}
		&::after {
			content: attr(fr);
			opacity: 0;
		}
	}
	.fade-in::after,
	.fade-out::before {
		opacity: 0;
		animation: fadeIn 0.5s 0.3s ease both;
	}
	.fade-in::before,
	.fade-out::after {
		opacity: 1;
		animation: fadeOut 0.5s ease both;
	}
}

@keyframes fadeOut {
	from {
		transform: scale(1);
		opacity: 1;
	}
	to {
		transform: scale(1.2);
		opacity: 0;
	}
}
@keyframes fadeIn {
	from {
		transform: scale(0);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-js",children:`const count = (op) => {
	const ele = document.querySelector("#val");
	const res = ele.getAttribute("def") * 1 + op;
	ele.setAttribute("def", res);
	if (ele.classList.contains("fade-in")) {
		ele.setAttribute("fr", res - op);
		ele.setAttribute("to", res);
		ele.classList.remove("fade-in");
		ele.classList.add("fade-out");
	} else {
		ele.setAttribute("to", res - op);
		ele.setAttribute("fr", res);
		ele.classList.remove("fade-out");
		ele.classList.add("fade-in");
	}
};
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=032-8084e4dc.js.map
