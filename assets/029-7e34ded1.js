import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-462ee75c.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"29-search-field",children:[t.jsx(n.code,{children:"#29"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/29/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Search Field"})]}),`
`,t.jsx(n.p,{children:"Search Field: You won't find anything unless you start looking. So go ahead, write something in the search box."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/jOXWwBZ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#29 CSS Challenge / Search Field"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#29 CSS Challenge / Search Field",src:"https://codepen.io/mulander/embed/jOXWwBZ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="field">
			<input type="text" placeholder="Start typing..." />
			<button class="btn-search">
				<svg viewBox="0 0 1024 1024">
					<path d="M945.066667 898.133333l-189.866667-189.866666c55.466667-64 87.466667-149.333333 87.466667-241.066667 0-204.8-168.533333-373.333333-373.333334-373.333333S96 264.533333 96 469.333333 264.533333 842.666667 469.333333 842.666667c91.733333 0 174.933333-34.133333 241.066667-87.466667l189.866667 189.866667c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333c8.533333-12.8 8.533333-34.133333-2.133333-46.933334zM469.333333 778.666667C298.666667 778.666667 160 640 160 469.333333S298.666667 160 469.333333 160 778.666667 298.666667 778.666667 469.333333 640 778.666667 469.333333 778.666667z" fill="currentColor"></path>
				</svg>
			</button>
			<ul class="list">
				<li class="item">1111</li>
				<li class="item">2222</li>
			</ul>
		</div>
	</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
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
	background: skyblue;
	color: #fff;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.field {
	position: relative;
	width: 240px;
	box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
	input {
		outline: none;
		appearance: none;
		border: none;
		float: left;
		width: 200px;
		padding: 10px 20px;
		height: 40px;
		line-height: 20px;
		font-weight: 600;
		font-size: 14px;
		color: #4d8dcb;
		background: #fff;
	}
	.btn-search {
		position: relative;
		width: 40px;
		height: 40px;
		border: none;
		appearance: none;
		border-radius: 0;
		background: #fff;
		color: #5ca4ea;
		font-size: 14px;
		padding: 0;
		cursor: pointer;
		user-select: none;
		svg {
			width: 60%;
			height: 60%;
		}
	}
}

ul.list,
li.item {
	list-style: none;
}
.list {
	user-select: none;
	position: absolute;
	padding: 10px 20px;
	background: #fff;
	top: 41px;
	left: 0;
	width: 100%;
	color: #444;
	display: grid;
	opacity: 0;
	transform: translateY(50%);
	transition: 0.5s ease-in-out;
	.item {
		cursor: pointer;
		transition: color 0.3s ease;
		padding: 10px;
		&:hover {
			color: #4d8dcb;
		}
	}
}

.field input:focus ~ ul.list {
	opacity: 1;
	transform: translateY(0);
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=029-7e34ded1.js.map
