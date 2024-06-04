import {Component, OnInit} from '@angular/core';
import {InventoryServiceService} from "../../services/inventoryService/inventory-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  id = "1";
  items: any[] = [];
  constructor(private inventoryService: InventoryServiceService<any>) {

  }

  getAllItems(){
    this.inventoryService.getInventory(this.id).subscribe((response:any)=>{
      this.items = response.items;
      console.log(this.items);
    })
  }

  ngOnInit(): void {
    this.getAllItems();
  }
}
