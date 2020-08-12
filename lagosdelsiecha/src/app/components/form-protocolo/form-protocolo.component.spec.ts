import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProtocoloComponent } from './form-protocolo.component';

describe('FormProtocoloComponent', () => {
  let component: FormProtocoloComponent;
  let fixture: ComponentFixture<FormProtocoloComponent>;

  beforeEach(async(() => {
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
