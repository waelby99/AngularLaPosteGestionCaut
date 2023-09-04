import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbanComponent } from './editban.component';

describe('EditbanComponent', () => {
  let component: EditbanComponent;
  let fixture: ComponentFixture<EditbanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditbanComponent]
    });
    fixture = TestBed.createComponent(EditbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
