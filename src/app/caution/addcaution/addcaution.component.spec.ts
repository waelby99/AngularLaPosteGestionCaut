import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcautionComponent } from './addcaution.component';

describe('AddcautionComponent', () => {
  let component: AddcautionComponent;
  let fixture: ComponentFixture<AddcautionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcautionComponent]
    });
    fixture = TestBed.createComponent(AddcautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
