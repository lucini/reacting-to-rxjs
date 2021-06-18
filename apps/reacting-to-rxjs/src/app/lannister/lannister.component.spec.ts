import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LannisterComponent } from './lannister.component';

describe('LannisterComponent', () => {
  let component: LannisterComponent;
  let fixture: ComponentFixture<LannisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LannisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LannisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
