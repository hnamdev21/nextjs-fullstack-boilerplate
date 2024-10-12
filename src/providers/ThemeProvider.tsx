import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import viVN from "antd/locale/vi_VN";
import React from "react";
import { useLocale } from "use-intl";

import { themeConfig } from "@/config/theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const localeIntl = useLocale();
  const locale = localeIntl === "en" ? enUS : viVN;

  return (
    <ConfigProvider theme={themeConfig} locale={locale}>
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
