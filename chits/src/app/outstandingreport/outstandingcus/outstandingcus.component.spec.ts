import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingcusComponent } from './outstandingcus.component';

describe('OutstandingcusComponent', () => {
  let component: OutstandingcusComponent;
  let fixture: ComponentFixture<OutstandingcusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingcusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingcusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
