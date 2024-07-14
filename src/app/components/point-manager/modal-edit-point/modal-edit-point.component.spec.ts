import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditPointComponent } from './modal-edit-point.component';

describe('ModalEditPointComponent', () => {
  let component: ModalEditPointComponent;
  let fixture: ComponentFixture<ModalEditPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditPointComponent]
    });
    fixture = TestBed.createComponent(ModalEditPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
