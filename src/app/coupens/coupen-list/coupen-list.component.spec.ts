import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupenListComponent } from './coupen-list.component';

describe('CoupenListComponent', () => {
  let component: CoupenListComponent;
  let fixture: ComponentFixture<CoupenListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoupenListComponent]
    });
    fixture = TestBed.createComponent(CoupenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
