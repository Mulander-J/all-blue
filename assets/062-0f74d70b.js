import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-33e7d280.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function i(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{}),`
`,t.jsxs(n.h1,{id:"62-price-table",children:[t.jsx(n.code,{children:"#62"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/62/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Price Table"})]}),`
`,t.jsx(n.p,{children:"Price Table: Don't worry, 100 Days CSS is free. For everything else, you have these sample pricing tables."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/dywWdWx",target:"_blank",rel:"nofollow noopener noreferrer",children:"#62 CSS Challenge / Price Table"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#62 CSS Challenge / Price Table",src:"https://codepen.io/mulander/embed/dywWdWx?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="plans">
		<div class="plan">
			<div class="head">Basic</div>
			<div class="ctx">
				<div class="price">$5</div>
				<div class="unit">per month</div>
			</div>
		</div>
		<div class="plan">
			<div class="head">Basic</div>
			<div class="ctx">
				<div class="price">$5</div>
				<div class="unit">per month</div>
			</div>
		</div>
		<div class="plan">
			<div class="head">Basic</div>
			<div class="ctx">
				<div class="price">$5</div>
				<div class="unit">per month</div>
			</div>
		</div>

		<div class="data">
			<div class="row">
				<div class="range">
					<label>5 Users</label>
					<label>100 Users</label>
				</div>
				<div class="line"></div>
			</div>
		</div>
	</div>
</div>
`})}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-css",children:`* {
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
	box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	background: #e9edef;
}
.plans {
	display: grid;
	padding: 20px;
	gap: 10px;
	grid-template-columns: repeat(3, 1fr);
	.plan {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		.head {
			height: 36px;
			text-align: center;
			background: #7dd0ed;
			color: #fff;
			font-weight: 600;
			line-height: 36px;
			font-size: 14px;
			transition: all 0.3s ease-in-out;
		}
		.ctx {
			background: #fff;
			color: #5e5e5e;
			padding: 16px 0;
			text-align: center;
			.price {
				text-align: center;
				font-size: 30px;
				line-height: 30px;
				font-weight: 700;
				transition: all 0.3s ease-in-out;
			}
			.unit {
				font-size: 12px;
				line-height: 12px;
				font-weight: 400;
			}
		}
		&:hover {
			transform: scale(1.1) translate3d(0, 0, 0);
			box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.1);
			.head {
				background: #27a6d2;
			}
			.price {
				color: #27a6d2;
			}
		}
		@for $i from 1 through 3 {
			&:nth-child(#{$i}):hover ~ .data .row .line::after {
				width: $i * 30%;
			}
		}
	}
}

.data {
	position: absolute;
	width: 380px;
	top: 220px;
	left: 10px;
	padding: 16px;
	background: #fff;
	box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
	.row {
		.range {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.line {
			height: 8px;
			position: relative;
			margin-top: 4px;
			background: #e9edef;
			width: 100%;
			border-radius: 4px;
			&::after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				border-radius: 4px;
				width: 0%;
				background: #27a6d2;
				transition: all 0.3s ease;
			}
		}
	}
}
`})})]})}function b(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(i,e)})):i(e)}export{b as default};
//# sourceMappingURL=062-0f74d70b.js.map
