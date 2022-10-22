import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gasto-ingresado',
  templateUrl: './gasto-ingresado.component.html',
  styleUrls: ['./gasto-ingresado.component.css']
})
export class GastoIngresadoComponent implements OnInit {
   nombreGasto : string;
   montoGasto : number;
   //variable para validar que los datos del formulario sean correctos
   formIncorrecto : boolean;
   //variable para validar que el monto del gasto ingresado sea menor al presupuesto ingresado
   datosIncorrectos : string;

  constructor() { 
    this.nombreGasto = '';
    this.montoGasto = 0;
    this.formIncorrecto = false;
    this.datosIncorrectos = 'Nombre del gasto o monto incorrectos';
  }

  ngOnInit() {
  }

  agregarGasto(){
    if (this.nombreGasto === '' || this.montoGasto <= 0){
      this.formIncorrecto = true;
    } else {
      this.formIncorrecto = false;
      this.nombreGasto = '';
      this.montoGasto = 0;
    }
  }

}
