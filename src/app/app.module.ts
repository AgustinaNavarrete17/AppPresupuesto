import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GastosComponent} from './componentes/gastos/gastos.component';
import { GastoIngresadoComponent} from './componentes/gastos/gasto-ingresado/gasto-ingresado.component';
import { ListadoGastosComponent } from './componentes/gastos/listado-gastos/listado-gastos.component';
import { PresupuestoIngresadoComponent } from './componentes/presupuesto-ingresado/presupuesto-ingresado.component';



@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    GastoIngresadoComponent,
    ListadoGastosComponent,
    PresupuestoIngresadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
