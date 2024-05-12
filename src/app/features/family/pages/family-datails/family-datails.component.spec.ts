import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyDatailsComponent } from './family-datails.component';

describe('FamilyDatailsComponent', () => {
  let component: FamilyDatailsComponent;
  let fixture: ComponentFixture<FamilyDatailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyDatailsComponent]
    });
    fixture = TestBed.createComponent(FamilyDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
