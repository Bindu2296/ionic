import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPagePage } from './reg-page.page';

describe('RegPagePage', () => {
  let component: RegPagePage;
  let fixture: ComponentFixture<RegPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
