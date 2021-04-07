import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicePostgresService } from "../../services/postgres-service/service-postgres.service";

import { MatTable } from '@angular/material/table';

interface PeriodicElement {
  id_empleado: number;
  nombre: string;
  salario: number;
}


let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})



export class ListaEmpleadosComponent implements OnInit {


  displayedColumns: string[] = ['codigo', 'nombre', 'salario','eliminar'];
  dataSource;

  nombre: string;
  salario: number;
  
  @ViewChild(MatTable) tabla: MatTable<PeriodicElement>;

  constructor(private servicio:ServicePostgresService) { }

  ngOnInit(): void {
    this.iniciarEmpleados();
  }

  iniciarEmpleados()
  {
    this.dataSource = [];
    console.log("request")
    this.servicio.getEmpleados().subscribe((empleados:any) => {
      for(let empleado of empleados)
      {
        this.dataSource.push(
          { id_empleado: empleado.id_empleado,
            nombre: empleado.nombre,
            salario: empleado.salario
          });
          
      }
      console.log(this.dataSource)
      this.tabla.renderRows();
    });
  }
  crearEmpleado()
  {
    console.log(this.nombre,this.salario)
    this.servicio.postEmpleado({nombre: this.nombre, salario: this.salario}).subscribe((res:any) => {
      console.log(res.msg)
      if(res.msg == 'Correcto'){
        console.log('Empleado registrado con exito.');
        this.iniciarEmpleados();
      }else {
        alert('El empleado no se pudo registrar');
      }
    });

  }

  eleminarEmpleado(empleado:any)
  {
    this.servicio.deleteEmpleado(empleado).subscribe((response:any) => {
      if(response.msg == 'Error')
      {
        alert('Error, no se pudo eliminar el empleado');
      }
      this.iniciarEmpleados();
    });
  }

}

