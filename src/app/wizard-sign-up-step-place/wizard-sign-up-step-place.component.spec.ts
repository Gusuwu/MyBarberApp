import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WizardSignUpStepPlaceComponent } from './wizard-sign-up-step-place.component';

describe('WizardSignUpStepPlaceComponent', () => {
  let component: WizardSignUpStepPlaceComponent;
  let fixture: ComponentFixture<WizardSignUpStepPlaceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardSignUpStepPlaceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WizardSignUpStepPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
