import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeincentiveComponent } from './employeeincentive.component';

describe('EmployeeincentiveComponent', () => {
  let component: EmployeeincentiveComponent;
  let fixture: ComponentFixture<EmployeeincentiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeincentiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeincentiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
