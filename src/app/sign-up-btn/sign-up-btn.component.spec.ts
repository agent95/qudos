import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBtnComponent } from './sign-up-btn.component';

describe('SignUpBtnComponent', () => {
  let component: SignUpBtnComponent;
  let fixture: ComponentFixture<SignUpBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
