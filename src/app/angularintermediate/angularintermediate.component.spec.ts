import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularintermediateComponent } from './angularintermediate.component';

describe('AngularintermediateComponent', () => {
  let component: AngularintermediateComponent;
  let fixture: ComponentFixture<AngularintermediateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularintermediateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularintermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
