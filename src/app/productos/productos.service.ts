import { Injectable } from '@angular/core';
import {Producto} from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos: Producto[] = [
    { 
      id: '1',
      title: 'salteñas',
      imageURL: 'https://cocina-casera.com/wp-content/uploads/2018/05/Platos-tipicos-de-bolivia-3.jpg',
      comments: ['en el unico lugar']
    },
    { 
      id: '2',
      title: 'tipico de bolivia',
      imageURL: 'https://scontent.flpb1-1.fna.fbcdn.net/v/t1.0-9/38539030_450958105402218_6592269655371415552_n.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_ohc=gUElDDGKLMkAX80k9f7&_nc_ht=scontent.flpb1-1.fna&oh=f14c3f72271b2aa866086f422aa3f34e&oe=5E841D5E',
      comments: []
    }
  ]

  constructor() { }

  getProductos()
    {
      return [...this.productos]
    }

  getProducto(productoId: string){
    return{
      ...this.productos.find(producto => {
        return producto.id === productoId
      })
    }
  }

  addProducto(title: string, imageURL: string)
    {
        this.productos.push({
          title,
          imageURL,
          comments: [],
          id: this.productos.length + 1 + ""
        });
    }

  deleteProducto(productoId: string)
  {
    this.productos = this.productos.filter(producto => {
      return producto.id !== productoId
    })
  }
}
