import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sim } from 'src/app/model/sim';
import { StarterService } from 'src/app/service/starter.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.less']
})
export class StarterComponent implements OnInit {

  genererStarterForm = new FormGroup({
    nombreStarter: new FormControl<number|null>(null,Validators.required)
  });

  voirGroupeForm = new FormGroup({
    numero: new FormControl<number|null>(null,Validators.required)
  });

  transformerGroupeForm = new FormGroup({
    numero: new FormControl<number|null>(null,Validators.required)
  });

  groupes?:number[];
  sim?:Sim;
  simListe?:Sim[];

  constructor(private starterService:StarterService) { }

  ngOnInit(): void {
    this.chargerListeGroupe();
  }

  chargerListeGroupe(){
    this.starterService.listeGroupes().subscribe(res => this.groupes = res);
  }

  genererStarterSubmit(){
    let nombre:number = this.genererStarterForm.value.nombreStarter || 100;
    this.starterService.genererStarter(nombre).subscribe(res => this.chargerListeGroupe());
  }

  voirGroupeSubmit(){
    let groupe:number = this.voirGroupeForm.value.numero || 0;
    this.starterService.voirGroupe(groupe).subscribe(res => {this.simListe = res; this.sim = this.simListe[0]});
  }

  transformerGroupeSubmit(){
    let groupe:number = this.transformerGroupeForm.value.numero || 0;
    this.starterService.transformerGroupe(groupe).subscribe();
  }


}
