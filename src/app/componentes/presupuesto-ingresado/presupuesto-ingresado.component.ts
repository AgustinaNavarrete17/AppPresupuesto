import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-presupuesto-ingresado',
  templateUrl: './presupuesto-ingresado.component.html',
  styleUrls: ['./presupuesto-ingresado.component.css']
})
export class PresupuestoIngresadoComponent implements OnInit {

  cantidad : number; 
  cantidadError : boolean;

  constructor(private presupuestoService : PresupuestoService,
              private router : Router,) 
  { 
    this.cantidad = 0;
    this.cantidadError = false;

  }

  ngOnInit() {
  }

  Agregar(){
    if (this.cantidad<1){
      this.cantidadError = true;
    } else {
      this.cantidadError = false
      //seteo en la variable presupuesto del presupuestoService, lo que el usuario ingrese en la variable cantidad
      this.presupuestoService.presupuesto = this.cantidad;
      //seteo en la variable restante del presupuestoService, lo que el usuario ingrese en la variable cantidad
      this.presupuestoService.restante = this.cantidad;
      //Si no hay error, redirecciono al otro componente
      this.router.navigate(['/gastos'])
    }
  }



}
