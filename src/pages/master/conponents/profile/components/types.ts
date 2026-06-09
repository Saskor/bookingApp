import type { IReactListData } from "types";

export interface IServicesListModalProps {
  isBranch: boolean;
}
export interface IServiceSettingsModalProps {
  servicesListIndex: number;
}

export type IWebLinksKey = "vkLinks" | "tgLinks" | "maxLinks" | "websiteLinks";

export type IWebLinks = Record<IWebLinksKey, IReactListData>;
export interface IModalProps {
  id?: string;
}
