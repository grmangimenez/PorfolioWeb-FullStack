import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarradenavegacionComponent } from './compartido/barradenavegacion/barradenavegacion/barradenavegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BarradenavegacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
