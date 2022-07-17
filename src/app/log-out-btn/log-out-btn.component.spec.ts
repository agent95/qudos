import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutBtnComponent } from './log-out-btn.component';

describe('LogOutBtnComponent', () => {
  let component: LogOutBtnComponent;
  let fixture: ComponentFixture<LogOutBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogOutBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogOutBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
