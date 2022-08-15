import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';

@NgModule({
  declarations: [CabeceraComponent, PiedepaginaComponent],
  imports: [CommonModule],
  exports: [CabeceraComponent, PiedepaginaComponent]
})
export class SeccionComunModule {}
