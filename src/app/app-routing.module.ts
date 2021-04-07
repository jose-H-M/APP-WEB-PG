import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ListaHistorialComponent } from './components/lista-historial/lista-historial.component';
import { ListaRegistrosComponent } from './components/lista-registros/lista-registros.component';

//Rutas
const routes: Routes = [
  {
    path: '',
    component: ListaEmpleadosComponent,
  },
  {
    path: 'productos',
    component: ListaProductosComponent,
  },
  {
    path: 'historial-precios',
    component: ListaHistorialComponent,
  },
  {
    path: 'registros',
    component: ListaRegistrosComponent,
  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
