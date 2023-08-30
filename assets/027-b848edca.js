import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-89363db9.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a3b60eb7.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"27-checklist",children:[t.jsx(n.code,{children:"#27"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/27/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Checklist"})]}),`
`,t.jsx(n.p,{children:"Checklist: What's the great thing about working through your to-do list? That's right, the relieving feeling when you can check off the tasks."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/poqgeaz",target:"_blank",rel:"nofollow noopener noreferrer",children:"#27 CSS Challenge / Checklist"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#27 CSS Challenge / Checklist",src:"https://codepen.io/mulander/embed/poqgeaz?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay",target:"_blank",rel:"nofollow noopener noreferrer",children:"transition-delay"})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"transition-delay"})," CSS property specifies the duration to wait before starting a property's transition effect when its value changes."]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Syntax"})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-yaml",children:`/* <time> values */
transition-delay: 3s;
transition-delay: 2s, 4ms;

/* Global values */
transition-delay: inherit;
transition-delay: initial;
transition-delay: revert;
transition-delay: revert-layer;
transition-delay: unset;
`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .todo
	.header
		h4 friday
		h3 march 4,2016
	.list
		- for(let i = 0; i < 4; i++)
			li.item
				input(type="checkbox", name='do-' + i, id="do-"+i)
				label.item-slot(for='do-' + i)
					div ToDo
					.checker: svg(width="15px" height="10px"): polyline(points="1,5 6,9 14,1" stroke="currentColor" fill="none")
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
ul.list,
li.item {
	list-style: none;
}
.item input[type="checkbox"] {
	appearance: none;
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
	font-family: "Open Sans", Helvetica, sans-serif;
	background: linear-gradient(to top right, #fda231 0%, #fdca31 100%);
	color: #fff;
}
.todo {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 240px;
	padding: 0 30px;
	background: #ffffff;
	color: #497081;
	box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
}
.header {
	padding: 20px 0;
	text-align: center;
	text-transform: capitalize;
	border-bottom: 1px solid #d4dce0;
	h4 {
		font-weight: 600;
		font-size: 20px;
		line-height: 30px;
		text-align: center;
	}
	h3 {
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
	}
}

.list {
	display: grid;
	gap: 20px;
	padding-bottom: 20px;
	.item {
		.item-slot {
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #497081;
			transition: all 0.3s ease-in-out;
			.checker {
				position: relative;
				width: 15px;
				height: 15px;
				&::after {
					content: "";
					position: absolute;
					width: 100%;
					height: 100%;
					border-radius: 50%;
					border: 1px solid;
					top: 0;
					left: 0;
					transition: all 0.4s ease-in 0.5s;
				}
				svg polyline {
					stroke-dasharray: 0 30;
					transition: all 0.5s ease-out;
				}
			}
		}
		input[type="checkbox"]:checked ~ .item-slot {
			color: #c8d4d9;
			.checker {
				&::after {
					transition: all 0.4s ease-in;
					transform: scale(1.5);
					transform-origin: center center;
					opacity: 0;
				}
				svg polyline {
					stroke-dasharray: 30 30;
					transition: all 0.5s ease-out 0.4s;
				}
			}
		}
	}
}
`})})]})}function y(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{y as default};
//# sourceMappingURL=027-b848edca.js.map
