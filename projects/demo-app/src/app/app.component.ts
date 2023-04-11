import {Component} from '@angular/core';
import {Options} from '@local/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';

  options: Options = {
    floor: 0,
    ceil: 100,
    step: 1,
    hideLimitLabels: true,
    animate: true,
    disabled: false
  };
}
