import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-6eebfeed.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-769d2acc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsxs(n.h1,{id:"76-reveal-key",children:[e.jsx(n.code,{children:"#76"})," ",e.jsx(n.a,{href:"https://100dayscss.com/days/76/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Reveal Key"})]}),`
`,e.jsx(n.p,{children:"Reveal Key: Can you solve the puzzle and uncover the secret? Just follow the instruction."}),`
`,e.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See the Pen ",e.jsx(n.a,{href:"https://codepen.io/mulander/pen/rNQXmve",target:"_blank",rel:"nofollow noopener noreferrer",children:"#76 CSS Challenge / Reveal Key"}),`
by Mulander (`,e.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,e.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,e.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#76 CSS Challenge / Reveal Key",src:"https://codepen.io/mulander/embed/rNQXmve?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,e.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,e.jsx(n.h3,{id:"valid",children:e.jsx(n.code,{children:":valid"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid",target:"_blank",rel:"nofollow noopener noreferrer",children:":valid"})," CSS pseudo-class represents any ",e.jsx(n.code,{children:"<input>"})," or other ",e.jsx(n.code,{children:"<form>"})," element whose contents validate successfully. This allows to easily make valid fields adopt an appearance that helps the user confirm that their data is formatted properly."]}),`
`,e.jsx(n.p,{children:"Also recognize others"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid",target:"_blank",rel:"nofollow noopener noreferrer",children:":invalid"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:required",target:"_blank",rel:"nofollow noopener noreferrer",children:":required"})}),`
`]}),`
`,e.jsx(n.h3,{id:"backface-visibility",children:e.jsx(n.code,{children:"backface-visibility"})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility",target:"_blank",rel:"nofollow noopener noreferrer",children:"backface-visibility"})," CSS property sets whether the back face of an element is visible when turned towards the user."]}),`
`,e.jsx(n.p,{children:"An element's back face is a mirror image of its front face. Though invisible in 2D, the back face can become visible when a transformation causes the element to be rotated in 3D space. (This property has no effect on 2D transforms, which have no perspective.)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Syntax"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-yaml",children:`/* Keyword values */
backface-visibility: visible;
backface-visibility: hidden;

/* Global values */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: revert;
backface-visibility: revert-layer;
backface-visibility: unset;
`})}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="box">
			<form class="flip">
				<input type="text" placeholder='Enter"P@ssword"' pattern="^[Pp]@ssword$" required />
				<div class="back">Sercet Key</div>
			</form>
			<div class="sercet"># 0x89898-CRC</div>
		</div>
	</div>
</div>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.frame {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 2px;
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	background: #34495e;
	color: #fff;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.box {
	position: relative;
	width: 220px;
	font-size: 16px;
	line-height: 50px;
	text-align: center;
	color: #333;
	perspective: 250px;
}
.flip,
.sercet {
	position: absolute;
	top: 0;
	left: 0;
	height: 50px;
	width: 100%;
}
.flip {
	z-index: 2;
	transform-style: preserve-3d;
	transform-origin: 0 0;
	transition: all 0.5s ease-in-out;
	input {
		box-sizing: border-box;
		appearance: none;
		border: none;
		border-radius: 0;
		outline: none;
		width: 100%;
		height: 100%;
		line-height: 20px;
		padding: 15px 0;
		font-size: 16px;
		text-align: center;
		background: rgba(255, 255, 255, 0.45);
		box-shadow: 0 0 3px 3px #333;
		backface-visibility: hidden;
	}
	.back {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		color: #fff;
		background: #64c760;
		font-weight: bold;
		transform: rotateX(180deg);
		backface-visibility: hidden;
	}
}

.sercet {
	height: 50px;
	width: 100%;
	color: #64c760;
	background: #fff;
	filter: blur(4px);
	letter-spacing: 4px;
	font-weight: bolder;
	transition: all 0.5s ease-in-out;
}
.flip:valid {
	transform: rotateX(180deg);
	+ .sercet {
		filter: blur(0);
		box-shadow: 2px 0px 8px 0 rgba(0, 0, 0, 0);
	}
}
`})})]})}function v(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{v as default};
//# sourceMappingURL=076-7bb78738.js.map
