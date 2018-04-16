import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ve_input: String;
  ve_acum: String;
  vi_oper: String;
  vi_ope1: number;
  
  constructor(public navCtrl: NavController) {
    // this.ve_input="sa";
    this.vi_ope1 = 0;
  }
  valor(vx_num) {
    if (this.ve_input == null) {
      this.ve_input = vx_num;
    }
    else {
      this.ve_input = this.ve_input.toString() + vx_num;
    }
  }

  calcular(vx_oper) {
    if (this.ve_input == null && this.vi_ope1 != 0) {
      this.vi_oper = vx_oper;
      this.ve_acum = this.ve_acum.substring(0, ((this.ve_acum.toString().length) - 1)) + vx_oper;
    }
    else if (this.vi_oper == null && this.ve_input != null) {

      this.vi_ope1 = parseFloat(this.ve_input.toString());
      this.ve_acum = this.ve_input + vx_oper;
      this.vi_oper = vx_oper;
      this.ve_input = null;
    } else if (this.vi_oper != null && this.vi_oper != "=") {
      if (this.vi_oper == "/" && this.ve_input == "0") {
        alert("un numero no puede ser dividido por cero");
      }
      else {

        this.realizar_operacion();
        this.ve_acum = this.ve_acum.toString() + this.ve_input + vx_oper;
        this.ve_input = null;
        this.vi_oper = vx_oper;
      }
    }
  }
  resultado() {
    if (this.ve_input != null) {
      if (this.vi_oper == null) {
        this.ve_acum = this.ve_input;
      } else {
        this.realizar_operacion();
      }
    }

    this.ve_input = this.vi_ope1.toString();
    this.vi_oper = null;
    this.ve_acum = this.ve_input;
  }
  realizar_operacion() {
    switch (this.vi_oper) {
      case "+":
        this.vi_ope1 = parseFloat(this.vi_ope1.toString()) + parseFloat(this.ve_input.toString());
        break;
      case "-":
        this.vi_ope1 = parseFloat(this.vi_ope1.toString()) - parseFloat(this.ve_input.toString());
        break;
      case "*":
        this.vi_ope1 = parseFloat(this.vi_ope1.toString()) * parseFloat(this.ve_input.toString());
        break;
      case "/":
        this.vi_ope1 = parseFloat(this.vi_ope1.toString()) / parseFloat(this.ve_input.toString());
        break;
    }
    this.vi_ope1 = parseFloat(this.vi_ope1.toFixed(4));
    
  }
  limpiar() {
    this.vi_oper = null;
    this.vi_ope1 = 0;

    this.ve_acum = null;
    this.ve_input = null;
  }
  calcular_esp(vx_toper) {
    if (this.ve_acum == null && this.ve_input != null) {
      this.vi_ope1 = parseFloat(this.ve_input.toString());
    }
    if (this.vi_ope1 < 0 && vx_toper == "sqrt") {
      alert("No se puede obtener la raiz cuadrada de un numero negativo.");
    } else {
      if ((this.ve_input == null && this.vi_ope1 != 0)
        || this.ve_input == this.vi_ope1.toString()) {
        switch (vx_toper) {
          case "^2":
            this.vi_ope1 = parseFloat(Math.pow(this.vi_ope1, 2).toFixed(4));
            this.ve_acum = this.vi_ope1.toString();
            this.ve_input = this.vi_ope1.toString();
            break;
          case "sqrt":
            this.vi_ope1 = parseFloat(Math.sqrt(this.vi_ope1).toFixed(4));
            this.ve_acum = this.vi_ope1.toString();
            this.ve_input = this.vi_ope1.toString();
            break;
          default:
            this.vi_ope1 = parseFloat((1 / (this.vi_ope1)).toFixed(10));
            this.ve_acum = this.vi_ope1.toString();
            this.ve_input = this.vi_ope1.toString();
        }
      }
    }
  }

  decimal() {

    if ((this.ve_input.toString().includes(".")) == false) {
      if (this.ve_input == null) {
        this.ve_input = "0.";
      }
      else {

        this.ve_input = this.ve_input.toString() + ".";
      }
    }    // true

  }
}
