import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas-service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
  standalone: false,
})
export class VideoclubPage implements OnInit {
  listaPeliculas: any[];
  modoLista: Boolean = true;

  constructor(
    private router: Router,
    private peliculasService: PeliculasService
  ) {
    console.log(this.peliculasService.getPeliculas());
    this.listaPeliculas = this.peliculasService.getPeliculas();
  }

  // MARK: Ciclo de vida
  // Al cargar
  ngOnInit() {
    console.log('VideoclubPage ngOnInit');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter VideoclubPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }

  // Al salir
  ionViewWillLeave() {
    console.log('ionViewWillLeave VideoclubPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave VideoclubPage');
  }

  ngOnDestroy() {
    console.log('VideoclubPage ngOnDestroy');
  }

  // MARK: Enlace
  verPaginaDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  cambiarVista(): void {
    this.modoLista = !this.modoLista;
  }
}
