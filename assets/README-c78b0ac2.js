import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as o,b as s}from"./index-bad4b86e.js";import{Preview as c}from"./index.stories-2ab81524.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-7607e4f7.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";import"./index-12ec16e5.js";import"./each-e59479a4.js";import"./index-d179bc74.js";function t(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{}),`
`,e.jsx(r.h1,{id:"scrollbar",children:"Scrollbar"}),`
`,e.jsx(r.h2,{id:"override-css",children:"Override CSS"}),`
`,e.jsx(r.p,{children:"覆盖原始滚动条样式"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{children:`::-webkit-scrollbar    //滚动条整体部分
::-webkit-scrollbar-button   //滚动条两端的按钮
::-webkit-scrollbar-track   // 外层轨道
::-webkit-scrollbar-track-piece    //内层轨道，滚动条中间部分（除去）
::-webkit-scrollbar-thumb //滚动条里面可以拖动的那个
::-webkit-scrollbar-corner   //边角
::-webkit-resizer   ///定义右下角拖动块的样式
`})}),`
`,e.jsx(r.h2,{id:"custom-element",children:"Custom Element"}),`
`,e.jsx(r.p,{children:"隐藏原始滚动条"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-css",children:`&::-webkit-scrollbar{
    width: 0;
}
`})}),`
`,e.jsx(r.p,{children:"添加自定义元素，以及滚动监听"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-js",children:`const handleCroll = (event) => {
    let { scrollTop, scrollHeight, clientHeight } = event.target;
    percent = (100 * scrollTop) / (scrollHeight - clientHeight);
};
`})}),`
`,e.jsx(r.h3,{id:"eg-gardient-bar",children:"e.g. Gardient Bar"}),`
`,e.jsx(s,{of:c})]})}function H(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{H as default};
//# sourceMappingURL=README-c78b0ac2.js.map
