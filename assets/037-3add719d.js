import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-8438cb78.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"37-carousel",children:[t.jsx(n.code,{children:"#37"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/37/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Carousel"})]}),`
`,t.jsx(n.p,{children:"Carousel: Images, quotes, prices or logos. A carousel can be used in many ways and is an eye-catcher."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/wvRGrZK",target:"_blank",rel:"nofollow noopener noreferrer",children:"#37 CSS Challenge / Carousel"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#37 CSS Challenge / Carousel",src:"https://codepen.io/mulander/embed/wvRGrZK?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .carousel
	- for(let i = 0; i < 3; i++)
		.card
			.header
			.content: .skeleton
				.skeletonItem.long
				.skeletonItem.short
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-CSS",children:`.frame {
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
	background: #5a717b;
	color: #fff;
}
$w: 140px;
$gap: 40px;
.carousel {
	position: absolute;
	top: 50%;
	left: 50%;
	width: $w;
	height: 120px;
	transform: translate(-50%, -50%);
	perspective: 100px;
	transform-style: preserve-3d;
	.card {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
		&:nth-child(1) {
			animation: card 5s ease-in-out both infinite;
		}
		&:nth-child(2) {
			animation: card2 5s ease-in-out both infinite;
		}
		&:nth-child(3) {
			animation: card3 5s ease-in-out both infinite;
		}
		.header {
			height: 30px;
			width: 100%;
			background: orange;
		}
		.skeleton {
			padding: 10px;
			-webkit-box-reflect: below;
			.skeletonItem {
				height: 4px;
				border-radius: 2px;
				margin: 6px 0;
				background: linear-gradient(to right, #999, #fefefe, #999) 200% 100%;
				animation: lines 3s linear alternate infinite;
				& ~ .long {
					width: 70%;
				}
				& ~ .short {
					width: 30%;
				}
			}
		}
	}
}

@keyframes card {
	0%,
	100% {
		transform: translate3d(0, 0, 0);
	}
	33.33% {
		transform: translate3d($w + $gap, 0, -45px);
	}
	66.66% {
		transform: translate3d(#{($w + $gap) * -1}, 0, -45px);
	}
}
@keyframes card2 {
	0%,
	100% {
		transform: translate3d($w + $gap, 0, -45px);
	}
	33.33% {
		transform: translate3d(#{($w + $gap) * -1}, 0, -45px);
	}
	66.66% {
		transform: translate3d(0, 0, 0);
	}
}
@keyframes card3 {
	0%,
	100% {
		transform: translate3d(#{($w + $gap) * -1}, 0, -45px);
	}
	33.33% {
		transform: translate3d(0, 0, 0);
	}
	66.66% {
		transform: translate3d($w + $gap, 0, -45px);
	}
}
@keyframes lines {
	to {
		background-position-x: -40ch;
	}
}
`})})]})}function w(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{w as default};
//# sourceMappingURL=037-3add719d.js.map
