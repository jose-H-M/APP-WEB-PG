import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicePostgresService } from "../../services/postgres-service/service-postgres.service";

import { MatTable } from '@angular/material/table';

interface PeriodicElement {
  id_historial_precio: number;
  fecha: string;
  cantidad: number;
  aumento_disminucion: string;
}



@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'fecha', 'cantidad','variacion','producto'];
  dataSource;


  @ViewChild(MatTable) tabla: MatTable<PeriodicElement>;

  constructor(private servicio:ServicePostgresService) { }

  ngOnInit(): void {
    this.iniciarHistorial();
  }

  iniciarHistorial()
  {
    this.dataSource = [];
    console.log("request")
    this.servicio.getHistorial().subscribe((Historial:any) => {
      for(let registro of Historial)
      {
        this.dataSource.push(
          { id_historial_precio: registro.id_historial_precio,
            fecha_hora: registro.fecha_hora,
            cantidad: registro.cantidad,
            aumento_disminucion: registro.aumento_disminucion == 1? 'Aumento': 'Disminusión',
            producto: registro.producto
          });
          
      }
      console.log(this.dataSource)
      this.tabla.renderRows();
    });
  }
}
