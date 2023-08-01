import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o,U as a}from"./index-e1b1f471.js";import{u as e}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bd1c62bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function t(i){const s=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code"},e(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
`,n.jsx("style",{children:`
    .sk-swing {
        --sk-size: 40px;
        --sk-color: #1ea7fd;
        width: var(--sk-size);
        height: var(--sk-size);
        position: relative;
        animation: sk-swing 1.8s infinite linear;
    }

    .sk-swing-dot {
        width: 45%;
        height: 45%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-color: var(--sk-color);
        border-radius: 100%;
        animation: sk-swing-dot 2s infinite ease-in-out;
    }

    .sk-swing-dot:nth-child(2) {
        top: auto;
        bottom: 0;
        animation-delay: -1s;
    }

    @keyframes sk-swing {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes sk-swing-dot {
        0%, 100% {
            transform: scale(0.2); }
        50% {
            transform: scale(1);
        }
    }
`}),`
`,n.jsx(s.h1,{id:"swing",children:"Swing"}),`
`,n.jsx(a,{children:n.jsx("div",{className:"p-20",children:n.jsxs("div",{className:"sk-swing",children:[n.jsx("div",{className:"sk-swing-dot"}),n.jsx("div",{className:"sk-swing-dot"})]})})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<div className="sk-swing">
    <div className="sk-swing-dot"></div>
    <div className="sk-swing-dot"></div>
</div>
`})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`.sk-swing {
    width: var(--sk-size);
    height: var(--sk-size);
    position: relative;
    animation: sk-swing 1.8s infinite linear;
}

.sk-swing-dot {
    width: 45%;
    height: 45%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: var(--sk-color);
    border-radius: 100%;
    animation: sk-swing-dot 2s infinite ease-in-out;
}

.sk-swing-dot:nth-child(2) {
    top: auto;
    bottom: 0;
    animation-delay: -1s;
}

@keyframes sk-swing {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes sk-swing-dot {
    0%, 100% {
        transform: scale(0.2); }
    50% {
        transform: scale(1);
    }
}
`})})]})}function x(i={}){const{wrapper:s}=Object.assign({},e(),i.components);return s?n.jsx(s,Object.assign({},i,{children:n.jsx(t,i)})):t(i)}export{x as default};
//# sourceMappingURL=Swing-2b6d624f.js.map
