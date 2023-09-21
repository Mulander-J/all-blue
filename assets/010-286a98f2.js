import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-2b9b71ef.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",strong:"strong",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"10-watch",children:[n.jsx(t.code,{children:"#10"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/10/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Watch"})]}),`
`,n.jsx(t.p,{children:"Watch: Classic, noble, modern or playful? What do you want your favorite watch to look like?"}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/dywbQMJ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#10 CSS Challenge / Watch"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#10 CSS Challenge / Watch",src:"https://codepen.io/mulander/embed/dywbQMJ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(t.h3,{id:"property",children:n.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@property",target:"_blank",rel:"nofollow noopener noreferrer",children:"@property"})}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.code,{children:"@property"})," CSS at-rule is part of the CSS Houdini umbrella of APIs. It allows developers to explicitly define their CSS custom properties, allowing for property type checking and constraining, setting default values, and defining whether a custom property can inherit values or not."]}),`
`,n.jsxs(t.p,{children:["The ",n.jsx(t.code,{children:"@property"})," rule represents a custom property registration directly in a stylesheet without having to run any JS. Valid ",n.jsx(t.code,{children:"@property"})," rules result in a registered custom property, as if ",n.jsx(t.code,{children:"registerProperty()"})," had been called with equivalent parameters."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Syntax"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-yaml",children:`@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
`})}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Hint"})}),`
`,n.jsxs(t.p,{children:["When using ",n.jsx(t.code,{children:"calc()"})," and variables in scss, they need to be wrapped in ",n.jsx(t.code,{children:"#{var}"})]}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`// pug

.frame
	.clock
		.main
			.date Mon 15 Jan 2015
			.time 11:42
			.stats
				.beat
					i.fa.fa-heart
					| 86
				.energy 1248 kcal
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`$gap: 4px;

* {
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
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	background: #4c4c4c;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.clock {
	position: relative;
	width: 200px;
	height: 200px;
	padding: $gap * 3;
	border-radius: 50%;
	border: 6px solid #3a3a3a;
	background: black;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	font-size: 12px;
}
.clock::before {
	content: "";
	position: absolute;
	top: $gap;
	left: $gap;
	width: calc(100% - #{$gap * 2});
	height: calc(100% - #{$gap * 2});
	border-radius: 50%;
	background: conic-gradient(
		#f85b5b calc(var(--angle, 0) * 1turn),
		rgba(255, 255, 255, 0.2) 0turn
	);
	animation: an-ring 5s linear infinite, an-ring-color 10s linear infinite;
}
@property --angle {
	syntax: "<number>";
	inherits: false;
	initial-value: 0;
}
@keyframes an-ring {
	to {
		--angle: 1;
	}
}
@keyframes an-ring-color {
	to {
		filter: hue-rotate(180deg) brightness(1.6);
	}
}

.main {
	position: relative;
	z-index: 2;
	height: 100%;
	width: 100%;
	border-radius: 50%;
	color: #ffffff;
	background: black;
	border: 2px dotted white;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 0 $gap black;
	.time {
		font-weight: 700;
		font-size: 40px;
		line-height: 100%;
		margin: 4px 0;
	}
	.stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
		i.fa {
			color: #f85b5b;
			margin-right: 4px;
		}
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=010-286a98f2.js.map
