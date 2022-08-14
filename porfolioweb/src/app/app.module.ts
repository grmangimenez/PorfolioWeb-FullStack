import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SeccionAcercadComponent } from './componentes/seccion-acercad/seccion-acercad.component';
import { SeccionExperienciaComponent } from './componentes/seccion-experiencia/seccion-experiencia.component';
import { SeccionEducacionComponent } from './componentes/seccion-educacion/seccion-educacion.component';
import { SeccionComunComponent } from './componentes/seccion-comun/seccion-comun.component';
import { SeccionHardyskillComponent } from './componentes/seccion-hardyskill/seccion-hardyskill.component';
import { SeccionProyectosComponent } from './componentes/seccion-proyectos/seccion-proyectos.component';
import { SeccionBannerComponent } from './componentes/seccion-banner/seccion-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    SeccionAcercadComponent,
    SeccionExperienciaComponent,
    SeccionEducacionComponent,
    SeccionComunComponent,
    SeccionHardyskillComponent,
    SeccionProyectosComponent,
    SeccionBannerComponent
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
