import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-33e7d280.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"42-stars",children:[t.jsx(n.code,{children:"#42"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/42/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Stars"})]}),`
`,t.jsx(n.p,{children:"Stars: If you look closely, you can see the stars sparkling. And with a bit of luck, you might even spot a shooting star. Make a wish!"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/xxmOKbg",target:"_blank",rel:"nofollow noopener noreferrer",children:"#42 CSS Challenge / Stars"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#42 CSS Challenge / Stars",src:"https://codepen.io/mulander/embed/xxmOKbg?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://sass-lang.com/documentation/breaking-changes/function-units/#math-random",target:"_blank",rel:"nofollow noopener noreferrer",children:"math.random"})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"math.random()"})," function has historically ignored units in $limit and returned a unitless value. For example ",t.jsx(n.code,{children:"math.random(100px)"})," would drop ",t.jsx(n.code,{children:"“px”"})," and return a value like ",t.jsx(n.code,{children:"42"}),"."]}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .sky
	- for(let i = 0; i < 300; i++)
		i.star
	- for(let i = 0; i < 6; i++)
		.meter
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
}

$numStar: 300;
$numMeter: 6;

.sky {
	position: relative;
	width: 400px;
	height: 400px;
	background: linear-gradient(#0278a2, #00966a);
	clip-path: circle(100px at 200px 200px);
	animation: peep 12s ease-in-out alternate infinite;
	.star {
		display: block;
		position: absolute;
		width: 1px;
		height: 1px;
		border-radius: 1px;
		background: #fff;
		@for $i from 1 through $numStar {
			&:nth-of-type(#{$i}) {
				top: random(280) + px;
				left: random(280) + px;
				animation: blink ((random(20) + 20)/10) * 1s (random(20) / -10) * 1s ease both infinite;
			}
		}
	}
	.meter {
		position: absolute;
		height: 2px;
		width: 60px;
		border-radius: 50%;
		background: linear-gradient(to right, transparent, white);
		@for $i from 1 through $numMeter {
			&:nth-of-type(#{$i}) {
				top: (random(100)-30) + px;
				animation: fly (random(5) + 20) * 1s (random(250) / 10) * 1s ease both infinite;
			}
		}
	}
}

@keyframes peep {
	from {
		clip-path: circle(100px at 100px 200px);
	}
	to {
		clip-path: circle(100px at 300px 200px);
	}
}
@keyframes blink {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.2;
	}
}
@keyframes fly {
	0% {
		transform: translate3d(0, 0, 0) rotate(45deg);
	}
	10%,
	100% {
		transform: translate3d(451px, 164px, 0) rotate(45deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=042-24f84c27.js.map
