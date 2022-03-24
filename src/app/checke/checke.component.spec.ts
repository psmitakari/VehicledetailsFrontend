import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckeComponent } from './checke.component';

describe('CheckeComponent', () => {
  let component: CheckeComponent;
  let fixture: ComponentFixture<CheckeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
