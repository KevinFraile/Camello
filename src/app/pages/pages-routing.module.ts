import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resultado-busqueda/null',
    pathMatch: 'full'
  },
  {
    path: 'resultado-busqueda/:palabra',
    loadChildren: () => import('./resultado-busqueda/resultado-busqueda.module').then( m => m.ResultadoBusquedaPageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },


 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
