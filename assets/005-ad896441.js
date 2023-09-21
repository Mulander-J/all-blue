import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as c}from"./index-2b9b71ef.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-16f87394.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function t(r){const e=Object.assign({h1:"h1",code:"code",a:"a",p:"p",h2:"h2",blockquote:"blockquote",h3:"h3",pre:"pre"},i(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{}),`
`,n.jsxs(e.h1,{id:"5-statistic",children:[n.jsx(e.code,{children:"#5"})," ",n.jsx(e.a,{href:"https://100dayscss.com/days/5/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Statistic"})]}),`
`,n.jsx(e.p,{children:"Statistic: In a world of numbers, it is important to be able to interpret them correctly. Beautiful statistics help to capture these data."}),`
`,n.jsx(e.h2,{id:"codepen",children:"CodePen"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["See the Pen ",n.jsx(e.a,{href:"https://codepen.io/mulander/pen/wvQZxqe",target:"_blank",rel:"nofollow noopener noreferrer",children:"#5 CSS Challenge / Statistic"}),`
by Mulander (`,n.jsx(e.a,{href:"https://codepen.io/mulander",target:"_blank",rel:"nofollow noopener noreferrer",children:"@mulander"}),`)
on `,n.jsx(e.a,{href:"https://codepen.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"CodePen"}),"."]}),`
`]}),`
`,n.jsx("iframe",{height:"500",className:"w-full my-10 bg-gray-200",scrolling:"no",title:"#5 CSS Challenge / Statistic",src:"https://codepen.io/mulander/embed/wvQZxqe?default-tab=html%2Cresult",frameBorder:"no",loading:"lazy",allowtransparency:"true",allowFullScreen:!0}),`
`,n.jsx(e.h2,{id:"learn",children:"Learn"}),`
`,n.jsx(e.p,{children:"Render chart by svg"}),`
`,n.jsx(e.h3,{id:"yaxis",children:"yAxis"}),`
`,n.jsx(e.p,{children:"A few horizontal straight lines with a spacing of 45"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<path d="M 0,0 L 266,0"></path>
<path d="M 0,45 L 266,45"></path>
<path d="M 0,90 L 266,90"></path>
`})}),`
`,n.jsx(e.h3,{id:"xaxis",children:"xAxis"}),`
`,n.jsx(e.p,{children:"On the x-axis, reserve 10 on the left and right, and take one point at intervals of 35"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<text x="28" y="110">Mon</text>
<text x="63" y="110">Tue</text>
<text x="98" y="110">Wen</text>
<!-- ... -->
`})}),`
`,n.jsx(e.h3,{id:"dot",children:"dot"}),`
`,n.jsx(e.p,{children:"Combine the x and y coordinates of the additional points"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<circle cx="28" cy="61" r="3px"></circle>
<circle cx="63" cy="20" r="3px"></circle>
<!-- ... -->
`})}),`
`,n.jsx(e.h3,{id:"line",children:"line"}),`
`,n.jsx(e.p,{children:"Combine the x and y coordinates of the additional points to form a polyline"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<polyline
  width="288"
  points="28,61 63,20 98,65 133,55 168,61 203,74 238,64"
></polyline>
`})}),`
`,n.jsx(e.h2,{id:"code",children:"Code"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="frame">
  <div class="center">
    <div class="card">
      <div class="board">
        <div class="left">
          <h3>WEEKLY REPORT</h3>
          <h5>01. Feb - 07. Feb</h5>
        </div>
        <div class="right">
          <h4>Revenue</h4>
          <span>$ 3621.79</span>
        </div>
      </div>

      <div class="chart">
        <ul class="series">
          <li>Views</li>
          <li>Purchases</li>
        </ul>
        <div class="graph">
          <svg>
            <g id="y-axis" color="#dedede">
              <path d="M 0,0 L 266,0"></path>
              <path d="M 0,45 L 266,45"></path>
              <path d="M 0,90 L 266,90"></path>
            </g>

            <g id="x-axis">
              <text x="28" y="110">Mon</text>
              <text x="63" y="110">Tue</text>
              <text x="98" y="110">Wen</text>
              <text x="133" y="110">Thu</text>
              <text x="168" y="110">Fri</text>
              <text x="203" y="110">Sat</text>
              <text x="238" y="110">Sun</text>
            </g>
            <g class="line" color="#fa7373">
              <polyline
                width="288"
                points="28,61 63,20 98,65 133,55 168,61 203,74 238,64"
              ></polyline>
              <circle cx="28" cy="61" r="3px"></circle>
              <circle cx="63" cy="20" r="3px"></circle>
              <circle cx="98" cy="65" r="3px"></circle>
              <circle cx="133" cy="55" r="3px"></circle>
              <circle cx="168" cy="61" r="3px"></circle>
              <circle cx="203" cy="74" r="3px"></circle>
              <circle cx="238" cy="64" r="3px"></circle>
            </g>
            <g class="line" color="#7ba2ff">
              <polyline
                points="28,81 63,40 98,15 133,35 168,81 203,34 238,24"
              ></polyline>
              <circle cx="28" cy="81" r="3px"></circle>
              <circle cx="63" cy="40" r="3px"></circle>
              <circle cx="98" cy="15" r="3px"></circle>
              <circle cx="133" cy="35" r="3px"></circle>
              <circle cx="168" cy="81" r="3px"></circle>
              <circle cx="203" cy="34" r="3px"></circle>
              <circle cx="238" cy="24" r="3px"></circle>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`* {
  margin: 0;
  padding: 0;
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
  background: #42a7a1;
  color: black;
  --tag1: #fa7373;
  --tag2: #7ba2ff;
}
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.card {
  min-height: 220px;
  width: 280px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
}
.board {
  background: #f1ba64;
  color: #fff;
  height: 60px;
  width: 100%;
  padding: 12px 15px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}
.board .left h3,
.board .right span {
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
}
.board .left h5,
.board .right h4 {
  font-weight: 400;
  font-size: 11px;
}

.chart .series {
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px 10px 14px 10px;
  gap: 10px;
}
.chart .series li {
  position: relative;
  font-size: 9px;
  color: #606060;
  line-height: 13px;
  padding-left: 25px;
}
.chart .series li::before {
  position: absolute;
  left: 6px;
  top: 6px;
  display: block;
  content: "";
  width: 11px;
  height: 3px;
  border-radius: 3px;
}
.chart .series li:nth-child(1)::before {
  background-color: var(--tag1);
}
.chart .series li:nth-child(2)::before {
  background-color: var(--tag2);
}

.graph {
  position: relative;
}
.graph svg #y-axis path {
  stroke-width: 1px;
  stroke: currentColor;
  stroke-linecap: round;
}
.graph svg #x-axis text {
  font-size: 9px;
  color: #949494;
  line-height: 30px;
  text-anchor: middle;
  text-transform: uppercase;
}
.graph svg .line polyline {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 2px;
}
.graph svg .line circle {
  fill: currentColor;
}
`})})]})}function b(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(t,r)})):t(r)}export{b as default};
//# sourceMappingURL=005-ad896441.js.map
