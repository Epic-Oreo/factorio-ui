import styled from "@emotion/styled";
import { elementResetStyle, htmlResetStyle, inBorder, outBorder, palette, shadows } from "@/theme";


const WindowHeaderText = styled.div`
  ${htmlResetStyle}

  color: ${palette.menu.heading.text};
  font-size: 20px;
  flex-shrink: 0;
`;  


const WindowHeader = styled.div`
  ${htmlResetStyle}
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  gap: 8px;
`

const WindowDrag = styled.div<{}>`
  ${htmlResetStyle}

  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA8CAMAAABy8zuxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFIB8gISAhOTg5JCMkJSQlKCcoKSgpLCssLSwtODc4NzY3NjU1NTM0NDIyMjAxMS8vLy4vLSsrKigoKScnKygoKSYmLiwtLCoqWf/lzAAAAERJREFUeJzt0UkKgDAUBNGuxBgEEe9/UhGnfFtw7d5F8Q5QSNB6yOJoFLG9VLH+fAaTTDadKaY3NRjuCbOUCJaRM5jYLwWmND8cccluAAAAAElFTkSuQmCC");  
  background-repeat: repeat; 
  background-size: 4px 60px; 
  width: 100%;
  height: 90%;
`

const WindowHeaderButton = styled.button`
  ${elementResetStyle.buttonAndInput}
  ${inBorder}
  
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
    background-color: ${palette.secondary.main};
    color: ${palette.secondary.contrastText};
    text-decoration: none;
    box-shadow: inset 8px 0px 4px -8px #fff,
                inset -8px 0px 4px -8px #fff,
                inset 0px 9px 4px -8px #fff,
                
                inset 0px -9px 2px -8px #000,
                inset 0px -9px 2px -8px #432400,
                0px 0px 4px 0px #000,
                inset 0px 0px 4px 2px #f9b44b;
    filter: drop-shadow(0 0 3px ${palette.secondary.light})
  }
  &:active {
    background-color: ${palette.secondary.light};
    color: ${palette.secondary.contrastText};
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
`

const WindowContent = styled.div<{}>`
  ${htmlResetStyle}
  background-color: ${palette.menu.insetBackground};
  padding: 8px;
  ${inBorder}
  min-height: 20px;
`;

const Window = styled.div<{}>`
  ${htmlResetStyle}
  background-color: ${palette.menu.background};
  color: ${palette.menu.text};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* box-shadow: ${shadows.grayOutShadow} */
  ${outBorder}

`

export {Window, WindowContent, WindowDrag, WindowHeader, WindowHeaderText, WindowHeaderButton}