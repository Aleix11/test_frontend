import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGnomePage } from './info-gnome.page';

describe('InfoGnomePage', () => {
  let component: InfoGnomePage;
  let fixture: ComponentFixture<InfoGnomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGnomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGnomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
