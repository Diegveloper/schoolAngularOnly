import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrrollmentsPageComponent } from './enrollments-page.component';

describe('EnrrollmentsPageComponent', () => {
  let component: EnrrollmentsPageComponent;
  let fixture: ComponentFixture<EnrrollmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnrrollmentsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrrollmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
