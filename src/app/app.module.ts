import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { BerriesComponent } from './pages/berries/berries.component';

import { AppRoutingModule } from './app.routing.module'

import { HttpClientModule } from '@angular/common/http'; //Importar para a service funcionar
import { PokemonService } from './services/pokemon/pokemon.service';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LigaComponent } from './pages/liga/liga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonsComponent,
    HomeComponent,
    BerriesComponent,
    TrainerComponent,
    CadastroComponent,
    LigaComponent,

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
