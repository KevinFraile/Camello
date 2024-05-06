import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoBusquedaPageRoutingModule } from './resultado-busqueda-routing.module';

import { ResultadoBusquedaPage } from './resultado-busqueda.page';
import { ComponetesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoBusquedaPageRoutingModule,
    ComponetesModule
  ],
  declarations: [ResultadoBusquedaPage]
})
export class ResultadoBusquedaPageModule {}
