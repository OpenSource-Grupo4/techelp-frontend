import {Item} from "../item/item";

export class Inventory {
  id: number;
  technicalId: number;
  items: Item[];

  constructor() {
    this.id = 0;
    this.technicalId = 0;
    this.items = [];
  }
}
