import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherOneComponent } from './another-one.component';

describe('AnotherOneComponent', () => {
  let component: AnotherOneComponent;
  let fixture: ComponentFixture<AnotherOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
