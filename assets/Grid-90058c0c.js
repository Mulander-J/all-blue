import{j as i}from"./jsx-runtime-ffb262ed.js";import{M as a,U as c}from"./index-e1b1f471.js";import{u as e}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bd1c62bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function d(n){const s=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code"},e(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(a,{}),`
`,i.jsx("style",{children:`
    .sk-grid {
        --sk-size: 40px;
        --sk-color: #1ea7fd;
        width: var(--sk-size);
        height: var(--sk-size);
        /* Cube positions
            * 1 2 3
            * 4 5 6
            * 7 8 9
            */
    }
    .sk-grid-cube {
        width: 33.33%;
        height: 33.33%;
        background-color: var(--sk-color);
        float: left;
        animation: sk-grid 1.3s infinite ease-in-out;
    }
    .sk-grid-cube:nth-child(1) { animation-delay: 0.2s; }
    .sk-grid-cube:nth-child(2) { animation-delay: 0.3s; }
    .sk-grid-cube:nth-child(3) { animation-delay: 0.4s; }
    .sk-grid-cube:nth-child(4) { animation-delay: 0.1s; }
    .sk-grid-cube:nth-child(5) { animation-delay: 0.2s; }
    .sk-grid-cube:nth-child(6) { animation-delay: 0.3s; }
    .sk-grid-cube:nth-child(7) { animation-delay: 0.0s; }
    .sk-grid-cube:nth-child(8) { animation-delay: 0.1s; }
    .sk-grid-cube:nth-child(9) { animation-delay: 0.2s; }

    @keyframes sk-grid {
        0%, 70%, 100% {
            transform: scale3D(1, 1, 1);
        } 35% {
            transform: scale3D(0, 0, 1);
        }
    }    
`}),`
`,i.jsx(s.h1,{id:"bounce",children:"Bounce"}),`
`,i.jsx(c,{children:i.jsx("div",{className:"p-20",children:i.jsxs("div",{class:"sk-grid",children:[i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"}),i.jsx("div",{class:"sk-grid-cube"})]})})}),`
`,i.jsx(s.hr,{}),`
`,i.jsx(s.pre,{children:i.jsx(s.code,{className:"language-html",children:`<div class="sk-grid">
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
    <div class="sk-grid-cube"></div>
</div>
`})}),`
`,i.jsx(s.pre,{children:i.jsx(s.code,{className:"language-css",children:`.sk-grid {
    width: var(--sk-size);
    height: var(--sk-size);
    /* Cube positions
        * 1 2 3
        * 4 5 6
        * 7 8 9
        */
}
.sk-grid-cube {
    width: 33.33%;
    height: 33.33%;
    background-color: var(--sk-color);
    float: left;
    animation: sk-grid 1.3s infinite ease-in-out;
}
.sk-grid-cube:nth-child(1) { animation-delay: 0.2s; }
.sk-grid-cube:nth-child(2) { animation-delay: 0.3s; }
.sk-grid-cube:nth-child(3) { animation-delay: 0.4s; }
.sk-grid-cube:nth-child(4) { animation-delay: 0.1s; }
.sk-grid-cube:nth-child(5) { animation-delay: 0.2s; }
.sk-grid-cube:nth-child(6) { animation-delay: 0.3s; }
.sk-grid-cube:nth-child(7) { animation-delay: 0.0s; }
.sk-grid-cube:nth-child(8) { animation-delay: 0.1s; }
.sk-grid-cube:nth-child(9) { animation-delay: 0.2s; }

@keyframes sk-grid {
    0%, 70%, 100% {
        transform: scale3D(1, 1, 1);
    } 35% {
        transform: scale3D(0, 0, 1);
    }
}
`})})]})}function p(n={}){const{wrapper:s}=Object.assign({},e(),n.components);return s?i.jsx(s,Object.assign({},n,{children:i.jsx(d,n)})):d(n)}export{p as default};
//# sourceMappingURL=Grid-90058c0c.js.map
