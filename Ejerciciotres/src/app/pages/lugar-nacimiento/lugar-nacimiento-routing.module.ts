import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarNacimientoPage } from './lugar-nacimiento.page';

const routes: Routes = [
  {
    path: '',
    component: LugarNacimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarNacimientoPageRoutingModule {}
