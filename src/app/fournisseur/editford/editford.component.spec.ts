import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfordComponent } from './editford.component';

describe('EditfordComponent', () => {
  let component: EditfordComponent;
  let fixture: ComponentFixture<EditfordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditfordComponent]
    });
    fixture = TestBed.createComponent(EditfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
