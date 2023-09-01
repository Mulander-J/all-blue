import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-94a16e9f.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-c1bd5c42.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"9-rainy-night",children:[t.jsx(n.code,{children:"#9"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/9/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Rainy Night"})]}),`
`,t.jsx(n.p,{children:"Rainy Night: The perfect time of day and the perfect weather to program in peace. The raindrops even shatter on the ground."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/WNLeoxK",target:"_blank",rel:"nofollow noopener noreferrer",children:"#9 CSS Challenge / Rainy Night"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#9 CSS Challenge / Rainy Night",src:"https://codepen.io/mulander/embed/WNLeoxK?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.p,{children:"Raindrops are composed of three balls stacked together"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale",target:"_blank",rel:"nofollow noopener noreferrer",children:"transform-scale"})}),`
`,t.jsxs(n.p,{children:["Using ",t.jsx(n.code,{children:"scale()"})," can achieve shape extrusion/expansion effects"]}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"scale()"})," CSS function defines a transformation that resizes an element on the 2D plane. Because the amount of scaling is defined by a vector, it can resize the ",t.jsx(n.strong,{children:"horizontal"})," and ",t.jsx(n.strong,{children:"vertical"})," dimensions at different scales. Its result is a ",t.jsx(n.code,{children:"<transform-function>"})," data type."]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Syntax"})}),`
`,t.jsx(n.p,{children:"The scale() function is specified with either one or two values, which represent the amount of scaling to be applied in each direction."}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-yaml",children:`scale(sx)

scale(sx, sy)
`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame
	.moon
		- for(let i = 0; i < 11; i++) 
			.crater
	.mountains
		- for(let j = 0; j < 5; j++) 
			.mountain
	- for(let k = 0; k < 10; k++) 
		.drop(class="drop-a-"+(k+1))
	- for(let l = 0; l < 10; l++) 
		.drop(class="drop-b-"+(l+1))
	- for(let m = 0; m < 10; m++) 
		.drop(class="drop-c-"+(m+1))
	.bottom
		.current 12°
		.weather
			p Wind: E 7Km.h
			p Humidity: 87%
		.next
			p 
				span Tue
				| 21°/9°
			p 
				span Wen
				| 23°/10°
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$drop-color: #fff;

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
	background: #1a2238;
	color: #394568;
}

.moon {
	position: absolute;
	top: 45px;
	left: 55px;
	background: #f6edbd;
	width: 67px;
	height: 67px;
	border-radius: 50%;
	overflow: hidden;
	animation: an-moon 1s ease-in forwards;
	.crater {
		position: absolute;
		width: 11px;
		height: 11px;
		border-radius: 10px;
		background: #ece1a8;
		&:nth-child(1) {
			top: 12px;
			left: 0;
		}
		&:nth-child(2) {
			top: 12px;
			left: 0;
		}
		&:nth-child(3) {
			top: 56px;
			left: 10px;
		}
		&:nth-child(4) {
			width: 6px;
			height: 6px;
			top: 37px;
			left: 49px;
		}
		&:nth-child(5) {
			top: 24px;
			left: 61px;
		}
		&:nth-child(6) {
			top: 55px;
			left: 33px;
		}
		&:nth-child(7) {
			top: 17px;
			left: 46px;
		}
		&:nth-child(8) {
			top: 28px;
			left: 27px;
		}
		&:nth-child(9) {
			top: 39px;
			left: 17px;
		}
		&:nth-child(10) {
			width: 4px;
			height: 4px;
			top: 25px;
			left: 15px;
		}
		&:nth-child(11) {
			top: 37px;
			left: 37px;
		}
	}
}
@keyframes an-moon {
	0% {
		transform: translateY(400px);
		opacity: 0.8;
		box-shadow: none;
	}
	95% {
		transform: translateY(0);
		opacity: 0.9;
	}
	100% {
		opacity: 1;
		box-shadow: 0 0 10px 0 rgba(246, 237, 239, 0.65);
	}
}

.mountains {
	position: absolute;
	height: 100px;
	width: 100%;
	bottom: 90px;
	.mountain {
		position: absolute;
		width: 337px;
		height: 281px;
		background: #26314f;
		box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.15);
		border-radius: 50%;
		z-index: 10;
		&:nth-child(n + 3) {
			background-color: #303c5d;
		}
		&:nth-child(1) {
			top: -24px;
			left: -57px;
		}
		&:nth-child(2) {
			left: 177px;
		}
		&:nth-child(3) {
			left: -137px;
			top: 30px;
		}
		&:nth-child(4) {
			left: 63px;
			top: 20px;
		}
		&:nth-child(5) {
			left: 292px;
			top: 30px;
		}
	}
}

.drop {
	position: absolute;
	z-index: 20;
	bottom: 90px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: $drop-color;
	transform-origin: 50% 100%;

	&:before {
		position: absolute;
		content: "";
		display: block;
		top: -2px;
		left: 1px;
		width: 6px;
		height: 6px;
		background: $drop-color;
		border-radius: 3px;
	}

	&:after {
		position: absolute;
		content: "";
		display: block;
		top: -5px;
		left: 2px;
		width: 4px;
		height: 10px;
		background: $drop-color;
		border-radius: 50%;
	}
}

@for $i from 1 through 10 {
	.drop-a-#{$i} {
		left: (-20 + 38 * $i) + px;
		bottom: 90px;
		width: 8px;
		height: 8px;
		animation: drop
			(0.7 + random(2) / 10) +
			s
			linear
			(random(50) / 25) +
			s
			infinite
			both;

		&:before {
			top: -2px;
			left: 1px;
			width: 6px;
			height: 6px;
		}

		&:after {
			top: -5px;
			left: 2px;
			width: 4px;
			height: 10px;
		}
	}

	.drop-b-#{$i} {
		left: (-20 + 38 * $i) + px;
		opacity: 0.6;
		width: 6px;
		height: 6px;
		animation: drop
			(1.3 + random(2) / 10) +
			s
			linear
			(random(50) / 25) +
			s
			infinite
			both;

		&:before {
			top: -2px;
			left: 1px;
			width: 4px;
			height: 4px;
		}

		&:after {
			top: -4px;
			left: 2px;
			width: 2px;
			height: 6px;
		}
	}

	.drop-c-#{$i} {
		left: (-20 + 38 * $i) + px;
		opacity: 0.3;
		width: 4px;
		height: 4px;
		animation: drop
			(1.9 + random(2) / 10) +
			s
			linear
			(random(50) / 25) +
			s
			infinite
			both;

		&:before {
			top: -2px;
			left: 1px;
			width: 2px;
			height: 2px;
		}

		&:after {
			top: -3px;
			left: 1px;
			width: 2px;
			height: 4px;
		}
	}
}
@keyframes drop {
	0% {
		transform: translate3d(40px, -320px, 0) scaleX(1) scaleY(1) rotate(17deg);
	}
	85% {
		transform: translate3d(0, 0, 0) scaleX(1) scaleY(1) rotate(17deg);
	}
	100% {
		transform: translate3d(0, 0, 0) scaleX(3) scaleY(0) rotate(0deg);
	}
}

.bottom {
	position: absolute;
	z-index: 100;
	bottom: 0;
	left: 0;
	right: 0;
	height: 90px;
	padding: 20px 25px;
	background-color: #fff;
	display: flex;
	gap: 20px;
	align-items: center;
	.current {
		font-size: 45px;
		line-height: 90px;
	}
	.weather {
		flex: 1 1 auto;
		font-weight: 300;
		font-size: 15px;
		line-height: 20px;
	}
	.next {
		text-align: right;
		font-weight: 400;
		font-size: 15px;
		line-height: 20px;
		p span {
			margin-right: 10px;
			font-weight: 300;
			text-transform: uppercase;
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=009-0db8751e.js.map
