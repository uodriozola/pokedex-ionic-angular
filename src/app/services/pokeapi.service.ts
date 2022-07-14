import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.pokeApiUrl;
   }

  getAllPokemons() {
    return this.http.get(this.url + '/pokemons');
  }
}
