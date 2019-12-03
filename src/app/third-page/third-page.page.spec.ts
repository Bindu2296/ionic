import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPagePage } from './third-page.page';

describe('ThirdPagePage', () => {
  let component: ThirdPagePage;
  let fixture: ComponentFixture<ThirdPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
