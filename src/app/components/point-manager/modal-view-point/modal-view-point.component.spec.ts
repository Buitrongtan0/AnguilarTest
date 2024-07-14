import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewPointComponent } from './modal-view-point.component';

describe('ModalViewPointComponent', () => {
  let component: ModalViewPointComponent;
  let fixture: ComponentFixture<ModalViewPointComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalViewPointComponent]
    });
    fixture = TestBed.createComponent(ModalViewPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
