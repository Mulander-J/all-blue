import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-462ee75c.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"28-ring-ring",children:[t.jsx(n.code,{children:"#28"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/28/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Ring Ring"})]}),`
`,t.jsx(n.p,{children:"Ring Ring: Fortunately for you, I left out the alarm sound. But hopefully the signal color and the movement have served their purpose."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/rNoxmPv",target:"_blank",rel:"nofollow noopener noreferrer",children:"#28 CSS Challenge / Ring Ring"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#28 CSS Challenge / Ring Ring",src:"https://codepen.io/mulander/embed/rNoxmPv?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .center
	// right waves
	.ripples
		- for(let i = 0; i < 3; i++)
			svg.curve: path(d="M2,58 C14,45 14,15 2,2")
	// svg of bell
	svg.bell(viewBox="0 0 50 54"): path(
		d="M1.13063517,45.0453694 C1.88439195,45.7991262 2.80138269,46.1760046 3.82399539,46.1760046 L17.2955975,46.1760046 C17.2955975,48.331653 18.0493543,50.110423 19.5592683,51.6179365 C21.0667819,53.1254501 22.8983629,53.8816074 25.0012002,53.8816074 C27.1544481,53.8816074 28.9332181,53.1254501 30.4431322,51.6179365 C31.9506457,50.110423 32.7044025,48.331653 32.7044025,46.1760046 L46.1760046,46.1760046 C47.1986173,46.1760046 48.115608,45.7991262 48.8693648,45.0453694 C49.6231216,44.2892122 50,43.3746219 50,42.3496087 C46.1760046,39.1185367 43.3194104,35.1313073 41.379807,30.3879207 C39.4402036,25.6469346 38.4704018,20.6370925 38.4704018,15.408805 C38.4704018,12.0697105 37.5006001,9.48197225 35.6138077,7.54236881 C33.6742042,5.54995439 31.033655,4.41931922 27.6945605,3.98722934 C27.8553939,3.66316194 27.9106054,3.28628355 27.9106054,2.90940516 C27.9106054,2.10043689 27.639349,1.40189159 27.0488262,0.86177925 C26.5087138,0.268855922 25.807768,0 25.0012002,0 C24.192232,0 23.5464977,0.268855922 23.0063853,0.86177925 C22.413462,1.40189159 22.1446061,2.10043689 22.1446061,2.90940516 C22.1446061,3.28628355 22.1974171,3.66316194 22.360651,3.98722934 C19.019156,4.41931922 16.3786068,5.54995439 14.4390033,7.54236881 C12.4993999,9.48197225 11.5295982,12.0697105 11.5295982,15.408805 C11.5295982,20.6370925 10.5597964,25.6469346 8.620193,30.3879207 C6.68058956,35.1313073 3.82399539,39.1185367 0,42.3496087 C0,43.3746219 0.376878391,44.2892122 1.13063517,45.0453694 L1.13063517,45.0453694 Z M20.2050026,45.6911037 C20.52907,45.6911037 20.6899035,45.8519372 20.6899035,46.1760046 C20.6899035,47.3618513 21.1195929,48.384464 21.9837726,49.1934322 C22.7903404,50.0552115 23.8153536,50.4873014 25.0012002,50.4873014 C25.3228672,50.4873014 25.4861011,50.6481348 25.4861011,50.9722022 C25.4861011,51.2938691 25.3228672,51.4571031 25.0012002,51.4571031 C23.5464977,51.4571031 22.3054395,50.9169907 21.2828268,49.894378 C20.2578136,48.8693648 19.7201018,47.6307072 19.7201018,46.1760046 C19.7201018,45.8519372 19.8809352,45.6911037 20.2050026,45.6911037 L20.2050026,45.6911037 Z"
	)
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
	background: hsl(110 30% 25% / 1);
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.ripples {
	position: absolute;
	right: -70px;
	top: 0;
	width: 60px;
	-webkit-box-reflect: left 70px;
	.curve {
		width: 14px;
		height: 60px;
		fill: none;
		stroke: currentColor;
		stroke-width: 2px;
		position: absolute;
		opacity: 0;
		color: #f00;
		@for $i from 1 through 3 {
			&:nth-child(#{$i}) {
				animation: wave 2.5s (0.5s * $i) ease-out infinite both;
			}
		}
	}
}
@keyframes wave {
	0% {
		transform: translate3d(0, 0, 0) scale(1);
		opacity: 0;
	}
	10% {
		transform: translate3d(0, 0, 0) scale(1);
		opacity: 1;
	}
	100% {
		transform: translate3d(60px, 0, 0) scale(2);
		opacity: 0;
	}
}

.bell {
	fill: currentColor;
	color: #fadc3d;
	width: 50px;
	height: 54px;
	transform-origin: 50% 0;
	animation: shake 1s ease-in-out infinite;
}
@keyframes shake {
	0%,
	50%,
	100% {
		transform: rotate(0);
	}
	5%,
	10%,
	15%,
	20%,
	25%,
	30%,
	35%,
	40% {
		transform: rotate(6deg);
	}
	45% {
		transform: rotate(4deg);
	}
	7.5%,
	12.5%,
	17.5%,
	22.5%,
	27.5%,
	32.5%,
	37.5%,
	42.5% {
		transform: rotate(-6deg);
	}
	47.5% {
		transform: rotate(-2deg);
	}
}
`})})]})}function b(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{b as default};
//# sourceMappingURL=028-6541fbcd.js.map
