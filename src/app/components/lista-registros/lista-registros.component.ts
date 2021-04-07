import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicePostgresService } from "../../services/postgres-service/service-postgres.service";

import { MatTable } from '@angular/material/table';

interface PeriodicElement {
  id_Registro_precio: number;
  fecha: string;
  cantidad: number;
  aumento_disminucion: string;
  empleado: string;
  producto: string;
}


@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {

  displayedColumns: string[] = ['codigo','cantidad','fecha','empleado','producto'];
  dataSource;

  cod_empleado:number;
  cod_producto:number;
  cantidad:number;


  @ViewChild(MatTable) tabla: MatTable<PeriodicElement>;

  constructor(private servicio:ServicePostgresService) { }

  ngOnInit(): void {
    this.iniciarRegistro();
  }

  iniciarRegistro()
  {
    this.dataSource = [];
    console.log("request")
    this.servicio.getRegistro().subscribe((registros:any) => {
      for(let registro of registros)
      {
        this.dataSource.push(
          { id_registro: registro.id_registro,
            fecha_hora: registro.fecha_hora,
            monto: registro.monto,
            cantidad: registro.cantidad,
            empleado: registro.empleado,
            producto: registro.producto
          });
          
      }
      console.log(this.dataSource)
      this.tabla.renderRows();
    });
  }

  crearRegistro()
  {
    let nuevoRegistro = {
      cod_empleado: this.cod_empleado,
      cod_producto: this.cod_producto,
      cantidad: this.cantidad
    }

    this.servicio.postTransaccion(nuevoRegistro).subscribe((res:any) => {
      console.log(res.msg)
      if(res.msg == 'Correcto'){
        console.log('Transacción registrado con exito.');
        this.iniciarRegistro();
      }else {
        alert('La transacción no se pudo registrar');
      }
    });

  }
}
