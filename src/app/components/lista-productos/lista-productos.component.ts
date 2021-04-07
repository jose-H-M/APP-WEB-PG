import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicePostgresService } from "../../services/postgres-service/service-postgres.service";

import { MatTable } from '@angular/material/table';

interface PeriodicElement {
  id_producto: number;
  nombre: string;
  descripcion: string;
  stock: number;
  precio: number;
}


let ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {


  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion','stock','precio','remover'];
  dataSource;

  nombre: string;
  descripcion: string;
  stock: number;
  precio: number;

  codigo: number;
  nuevoPrecio: number;
  
  @ViewChild(MatTable) tabla: MatTable<PeriodicElement>;

  constructor(private servicio:ServicePostgresService) { }

  ngOnInit(): void {
    this.iniciarProductos();
  }

  iniciarProductos()
  {
    this.dataSource = [];
    console.log("request")
    this.servicio.getProductos().subscribe((productos:any) => {
      for(let producto of productos)
      {
        this.dataSource.push(
          { id_producto: producto.id_producto,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            stock: producto.stock,
            precio: producto.precio
          });
          
      }
      console.log(this.dataSource)
      this.tabla.renderRows();
    });
  }
  crearProducto()
  {
    let nuevoProducto = {
      nombre: this.nombre, 
      descripcion: this.descripcion,
      stock: this.stock,
      precio: this.precio
    }
    console.log()

    this.servicio.postProducto(nuevoProducto).subscribe((res:any) => {
      console.log(res.msg)
      if(res.msg == 'Correcto'){
        console.log('Producto registrado con exito.');
        this.iniciarProductos();
      }else {
        alert('El Producto no se pudo registrar');
      }
    });

  }

  eleminarProducto(producto:any)
  {
    this.servicio.deleteProducto(producto).subscribe((response:any) => {
      if(response.msg == 'Error')
      {
        console.log('Error, no se pudo eliminar el Producto')
      }
      else
      {
        this.iniciarProductos();
      }
    });

  }

  actualizarPrecio()
  {
    let precio ={ precio: this.nuevoPrecio};
    this.servicio.putPrecio(this.codigo,precio).subscribe((responese:any)=>{
      if(responese.msg == 'Correcto')
      {
        this.iniciarProductos();
      }
      else{
        alert(responese.msg);
      }
    });
  }

}
