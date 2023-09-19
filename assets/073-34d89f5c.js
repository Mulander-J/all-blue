import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-04ed5b14.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-8337e5ab.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},t(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(i,{}),`
`,n.jsxs(e.h1,{id:"73-word-carousel",children:[n.jsx(e.code,{children:"#73"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/73/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Word Carousel"})]}),`
`,n.jsx(e.p,{children:"Word Carousel: If you are not one of these animals, the Word Carousel is also good for showing off your skills."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/rNQgZLg",target:"_blank",rel:"nofollow noopener noreferrer",children:"#73 CSS Challenge / Word Carousel"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#73 CSS Challenge / Word Carousel",src:"https://codepen.io/mulander/embed/rNQgZLg?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.p,{children:"Element length at direction should be set."}),`
`,n.jsxs(e.p,{children:["Vertical carousel need to be set ",n.jsx(e.code,{children:"height"}),", horizontal carousel need to be set ",n.jsx(e.code,{children:"width"}),"."]}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <div class="carousel">
      >
      <div class="left">
        <div>i</div>
        <div>she</div>
        <div>he</div>
      </div>
      <section class="middle-box">
        <div class="middle">
          <div>knew</div>
          <div>killed</div>
          <div>loved</div>
        </div>
      </section>
      <div class="right">
        <div>me</div>
        <div>him</div>
        <div>her</div>
      </div>
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`* {
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
  color: #fff;
  background: #f39c12;
  overflow: hidden;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.carousel {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
  height: 45px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
.left,
.middle,
.right {
  line-height: 45px;
  height: 45px;
}

.left {
  text-transform: capitalize;
  animation: an-side 4s ease-in-out infinite alternate-reverse;
}
.right {
  animation: an-side 4s ease-in-out infinite alternate;
}
@keyframes an-side {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-45px);
  }
  100% {
    transform: translateY(-90px);
  }
}

.middle-box {
  margin: 0 20px;
  width: 90px;
  overflow: hidden;
}
.middle {
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  animation: an-middle 4s ease-in-out infinite alternate;
}
.middle div {
  width: 90px;
  text-align: center;
}

@keyframes an-middle {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-90px);
  }
  100% {
    transform: translateX(-180px);
  }
}
`})})]})}function j(r={}){const{wrapper:e}=Object.assign({},t(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(o,r)})):o(r)}export{j as default};
//# sourceMappingURL=073-34d89f5c.js.map
