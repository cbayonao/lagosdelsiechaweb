import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisitavirtualComponent } from './visitavirtual.component';

describe('VisitavirtualComponent', () => {
  let component: VisitavirtualComponent;
  let fixture: ComponentFixture<VisitavirtualComponent>;

  beforeEach(waitForAsync(() => {
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
