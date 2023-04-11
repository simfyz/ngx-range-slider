import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxRangeSliderModule} from '@local/ngx-slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxRangeSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
