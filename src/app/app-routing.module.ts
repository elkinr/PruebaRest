import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
  path: '',
  component: SearchComponent
  },
  {
    path:'pokemon/:id',
    component: SearchDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
