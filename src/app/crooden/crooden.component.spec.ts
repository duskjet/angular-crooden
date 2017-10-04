import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroodenComponent } from './crooden.component';

describe('CroodenComponent', () => {
  let component: CroodenComponent;
  let fixture: ComponentFixture<CroodenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroodenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroodenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
