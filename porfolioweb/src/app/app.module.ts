import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarradenavegacionComponent } from './compartido/barradenavegacion/barradenavegacion.component';
import { PiedepaginaComponent } from './compartido/piedepagina/piedepagina.component';




@NgModule({
  declarations: [
    AppComponent,
    BarradenavegacionComponent,
    PiedepaginaComponent,
    
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
