import{_ as l}from"./iframe-ff480f03.js";import{R as o,r as a}from"./index-76fb7be0.js";import{r as d,C as E,A as R,H as x,D as y}from"./index-3bfdc18e.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-d37d4223.js";import"./index-c7e0cd4c.js";import"./assert-1bda9b76.js";import"./index-356e4a49.js";var i={},m=d;i.createRoot=m.createRoot,i.hydrateRoot=m.hydrateRoot;var n=new Map,D=({callback:t,children:e})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==t&&(r.current=t,t())},[t]),e},_=async(t,e)=>{let r=await v(e);return new Promise(s=>{r.render(o.createElement(D,{callback:()=>s(null)},t))})},f=(t,e)=>{let r=n.get(t);r&&(r.unmount(),n.delete(t))},v=async t=>{let e=n.get(t);return e||(e=i.createRoot(t),n.set(t,e)),e},w={code:E,a:R,...x},C=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:e}=this.props;e(t)}render(){let{hasError:t}=this.state,{children:e}=this.props;return t?null:e}},N=class{constructor(){this.render=async(t,e,r)=>{let s={...w,...e==null?void 0:e.components},c=y;return new Promise((p,u)=>{l(()=>import("./index-9eea8125.js"),["./index-9eea8125.js","./index-a1cf9e47.js","./index-76fb7be0.js","./_commonjsHelpers-de833af9.js"],import.meta.url).then(({MDXProvider:h})=>_(o.createElement(C,{showException:u,key:Math.random()},o.createElement(h,{components:s},o.createElement(c,{context:t,docsParameter:e}))),r)).then(()=>p())})},this.unmount=t=>{f(t)}}};export{N as DocsRenderer,w as defaultComponents};
//# sourceMappingURL=DocsRenderer-3PUGWF3O-a5cef85f.js.map
