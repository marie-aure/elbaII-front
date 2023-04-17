import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HelloServiceService } from '../service/hello-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  titre: any;

  constructor(private readonly router: Router, private readonly route: ActivatedRoute,
    private hello:HelloServiceService) { }

  ngOnInit(): void {
    this.titre = this.route.firstChild?.routeConfig?.title;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titre = this.route.firstChild?.routeConfig?.title;
      }
    });
    this.hello.getHello().subscribe(res => console.log(res));
  }

}
