import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaintermediateComponent } from './javaintermediate.component';

describe('JavaintermediateComponent', () => {
  let component: JavaintermediateComponent;
  let fixture: ComponentFixture<JavaintermediateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaintermediateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaintermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
