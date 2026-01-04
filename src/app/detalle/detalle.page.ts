import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { PeliculasService } from '../services/peliculas-service';
import { PeliculasAPIService } from '../services/peliculas-apiservice';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false,
})
export class DetallePage implements OnInit {
  tituloDetalle: string = 'Detalle de la película';
  pelicula: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaAPIService: PeliculasAPIService
  ) {
    /*const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pelicula = this.peliculaAPIService.getPelicula(Number(id)).subscribe(
      (result: any) => {
        this.pelicula = result;
      },
      (err: any) => {
        console.log(err);
      }
    );*/
  }

  // Al cargar
  ngOnInit() {
    console.log('DetallePage ngOnInit');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('mira el id: ' + id);
    this.peliculaAPIService.getPelicula(Number(id)).subscribe(
      (result: any) => {
        this.pelicula = result;
      },
      (err: any) => {
        console.log(err);
      }
    );
    console.log(this.pelicula);
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter DetallePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter DetallePage');
  }

  // Al salir
  ionViewWillLeave() {
    console.log('ionViewWillLeave DetallePage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave DetallePage');
  }

  ngOnDestroy() {
    console.log('DetallePage ngOnDestroy');
  }
}
