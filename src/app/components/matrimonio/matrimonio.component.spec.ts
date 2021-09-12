import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatrimonioComponent } from './matrimonio.component';

describe('MatrimonioComponent', () => {
  let component: MatrimonioComponent;
  let fixture: ComponentFixture<MatrimonioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
