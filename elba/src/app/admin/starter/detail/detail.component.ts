import { Component, Input, OnInit } from '@angular/core';
import { Sim } from 'src/app/model/sim';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  @Input()
  sim?:Sim;

  constructor() { }

  ngOnInit(): void {
  }

}
