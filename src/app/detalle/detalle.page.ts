import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../services/peliculas-service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false,
})
export class DetallePage implements OnInit {

  tituloDetalle: string = "Detalle de la película";
  pelicula: any;
  //id: any; //no va

  constructor(private activatedRoute: ActivatedRoute, private peliculaService: PeliculasService) { 
    //this.pelicula = this.peliculaService.getPelicula(this.id); // no va
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pelicula = this.peliculaService.getPelicula(Number(id));
    console.log(this.pelicula);
  }

  // Al cargar
  ngOnInit() {
    console.log('DetallePage ngOnInit');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("mira el id: " + id);
    switch (id) {
      case '1':
        this.tituloDetalle = `Detalle peli ${id}`;
        break;
      case '2':
        this.tituloDetalle = `Detalle peli ${id}`;
        break;
      case '3':
        this.tituloDetalle = `Detalle peli ${id}`;
        break;
      case '4':
        this.tituloDetalle = `Detalle peli ${id}`;
        break;
      case '5':
        this.tituloDetalle = `Detalle peli ${id}`;
        break;
    }
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter DetallePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter DetallePage');
  }

  // Al salir
  ionViewWillLeave(){
    console.log('ionViewWillLeave DetallePage');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave DetallePage');
  }

  ngOnDestroy() {
     console.log('DetallePage ngOnDestroy');
  }

}
