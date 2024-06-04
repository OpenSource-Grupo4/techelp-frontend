export class Task {
    technicalId:number;
    id:number;
    client_name:string;
    phone_name:string;
    problem:string;
    components_to_use:string;
    value_progress:number;
    delivery_day:string;
    income:string;
 constructor() {
     this.technicalId=0;
 this.id=0;
 this.client_name="";
 this.phone_name="";
 this.problem="";
 this.components_to_use="";
 this.value_progress=0;
 this.delivery_day="";
 this.income="";
 }
}
