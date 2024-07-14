import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditStudientComponent } from './modal-edit-studient.component';

describe('ModalEditStudientComponent', () => {
  let component: ModalEditStudientComponent;
  let fixture: ComponentFixture<ModalEditStudientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditStudientComponent]
    });
    fixture = TestBed.createComponent(ModalEditStudientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
