import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

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

  constructor( private presupuestoService : PresupuestoService) { 
    this.nombreGasto = '';
    this.montoGasto = 0;
    this.formIncorrecto = false;
    this.datosIncorrectos = '';
  }

  ngOnInit() {
  }

  agregarGasto(){
    if (this.montoGasto > this.presupuestoService.restante){
      this.formIncorrecto = true;
    this.datosIncorrectos = 'La cantidad ingresada supera la cantidad restante';
    return
    }

    if (this.nombreGasto === '' || this.montoGasto <= 0){
      this.formIncorrecto = true;
      this.datosIncorrectos = 'Nombre del gasto o monto incorrectos';
    } else {
     //Creo el objeto
    const Gasto = {
    nombre : this.nombreGasto,
    cantidad : this.montoGasto,
    }

     // Enviamos el objeto vía subject
     this.presupuestoService.agregarGasto(Gasto);

     // Reseteo formulario
      this.formIncorrecto = false;
      this.nombreGasto = '';
      this.montoGasto = 0;
    }
  }

}
