import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
  standalone: false
})
export class AutorPage implements OnInit {

  autora:{
    name: string,
    email: string,
    twitter: string,
    phone: string
  };

  constructor() {
    this.autora = {
      name: 'Gemma Sellés Lloret',
      email: 'gsl21@gcloud.ua.es',
      twitter: 'https://twitter.com',
      phone: '111222333'
    };
  }

  // Al cargar
  ngOnInit() {
    console.log('AutorPage ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter AutorPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AutorPage');
  }

  // Al salir
  ionViewWillLeave(){
    console.log('ionViewWillLeave AutorPage');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave AutorPage');
  }

  ngOnDestroy() {
     console.log('AutorPage ngOnDestroy');
  }
}
