import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material-module';
import { UserSingleComponent } from './components/user-single/user-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListingComponent,
    ToolbarComponent,
    UserSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
