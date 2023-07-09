import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FinTour } from 'src/app/model/fin-tour';
import { TourService } from 'src/app/service/tour.service';

@Component({
  selector: 'app-changement-tour',
  templateUrl: './changement-tour.component.html',
  styleUrls: ['./changement-tour.component.less']
})
export class ChangementTourComponent implements OnInit {

  finTourForm = new FormGroup({
    argentIG: new FormControl<number>(0, Validators.required)
  });

  constructor(private tourService: TourService, private router: Router) { }

  ngOnInit(): void {
  }

  validerFinDuTour() {
    var finTour = new FinTour((this.finTourForm.value.argentIG as number));
    this.tourService.finDuTour(finTour).subscribe(() => this.router.navigate(['']));
  }

}
