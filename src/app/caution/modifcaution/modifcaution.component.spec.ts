import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifcautionComponent } from './modifcaution.component';

describe('ModifcautionComponent', () => {
  let component: ModifcautionComponent;
  let fixture: ComponentFixture<ModifcautionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifcautionComponent]
    });
    fixture = TestBed.createComponent(ModifcautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
