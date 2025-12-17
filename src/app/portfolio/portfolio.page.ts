import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: false,
})
export class PortfolioPage implements OnInit {

  listaTrabajos: {
    titulo: string,
    desc: string,
    fecha: string,
    enlace?: string
  }[];

  constructor() { 
    this.listaTrabajos = [
      { titulo: 'Game Boy Learning Adventure',
        desc: 'Game Boy Leaning Adventure es un libro interactivo donde podrás aprender enamblador des de 0 en una aventura tipo Elige tu propia Aventura. Descubrirás poblados, personajes y sobre todo ¡aprenderás ensamblador para la mítica consola de Nintendo!',
        fecha: '2025',
      },
      { titulo: 'Two Wonders',
        desc: 'Tu nueva aventura como aprendiz de mago està a punto de empezar... ✨',
        fecha: '2024',
        enlace: 'https://kaiwagames.itch.io/two-wonders'
      },
      { titulo: 'One Wonder',
        desc: 'Beeing a sorcerer\'s apprentice is quite difficult when you don\'t know how to cast spells...',
        fecha: '2023',
        enlace: 'https://kaiwa-ams1.itch.io/one-wonder'
      },
      { titulo: 'RobArte',
        desc: 'Sokoban-inspired museum robbery game',
        fecha: '2023',
        enlace: 'https://jsala.itch.io/robarte'
      },
      { titulo: 'The Trunk',
        desc: 'You wake up in a trunk',
        fecha: '2022',
        enlace: 'https://jsala.itch.io/the-trunk'
      },
      { titulo: 'Plantados',
        desc: 'Game versus garden',
        fecha: '2021',
        enlace: 'https://jsala.itch.io/plantados'
      },
    ];
  }

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
