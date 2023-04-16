import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelloServiceService } from 'src/app/service/hello-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 toFamille(){
  this.router.navigate(['famille']);
 }

 toFamille2(){
  this.router.navigate(['famille2']);
 }
}
