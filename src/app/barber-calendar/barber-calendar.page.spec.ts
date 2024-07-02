import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarberCalendarPage } from './barber-calendar.page';

describe('BarberCalendarPage', () => {
  let component: BarberCalendarPage;
  let fixture: ComponentFixture<BarberCalendarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BarberCalendarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
