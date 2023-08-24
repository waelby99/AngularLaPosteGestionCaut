import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautionComponent } from './caution.component';

describe('CautionComponent', () => {
  let component: CautionComponent;
  let fixture: ComponentFixture<CautionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CautionComponent]
    });
    fixture = TestBed.createComponent(CautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
