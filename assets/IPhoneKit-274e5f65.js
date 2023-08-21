import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as c,b as o,C as d}from"./index-70594f91.js";import{Preview as s}from"./index.stories-c3486ba3.js";import{u as l}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-5b9244f7.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";import"./index-05f774ac.js";function r(i){const e=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",strong:"strong",ul:"ul",li:"li",h2:"h2",h3:"h3",img:"img",pre:"pre",a:"a"},l(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(c,{}),`
`,n.jsx(e.h1,{id:"iphone12-色系搭配工具",children:"iPhone12 色系搭配工具"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"css3d"})," ",n.jsx(e.code,{children:"css变量"})]}),`
`]}),`
`,n.jsx(e.p,{children:"小屏党新年计划入手iphone12mini，顺手撸了个颜色搭配器（非自动）来方便配色。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"配色范围"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"主色"}),`
`,n.jsx(e.li,{children:"侧边色"}),`
`,n.jsx(e.li,{children:"镜头块色"}),`
`,n.jsx(e.li,{children:"镜头边框色"}),`
`,n.jsx(e.li,{children:"logo色"}),`
`]}),`
`,n.jsx(e.h2,{id:"预览",children:"预览"}),`
`,n.jsx(o,{of:s}),`
`,n.jsx(d,{of:s}),`
`,n.jsx(e.h2,{id:"技术点",children:"技术点"}),`
`,n.jsx(e.h3,{id:"三维建模",children:"三维建模"}),`
`,n.jsxs(e.p,{children:["所谓 ",n.jsx(e.code,{children:"css3d"})," , 其本质是在利用2维元素去拼装3维形态。操作的对象仍然是2维的平面的盒子模型，即只有长（width）宽（height），没有高。"]}),`
`,n.jsx(e.p,{children:"如果把手机模型视为一个矩形，那么拼装一部手机至少需要6个平面（上下左右前后）。"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"./imgs/20210218000001.png",alt:"透视图"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div class="iphone-device">
    <!-- 前 -->
    <div class="iphone-front"></div>
    <!-- 后 -->
    <div class="iphone-back"></div>
    <!-- 侧边-左 -->
    <div class="iphone-left iphone-side"></div>
        <!-- 侧边-右 -->
    <div class="iphone-right iphone-side"></div>
        <!-- 侧边-上 -->
    <div class="iphone-top iphone-side"></div>
        <!-- 侧边-下 -->
    <div class="iphone-bottom iphone-side"></div>
</div>
`})}),`
`,n.jsx(e.p,{children:"设模型长宽高分别为："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"l:508px;"}),`
`,n.jsx(e.li,{children:"w:239.99952px;"}),`
`,n.jsx(e.li,{children:"h:30px;"}),`
`]}),`
`,n.jsx(e.p,{children:"Transform："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"前后两面分别以Y轴旋转0度与180度，并增加z轴距离为1/2h。"}),`
`,n.jsx(e.li,{children:"左右两面分别以Y轴旋转-90度与90度，并增加z轴距离为1/2h 和 w-1/2h。"}),`
`,n.jsx(e.li,{children:"上面先以Y轴90度，再以Z轴旋转-90度；下面先以Y轴-90度，再以Z轴旋转-90度，并增加z轴距离为l"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"./imgs/20210218000002.jpg",alt:"前后"})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"./imgs/20210218000003.jpg",alt:"左右"})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"./imgs/20210218000004.jpg",alt:"上下"})}),`
`,n.jsx(e.h3,{id:"圆角欺骗",children:"圆角欺骗"}),`
`,n.jsx(e.p,{children:`上一步构建的模型是个纯粹的矩形，那么如何实现3d圆角呢？因为我们依旧是在编辑平面元素，对于曲面的绘制无法像3d建模一样利用算法实现无数个线平面拼凑成一个曲面。
但是，我们可以用两个切面的角度来形成视觉欺骗，以达到曲面的效果。`}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"./imgs/20210218000005.jpg",alt:"圆角"})}),`
`,n.jsx(e.h3,{id:"css变量",children:"css变量"}),`
`,n.jsxs(e.p,{children:["模型完成之后，紧接着就是配色了，配色技术依然是老生常谈的 ",n.jsx(e.code,{children:"css变量"}),"。在根元素上申明所有的颜色变量，对应子元素以 ",n.jsx(e.code,{children:"var(--x)"})," 的形式引用。"]}),`
`,n.jsxs(e.p,{children:["在Vue中，则利用 ",n.jsx(e.code,{children:"props"})," 和 ",n.jsx(e.code,{children:"computed"})," 属性来完成对象封装。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:` .iphone-perspective {
    ...
    --main: #bf2a2a;
    --side: #ede9e8;
    --cam: #bf2a2a;
    --camRing: #ede9e8;
    --logo: #ede9e8;
    --dur: 12s;
}
.iphone-front-s,
.iphone-back-s,
.iphone-front,
.iphone-back {
    ...
    background: var(--side);
}
.iphone-brand svg{
    ...
    color: var(--logo);
}
`})}),`
`,n.jsx(e.h2,{id:"issue",children:"Issue"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"侧边的按钮实际应该与主色配色一致，代码中是懒得画了直接切的图。"}),`
`,n.jsx(e.li,{children:"为了补偿圆角的冗余部分配色，前后各自增加了一个背面用来填色，从而导致了模型在旋转时会出现穿模的现象。"}),`
`]}),`
`,n.jsx(e.h2,{id:"refrence",children:"Refrence"}),`
`,n.jsx(e.p,{children:"技术链接"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://marvelapp.github.io/devices.css/",target:"_blank",rel:"nofollow noopener noreferrer",children:"13 Pure CSS Mobile Devices.css"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://tridiv.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tridiv is a web-based editor for creating 3D shapes in CSS."})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.turbosquid.com/zh_cn/3d-models/apple-iphone-12-mini-3d-1642901",target:"_blank",rel:"nofollow noopener noreferrer",children:"apple-iphone-12-mini-3d"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://www.ruanyifeng.com/blog/2017/05/css-variables.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"CSS 变量教程"})}),`
`]})]})}function M(i={}){const{wrapper:e}=Object.assign({},l(),i.components);return e?n.jsx(e,Object.assign({},i,{children:n.jsx(r,i)})):r(i)}export{M as default};
//# sourceMappingURL=IPhoneKit-274e5f65.js.map
