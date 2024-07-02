import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WizardSignUpStepAccountComponent } from './wizard-sign-up-step-account.component';

describe('WizardSignUpStepAccountComponent', () => {
  let component: WizardSignUpStepAccountComponent;
  let fixture: ComponentFixture<WizardSignUpStepAccountComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardSignUpStepAccountComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WizardSignUpStepAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
