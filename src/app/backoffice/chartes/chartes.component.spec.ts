import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartesComponent } from './chartes.component';

describe('ChartesComponent', () => {
  let component: ChartesComponent;
  let fixture: ComponentFixture<ChartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
