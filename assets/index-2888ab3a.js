import{j as s}from"./jsx-runtime-ffb262ed.js";import{M as d}from"./index-9fc16210.js";import{u as i}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-5e9006bb.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";function a(e){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",code:"code"},i(),e.components);return s.jsxs(s.Fragment,{children:[s.jsx(d,{}),`
`,s.jsx(n.h1,{id:"css-spin",children:"CSS Spin"}),`
`,s.jsxs(n.blockquote,{children:[`
`,s.jsx(n.p,{children:"Reference:"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:s.jsx(n.a,{href:"https://tobiasahlin.com/spinkit/",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-demo"})}),`
`,s.jsx(n.li,{children:s.jsx(n.a,{href:"https://github.com/tobiasahlin/SpinKit",target:"_blank",rel:"nofollow noopener noreferrer",children:"spinkit-official"})}),`
`]}),`
`]}),`
`,s.jsx(n.h2,{id:"plane",children:"Plane"}),`
`,s.jsx("div",{className:"example",children:s.jsx("div",{className:"sk-plane"})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`    <div class="sk-plane"></div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-plane {
    width: var(--sk-size);
    height: var(--sk-size);
    background-color: var(--sk-color);
    animation: sk-plane 1.2s infinite ease-in-out;
}

@keyframes sk-plane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    } 50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    } 100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
}
`})}),`
`,s.jsx(n.h2,{id:"chase",children:"Chase"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-chase",children:[s.jsx("div",{className:"sk-chase-dot"}),s.jsx("div",{className:"sk-chase-dot"}),s.jsx("div",{className:"sk-chase-dot"}),s.jsx("div",{className:"sk-chase-dot"}),s.jsx("div",{className:"sk-chase-dot"}),s.jsx("div",{className:"sk-chase-dot"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-chase {
    width: var(--sk-size);
    height: var(--sk-size);
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2.0s infinite ease-in-out both;
}

.sk-chase-dot:before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background-color: var(--sk-color);
    border-radius: 100%;
    animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
    100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot {
    80%, 100% { transform: rotate(360deg); }
}

@keyframes sk-chase-dot-before {
    50% {
        transform: scale(0.4);
    } 100%, 0% {
        transform: scale(1.0);
    }
}
`})}),`
`,s.jsx(n.h2,{id:"bounce",children:"Bounce"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-bounce",children:[s.jsx("div",{className:"sk-bounce-dot"}),s.jsx("div",{className:"sk-bounce-dot"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-bounce">
    <div class="sk-bounce-dot"></div>
    <div class="sk-bounce-dot"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-bounce {
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
`})}),`
`,s.jsx(n.h2,{id:"wave",children:"Wave"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-wave",children:[s.jsx("div",{className:"sk-wave-rect"}),s.jsx("div",{className:"sk-wave-rect"}),s.jsx("div",{className:"sk-wave-rect"}),s.jsx("div",{className:"sk-wave-rect"}),s.jsx("div",{className:"sk-wave-rect"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-wave">
    <div class="sk-wave-rect"></div>
    <div class="sk-wave-rect"></div>
    <div class="sk-wave-rect"></div>
    <div class="sk-wave-rect"></div>
    <div class="sk-wave-rect"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-wave {
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
`})}),`
`,s.jsx(n.h1,{id:"pulse",children:"Pulse"}),`
`,s.jsx("div",{className:"example",children:s.jsx("div",{className:"sk-pulse"})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-pulse"></div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-pulse {
    width: var(--sk-size);
    height: var(--sk-size);
    background-color: var(--sk-color);
    border-radius: 100%;
    animation: sk-pulse 1.2s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

@keyframes sk-pulse {
    0% {
        transform: scale(0);
    } 100% {
        transform: scale(1);
        opacity: 0;
    }
}
`})}),`
`,s.jsx(n.h2,{id:"flow",children:"Flow"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-flow",children:[s.jsx("div",{className:"sk-flow-dot"}),s.jsx("div",{className:"sk-flow-dot"}),s.jsx("div",{className:"sk-flow-dot"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-flow">
    <div class="sk-flow-dot"></div>
    <div class="sk-flow-dot"></div>
    <div class="sk-flow-dot"></div>
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
`})}),`
`,s.jsx(n.h2,{id:"swing",children:"Swing"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-swing",children:[s.jsx("div",{className:"sk-swing-dot"}),s.jsx("div",{className:"sk-swing-dot"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-swing">
    <div class="sk-swing-dot"></div>
    <div class="sk-swing-dot"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-swing {
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
`,s.jsx(n.h2,{id:"circle",children:"Circle"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-circle",children:[s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"}),s.jsx("div",{className:"sk-circle-dot"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-circle">
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
    <div class="sk-circle-dot"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`
.sk-circle {
    width: var(--sk-size);
    height: var(--sk-size);
    position: relative;
}

.sk-circle-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.sk-circle-dot:before {
    content: '';
    display: block;
    width: 15%;
    height: 15%;
    background-color: var(--sk-color);
    border-radius: 100%;
    animation: sk-circle 1.2s infinite ease-in-out both;
}

.sk-circle-dot:nth-child(1) { transform: rotate(30deg); }
.sk-circle-dot:nth-child(2) { transform: rotate(60deg); }
.sk-circle-dot:nth-child(3) { transform: rotate(90deg); }
.sk-circle-dot:nth-child(4) { transform: rotate(120deg); }
.sk-circle-dot:nth-child(5) { transform: rotate(150deg); }
.sk-circle-dot:nth-child(6) { transform: rotate(180deg); }
.sk-circle-dot:nth-child(7) { transform: rotate(210deg); }
.sk-circle-dot:nth-child(8) { transform: rotate(240deg); }
.sk-circle-dot:nth-child(9) { transform: rotate(270deg); }
.sk-circle-dot:nth-child(10) { transform: rotate(300deg); }
.sk-circle-dot:nth-child(11) { transform: rotate(330deg); }
.sk-circle-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-circle-dot:nth-child(2):before { animation-delay: -1s; }
.sk-circle-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-circle-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-circle-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-circle-dot:nth-child(6):before { animation-delay: -0.6s; }
.sk-circle-dot:nth-child(7):before { animation-delay: -0.5s; }
.sk-circle-dot:nth-child(8):before { animation-delay: -0.4s; }
.sk-circle-dot:nth-child(9):before { animation-delay: -0.3s; }
.sk-circle-dot:nth-child(10):before { animation-delay: -0.2s; }
.sk-circle-dot:nth-child(11):before { animation-delay: -0.1s; }

@keyframes sk-circle {
    0%, 80%, 100% {
        transform: scale(0); }
    40% {
        transform: scale(1);
    }
}
`})}),`
`,s.jsx(n.h2,{id:"circle-fade",children:"Circle Fade"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-circle-fade",children:[s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"}),s.jsx("div",{className:"sk-circle-fade-dot"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-circle-fade">
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
    <div class="sk-circle-fade-dot"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-circle-fade {
    width: var(--sk-size);
    height: var(--sk-size);
    position: relative;
}

.sk-circle-fade-dot {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.sk-circle-fade-dot:before {
    content: '';
    display: block;
    width: 15%;
    height: 15%;
    background-color: var(--sk-color);
    border-radius: 100%;
    animation: sk-circle-fade 1.2s infinite ease-in-out both;
}

.sk-circle-fade-dot:nth-child(1)  { transform: rotate(30deg);  }
.sk-circle-fade-dot:nth-child(2)  { transform: rotate(60deg);  }
.sk-circle-fade-dot:nth-child(3)  { transform: rotate(90deg);  }
.sk-circle-fade-dot:nth-child(4)  { transform: rotate(120deg); }
.sk-circle-fade-dot:nth-child(5)  { transform: rotate(150deg); }
.sk-circle-fade-dot:nth-child(6)  { transform: rotate(180deg); }
.sk-circle-fade-dot:nth-child(7)  { transform: rotate(210deg); }
.sk-circle-fade-dot:nth-child(8)  { transform: rotate(240deg); }
.sk-circle-fade-dot:nth-child(9)  { transform: rotate(270deg); }
.sk-circle-fade-dot:nth-child(10) { transform: rotate(300deg); }
.sk-circle-fade-dot:nth-child(11) { transform: rotate(330deg); }
.sk-circle-fade-dot:nth-child(1):before  { animation-delay: -1.1s; }
.sk-circle-fade-dot:nth-child(2):before  { animation-delay: -1.0s; }
.sk-circle-fade-dot:nth-child(3):before  { animation-delay: -0.9s; }
.sk-circle-fade-dot:nth-child(4):before  { animation-delay: -0.8s; }
.sk-circle-fade-dot:nth-child(5):before  { animation-delay: -0.7s; }
.sk-circle-fade-dot:nth-child(6):before  { animation-delay: -0.6s; }
.sk-circle-fade-dot:nth-child(7):before  { animation-delay: -0.5s; }
.sk-circle-fade-dot:nth-child(8):before  { animation-delay: -0.4s; }
.sk-circle-fade-dot:nth-child(9):before  { animation-delay: -0.3s; }
.sk-circle-fade-dot:nth-child(10):before { animation-delay: -0.2s; }
.sk-circle-fade-dot:nth-child(11):before { animation-delay: -0.1s; }

@keyframes sk-circle-fade {
    0%, 39%, 100% {
        opacity: 0;
        transform: scale(0.6);
    } 40% {
        opacity: 1;
        transform: scale(1);
    }
}
`})}),`
`,s.jsx(n.h2,{id:"grid",children:"Grid"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-grid",children:[s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"}),s.jsx("div",{className:"sk-grid-cube"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-grid">
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
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-grid {
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
`})}),`
`,s.jsx(n.h2,{id:"fold",children:"Fold"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-fold",children:[s.jsx("div",{className:"sk-fold-cube"}),s.jsx("div",{className:"sk-fold-cube"}),s.jsx("div",{className:"sk-fold-cube"}),s.jsx("div",{className:"sk-fold-cube"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-fold">
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
    <div class="sk-fold-cube"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-fold {
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
`})}),`
`,s.jsx(n.h2,{id:"wander",children:"Wander"}),`
`,s.jsx("div",{className:"example",children:s.jsxs("div",{className:"sk-wander",children:[s.jsx("div",{className:"sk-wander-cube"}),s.jsx("div",{className:"sk-wander-cube"}),s.jsx("div",{className:"sk-wander-cube"})]})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-html",children:`<div class="sk-wander">
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
    <div class="sk-wander-cube"></div>
</div>
`})}),`
`,s.jsx(n.pre,{children:s.jsx(n.code,{className:"language-css",children:`.sk-wander {
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
`})})]})}function j(e={}){const{wrapper:n}=Object.assign({},i(),e.components);return n?s.jsx(n,Object.assign({},e,{children:s.jsx(a,e)})):a(e)}export{j as default};
//# sourceMappingURL=index-2888ab3a.js.map
