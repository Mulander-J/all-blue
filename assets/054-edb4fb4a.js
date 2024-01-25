import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(t){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(e.h1,{id:"54-waves",children:[n.jsx(e.code,{children:"#54"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/54/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Waves"})]}),`
`,n.jsx(e.p,{children:"Waves: Even the smallest animations and tweeks, can have a large impact. For example a mesmerizing background animation."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/wvRgEQo",target:"_blank",rel:"nofollow noopener noreferrer",children:"#54 CSS Challenge / Waves"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#54 CSS Challenge / Waves",src:"https://codepen.io/mulander/embed/wvRgEQo?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsxs(e.p,{children:["Sass ",n.jsx(e.a,{href:"https://sass-lang.com/documentation/values/lists/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Lists"})," & ",n.jsx(e.a,{href:"https://sass-lang.com/documentation/values/maps/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Maps"})]}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`// pug

.frame
	- for(let i = 0; i < 3; i++)
		.wave
			- for(let j = 0; j < 10; j++)
				.circle
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`$colors: (
	(hsl(209, 34%, 23%)),
	(hsl(209, 35%, 38%)),
	(hsl(229, 35%, 38%)),
	(hsl(249, 35%, 38%))
);

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
	background: nth($colors, 1);
}
.wave {
	position: absolute;
	height: 100px;
	background: hsl(209, 35%, 38%);
	display: flex;
	flex-wrap: nowrap;
	@for $i from 1 through length($colors) - 1 {
		&:nth-of-type(#{$i}) {
			top: 180px + ($i * 60px);
			animation: wave
				2s
				ease-in-out
				if($i % 2 == 0, alternate-reverse, alternate)
				infinite;
			--bg: #{nth($colors, $i)};
			--wave: #{nth($colors, $i + 1)};
			background: var(--wave);
		}
	}
}
.circle {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	transform: translateY(-50%);
	&:nth-child(even) {
		background-color: var(--wave);
	}
	&:nth-child(odd) {
		background: var(--bg);
	}
}

@keyframes wave {
	to {
		transform: translateX(-100px);
	}
}
`})})]})}function b(t={}){const{wrapper:e}=Object.assign({},o(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(r,t)})):r(t)}export{b as default};
//# sourceMappingURL=054-edb4fb4a.js.map
