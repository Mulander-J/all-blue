import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as t,U as l}from"./index-e06a680a.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-3804445f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function o(e){const s=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code",blockquote:"blockquote",p:"p",ul:"ul",li:"li",a:"a"},i(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(t,{}),`
`,n.jsx("style",{children:`
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
`,n.jsx(s.h1,{id:"flow",children:"Flow"}),`
`,n.jsx(l,{children:n.jsx("div",{className:"p-20",children:n.jsxs("div",{className:"sk-flow",children:[n.jsx("div",{className:"sk-flow-dot"}),n.jsx("div",{className:"sk-flow-dot"}),n.jsx("div",{className:"sk-flow-dot"})]})})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-html",children:`<div className="sk-flow">
    <div className="sk-flow-dot"></div>
    <div className="sk-flow-dot"></div>
    <div className="sk-flow-dot"></div>
</div>
`})}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-css",children:`.sk-flow {
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
`})}),`
`,n.jsxs(s.blockquote,{children:[`
`,n.jsx(s.p,{children:"Reference:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://tobiasahlin.com/spinkit/",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-demo"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://github.com/tobiasahlin/SpinKit",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-official"})}),`
`]}),`
`]})]})}function b(e={}){const{wrapper:s}=Object.assign({},i(),e.components);return s?n.jsx(s,Object.assign({},e,{children:n.jsx(o,e)})):o(e)}export{b as default};
//# sourceMappingURL=Flow-96d1eaa3.js.map
