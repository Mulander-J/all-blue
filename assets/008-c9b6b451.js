import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-6eebfeed.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-769d2acc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function r(t){const n=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",img:"img",ul:"ul",li:"li",pre:"pre"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsxs(n.h1,{id:"8-metaballs",children:[e.jsx(n.code,{children:"#8"})," ",e.jsx(n.a,{href:"https://100dayscss.com/days/8/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Metaballs"})]}),`
`,e.jsx(n.p,{children:"Metaballs: At first glance impossible to implement with CSS, but filters make this possible too."}),`
`,e.jsx(n.h2,{id:"codepen",children:"CodePen"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["See the Pen ",e.jsx(n.a,{href:"https://codepen.io/mulander/pen/NWEVEGr",target:"_blank",rel:"nofollow noopener noreferrer",children:"#8 CSS Challenge / Metaballs"}),`
by Mulander (`,e.jsx(n.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,e.jsx(n.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,e.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#8 CSS Challenge / Metaballs",src:"https://codepen.io/mulander/embed/NWEVEGr?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,e.jsx(n.h2,{id:"learn",children:"Learn"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/chokcoco/iCSS/issues/30",target:"_blank",rel:"nofollow noopener noreferrer",children:"Quote:你所不知道的 CSS 滤镜技巧与细节——chokcoco"})}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Blur"})," Mixing ",e.jsx(n.code,{children:"Contrast"})," to produce a fusion effect"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"./imgs/20230810000001.gif",alt:"fusion.gif"})}),`
`,e.jsx(n.p,{children:"Look carefully at the process of intersecting two circles, when the edge is in contact with the edge, it will produce a border fusion effect, through the contrast filter to take out the blurred edges of the Gaussian blur, the use of Gaussian blur to achieve the fusion effect."}),`
`,e.jsx(n.p,{children:"The realization of the above effect is based on two things:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filter: blur()"})," sets a Gaussian blur effect to the image."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"filter: contrast()"})," adjusts the contrast of the image."]}),`
`]}),`
`,e.jsx(n.p,{children:"The graphic is animated on a canvas background with filter: contrast() set;"}),`
`,e.jsx(n.p,{children:"The animated graphic has filter: blur() set (the parent element of the animated graphic needs to be a canvas with filter: contrast() set);"}),`
`,e.jsx(n.p,{children:"This means that the two circles above are animated on a large white background with filter: contrast() set, and the two circles have filter: blur() set, both of which are required."}),`
`,e.jsx(n.h2,{id:"code",children:"Code"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-pug",children:`// pug
.frame
	.center
		.ball
		- for (var x = 0; x < 8; x++)
			div(class='blubb-'+x)
		- for (var y = 0; y < 10; y++)
			div(class='sparkle-'+y)
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`$theme: #2ab5b5;

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
  background: #000;
  animation: hue 2.5s ease-in-out 0.2s infinite;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ball {
  position: relative;
  width: 90px;
  height: 90px;
  background: $theme;
  border-radius: 50%;
  filter: blur(15px);
}

@for $i from 1 through 8 {
  .blubb-#{$i} {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    transform: rotate((random(300)) + deg);

    &:after {
      position: absolute;
      display: block;
      content: "";
      width: 50px;
      height: 50px;
      background: $theme;
      border-radius: 50%;
      transform-origin: (40 - $i * 3) + px (40 - $i * 3) + px;
      animation: rotate (2.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
      filter: blur(5px);
    }
  }
}

@for $i from 1 through 10 {
  .sparkle-#{$i} {
    position: absolute;
    top: 38px;
    left: 38px;
    width: (7 + $i) + px;
    height: (7 + $i) + px;
    transform: rotate((random(300)) + deg);

    &:after {
      position: absolute;
      display: block;
      content: "";
      width: (7 + $i) + px;
      height: (7 + $i) + px;
      background: $theme;
      border-radius: 50%;
      transform-origin: (60 - $i * 2) + px (60 - $i * 2) + px;
      animation: rotate (3.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
      filter: blur(3px);
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
}

@keyframes hue {
  0% {
    filter: contrast(25) hue-rotate(0);
  }
  100% {
    filter: contrast(25) hue-rotate(360deg);
  }
}
`})})]})}function j(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{j as default};
//# sourceMappingURL=008-c9b6b451.js.map
