import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  // tslint:disable-next-line:member-ordering
  caronas = [
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2 / 5 * 100,
      countDisponiveis: 3 / 5 * 100
    },
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2 / 5 * 100,
      countDisponiveis: 3 / 5 * 100
    },
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2 / 5 * 100,
      countDisponiveis: 3 / 5 * 100
    },{
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2 / 5 * 100,
      countDisponiveis: 3 / 5 * 100
    },
    {
      partida: 'Tirol, Minas Gerais',
      destino: 'Centro Universitário Una',
      motorista: {
        nome: 'Bruno Leone A. P. Corrêa',
        curso: 'Analise e Desenvolvimento de Sistemas',
        urlImg: '/assets/brunoleone.jpg'
      },
      passageiros: [
        { nome: 'Pablo Passos' },
        { nome: 'Tiago Algusto'}
      ],
      countPass: 2 / 5 * 100,
      countDisponiveis: 3 / 5 * 100
    }
  ];
}
