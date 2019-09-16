import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaexpertComponent } from './javaexpert.component';

describe('JavaexpertComponent', () => {
  let component: JavaexpertComponent;
  let fixture: ComponentFixture<JavaexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
