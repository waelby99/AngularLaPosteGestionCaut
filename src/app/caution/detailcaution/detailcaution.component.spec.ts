import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcautionComponent } from './detailcaution.component';

describe('DetailcautionComponent', () => {
  let component: DetailcautionComponent;
  let fixture: ComponentFixture<DetailcautionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcautionComponent]
    });
    fixture = TestBed.createComponent(DetailcautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
