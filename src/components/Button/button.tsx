import { ComponentProps, type ReactNode } from "react";

import styled from "@emotion/styled";
import { glow, palette, shadows } from "@/theme";

type ColorVariant = "gray" | "green" | "red";

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

  arrow: {
    shadow: string;
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

    arrow: {
      shadow: "box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);",
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

    arrow: {
      shadow: "box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);",
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

    arrow: {
      shadow: "",
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
  box-shadow: ${(props) => buttons[props.$variant].shadow};
  ${(props)=>props.$arrow && `
    box-shadow: inset 8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,-4px 0px 4px 0px rgba(0,0,0,0.5);
  `}

  position: relative;

  margin-right: ${(props) => props.$arrow && "12px"};

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
    display: ${(props) => !props.$arrow && "none"};
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
    box-shadow:
      inset -8px 0px 4px -8px #000,
      inset 0px 10px 2px -8px #95df99,
      inset 0px 10px 2px -8px #163218,
      1px -1px 4px 0px #000;
  }
`;
