import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a}from"./index-83d9217b.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",pre:"pre"},t(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsxs(e.h1,{id:"6-profile",children:[n.jsx(e.code,{children:"#6"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/6/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Profile"})]}),`
`,n.jsx(e.p,{children:"Profile: Who of you knows how many social media profiles you have already created? For a refreshing twist, you can also create one yourself."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/vYQMVXQ",target:"_blank",rel:"nofollow noopener noreferrer",children:"#6 CSS Challenge / Profile"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#6 CSS Challenge / Profile",src:"https://codepen.io/mulander/embed/vYQMVXQ?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:"attr(attribute-name)"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div txt="Posts">523</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`div::after {
  content: attr(txt);
  font-weight: normal;
  font-size: 11px;
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <section class="card">
      <div class="profile">
        <div class="avatar">
          <img
            src="https://100dayscss.com/codepen/jessica-potter.jpg"
            alt="Jessica Potter"
          />
        </div>
        <div class="intro">
          <h6>Jessica Potter</h6>
          <span>Visual Artist</span>
        </div>
        <div class="action">
          <button>Follow</button>
          <button>Message</button>
        </div>
      </div>
      <div class="stats">
        <div txt="Posts">523</div>
        <div txt="Likes">1387</div>
        <div txt="Follower">146</div>
      </div>
    </section>
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
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.card {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  background: #ffffff;
  color: #786450;
  width: 320px;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
}
.profile {
  width: 200px;
  text-align: center;
  padding: 38px 0 20px;
}
.profile .avatar {
  position: relative;
  display: block;
  margin: 0 auto;
  height: 82px;
  aspect-ratio: 1/1;
  --border: 1px;
  --pad: 2px;
}
.profile .avatar::before,
.profile .avatar::after {
  content: "";
  position: absolute;
  height: calc(100% + var(--pad) * 2);
  aspect-ratio: 1/1;
  top: calc(var(--pad) * -1 + var(--border) * -1);
  left: calc(var(--pad) * -1 + var(--border) * -1);
  border: var(--border) solid #786450;
  border-radius: 50%;
  transition: all 1.5s ease-in-out;
}
.profile .avatar::before {
  --pad: 2px;
  border-left-color: transparent;
}
.profile .avatar::after {
  --pad: 6px;
  border-right-color: transparent;
}
.profile .avatar:hover::before {
  transform: rotate(360deg);
}
.profile .avatar:hover::after {
  transform: rotate(-360deg);
}
.profile .avatar img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
}
.profile .intro h6 {
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
}
.profile .intro span {
  font-size: 11px;
  line-height: 15px;
}
.profile .action {
  display: grid;
  grid-row-gap: 10px;
  justify-content: center;
  margin-top: 33px;
}
.profile .action button {
  appearance: none;
  outline: none;
  display: block;
  cursor: pointer;
  width: 120px;
  height: 30px;
  background: none;
  border: 1px solid;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  color: #786450;
}
.profile .action button:hover {
  background: #786450;
  color: #fff;
}

.stats {
  position: relative;
  min-width: 120px;
  display: flex;
  flex-grow: 1;
  flex-flow: row wrap;
  gap: 1px;
}
.stats div {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  background: #f5e8df;
}
.stats div::after {
  content: attr(txt);
  font-weight: normal;
  font-size: 11px;
}
`})})]})}function v(r={}){const{wrapper:e}=Object.assign({},t(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(o,r)})):o(r)}export{v as default};
//# sourceMappingURL=006-46062e5b.js.map
