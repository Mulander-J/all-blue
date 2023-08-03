import{j as n}from"./jsx-runtime-ffb262ed.js";import{M as o,U as r}from"./index-72965b6b.js";import{u as t}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-077fe6da.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function e(i){const s=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code",blockquote:"blockquote",p:"p",ul:"ul",li:"li",a:"a"},t(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(o,{}),`
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
`,n.jsx(r,{children:n.jsx("div",{className:"p-20",children:n.jsxs("div",{className:"sk-swing",children:[n.jsx("div",{className:"sk-swing-dot"}),n.jsx("div",{className:"sk-swing-dot"})]})})}),`
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
`})}),`
`,n.jsxs(s.blockquote,{children:[`
`,n.jsx(s.p,{children:"Reference:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://tobiasahlin.com/spinkit/",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-demo"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://github.com/tobiasahlin/SpinKit",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-official"})}),`
`]}),`
`]})]})}function x(i={}){const{wrapper:s}=Object.assign({},t(),i.components);return s?n.jsx(s,Object.assign({},i,{children:n.jsx(e,i)})):e(i)}export{x as default};
//# sourceMappingURL=Swing-67ae6530.js.map
