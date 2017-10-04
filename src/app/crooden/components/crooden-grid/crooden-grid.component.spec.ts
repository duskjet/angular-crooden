import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroodenGridComponent } from './crooden-grid.component';

describe('CroodenGridComponent', () => {
  let component: CroodenGridComponent;
  let fixture: ComponentFixture<CroodenGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroodenGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroodenGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
