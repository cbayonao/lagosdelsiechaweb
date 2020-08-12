import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitavirtualComponent } from './visitavirtual.component';

describe('VisitavirtualComponent', () => {
  let component: VisitavirtualComponent;
  let fixture: ComponentFixture<VisitavirtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitavirtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitavirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
