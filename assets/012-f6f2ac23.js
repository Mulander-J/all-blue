import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-8438cb78.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},i(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{}),`
`,t.jsxs(n.h1,{id:"12-tooltip",children:[t.jsx(n.code,{children:"#12"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/12/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tooltip"})]}),`
`,t.jsx(n.p,{children:"Tooltip: I'm quite sure, you already know what obsession means. But you can look it up anyways."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/QWzWKXa",target:"_blank",rel:"nofollow noopener noreferrer",children:"#12 CSS Challenge / Tooltip"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#12 CSS Challenge / Tooltip",src:"https://codepen.io/mulander/embed/QWzWKXa?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<section>
		<div class="content">
			I know quite certainly that I myself have no special talent;
			curiosity,
			<span class="highlight">
				<label>obsession</label>
				<span class="tooltip">
					<span class="pronounce">[əbˈseʃ(ə)n]</span>
					<span class="detail">Obsession, a persistent disturbing preoccupation with an often unreasonable idea or feeling.</span>
				</span>
			</span>
			and dogged endurance, combined with
			self-criticism have brought me to my ideas.
		</div>
		<div class="author">Albert Einstein</div>
	</section>
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
	background: #4cb6de;
	color: #fff;
	overflow: hidden;
}
section {
	position: relative;
	padding: 90px 30px 0;
	&::before {
		display: block;
		position: absolute;
		z-index: 0;
		content: "„";
		font-family: Arial;
		font-size: 250px;
		color: #6ac2e3;
		line-height: 35px;
		top: -4px;
		left: 7px;
	}
	.content {
		position: relative;
		z-index: 1;
		font-size: 24px;
		line-height: 35px;
		margin: 20px 0;
	}
	.author {
		font-weight: 300;
		font-style: italic;
		font-size: 20px;
		line-height: 28px;
	}
}

.highlight {
	position: relative;
	label {
		position: relative;
		display: inline-block;
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: -4px;
			width: 100%;
			height: 100%;
			z-index: -1;
			display: inline-block;
			background: #286f8a;
			padding: 0px 4px 4px;
			cursor: pointer;
		}
	}
}
.tooltip {
	position: absolute;
	bottom: 40px;
	left: -70%;
	display: block;
	background: #286f8a;
	width: 300px;
	font-size: 16px;
	line-height: 24px;
	cursor: text;
	visibility: hidden;
	opacity: 0;
	transform: translate3d(0, -20px, 0);
	transition: all 0.5s ease-out;
	&::after {
		position: absolute;
		content: "";
		bottom: -5px;
		left: 50%;
		margin-left: -5px;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid #286f8a;
		border-bottom: none;
	}
	.pronounce {
		display: block;
		background: #fff;
		color: #286f8a;
		padding: 8px 17px 10px 17px;
		line-height: 16px;
	}
	.detail {
		display: block;
		padding: 13px 17px;
	}
}

.highlight:hover .tooltip {
	opacity: 1;
	visibility: visible;
	transform: translate3d(0, 0, 0);
}
`})})]})}function y(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{y as default};
//# sourceMappingURL=012-f6f2ac23.js.map
