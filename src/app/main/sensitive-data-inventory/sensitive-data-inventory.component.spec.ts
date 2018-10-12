import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitiveDataInventoryComponent } from './sensitive-data-inventory.component';

describe('SensitiveDataInventoryComponent', () => {
  let component: SensitiveDataInventoryComponent;
  let fixture: ComponentFixture<SensitiveDataInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensitiveDataInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensitiveDataInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
