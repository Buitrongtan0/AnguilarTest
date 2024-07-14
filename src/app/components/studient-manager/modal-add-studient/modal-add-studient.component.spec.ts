import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddStudientComponent } from './modal-add-studient.component';

describe('ModalAddStudientComponent', () => {
  let component: ModalAddStudientComponent;
  let fixture: ComponentFixture<ModalAddStudientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddStudientComponent]
    });
    fixture = TestBed.createComponent(ModalAddStudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
