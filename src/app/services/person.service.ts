import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPerson} from "../interfaces/iperson";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`http://localhost:3000/person`);
  }

  create(body: FormData): Observable<any> {
    return this.http.post(`http://localhost:3000/person`, body);
  }

  findOne(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/person/${id}`);
  }

  removeById(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/person/${id}`);
  }

  update(id: number, body: FormData): Observable<any> {
    return this.http.patch(`http://localhost:3000/person/${id}`, body);
  }
}
