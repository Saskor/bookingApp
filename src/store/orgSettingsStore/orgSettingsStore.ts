import { makeAutoObservable } from "mobx";
import type { RootStore } from "../reexports";

export class OrgSettingsStore {
  servicesListIndex: number = 0;
  reminderHours: number = 24;
  rootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setServicesListIndex = (newServicesListIndex: number) => {
    this.servicesListIndex = newServicesListIndex;
  };
  setReminderHours = (newReminderHours: number) => {
    this.reminderHours = newReminderHours;
  };
}
