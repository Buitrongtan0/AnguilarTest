import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointManagerComponent } from './point-manager.component';

describe('PointManagerComponent', () => {
  let component: PointManagerComponent;
  let fixture: ComponentFixture<PointManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointManagerComponent]
    });
    fixture = TestBed.createComponent(PointManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
