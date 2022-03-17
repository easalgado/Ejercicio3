import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarNacimientoPageRoutingModule } from './lugar-nacimiento-routing.module';

import { LugarNacimientoPage } from './lugar-nacimiento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarNacimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LugarNacimientoPage]
})
export class LugarNacimientoPageModule {}
