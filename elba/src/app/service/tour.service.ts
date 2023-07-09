import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FinTour } from '../model/fin-tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private httpClient: HttpClient) { }

  finDuTour(finTour: FinTour) {
    return this.httpClient.post(`http://localhost:8078/api/tour/cloturer`, finTour);
  }
}
