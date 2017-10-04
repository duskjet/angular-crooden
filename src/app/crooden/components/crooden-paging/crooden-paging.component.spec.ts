import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CroodenPagingComponent } from './crooden-paging.component';

describe('CroodenPagingComponent', () => {
  let component: CroodenPagingComponent;
  let fixture: ComponentFixture<CroodenPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CroodenPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CroodenPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
