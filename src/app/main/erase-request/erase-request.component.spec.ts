import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseRequestComponent } from './erase-request.component';

describe('EraseRequestComponent', () => {
  let component: EraseRequestComponent;
  let fixture: ComponentFixture<EraseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EraseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EraseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
