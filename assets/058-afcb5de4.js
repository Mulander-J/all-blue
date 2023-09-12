import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-462ee75c.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"58-3d-sphere",children:[t.jsx(n.code,{children:"#58"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/58/",target:"_blank",rel:"nofollow noopener noreferrer",children:"3D Sphere"})]}),`
`,t.jsx(n.p,{children:"3D Sphere: With a little creativity, you can create these crazy 3D bodies with CSS."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/mdamMgN",target:"_blank",rel:"nofollow noopener noreferrer",children:"#58 CSS Challenge / 3D Sphere"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#58 CSS Challenge / 3D Sphere",src:"https://codepen.io/mulander/embed/mdamMgN?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .center: .wrap
	- for (let i = 0; i < 18; i ++)
		.slice
	.slice.sliceMid
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$radius: 200;
$speed: 6s;
$gap: 15;
$fill: #85741c;
$border: #ddca7e;

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
	background: $border;
	color: $fill;
}

.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	perspective: 350px;
}

.wrap {
	width: $radius + px;
	height: $radius + px;
	transform-style: preserve-3d;
	transform: rotateX(-25deg);
	transition: all 1s ease-in-out;

	&:hover {
		transform: rotateX(25deg);
	}

	.slice {
		box-sizing: border-box;
		position: absolute;
		border-radius: 50%;
		background: $fill;
		border: 2px solid $border;
		opacity: 1;
		transition: all 1s ease-in-out;

		&.sliceMid {
			width: $radius + px;
			height: $radius + px;
			left: 0;
			top: 0;
			transform: rotateX(90deg);
			animation: slice-mid $speed ease-in-out infinite;
		}

		@for $n from 1 through 18 {
			$i: 1 + $n % 9;
			$dir: if($n > 9, -1, 1);
			$size: $radius - (2 * ($i * $i));
			$offset: ($i * $gap) - (($i * $i) / 2);
			&:nth-child(#{$n}) {
				width: $size + px;
				height: $size + px;
				/* centerlize */
				left: (($radius - $size) / 2) + px;
				top: (($radius - $size) / 2) + px;
				transform: translateY(($dir * $offset) + px) rotateX(90deg);
				animation: slice-#{$n} $speed ease-in-out infinite;
			}

			@keyframes slice-#{$n} {
				0%,
				19% {
					transform: translateY(0) rotateX(90deg);
					opacity: 0;
				}
				20% {
					transform: translateY(0) rotateX(90deg);
					opacity: 1;
					border: 2px solid $fill;
				}
				30% {
					transform: translateY(($dir * ($offset + ($i * 4))) + px) rotateX(90deg);
					border: 2px solid $border;
				}
				35% {
					transform: translateY(($dir * ($offset - ($i * 2))) + px) rotateX(90deg);
				}
				40% {
					transform: translateY(($dir * ($offset + ($i * 1))) + px) rotateX(90deg);
				}
				45% {
					transform: translateY(($dir * ($offset - ($i * 0.5))) + px) rotateX(90deg);
				}
				50%,
				65% {
					transform: translateY(($dir * $offset) + px) rotateX(90deg);
				}
				70% {
					transform: translateY(($dir * ($offset + ($i * 4))) + px) rotateX(90deg);
					border: 2px solid $border;
				}
				80% {
					transform: translateY(0) rotateX(90deg);
					opacity: 1;
					border: 2px solid $fill;
				}
				81%,
				100% {
					transform: translateY(0) rotateX(90deg);
					opacity: 0;
				}
			}
		}
	}
}

@keyframes slice-mid {
	0% {
		transform: rotateX(90deg) scale(0);
	}
	10% {
		transform: rotateX(90deg) scale(1.2);
	}
	15% {
		transform: rotateX(90deg) scale(0.9);
	}
	20%,
	75% {
		transform: rotateX(90deg) scale(1);
	}
	80% {
		transform: rotateX(90deg) scale(1.2);
	}
	90%,
	100% {
		transform: rotateX(90deg) scale(0);
	}
}
`})})]})}function b(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{b as default};
//# sourceMappingURL=058-afcb5de4.js.map
