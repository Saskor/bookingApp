export type IPhonesList = { phone: string; id: string }[];
export type ILinksList = { href: string; id: string }[];
export type IWebLinks = {
  vkLinks: ILinksList;
  tgLinks: ILinksList;
  maxLinks: ILinksList;
  webLinks: ILinksList;
};
export type IService = {
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  id: string;
};
export type IServicesList = IService[];
