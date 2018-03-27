import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  num: number;
  mayorMenor: string = '...';

  numEncontrado: number = this.numAleatorio(0, 10);
  constructor(public navCtrl: NavController) {

  }
  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
  }
  compruebaNumero() {
    if (this.num) { 
      if (this.numEncontrado < this.num) { 
        this.mayorMenor = 'menor'+ this.numEncontrado; 
      } 
      else if (this.numEncontrado > this.num) { 
        this.mayorMenor = 'mayor'+ this.numEncontrado; 
      } else { 
        this.mayorMenor = 'igual. :D BRAVO ACERTASTE!!!'; 
      } 
    }
  }
}
