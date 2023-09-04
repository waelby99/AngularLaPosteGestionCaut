import { Injectable } from '@angular/core';
import { Banque } from '../models/banque.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl ='http://localhost:8080/api/banques'
@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Banque[]> {
    return this.http.get<Banque[]>(baseUrl);
  }
  addBank(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
  getBanqueById(idBanque:any):Observable<any> {
    return this.http.get(baseUrl+'/'+idBanque);
  }
  editBank(idBanque: any, data: any):Observable<any>{
    return this.http.put(baseUrl+'/'+idBanque,data);
  }

}
