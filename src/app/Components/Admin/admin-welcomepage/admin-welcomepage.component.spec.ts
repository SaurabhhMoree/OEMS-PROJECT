import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWelcomepageComponent } from './admin-welcomepage.component';

describe('AdminWelcomepageComponent', () => {
  let component: AdminWelcomepageComponent;
  let fixture: ComponentFixture<AdminWelcomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWelcomepageComponent]
    });
    fixture = TestBed.createComponent(AdminWelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
