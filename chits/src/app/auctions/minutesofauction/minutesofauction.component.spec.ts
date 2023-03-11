import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesofauctionComponent } from './minutesofauction.component';

describe('MinutesofauctionComponent', () => {
  let component: MinutesofauctionComponent;
  let fixture: ComponentFixture<MinutesofauctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutesofauctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutesofauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
