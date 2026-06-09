import { makeAutoObservable } from "mobx";

import type { RootStore } from "./reexports";

export class PanelsStore {
  navHistory: string[] = ["orgSettings"];
  rootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  goTo = (newModalId: string) => {
    this.navHistory.push(newModalId);
  };

  goBack = () => {
    this.navHistory.pop();
  };

  get last() {
    return this.navHistory.slice(-1)[0];
  }
}
