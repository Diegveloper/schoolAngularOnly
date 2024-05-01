import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eror404PageComponent } from './eror404-page.component';

describe('Eror404PageComponent', () => {
  let component: Eror404PageComponent;
  let fixture: ComponentFixture<Eror404PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eror404PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Eror404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
