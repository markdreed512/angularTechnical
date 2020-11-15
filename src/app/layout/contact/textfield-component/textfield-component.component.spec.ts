import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldComponentComponent } from './textfield-component.component';

describe('TextfieldComponentComponent', () => {
  let component: TextfieldComponentComponent;
  let fixture: ComponentFixture<TextfieldComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
