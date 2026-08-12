
const black = "#000";
const white = "#fff";

const shadows = {
  grayOutShadow: "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 10px 2px -8px #e3e3e3,inset 0px 10px 2px -8px #282828,inset 0px -9px 2px -8px #000,0px 0px 4px 0px #000",
  orangeOutShadow: "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 9px 2px -8px #fff,inset 0px 8px 4px -8px #000,inset 0px -8px 4px -8px #000,inset 0px -9px 2px -8px #432400,0px 0px 4px 0px #000,inset 0px 0px 4px 2px #f9b44b",
  orangeInShadow: "inset 0px 10px 2px -8px #000,inset 0px 9px 2px -8px #000,inset 8px 0px 4px -8px #563a10,inset 8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset 0px 9px 2px -8px #563a10,inset 0px -9px 2px -8px #563a10,inset 0px -8.5px 0px -8px #563a10,0px 0px 4px 0px #000",

  greenOutShadow: "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,0px 0px 4px 0px #000",
  greenInShadow: "inset 0px 10px 2px -8px #000,inset 0px 9px 2px -8px #000,inset 8px 0px 4px -8px #3f5024,inset 8px 0px 4px -8px #3f5024,inset -8px 0px 4px -8px #3f5024,inset -8px 0px 4px -8px #3f5024,inset 0px 9px 2px -8px #3f5024,inset 0px -9px 2px -8px #3f5024,inset 0px -8.5px 0px -8px #3f5024,0px 0px 4px 0px #000"
}

const glow = {
  orange: "drop-shadow(0 0 2px #f9b44b)",
  green: "brightness(1.3) drop-shadow(0 0 2px #34be3c)",
}

const palette = {
  common: {
    black,
    white,
  },

  menu: {
    background: "#313031",
    insetBackground: "#414040",
    text: white,
    heading: {
      text: "#ffe6c0"
    }
  },

  primary: {
    main: '#8e8e8e',
    contrastText: black,
  },
  secondary: {
    main: "#e39827",
    light: "#f1be64",
    contrastText: black
  },
  success: {
    main: "#5eb663",
    light: "#cfdf93",
    contrastText: black
  },
  error: {
    main: '#A51C30',
    light: '#A7333F',
    contrastText: white,
  },
};


export {
  shadows,
  glow,
  palette,
}