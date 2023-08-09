import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as t}from"./index-8a23a157.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-85c338c0.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function i(o){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",pre:"pre"},r(),o.components);return n.jsxs(n.Fragment,{children:[n.jsx(t,{}),`
`,n.jsxs(e.h1,{id:"7-notifications",children:[n.jsx(e.code,{children:"#7"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/7/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Notifications"})]}),`
`,n.jsx(e.p,{children:"Notifications, Search and Menu: The three cornerstones of any application? Brought together in the smallest possible space."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/GRwaqdj",target:"_blank",rel:"nofollow noopener noreferrer",children:"#7 CSS Challenge / Notifications"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#7 CSS Challenge / Notifications",src:"https://codepen.io/mulander/embed/GRwaqdj?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.p,{children:"Timeline dot"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["border ",n.jsx(e.code,{children:"#fff"})," as margin"]}),`
`,n.jsxs(e.li,{children:["inset shadow ",n.jsx(e.code,{children:"#5f98cd"})," as border"]}),`
`,n.jsxs(e.li,{children:["background ",n.jsx(e.code,{children:"#fff"})," as inset"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: #fff;
  box-shadow: inset 0 0 0px 3px #5f98cd;
}
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <div id="box">
      <div class="card">
        <div class="header">
          <div
            class="icon-trigger"
            onclick="document.querySelector('#box').classList.toggle('active')"
          >
            <svg width="20" height="15">
              <line
                x1="0"
                y1="3"
                x2="11"
                y2="3"
                stroke-width="3"
                stroke="currentColor"
              />
              <circle cx="17" cy="3" r="3" fill="currentColor" />
              <line
                x1="0"
                y1="12"
                x2="20"
                y2="12"
                stroke-width="3"
                stroke="currentColor"
              />
            </svg>
          </div>
          <span>Notifaction</span>
          <div
            class="icon-search"
            onclick="document.querySelector('.search-bar').classList.toggle('active')"
          >
            <svg
              style="height: 100%; width: 100%"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
            >
              <path
                d="M960 896l-204.224-204.48a47.104 47.104 0 0 0-14.848-10.112 383.776 383.776 0 0 0 83.008-238.848c0-212.8-172.544-385.28-385.408-385.28-212.736 0-385.344 172.48-385.344 385.344 0 212.8 172.544 385.216 385.344 385.216a383.36 383.36 0 0 0 239.04-83.008c2.432 5.376 5.76 10.432 10.176 14.784l204.096 204.544a48.256 48.256 0 0 0 68.096 0c18.88-18.816 18.88-49.28 0.064-68.16z m-521.536-164.48c-159.552 0-288.96-129.344-288.96-288.96s129.344-289.024 288.96-289.024c159.68 0 289.024 129.408 289.024 289.024s-129.344 288.96-289.024 288.96z"
                fill="currentColor"
                cursorshover="true"
              ></path>
            </svg>
          </div>
          <input class="search-bar" type="text" placeholder="search..." />
        </div>
        <div class="timeline">
          <ul>
            <li>
              <label>9:24 AM</label>
              <p><b>John Walker</b> posted a photo on your wall.</p>
            </li>
            <li>
              <label>9:24 AM</label>
              <p><b>John Walker</b> posted a photo on your wall.</p>
            </li>
            <li>
              <label>9:24 AM</label>
              <p><b>John Walker</b> posted a photo on your wall.</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li><span class="fa fa-dashboard"></span>Dashboard</li>
          <li><span class="fa fa-user"></span>Profile</li>
          <li><span class="fa fa-bell"></span>Notifications</li>
          <li><span class="fa fa-comments"></span>Messages</li>
          <li><span class="fa fa-gear"></span>Settings</li>
        </ul>
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
ul,
li {
  list-style: none;
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
  background: #264057;
  color: #666666;
  overflow: hidden;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.card {
  position: relative;
  z-index: 2;
  width: 300px;
  height: 300px;
  background: #fff;
  display: flex;
  flex-flow: column nowrap;
  transition: all 0.5s ease-in-out;
  .header {
    height: 60px;
    width: 100%;
    padding: 0 20px;
    background: #5f98cd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;
    span {
      user-select: none;
      display: block;
      text-align: center;
      color: #fff;
      font-weight: 600;
      font-size: 15px;
    }
    .icon-trigger {
      display: block;
      cursor: pointer;
      width: 20px;
      height: 15px;
      color: #b2daff;
      transition: all 0.2s ease-in-out;
    }
    .icon-search {
      display: block;
      cursor: pointer;
      width: 20px;
      height: 20px;
      color: #b2daff;
      transition: all 0.3s ease;
    }
    .icon-trigger:hover,
    .icon-search:hover {
      color: #ffffff;
    }
    .search-bar {
      position: absolute;
      width: calc(100% - 80px);
      height: 34px;
      left: 18px;
      border-radius: 17px;
      border: none;
      background: #fff;
      padding: 0 17px;
      font-size: 13px;
      color: #666;
      outline: none;
      transition: all 0.3s ease-in-out;
      transform: translate(15px);
      opacity: 0;
      pointer-events: none;
      cursor: initial;
    }
    .search-bar.active {
      pointer-events: all;
      cursor: auto;
      transform: translateX(0);
      opacity: 1;
    }
  }
}

.timeline {
  margin: 0 20px;
  flex-grow: 1;
  border-left: 3px solid #ebebeb;
  ul {
    padding: 20px 0;
    height: 100%;
    display: grid;
    grid-gap: 25px;
    li {
      position: relative;
      padding-left: 20px;
      opacity: 0;
      transform: translateY(15px);
      animation: an-tl 0.3s ease forwards;
      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          animation-delay: ($i * 0.3s);
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -10px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        border: 3px solid #fff;
        background: #fff;
        box-shadow: inset 0 0 0px 3px #5f98cd;
      }
      label {
        display: block;
        font-size: 11px;
        line-height: 11px;
        margin-bottom: 2px;
      }
      p {
        font-size: 15px;
        line-height: 20px;
      }
    }
  }
}
#box {
  position: relative;
}
.menu {
  position: absolute;
  z-index: 1;
  width: 170px;
  height: 270px;
  top: 15px;
  left: 50px;
  background: #43627d;
  border-radius: 3px;
  transition: all 0.5s ease-in-out;
  padding: 10px 0;
  li {
    color: #93b2cd;
    margin: 0;
    padding: 18px 17px;
    list-style: none;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #fff;
      background: #385269;
    }
    span {
      margin-right: 8px;
    }
  }
}

#box.active .card {
  transform: translateX(50%);
}

#box.active .menu {
  left: 0px;
}

@keyframes an-tl {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`})})]})}function w(o={}){const{wrapper:e}=Object.assign({},r(),o.components);return e?n.jsx(e,Object.assign({},o,{children:n.jsx(i,o)})):i(o)}export{w as default};
//# sourceMappingURL=007-be44d464.js.map
