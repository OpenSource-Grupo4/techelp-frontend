import {Component, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";
import {TechnicalsServiceService} from "../../services/technicals-service.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  id="1";
  incomesPerWeekend : number[] = [];
  lineChart = new Chart();
  constructor(private technicalsService: TechnicalsServiceService) {

  }
  ngOnInit(): void {
    this.technicalsService.getIncomes(this.id).subscribe((response:any)=>{
      this.incomesPerWeekend = response.incomePerWeekend;
      this.incomesPerWeekend.unshift(0);
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
          } as any
        ]
      });
    })
  }
}


