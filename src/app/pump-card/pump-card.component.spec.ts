import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpCardComponent } from './pump-card.component';

describe('PumpCardComponent', () => {
  let component: PumpCardComponent;
  let fixture: ComponentFixture<PumpCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PumpCardComponent]
    });
    fixture = TestBed.createComponent(PumpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
