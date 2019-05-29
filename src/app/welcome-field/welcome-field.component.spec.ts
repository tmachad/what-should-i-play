import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFieldComponent } from './welcome-field.component';

describe('WelcomeFieldComponent', () => {
  let component: WelcomeFieldComponent;
  let fixture: ComponentFixture<WelcomeFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
