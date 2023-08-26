import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnateurComponent } from './ordonnateur.component';

describe('OrdonnateurComponent', () => {
  let component: OrdonnateurComponent;
  let fixture: ComponentFixture<OrdonnateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdonnateurComponent]
    });
    fixture = TestBed.createComponent(OrdonnateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
