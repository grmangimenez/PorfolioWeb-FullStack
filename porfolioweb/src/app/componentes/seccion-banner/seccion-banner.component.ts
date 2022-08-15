import { Component, OnInit } from '@angular/core';
import { DatosporfoliowebService } from 'src/app/servicios/datosporfolioweb.service';

@Component({
  selector: 'app-seccion-banner',
  templateUrl: './seccion-banner.component.html',
  styleUrls: ['./seccion-banner.component.css'],
})
export class SeccionBannerComponent implements OnInit {
  url = "./assets/seccion-banner/datos/banner.json";
  banner: any;

  constructor(private datosporfolio: DatosporfoliowebService) {}

  ngOnInit(): void {
    this.datosporfolio.obtenerdatos(this.url).subscribe((datos) => {
      this.banner = datos;
      console.log(this.banner + 'desde el servicio con parametros');
    });
    console.log(
      'los datos estan en : ./assets/seccion-banner/datos/banner.json '
    );
  }
}
