"use client";

import { StyleProvider } from "@ant-design/cssinjs";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import ThemeProvider from "./ThemeProvider";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <StoreProvider> */}
      <ThemeProvider>
        <AntdRegistry>
          <StyleProvider>{children}</StyleProvider>
        </AntdRegistry>
      </ThemeProvider>
      {/* </StoreProvider> */}
    </QueryClientProvider>
  );
};

export default Providers;
