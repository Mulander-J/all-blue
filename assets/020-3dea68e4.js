import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function s(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"20-send-mail",children:[t.jsx(n.code,{children:"#20"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/20/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Send Mail"})]}),`
`,t.jsx(n.p,{children:'Send Mail: Surprise your visitors with a nice animation instead of a simple "request sent".'}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/wvRaJGb",target:"_blank",rel:"nofollow noopener noreferrer",children:"#20 CSS Challenge / Send Mail"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#20 CSS Challenge / Send Mail",src:"https://codepen.io/mulander/embed/wvRaJGb?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.p,{children:t.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dashoffset",target:"_blank",rel:"nofollow noopener noreferrer",children:"stroke-dashoffset"})}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"stroke-dashoffset"})," attribute is a presentation attribute defining an offset on the rendering of the associated dash array."]}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame" id="box">
	<div class="center">
		<div class="plate"></div>
		<div class="ring"></div>
		<svg class="icon mail">
			<polyline points="119,1 119,69 1,69 1,1"></polyline>
			<polyline points="119,1 60,45 1,1 119,1"></polyline>
		</svg>
		<svg class="icon plane">
			<polyline points="119,1 1,59 106,80 119,1"></polyline>
			<polyline points="119,1 40,67 43,105 69,73"></polyline>
		</svg>
		<div class="btns">
			<div class="button btn-send" onclick="document.querySelector('#box').classList.toggle('active')">
				<svg viewBox="0 0 1000 300">
					<symbol id="line-text">
						<text text-anchor="middle" x="50%" y="50%" dy=".4em">
							SEND
						</text>
					</symbol>
					<use xlink:href="#line-text" class="text"></use>
					<use xlink:href="#line-text" class="text"></use>
					<use xlink:href="#line-text" class="text"></use>
					<use xlink:href="#line-text" class="text"></use>
				</svg>
			</div>
			<div class="button btn-reset" onclick="document.querySelector('#box').classList.toggle('active')">
				Reset
			</div>
		</div>
	</div>
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
	background: #2c3e50;
	color: #333;
	font-family: "Open Sans", Helvetica, sans-serif;
	overflow: hidden;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.plate {
	position: relative;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: #354a5f;
}
.ring {
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 4px solid #354a5f;
}
.icon {
	position: absolute;
	z-index: 2;
	top: 68px;
	left: 40px;
	transform: translate3d(0, 0, 0);
	fill: none;
	stroke-width: 2px;
	stroke: #ecf0f1;
	stroke-linecap: square;
	stroke-dasharray: 325 325;
}
.icon.mail {
	width: 120px;
	height: 70px;
	stroke-dashoffset: 0;
}
.icon.plane {
	width: 120px;
	height: 110px;
	stroke-dashoffset: 325;
}
.btns {
	position: relative;
	width: 200px;
	height: 40px;
	margin: 20px auto;
}
.button {
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 40px;
	border-radius: 20px;
	line-height: 40px;
	text-align: center;
	background: #fff;
	cursor: pointer;
	transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
}
.btn-send {
	position: relative;
	z-index: 2;
	font-size: 180px;
	font-weight: bold;
	text-transform: uppercase;
	transform-origin: center center;
}
.btn-reset {
	z-index: 1;
	opacity: 0;
}
.active .plate {
	animation: an-ring 1s ease-in-out both;
}
.active .ring {
	animation: an-ring 0.8s 0.2s ease-in-out both;
}
.active .mail {
	stroke-dashoffset: 326;
	transition: stroke-dashoffset 1s ease-in-out;
}
.active .plane {
	stroke-dashoffset: 0;
	transition: stroke-dashoffset 1s ease-in-out 0.6s;
	animation: an-plane 2.4s ease-in-out both;
}
.active .btn-send {
	animation: an-btn-send 1.5s 1.7s ease-in-out both;
}
.active .btn-reset {
	animation: an-btn-reset 1s 3.7s ease-in-out both;
}

@keyframes an-ring {
	0% {
		transform: translate3d(0, 0, 0) scale(1);
	}
	20% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(0);
	}
}
@keyframes an-plane {
	0%,
	50% {
		transform: translate3d(0, 0, 0) scale(1);
	}
	60% {
		transform: translate3d(-10px, 5px, 0) scale(1.05);
	}
	70% {
		opacity: 1;
	}
	85% {
		opacity: 0;
	}

	100% {
		transform: translate3d(300px, -150px, 0) scale(0.4);
		opacity: 0;
	}
}
@keyframes an-btn-send {
	0% {
		transform: scale(1);
		left: 0;
	}

	30% {
		left: 0;
		background: #1abc9c;
		width: 200px;
		font-size: 0;
		transform: scale(1);
	}
	50%,
	60% {
		left: 80px;
		width: 40px;
		transform: scale(1);
	}
	70% {
		left: 80px;
		transform: scale(1.1);
	}
	100% {
		width: 40px;
		left: 80px;
		font-size: 0;
		background: #1abc9c;
		transform: scale(0);
	}
}
@keyframes an-btn-reset {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.btn-send svg {
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
}
.text {
	fill: none;
	stroke-width: 5;
	stroke-dasharray: 0 240;
	stroke-dashoffset: 0;
}
.text:nth-child(4n + 1) {
	stroke: rgb(39, 153, 238);
	animation: text1 3s ease-in-out forwards infinite;
}
.text:nth-child(4n + 2) {
	stroke: rgb(47, 169, 92);
	animation: text2 3s ease-in-out forwards infinite;
}
.text:nth-child(4n + 3) {
	stroke: rgb(249, 189, 56);
	animation: text3 3s ease-in-out forwards infinite;
}
.text:nth-child(4n + 4) {
	stroke: rgb(235, 61, 50);
	animation: text4 3s ease-in-out forwards infinite;
}
@keyframes text1 {
	100% {
		stroke-dasharray: 60 180;
		stroke-dashoffset: 1000;
	}
}
@keyframes text2 {
	100% {
		stroke-dasharray: 60 180;
		stroke-dashoffset: 1060;
	}
}
@keyframes text3 {
	100% {
		stroke-dasharray: 60 180;
		stroke-dashoffset: 1120;
	}
}
@keyframes text4 {
	100% {
		stroke-dasharray: 60 180;
		stroke-dashoffset: 1180;
	}
}
`})})]})}function k(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(s,e)})):s(e)}export{k as default};
//# sourceMappingURL=020-3dea68e4.js.map
