import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarUSERComponent } from './sidebar-user.component';

describe('SidebarUSERComponent', () => {
  let component: SidebarUSERComponent;
  let fixture: ComponentFixture<SidebarUSERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarUSERComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarUSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
