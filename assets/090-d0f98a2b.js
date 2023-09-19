import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-04ed5b14.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},o(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"90-mouse-trap",children:[t.jsx(n.code,{children:"#90"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/90/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Mouse Trap"})]}),`
`,t.jsx(n.p,{children:"Mouse Trap: Not the trap for real mice, but your cursor will get trapped on hover."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/gOZxmPe",target:"_blank",rel:"nofollow noopener noreferrer",children:"#90 CSS Challenge / Mouse Trap"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#90 CSS Challenge / Mouse Trap",src:"https://codepen.io/mulander/embed/gOZxmPe?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame: .grids
	- for(let i = 0; i < 10 * 10; i++)
		div(class="cell cell-"+(i+1))
	.rows
		- for(let i = 0; i < 9; i++)
			.line
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`$rows: 10;
$cells: $rows * $rows;
$gap: 1 * 1 / $rows;

.frame {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 400px;
	margin-top: -200px;
	margin-left: -200px;
	border-radius: 2px;
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
	background: #2980b9;
}

.grids {
	display: grid;
	grid-template-columns: repeat($rows, 1fr);
	.cell {
		position: relative;
		cursor: pointer;
		z-index: 2;
		box-sizing: border-box;
		aspect-ratio: 1/1;
		width: 100%;
		border-radius: 50%;
		// border: 1px solid rgba(#fff, 0.3);
		transition: all 0.3s ease;
		&:hover {
			background: rgba(#fff, 0.2);
		}
	}
	.rows {
		position: absolute;
		top: 0;
		left: 0;
		height: 90%;
		width: 100%;
		display: grid;
		grid-template-rows: repeat($rows - 1, 1fr);
		padding-top: 10%;
		.line {
			position: relative;
			height: 1px;
			width: 100%;
			&::after,
			&::before {
				content: "";
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				background: #fff;
				transform: scaleX(0);
				transition: all 0.3s ease;
			}
			&::after {
				transform-origin: 100% 50%;
			}
			&::before {
				transform-origin: 0% 50%;
			}
		}
	}

	$row: 1;
	$col: 1;
	$scale: $gap;
	@for $i from 1 through $cells {
		.cell-#{$i}:hover ~ .rows .line {
			$row: floor($i / 10);
			$col: $i % 10;
			$scale: $col / $rows;
			&:nth-child(#{$row}),
			&:nth-child(#{$row + 1}) {
				$gapCount: 2;
				&::after {
					transform: scaleX(1 - $scale - $gap * ($gapCount - 1));
				}
				&::before {
					transform: scaleX($scale - $gap * $gapCount);
				}
			}
			&:nth-child(#{$row - 1}),
			&:nth-child(#{$row + 2}) {
				$gapCount: 1;
				&::after {
					transform: scaleX(1 - $scale - $gap * ($gapCount - 1));
				}
				&::before {
					transform: scaleX($scale - $gap * $gapCount);
				}
			}
		}
	}
}
`})})]})}function b(e={}){const{wrapper:n}=Object.assign({},o(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(r,e)})):r(e)}export{b as default};
//# sourceMappingURL=090-d0f98a2b.js.map
