import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditClassComponent } from './modal-edit-class.component';

describe('ModalEditClassComponent', () => {
  let component: ModalEditClassComponent;
  let fixture: ComponentFixture<ModalEditClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditClassComponent]
    });
    fixture = TestBed.createComponent(ModalEditClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
