import{p as x,s as t,o,a as p,i as e}from"./theme-EUTZoldf.js";const a=p.div`
  color: ${x.menu.heading.text};
  font-size: 20px;
  flex-shrink: 0;
`,i=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  gap: 8px;
`,s=p.div`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA8CAMAAABy8zuxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFIB8gISAhOTg5JCMkJSQlKCcoKSgpLCssLSwtODc4NzY3NjU1NTM0NDIyMjAxMS8vLy4vLSsrKigoKScnKygoKSYmLiwtLCoqWf/lzAAAAERJREFUeJzt0UkKgDAUBNGuxBgEEe9/UhGnfFtw7d5F8Q5QSNB6yOJoFLG9VLH+fAaTTDadKaY3NRjuCbOUCJaRM5jYLwWmND8cccluAAAAAElFTkSuQmCC");  
  background-repeat: repeat; 
  background-size: 4px 60px; 
  width: 100%;
  height: 90%;
`,r=p.button`
  ${e}
  
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
    background-color: ${x.secondary.main};
    color: ${x.secondary.contrastText};
    text-decoration: none;
    box-shadow: inset 8px 0px 4px -8px #fff,
                inset -8px 0px 4px -8px #fff,
                inset 0px 9px 4px -8px #fff,
                
                inset 0px -9px 2px -8px #000,
                inset 0px -9px 2px -8px #432400,
                0px 0px 4px 0px #000,
                inset 0px 0px 4px 2px #f9b44b;
    filter: drop-shadow(0 0 3px ${x.secondary.light})
  }
  &:active {
    background-color: ${x.secondary.light};
    color: ${x.secondary.contrastText};
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
`,d=p.div`
  background-color: ${x.menu.insetBackground};
  padding: 8px;
  ${e}
  min-height: 20px;
`,c=p.div`

  background-color: ${x.menu.background};
  color: ${x.menu.text};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* box-shadow: ${t.grayOutShadow} */
  ${o}

`;export{c as W,i as a,a as b,s as c,r as d,d as e};
