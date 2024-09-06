import { NgModule } from '@angular/core';
//este de abajo es de primeNG

import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';

//su quieres utiliza un modulo por separado para mostar los componentes
@NgModule({
imports:[
  PanelModule
],
exports:[
  MenubarModule,
  ButtonModule,
  CardModule,
  FieldsetModule,
  PanelModule // PanelModule debe estar exportado

]
})
export class PrimeNgModule { }
