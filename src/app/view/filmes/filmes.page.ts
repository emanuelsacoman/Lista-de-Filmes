import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FilmeService, TiposDeBusca } from 'src/app/services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  resultados! : Observable<any>;
  termosBusca: string = '';
  tipo!: TiposDeBusca.all;


  constructor(private filmeService : FilmeService) {

  }

  ngOnInit() {
    
  }

  buscar(){
    this.resultados = this.filmeService.buscarFilmes(this.termosBusca, this.tipo)
    .pipe(
      map(results => results ['Search'])
    );
  }

}
