import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i,U as r}from"./index-e1b1f471.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-bd1c62bc.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function t(n){const s=Object.assign({h1:"h1",hr:"hr",pre:"pre",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx("style",{children:`
    .sk-fold {
        --sk-size: 40px;
        --sk-color: #1ea7fd;
        width: var(--sk-size);
        height: var(--sk-size);
        position: relative;
        transform: rotateZ(45deg);
    }
    .sk-fold-cube {
        float: left;
        width: 50%;
        height: 50%;
        position: relative;
        transform: scale(1.1);
    }

    .sk-fold-cube:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--sk-color);
        animation: sk-fold 2.4s infinite linear both;
        transform-origin: 100% 100%;
    }
    .sk-fold-cube:nth-child(2) { transform: scale(1.1) rotateZ(90deg); }
    .sk-fold-cube:nth-child(4) { transform: scale(1.1) rotateZ(180deg); }
    .sk-fold-cube:nth-child(3) { transform: scale(1.1) rotateZ(270deg); }
    .sk-fold-cube:nth-child(2):before { animation-delay: 0.3s; }
    .sk-fold-cube:nth-child(4):before { animation-delay: 0.6s; }
    .sk-fold-cube:nth-child(3):before { animation-delay: 0.9s; }

    @keyframes sk-fold {
        0%, 10% {
            transform: perspective(140px) rotateX(-180deg);
            opacity: 0;
        } 25%, 75% {
            transform: perspective(140px) rotateX(0deg);
            opacity: 1;
        } 90%, 100% {
            transform: perspective(140px) rotateY(180deg);
            opacity: 0;
        }
    }
`}),`
`,e.jsx(s.h1,{id:"fold",children:"Fold"}),`
`,e.jsx(r,{children:e.jsx("div",{className:"p-20",children:e.jsxs("div",{class:"sk-fold",children:[e.jsx("div",{class:"sk-fold-cube"}),e.jsx("div",{class:"sk-fold-cube"}),e.jsx("div",{class:"sk-fold-cube"}),e.jsx("div",{class:"sk-fold-cube"})]})})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-html",children:`<div class="sk-fold">
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
</div>
`})}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`.sk-fold {
    width: var(--sk-size);
    height: var(--sk-size);
    position: relative;
    transform: rotateZ(45deg);
}
.sk-fold-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
}

.sk-fold-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--sk-color);
    animation: sk-fold 2.4s infinite linear both;
    transform-origin: 100% 100%;
}
.sk-fold-cube:nth-child(2) { transform: scale(1.1) rotateZ(90deg); }
.sk-fold-cube:nth-child(4) { transform: scale(1.1) rotateZ(180deg); }
.sk-fold-cube:nth-child(3) { transform: scale(1.1) rotateZ(270deg); }
.sk-fold-cube:nth-child(2):before { animation-delay: 0.3s; }
.sk-fold-cube:nth-child(4):before { animation-delay: 0.6s; }
.sk-fold-cube:nth-child(3):before { animation-delay: 0.9s; }

@keyframes sk-fold {
    0%, 10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
    } 25%, 75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
    } 90%, 100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
    }
}
`})})]})}function x(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{x as default};
//# sourceMappingURL=Fold-e06d6c3d.js.map
