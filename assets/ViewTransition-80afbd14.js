import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as a,b as d}from"./index-8438cb78.js";import{Preview as t}from"./index.stories-d8d5a0af.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-d16c8680.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";import"./index-05f774ac.js";import"./index-d179bc74.js";function s(e){const i=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",h3:"h3"},r(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(a,{}),`
`,n.jsx(i.h1,{id:"view-transition-api",children:"View Transition API"}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsx(i.p,{children:n.jsx(i.a,{href:"https://juejin.cn/post/7255675484938256441?searchId=20230731102212FA6F91F510A0FD9480C4",target:"_blank",rel:"nofollow noopener noreferrer",children:"引用-View Transition API"})}),`
`]}),`
`,n.jsx(i.h2,{id:"why-view-transition-api",children:"Why View Transition API"}),`
`,n.jsx(i.p,{children:"Transition 指的是 UI 层面的状态过渡，恰当的过渡效果能带给用户舒适感，提升产品的品质。"}),`
`,n.jsx(i.p,{children:"一般来说，我们有三种方式可以实现过渡动效："}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"CSS Transition"}),`
`,n.jsx(i.li,{children:"CSS Animation"}),`
`,n.jsx(i.li,{children:"Web Animation API"}),`
`]}),`
`,n.jsx(i.p,{children:"而能让我们轻松应对中间态的，正是 View Transition API。"}),`
`,n.jsx(i.h2,{id:"know-view-transition-api",children:"Know View Transition API"}),`
`,n.jsx(i.p,{children:"View Transition API 带来的新知识并不多："}),`
`,n.jsx(i.p,{children:"JavaScript 方法与属性"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`startViewTransition()
/.updateCallbackDone
/.ready
/.finished
skipTransition()
`})}),`
`,n.jsx(i.p,{children:"CSS 规则和伪元素"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`view-transition-name
::view-transition
::view-transition-group()
::view-transition-image-pair()
::view-transition-old()
::view-transition-new()
`})}),`
`,n.jsx(i.h3,{id:"startviewtransition",children:"startViewTransition"}),`
`,n.jsx(i.p,{children:"开启 View Transition 动效，只需要一行代码："}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-js",children:`const vt = document.startViewTransition(updateCallback);
`})}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"startViewTransition"})," 方法接收一个回调函数作为参数，在回调函数 ",n.jsx(i.code,{children:"updateCallback"})," 里，我们执行变更 ",n.jsx(i.code,{children:"DOM"})," 状态的逻辑，比如切换页面路由、更新页面内容等。"]}),`
`,n.jsxs(i.p,{children:["调用 ",n.jsx(i.code,{children:"startViewTransition"})," 后，我们会得到一个实例对象, 实例对象具有三个属性，分别代表过渡过程中的三个状态节点："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"updateCallbackDone"}),"：回调函数执行完毕"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"ready"}),"：准备就绪，即将开始播放动效"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"finished"}),"：动效播放完毕"]}),`
`]}),`
`,n.jsx(i.p,{children:"这三个属性值都是 Promise 对象，这就方便了我们精细掌控动效过程。"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-js",children:`await vt.updateCallbackDone;
// Do whatever you want
await vt.ready;
// Do whatever you want
await vt.finished;
// Do whatever you want
`})}),`
`,n.jsx(i.p,{children:"e.g. Click to ToggleTheme"}),`
`,n.jsx(d,{of:t}),`
`,n.jsx(i.h3,{id:"skiptransition",children:"skipTransition"}),`
`,n.jsx(i.p,{children:"实例对象还具有一个方法，可以跳过动效过程。"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-js",children:`vt.skipTransition();
`})}),`
`,n.jsxs(i.p,{children:["需要指出的是，调用 ",n.jsx(i.code,{children:"skipTransition"})," 只会跳过动效，但 ",n.jsx(i.code,{children:"updateCallback"})," 仍会正常执行。这正是 View Transition API 的设计理念：锦上添花，不喧宾夺主。"]}),`
`,n.jsxs(i.p,{children:["另外，在不同的状态节点调用 ",n.jsx(i.code,{children:"skipTransition"}),"，效果也不同。"]}),`
`,n.jsx(i.h3,{id:"view-transition-name",children:"view-transition-name"}),`
`,n.jsx(i.p,{children:"API 在 CSS 规则中新增了一个属性 view-transition-name，该属性可以应用于任何元素，属性值也可以是任何不重复的字符串名称。"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-CSS",children:`.box {
  view-transition-name: box;
}
`})}),`
`,n.jsxs(i.p,{children:["对于设置了 ",n.jsx(i.code,{children:"view-transition-name"})," 的元素，浏览器会将其识别为需要应用过渡动效的元素。"]}),`
`,n.jsx(i.p,{children:"在缺省情况下，浏览器会给根节点 —— html 节点 —— 隐式地设置为 view-transition-name: root;。"}),`
`,n.jsx(i.h3,{id:"伪元素树",children:"伪元素树"}),`
`,n.jsx(i.p,{children:"当浏览器识别到了动效的目标元素，就会针对目标生成一系列伪元素，构建成树形结构，插入到 html 第一个子节点的位置上。"}),`
`,n.jsxs(i.p,{children:["伪元素树的 ",n.jsx(i.code,{children:"z-index"})," 层级是最高的，覆盖在所有其他元素之上。这确保了在过渡过程中，页面是不可交互的。"]}),`
`,n.jsxs(i.p,{children:["如果页面中有多个元素都设置了 ",n.jsx(i.code,{children:"view-transition-name"}),"，那么在树根 ",n.jsx(i.code,{children:"::view-transition"})," 之下，就会出现多个 ",n.jsx(i.code,{children:"::view-transition-group"})," ，与 ",n.jsx(i.code,{children:"root group"})," 平级。"]}),`
`,n.jsx(i.h2,{id:"原理--生命周期",children:"原理 & 生命周期"}),`
`,n.jsx(i.h3,{id:"1startviewtransition",children:"1.startViewTransition"}),`
`,n.jsx(i.p,{children:"一段生命周期的起始，源自于我们调用 startViewTransition。"}),`
`,n.jsx(i.h3,{id:"2-抓拍旧状态快照",children:"2. 抓拍旧状态快照"}),`
`,n.jsx(i.p,{children:"在 DOM 状态变化前，浏览器抓拍一张旧状态的快照。我们可以理解为，浏览器帮我们截了一张图。"}),`
`,n.jsx(i.h3,{id:"3-暂停渲染",children:"3. 暂停渲染"}),`
`,n.jsx(i.p,{children:"此时，浏览器会暂停页面渲染，updateCallback 引发的页面变化，要等到动效执行时才会显现出来。"}),`
`,n.jsx(i.h3,{id:"4-执行-updatecallback",children:"4. 执行 updateCallback"}),`
`,n.jsx(i.p,{children:"到这里，我们的回调函数会执行，更新 DOM 状态。当然从用户的视角，是看不见变化的。"}),`
`,n.jsx(i.h3,{id:"5-updatecallbackdone",children:"5. updateCallbackDone"}),`
`,n.jsx(i.p,{children:"回调执行完毕，实例对象的 updateCallbackDone 状态达成。"}),`
`,n.jsx(i.h3,{id:"6-抓拍新状态快照",children:"6. 抓拍新状态快照"}),`
`,n.jsx(i.p,{children:"浏览器抓拍新 DOM 状态的快照，同样地，也可以理解为截一张图，但这张图是直接对照新状态绘制的，并不是页面显现的内容。"}),`
`,n.jsx(i.h3,{id:"7-构建伪元素树",children:"7. 构建伪元素树"}),`
`,n.jsx(i.p,{children:"利用刚刚生成的两张快照，浏览器创建一系列伪元素，插入到 html 节点中。旧、新快照，对应着上文提到的两个伪元素：::view-transition-old、::view-transition-new。"}),`
`,n.jsx(i.h3,{id:"8-恢复渲染",children:"8. 恢复渲染"}),`
`,n.jsx(i.p,{children:"伪元素应有尽有，就可以恢复页面渲染、将伪元素显示在页面上了。"}),`
`,n.jsx(i.h3,{id:"9-ready",children:"9. ready"}),`
`,n.jsx(i.p,{children:"万事俱备，Transition 的 ready 状态达成。"}),`
`,n.jsx(i.h3,{id:"10-播放动效",children:"10. 播放动效"}),`
`,n.jsx(i.p,{children:"浏览器安排新旧快照两个“演员”登台，导演一场从旧状态到新状态的过渡效果。"}),`
`,n.jsx(i.h3,{id:"11-移除伪元素",children:"11. 移除伪元素"}),`
`,n.jsx(i.p,{children:"动效演出落幕，“演员”退场，浏览器把伪元素移除。"}),`
`,n.jsx(i.h3,{id:"12-finished-状态达成",children:"12、 finished 状态达成"}),`
`,n.jsxs(i.p,{children:["在 ",n.jsx(i.a,{href:"https://drafts.csswg.org/css-view-transitions-1/#lifecycle",target:"_blank",rel:"nofollow noopener noreferrer",children:"W3C 标准文档"})," 中，有一个步进式 Demo，可以帮我们更直观地了解生命周期的每个阶段。"]}),`
`,n.jsx(i.h2,{id:"最佳实践",children:"最佳实践"}),`
`,n.jsx(i.p,{children:"由于 View Transition API 还是新鲜出炉的功能，所以在使用过程中，还是有一些需要注意之处。"}),`
`,n.jsx(i.h3,{id:"1-平稳降级",children:"1. 平稳降级"}),`
`,n.jsx(i.p,{children:"当前只有 Chrome/Edge 111+ 支持 View Transition API，所以我们需要兼顾浏览器差异。"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-js",children:`if (!document.startViewTransition) {
    updateCallback();
    return;
}
document.startViewTransition(updateCallback);
`})}),`
`,n.jsx(i.h3,{id:"2-精简-updatecallback",children:"2. 精简 updateCallback"}),`
`,n.jsx(i.p,{children:"在过渡过程中，由于页面不可交互，所以这一阶段的时长要可控。"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-js",children:`// Bad ❌
document.startViewTransition(async () => {
    await fetchLargeFile();
    await changeDOM();
    await doSomething();
});
`})}),`
`,n.jsxs(i.p,{children:["在上面的代码示例中，",n.jsx(i.code,{children:"updateCallback"})," 要等到大文件加载完才能执行。结合上文提及的生命周期阶段可知，此时页面停止渲染，用户将会看到一个卡死的页面。"]}),`
`,n.jsxs(i.p,{children:["因此，我们要将有可能阻塞过渡过程的逻辑，移到 ",n.jsx(i.code,{children:"updateCallback"})," 之外。"]}),`
`,n.jsx(i.h3,{id:"3-防止重名",children:"3. 防止重名"}),`
`,n.jsxs(i.p,{children:["在页面中，如果有多个元素的 ",n.jsx(i.code,{children:"view-transition-name"})," 的值相同，浏览器会自动跳过这些元素的过渡动效，因此要保证同一时刻下，DOM 中每个 ",n.jsx(i.code,{children:"view-transition-name"})," 仅对应唯一的元素"]}),`
`,n.jsx(i.h3,{id:"4-防止状态中断",children:"4. 防止状态中断"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"view-transition-name"})," 重名导致动效被跳过，因此 Transition 的 ",n.jsx(i.code,{children:"ready"})," 状态也就永远无法达到。"]}),`
`,n.jsx(i.p,{children:"这种情况下，我们预期在 ready 状态后执行的一些逻辑，就不能得以执行，比如："}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-css",children:`.box {
    view-transition-name: box;
}
.spot {
    view-transition-name: box;
}
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-js",children:`// Bad ❌
const vt = document.startViewTransition(updateCallback);
await vt.ready;
doSomething(); // Never run.
`})}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-js",children:`// Good ✅
const vt = document.startViewTransition(updateCallback);
try {
    await vt.ready;
}

doSomething();
`})}),`
`,n.jsx(i.h3,{id:"5-仅限-spa",children:"5. 仅限 SPA"}),`
`,n.jsx(i.p,{children:`在单页应用（SPA）中，我们可以用 View Transition API 去处理路由切换的过渡，但在跨页面应用（MPA）的路由切换中，由于新状态承载于新页面，也就是新的 document 对象，所以过渡效果无法跨过页面之间的阻隔。
不过，在 View Transition API 的最初设想中，作者们是有计划支持 MPA 的。`})]})}function V(e={}){const{wrapper:i}=Object.assign({},r(),e.components);return i?n.jsx(i,Object.assign({},e,{children:n.jsx(s,e)})):s(e)}export{V as default};
//# sourceMappingURL=ViewTransition-80afbd14.js.map
