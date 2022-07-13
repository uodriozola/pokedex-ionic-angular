import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3001';
   }

  getAllPokemons() {
    return this.http.get(this.url + '/pokemons');
  }
}
