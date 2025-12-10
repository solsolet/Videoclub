import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false,
})
export class DetallePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  // Al cargar
  ngOnInit() {
    console.log('DetallePage ngOnInit');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("mira el id: " + id);
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
