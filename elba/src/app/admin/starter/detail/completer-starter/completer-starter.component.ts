import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ComplementSim {
  prenom: string;
  nom: string;
}

@Component({
  selector: 'app-completer-starter',
  templateUrl: './completer-starter.component.html',
  styleUrls: ['./completer-starter.component.less']
})
export class CompleterStarterComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompleterStarterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ComplementSim) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.dialogRef.close();
  }

}
