import { elementResetStyle, palette } from "@/theme";
import styled from "@emotion/styled";



export const Input = styled.input`
  ${elementResetStyle.buttonAndInput};


  background-color: ${palette.primary.main};
  border-radius: 4px;
  box-shadow: inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px -10px 2px -8px #e3e3e3,inset 0px -10px 2px -8px #282828,inset 0px 9px 1px -8px #000, inset 0px 9px 3px -8px #000;
  height: 32px;
  padding: 3px 10px;
  font-weight: 500;

  &:focus {
    background-color: #ecdbb8;
    box-shadow: inset 8px 0px 4px -8px #e39827,inset -8px 0px 4px -8px #e39827,inset 0px -10px 2px -8px #e3e3e3,inset 0px 9px 1px -8px #000;


    /* box-shadow: */
  }
`;