import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbasicComponent } from './cbasic.component';

describe('CbasicComponent', () => {
  let component: CbasicComponent;
  let fixture: ComponentFixture<CbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
