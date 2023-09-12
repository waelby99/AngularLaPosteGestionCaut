import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Chart } from 'chart.js';
import { CautionService } from '../services/caution.service';
import 'chartjs-adapter-date-fns';
//import 'chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min';

// Import the specific controller for the pie chart


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user: any;
  public chart: any;
  private chartInfo: any;
  private labeldata: any[] = ['En_cours', 'Main_Leve', 'Restitué', 'Non_Restitué'];
  private realdata: any[] = [0, 0, 0, 0]; // Initialize counts for each state
  private colordata: any[] = ['red', 'yellow', 'green', 'blue'];
  
  constructor(private cautionService: CautionService, private storageService: StorageService) { }
  
  ngOnInit(): void {
    this.user = this.storageService.getUser();
    this.cautionService.getAll().subscribe((response) => {
      this.chartInfo = response;
      if (this.chartInfo != null) {
        for (let i = 0; i < this.chartInfo.length; i++) {
          const cautionState = this.chartInfo[i].etat;
          const index = this.labeldata.indexOf(cautionState);
          if (index !== -1) {
            this.realdata[index]++; // Increment count for the corresponding state
          }
        }
        this.createChart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }
  
  createChart(labeldata: any, realdata: any, colordata: any) { 
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Le nombre des cautions correspondant pour chaque etat',
            data: realdata,
            backgroundColor: colordata,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
  }
}