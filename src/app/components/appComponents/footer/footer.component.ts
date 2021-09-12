import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public myFooter: string;

  constructor() {
    this.myFooter = 'Copyright © Lagos del Siecha S.A.S. 2020';
  }

  ngOnInit(): void {}
}
