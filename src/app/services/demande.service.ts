import { Injectable } from '@angular/core';
import { Demande } from '../models/demande.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl ='http://localhost:8080/api/demandes'

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Demande[]> {
    return this.http.get<Demande[]>(baseUrl);
  }
  addDemande(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
}
