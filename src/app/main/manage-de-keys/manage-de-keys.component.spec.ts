import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeKeysComponent } from './manage-de-keys.component';

describe('ManageDeKeysComponent', () => {
  let component: ManageDeKeysComponent;
  let fixture: ComponentFixture<ManageDeKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDeKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDeKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
