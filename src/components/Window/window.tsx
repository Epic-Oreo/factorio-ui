import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { type ClassValue } from "clsx";
import styled from "@emotion/styled";
import { glow, inBorder, outBorder, palette, shadows } from "@/theme";

const WindowHeaderText = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: ClassValue;
  props?: ComponentProps<"div">;
}) => {
  return (
    <div className={cn("text-accent-heading text-xl shrink-0", className)}  {...props}>
      {children}
    </div>
  );
};

const WindowHeader = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: ClassValue;
  props?: ComponentProps<"div">;
}) => {
  return (
    <div className={cn("flex justify-between items-center h-7 gap-2", className)} {...props}>
      {children}
    </div>
  )
};


const WindowDrag = styled.div<{}>`
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA8CAMAAABy8zuxAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhQTFRFIB8gISAhOTg5JCMkJSQlKCcoKSgpLCssLSwtODc4NzY3NjU1NTM0NDIyMjAxMS8vLy4vLSsrKigoKScnKygoKSYmLiwtLCoqWf/lzAAAAERJREFUeJzt0UkKgDAUBNGuxBgEEe9/UhGnfFtw7d5F8Q5QSNB6yOJoFLG9VLH+fAaTTDadKaY3NRjuCbOUCJaRM5jYLwWmND8cccluAAAAAElFTkSuQmCC");  
  background-repeat: repeat; 
  background-size: 4px 60px; 
  width: 100%;
  height: 90%;
`

const WindowHeaderButton = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: ClassValue;
  props?: ComponentProps<"div">;
}) => {
  return (
    <div
      {...props}
      className={cn("h-7 w-7 border-inset shrink-0", className)}
    >
      <button className="border-outset w-full h-full hover:bg-none hover:glow-button active:glow-button-inset" >
        {children}
      </button>

    </div>
  );
};

export const WindowHeaderButton2 = styled.button`
  ${inBorder}
  
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  
  /* Box Shadow to create the Out effect without the outBorder */
  box-shadow: inset 3px 0px 3px -4px #221b18,inset -8px 0px 3px -8px #221b18,inset 0px 9px 2px -8px #e3e3e3,inset 0px 2px 2px 0px #282828,inset 0px -9px 3px -9px #221b18;

  &:hover {
    background-color: ${palette.secondary.main};
    color: ${palette.secondary.contrastText};
    text-decoration: none;
    box-shadow: ${shadows.orangeOutShadow};
    filter: ${glow.orange};
  }
  &:active {
    background-color: ${palette.secondary.light};
    color: ${palette.secondary.contrastText};
    text-decoration: none;
    box-shadow: inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 9px 2px -8px #fff,inset 0px 8px 4px -8px #000,inset 0px -8px 4px -8px #000,inset 0px -9px 2px -8px var(--color-button-glow-dark) /* #432400 */,0px 0px 4px 0px #000,inset 0px 0px 4px 2px var(--color-glow-shadow) /* #f9b44b */;
    filter: none;
  }
`


const WindowContent = styled.div<{}>`
  background-color: ${palette.menu.insetBackground};
  padding: 8px;
  ${inBorder}
  min-height: 20px;
`;


const Window = styled.div<{}>`

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