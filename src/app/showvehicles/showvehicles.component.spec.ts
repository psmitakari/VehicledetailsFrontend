import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvehiclesComponent } from './showvehicles.component';

describe('ShowvehiclesComponent', () => {
  let component: ShowvehiclesComponent;
  let fixture: ComponentFixture<ShowvehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowvehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
