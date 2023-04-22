import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.less']
})
export class StarterComponent implements OnInit {

  genererStarterForm = new FormGroup({
    nombreStarter: new FormControl('',Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  genererStarterSubmit(){
    console.log('je marche');
  }

}
