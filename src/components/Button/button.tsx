import { type ComponentProps, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import { type ClassValue } from "clsx";

import styled from '@emotion/styled';
import { glow, palette, shadows } from "@/theme";

type ColorVariant = "gray" | "green" | "red";


// const Button = ({
//   children,
//   className,
//   variant="default",
//   ...props
// }: {
//   children?: ReactNode;
//   className?: ClassValue;
//   variant?: ColorVariant
//   props?: ComponentProps<"button">;
// }) => {
//   return (
//     <button
//       className=""
//     >
//       {children}
//     </button>
//   );
// };

// export { Button };


const buttons =  {
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
    }
  },
  green: {
    text: palette.common.black,
    background: palette.success.main,
    shadow: shadows.greenOutShadow,
    hover: {
      // background: palette.success.main,
      filter: glow.green,
      // boxShadow: shadows.greenOutShadow,
    },
    active: {
      background: palette.success.light,
      boxShadow: shadows.greenInShadow,
    }
  }
}


export const Button = ({
  variant = "gray",
  children
}: {
  variant?: ColorVariant
  children?: ReactNode;
}) => (
  <ButtonStyled $variant={variant}>
    {children}
  </ButtonStyled>
)


const ButtonStyled = styled.button<{
  $variant: ColorVariant
}>`
  padding: 8px;
  color: ${(props)=>buttons[props.$variant].text};
  background-color: ${(props)=>buttons[props.$variant].background};
  box-shadow: ${(props)=>buttons[props.$variant].shadow};
  &:hover {
    background-color: ${(props)=>buttons[props.$variant].hover.background};
    box-shadow: ${(props)=>buttons[props.$variant].hover.boxShadow};
    filter: ${(props)=>buttons[props.$variant].hover.filter};
  }
  &:active {
    background-color: ${(props)=>buttons[props.$variant].active.background};
    box-shadow: ${(props)=>buttons[props.$variant].active.boxShadow};
    filter: none;
  }
`;