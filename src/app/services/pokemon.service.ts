import { Injectable } from '@angular/core';
import {enviroment} from 'src/enviroments/enviroment'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonModel} from "../model/PokemonModel";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL = "";
  private pokeData: PokemonModel | any;

  constructor(
    private http:HttpClient
  ) {
    this.baseURL = enviroment.pokeApi;
  }

  getPokemon(nomePokemon: string):Observable<PokemonModel> {
    this.pokeData = this
                  .http
                  .get<PokemonModel>(`${this.baseURL}${nomePokemon}`);
    console.log(this.pokeData);
    return this.pokeData;
  }
}
