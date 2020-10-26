import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    //console.log('Servicio de pagina listo');

    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
      // Leer el archivo JSON
      this.http.get('https://angular-html-b0e57.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
  
        this.equipo = resp;
        //console.log(resp);
      });  
  }
}
