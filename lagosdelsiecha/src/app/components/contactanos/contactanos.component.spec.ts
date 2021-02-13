import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactanosComponent } from './contactanos.component';

describe('ContactanosComponent', () => {
  let component: ContactanosComponent;
  let fixture: ComponentFixture<ContactanosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
