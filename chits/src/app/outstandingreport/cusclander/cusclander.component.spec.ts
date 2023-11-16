import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusclanderComponent } from './cusclander.component';

describe('CusclanderComponent', () => {
  let component: CusclanderComponent;
  let fixture: ComponentFixture<CusclanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusclanderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusclanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
