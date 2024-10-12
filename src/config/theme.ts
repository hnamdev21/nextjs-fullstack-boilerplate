import { theme, ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    fontFamily: "Poppins",
    colorText: "#1b1b1a",
    colorTextDescription: "#9f9f9f",
    borderRadius: 10,
    colorPrimary: "#b88e2f",
    colorBgBase: "#f5f7fa",
  },
  components: {
    Button: {
      colorPrimary: "#b88e2f",
      colorPrimaryHover: "#dfa41a",
      colorPrimaryText: "#f5f7fa",

      colorTextSecondary: "#1b1b1a",
      colorFillSecondary: "#f9f1e7",
    },
  },
};
