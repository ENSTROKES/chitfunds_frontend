import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommittedchitdetailComponent } from './committedchitdetail.component';

describe('CommittedchitdetailComponent', () => {
  let component: CommittedchitdetailComponent;
  let fixture: ComponentFixture<CommittedchitdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommittedchitdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommittedchitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
