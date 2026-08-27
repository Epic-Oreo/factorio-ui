import{h as p,p as e,s as o,o as n,a as x,e as a,i as t}from"./theme-BV7RT_cm.js";const i=x.div`
  ${p}

  color: ${e.menu.heading.text};
  font-size: 20px;
  flex-shrink: 0;
`,r=x.div`
  ${p}
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  gap: 8px;
`,d=x.div`
  ${p}

  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA8CAMAAABy8zuxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFIB8gISAhOTg5JCMkJSQlKCcoKSgpLCssLSwtODc4NzY3NjU1NTM0NDIyMjAxMS8vLy4vLSsrKigoKScnKygoKSYmLiwtLCoqWf/lzAAAAERJREFUeJzt0UkKgDAUBNGuxBgEEe9/UhGnfFtw7d5F8Q5QSNB6yOJoFLG9VLH+fAaTTDadKaY3NRjuCbOUCJaRM5jYLwWmND8cccluAAAAAElFTkSuQmCC");  
  background-repeat: repeat; 
  background-size: 4px 60px; 
  width: 100%;
  height: 90%;
`,c=x.button`
  ${a.buttonAndInput}
  ${t}
  
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
    background-color: ${e.secondary.main};
    color: ${e.secondary.contrastText};
    text-decoration: none;
    box-shadow: inset 8px 0px 4px -8px #fff,
                inset -8px 0px 4px -8px #fff,
                inset 0px 9px 4px -8px #fff,
                
                inset 0px -9px 2px -8px #000,
                inset 0px -9px 2px -8px #432400,
                0px 0px 4px 0px #000,
                inset 0px 0px 4px 2px #f9b44b;
    filter: drop-shadow(0 0 3px ${e.secondary.light})
  }
  &:active {
    background-color: ${e.secondary.light};
    color: ${e.secondary.contrastText};
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
`,A=x.div`
  ${p}
  background-color: ${e.menu.insetBackground};
  padding: 8px;
  ${t}
  min-height: 20px;
`,l=x.div`
  ${p}
  background-color: ${e.menu.background};
  color: ${e.menu.text};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* box-shadow: ${o.grayOutShadow} */
  ${n}

`;export{l as W,r as a,i as b,d as c,c as d,A as e};
