import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPage } from './productos.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPage
  },
  {
    path: 'producto-detail',
    loadChildren: () => import('./producto-detail/producto-detail.module').then( m => m.ProductoDetailPageModule)
  },
  {
    path: 'producto-add',
    loadChildren: () => import('./producto-add/producto-add.module').then( m => m.ProductoAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPageRoutingModule {}
