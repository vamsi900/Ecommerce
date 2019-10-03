import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesDetailsComponent } from './mobiles-details.component';

describe('MobilesDetailsComponent', () => {
  let component: MobilesDetailsComponent;
  let fixture: ComponentFixture<MobilesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
