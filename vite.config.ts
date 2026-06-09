import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

function handleModuleDirectivesPlugin() {
  return {
    name: "handle-module-directives-plugin",
    transform(code, id) {
      if (id.includes("@vkontakte/icons")) {
        code = code.replace(/"use-client";?/g, "");
      }
      return { code };
    },
  };
}

export default defineConfig({
  server: {
    port: 5000,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },

  base: "./",

  plugins: [
    react({
      babel: {
        plugins: [
          [
            "styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
        babelrc: false,
        configFile: false,
      },
    }),
    handleModuleDirectivesPlugin(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],

  build: {
    outDir: "dist",
  },

  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      constants: `${__dirname}/src/constants/`,
      components: `${__dirname}/src/components/`,
      styles: `${__dirname}/src/styles/`,
      types: `${__dirname}/src/types/`,
      utils: `${__dirname}/src/utils/`,
      pages: `${__dirname}/src/pages/`,
      store: `${__dirname}/src/store/`,
      openapi: `${__dirname}/src/openapi/`,
      api: `${__dirname}/src/api/`,
    },
  },
  define: {
    "process.env": process.env,
    global: "window",
  },
});
