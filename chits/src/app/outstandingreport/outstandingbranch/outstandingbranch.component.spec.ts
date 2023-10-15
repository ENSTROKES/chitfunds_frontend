import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingbranchComponent } from './outstandingbranch.component';

describe('OutstandingbranchComponent', () => {
  let component: OutstandingbranchComponent;
  let fixture: ComponentFixture<OutstandingbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingbranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
