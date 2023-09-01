import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddordComponent } from './addord.component';

describe('AddordComponent', () => {
  let component: AddordComponent;
  let fixture: ComponentFixture<AddordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddordComponent]
    });
    fixture = TestBed.createComponent(AddordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
