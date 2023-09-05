import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesDetalhesPage } from './filmes-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: FilmesDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesDetalhesPageRoutingModule {}
