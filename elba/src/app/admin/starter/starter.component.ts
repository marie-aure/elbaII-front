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
    nombreStarter: new FormControl('',Validators.required)
  });

  constructor(private starterService:StarterService) { }

  ngOnInit(): void {
  }

  genererStarterSubmit(){
    this.starterService.genererStarter().subscribe(res => console.log('je marche'));
  }

}
