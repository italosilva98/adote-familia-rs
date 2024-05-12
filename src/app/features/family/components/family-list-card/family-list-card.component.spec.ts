import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyListCardComponent } from './family-list-card.component';

describe('FamilyListCardComponent', () => {
  let component: FamilyListCardComponent;
  let fixture: ComponentFixture<FamilyListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyListCardComponent]
    });
    fixture = TestBed.createComponent(FamilyListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
