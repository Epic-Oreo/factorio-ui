import { ComponentProps, type ReactNode } from "react";

import styled from "@emotion/styled";
import { glow, palette, shadows } from "@/theme";

type ColorVariant = "gray" | "green" | "red";

const greenArrowImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAABACAMAAADCiszgAAABDlBMVEUAAAASMBURLxJJgUkAKxNKiU1Ih01msGpMjVFNjlFLik9ToFdLik9Lik9Lik5Yq1wIHgoOKhGAyoVNjVFipmY3cDpQkVVrsHB2vHlXmFyK1Y5/yoRvuHNcs2E7eT8bQB1doGFAe0IJIQxNjFJDgkhjrGgGHgxetmNcs2FasF9RllVVpllXqlxRnlVQm1RYrV0cQh5SoVcUNRdQk1VLllA8e0AXOhpQkFM0bDcqXC4jTiVRmFVFiUkIHgpTpFhNmVJEh0hNj1EtYTCI1I16w35utnJXn1tNk1FJkk1HjUs/fkI3czsyajYpWSsZPhxrsW9ZnV1XmVo6dz41bzgmUygkUCYiTSUTMRUPKxEOKRFdNbmJAAAAJ3RSTlMAVisODG41Bvb75Zfc1dGXlwb98/7y8fDS0JeXl5eXl25sVjU1MSucyRWzAAABMElEQVQ4y23M51LCUBiE4QWRKFFB7L37EUJTithI6FXs7f5vxDgok3Oy+/OdZxbGdrOZ3DyDOmMn2WptHM5odbfdflzdOtGq2ek8Pa/Pqtg0nVK3eLUUVWrcvsil08UVFaeszG/WsKQsT+tYJJW3s7caFpl8FOf8WKZ40YeFYqFYKBaKhWLx44V/LBQLxaLg+T8sFAvFouFYdFIZFoqFYqFYArjuYQngeuwUEsB19wii4lqu2x+s6dXO9QavDa1atuMOG2+Bh1658VFQq5XJutX3cQjaQal8XbgMQ6N31ZtKKAJKQSkoBaWgFJSCUlAKSkEpKAWloBSUglJQCkpBKSgFpdiz8rUARTxec9yRRmGYTv/lQaMw9ocjL6oUywfjyufXdxhqTdx7O46QmjhX4w9Fq5Q/daB+bwAAAABJRU5ErkJggg==";

interface ButtonStyleType {
  text: string;
  background: string;
  shadow: string;
  hover: {
    background?: string;
    filter?: string;
    boxShadow?: string;
  };
  active: {
    background: string;
    boxShadow: string;
  };
}

const buttons = {
  gray: {
    text: palette.common.black,
    background: palette.primary.main,
    shadow: shadows.grayOutShadow,
    hover: {
      background: palette.secondary.main,
      filter: glow.orange,
      boxShadow: shadows.orangeOutShadow,
    },
    active: {
      background: palette.secondary.light,
      boxShadow: shadows.orangeInShadow,
    },
  },
  green: {
    text: palette.common.black,
    background: palette.success.main,
    shadow: shadows.greenOutShadow,
    hover: {
      filter: glow.green,
    },
    active: {
      background: palette.success.light,
      boxShadow: shadows.greenInShadow,
    },
  },
  red: {
    text: palette.common.black,
    background: palette.error.main,
    shadow: shadows.redOutShadow,
    hover: {
      background: palette.error.light,
      filter: glow.red,
      boxShadow: shadows.redOutShadowHover,
    },
    active: {
      background: palette.error.lighter,
      boxShadow: shadows.redInShadow,
    },
  },
} as Record<string, ButtonStyleType>;

export const Button = ({
  children,
  className,
  variant = "gray",
  arrow = false,
  ...props
}: {
  children?: ReactNode;
  variant?: ColorVariant;
  arrow?: boolean;
  className?: string;
  props?: ComponentProps<"button">;
}) => {
  return (
    <ButtonStyled
      className={className}
      {...props}
      $variant={variant}
      $arrow={arrow}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{
  $variant: ColorVariant;
  $arrow: boolean;
}>`
  padding: 0px 12px;
  height: 36px;
  font-weight: 600;
  display: inline-block;
  vertical-align: baseline;
  min-width: 128px;
  font-size: 16px;
  color: ${(props) => buttons[props.$variant].text};
  background-color: ${(props) => buttons[props.$variant].background};
  /* box-shadow: ${(props) => buttons[props.$variant].shadow}; */
  box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);


  position: relative;

  margin-right: ${(props)=>props.$arrow && "12px"};


  &:hover {
    background-color: ${(props) => buttons[props.$variant].hover.background};
    box-shadow: ${(props) => buttons[props.$variant].hover.boxShadow};
    filter: ${(props) => buttons[props.$variant].hover.filter};
  }

  &:active {
    background-color: ${(props) => buttons[props.$variant].active.background};
    box-shadow: ${(props) => buttons[props.$variant].active.boxShadow};
    padding-top: 2px;
    filter: none;
  }

  &::after {
    content: "";
    display: ${(props)=>!props.$arrow && "none"};
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: ${(props) => buttons[props.$variant].background};
    top: 50%;
    /* transform: translate(50%, -50%) rotate(45deg); */
    transform: translate(50%, -50%) rotate(45deg) skew(12deg, 12deg);
    right: 0px;
    z-index: -3;
    /* box-shadow: ${(props) => buttons[props.$variant].shadow}; */
    box-shadow: inset -8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,1px -1px 4px 0px #000;
  
  }
`;
