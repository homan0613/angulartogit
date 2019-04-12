import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayGridMonthComponent } from './day-grid-month.component';

describe('DayGridMonthComponent', () => {
  let component: DayGridMonthComponent;
  let fixture: ComponentFixture<DayGridMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DayGridMonthComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayGridMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
