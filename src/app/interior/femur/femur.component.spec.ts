import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemurComponent } from './femur.component';

describe('FemurComponent', () => {
  let component: FemurComponent;
  let fixture: ComponentFixture<FemurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FemurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
