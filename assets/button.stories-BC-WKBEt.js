import{j as r}from"./index-QNDVJ3cX.js";import{s as n,p as e,g as d,a as p}from"./theme-B4OyLIqz.js";/* empty css               */const o={gray:{text:e.common.black,background:e.primary.main,shadow:n.grayOutShadow,hover:{background:e.secondary.main,filter:d.orange,boxShadow:n.orangeOutShadow},active:{background:e.secondary.light,boxShadow:n.orangeInShadow}},green:{text:e.common.black,background:e.success.main,shadow:n.greenOutShadow,hover:{filter:d.green},active:{background:e.success.light,boxShadow:n.greenInShadow}},red:{text:e.common.black,background:e.error.main,shadow:n.redOutShadow,hover:{background:e.error.light,filter:d.red,boxShadow:n.redOutShadowHover},active:{background:e.error.lighter,boxShadow:n.redInShadow}}},t=({children:a,className:i,variant:x="gray",arrow:s=!1,...c})=>r.jsx(l,{className:i,...c,$variant:x,$arrow:s,children:a}),l=p.button`
  padding: 0px 12px;
  height: 36px;
  font-weight: 600;
  display: inline-block;
  vertical-align: baseline;
  min-width: 128px;
  font-size: 16px;
  color: ${a=>o[a.$variant].text};
  background-color: ${a=>o[a.$variant].background};
  /* box-shadow: ${a=>o[a.$variant].shadow}; */
  box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);


  position: relative;

  margin-right: ${a=>a.$arrow&&"12px"};


  &:hover {
    background-color: ${a=>o[a.$variant].hover.background};
    box-shadow: ${a=>o[a.$variant].hover.boxShadow};
    filter: ${a=>o[a.$variant].hover.filter};
  }

  &:active {
    background-color: ${a=>o[a.$variant].active.background};
    box-shadow: ${a=>o[a.$variant].active.boxShadow};
    padding-top: 2px;
    filter: none;
  }

  &::after {
    content: "";
    display: ${a=>!a.$arrow&&"none"};
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: ${a=>o[a.$variant].background};
    top: 50%;
    /* transform: translate(50%, -50%) rotate(45deg); */
    transform: translate(50%, -50%) rotate(45deg) skew(12deg, 12deg);
    right: 0px;
    z-index: -3;
    /* box-shadow: ${a=>o[a.$variant].shadow}; */
    box-shadow: inset -8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,1px -1px 4px 0px #000;
  
  }
`,w=()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r.jsx(t,{children:"Default Button"}),r.jsx(t,{variant:"green",children:"Green Button"}),r.jsx(t,{variant:"red",children:"Red Button"})]}),r.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r.jsx(t,{arrow:!0,children:"Default Button"}),r.jsx(t,{arrow:!0,variant:"green",children:"Green Button"}),r.jsx(t,{arrow:!0,variant:"red",children:"Red Button"})]})]}),b=()=>r.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r.jsx(t,{arrow:!0,children:"Default Button"}),r.jsx(t,{arrow:!0,variant:"green",children:"Green Button"}),r.jsx(t,{arrow:!0,variant:"red",children:"Red Button"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as arrowButtons,w as button};
