import { DefaultTheme} from "styled-components"

const hexOpacityTable = {
  0: "00",
  5: "0d",
  10: "1a",
  15: "26",
  20: "33",
  25: "40",
  30: "4d",
  35: "59",
  40: "66",
  45: "73",
  50: "80",
  55: "8c",
  60: "99",
  65: "a3",
  70: "b3",
  75: "bf",
  80: "cc",
  85: "d9",
  90: "e6",
  95: "f2",
  100: "ff"
};


export const getColor =(theme: DefaultTheme, color: string, alpha?: number) : string=> {
  let themeHexColor = theme[color as keyof (typeof theme)];
  themeHexColor = alpha !== undefined? themeHexColor + hexOpacityTable[alpha as keyof typeof hexOpacityTable]: themeHexColor
  return  themeHexColor || color;
}