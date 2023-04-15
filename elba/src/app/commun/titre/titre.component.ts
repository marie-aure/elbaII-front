import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.less']
})
export class TitreComponent implements OnInit {

  @Input() titre!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
