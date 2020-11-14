import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayErrorComponentComponent } from './display-error-component.component';

describe('DisplayErrorComponentComponent', () => {
  let component: DisplayErrorComponentComponent;
  let fixture: ComponentFixture<DisplayErrorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayErrorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
