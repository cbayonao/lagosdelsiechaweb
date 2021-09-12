import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PescaComponent } from './pesca.component';

describe('PescaComponent', () => {
  let component: PescaComponent;
  let fixture: ComponentFixture<PescaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PescaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PescaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
