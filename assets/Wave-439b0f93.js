import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as t,U as c}from"./index-e1b1f471.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bd1c62bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function n(a){const s=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code"},i(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{}),`
`,e.jsx("style",{children:`
    .sk-wave {
        --sk-size: 40px;
        --sk-color: #1ea7fd;
        width: var(--sk-size);
        height: var(--sk-size);
        display: flex;
        justify-content: space-between;
    }

    .sk-wave-rect {
        background-color: var(--sk-color);
        height: 100%;
        width: 15%;
        animation: sk-wave 1.2s infinite ease-in-out;
    }

    .sk-wave-rect:nth-child(1) { animation-delay: -1.2s; }
    .sk-wave-rect:nth-child(2) { animation-delay: -1.1s; }
    .sk-wave-rect:nth-child(3) { animation-delay: -1.0s; }
    .sk-wave-rect:nth-child(4) { animation-delay: -0.9s; }
    .sk-wave-rect:nth-child(5) { animation-delay: -0.8s; }

    @keyframes sk-wave {
        0%, 40%, 100% {
            transform: scaleY(0.4);
        } 20% {
            transform: scaleY(1);
        }
    }
`}),`
`,e.jsx(s.h1,{id:"wave",children:"Wave"}),`
`,e.jsx(c,{children:e.jsx("div",{className:"p-20",children:e.jsxs("div",{className:"sk-wave",children:[e.jsx("div",{className:"sk-wave-rect"}),e.jsx("div",{className:"sk-wave-rect"}),e.jsx("div",{className:"sk-wave-rect"}),e.jsx("div",{className:"sk-wave-rect"}),e.jsx("div",{className:"sk-wave-rect"})]})})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div className="sk-wave">
    <div className="sk-wave-rect"></div>
    <div className="sk-wave-rect"></div>
    <div className="sk-wave-rect"></div>
    <div className="sk-wave-rect"></div>
    <div className="sk-wave-rect"></div>
</div>
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.sk-wave {
    width: var(--sk-size);
    height: var(--sk-size);
    display: flex;
    justify-content: space-between;
}

.sk-wave-rect {
    background-color: var(--sk-color);
    height: 100%;
    width: 15%;
    animation: sk-wave 1.2s infinite ease-in-out;
}

.sk-wave-rect:nth-child(1) { animation-delay: -1.2s; }
.sk-wave-rect:nth-child(2) { animation-delay: -1.1s; }
.sk-wave-rect:nth-child(3) { animation-delay: -1.0s; }
.sk-wave-rect:nth-child(4) { animation-delay: -0.9s; }
.sk-wave-rect:nth-child(5) { animation-delay: -0.8s; }

@keyframes sk-wave {
    0%, 40%, 100% {
        transform: scaleY(0.4);
    } 20% {
        transform: scaleY(1);
    }
}
`})})]})}function y(a={}){const{wrapper:s}=Object.assign({},i(),a.components);return s?e.jsx(s,Object.assign({},a,{children:e.jsx(n,a)})):n(a)}export{y as default};
//# sourceMappingURL=Wave-439b0f93.js.map
