import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pain-input',
  templateUrl: './pain-input.component.html',
  styles: [
  ]
})
export class PainInputComponent  {

  @Output() onEnter: EventEmitter<string> = new EventEmitter()

  termino: string = ''

  constructor() { }

  buscar(){
    this.onEnter.emit(this.termino);
  }
}
