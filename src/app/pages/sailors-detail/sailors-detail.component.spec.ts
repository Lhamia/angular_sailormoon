import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SailorsDetailComponent } from './sailors-detail.component';

describe('SailorsDetailComponent', () => {
  let component: SailorsDetailComponent;
  let fixture: ComponentFixture<SailorsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SailorsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SailorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
