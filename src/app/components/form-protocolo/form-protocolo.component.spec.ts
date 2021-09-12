import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormProtocoloComponent } from './form-protocolo.component';

describe('FormProtocoloComponent', () => {
  let component: FormProtocoloComponent;
  let fixture: ComponentFixture<FormProtocoloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProtocoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProtocoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
