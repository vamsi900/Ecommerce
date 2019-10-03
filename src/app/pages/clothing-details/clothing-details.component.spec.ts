import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingDetailsComponent } from './clothing-details.component';

describe('ClothingDetailsComponent', () => {
  let component: ClothingDetailsComponent;
  let fixture: ComponentFixture<ClothingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
