import { Injectable } from '@angular/core';
import { Ordonnateur } from '../models/ordonnateur.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl ='http://localhost:8080/api/ordonnateurs'
@Injectable({
  providedIn: 'root'
})
export class OrdonnateurService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ordonnateur[]> {
    return this.http.get<Ordonnateur[]>(baseUrl);
  }
  addOrd(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
  getOrdonnateurById(idOrd:any):Observable<any> {
    return this.http.get(baseUrl+'/'+idOrd);
  }
  editOrdonnateur(idOrd: any, data: any):Observable<any>{
    return this.http.put(baseUrl+'/'+idOrd,data);
  }
}
