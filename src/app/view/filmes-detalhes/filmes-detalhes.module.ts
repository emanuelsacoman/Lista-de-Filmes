import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilmesDetalhesPageRoutingModule } from './filmes-detalhes-routing.module';

import { FilmesDetalhesPage } from './filmes-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmesDetalhesPageRoutingModule
  ],
  declarations: [FilmesDetalhesPage]
})
export class FilmesDetalhesPageModule {}
