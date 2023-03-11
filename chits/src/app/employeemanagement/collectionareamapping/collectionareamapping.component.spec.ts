import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionAreaMappingComponent } from './collectionareamapping.component';

describe('CollectionAreaMappingComponent', () => {
  let component: CollectionAreaMappingComponent;
  let fixture: ComponentFixture<CollectionAreaMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionAreaMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionAreaMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
