import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { PagesPage } from './pages.page';
import { MenuComponent } from '../componentes/menu/menu.component';
import { ComponetesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesPageRoutingModule,
    ComponetesModule
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
