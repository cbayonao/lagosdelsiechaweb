import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public myFooter: string;

  currentYear = new Date().getFullYear();

  constructor() {
    this.myFooter = `Copyright © Lagos del Siecha S.A.S. ${this.currentYear}`;
  }

  ngOnInit(): void {}
}
