import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as l}from"./index-ea668d1f.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-56087800.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",ul:"ul",li:"li",strong:"strong",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{}),`
`,n.jsxs(t.h1,{id:"77-motion-blur",children:[n.jsx(t.code,{children:"#77"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/77/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Motion Blur"})]}),`
`,n.jsx(t.p,{children:"Motion Blur: In the future we may have native support for Motion Blur, until then we'll have to help ourselves with a few tricks."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/ExOqvoz",target:"_blank",rel:"nofollow noopener noreferrer",children:"#77 CSS Challenge / Motion Blur"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#77 CSS Challenge / Motion Blur",src:"https://codepen.io/mulander/embed/ExOqvoz?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(t.h3,{id:"blur-shadow-effect",children:"Blur Shadow Effect"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsx(t.li,{children:"1.animate as children elements offset"}),`
`,n.jsx(t.li,{children:"2.animate as sibling elemnets delay"}),`
`]}),`
`,n.jsx(t.h3,{id:"conic-gradient",children:n.jsx(t.code,{children:"conic-gradient"})}),`
`,n.jsx(t.p,{children:n.jsx(t.a,{href:"https://www.jianshu.com/p/11fac68c1aee",target:"_blank",rel:"nofollow noopener noreferrer",children:"conic-gradient"})}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Syntax"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-yaml",children:`<conic-gradient()> = 
  conic-gradient( [ [ from <angle> ]? [ at <position> ]? ]  ||
  <color-interpolation-method> , <angular-color-stop-list> )  

<position> = 
  [ left | center | right | top | bottom | start | end | <length-percentage> ]  |
  [ left | center | right | x-start | x-end | <length-percentage> ] [ top | center | bottom | y-start | y-end | <length-percentage> ]  |
  [ center | [ left | right | x-start | x-end ] <length-percentage>? ] && [ center | [ top | bottom | y-start | y-end ] <length-percentage>? ]  |
  [ center | [ start | end ] <length-percentage>? ] [ center | [ start | end ] <length-percentage>? ]  

<color-interpolation-method> = 
  in [ <rectangular-color-space> | <polar-color-space> <hue-interpolation-method>? ]  

<angular-color-stop-list> = 
  <angular-color-stop> , [ <angular-color-hint>? , <angular-color-stop> ]#  

<length-percentage> = 
  <length>      |
  <percentage>  

<rectangular-color-space> = 
  srgb         |
  srgb-linear  |
  lab          |
  oklab        |
  xyz          |
  xyz-d50      |
  xyz-d65      

<polar-color-space> = 
  hsl    |
  hwb    |
  lch    |
  oklch  

<hue-interpolation-method> = 
  [ shorter | longer | increasing | decreasing | specified ] hue  

<angular-color-stop> = 
  <color>              &&
  <color-stop-angle>?  

<angular-color-hint> = 
  <angle-percentage>  

<color-stop-angle> = 
  <angle-percentage>{1,2}  

<angle-percentage> = 
  <angle>       |
  <percentage>  
`})}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Chess conic gradient"})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`.chess-1 {
  background: conic-gradient(
    white 0.25turn,
    black 0.25turn 0.5turn,
    white 0.5turn 0.75turn,
    black 0.75turn
  )
  top left / 25% 25% repeat;
}
/* equals */
.chess-2 {
  background-image: conic-gradient(white 0.25turn, black 0.25turn 0.5turn, white 0.5turn 0.75turn, black 0.75turn);
  background-size: 25% 25%;
  background-repeat: repeat;
}
`})}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`// pug

.frame: .center: .wrapper
	- for(let i = 0; i < 6; i++)
		.ball
`})}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`.frame {
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
	background: #c900ff;
	color: #fff;
	// filter: contrast(3);
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.wrapper {
	position: relative;
	width: 350px;
	height: 350px;
	background: conic-gradient(
			white 0.25turn,
			black 0.25turn 0.5turn,
			white 0.5turn 0.75turn,
			black 0.75turn
		)
		top left / 25% 25% repeat;
	.ball {
		position: absolute;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #fff;
		transition: all 0.3s ease-in-out;
		animation: move 6s ease-in-out infinite;
		&:nth-child(1) {
			mix-blend-mode: difference;
			animation-delay: 0s;
			z-index: 2;
		}
		@for $i from 2 through 6 {
			&:nth-child(#{$i}) {
				animation-delay: ($i * 0.04s);
				background: rgba(0, 255, 0, 0.35);
				box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.15);
				/* filter: blur(2px); */
			}
		}
	}
}

@keyframes move {
	0%,
	100% {
		left: 0%;
		top: 0%;
	}
	25% {
		left: calc(100% - 40px);
		top: calc(100% - 40px);
	}
	50% {
		top: calc(100% - 40px);
		left: 0%;
	}
	75% {
		left: calc(100% - 40px);
		top: 0%;
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=077-798aab56.js.map
