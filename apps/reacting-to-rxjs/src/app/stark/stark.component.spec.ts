import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarkComponent } from './stark.component';

describe('StarkComponent', () => {
  let component: StarkComponent;
  let fixture: ComponentFixture<StarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
