import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as l}from"./index-33e7d280.js";import{u as c}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-65af6210.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function s(r){const e=Object.assign({h1:"h1",h2:"h2",ul:"ul",li:"li",a:"a",p:"p",pre:"pre",code:"code",h3:"h3"},c(),r.components);return n.jsxs(n.Fragment,{children:[n.jsx(l,{}),`
`,n.jsx(e.h1,{id:"css-programming",children:"CSS Programming"}),`
`,n.jsx(e.h2,{id:"refrence",children:"Refrence"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://2022.stateofcss.com/en-US/",target:"_blank",rel:"nofollow noopener noreferrer",children:"State of CSS 2022"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.tailwindcss.cn/docs/configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"TailwindCSS"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://unocss.dev/guide/why",target:"_blank",rel:"nofollow noopener noreferrer",children:"UnoCSS"})}),`
`]}),`
`,n.jsx(e.h2,{id:"oocss",children:"OOCSS"}),`
`,n.jsx(e.p,{children:"全称object-oriented-css,面向对象的CSS。既然是面向对象，那什么是OOCSS中的对象呢？OOCSS中所说的对象是一种可复用的视觉模型。OOCSS讲究复用，并快速高效的书写样式，且在日后便于修改、添加和维护。"}),`
`,n.jsx(e.p,{children:"Before:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`#button {

    width: 200px;

    height: 50px;

    padding: 10px;

    border: 1px solid #ccc;

    background: linear-gradient(#ccc, #222);

    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;

}

#box {

    width: 400px;

    overflow: hidden;

    border: solid 1px #ccc;

    background: linear-gradient(#ccc, #222);

    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;

}
`})}),`
`,n.jsx(e.p,{children:"After:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.button {

    width: 200px;

    height: 50px;

}

.box {

    width: 400px;

    overflow: hidden;

}

.skin {

    border: solid 1px #ccc;

    background: linear-gradient(#ccc, #222);

    box-shadow: rgba(0, 0, 0, .5) 2px 2px 5px;

}
`})}),`
`,n.jsx(e.h2,{id:"smacss",children:"SMACSS"}),`
`,n.jsx(e.p,{children:"SMACSS中把样式根据逻辑划分为了5个类别："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"base"}),`
`,n.jsx(e.li,{children:"layout"}),`
`,n.jsx(e.li,{children:"module"}),`
`,n.jsx(e.li,{children:"state"}),`
`,n.jsx(e.li,{children:"theme"}),`
`]}),`
`,n.jsx(e.h3,{id:"1base",children:"1.base"}),`
`,n.jsx(e.p,{children:`base类似于我们常用的reset，就是设定标签的预设值。
在这一部分样式的要求是：不要出现任何的id selector和class selector，但可使用 属性选择器和伪类选择器。`}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`html{ … },   input[type=text]{ … },  a:hover { … }
`})}),`
`,n.jsx(e.h3,{id:"2layout",children:"2.layout"}),`
`,n.jsx(e.p,{children:"大区块的位置、布局样式。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`#header { margin-top: 20px 0; }, .container { margin: 0 auto; width: 960px; }
`})}),`
`,n.jsx(e.h3,{id:"3module",children:"3.module"}),`
`,n.jsx(e.p,{children:"module即组件样式，需要能在任何地方复用的，自觉和bootstrap中的components非常相似。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:` .button { background-color: #foo; border: …; width: …;  box-shadow: …; padding: …;}

 .button a { color: #ddd; }
  /*或者 (多用class,少用tag)*/ 
 .button .link { color: #ddd; } 
`})}),`
`,n.jsx(e.h3,{id:"4state",children:"4.state"}),`
`,n.jsx(e.p,{children:"状态，故控制module各个状态下的表现的样式。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.button.hovered { background: …; }

.button.actived { background: …; }
`})}),`
`,n.jsx(e.h3,{id:"5theme",children:"5.theme"}),`
`,n.jsx(e.p,{children:"主题，也就是项目特有的主题下的样式，主视觉效果，主题的样式去override上面的样式，来达成需要的视觉效果，就类似于皮肤skin。"}),`
`,n.jsx(e.h2,{id:"bemblock____elementmodifier",children:"BEM（Block____Element——Modifier）"}),`
`,n.jsx(e.p,{children:`BEM本身是有一套自己的工作流的，指的是由Yandex团队提出的一种前端命名方法论。
BEM的命名约定更严格，包含更多的信息。`}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Block（块）：独立的、更高级别的组件化抽象。Class selector only。"}),`
`,n.jsx(e.li,{children:"Element（元素）：Block的后代，是Block的构成元素。Class selector only。"}),`
`,n.jsx(e.li,{children:"Modifier（修饰符）：注明了Block的不同状态或不同版本。"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.block {}

.block____element {}

.block——modifier {}
`})}),`
`,n.jsx(e.p,{children:"Example:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.car {} //  创建了一个car block

.car____tire {} //car里面有组成元素（后代元素）  tire

.car——china {} //car有一个china造 的形态

.car——china____tire {}  //既然car有tire组成元素，那china car当然也有tire噢

.car____tire——new  //car里的tire 有new(old)的状态
`})}),`
`,n.jsx(e.h2,{id:"acssatomic-css原子css",children:"ACSS(atomic CSS、原子CSS)"}),`
`,n.jsx(e.p,{children:"ACSS即为原子CSS，就像自然界中把整个的物体不断拆分最后都是由原子之类构成的（化学没学好），这样也就不存在物体之间的差别了，所有事物都是原子，也就方便了描述。ACSS把每一条CSS rule都看做一个原子，给rule一个class类名"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.text-red { color: red; }   .text-blue { color: blue; }
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="text-red">RED</div>
<div class="text-blue">BLUE</div>
`})}),`
`,n.jsx(e.p,{children:"ACSS最大的优点是，应对变化相当灵活，在页面较简单的情况下，很适合使用，但在复杂的场景中，html的混乱也会导致严重后果。我个人更愿意在项目或者模块开发之初使用ACSS，这样可以应对频繁修改的需求和设计。当需求和设计趋于完整稳定时，再去用模块化的思想重构它，把杂乱无章的class抽丝剥茧。所以ACSS让CSS代码的重构变得更容易了。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx windicss-analysis
`})})]})}function S(r={}){const{wrapper:e}=Object.assign({},c(),r.components);return e?n.jsx(e,Object.assign({},r,{children:n.jsx(s,r)})):s(r)}export{S as default};
//# sourceMappingURL=CssProgram-d051fca1.js.map
