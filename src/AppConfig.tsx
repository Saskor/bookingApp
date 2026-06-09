import vkBridge, { parseURLSearchParamsForGetLaunchParams } from "@vkontakte/vk-bridge";
import { useAdaptivity, useAppearance, useInsets } from "@vkontakte/vk-bridge-react";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";

import { ThemeProvider } from "styled-components";

import { transformVKBridgeAdaptivity } from "./utils";
import { router } from "./routes";
import { App } from "./App";
import ResetStyles from "./styles/reset";
import theme from "./styles/theme";
import "@vkontakte/vkui/dist/vkui.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { client } from "openapi/requests/services.gen";
import { api } from "api/axios";

client.setConfig({
  baseURL: "/api/v1",
  axios: api,
  throwOnError: true, // If you want to handle errors on `onError` callback of `useQuery` and `useMutation`, set this to `true`
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const AppConfig = () => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);

  return (
    <ConfigProvider
      colorScheme={vkBridgeAppearance}
      platform={vk_platform === "desktop_web" ? "vkcom" : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot scroll="contain" mode="full" safeAreaInsets={vkBridgeInsets}>
          <RouterProvider router={router}>
            <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <ResetStyles />
                <App />
              </QueryClientProvider>
            </ThemeProvider>
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
