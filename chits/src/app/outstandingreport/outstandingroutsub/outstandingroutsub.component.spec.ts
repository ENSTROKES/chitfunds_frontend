import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingroutsubComponent } from './outstandingroutsub.component';

describe('OutstandingroutsubComponent', () => {
  let component: OutstandingroutsubComponent;
  let fixture: ComponentFixture<OutstandingroutsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingroutsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstandingroutsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
