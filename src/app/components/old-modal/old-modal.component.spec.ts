import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldModalComponent } from './old-modal.component';

describe('OldModalComponent', () => {
  let component: OldModalComponent;
  let fixture: ComponentFixture<OldModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
