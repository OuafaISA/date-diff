import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDiffFormComponent } from './date-diff-form.component';

describe('DateDiffFormComponent', () => {
  let component: DateDiffFormComponent;
  let fixture: ComponentFixture<DateDiffFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateDiffFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDiffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
