import{j as i}from"./index-CLcY12IL.js";import{e as s,s as t,p as a,g as x,a as h}from"./theme-BV7RT_cm.js";const r={gray:{text:a.common.black,background:a.primary.main,shadow:t.grayOutShadow,hover:{background:a.secondary.main,filter:x.orange,boxShadow:t.orangeOutShadow},active:{background:a.secondary.light,boxShadow:t.orangeInShadow},arrow:{shadow:"box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);"}},green:{text:a.common.black,background:a.success.main,shadow:t.greenOutShadow,hover:{filter:x.green},active:{background:a.success.light,boxShadow:t.greenInShadow},arrow:{shadow:"box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);"}},red:{text:a.common.black,background:a.error.main,shadow:t.redOutShadow,hover:{background:a.error.light,filter:x.red,boxShadow:t.redOutShadowHover},active:{background:a.error.lighter,boxShadow:t.redInShadow},arrow:{shadow:""}}},b=({children:o,className:e,variant:p="gray",arrow:n=!1,...d})=>i.jsx(g,{className:e,...d,$variant:p,$arrow:n,children:o}),g=h.button`
  ${s.buttonAndInput};

  padding: 0px 12px;
  height: 36px;
  font-weight: 600;
  display: inline-block;
  vertical-align: baseline;
  min-width: 128px;
  font-size: 16px;
  color: ${o=>r[o.$variant].text};
  background-color: ${o=>r[o.$variant].background};
  box-shadow: ${o=>r[o.$variant].shadow};
  ${o=>o.$arrow&&`
    box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);
  `}

  position: relative;

  margin-right: ${o=>o.$arrow&&"12px"};

  &:hover {
    background-color: ${o=>r[o.$variant].hover.background};
    box-shadow: ${o=>r[o.$variant].hover.boxShadow};
    filter: ${o=>r[o.$variant].hover.filter};
  }

  &:active {
    background-color: ${o=>r[o.$variant].active.background};
    box-shadow: ${o=>r[o.$variant].active.boxShadow};
    padding-top: 2px;
    filter: none;
  }

  &::after {
    content: "";
    display: ${o=>!o.$arrow&&"none"};
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: ${o=>r[o.$variant].background};
    top: 50%;
    /* transform: translate(50%, -50%) rotate(45deg); */
    transform: translate(50%, -50%) rotate(45deg) skew(12deg, 12deg);
    right: 0px;
    z-index: -3;
    /* box-shadow: ${o=>r[o.$variant].shadow}; */
    box-shadow:
      inset -8px 0px 4px -8px #000,
      inset 0px 10px 2px -8px #95df99,
      inset 0px 10px 2px -8px #163218,
      1px -1px 4px 0px #000;
  }
`;export{b as B};
