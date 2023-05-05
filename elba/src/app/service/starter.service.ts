import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sim } from '../model/sim';

@Injectable({
  providedIn: 'root'
})
export class StarterService {

  constructor(private httpClient: HttpClient) { }

  genererStarter(nombre: number | undefined): Observable<string[]> {
    return this.httpClient.get<string[]>(`http://localhost:8080/api/starter/generer/${nombre}`);
  }

  
  listeGroupes(): Observable<number[]> {
    return this.httpClient.get<number[]>(`http://localhost:8080/api/starter/liste-groupes`);
  }

  voirGroupe(numero: number | undefined): Observable<Sim[]> {
    return this.httpClient.get<Sim[]>(`http://localhost:8080/api/starter/groupe/${numero}`);
  }
}
