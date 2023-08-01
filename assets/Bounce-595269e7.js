import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as t,U as r}from"./index-e1b1f471.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bd1c62bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const s=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code"},i(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(t,{}),`
`,n.jsx("style",{children:`
    .sk-bounce {
        --sk-size: 40px;
        --sk-color: #1ea7fd;
        width: var(--sk-size);
        height: var(--sk-size);
        position: relative;
    }

    .sk-bounce-dot {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--sk-color);
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: sk-bounce 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .sk-bounce-dot:nth-child(2) { animation-delay: -1.0s; }

    @keyframes sk-bounce {
        0%, 100% {
            transform: scale(0);
        } 45%, 55% {
            transform: scale(1);
        }
    }
`}),`
`,n.jsx(s.h1,{id:"bounce",children:"Bounce"}),`
`,n.jsx(r,{children:n.jsx("div",{className:"p-20",children:n.jsxs("div",{className:"sk-bounce",children:[n.jsx("div",{className:"sk-bounce-dot"}),n.jsx("div",{className:"sk-bounce-dot"})]})})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<div class="sk-bounce">
    <div class="sk-bounce-dot"></div>
    <div class="sk-bounce-dot"></div>
</div>
`})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`.sk-bounce {
    width: var(--sk-size);
    height: var(--sk-size);
    position: relative;
}

.sk-bounce-dot {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--sk-color);
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: sk-bounce 2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.sk-bounce-dot:nth-child(2) { animation-delay: -1.0s; }

@keyframes sk-bounce {
    0%, 100% {
        transform: scale(0);
    } 45%, 55% {
        transform: scale(1);
    }
}
`})})]})}function f(e={}){const{wrapper:s}=Object.assign({},i(),e.components);return s?n.jsx(s,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{f as default};
//# sourceMappingURL=Bounce-595269e7.js.map
