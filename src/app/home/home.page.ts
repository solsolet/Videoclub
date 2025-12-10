import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  // Al cargar
  ngOnInit() {
    console.log('HomePage ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter HomePage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter HomePage');
  }

  // Al salir
  ionViewWillLeave(){
    console.log('ionViewWillLeave HomePage');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave HomePage');
  }

  ngOnDestroy() {
     console.log('HomePage ngOnDestroy');
  }

}
