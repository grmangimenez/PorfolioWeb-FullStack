import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosporfoliowebService {

  constructor(private http:HttpClient) { }

  obtenerdatos(url:string):Observable<any>{
    console.log("El servicio datosporfolioweb esta corriendo" + this.http.toString());
    return this.http.get(url);
    
  }


}
