import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
  standalone: false,
})
export class VideoclubPage implements OnInit {

  constructor(private router: Router) { }

  // MARK: Ciclo de vida
  // Al cargar
  ngOnInit() {
    console.log('VideoclubPage ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter VideoclubPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }

  // Al salir
  ionViewWillLeave(){
    console.log('ionViewWillLeave VideoclubPage');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave VideoclubPage');
  }

  ngOnDestroy() {
     console.log('VideoclubPage ngOnDestroy');
  }

  // MARK: Enlace
  verPaginaDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

}
