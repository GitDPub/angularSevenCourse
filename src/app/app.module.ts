import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetTextColorDirective } from './directives/setTextColor/set-text-color.directive';
import { HighLightTextDirective } from './directives/highLightText/high-light-text.directive';
import { AddElementTextDirective } from './directives/addElementText/add-element-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetTextColorDirective,
    HighLightTextDirective,
    AddElementTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
