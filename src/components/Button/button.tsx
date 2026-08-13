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
  variant = "gray",
  ...props
}: {
  children?: ReactNode;
  variant?: ColorVariant;
  props?: ComponentProps<"button">;
}) => {
  return (
    <ButtonStyled {...props} $variant={variant}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{
  $variant: ColorVariant;
}>`
  padding: 10px 12px 10px 12px;
  height: 36px;
  font-weight: 600;
  display: inline-block;
  vertical-align: baseline;
  min-width: 128px;
  font-size: 16px;
  color: ${(props) => buttons[props.$variant].text};
  background-color: ${(props) => buttons[props.$variant].background};
  box-shadow: ${(props) => buttons[props.$variant].shadow};
  &:hover {
    background-color: ${(props) => buttons[props.$variant].hover.background};
    box-shadow: ${(props) => buttons[props.$variant].hover.boxShadow};
    filter: ${(props) => buttons[props.$variant].hover.filter};
  }
  &:active {
    background-color: ${(props) => buttons[props.$variant].active.background};
    box-shadow: ${(props) => buttons[props.$variant].active.boxShadow};
    filter: none;
  }
`;
