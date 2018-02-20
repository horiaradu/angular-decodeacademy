import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyDirectivesComponent } from './fancy-directives.component';

describe('FancyDirectivesComponent', () => {
  let component: FancyDirectivesComponent;
  let fixture: ComponentFixture<FancyDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
