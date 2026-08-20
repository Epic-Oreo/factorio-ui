import{j as r}from"./index-IgddSjvG.js";import{s as t,p as o,g as x,a as c}from"./theme-C6W_FkaA.js";/* empty css               */const e={gray:{text:o.common.black,background:o.primary.main,shadow:t.grayOutShadow,hover:{background:o.secondary.main,filter:x.orange,boxShadow:t.orangeOutShadow},active:{background:o.secondary.light,boxShadow:t.orangeInShadow},arrow:{shadow:"box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);"}},green:{text:o.common.black,background:o.success.main,shadow:t.greenOutShadow,hover:{filter:x.green},active:{background:o.success.light,boxShadow:t.greenInShadow},arrow:{shadow:"box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);"}},red:{text:o.common.black,background:o.error.main,shadow:t.redOutShadow,hover:{background:o.error.light,filter:x.red,boxShadow:t.redOutShadowHover},active:{background:o.error.lighter,boxShadow:t.redInShadow},arrow:{shadow:""}}},n=({children:a,className:p,variant:d="gray",arrow:i=!1,...s})=>r.jsx(h,{className:p,...s,$variant:d,$arrow:i,children:a}),h=c.button`
  padding: 0px 12px;
  height: 36px;
  font-weight: 600;
  display: inline-block;
  vertical-align: baseline;
  min-width: 128px;
  font-size: 16px;
  color: ${a=>e[a.$variant].text};
  background-color: ${a=>e[a.$variant].background};
  box-shadow: ${a=>e[a.$variant].shadow};
  ${a=>a.$arrow&&`
    box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);
  `}

  position: relative;

  margin-right: ${a=>a.$arrow&&"12px"};

  &:hover {
    background-color: ${a=>e[a.$variant].hover.background};
    box-shadow: ${a=>e[a.$variant].hover.boxShadow};
    filter: ${a=>e[a.$variant].hover.filter};
  }

  &:active {
    background-color: ${a=>e[a.$variant].active.background};
    box-shadow: ${a=>e[a.$variant].active.boxShadow};
    padding-top: 2px;
    filter: none;
  }

  &::after {
    content: "";
    display: ${a=>!a.$arrow&&"none"};
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: ${a=>e[a.$variant].background};
    top: 50%;
    /* transform: translate(50%, -50%) rotate(45deg); */
    transform: translate(50%, -50%) rotate(45deg) skew(12deg, 12deg);
    right: 0px;
    z-index: -3;
    /* box-shadow: ${a=>e[a.$variant].shadow}; */
    box-shadow:
      inset -8px 0px 4px -8px #000,
      inset 0px 10px 2px -8px #95df99,
      inset 0px 10px 2px -8px #163218,
      1px -1px 4px 0px #000;
  }
`,u=()=>r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r.jsx(n,{children:"Default Button"}),r.jsx(n,{variant:"green",children:"Green Button"}),r.jsx(n,{variant:"red",children:"Red Button"})]}),r.jsx("div",{className:"flex gap-2 flex-wrap"})]}),b=()=>r.jsxs("div",{className:"flex gap-2 flex-wrap",children:[r.jsx(n,{arrow:!0,children:"Default Button"}),r.jsx(n,{arrow:!0,variant:"green",children:"Green Button"}),r.jsx(n,{arrow:!0,variant:"red",children:"Red Button"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as arrowButtons,u as button};
