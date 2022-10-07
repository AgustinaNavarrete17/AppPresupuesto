import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './componentes/gastos/gastos.component';
import { PresupuestoIngresadoComponent } from './componentes/presupuesto-ingresado/presupuesto-ingresado.component';

const routes: Routes = [
  { path: "", redirectTo: "/ingresarPresupuesto", pathMatch: "full" },
  { path: "ingresarPresupuesto", component: PresupuestoIngresadoComponent },
  { path: "gastos", component: GastosComponent },
  { path: "**", redirectTo: "/ingresarPresupuesto", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
