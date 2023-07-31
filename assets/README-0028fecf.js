import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as o}from"./index-9fc16210.js";import{u as s}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-5e9006bb.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";const r=()=>{const t=Object.assign({svg:"svg",symbol:"symbol",text:"text",use:"use"},s());return e.jsxs(t.svg,{viewBox:"0 0 1000 300",children:[e.jsx(t.symbol,{id:"line-text",children:e.jsx(t.text,{textAnchor:"middle",x:"50%",y:"50%",dy:".4em",children:"Microgoople"})}),e.jsx(t.use,{xlinkHref:"#line-text",className:"text"}),e.jsx(t.use,{xlinkHref:"#line-text",className:"text"}),e.jsx(t.use,{xlinkHref:"#line-text",className:"text"}),e.jsx(t.use,{xlinkHref:"#line-text",className:"text"})]})};function i(t){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@SVG/SplitFont"}),`
`,e.jsx(n.h1,{id:"splitfont",children:"SplitFont"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Reference: ",e.jsx(n.a,{href:"https://www.bilibili.com/video/BV16p4y117k1",target:"_blank",rel:"nofollow noopener noreferrer",children:"【每天学一点CSS】快看，CSS 让这个文字动起来了~"})]}),`
`]}),`
`,`
`,e.jsx("div",{className:"Wrap_SplitFont",children:e.jsx(r,{})}),`
`,e.jsx(n.h2,{id:"html",children:"HTML"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container">
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
`,e.jsx(n.h2,{id:"css",children:"CSS"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.container{
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
`,e.jsx(n.h2,{id:"issue",children:"Issue"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`## https://github.com/facebook/react/issues/4908
## In the interest of saving time, the solution is to use camel case:
-- <svg xlinkHref="http://i.imgur.com/w7GCRPb.png" />
## renders to
++ <svg xlink:href="http://i.imgur.com/w7GCRPb.png" />
`})})]})}function b(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{r as FontSvg,b as default};
//# sourceMappingURL=README-0028fecf.js.map
