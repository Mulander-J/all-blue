import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-33e7d280.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"19-slider-with-radio-buttons",children:[t.jsx(n.code,{children:"#19"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/19/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slider with Radio Buttons"})]}),`
`,t.jsx(n.p,{children:"Slider with Radio Buttons: Why use JavaScript when you can use CSS? Selectors can be wildly combined with each other."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/gOZpgwX",target:"_blank",rel:"nofollow noopener noreferrer",children:"#19 CSS Challenge / Slider with Radio Buttons"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#19 CSS Challenge / Slider with Radio Buttons",src:"https://codepen.io/mulander/embed/gOZpgwX?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="pagination">
		<input type="radio" name="page" />
		<input type="radio" name="page" />
		<input type="radio" name="page" />
		<div class="track">
			<div class="dot"></div>
		</div>
		<div class="bg"></div>
	</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$c: #fff;
$d: 60px;
$p: 10px;
$dur: 0.8s;

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
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	background: #333;
	color: #fff;
	font-family: "Open Sans", Helvetica, sans-serif;
	overflow: hidden;
}
.pagination {
	position: relative;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: $p;
	.track {
		position: absolute;
		height: $d;
		width: $d * 3 + $p * 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 2;
		.dot {
			background: $c;
			height: $d - $p;
			width: $d - $p;
			margin: $p / 2;
			border-radius: 50%;
			transition: all $dur ease-in-out;
		}
	}
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		height: 100%;
		width: 400%;
		background: linear-gradient(
			to left,
			pink,
			pink 50%,
			blue 50%,
			blue 75%,
			greenyellow 75%,
			greenyellow
		);
		transition: all $dur ease-in-out;
	}
	input[type="radio"] {
		appearance: none;
		outline: none;
		position: relative;
		z-index: 3;
		cursor: pointer;
		height: $d;
		width: $d;
		border-radius: 50%;
		text-align: center;
		color: $c;
		border: 2px solid $c;
		transition: all .3s ease;
		&:hover {
			transform: scale(1.03);
		}
		@for $i from 0 through 2 {
			&:nth-child(#{($i+1)}):checked {
				~ .track .dot {
					transform: translate($p * $i + $d * $i);
				}
				~ .bg {
					background-position-x: -400px * $i;
				}
			}
		}
	}
}
`})})]})}function w(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{w as default};
//# sourceMappingURL=019-3401a5d9.js.map
