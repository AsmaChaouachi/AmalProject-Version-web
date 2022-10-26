import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarADMINComponent } from './navbar-admin.component';

describe('NavbarADMINComponent', () => {
  let component: NavbarADMINComponent;
  let fixture: ComponentFixture<NavbarADMINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarADMINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarADMINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
