import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningalertComponent } from './warningalert/warningalert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessalertComponent,
    WarningalertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
