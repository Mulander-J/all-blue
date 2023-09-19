import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const t=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(t.h1,{id:"81-jumping-ball",children:[n.jsx(t.code,{children:"#81"})," ",n.jsx(t.a,{href:"https://100dayscss.com/days/81/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Jumping Ball"})]}),`
`,n.jsx(t.p,{children:"Jumping Ball: Oh nice, CSS supports physics! Not really, but you can fake it with the right animations. Don't forget the principles of animation."}),`
`,n.jsx(t.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["See the Pen ",n.jsx(t.a,{href:"https://codepen.io/mulander/pen/XWogKqW",target:"_blank",rel:"nofollow noopener noreferrer",children:"#81 CSS Challenge / Jumping Ball"}),`
by Mulander (`,n.jsx(t.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(t.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#81 CSS Challenge / Jumping Ball",src:"https://codepen.io/mulander/embed/XWogKqW?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(t.h2,{id:"code",children:"Code"}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-html",children:`<div class="frame">
	<div class="rotate">
		<div class="ball"></div>
	</div>
	<div class="ground"></div>
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
	background: #9b59b6;
}
.ground {
	position: absolute;
	width: 100%;
	height: 20%;
	bottom: 0;
	left: 0;
	background: saddlebrown;
	background: linear-gradient(to left, white, white 55%, black 55%, black) repeat;
	background-size: 10% 100%;
	animation: pass 6s linear both infinite, color 3s linear both infinite;
}
.rotate {
	position: absolute;
	top: 10px;
	right: 0;
	transform: translate(50px, 0);
	height: 50px;
	width: 50px;
	animation: bounce 3s linear both infinite;
}
.ball {
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: #fff;
	background: linear-gradient(135deg, white, black);
	animation: rotate 1s linear both infinite;
}
@keyframes pass {
	to {
		background-position: -400px 0;
	}
}
@keyframes color {
	24%,
	26%,
	74%,
	76% {
		filter: opacity(1);
		transform: translateY(0);
	}
	25%,
	75% {
		filter: opacity(0.8);
		transform: translateY(2px);
	}
}
@keyframes rotate {
	to {
		rotate: 360deg;
	}
}
@keyframes bounce {
	0% {
		transform: translate(50px, 0);
	}
	25% {
		transform: translate(-100px, 260px) scale(1.1, 0.9);
	}
	24%,
	26% {
		transform: translate(-100px, 260px) scaleY(1);
	}
	50% {
		transform: translate(-200px, 150px);
	}
	75% {
		transform: translate(-300px, 260px) scale(1.1, 0.9);
	}
	74%,
	76% {
		transform: translate(-300px, 260px) scaleY(1);
	}
	100% {
		transform: translate(-400px, 260px);
	}
}
`})})]})}function j(e={}){const{wrapper:t}=Object.assign({},o(),e.components);return t?n.jsx(t,Object.assign({},e,{children:n.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=081-4737e986.js.map
