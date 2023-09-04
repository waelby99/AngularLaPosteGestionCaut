import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditordComponent } from './editord.component';

describe('EditordComponent', () => {
  let component: EditordComponent;
  let fixture: ComponentFixture<EditordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditordComponent]
    });
    fixture = TestBed.createComponent(EditordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
