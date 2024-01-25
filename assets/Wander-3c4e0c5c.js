import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as t,U as i}from"./index-83d9217b.js";import{u as r}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-50106053.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function s(a){const n=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code",blockquote:"blockquote",p:"p",ul:"ul",li:"li",a:"a"},r(),a.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{}),`
`,e.jsx("style",{children:`
    .sk-wander {
        --sk-size: 40px;
        --sk-color: #1ea7fd;
        width: var(--sk-size);
        height: var(--sk-size);
        position: relative;
    }

    .sk-wander-cube {
        background-color: var(--sk-color);
        width: 20%;
        height: 20%;
        position: absolute;
        top: 0;
        left: 0;
        --sk-wander-distance: calc(var(--sk-size) * 0.75);
        animation: sk-wander 2.0s ease-in-out -2.0s infinite both;
    }
    .sk-wander-cube:nth-child(2) { animation-delay: -0.5s; }
    .sk-wander-cube:nth-child(3) { animation-delay: -1.0s; }

    @keyframes sk-wander {
        0% {
            transform: rotate(0deg);
        } 25% {
            transform: translateX(var(--sk-wander-distance)) rotate(-90deg) scale(0.6);
        } 50% { /* Make FF rotate in the right direction */
            transform: translateX(var(--sk-wander-distance)) translateY(var(--sk-wander-distance)) rotate(-179deg);
        } 50.1% {
            transform: translateX(var(--sk-wander-distance)) translateY(var(--sk-wander-distance)) rotate(-180deg);
        } 75% {
            transform: translateX(0) translateY(var(--sk-wander-distance)) rotate(-270deg) scale(0.6);
        } 100% {
            transform: rotate(-360deg);
        }
    }    
`}),`
`,e.jsx(n.h1,{id:"wander",children:"Wander"}),`
`,e.jsx(i,{children:e.jsx("div",{className:"p-20",children:e.jsxs("div",{class:"sk-wander",children:[e.jsx("div",{class:"sk-wander-cube"}),e.jsx("div",{class:"sk-wander-cube"}),e.jsx("div",{class:"sk-wander-cube"}),e.jsx("div",{class:"sk-wander-cube"})]})})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="sk-wander">
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
</div>
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.sk-wander {
    width: var(--sk-size);
    height: var(--sk-size);
    position: relative;
}

.sk-wander-cube {
    background-color: var(--sk-color);
    width: 20%;
    height: 20%;
    position: absolute;
    top: 0;
    left: 0;
    --sk-wander-distance: calc(var(--sk-size) * 0.75);
    animation: sk-wander 2.0s ease-in-out -2.0s infinite both;
}
.sk-wander-cube:nth-child(2) { animation-delay: -0.5s; }
.sk-wander-cube:nth-child(3) { animation-delay: -1.0s; }

@keyframes sk-wander {
    0% {
        transform: rotate(0deg);
    } 25% {
        transform: translateX(var(--sk-wander-distance)) rotate(-90deg) scale(0.6);
    } 50% { /* Make FF rotate in the right direction */
        transform: translateX(var(--sk-wander-distance)) translateY(var(--sk-wander-distance)) rotate(-179deg);
    } 50.1% {
        transform: translateX(var(--sk-wander-distance)) translateY(var(--sk-wander-distance)) rotate(-180deg);
    } 75% {
        transform: translateX(0) translateY(var(--sk-wander-distance)) rotate(-270deg) scale(0.6);
    } 100% {
        transform: rotate(-360deg);
    }
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Reference:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://tobiasahlin.com/spinkit/",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-demo"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/tobiasahlin/SpinKit",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-official"})}),`
`]}),`
`]})]})}function g(a={}){const{wrapper:n}=Object.assign({},r(),a.components);return n?e.jsx(n,Object.assign({},a,{children:e.jsx(s,a)})):s(a)}export{g as default};
//# sourceMappingURL=Wander-3c4e0c5c.js.map
