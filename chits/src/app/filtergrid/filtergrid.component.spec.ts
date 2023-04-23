import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltergridComponent } from './filtergrid.component';

describe('FiltergridComponent', () => {
  let component: FiltergridComponent;
  let fixture: ComponentFixture<FiltergridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltergridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
