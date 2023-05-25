import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ContentComponent} from "./pages/content/content.component";
import {PokemonComponent} from "./pages/pokemon/pokemon.component";

const routes: Routes = [
  {path: '',component:HomeComponent, pathMatch:'full' },
  {path: 'content/:id', component: ContentComponent },
  {path: 'pokemon/:id', component: PokemonComponent },
  //{path: 'content', component: ContentComponent, children:[
  //    {path: ':id', component: ContentComponent }
  //  ]},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
