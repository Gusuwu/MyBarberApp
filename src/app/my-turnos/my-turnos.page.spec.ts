import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTurnosPage } from './my-turnos.page';

describe('MyTurnosPage', () => {
  let component: MyTurnosPage;
  let fixture: ComponentFixture<MyTurnosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyTurnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
