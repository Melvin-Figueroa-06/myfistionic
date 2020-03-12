import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'productos',
    children: [
      {
        path: "",
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ":productoId",
        loadChildren: () => import('./productos/producto-detail/producto-detail.module').then(m => m.ProductoDetailPageModule)
      }
    ]
  },
  {
    path: 'new-producto',
    loadChildren: () => import('./productos/producto-add/producto-add.module').then( m => m.ProductoAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
