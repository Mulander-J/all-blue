import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(n){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre"},o(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(e.h1,{id:"57-icosahedron",children:[t.jsx(e.code,{children:"#57"})," ",t.jsx(e.a,{href:"https://100dayscss.com/days/57/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Icosahedron"})]}),`
`,t.jsx(e.p,{children:"Icosahedron: This time a slightly more complicated basic body as a 3D object. Can you figure out how the triangles are made?"}),`
`,t.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["See the Pen ",t.jsx(e.a,{href:"https://codepen.io/mulander/pen/dywVJrV",target:"_blank",rel:"nofollow noopener noreferrer",children:"#57 CSS Challenge / Icosahedron"}),`
by Mulander (`,t.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#57 CSS Challenge / Icosahedron",src:"https://codepen.io/mulander/embed/dywVJrV?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,t.jsxs(e.blockquote,{children:[`
`,t.jsxs(e.p,{children:["Cloned from ",t.jsx(e.a,{href:"https://codepen.io/rodzeymer/pen/wvebLWY",target:"_blank",rel:"nofollow noopener noreferrer",children:"rodzeymer"})]}),`
`]}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://en.wikipedia.org/wiki/Icosahedron",target:"_blank",rel:"nofollow noopener noreferrer",children:"Wiki.Icosahedron"})}),`
`,t.jsx(e.li,{children:t.jsx(e.a,{href:"https://mathworld.wolfram.com/Icosahedron.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"mathworld.Icosahedron"})}),`
`]}),`
`,t.jsx(e.h2,{id:"code",children:"Code"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-html",children:`// pug

.frame: .center: .icosahedron
	- for (var i = 1; i <= 20; i++)
		div(class='side side-' + i)
`})}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-css",children:`$theme: #fff;
$side: 70px;
$sqrt3: 1.732;
$tilt: 52.62deg; // asin(tan(54deg)/sqrt(3))
$capheight: -1.051 * $side; // sqrt(3-tan(54deg)^2 )
$triheight: $side * $sqrt3;
$vshift: $capheight + $triheight / 2;

$innerradius: 1.376 * $side; // tan(54deg)
$outerradius: 1.701 * $side; // 1/cos(54deg)
$sidetilt: 10.81deg; // asin( (sec(54deg)-tan(54deg))/sqrt(3) )
$sideheight: $outerradius; // sqrt(3-(sec(54deg)-tan(54deg))^2)
$vshift2: $sideheight + $triheight - $vshift;

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
	background: #2c3e50;
}

.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	perspective: 1000px;
}

.icosahedron {
	position: relative;
	width: $side * 2;
	height: $side * 2;
	animation: spin 16s infinite linear;
	transform-style: preserve-3d;

	.side {
		position: absolute;
		left: 0;
		bottom: 50%;
		border-bottom: $triheight solid rgba($theme, 1);
		border-left: $side solid transparent;
		border-right: $side solid transparent;
		transform-origin: 50% 0%;
		transition-duration: 0.9s;

		&:nth-child(2n + 2) {
			border-bottom-color: rgba($theme, 0.4);
		}

		&:nth-child(4n + 4) {
			border-bottom-color: rgba($theme, 0.6);
		}

		&:nth-child(7n + 7) {
			border-bottom-color: rgba($theme, 0.8);
		}

		&:nth-child(8n + 8) {
			border-bottom-color: rgba($theme, 0.6);
		}
	}

	@for $i from 1 through 5 {
		// top
		.side-#{$i} {
			transform: translateY($vshift) rotateY(#{$i * 72deg}) rotateX($tilt);
		}
		&:hover .side-#{$i} {
			transform: translateY(-($vshift + 95)) rotateY(#{$i * 72deg}) rotateX($tilt);
		}
	}
	@for $i from 6 through 10 {
		// bottom
		.side-#{$i} {
			transform: translateY($vshift2)
				rotateY(#{$i * 72deg + 36deg})
				rotateX(#{180deg - $tilt});
		}
		&:hover .side-#{$i} {
			transform: translateY(($vshift2 + 66))
				rotateY(#{$i * 72deg + 36deg})
				rotateX(#{180deg - $tilt});
		}
	}
	@for $i from 11 through 15 {
		// bottom sides
		.side-#{$i} {
			transform: translateY(#{$triheight / 2})
				rotateY(#{$i * 72deg + 36deg})
				translateZ($outerradius)
				rotateX(-$sidetilt);
		}

		&:hover .side-#{$i} {
			transform: translateY(#{($triheight + 95px) / 2})
				rotateY(#{$i * 72deg + 36deg})
				translateZ($outerradius)
				rotateX(-$sidetilt);
		}
	}
	@for $i from 16 through 20 {
		// top sides
		.side-#{$i} {
			transform: translateY(#{$triheight / 2 + $sideheight})
				rotateY(#{$i * 72deg})
				rotateZ(180deg)
				translateZ($outerradius)
				rotateX(-$sidetilt);
		}

		&:hover .side-#{$i} {
			transform: translateY(#{($triheight - 100px) / 2 + $sideheight})
				rotateY(#{$i * 72deg})
				rotateZ(180deg)
				translateZ($outerradius)
				rotateX(-$sidetilt);
		}
	}
}

@keyframes spin {
	0% {
		transform: rotateX(360deg) rotateY(0deg) rotateZ(360deg);
	}
	50% {
		transform: rotateX(0deg) rotateY(720deg) rotateZ(0deg);
	}
	100% {
		transform: rotateX(360deg) rotateY(0deg) rotateZ(360deg);
	}
}
`})})]})}function x(n={}){const{wrapper:e}=Object.assign({},o(),n.components);return e?t.jsx(e,Object.assign({},n,{children:t.jsx(r,n)})):r(n)}export{x as default};
//# sourceMappingURL=057-634c081e.js.map
