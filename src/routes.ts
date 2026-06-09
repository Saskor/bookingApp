import { createHashRouter, type RouteWithoutRoot } from "@vkontakte/vk-mini-apps-router";

export const DEFAULT_ROOT = "default_root";

export const DEFAULT_VIEW = "default_view";

export const DEFAULT_VIEW_PANELS = {
  HOME: "homes",
  PERSIK: "persik",
} as const;

const routes: RouteWithoutRoot[] = [
  {
    path: `/org/:id/`,
    panel: "master",
    view: "default_view",
  },
  // Другие маршруты...
];

export const router = createHashRouter(routes);
