import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: false,
})
export class PortfolioPage implements OnInit {

  constructor() { }

  // Al cargar
  ngOnInit() {
    console.log('PortfolioPage ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter PortfolioPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter PortfolioPage');
  }

  // Al salir
  ionViewWillLeave(){
    console.log('ionViewWillLeave PortfolioPage');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave PortfolioPage');
  }

  ngOnDestroy() {
     console.log('PortfolioPage ngOnDestroy');
  }

}
