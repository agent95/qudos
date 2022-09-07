import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitedToComponent } from './invited-to.component';

describe('InvitedToComponent', () => {
  let component: InvitedToComponent;
  let fixture: ComponentFixture<InvitedToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitedToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitedToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
