import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingrouteComponent } from './outstandingroute.component';

describe('OutstandingrouteComponent', () => {
  let component: OutstandingrouteComponent;
  let fixture: ComponentFixture<OutstandingrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
