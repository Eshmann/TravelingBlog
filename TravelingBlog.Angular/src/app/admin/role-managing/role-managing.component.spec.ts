import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleManagingComponent } from './role-managing.component';

describe('RoleManagingComponent', () => {
  let component: RoleManagingComponent;
  let fixture: ComponentFixture<RoleManagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleManagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleManagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
