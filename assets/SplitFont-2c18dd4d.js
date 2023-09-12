import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i}from"./index-462ee75c.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-ae2a3709.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";const o=()=>{const n=Object.assign({svg:"svg",symbol:"symbol",text:"text",use:"use"},s());return e.jsxs(n.svg,{viewBox:"0 0 1000 300",children:[e.jsx(n.symbol,{id:"line-text",children:e.jsx(n.text,{textAnchor:"middle",x:"50%",y:"50%",dy:".4em",children:"Microgoople"})}),e.jsx(n.use,{xlinkHref:"#line-text",className:"text"}),e.jsx(n.use,{xlinkHref:"#line-text",className:"text"}),e.jsx(n.use,{xlinkHref:"#line-text",className:"text"}),e.jsx(n.use,{xlinkHref:"#line-text",className:"text"})]})};function r(n){const t=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{}),`
`,e.jsx("style",{children:`
    .Wrap_SplitFont{
        font-size: 120px;
        font-weight: bold;
        height:10rem;
        text-transform: uppercase;
        background-color: rgb(41, 45, 62);
        position: relative;
    }
    svg{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .text{
        fill: none;
        stroke-width: 5;
        stroke-dasharray: 0 240;
        stroke-dashoffset: 0;
    }
    .text:nth-child(4n + 1){
        stroke: rgb(39,153,238);
        animation: text1 4s ease-in-out forwards infinite;
    }
    .text:nth-child(4n + 2){
        stroke: rgb(47,169,92);
        animation: text2 4s ease-in-out forwards infinite;
    }
    .text:nth-child(4n + 3){
        stroke: rgb(249,189,56);
        animation: text3 4s ease-in-out forwards infinite;
    }
    .text:nth-child(4n + 4){
        stroke: rgb(235,61,50);
        animation: text4 4s ease-in-out forwards infinite;
    }
    @keyframes text1{
        100%{
            stroke-dasharray: 60 180;
            stroke-dashoffset: 1000;
        }
    }
    @keyframes text2{
        100%{
            stroke-dasharray: 60 180;
            stroke-dashoffset: 1060;
        }
    }
    @keyframes text3{
        100%{
            stroke-dasharray: 60 180;
            stroke-dashoffset: 1120;
        }
    }
    @keyframes text4{
        100%{
            stroke-dasharray: 60 180;
            stroke-dashoffset: 1180;
        }
    }
`}),`
`,e.jsx(t.h1,{id:"splitfont",children:"SplitFont"}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Reference: ",e.jsx(t.a,{href:"https://www.bilibili.com/video/BV16p4y117k1",target:"_blank",rel:"nofollow noopener noreferrer",children:"【每天学一点CSS】快看，CSS 让这个文字动起来了~"})]}),`
`]}),`
`,`
`,e.jsx("div",{className:"Wrap_SplitFont",children:e.jsx(o,{})}),`
`,e.jsx(t.h2,{id:"html",children:"HTML"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<div class="Wrap_SplitFont">
    <svg viewBox="0 0 1000 300">
      <symbol id="line-text">
        <text text-anchor="middle" x="50%" y="50%" dy=".4em">
            Microgoople
        </text>
      </symbol>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
      <use xlink:href="#line-text" class="text"></use>
    </svg>
</div>
`})}),`
`,e.jsx(t.h2,{id:"css",children:"CSS"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-css",children:`.Wrap_SplitFont{
    font-size: 120px;
    font-weight: bold;
    height:10rem;
    text-transform: uppercase;
    background-color: rgb(41, 45, 62);
    position: relative;
}
svg{
    position: absolute;
    width: 100%;
    height: 100%;
}
.text{
    fill: none;
    stroke-width: 5;
    stroke-dasharray: 0 240;
    stroke-dashoffset: 0;
}
.text:nth-child(4n + 1){
    stroke: rgb(39,153,238);
    animation: text1 4s ease-in-out forwards infinite;
}
.text:nth-child(4n + 2){
    stroke: rgb(47,169,92);
    animation: text2 4s ease-in-out forwards infinite;
}
.text:nth-child(4n + 3){
    stroke: rgb(249,189,56);
    animation: text3 4s ease-in-out forwards infinite;
}
.text:nth-child(4n + 4){
    stroke: rgb(235,61,50);
    animation: text4 4s ease-in-out forwards infinite;
}
@keyframes text1{
    100%{
        stroke-dasharray: 60 180;
        stroke-dashoffset: 1000;
    }
}
@keyframes text2{
    100%{
        stroke-dasharray: 60 180;
        stroke-dashoffset: 1060;
    }
}
@keyframes text3{
    100%{
        stroke-dasharray: 60 180;
        stroke-dashoffset: 1120;
    }
}
@keyframes text4{
    100%{
        stroke-dasharray: 60 180;
        stroke-dashoffset: 1180;
    }
}
`})}),`
`,e.jsx(t.h2,{id:"issue",children:"Issue"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-bash",children:`## https://github.com/facebook/react/issues/4908
## In the interest of saving time, the solution is to use camel case:
-- <svg xlinkHref="http://i.imgur.com/w7GCRPb.png" />
## renders to
++ <svg xlink:href="http://i.imgur.com/w7GCRPb.png" />
`})})]})}function j(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(r,n)})):r(n)}export{o as FontSvg,j as default};
//# sourceMappingURL=SplitFont-2c18dd4d.js.map
