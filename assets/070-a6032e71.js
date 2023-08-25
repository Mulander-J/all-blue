import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-6eebfeed.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-769d2acc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(t){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(e.h1,{id:"70-calendar-days",children:[n.jsx(e.code,{children:"#70"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/70/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Calendar Days"})]}),`
`,n.jsx(e.p,{children:"Calendar Days: A test to create depth in user actions. A haptic feedback would be great."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/eYQaXzy",target:"_blank",rel:"nofollow noopener noreferrer",children:"#70 CSS Challenge / Calendar Days"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#70 CSS Challenge / Calendar Days",src:"https://codepen.io/mulander/embed/eYQaXzy?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-pug",children:`// pug

- const weekData = [['Friday',15],['Saturday',16],['Sunday',17],['Monday',18]]

.frame: .cards
	each wd in weekData
		.card
			h3=wd[0]
			p=wd[1]
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`* {
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
	background: #512626;
	color: #fff;
	font-family: "Open Sans", Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.cards {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}

.card {
	box-sizing: border-box;
	position: relative;
	width: 200px;
	height: 200px;
	background: #e27474;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	text-align: center;
	padding-top: 55px;
	
	h3 {
		font-weight: 400;
		font-size: 16px;
		line-height: 120%;
	}
	p {
		font-weight: 700;
		font-size: 60px;
		line-height: 100%;
	}
	@for $i from 1 through 4 {
  &:nth-child(#{$i}):hover {
			animation-delay: ($i * 0.2s);
			transform: scale(0.95);
			box-shadow: inset 2px 2px ($i * 2px) ($i * 4px) rgba(0, 0, 0, 0.25);
		}
	}
}
`})})]})}function j(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{j as default};
//# sourceMappingURL=070-a6032e71.js.map
