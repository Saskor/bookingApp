import { makeAutoObservable } from "mobx";
import { OrgSettingsModalStore } from "./reexports";
import { ModalsStore } from "./reexports";

export class RootStore {
  orgSettingsModalStore;
  orgBranchSettingsModalStore;
  modalsStore;

  constructor() {
    this.orgSettingsModalStore = new OrgSettingsModalStore(this);
    this.orgBranchSettingsModalStore = new OrgBranchSettingsModalStore(this);
    this.modalsStore = new ModalsStore(this);
  }
}

class OrgBranchSettingsModalStore {
  todos = [];
  rootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}

export const rootStore = new RootStore();
