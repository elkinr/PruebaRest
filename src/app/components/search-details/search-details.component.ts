import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchserviceService } from 'src/app/services/searchservice.service';
import { PokemonDetail } from 'src/app/interface/pokemon-detail';
@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  public pokemoninfo!:PokemonDetail;
  constructor(private Route: ActivatedRoute,
              private search:SearchserviceService
              ) { }

  ngOnInit(): void {
    this.init();
  }

  public init(){
    this.Route.paramMap.subscribe(params =>{
      const id = params.get('id');
      if(id){
        this.search.getById(id).subscribe((data:PokemonDetail)=>{
          this.pokemoninfo = data;
        })
      }
    })
  }

}
