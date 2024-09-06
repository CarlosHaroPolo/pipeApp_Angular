import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //tenemos que cargar atraves de una carga peresosa a product-routing.module
  {
  path:'',
  loadChildren:()=>import('./products/products-routing.module').then(m=>m.ProductsRoutingModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
