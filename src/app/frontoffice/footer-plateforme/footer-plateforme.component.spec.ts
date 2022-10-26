import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPlateformeComponent } from './footer-plateforme.component';

describe('FooterPlateformeComponent', () => {
  let component: FooterPlateformeComponent;
  let fixture: ComponentFixture<FooterPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPlateformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
