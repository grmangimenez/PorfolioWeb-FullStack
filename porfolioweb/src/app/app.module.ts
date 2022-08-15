import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SeccionAcercadComponent } from './componentes/seccion-acercad/seccion-acercad.component';
import { SeccionExperienciaComponent } from './componentes/seccion-experiencia/seccion-experiencia.component';
import { SeccionEducacionComponent } from './componentes/seccion-educacion/seccion-educacion.component';

import { SeccionHardyskillComponent } from './componentes/seccion-hardyskill/seccion-hardyskill.component';
import { SeccionProyectosComponent } from './componentes/seccion-proyectos/seccion-proyectos.component';
import { SeccionBannerComponent } from './componentes/seccion-banner/seccion-banner.component';

import { SeccionComunModule } from './componentes/seccion-comun/seccion-comun.module';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    SeccionAcercadComponent,
    SeccionExperienciaComponent,
    SeccionEducacionComponent,
    SeccionHardyskillComponent,
    SeccionProyectosComponent,
    SeccionBannerComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule, SeccionComunModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
