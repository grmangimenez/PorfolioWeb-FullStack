import { Component, OnInit } from '@angular/core';
import { DatosporfoliowebService } from 'src/app/servicios/datosporfolioweb.service';

@Component({
  selector: 'app-seccion-acercad',
  templateUrl: './seccion-acercad.component.html',
  styleUrls: ['./seccion-acercad.component.css']
})
export class SeccionAcercadComponent implements OnInit {

  url="./assets/seccion-acercad/datos/acercad.json";
  acercad = ""

  constructor(private datosporfolio:DatosporfoliowebService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerdatos(this.url).subscribe(datos=>{
      this.acercad = datos.acercad;
      console.log(this.acercad + " desde el servicio con parametros");


    })
    console.log("los datos estan en : ./assets/seccion-acercad/datos/acercade.json ");
  }

}
