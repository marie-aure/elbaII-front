import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sim } from 'src/app/model/sim';
import { ComplementSim, CompleterStarterComponent } from './completer-starter/completer-starter.component';
import { StarterService } from 'src/app/service/starter.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  @Input()
  sim?: Sim;

  constructor(public dialog: MatDialog, private starterService:StarterService) { }

  ngOnInit(): void {
  }

  popUpNom(): void {
    const dialogRef = this.dialog.open(CompleterStarterComponent,
      { data: { prenom: this.sim?.prenom, nom: this.sim?.nom } });

    dialogRef.afterClosed().subscribe(resultat => {
      console.log('The dialog was closed');
      this.miseAJourSim(resultat);
    });
  }

  miseAJourSim(complement: ComplementSim) {
    if (this.sim != undefined) {
      this.sim.prenom = complement.prenom;
      this.sim.nom = complement.nom;

      this.starterService.completerStarter(this.sim).subscribe(res => this.sim = res);

    }
  }

}
