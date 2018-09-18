import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOperationsComponent } from './verify-operations.component';

describe('VerifyOperationsComponent', () => {
  let component: VerifyOperationsComponent;
  let fixture: ComponentFixture<VerifyOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
