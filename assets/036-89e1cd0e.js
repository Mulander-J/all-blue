import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-89363db9.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a3b60eb7.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{}),`
`,t.jsxs(n.h1,{id:"36-tabs",children:[t.jsx(n.code,{children:"#36"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/36/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tabs"})]}),`
`,t.jsx(n.p,{children:"Tabs: The solution for layouts with little space or many navigation levels."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/WNLwELm",target:"_blank",rel:"nofollow noopener noreferrer",children:"#36 CSS Challenge / Tabs"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#36 CSS Challenge / Tabs",src:"https://codepen.io/mulander/embed/WNLwELm?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .card: .tabs
	- for(let i = 1; i < 4; i++)
		if i==1
			input(type="radio", name="tab", id='tab' + i, checked)
		else
			input(type="radio", name="tab", id='tab' + i)
		label.tab(for='tab' + i)
			.tabItem= i
			.tabPanel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`* {
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
	overflow: hidden;
	font-family: "Open Sans", Helvetica, sans-serif;
	background: #2b3642;
	color: #fff;
}
$tabH: 40px;
$ctxH: 200px;
.card {
	position: absolute;
	width: 320px;
	height: $tabH + $ctxH;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: white;
	overflow: hidden;
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
}
.tabs {
	display: flex;
	align-items: center;
	width: 100%;
	height: $tabH;
	background: #3d4d5e;
	.tab {
		display: block;
		width: $tabH;
		height: $tabH;
		.tabItem {
			width: $tabH;
			height: $tabH;
			text-align: center;
			line-height: 38px;
			color: #8398ad;
			cursor: pointer;
			font-size: 14px;
			transition: background 0.5s ease-in-out;
		}
		.tabPanel {
			position: absolute;
			top: $tabH;
			left: 0;
			height: $ctxH;
			padding: 20px;
			font-size: 12px;
			line-height: 24px;
			color: #666;
			overflow: auto;
			transition: all 0.4s ease-in;
			opacity: 0;
			transform: translateY(20px);
		}
		&:hover .tabItem {
			color: #fff;
		}
	}
	input[type="radio"] {
		appearance: none;
		&:checked {
			& + .tab {
				z-index: 999;
				.tabItem {
					background: #5da2ed;
					color: #fff;
				}
				.tabPanel {
					opacity: 1;
					transform: translateY(0);
					transition: all 0.5s ease-out 0.4s;
				}
			}
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=036-89e1cd0e.js.map
