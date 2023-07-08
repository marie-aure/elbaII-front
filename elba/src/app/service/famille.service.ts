import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Famille } from '../model/famille';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {

  constructor(private httpClient: HttpClient) { }

  chargerFamilleActive(): Observable<Famille> {
    return this.httpClient.get<Famille>(`http://localhost:8078/api/famille/active`);
  }
}
