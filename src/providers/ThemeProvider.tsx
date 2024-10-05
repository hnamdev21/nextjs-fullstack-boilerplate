import { ConfigProvider } from "antd";
import React from "react";

import { themeConfig } from "@/config/theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

export default ThemeProvider;
