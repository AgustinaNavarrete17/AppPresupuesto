import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-listado-gastos',
  templateUrl: './listado-gastos.component.html',
  styleUrls: ['./listado-gastos.component.css']
})
export class ListadoGastosComponent implements OnInit {

  suscription : Subscription;
  presupuesto : number;
  presupuestoRestante : number;

  //Lista donde se almacenan todos los gastos:
  listadoGastos : any [] = [];

  constructor(private presupuestoService : PresupuestoService) { 
    this.presupuesto = 0;
    this.presupuestoRestante = 0;
    this.suscription = this.presupuestoService.getGastos().subscribe(data =>{
    this.presupuestoRestante = this.presupuestoRestante - data.cantidad;  
    console.log(data)
    //Aqui pusheo cada gasto en la lista listadoGastos:
    this.listadoGastos.push(data);  
    })
  }

  ngOnInit() {
    this.presupuesto = this.presupuestoService.presupuesto;
    this.presupuestoRestante= this.presupuestoService.restante;
  }

  ngOnDestroy(): void{
    this.suscription.unsubscribe();
  }

}
