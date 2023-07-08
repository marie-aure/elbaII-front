import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, NavigationEnd, Route, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  isAdmin!: boolean;
  matchOptions: IsActiveMatchOptions = {
    paths: 'subset',
    matrixParams: 'ignored',
    queryParams: 'ignored',
    fragment: 'ignored'
  };
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route)
      )
    .subscribe(route => {
      this.isAdmin = false
      while (route.firstChild) {
        route = route.firstChild;
        route.url.subscribe(segment => segment.forEach(seg => {
          if (seg.path === "admin") {
            this.isAdmin = true
          }
        }));
      }
    
  });
  }

}




