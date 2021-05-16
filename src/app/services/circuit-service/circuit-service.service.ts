import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CircuitServiceService {
  constructor(private http: HttpClient) {}

  getCircuits() {
    return this.http.get('http://ergast.com/api/f1/circuits.json');
  }
}
