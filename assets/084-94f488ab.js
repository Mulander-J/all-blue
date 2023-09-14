import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-33e7d280.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(t){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(e.h1,{id:"84-book-cover",children:[n.jsx(e.code,{children:"#84"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/84/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Book Cover"})]}),`
`,n.jsx(e.p,{children:"Book Cover: Nope, not an image or svg file, just some styling rules to create the illusion of a book."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/poqwxZW",target:"_blank",rel:"nofollow noopener noreferrer",children:"#84 CSS Challenge / Book Cover"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#84 CSS Challenge / Book Cover",src:"https://codepen.io/mulander/embed/poqwxZW?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://sass-lang.com/documentation/modules/list/",target:"_blank",rel:"nofollow noopener noreferrer",children:"sass.list"})}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"append"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`append($list, $val, $separator: auto) //=> list
`})}),`
`,n.jsxs(e.p,{children:["Returns a copy of $list with ",n.jsx(e.code,{children:"$val"})," added to the end."]}),`
`,n.jsxs(e.p,{children:["If ",n.jsx(e.code,{children:"$separator"})," is ",n.jsx(e.code,{children:"comma"}),", ",n.jsx(e.code,{children:"space"}),", or ",n.jsx(e.code,{children:"slash"}),", the returned list is comma-separated, space-separated, or slash-separated, respectively."]}),`
`,n.jsxs(e.p,{children:["If it’s ",n.jsx(e.code,{children:"auto"})," (the default), the returned list will use the same separator as ",n.jsx(e.code,{children:"$list"})," (or space if ",n.jsx(e.code,{children:"$list"})," doesn’t have a separator)."]}),`
`,n.jsx(e.p,{children:"Other values aren’t allowed."}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
	<div class="book">
		<div class="cover">
			<h3>JUDGE THIS BOOK</h3>
			<h5>by its cover</h5>
		</div>
	</div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@function getSilkGradient($n, $c) {
	$list: ();
	@for $i from 1 through $n {
		$opt: if($i % 2 == 0, 0.2, 1);
		$list: append($list, rgba($c, $opt), comma);
	}
	@return $list;
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
	background: #e3e7ea;
	color: #fff;
}
.book {
	position: absolute;
	width: 200px;
	height: 280px;
	top: 60px;
	left: 100px;
	border-radius: 2px 4px 4px 2px;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2), -1px 4px 4px 0 rgba(0, 0, 0, 0.3);
	background: #1e1e1e;
	background: linear-gradient(45deg, #1e1e1e 0%, #4f4f4f 100%);
}
.book::before {
	content: "";
	display: block;
	position: absolute;
	width: 20px;
	top: 0;
	left: 0;
	bottom: 0;
	border-radius: 2px 0 0 2px;
	background: linear-gradient(
		to right,
		rgba(#fff, 0) 0%,
		rgba(#fff, 0.1) 20%,
		rgba(#fff, 0.1) 45%,
		rgba(#000, 0.15) 49%,
		rgba(#000, 0.15) 84%,
		rgba(#000, 0) 100%
	);
}
.book::after {
	content: "";
	display: block;
	position: absolute;
	width: 10px;
	top: -1px;
	right: 16px;
	bottom: -1px;
	border-radius: 2px;
	box-shadow: -1px 0px 1px 0 rgba(0, 0, 0, 0.4);
	background: linear-gradient(to right, getSilkGradient(8, #9af80d));
}
.cover {
	margin: 40px auto;
	width: min-content;
}
h3 {
	margin: 0;
	font-size: 30px;
	line-height: 100%;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 1px;
}
h5 {
	margin: 0;
	font-size: 13px;
	line-height: 160%;
	font-weight: 400;
	font-style: italic;
	padding-left: 2px;
	color: #ccc;
}
`})})]})}function j(t={}){const{wrapper:e}=Object.assign({},r(),t.components);return e?n.jsx(e,Object.assign({},t,{children:n.jsx(o,t)})):o(t)}export{j as default};
//# sourceMappingURL=084-94f488ab.js.map
