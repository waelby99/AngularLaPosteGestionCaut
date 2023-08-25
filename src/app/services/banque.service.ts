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
}
