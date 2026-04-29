import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PokemonListPageRoutingModule } from './pokemon-list-routing.module';
import { PokemonListPage } from './pokemon-list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule, PokemonListPageRoutingModule],
  declarations: [PokemonListPage]
})
export class PokemonListPageModule {}