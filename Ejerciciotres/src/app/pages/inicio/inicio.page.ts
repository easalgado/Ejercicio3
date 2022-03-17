import { Component, OnInit } from '@angular/core';

  interface componente {
    icon: string;
    name: string;
    redirectTo: string;


  }


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: componente[] = [
    {
      icon:'people-outline',
      name:'Descripcion',
      redirectTo: '/Descripcion'
    },
    {
      icon:'home-outline',
      name:'Lugar-Nacimiento',
      redirectTo: '/Lugar-Nacimiento'
    },
    {
      icon:'paper-plane-outline',
      name:'Metas',
      redirectTo: '/Metas'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
