import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-cd188599.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2b3739ac.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"26-motivational-modal",children:[t.jsx(n.code,{children:"#26"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/26/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Motivational Modal"})]}),`
`,t.jsx(n.p,{children:"Motivational Modal: What's worse than a motivational quote? Three motivational quotes... so don't focus on the text and click through them quickly."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/NWeGggY",target:"_blank",rel:"nofollow noopener noreferrer",children:"#26 CSS Challenge / Motivational Modal"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#26 CSS Challenge / Motivational Modal",src:"https://codepen.io/mulander/embed/NWeGggY?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div index="1" id="modal">
		<div class="md-header">Title - 1</div>
		<div class="md-body">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
			eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut
			aliquip ex ea commodo consequat.
		</div>
		<div class="footer">
			<div class="action" onclick="
              document.querySelector('#modal').setAttribute('index', document.querySelector('#modal').getAttribute('index') * 1 + 1);
              document.querySelector('#modal').className= document.querySelector('#modal').classList.contains('active') ? 'active2':'active'
            ">
				ok
			</div>
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
	font-family: "Open Sans", Helvetica, sans-serif;
	background: #c7d6e1;
	color: #fff;
}
#modal {
	width: 250px;
	background: #fff;
	position: absolute;
	top: 100px;
	left: 75px;
	&::before {
		content: attr(index);
		position: absolute;
		z-index: 2;
		top: 0;
		right: 0;
		height: 30px;
		width: 30px;
		text-align: right;
		background: rgba(0, 0, 0, 0.3);
		clip-path: polygon(0 0, 100% 0, 100% 100%);
		padding: 4px 6px;
	}
	.md-header {
		font-size: 18px;
		font-weight: 600;
		color: #333;
		padding-top: 24px;
		text-align: center;
	}
	.md-body {
		box-sizing: border-box;
		padding: 16px;
		margin-bottom: 16px;
		font-size: 14px;
		line-height: 16px;
		height: 64px;
		color: #666;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
	}
	.action {
		width: 100%;
		height: 40px;
		background: hsl(206, 96%, 61%);
		cursor: pointer;
		text-align: center;
		text-transform: uppercase;
		line-height: 38px;
		font-size: 13px;
		transition: all 0.3s ease-in-out;
		&:hover {
			background: hsl(206, 96%, 51%);
		}
	}
}
.active {
	animation: next 1s ease-in-out both;
}
.active2 {
	animation: next2 1s ease-in-out both;
}
@keyframes next {
	0%,
	100% {
		transform: scale(1) translate3d(0, 0, 0);
		opacity: 1;
	}
	50% {
		opacity: 0;
		transform: scale(1.2) translate3d(0, 0, 0);
	}
	51% {
		opacity: 0;
		transform: scale(0.8) translate3d(0, 0, 0);
	}
}
@keyframes next2 {
	0%,
	100% {
		transform: scale(1) translate3d(0, 0, 0);
		opacity: 1;
	}
	50% {
		opacity: 0;
		transform: scale(1.2) translate3d(0, 0, 0);
	}
	51% {
		opacity: 0;
		transform: scale(0.8) translate3d(0, 0, 0);
	}
}
`})})]})}function v(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{v as default};
//# sourceMappingURL=026-a99f2811.js.map
