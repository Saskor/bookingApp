import { OrgSettingsStore } from "./reexports";
import { PanelsStore } from "./reexports";

export class RootStore {
  orgSettingsStore;
  panelsStore;

  constructor() {
    this.orgSettingsStore = new OrgSettingsStore(this);
    this.panelsStore = new PanelsStore(this);
  }
}

export const rootStore = new RootStore();
