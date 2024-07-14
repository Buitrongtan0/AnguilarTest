import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudientManagerComponent } from './studient-manager.component';

describe('StudientManagerComponent', () => {
  let component: StudientManagerComponent;
  let fixture: ComponentFixture<StudientManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudientManagerComponent]
    });
    fixture = TestBed.createComponent(StudientManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
