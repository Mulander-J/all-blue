import{j as t}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-cd188599.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-2b3739ac.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},r(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(i,{}),`
`,t.jsxs(n.h1,{id:"13-user-gallery",children:[t.jsx(n.code,{children:"#13"})," ",t.jsx(n.a,{href:"https://100dayscss.com/days/13/",target:"_blank",rel:"nofollow noopener noreferrer",children:"User Gallery"})]}),`
`,t.jsx(n.p,{children:"User Gallery: An idea for a transition between user overview and profile page."}),`
`,t.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["See the Pen ",t.jsx(n.a,{href:"https://codepen.io/mulander/pen/Vwqwmpj",target:"_blank",rel:"nofollow noopener noreferrer",children:"#13 CSS Challenge / User Gallery"}),`
by Mulander (`,t.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,t.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,t.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#13 CSS Challenge / User Gallery",src:"https://codepen.io/mulander/embed/Vwqwmpj?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,t.jsx(n.h2,{id:"code",children:"Code"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-html",children:`// pug

.frame
	.user-grid
		- for(let i=1; i < 5; i++)
			.user(class="user-"+i onclick="document.querySelector('.detail').classList.toggle('active')")
				img(src="https://100dayscss.com/codepen/13-"+i+".jpg")
				.overlay: .action-plus +
	.detail 
		.close(onclick="document.querySelector('.detail').classList.toggle('active')") x
		.header: img(src="https://100dayscss.com/codepen/13-1-header.jpg")
		.image: img(src="https://100dayscss.com/codepen/13-1.jpg")
		.infos: .name Julia Toth
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
	background: #ffffff;
	color: #333;
	overflow: hidden;
}
.user-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 2px;
}
.user {
	background: #4cb6de;
	aspect-ratio: 1/1;
	position: relative;
	margin: 2px;
	img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		background: rgba(0, 0, 0, 0);
		transition: all 0.6s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;
		.action-plus {
			width: 50px;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 700;
			font-size: 24px;
			color: #ffffff;
			background: #ec6565;
			border-radius: 50%;
			box-shadow: 2px 4px 10px 0 rgba(0, 0, 0, 0.5);
			transition: all 0.4s ease-in-out;
			opacity: 0;
			transform: scale(2);
			pointer-events: none;
		}
	}
	&:hover {
		.overlay {
			background: rgba(0, 0, 0, 0.3);
		}
		.action-plus {
			transform: scale(1);
			opacity: 1;
			cursor: pointer;
		}
	}
}

.detail {
	visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	.close {
		position: absolute;
		z-index: 2;
		width: 50px;
		height: 50px;
		top: -80px;
		right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		font-size: 24px;
		background: #ec6565;
		color: #ffffff;
		border-radius: 50%;
		transition: background 0.3s ease-in-out, transform 0.5s ease-in;
		transform: translateY(-105%);
		cursor: pointer;
		&:hover {
			color: #ec6565;
			background: #ffffff;
		}
	}
	.header {
		transform: translate3d(0, -105%, 0);
		transition: all 0.6s ease-in 0.4s;
	}
	.image {
		box-sizing: border-box;
		position: absolute;
		z-index: 1;
		top: 150px;
		left: 150px;
		width: 100px;
		height: 100px;
		border: 2px solid #fff;
		border-radius: 50%;
		overflow: hidden;
		box-shadow: 4px 6px 15px 0 rgba(0, 0, 0, 0.2);
		transform: translate3d(0, -250px, 0);
		transition: all 0.6s ease-in 0.2s;
	}
	.infos {
		position: absolute;
		width: 100%;
		background: #ec6565;
		height: 220px;
		padding-top: 100px;
		bottom: 0;
		transform: translate3d(0, 105%, 0);
		transition: all 0.6s ease-in 0.4s;
		font-size: 24px;
		color: #fff;
		font-weight: 400;
		letter-spacing: 2px;
		text-align: center;
	}
}
.detail.active {
	visibility: visible;
	.close {
		top: 10px;
		transform: translateY(0);
	}
	.header {
		transform: translate3d(0, 0, 0);
		transition: all 0.6s ease-out;
	}
	.image {
		transform: translate3d(0, 0, 0);
		transition: all 0.6s ease-out 0.3s;
	}
	.infos {
		transform: translate3d(0, 0, 0);
		transition: all 0.6s ease-out;
	}
}
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},r(),e.components);return n?t.jsx(n,Object.assign({},e,{children:t.jsx(o,e)})):o(e)}export{j as default};
//# sourceMappingURL=013-e89bfcda.js.map
