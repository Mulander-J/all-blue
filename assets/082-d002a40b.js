import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(t){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(e.h1,{id:"82-action-button",children:[n.jsx(e.code,{children:"#82"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/82/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Action Button"})]}),`
`,n.jsx(e.p,{children:"Action Button: A good interface will tell the user about the result and state of an action."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/VwqWBme",target:"_blank",rel:"nofollow noopener noreferrer",children:"#82 CSS Challenge / Action Button"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#82 CSS Challenge / Action Button",src:"https://codepen.io/mulander/embed/VwqWBme?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
	<input id="sender" type="checkbox" name="checker">
	<label class="flip" for="sender">
		<div class="front">send</div>
		<div class="back">done</div>
	</label>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.frame {
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
	color: #fff;
}
.flip {
	display: block;
	position: absolute;
	top: 37.5%;
	left: 37%;
	height: 12.5%;
	width: 26%;
	transform-style: preserve-3d;
	transition: all 0.8s ease;
	font-size: 20px;
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;
}
input[type="checkbox"] {
	display: none;
}
#sender:checked ~ .flip {
	transform: rotateX(180deg);
}
.front,
.back {
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	border-radius: 25px;
	box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
	text-shadow: -1px 3px 2px rgba(0, 0, 0, 0.3);
}
.front {
	background: #fff;
	color: #333;
}
.back {
	border: 2px solid #fff;
	background: #0f0;
	color: #fff;
	transform: rotateX(180deg);
}
`})})]})}function j(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{j as default};
//# sourceMappingURL=082-d002a40b.js.map
