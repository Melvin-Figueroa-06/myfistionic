import { Component, OnInit } from '@angular/core';
import {ProductosService} from './productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos = []

  constructor(private productoService: ProductosService, private router: Router) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos()
  }

  ionViewWillEnter(){
    this.productos = this.productoService.getProductos();
  }

  addNewProducto(){
   this.router.navigate(['/new-producto']);
  }

  goToHome(){
    this.router.navigate(['/home'])
  }
}
