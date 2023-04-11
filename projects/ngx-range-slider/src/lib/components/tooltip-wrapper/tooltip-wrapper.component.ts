import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'ngx-slider-tooltip-wrapper',
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.scss']
})
export class TooltipWrapperComponent {
  @Input() template: TemplateRef<any> | null = null;

  @Input() tooltip: string | null = null;

  @Input() placement: string | null = null;

  @Input() content: string | null = null;
}
