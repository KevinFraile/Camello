import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoBusquedaPage } from './resultado-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoBusquedaPageRoutingModule {}
