import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  irEmpleados()
  {
    this.router.navigate(['']);
  }

  irProductos()
  {
    this.router.navigate(['productos']);
  }
  irHistorial()
  {
    this.router.navigate(['historial-precios']);
  }
  irRegistros()
  {
    this.router.navigate(['registros']);
  }
  irModificarProducto()
  {
    this.router.navigate(['modificar-producto']);
  }
  irTransacciones()
  {
    this.router.navigate(['transacciones']);
  }

}
