import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as r}from"./index-83d9217b.js";import{u as a}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},a(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(r,{}),`
`,t.jsxs(n.h1,{id:"15-upload",children:[t.jsx(n.code,{children:"#15"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/15/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Upload"})]}),`
`,t.jsx(n.p,{children:"Upload: Yes, you can actually drag and drop a file in there. But don't worry, the upload process is faked."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/ZEVYBYR",target:"_blank",rel:"nofollow noopener noreferrer",children:"#15 CSS Challenge / Upload"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#15 CSS Challenge / Upload",src:"https://codepen.io/mulander/embed/ZEVYBYR?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`<div class="frame">
	<div class="center">
		<div class="bar"></div>
		<div class="title">Drop file to upload</div>
		<div class="dropzone">
			<div class="content">
				<img src="https://100dayscss.com/codepen/upload.svg" class="upload" />
				<span class="filename"></span>
				<input type="file" class="input" />
			</div>
		</div>
		<img src="https://100dayscss.com/codepen/syncing.svg" class="syncing" />
		<img src="https://100dayscss.com/codepen/checkmark.svg" class="done" />
		<div class="upload-btn" onclick="document.querySelector('.center').classList.toggle('active');setTimeout(()=>this.innerHTML=this.innerHTML === 'Done' ? 'Upload file' : 'Done',3800)">Upload file</div>
	</div>
</div>
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
	background: #3a92af;
	background: linear-gradient(to top right, #3a4eaf 0%, #5ca05a 100%);
	color: #fff;
	font-family: "Open Sans", Helvetica, sans-serif;
}

.center {
	position: absolute;
	width: 300px;
	height: 260px;
	top: 70px;
	left: 50px;
	background: #fff;
	box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);
	border-radius: 3px;
}

.title {
	font-size: 16px;
	color: #676767;
	line-height: 50px;
	height: 50px;
	border-bottom: 1px solid #d8d8d8;
	text-align: center;
}

.dropzone {
	position: absolute;
	z-index: 1;
	box-sizing: border-box;
	display: table;
	table-layout: fixed;
	width: 100px;
	height: 80px;
	top: 86px;
	left: 100px;
	border: 1px dashed #a4a4a4;
	border-radius: 3px;
	text-align: center;
	overflow: hidden;
	transition: all 0.3s ease;
	&:hover {
		border-color: #666;
		background: #eee;
	}

	.content {
		display: table-cell;
		vertical-align: middle;
	}

	.upload {
		margin: 6px 0 0 2px;
	}

	.filename {
		display: block;
		color: #676767;
		font-size: 14px;
		line-height: 18px;
	}

	.input {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
	}
}

.upload-btn {
	position: absolute;
	width: 140px;
	height: 40px;
	left: 80px;
	bottom: 24px;
	background: #6ece3b;
	border-radius: 3px;
	text-align: center;
	line-height: 40px;
	font-size: 14px;
	box-shadow: 0 2px 0 0 #498c25;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		box-shadow: 0 2px 0 0 #498c25, 0 2px 10px 0 #6ece3b;
	}
}

.bar {
	position: absolute;
	z-index: 1;
	width: 300px;
	height: 3px;
	top: 49px;
	left: 0;
	background: #6ece3b;
	transition: all 3s ease-out;
	transform: scaleX(0);
	transform-origin: 0 0;
}
.syncing {
	position: absolute;
	top: 109px;
	left: 134px;
	opacity: 0;
}
.done {
	position: absolute;
	top: 112px;
	left: 132px;
	opacity: 0;
}

.active {
	.dropzone {
		opacity: 0;
	}
	.bar {
		transform: scaleX(1) translate3d(0, 0, 0);
	}
	.syncing {
		animation: syncing 3.2s ease-in-out;
	}
	.done {
		animation: done 0.5s ease-in 3.2s both;
	}
}

@keyframes syncing {
	0% {
		transform: rotate(0deg);
	}
	10% {
		opacity: 1;
	}
	90% {
		opacity: 1;
	}
	100% {
		transform: rotate(360deg);
		opacity: 0;
	}
}

@keyframes done {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
`})})]})}function y(e={}){const{wrapper:n}=Object.assign({},a(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{y as default};
//# sourceMappingURL=015-28b73cbc.js.map
