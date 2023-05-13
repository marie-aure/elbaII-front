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
    return this.httpClient.get<string[]>(`http://localhost:8078/api/starter/generer/${nombre}`);
  }

  completerStarter(sim:Sim):Observable<Sim>{
    return this.httpClient.post<Sim>('http://localhost:8078/api/starter/completer', sim);
  }

  listeGroupes(): Observable<number[]> {
    return this.httpClient.get<number[]>(`http://localhost:8078/api/starter/liste-groupes`);
  }

  voirGroupe(numero: number | undefined): Observable<Sim[]> {
    return this.httpClient.get<Sim[]>(`http://localhost:8078/api/starter/groupe/${numero}`);
  }

  transformerGroupe(numero: number | undefined) {
    return this.httpClient.post(`http://localhost:8078/api/starter/transformer-groupe/${numero}`,null);
  }
}
