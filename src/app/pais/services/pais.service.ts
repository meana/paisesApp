import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //https://restcountries.eu/rest/v2/name/united
  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<any> {
    
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get(url);
  }
  
}
