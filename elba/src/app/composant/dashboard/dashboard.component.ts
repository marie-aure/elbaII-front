import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from 'src/app/service/hello-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private hello:HelloServiceService) { }

  ngOnInit(): void {
    this.hello.getHello().subscribe(res => {console.log(res)});
  }

}
