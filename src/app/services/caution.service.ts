import { Injectable } from '@angular/core';
import { Caution } from '../models/caution.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl ='http://localhost:8080/api/cautions'

@Injectable({
  providedIn: 'root'
})
export class CautionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Caution[]> {
    return this.http.get<Caution[]>(baseUrl);
  }
  getCautionById(idCaution:any):Observable<any> {
    return this.http.get(baseUrl+'/'+idCaution);
  }
  addCaut(data:any):Observable<any>{
    return this.http.post(baseUrl,data);
  }
  editCaut(idCaution: any, data: any):Observable<any>{
    return this.http.put(baseUrl+'/'+idCaution,data);
  }
}
