import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-89363db9.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-a3b60eb7.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"38-logo-transition",children:[n.jsx(t.code,{children:"#38"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/38/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Logo Transition"})]}),`
`,n.jsx(t.p,{children:"Logo Transition: Logos don't always have to be static, as a transition or stylistic element they can have animations."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/MWZyOqB",target:"_blank",rel:"nofollow noopener noreferrer",children:"#38 CSS Challenge / Logo Transition"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#38 CSS Challenge / Logo Transition",src:"https://codepen.io/mulander/embed/MWZyOqB?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="logo" onclick="
        this.style.setProperty('--c1', 'hsla('+  Math.floor(Math.random()*360) +',100%,50%,1)');
        this.style.setProperty('--c2', 'hsla('+  Math.floor(Math.random()*360) +',100%,50%,1)');
        this.classList.toggle('active');
      ">
		<div class="prev"></div>
		<div class="next"></div>
	</div>
</div>
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
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	font-family: "Open Sans", Helvetica, sans-serif;
}
.logo {
	cursor: pointer;
	user-select: none;
	width: 400px;
	height: 400px;
	--c1: #9b59b6;
	--c2: #fff;
	background: var(--c1);
	.prev,
	.next {
		position: absolute;
		top: 160px;
		left: 165px;
		height: 80px;
		width: 70px;
		transition: background 0.8s ease, transform 1s ease-in-out;
		clip-path: path(
			"M-4.67739102e-15,21.1739614 L-5.32907052e-15,20 L34.6410162,0 L69.2820323,20 L69.2820323,21.1739614 C65.1281093,26.3215737 62.6410162,32.870341 62.6410162,40 C62.6410162,47.129659 65.1281093,53.6784263 69.2820323,58.8260386 L69.2820323,60 L34.6410162,80 L1.687539e-14,60 L1.62237105e-14,58.8260386 C4.15392303,53.6784263 6.64101615,47.129659 6.64101615,40 C6.64101615,32.870341 4.15392303,26.3215737 2.88213897e-13,21.1739614 Z"
		);
	}
	.prev {
		background: var(--c2);
		transform: scale(1);
	}
	.next {
		background: var(--c1);
		transform: scale(0);
	}
}

.active {
	.prev {
		transform: scale(10);
	}
	.next {
		transform: scale(1);
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},r(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=038-5ac2dfd2.js.map
