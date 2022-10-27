import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/servicios/presupuesto.service';

@Component({
  selector: 'app-listado-gastos',
  templateUrl: './listado-gastos.component.html',
  styleUrls: ['./listado-gastos.component.css']
})
export class ListadoGastosComponent implements OnInit {

  constructor(private presupuestoService : PresupuestoService) { 
    this.presupuestoService.getGastos().subscribe(data =>{console.log(data);})
  }

  ngOnInit() {
  }

}
