import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Famille } from 'src/app/model/famille';
import { Sim } from 'src/app/model/sim';
import { FamilleService } from 'src/app/service/famille.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private familleService: FamilleService) { }

  familleActive!: Famille | null;
  membres!: Sim[];
  colonnesMembres:string[] = ["nom", "genre","espece","age","orientation","conjoint"]
  ngOnInit(): void {
    this.familleService.chargerFamilleActive().subscribe(res => {
      this.familleActive = res;
      this.membres = res.sims;
    });
  }

}