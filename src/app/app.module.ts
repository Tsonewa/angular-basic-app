import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlert } from './success.alert/success.alert.component';
import { WarningAlert } from './warning.alert/warning.alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
