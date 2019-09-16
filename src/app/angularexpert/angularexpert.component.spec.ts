import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularexpertComponent } from './angularexpert.component';

describe('AngularexpertComponent', () => {
  let component: AngularexpertComponent;
  let fixture: ComponentFixture<AngularexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
