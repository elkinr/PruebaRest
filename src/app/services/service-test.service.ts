import { Injectable } from '@angular/core';
import { SearchserviceService } from './searchservice.service';
@Injectable({
  providedIn: 'root'
})
export class ServiceTestService {

  constructor(private search:SearchserviceService) { 

  }

  GetValue(){
    return this.search.GetAll();
  }
}
