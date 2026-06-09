import { makeAutoObservable } from "mobx";
import type { RootStore } from "../reexports";
import type { IPhonesList, IServicesList, IWebLinks } from "./types";
import { getEmptyLink, getEmptyPhone, getEmptyService } from "./utils";

export class OrgSettingsModalStore {
  orgName: string = "";
  phonesList: IPhonesList = [getEmptyPhone()];
  webLinks: IWebLinks = {
    vkLinks: [getEmptyLink()],
    tgLinks: [getEmptyLink()],
    maxLinks: [getEmptyLink()],
    webLinks: [getEmptyLink()],
  };
  servicesList: IServicesList = [getEmptyService()];
  servicesListIndex: number = 0;
  reminderHours: number = 24;
  rootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  changeOrgName = (newOrgName: string) => {
    this.orgName = newOrgName;
  };
  setPhonesList = (newPhonesList: IPhonesList) => {
    this.phonesList = newPhonesList;
  };
  setWebLinks = (newWebLinks: IWebLinks) => {
    this.webLinks = newWebLinks;
  };
  setServicesList = (newServicesList: IServicesList) => {
    this.servicesList = newServicesList;
  };
  resetServicesList = () => {
    this.servicesList = [getEmptyService()];
  };
  setServicesListIndex = (newServicesListIndex: number) => {
    this.servicesListIndex = newServicesListIndex;
  };
  setReminderHours = (newReminderHours: number) => {
    this.reminderHours = newReminderHours;
  };
}
