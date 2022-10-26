import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlateformeComponent } from './content-plateforme.component';

describe('ContentPlateformeComponent', () => {
  let component: ContentPlateformeComponent;
  let fixture: ComponentFixture<ContentPlateformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPlateformeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPlateformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
