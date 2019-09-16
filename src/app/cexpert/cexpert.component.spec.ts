import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CexpertComponent } from './cexpert.component';

describe('CexpertComponent', () => {
  let component: CexpertComponent;
  let fixture: ComponentFixture<CexpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CexpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
