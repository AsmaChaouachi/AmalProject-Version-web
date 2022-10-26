import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarADMINComponent } from './sidebar-admin.component';

describe('SidebarADMINComponent', () => {
  let component: SidebarADMINComponent;
  let fixture: ComponentFixture<SidebarADMINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarADMINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarADMINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
