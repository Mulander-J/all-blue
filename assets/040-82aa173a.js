import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as s}from"./index-ea668d1f.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-56087800.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(t){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",pre:"pre",strong:"strong"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{}),`
`,n.jsxs(e.h1,{id:"40-gallery",children:[n.jsx(e.code,{children:"#40"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/40/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Gallery"})]}),`
`,n.jsx(e.p,{children:"Gallery: Take a closer look by clicking on the images. The animations are CSS only and precalculated."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/QWzNXPa",target:"_blank",rel:"nofollow noopener noreferrer",children:"#40 CSS Challenge / Gallery"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#40 CSS Challenge / Gallery",src:"https://codepen.io/mulander/embed/QWzNXPa?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsxs(e.h3,{id:"sassbuilt-in-modules",children:["SASS.",n.jsx(e.a,{href:"https://sass-lang.com/documentation/modules/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Built-In Modules"})]}),`
`,n.jsxs(e.p,{children:["Sass provides many built-in modules which contain useful functions (and the occasional mixin). These modules can be loaded with the ",n.jsx(e.code,{children:"@use"})," rule like any user-defined stylesheet, and their functions can be called like any other module member. All built-in module URLs begin with ",n.jsx(e.code,{children:"sass:"})," to indicate that they’re part of Sass itself."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@use 'sass:color';
@use 'sass:list';
@use 'sass:map';
@use 'sass:math';
@use 'sass:meta';
@use 'sass:selector';
@use 'sass:string';
`})}),`
`,n.jsx(e.h3,{id:"transform-origin",children:n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin",target:"_blank",rel:"nofollow noopener noreferrer",children:"transform-origin"})}),`
`,n.jsxs(e.p,{children:["The transform origin is the point around which a transformation is applied. For example, the transform origin of the ",n.jsx(e.code,{children:"rotate()"})," function is the center of rotation."]}),`
`,n.jsxs(e.p,{children:["In effect, this property wraps a pair of translations around the element's other transformations. The first translation moves the transform origin to the true origin at ",n.jsx(e.code,{children:"(0,0)"}),". Then the other transformations are applied, and because the transform origin is at ",n.jsx(e.code,{children:"(0,0)"}),", those transformations act about the transform origin. Finally, the opposite translation is applied, moving the transform origin back to its original location. Consequently, this definition"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Syntax"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-yaml",children:`/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;

/* x-offset-keyword | y-offset-keyword | z-offset */
transform-origin: right bottom 2cm;

/* y-offset-keyword | x-offset-keyword | z-offset */
transform-origin: bottom right 2cm;

/* Global values */
transform-origin: inherit;
transform-origin: initial;
transform-origin: revert;
transform-origin: revert-layer;
transform-origin: unset;
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`// pug

.frame: .grid
	- for(let i = 1; i < 10; i++)
		input(type="checkbox", name="cell", id='cell-' + i)
		label.cell(for='cell-' + i)
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@use 'sass:math';

$gap: 4px;
$w: (400px - $gap * 2) / 3;

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
.grid {
	height: 400px;
	width: 400px;
	background: #fff;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: $gap;
	.cell {
		display: block;
		position: relative;
		z-index: 1;
		background-color: hsl(35, 68%, 67%);
		background-image: url(https://100dayscss.com/codepen/40-1.jpg);
		background-repeat: no-repeat;
		background-size: contain;
		transition: z-index 0.1s 0.8s, transform 0.8s ease;
		animation: show 0.8s ease backwards;
		@for $i from 0 through 8 {
			&:nth-of-type(#{$i + 1}) {
				transform-origin: #{50% * ($i % 3)} #{50% * math.floor($i / 3)};
				filter: hue-rotate(30deg * $i);
			}
		}
	}
	input[type="checkbox"] {
		appearance: none;
		display: none;
	}
	input[type="checkbox"]:checked + .cell {
		z-index: 2;
		transform: scale(#{3 + $gap * 2 / $w});
		transition: z-index 0.1s, transform 0.8s 0.1s ease-in-out;
	}
}

@keyframes show {
	from {
		transform: scale(4);
	}
	to {
		transform: scale(1);
	}
}
`})})]})}function b(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{b as default};
//# sourceMappingURL=040-82aa173a.js.map
