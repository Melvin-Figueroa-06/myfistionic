import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.page.html',
  styleUrls: ['./producto-add.page.scss'],
})
export class ProductoAddPage implements OnInit {

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit() {
  }

  saveNewProducto(title: HTMLInputElement, imageURL: HTMLInputElement){
    this.productosService.addProducto(title.value, imageURL.value);
    this.router.navigate(['/productos']);
  }

}
