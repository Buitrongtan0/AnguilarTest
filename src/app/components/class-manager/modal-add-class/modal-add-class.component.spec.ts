import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddClassComponent } from './modal-add-class.component';

describe('ModalAddClassComponent', () => {
  let component: ModalAddClassComponent;
  let fixture: ComponentFixture<ModalAddClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAddClassComponent]
    });
    fixture = TestBed.createComponent(ModalAddClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
