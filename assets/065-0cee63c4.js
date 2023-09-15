import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-8438cb78.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"65-ellipses-animation",children:[t.jsx(n.code,{children:"#65"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/65/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Ellipses Animation"})]}),`
`,t.jsx(n.p,{children:"Ellipses Animation: Did you also draw geometric shapes back in school. This one reminds me a bit of that."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/poqPLLm",target:"_blank",rel:"nofollow noopener noreferrer",children:"#65 CSS Challenge / Ellipses Animation"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#65 CSS Challenge / Ellipses Animation",src:"https://codepen.io/mulander/embed/poqPLLm?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame
	- for(let i = 0; i < 8; i++)
		.ring
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$count: 8;

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
	background: skyblue;
}
.ring {
	box-sizing: border-box;
	position: absolute;
	top: 50px;
	left: 150px;
	width: 100px;
	height: 300px;
	border: 1px solid #fff;
	border-radius: 50%;
	transition: all 0.5s ease-in-out;
	@for $i from 1 through $count {
		$deg: ($i - 1) * (360 / $count);
		&:nth-child(#{$i}) {
			animation: ring-#{$i} 5s ease-in-out infinite;
		}
		@keyframes ring-#{$i} {
			0% {
				transform: rotate($deg * 1deg);
				border-radius: 50%;
			}
			50% {
				transform: rotate(0) scaleX(3);
				border-radius: 0%;
			}
			100% {
				transform: rotate(360deg - $deg);
				border-radius: 50%;
			}
		}
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=065-0cee63c4.js.map
