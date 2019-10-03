import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferZoneComponent } from './offer-zone.component';

describe('OfferZoneComponent', () => {
  let component: OfferZoneComponent;
  let fixture: ComponentFixture<OfferZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
