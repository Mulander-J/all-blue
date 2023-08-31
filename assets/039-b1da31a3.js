import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-ea668d1f.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-56087800.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},i(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{}),`
`,t.jsxs(n.h1,{id:"39-menu-toggle",children:[t.jsx(n.code,{children:"#39"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/39/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Menu Toggle"})]}),`
`,t.jsx(n.p,{children:"Menu Toggle: What looks like another simple menu icon turns out to be a full-fledged navigation."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/KKbzLWw",target:"_blank",rel:"nofollow noopener noreferrer",children:"#39 CSS Challenge / Menu Toggle"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#39 CSS Challenge / Menu Toggle",src:"https://codepen.io/mulander/embed/KKbzLWw?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="menu stop" onclick="this.classList.toggle('active');this.classList.remove('stop')">
		<div class="trigger"></div>
		<ul class="nav">
			<li>galaxy</li>
			<li>home</li>
			<li>user</li>
			<li>setting</li>
		</ul>
	</div>
</div>
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
	background: #4a627a;
	color: #fff;
}

.menu {
	position: relative;
	max-width: 300px;
	margin: 150px auto;
	.trigger {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 40px;
		width: 20%;
		animation: close 0.75s ease both;
		&::before,
		&::after {
			content: "";
			position: absolute;
			left: 0;
			width: 100%;
			height: 4px;
			background-color: #fff;
			transform: scaleY(1);
			transition: all 0.75s ease-in;
		}
		&::before {
			top: 0;
		}
		&::after {
			bottom: 0;
		}
	}

	ul,
	li {
		list-style: none;
	}
	.nav {
		display: flex;
		align-items: stretch;
		justify-content: space-between;
		font-size: 16px;
		line-height: 20px;
		font-weight: 600;
		gap: 16px;
		text-transform: uppercase;
		opacity: 0;
		transition: opacity 0.5s ease;
		li {
			position: relative;
			display: block;
			flex: 0 1 auto;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			&:hover {
				opacity: 0.6;
			}
		}
	}
}

.stop .trigger {
	animation: none;
}

.active {
	.trigger {
		animation: open 0.75s ease both;
		&::before,
		&::after {
			transform: scaleY(0.5);
			transition: transform 0.75s ease-out 0.3s;
		}
	}
	.nav {
		opacity: 1;
		transition: opacity 0.5s ease 0.75s;
	}
}

@keyframes open {
	0% {
		height: 40px;
	}
	20% {
		height: 20px;
	}
	40% {
		height: 60px;
		width: 20%;
	}
	100% {
		height: 60px;
		width: 100%;
	}
}
@keyframes close {
	0% {
		height: 60px;
		width: 100%;
	}
	40% {
		height: 60px;
		width: 20%;
	}
	100% {
		height: 40px;
		width: 20%;
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=039-b1da31a3.js.map
