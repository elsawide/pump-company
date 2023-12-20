import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPumpModalComponent } from './new-pump-modal.component';

describe('NewPumpModalComponent', () => {
  let component: NewPumpModalComponent;
  let fixture: ComponentFixture<NewPumpModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewPumpModalComponent]
    });
    fixture = TestBed.createComponent(NewPumpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
