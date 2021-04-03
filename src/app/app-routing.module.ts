import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { LoginComponent } from './components/login/login.component';

//Rutas
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
