import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';

// configuracion del locale de la app
import localeEsPE from '@angular/common/locales/es-PE'
import localFrCa from '@angular/common/locales/fr-CA'
import localEn  from '@angular/common/locales/en'
import {registerLocaleData} from '@angular/common'
//esto es neceario para registrar el local dentro de la aplicacion
registerLocaleData(localeEsPE)
registerLocaleData(localFrCa)
registerLocaleData(localEn)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule,
    ],

  providers: [
    {
      provide:LOCALE_ID,useValue:'es-PE'  //Este establece de local este  idioma
    }
  ],  // los providrs son como los servicioss
  bootstrap: [AppComponent]
})
export class AppModule { }
