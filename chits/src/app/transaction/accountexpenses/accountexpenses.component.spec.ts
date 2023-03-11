import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountexpensesComponent } from './accountexpenses.component';

describe('AccountexpensesComponent', () => {
  let component: AccountexpensesComponent;
  let fixture: ComponentFixture<AccountexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
