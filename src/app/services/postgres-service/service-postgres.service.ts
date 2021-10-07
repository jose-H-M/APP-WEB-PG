import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePostgresService {

  constructor(private  http:HttpClient) { }

  host = "http://localhost:3000";

  //Metodos GET
  getData(){
    return this.http.get(this.host+'/getData');
  }

  getEmpleados(){
    return this.http.get(this.host+'/getEmpleados');
  }

  getProductos(){
    return this.http.get(this.host+'/getProductos');
  }

  getHistorial(){
    return this.http.get(this.host+'/getHistorial');
  }
  getRegistro(){
    return this.http.get(this.host+'/getRegistros');
  }

  //Methodos DELETE
  deleteEmpleado(id:any){
    return this.http.delete(this.host+'/deleteEmpleado/'+id);
  }
  deleteProducto(id:any){
    return this.http.delete(this.host+'/deleteProducto/'+id);
  }


  //Methodos POST
  postEmpleado(empleado: any)
  {
    return this.http.post(this.host+'/postEmpleado',empleado);
  }
  postProducto(producto: any)
  {
    return this.http.post(this.host+'/postProducto',producto);
  }
  postTransaccion(registro:any)
  {
    return this.http.post(this.host+'/postTransaccion',registro)
  }

  //Put Producto
  putStock(id:any,stock: any)
  {
    return this.http.put(this.host+'/putStock/'+id,stock)
  }
}
