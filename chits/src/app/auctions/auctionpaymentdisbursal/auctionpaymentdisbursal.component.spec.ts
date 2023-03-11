import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionpaymentdisbursalComponent } from './auctionpaymentdisbursal.component';

describe('AuctionpaymentdisubursalComponent', () => {
  let component: AuctionpaymentdisbursalComponent;
  let fixture: ComponentFixture<AuctionpaymentdisbursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionpaymentdisbursalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuctionpaymentdisbursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
