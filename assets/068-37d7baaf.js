import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-8438cb78.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"68-recording",children:[t.jsx(n.code,{children:"#68"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/68/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Recording"})]}),`
`,t.jsx(n.p,{children:"Recording: Click on it for a faked audio recording process animation."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/yLGXeey",target:"_blank",rel:"nofollow noopener noreferrer",children:"#68 CSS Challenge / Recording"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#68 CSS Challenge / Recording",src:"https://codepen.io/mulander/embed/yLGXeey?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<input id="recorder" type="checkbox" name="status" />
	<label class="microphone" for="recorder">
		<svg width="100px" height="100px" viewBox="0 0 100 100">
			<circle class="outer" cx="50" cy="50" r="47"></circle>
		</svg>
		<svg class="icon" viewBox="0 0 1024 1024">
			<path d="M179.2 601.6c0 22.4 19.2 44.8 44.8 44.8s44.8-19.2 44.8-44.8c0-22.4-19.2-44.8-44.8-44.8s-44.8 22.4-44.8 44.8z m576 0c0 22.4 19.2 44.8 44.8 44.8 22.4 0 44.8-19.2 44.8-44.8 0-22.4-19.2-44.8-44.8-44.8-24 0-44.8 19.2-44.8 44.8zM510.4 811.2c-22.4 0-44.8 19.2-44.8 44.8v89.6c0 22.4 19.2 44.8 44.8 44.8 22.4 0 44.8-19.2 44.8-44.8v-89.6c-1.6-25.6-20.8-44.8-44.8-44.8z m-121.6 168c0 22.4 19.2 44.8 44.8 44.8H592c22.4 0 44.8-19.2 44.8-44.8 0-22.4-19.2-44.8-44.8-44.8h-158.4c-25.6 3.2-44.8 22.4-44.8 44.8z m337.6-763.2v-3.2C723.2 96 630.4 0 510.4 0S296 96 296 216v334.4c3.2 115.2 99.2 209.6 216 209.6s212.8-92.8 216-209.6v-3.2c-1.6 3.2-1.6-331.2-1.6-331.2z m28.8 382.4c-22.4 115.2-121.6 203.2-244.8 203.2S288 715.2 265.6 595.2l-86.4 6.4c25.6 161.6 164.8 283.2 331.2 283.2S816 763.2 841.6 601.6c1.6 3.2-86.4-3.2-86.4-3.2z" fill="currentColor"></path>
		</svg>
		<div class="dots">
			<i></i>
			<i></i>
			<i></i>
		</div>
	</label>
</div>
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
	background: #684595;
}
input[type="checkbox"] {
	display: none;
}
.microphone {
	position: absolute;
	cursor: pointer;
	width: 100px;
	height: 100px;
	top: 150px;
	left: 150px;
	color: #fff;
	.icon {
		position: absolute;
		left: 20%;
		top: 20%;
		width: 60%;
		height: 60%;
	}
	.outer {
		fill: none;
		stroke: currentColor;
		stroke-width: 3;
		stroke-linecap: round;
		stroke-dasharray: 296 296;
		stroke-dashoffset: 0;
		transform-origin: 50% 50%;
		transform: rotate(0deg);
	}
	.dots {
		position: absolute;
		width: 50px;
		top: 45px;
		left: 25px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		opacity: 0;
		i {
			display: block;
			width: 100%;
			aspect-ratio: 1/1;
			border-radius: 50%;
			background: #fff;
			animation: wave 1s ease-in-out both infinite;
			@for $i from 1 through 3 {
				&:nth-child(#{$i}) {
					animation-delay: 0.1s * ($i - 1);
				}
			}
		}
	}
}

#recorder:checked ~ .microphone {
	.outer {
		animation: outer 5s linear infinite;
	}
	.icon {
		animation: show 0.3s ease-in-out reverse both;
	}
	.dots {
		animation: show 0.3s 0.1s ease-in both;
	}
}

@keyframes outer {
	to {
		stroke-dashoffset: -592;
		transform: rotate(360deg);
	}
}
@keyframes show {
	0% {
		transform: scale(0);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}
@keyframes wave {
	0% {
		transform: translateY(5px);
	}
	50% {
		transform: translateY(-5px);
	}

	100% {
		transform: translateY(5px);
	}
}
`})})]})}function y(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{y as default};
//# sourceMappingURL=068-37d7baaf.js.map
