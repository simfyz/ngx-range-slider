import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipWrapperComponent } from './tooltip-wrapper.component';

describe('TooltipWrapperComponent', () => {
  let component: TooltipWrapperComponent;
  let fixture: ComponentFixture<TooltipWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
