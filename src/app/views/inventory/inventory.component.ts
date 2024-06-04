import {Component, OnInit} from '@angular/core';
import {InventoryServiceService} from "../../services/inventoryService/inventory-service.service";
import {Inventory} from "../../model/inventory/inventory";
import {Item} from "../../model/item/item";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{
  inventory:any[] = [];
  item: Item = new Item();
  items: Item[] = [];
  id = "1";
  constructor(private inventoryService: InventoryServiceService<Inventory>){
  }

  getAllItems(){
    this.inventoryService.getInventory(this.id).subscribe((response:any)=>{
      this.inventory = response.items;
      for(let i in this.inventory){
        let item = new Item();
        item.item = this.inventory[i].item;
        item.amount = this.inventory[i].amount;
        item.price = this.inventory[i].price;
        this.items.push(item);
      }
      console.log(this.items);
    })
  }
  onSubmit(){
    let inventory = new Inventory();
    inventory.id = Number(this.id);
    inventory.technicalId = Number(this.id);
    inventory.items = this.items;
    this.inventoryService.updateInventory(this.id,inventory).subscribe();
    console.log(inventory);
  }

  onAdd(){
    let item = new Item();
    this.items.push(item);
  }
  ngOnInit(): void {
    this.getAllItems();
  }
  updateItemValue(event: any, property: String, index: number) {
    const newValue = event.target.value;
    this.items[index].item = newValue;
  }
  updateAmountValue(event: any, property: number, index: number) {
    const newValue = event.target.value;
    this.items[index].amount = newValue;
  }
  updatePriceValue(event: any, property: number, index: number) {
    const newValue = event.target.value;
    this.items[index].price = newValue;
  }

  protected readonly onsubmit = onsubmit;
}
