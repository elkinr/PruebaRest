import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from 'src/app/services/searchservice.service';
import { Pokemon } from 'src/app/interface/pokemon';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
   public value!:String;
          pokemnos!:Array<any>;
  constructor(private search: SearchserviceService) { 
  }

  ngOnInit(): void {
   this.init();
  }

  public init(): void{
    this.value = "2 eevvss";
     this.search.GetAll().subscribe((data)=>{
       this.pokemnos = data.results;
     })
  }

}
