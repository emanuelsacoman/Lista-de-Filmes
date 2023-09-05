import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full'
  },
  {
    path: 'filmes',
    loadChildren: () => import('./view/filmes/filmes.module').then( m => m.FilmesPageModule)
  },
  {
    path: 'filmes-detalhes/:id',
    loadChildren: () => import('./view/filmes-detalhes/filmes-detalhes.module').then( m => m.FilmesDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
