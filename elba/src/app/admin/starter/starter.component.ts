import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StarterService } from 'src/app/service/starter.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.less']
})
export class StarterComponent implements OnInit {

  genererStarterForm = new FormGroup({
    nombreStarter: new FormControl<number>(0,Validators.required)
  });

  constructor(private starterService:StarterService) { }

  ngOnInit(): void {
  }

  genererStarterSubmit(){
    let nombre:number = this.genererStarterForm.value.nombreStarter || 100;
    this.starterService.genererStarter(nombre).subscribe(res => console.log('je marche'));
  }

}
