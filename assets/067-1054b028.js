import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",strong:"strong",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"67-3d-parasol",children:[t.jsx(n.code,{children:"#67"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/67/",target:"_blank",rel:"nofollow noopener noreferrer",children:"3D Parasol"})]}),`
`,t.jsx(n.p,{children:"3D Parasol: Is it possible to display more than just basic bodies in 3D with CSS? Apparently yes!"}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/MWZoYxp",target:"_blank",rel:"nofollow noopener noreferrer",children:"#67 CSS Challenge / 3D Parasol"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#67 CSS Challenge / 3D Parasol",src:"https://codepen.io/mulander/embed/MWZoYxp?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,t.jsx(n.p,{children:"Find the coordinates of the vertices of the orthogonal polygon"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"https://blog.csdn.net/wuprogrammer/article/details/108903244",target:"_blank",rel:"nofollow noopener noreferrer",children:"求正多边形各顶点的坐标（数学）"})}),`
`,t.jsx(n.li,{children:t.jsx(n.a,{href:"https://www.mathopenref.com/coordpolycalc.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Polygon vertex calculator"})}),`
`]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Formula"})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-js",children:`// The center of the square polygon is (0, 0)
x1 = r * Math.cos((2 * Math.PI * i) / n);
y1 = r * Math.sin((2 * Math.PI * i) / n);

// The center of the square polygon is (a, b)
x2 = a + r * Math.cos((2 * Math.PI * i) / n);
y2 = b + r * Math.sin((2 * Math.PI * i) / n);
`})}),`
`,t.jsxs(n.p,{children:[t.jsx(n.code,{children:"clip-path"})," translation"]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-ts",children:`/**
 * @title getClipCoords
 * @param r radius
 * @param n number of sides
 * @param x
 * @param y
 * @returns {string}
 */
let getClipCoords = (r, n, x, y) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    const xi = x + r * Math.cos((2 * Math.PI * i) / n);
    const yi = y + r * Math.sin((2 * Math.PI * i) / n);
    const translate = (_) => ((100 * _) / (2 * r)).toFixed(6); // n%
    const point = \`\${translate(xi)}% \${translate(yi)}%\`; // n% m%
    arr.push(point);
  }
  return arr.join(",");
};

/// getClipCoords(100,4,100,100)
/// '100.000000% 50.000000%,50.000000% 100.000000%,0.000000% 50.000000%,50.000000% 0.000000%'
/// clip-path: polygon(100.000000% 50.000000%,50.000000% 100.000000%,0.000000% 50.000000%,50.000000% 0.000000%)
`})}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug 
.frame: .card 
  .stick 
  .top 
    - for(let i = 0; i < 12; i++)
      .slice
  .shadow
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
	background: #f5ce51;
	perspective: 500px;
}
.card {
	position: absolute;
	transform-style: preserve-3d;
	top: 10%;
	left: 10%;
	transform: rotateX(70deg) rotateY(-15deg);
	.stick {
		position: absolute;
		z-index: 2;
		width: 6px;
		height: 150px;
		top: 100px;
		left: 97px;
		background: #888;
		transform-origin: 50% 0;
		transform: translateZ(-1px) rotateX(-90deg);
		border-radius: 2px;
	}
	.top {
		position: relative;
		z-index: 3;
		width: 200px;
		height: 200px;
		transform-style: preserve-3d;
		transform: rotateZ(0);
		animation: rotate 5s linear both infinite;
		.slice {
			position: absolute;
			top: 100px;
			left: 77px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 0 24px 98px 24px;
			transform-origin: center top;
			&:nth-child(odd) {
				border-color: transparent transparent #fff transparent;
			}
			&:nth-child(even) {
				border-color: transparent transparent skyblue transparent;
			}
			@for $i from 1 through 12 {
				&:nth-child(#{$i}) {
					transform: rotateZ(30deg * ($i - 1)) rotateX(-24deg);
				}
			}
		}
	}

	.shadow {
		position: absolute;
		width: 200px;
		height: 200px;
		top: 0;
		left: 0;
		border-radius: 50%;
		transform: translateZ(-150px) translateX(120px) translateY(-40px);
		&::after {
			content: "";
			position: absolute;
			left: 10%;
			top: 10%;
			height: 80%;
			width: 80%;
			background-color: hsl(46, 51%, 45%);
			box-shadow: inset 0 0 30px 30px hsl(46, 51%, 40%);
			clip-path: polygon(
				100% 50%,
				93.30127018922194% 75%,
				75% 93.30127018922192%,
				50% 100%,
				25.00000000000001% 93.30127018922194%,
				6.698729810778061% 75%,
				0% 50.00000000000001%,
				6.698729810778061% 25.000000000000014%,
				24.99999999999998% 6.698729810778083%,
				49.99999999999999% 0%,
				75% 6.698729810778069%,
				93.30127018922192% 24.99999999999998%
			);
			animation: rotate 5s linear both infinite;
		}
		&::before {
			content: "";
			position: absolute;
			z-index: -1;
			width: 6px;
			height: 60px;
			top: 50%;
			left: 0px;
			background: hsl(46, 51%, 45%);
			transform-origin: 0% 50%;
			transform: rotateZ(90deg) translate3d(3px, -8px, -1px);
			box-shadow: 0 0 2px 1px hsl(46, 51%, 45%);
			border-radius: 2px;
		}
	}
}

@keyframes rotate {
	to {
		transform: rotateZ(360deg);
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{j as default};
//# sourceMappingURL=067-1054b028.js.map
