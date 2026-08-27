import { css } from "@emotion/react";

const black = "#000";
const white = "#fff";

const shadows = {
  grayOutShadow:
    "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 10px 2px -8px #e3e3e3,inset 0px 10px 2px -8px #282828,inset 0px -9px 2px -8px #000,0px 0px 4px 0px #000",

  orangeOutShadow:
    "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 9px 2px -8px #fff,inset 0px 8px 4px -8px #000,inset 0px -8px 4px -8px #000,inset 0px -9px 2px -8px #432400,0px 0px 4px 0px #000,inset 0px 0px 4px 2px #f9b44b",
  orangeInShadow:
    "inset 0px 10px 2px -8px #000,inset 0px 9px 2px -8px #000,inset 8px 0px 4px -8px #563a10,inset 8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset -8px 0px 4px -8px #563a10,inset 0px 9px 2px -8px #563a10,inset 0px -9px 2px -8px #a0a0a0,inset 0px -8.5px 0px -8px #563a10,0px 0px 4px 0px #000",

  greenOutShadow:
    "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 10px 2px -8px #95df99,inset 0px 10px 2px -8px #163218,inset 0px -9px 2px -8px #000,0px 0px 4px 0px #000",
  greenInShadow:
    "inset 0px 10px 2px -8px #000,inset 0px 9px 2px -8px #000,inset 8px 0px 4px -8px #3f5024,inset 8px 0px 4px -8px #3f5024,inset -8px 0px 4px -8px #3f5024,inset -8px 0px 4px -8px #3f5024,inset 0px 9px 2px -8px #3f5024,inset 0px -9px 2px -8px #3f5024,inset 0px -8.5px 0px -8px #3f5024,0px 0px 4px 0px #000",

  redOutShadow:
    "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 10px 2px -8px #fda1a1,inset 0px 10px 2px -8px #8b0101,inset 0px -9px 2px -8px #000,0px 0px 4px 0px #000",
  redOutShadowHover:
    "inset 8px 0px 4px -8px #000,inset -8px 0px 4px -8px #000,inset 0px 9px 2px -8px #f8eaea,inset 0px 8px 4px -8px #000,inset 0px -8px 4px -8px #000,inset 0px -9px 2px -8px #432400,0px 0px 4px 0px #000,inset 0px 0px 4px 2px #c35353",
  redInShadow:
    "inset 0px 10px 2px -8px #000,inset 0px 9px 2px -8px #000,inset 8px 0px 4px -8px #642323,inset 8px 0px 4px -8px #642323,inset -8px 0px 4px -8px #642323,inset -8px 0px 4px -8px #642323,inset 0px 9px 2px -8px #642323,inset 0px -9px 2px -8px #642323,inset 0px -8.5px 0px -8px #642323,0px 0px 4px 0px #000",
};

const outBorder = css`
  border-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAMAAAAMs7fIAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9bpSIVETuICAasulgQFXHUKhShQqgVWnUweekfNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfE0clJ0UVKvC8ptIjxwuN9nHfP4b37AH+txFSzbRxQNctIxmNCOrMqBF/hwyB6MIohiZn6nCgm4Flf99RNdRflWd59f1aXkjUZ4BOIZ5luWMQbxNObls55nzjMCpJCfE48ZtAFiR+5Lrv8xjnvsJ9nho1Ucp44TCzkW1huYVYwVOIp4oiiapTvT7uscN7irJYqrHFP/sJQVltZ5jqtAcSxiCWIECCjgiJKsBClXSPFRJLOYx7+fscvkksmVxGMHAsoQ4Xk+MH/4PdszdzkhJsUigHtL7b9MQwEd4F61ba/j227fgIEnoErrekv14CZT9KrTS1yBHRvAxfXTU3eAy53gL4nXTIkRwrQ8udywPsZfVMG6L0FOtfcuTXOcfoApGhWiRvg4BAYyVP2use7O1rn9m9PY34/opByuh0Yaa8AAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmAgIQJSQU1l6SAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAALpQTFRFZGJhY2BgYF1cXVpZXFpZXFpYW1hXWlVSV1JQT01MT0xLT0pJTUdETUZDSEJBPDk4PDg3PzYzPzYxOzc2OzYzNi8sMTAxMTAwMS8wMS8vMS4vMC4uMC0tMCwsMCwrMCsqLyooMSYhLCclLCYlLiUhLCUkKCEfJSIhJyEeJSEhJyAdJCEfJCAeJx0aIx0bIxwZIxsYIxoXIBoXHhYUFQ8NEw4NDw4NEQ0MEA0MDw0NDAkHBQQDAwICAAAAeCdZ2wAAAAFiS0dECfHZpewAAACCSURBVHhebY9LDsMwCAXh+RdUiCPl/lc1EXa8aNWRjR6zAWANTBtGM5RSS8kpyDOjR62LMB16N5HXiLRbkeulaqarXDXDx/CxiQY03H25GQhORL6JDPrlj4mFeTPXJkREMAOBgdVPN98hqvp5vxwAJ9HTemCnSmLEgbktcpwMfM8HHrGVLy5TM6g2AAAAAElFTkSuQmCC")
    8/4px repeat;
  box-shadow: none;
`;

const inBorder = css`
  border-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kTtIw1AUhv+miiIVBzuICEaoThbEF45ahSJUCLVCqw4mN31Bk4YkxcVRcC04+FisOrg46+rgKgiCDxBHJydFFynx3KTQIsYDl/vx3/P/3HsuINRKTLPaxgBNt81kPCamM6tixysCGEQIQ5iSmWXMSVICvvV1T91Ud1Ge5d/3Z3WrWYsBAZF4lhmmTbxBPL1pG5z3icOsIKvE58SjJl2Q+JHrisdvnPMuCzwzbKaS88RhYjHfwkoLs4KpEU8SR1RNp3wh7bHKeYuzVqqwxj35C0NZfWWZ67QGEMciliBBhIIKiijBRpR2nRQLSTqP+fj7Xb9ELoVcRTByLKAMDbLrB/+D37O1chPjXlIoBrS/OM7HMNCxC9SrjvN97Dj1EyD4DFzpTX+5Bsx8kl5tapEjoGcbuLhuasoecLkD9D0Zsim7UpCWkMsB72f0TRmg9xboWvPm1jjH6QOQolklboCDQ2AkT9nrPu/ubJ3bvz2N+f0As9tywbHNoQUAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfmAgMLNBNXffN5AAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAQtQTFRFAAAAAAAAMTAAYQABMQABAAAA/9y6AAAAAAAA/7F+SjAAMRgAMQABGQABAAAA/9nH/9m0MQ8AIQ8AAAAAAAAA/8GqGQsAAAAAAAAAAAAAOxwAMRMAJwkAFAkAMQ8AKQ8AEQABAAAAAAAAAAAA/+/pBwYA//fq//HkAAAAJQsAAAAAIQoABQQA//nwIgkADwQAAAAA//XsAAAAAAAAAAAAHQsA//rzAAAAAAAAAAAACgIAAAAAAAAADAUABgIAAAAAAAAAAAAAGQcADwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAcAAAAACgMAAAAAAAAAAAAACgIAAAAAAAAAAwIAAAAAdNLDhQAAAFh0Uk5TAAIFBQUFBwgJCgoKCwsMDg4QEBASFRUVGBkaGhoaHx8gICEiIyQlJiYqLi8vMjQ0NDY2Nzo+P0BBTE5PUVNTVFpcXmNjZG9wcXJzdHh5fYCChIuMl5utu+r6V5gAAAABYktHRFmasvQYAAABUklEQVR4nLXUyU7DMBAG4PHEaewsbWihUg9IIPH+T4QEEodKhZa0Wew0jo2SLlD74BM+WZpP8nj5TcA3yGWCdkXfCsTIFq3WvwIRYGqLA8BoyAg4jx9t8dEIMZBBUJ7P5itbrHf7QqhRIE4XD0tmC7n53B60HgSF+er+jtpCfX+td6CAAPIoW2YpM1pp3RsAEiBSJLIqN2Ur9FVESnbKnAShIaOtLaiQUvdD84gBMsaVLUhTdY3uBhFiHKaxsYWu5EEK3QMEyNmUpWgLVddV0XVHgEkY5mmSUFscK1FUoh1WiXia83RiC1nX+7LqFQAN0myWJOw/hL8P/1785+E/U/+9+O/W/z7cKF0F0CzOg7UDnt9WfdGUahRJ9v7iCKpen8r6JKKFigNHGNI3dNuqMVEkUtwRxAjaGn1KZUJg4nYKRzD1n2Q79egcbeJULgPP38MP9ZBIMci5WIsAAAAASUVORK5CYII=")
    16/8px repeat;
  border-image-outset: 4px;
  box-shadow: none;
`;

const glow = {
  orange: "drop-shadow(0 0 2px #f9b44b)",
  green: "brightness(1.3) drop-shadow(0 0 2px #34be3c)",
  red: "drop-shadow(0 0 2px #c35353)",
};

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
      text: "#ffe6c0",
    },
  },

  primary: {
    main: "#8e8e8e",
    contrastText: black,
  },
  secondary: {
    main: "#e39827",
    light: "#e9c072",
    contrastText: black,
  },
  success: {
    main: "#5eb663",
    light: "#cfdf93",
    contrastText: black,
  },
  error: {
    main: "#fe5a5a",
    light: "#ff9b9b",
    lighter: "#fca8a8",
    contrastText: black,
  },
};

const htmlResetStyle = css`
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;

  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    box-sizing: border-box; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 2 */
    border: 0 solid; /* 3 */
  }
`;

const elementResetStyle = {
  table: css`
    ${htmlResetStyle};
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  `,
  buttonAndInput: css`
    ${htmlResetStyle};
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
    ::placeholder {
      opacity: 1;
    }
  `,
};

export { shadows, glow, palette, outBorder, inBorder, htmlResetStyle, elementResetStyle };
