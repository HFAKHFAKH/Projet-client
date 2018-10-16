import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AffichehelloService {

  constructor(private http: HttpClient) { }

  getAfficheHello(): Observable<string> {
    return this.http.get<string>('http://localhost:8080/projet/ping');
  }
}
