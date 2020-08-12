import { Component, OnInit } from '@angular/core';

interface TipoID {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  description: string;
  precio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { description: 'Entrada a los lagos de pesca', precio: '$10.000' },
  { description: 'Alquiler de caña artesanal', precio: '$5.000' },
  { description: 'Carnada de la casa', precio: '$7.000' },
  { description: 'Libra de trucha', precio: '$10.000' },
];

@Component({
  selector: 'app-pesca',
  templateUrl: './pesca.component.html',
  styleUrls: ['./pesca.component.css'],
})
export class PescaComponent implements OnInit {
  tipoids: TipoID[] = [
    { value: 'CC', viewValue: 'Cedula de ciudadanía' },
    { value: 'CE', viewValue: 'Cedula de extranjería' },
    { value: 'TI', viewValue: 'Tarjeta de Identidad' },
    { value: 'NUIP', viewValue: 'NUIP' },
    { value: 'PA', viewValue: 'Pasaporte' },
  ];
  public title: string;
  displayedColumns: string[] = ['description', 'precio'];
  dataSource = ELEMENT_DATA;
  constructor() {
    this.title = 'Tipo de identificación';
  }

  ngOnInit() {}
}
