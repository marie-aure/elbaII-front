import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  titre: any;

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    this.titre = this.getRouteTitle();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.titre = this.route.firstChild?.routeConfig?.title;
      }
    });
  }

  getRouteTitle():any{
    let currentRoute = this.route;
    while(currentRoute.firstChild){
      currentRoute = currentRoute.firstChild;
    }
    return currentRoute.routeConfig?.title;
  }

}
