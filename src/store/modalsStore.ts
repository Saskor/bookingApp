import { makeAutoObservable } from "mobx";
import type { RootStore } from "./reexports";

export class ModalsStore {
  modalsStack: string[] = [];
  rootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addNewModal = (newModalId: string) => {
    this.modalsStack.push(newModalId);
  };
  removeLastModal = () => {
    this.modalsStack.pop();
  };
}
