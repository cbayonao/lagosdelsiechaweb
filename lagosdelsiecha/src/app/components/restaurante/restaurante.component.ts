import { Component, OnInit } from '@angular/core';

interface TipoID {
  value: string;
  viewValue: string;
}

interface Preparations {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
})
export class RestauranteComponent implements OnInit {
  preparationList: Preparations[] = [
    { value: 'TrAj', viewValue: 'Trucha al Ajillo' },
    { value: 'TrMar', viewValue: 'Trucha a la marinera' },
    { value: 'TrMan', viewValue: 'Trucha a la mandarina' },
    { value: 'TrGr', viewValue: 'Trucha a la griega' },
    { value: 'Churr', viewValue: 'Churrasco' },
    { value: 'BaBeef', viewValue: 'Baby beef' },
    { value: 'PecPl', viewValue: 'Pechuga a la plancha' },
    { value: 'PasPes', viewValue: 'Pasta al pesto' },
    { value: 'EnCes', viewValue: 'Ensalada Cesar' },
    { value: 'PosMatr', viewValue: 'Postre Matrimonio' },
    { value: 'PosGra', viewValue: 'Postre gratinado' },
  ];
  tipoids: TipoID[] = [
    { value: 'CC', viewValue: 'Cedula de ciudadanía' },
    { value: 'CE', viewValue: 'Cedula de extranjería' },
    { value: 'TI', viewValue: 'Tarjeta de Identidad' },
    { value: 'NUIP', viewValue: 'NUIP' },
    { value: 'PA', viewValue: 'Pasaporte' },
  ];
  public title: string;
  panelOpenState = false;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  constructor() {
    this.title = 'Tipo de identificación';
  }

  ngOnInit() {}
}
