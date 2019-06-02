import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorComponent } from './leitor.component';

describe('LeitorComponent', () => {
  let component: LeitorComponent;
  let fixture: ComponentFixture<LeitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
