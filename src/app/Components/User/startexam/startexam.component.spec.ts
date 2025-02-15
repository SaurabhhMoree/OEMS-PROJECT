import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartexamComponent } from './startexam.component';

describe('StartexamComponent', () => {
  let component: StartexamComponent;
  let fixture: ComponentFixture<StartexamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartexamComponent]
    });
    fixture = TestBed.createComponent(StartexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
