import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsAPIService } from './news-api.service';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
