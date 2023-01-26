import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../interface/pokemon';
import { PokemonDetail } from '../interface/pokemon-detail';
@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private httclient: HttpClient) {

   }

   GetAll(){
     return this.httclient.get<Pokemon>(environment.ApiPokemon);
   }

   getById(id: string){
      const url = `${environment.ApiPokemon}/${id}/`
      return this.httclient.get<PokemonDetail>(url);
   }
}
