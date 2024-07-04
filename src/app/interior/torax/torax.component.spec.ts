import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToraxComponent } from './torax.component';

describe('ToraxComponent', () => {
  let component: ToraxComponent;
  let fixture: ComponentFixture<ToraxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToraxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToraxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
