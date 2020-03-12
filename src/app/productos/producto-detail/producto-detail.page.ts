import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProductosService } from '../productos.service';
import { AlertController } from '@ionic/angular';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.page.html',
  styleUrls: ['./producto-detail.page.scss'],
})
export class ProductoDetailPage implements OnInit {

  producto: Producto;

  constructor(private activatedRoute: ActivatedRoute, private productosServicio: ProductosService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId = paramMap.get('productoId')
      this.producto = this.productosServicio.getProducto(recipeId);
    })
  }

   async deleteProducto() {
    const alertElement = await this.alertCtrl.create({
      header:'Estas seguro de eliminar',
      message: 'se cuidadoso',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar'
        },
        {
          text: 'Borrar',
          handler: () => {
                this.productosServicio.deleteProducto(this.producto.id);
                this.router.navigate(['/productos'])
          }
        }
      ]
    });
    await alertElement.present();
  }
}
