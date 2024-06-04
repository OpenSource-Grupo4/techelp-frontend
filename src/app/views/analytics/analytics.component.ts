import {Component, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";
import {TechnicalsServiceService} from "../../services/technicals-service.service";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit{
  id="1";
  incomesPerWeekend : number[] = [];
  lineChart = new Chart();
  income?:Number ;
  outlay?:Number;
  earning?:Number;
  weekend:Number = 1;
  constructor(private technicalsService: TechnicalsServiceService) {

  }
  ngOnInit(): void {
    this.technicalsService.getIncomes(this.id).subscribe((response:any)=>{
      this.incomesPerWeekend = response.incomePerWeekend;
      this.incomesPerWeekend.unshift(0);
      this.income = this.incomesPerWeekend[1];
      this.outlay = 20;
      this.earning = Number(this.income) - Number(this.outlay)
      this.lineChart = new Chart({
        chart: {
          type: 'column'
        },
        title: {
          text: 'Incomes'
        },
        credits: {
          enabled: false
        },
        xAxis: {
          min:1
        },
        series: [
          {
            name: 'Weekends',
            data: this.incomesPerWeekend ,
            point: {
              events: {
                click: (event:any) => {
                  console.log(event.point.category)
                  this.weekend = event.point.category;
                  this.income = this.incomesPerWeekend[(event.point.category)];
                  this.outlay = 20.0;
                  this.earning = Number(this.income) - Number(this.outlay);
                }
              }
            }
          } as any
        ]
      });
    })
  }
}
