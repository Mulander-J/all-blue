import{j as s}from"./jsx-runtime-ffb262ed.js";import{M as t,U as a}from"./index-e1b1f471.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bd1c62bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const n=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code"},i(),e.components);return s.jsxs(s.Fragment,{children:[s.jsx(t,{}),`
`,s.jsx("style",{children:`
    .sk-flow {
        --sk-size: 40px;
        --sk-color: #1ea7fd;
        width: calc(var(--sk-size) * 1.3);
        height: calc(var(--sk-size) * 1.3);
        display: flex;
        justify-content: space-between;
    }

    .sk-flow-dot {
        width: 25%;
        height: 25%;
        background-color: var(--sk-color);
        border-radius: 50%;
        animation: sk-flow 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite both;
    }

    .sk-flow-dot:nth-child(1) { animation-delay: -0.30s; }
    .sk-flow-dot:nth-child(2) { animation-delay: -0.15s; }

    @keyframes sk-flow {
        0%, 80%, 100% {
            transform: scale(0.3); }
        40% {
            transform: scale(1);
        }
    }
`}),`
`,s.jsx(n.h1,{id:"flow",children:"Flow"}),`
`,s.jsx(a,{children:s.jsx("div",{className:"p-20",children:s.jsxs("div",{className:"sk-flow",children:[s.jsx("div",{className:"sk-flow-dot"}),s.jsx("div",{className:"sk-flow-dot"}),s.jsx("div",{className:"sk-flow-dot"})]})})}),`
`,s.jsx(n.hr,{}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div className="sk-flow">
    <div className="sk-flow-dot"></div>
    <div className="sk-flow-dot"></div>
    <div className="sk-flow-dot"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-flow {
    width: calc(var(--sk-size) * 1.3);
    height: calc(var(--sk-size) * 1.3);
    display: flex;
    justify-content: space-between;
}

.sk-flow-dot {
    width: 25%;
    height: 25%;
    background-color: var(--sk-color);
    border-radius: 50%;
    animation: sk-flow 1.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite both;
}

.sk-flow-dot:nth-child(1) { animation-delay: -0.30s; }
.sk-flow-dot:nth-child(2) { animation-delay: -0.15s; }

@keyframes sk-flow {
    0%, 80%, 100% {
        transform: scale(0.3); }
    40% {
        transform: scale(1);
    }
}
`})})]})}function v(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?s.jsx(n,Object.assign({},e,{children:s.jsx(o,e)})):o(e)}export{v as default};
//# sourceMappingURL=Flow-9c60ad46.js.map
