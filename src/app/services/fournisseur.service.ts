import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/fournisseur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl ='http://localhost:8080/api/fournisseurs'

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(baseUrl);
  }
  addFour(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
}
