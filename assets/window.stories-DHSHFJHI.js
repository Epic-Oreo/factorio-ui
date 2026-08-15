import{j as e}from"./index-GUXBK_0o.js";import{p as t,s as n,o as p,a as x,i as o}from"./theme-DHH34upk.js";/* empty css               */const i=x.div`
  color: ${t.menu.heading.text};
  font-size: 20px;
  flex-shrink: 0;
`,s=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  gap: 8px;
`,r=x.div`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA8CAMAAABy8zuxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFIB8gISAhOTg5JCMkJSQlKCcoKSgpLCssLSwtODc4NzY3NjU1NTM0NDIyMjAxMS8vLy4vLSsrKigoKScnKygoKSYmLiwtLCoqWf/lzAAAAERJREFUeJzt0UkKgDAUBNGuxBgEEe9/UhGnfFtw7d5F8Q5QSNB6yOJoFLG9VLH+fAaTTDadKaY3NRjuCbOUCJaRM5jYLwWmND8cccluAAAAAElFTkSuQmCC");  
  background-repeat: repeat; 
  background-size: 4px 60px; 
  width: 100%;
  height: 90%;
`,d=x.button`
  ${o}
  
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Box Shadow to create the Out effect without the outBorder */
  box-shadow: inset 3px 0px 3px -4px #221b18,inset -8px 0px 3px -8px #221b18,inset 0px 9px 2px -8px #e3e3e3,inset 0px 2px 2px 0px #282828,inset 0px -9px 3px -9px #221b18;

  &:hover {
    background-color: ${t.secondary.main};
    color: ${t.secondary.contrastText};
    text-decoration: none;
    box-shadow: inset 8px 0px 4px -8px #fff,
                inset -8px 0px 4px -8px #fff,
                inset 0px 9px 4px -8px #fff,
                
                inset 0px -9px 2px -8px #000,
                inset 0px -9px 2px -8px #432400,
                0px 0px 4px 0px #000,
                inset 0px 0px 4px 2px #f9b44b;
    filter: drop-shadow(0 0 3px ${t.secondary.light})
  }
  &:active {
    background-color: ${t.secondary.light};
    color: ${t.secondary.contrastText};
    text-decoration: none;
    box-shadow: inset 8px 0px 4px -8px #000,
                inset -8px 0px 4px -8px #000,
                inset 0px 9px 2px -8px #000,
                inset 0px 8px 4px -8px #000,
                inset 0px -8px 4px -8px #fff,
                inset 0px -9px 2px -8px var(--color-button-glow-dark) /* #432400 */,
                0px 0px 4px 0px #000,
                inset 0px 0px 4px 2px var(--color-glow-shadow) /* #f9b44b */;
    filter: none;
  }
  &:active > svg {
    transform: translate(0px, 1px);
  }
`,a=x.div`
  background-color: ${t.menu.insetBackground};
  padding: 8px;
  ${o}
  min-height: 20px;
`,c=x.div`

  background-color: ${t.menu.background};
  color: ${t.menu.text};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* box-shadow: ${n.grayOutShadow} */
  ${p}

`,g=()=>e.jsx("div",{className:"flex flex-col gap-2",children:e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx(i,{children:"Settings"}),e.jsx(r,{}),e.jsx(d,{children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-search-icon lucide-search w-4 h-4",children:[e.jsx("path",{d:"m21 21-4.34-4.34"}),e.jsx("circle",{cx:"11",cy:"11",r:"8"})]})})]}),e.jsx(a,{children:"Content"})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as WindowStory};
