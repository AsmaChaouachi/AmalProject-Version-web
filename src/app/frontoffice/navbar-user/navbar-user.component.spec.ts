import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarUSERComponent } from './navbar-user.component';

describe('NavbarUSERComponent', () => {
  let component: NavbarUSERComponent;
  let fixture: ComponentFixture<NavbarUSERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarUSERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarUSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
