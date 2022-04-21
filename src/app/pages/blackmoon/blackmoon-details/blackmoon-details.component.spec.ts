import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackmoonDetailsComponent } from './blackmoon-details.component';

describe('BlackmoonDetailsComponent', () => {
  let component: BlackmoonDetailsComponent;
  let fixture: ComponentFixture<BlackmoonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackmoonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackmoonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
