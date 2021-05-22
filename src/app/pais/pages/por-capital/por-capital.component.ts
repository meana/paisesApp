import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.termino = termino;
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino)
      .subscribe(resp => {
        console.log(resp);
        this.paises = resp;
      }, err => {
        this.hayError = true;
        this.paises = []
      })
  }

}
