import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DekeyDetailsComponent } from './dekey-details.component';

describe('DekeyDetailsComponent', () => {
  let component: DekeyDetailsComponent;
  let fixture: ComponentFixture<DekeyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DekeyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DekeyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
