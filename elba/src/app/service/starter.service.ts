import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarterService {

  constructor(private httpClient:HttpClient) { }

  genererStarter():Observable<string[]>{
    return this.httpClient.get<string[]>("http://localhost:8080/api/hello");}
}
