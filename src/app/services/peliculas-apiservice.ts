import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeliculasAPIService {
  APIep = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';
  datos: any;

  constructor(public http: HttpClient) {
    this.http.get(this.APIep).subscribe(
      (result) => {
        console.log(result);
        this.datos = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPeliculas(): any {
    return this.http.get(this.APIep);
  }

  getPelicula(id: number): any {
    return this.http.get(this.APIep + '/' + id);
  }
}
