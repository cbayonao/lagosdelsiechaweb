import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestauranteComponent } from './restaurante.component';

describe('RestauranteComponent', () => {
  let component: RestauranteComponent;
  let fixture: ComponentFixture<RestauranteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
