import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons/pokemons.component';
import { HomeComponent } from './pages/home/home.component';
import { BerriesComponent } from './pages/berries/berries.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { LigaComponent } from './pages/liga/liga.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'berries', component: BerriesComponent },
  { path: 'trainer', component: TrainerComponent },
  { path: 'liga', component: LigaComponent },
  { path: 'cadastro', component: CadastroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}