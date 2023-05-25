import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componentes/menu-title/menu-title.component';
import { CardMainComponent } from './componentes/card-main/card-main.component';
import { CardSmallComponent } from './componentes/card-small/card-small.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    CardMainComponent,
    CardSmallComponent,
    HomeComponent,
    ContentComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
