import{j as e}from"./index-bBe7e5-s.js";import"./window-B6XS-8fq.js";import"./story-tGCAf2vN.js";import{e as a,p,s as o,g as t,a as n}from"./theme-CR0aTfv4.js";const i=n.select`
  ${a.buttonAndInput}
  appearance: base-select;
  background-color: ${p.primary.main};
  box-shadow: ${o.grayOutShadow};
  padding: 3px 15px;
  align-content: center;
  height: 36px;
  font-weight: 600;
  /* display: inline-block; */

  border-radius: 0px;
  border: none;
  

  &:hover {
    background-color: ${p.secondary.main};
    box-shadow: ${o.orangeOutShadow};
    filter: ${t.orange};
  }

  &:active,
  &:open {
    background-color: ${p.secondary.light};
    box-shadow: ${o.orangeInShadow};
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
    color: ${p.menu.text};
    box-shadow: inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 10px 2px -10px #e3e3e3,inset 0px 10px 2px -8px #282828,inset 0px -9px 2px -8px #000,0px 0px 4px 0px #000;
  }

  & option:hover {
    background-color: ${p.secondary.main};
    box-shadow: ${o.orangeOutShadow};
    filter: ${t.orange};
  }
  
  & option:checked, & option:active {
    

    background-color: ${p.secondary.light};
    box-shadow: inset 0px 10px 2px -8px #000,inset 0px 9px 2px -8px #000,inset 8px 0px 4px -8px #563a10,inset 8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset 0px 9px 2px -8px #563a10,inset 0px -9px 2px -8px #a0a0a0,inset 0px -8.5px 0px -8px #563a10,0px 0px 4px 0px #000;
  }
`,x=n.option``,s=n.input`
  ${a.buttonAndInput};


  background-color: ${p.primary.main};
  border-radius: 4px;
  box-shadow: inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px -10px 2px -8px #e3e3e3,inset 0px -10px 2px -8px #282828,inset 0px 9px 1px -8px #000, inset 0px 9px 3px -8px #000;
  height: 32px;
  padding: 3px 10px;
  font-weight: 500;

  &:focus {
    background-color: #ecdbb8;
    box-shadow: inset 8px 0px 4px -8px #e39827,inset -8px 0px 4px -8px #e39827,inset 0px -10px 2px -8px #e3e3e3,inset 0px 9px 1px -8px #000;
  }

  
  /* Temporary */
  &:disabled {
    filter: brightness(0.8);
  }
`,g=()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"w-full rounded bg-amber-100 flex items-center p-2 gap-4",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-10 h-10 text-amber-600",children:[e.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),e.jsx("path",{d:"M12 9v4"}),e.jsx("path",{d:"M12 17h.01"})]}),e.jsxs("span",{children:["Firefox does not support ",e.jsx("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::picker#browser_compatibility",children:"::picker(select)"})," styling yet!"]})]}),e.jsxs(i,{style:{width:"20rem"},children:[e.jsx(x,{children:"Relevance"}),e.jsx(x,{children:"Downloads"}),e.jsx(x,{children:"Recently Updated"}),e.jsx(x,{children:"Trending"})]})]}),h=()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(s,{}),e.jsx(s,{disabled:!0})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{h as Text,g as select};
