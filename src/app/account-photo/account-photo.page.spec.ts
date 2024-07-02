import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountPhotoPage } from './account-photo.page';

describe('AccountPhotoPage', () => {
  let component: AccountPhotoPage;
  let fixture: ComponentFixture<AccountPhotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccountPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
