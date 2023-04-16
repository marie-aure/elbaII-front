import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.less']
})
export class TitreComponent implements OnInit {

  @Input()
  titre?:any;

  constructor() { }

  ngOnInit(): void {
  }

}
