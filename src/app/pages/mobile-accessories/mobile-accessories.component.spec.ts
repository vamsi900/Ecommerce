import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAccessoriesComponent } from './mobile-accessories.component';

describe('MobileAccessoriesComponent', () => {
  let component: MobileAccessoriesComponent;
  let fixture: ComponentFixture<MobileAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
