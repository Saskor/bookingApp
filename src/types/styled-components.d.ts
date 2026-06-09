import theme from "styles/theme";
import {} from "react";
import type { CSSProp } from "styled-components";

type ITheme = typeof theme;

declare module "styled-components" {
  export interface IDefaultTheme extends ITheme {}
}

declare module "react" {
  interface ITimeSlotAttributes {
    css?: CSSProp | undefined;
  }
}
