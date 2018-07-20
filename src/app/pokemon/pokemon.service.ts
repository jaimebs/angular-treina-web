import { ENDPOINT } from './endpoint';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(`${ENDPOINT}pokedex/1/`)
  }
}
