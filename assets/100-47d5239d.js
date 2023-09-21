import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-2b9b71ef.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"100-neon-light",children:[t.jsx(n.code,{children:"#100"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/100/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Neon Light"})]}),`
`,t.jsx(n.p,{children:"Neon Light: This is either the end of this challenge or the day before you start again from day one."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/bGOYENY",target:"_blank",rel:"nofollow noopener noreferrer",children:"#100 CSS Challenge / Neon Light"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#100 CSS Challenge / Neon Light",src:"https://codepen.io/mulander/embed/bGOYENY?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="words">
		<div class="letter l-e">
			<div class="stroke left"></div>
			<div class="stroke hor-top"></div>
			<div class="stroke hor-mid"></div>
			<div class="stroke hor-bot"></div>
		</div>
		<div class="letter l-n">
			<div class="stroke left"></div>
			<div class="stroke slash"></div>
			<div class="stroke right"></div>
		</div>
		<div class="letter l-d">
			<div class="stroke left"></div>
			<div class="right">
				<div class="circle"></div>
			</div>
		</div>
	</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$lineH: 120px;
$strokeW: 6px;
$gap: 4px;

$theme: #f1f4f5;
$dark: #1a1e24;

.frame {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 2px;
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
	background: #272c34;
}

.words {
	position: absolute;
	top: 35%;
	bottom: 35%;
	left: 0;
	right: 0;
	padding: 0 68px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 25px;
}

.letter {
	position: relative;
	width: 100%;
	height: 100%;
}

.stroke {
	position: absolute;
	background: $dark;
	box-shadow: 0px 0px 6px 0px $dark;
	border-radius: $strokeW / 2;
	animation: blink 6s ease-in-out infinite alternate both;
	@for $i from 1 through 3 {
		&:nth-child(#{$i}) {
			animation-delay: 1s * ($i - 1);
		}
	}
}

$offset: $gap + $strokeW;

.l-e .left {
	top: 0;
	left: 0;
	height: 100%;
	width: $strokeW;
}
.l-e .hor-top {
	top: 0;
	left: $offset;
	height: $strokeW;
	width: calc(100% - #{$offset});
}

.l-e .hor-mid {
	top: calc(50% - #{$gap});
	left: $offset;
	height: $strokeW;
	width: calc(80% - #{$offset});
}

.l-e .hor-bot {
	bottom: 0;
	left: $offset;
	height: $strokeW;
	width: calc(100% - #{$offset});
}

.l-n .left {
	width: $strokeW;
	height: 100%;
	left: 0;
	top: 0;
}

.l-n .right {
	width: $strokeW;
	height: 100%;
	right: 0;
	top: 0;
}

.l-n .slash {
	height: 108%;
	width: $strokeW;
	top: -4%;
	left: 50%;
	transform: rotate(-24deg) translateX(-50%);
}

.l-d .left {
	width: $strokeW;
	height: 100%;
	left: 0;
	top: 0;
}

.l-d .right {
	position: absolute;
	top: 0;
	right: 0;
	left: $offset;
	height: 100%;
}

.circle {
	position: absolute;
	top: -1 * $offset;
	left: 0;
	right: -1 * $offset;
	bottom: -1 * $offset;
	width: 100%;
	overflow: hidden;
}

.circle::after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	aspect-ratio: 1/1;
	height: 120px;
	top: $offset;
	right: $offset;
	border-style: solid;
	border-width: $strokeW;
	border-color: $dark $dark transparent transparent;
	border-radius: 50%;
	box-shadow: 0px 0px 10px 0px $dark, inset 0px 0px 10px 0px $theme;
	transform: rotate(45deg);
	animation: blink-curve 6s ease-in-out infinite alternate both;
}

@keyframes blink {
	35%,
	37%,
	39%,
	41%,
	100% {
		background: $theme;
		box-shadow: 0px 0px 10px 0px $theme;
	}

	0%,
	34%,
	36%,
	36%,
	38%,
	40% {
		background: $dark;
		box-shadow: 0px 0px 6px 0px $dark;
	}
}

@keyframes blink-curve {
	35%,
	37%,
	39%,
	41%,
	100% {
		border-color: $theme $theme transparent transparent;
		box-shadow: 0px 0px 10px 0px $theme, inset 0px 0px 10px 0px $theme;
	}

	0%,
	34%,
	36%,
	36%,
	38%,
	40% {
		border-color: $dark $dark transparent transparent;
		box-shadow: 0px 0px 6px 0px $dark, inset 0px 0px 6px 0px $dark;
	}
}
`})})]})}function k(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{k as default};
//# sourceMappingURL=100-47d5239d.js.map
