import{j as e}from"./index-CLcY12IL.js";import"./window-FWAVjVJo.js";import"./story-Cy_gJHed.js";import{e as a,p as o,s as n,g as t,a as x}from"./theme-BV7RT_cm.js";const i=x.select`
  ${a.buttonAndInput}
  appearance: base-select;
  background-color: ${o.primary.main};
  box-shadow: ${n.grayOutShadow};
  padding: 3px 15px;
  align-content: center;
  height: 36px;
  font-weight: 600;
  /* display: inline-block; */

  border-radius: 0px;
  border: none;
  

  &:hover {
    background-color: ${o.secondary.main};
    box-shadow: ${n.orangeOutShadow};
    filter: ${t.orange};
  }

  &:active,
  &:open {
    background-color: ${o.secondary.light};
    box-shadow: ${n.orangeInShadow};
  }

  &::picker-icon {
    background-repeat: no-repeat;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAHJJREFUeJzVzzsOgCAURFEWAlQCFvLpCTVsRNj/Cp6JiSQUKjwavcm0JxlCflHJhUohgTOOmlgE5D2vFTTaAKNsanrTUMEQwjTovYfmtnMOjVlrW2wGvcUw6Cs2gnZjPegw9oSisauUEiipzsUY57BPdAAlyKqLKexhTgAAAABJRU5ErkJggg==");
    background-size: contain;
    align-content: center;
    background-position: center;
    width: 12px;
    content: "";
  }

  & option::checkmark {
    content: "";
  }

  &::picker(select) {
    appearance: base-select;
    background-color: green;
  }

  & option {
    font-weight: 400;
    height: 36px;
    background-color: #262626;
    color: ${o.menu.text};
    box-shadow: inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 10px 2px -10px #e3e3e3,inset 0px 10px 2px -8px #282828,inset 0px -9px 2px -8px #000,0px 0px 4px 0px #000;
  }

  & option:hover {
    background-color: ${o.secondary.main};
    box-shadow: ${n.orangeOutShadow};
    filter: ${t.orange};
  }
  
  & option:checked, & option:active {
    

    background-color: ${o.secondary.light};
    box-shadow: inset 0px 10px 2px -8px #000,inset 0px 9px 2px -8px #000,inset 8px 0px 4px -8px #563a10,inset 8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset 0px 9px 2px -8px #563a10,inset 0px -9px 2px -8px #a0a0a0,inset 0px -8.5px 0px -8px #563a10,0px 0px 4px 0px #000;
  }
`,p=x.option``,l=()=>e.jsx("div",{children:e.jsxs(i,{style:{width:"20rem"},children:[e.jsx(p,{children:"Relevance"}),e.jsx(p,{children:"Downloads"}),e.jsx(p,{children:"Recently Updated"}),e.jsx(p,{children:"Trending"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{l as select};
