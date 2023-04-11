import {NgModule} from '@angular/core';
import {NgxSliderComponent} from './components/ngx-slider/ngx-slider.component';
import {TooltipWrapperComponent} from './components/tooltip-wrapper/tooltip-wrapper.component';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {SliderElementDirective} from './directives/slider-element.directive';
import {SliderHandleDirective} from './directives/slider-handle.directive';
import {SliderLabelDirective} from './directives/slider-label.directive';


@NgModule({
  declarations: [
    NgxSliderComponent,
    TooltipWrapperComponent,
    SliderElementDirective,
    SliderHandleDirective,
    SliderLabelDirective
  ],
  imports: [
    NgIf,
    NgStyle,
    NgForOf,
    NgClass
  ],
  exports: [
    NgxSliderComponent
  ]
})
export class NgxRangeSliderModule {
}
