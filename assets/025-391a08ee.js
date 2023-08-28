import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-cd188599.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2b3739ac.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(n){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(e.h1,{id:"25-map-marker",children:[t.jsx(e.code,{children:"#25"})," ",t.jsx(e.a,{href:"https://100dayscss.com/days/25/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Map Marker"})]}),`
`,t.jsx(e.p,{children:"Map Marker: Did I just placed a marker in the middle of some water to get a nice color contrast? Maybe. Click on it for a nice transition."}),`
`,t.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["See the Pen ",t.jsx(e.a,{href:"https://codepen.io/mulander/pen/bGOVWEE",target:"_blank",rel:"nofollow noopener noreferrer",children:"#25 CSS Challenge / Map Marker"}),`
by Mulander (`,t.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#25 CSS Challenge / Map Marker",src:"https://codepen.io/mulander/embed/bGOVWEE?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(e.p,{children:t.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect",target:"_blank",rel:"nofollow noopener noreferrer",children:"box-reflect"})}),`
`,t.jsx(e.p,{children:t.jsx(e.code,{children:"-webkit-box-reflect"})}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"-webkit-box-reflect"})," CSS property lets you reflect the content of an element in one specific direction."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-yaml",children:`/* Direction values */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Offset value */
-webkit-box-reflect: below 10px;

/* Mask value */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Global values */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: revert;
-webkit-box-reflect: revert-layer;
-webkit-box-reflect: unset;
`})}),`
`,t.jsx(e.h2,{id:"code",children:"Code"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`<div class="frame">
	<svg class="map" width="400px" height="400px" viewBox="0 0 400 400">
		<path fill="currentColor" d="M161.061341,399.999994 C161.061341,399.999994 191.270445,391.453331 205.135883,365.931812 C219.001321,340.410293 200.432398,333.765052 214.613679,309.426833 C228.79496,285.088614 250.056003,267.776851 262.826394,266.922116 C275.596785,266.067381 268.157228,295.720245 275.715421,305.337232 C283.273615,314.954218 275.976179,326.217927 303.147406,318.226259 C330.318634,310.234591 337.441809,308.749917 354.803656,282.075606 C372.165503,255.401296 353.503439,227.118217 363.183533,215.005256 C372.863628,202.892294 400.000001,171.927011 400.000001,171.927011 L400.000001,399.999994 L161.061341,399.999994 Z M8.33144441e-07,274.813084 C8.33144441e-07,274.813084 39.2929748,253.427701 69.7020648,222.975932 C100.111155,192.524163 111.329013,178.897167 120.245786,154.398535 C129.162559,129.899902 108.904134,115.269131 115.056957,98.3643901 C121.20978,81.459649 135.217027,74.9407179 149.468681,74.1092913 C163.720334,73.2778646 154.420375,103.542195 180.702766,94.5346817 C206.985157,85.5271688 208.897554,56.1953712 227.012818,47.5333294 C245.128081,38.8712876 253.356729,68.8621277 278.808059,63.1798791 C304.259388,57.4976304 304.842006,36.4943955 317.091607,32.0191906 C329.341207,27.5439856 334.697225,18.5903589 367.296171,25.5675291 C399.895117,32.5446994 399.999998,49.0022571 399.999998,49.0022571 L400,-5.40012479e-13 L2.47316295e-05,-1.96109795e-12 L8.33144441e-07,274.813084 Z"></path>
	</svg>
	<div class="flip">
		<div class="dot">
			<svg width="48px" height="72px" viewBox="0 0 48 72">
				<path fill="currentColor" d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"></path>
			</svg>
			<div class="ripple"></div>
		</div>
		<div class="card">Here!</div>
	</div>
</div>
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`* {
	margin: 0;
	padding: 0;
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
	overflow: hidden;
	font-family: "Open Sans", Helvetica, sans-serif;
	color: #fff;
	perspective: 1000px;
}
.map {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: river 0.8s linear infinite;
	color: hsl(206, 78%, 48%);
	background: linear-gradient(90deg, #1f8de4, #2196f3, #1f8de4, #2196f3) 400%
		100% repeat-x;
}
.flip {
	position: absolute;
	z-index: 2;
	top: 110px;
	left: 100px;
	transform-style: preserve-3d;
	transition: all 1s ease-in-out;
	width: 200px;
	height: 180px;
	.dot {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		backface-visibility: hidden;
		svg {
			color: #ffcc30;
			height: 72px;
			-webkit-box-reflect: below 2px
				linear-gradient(transparent, rgba(0, 0, 0, 0.5));
			animation: jump 1s linear infinite alternate;
		}
		.ripple {
			width: 18px;
			height: 4px;
			background: #1b7ac7;
			border-radius: 50%;
			margin: -2px auto 0;
			animation: jump 1s ease infinite alternate;
		}
	}

	.card {
		position: absolute;
		top: 0;
		left: 0;
		background: white;
		color: black;
		height: 100%;
		width: 100%;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		font-weight: 600;
		backface-visibility: hidden;
		transform: rotateY(180deg);
	}
}

.frame:hover .flip {
	transform: rotateY(180deg);
}
@keyframes river {
	0% {
		background-position-x: 0;
	}
	100% {
		background-position-x: 400px;
	}
}
@keyframes jump {
	to {
		transform: scale(1.2) translateZ(0);
	}
}
`})})]})}function w(n={}){const{wrapper:e}=Object.assign({},o(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(r,n)})):r(n)}export{w as default};
//# sourceMappingURL=025-391a08ee.js.map
