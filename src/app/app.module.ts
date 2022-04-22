import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { TopnavComponent } from './containers/topnav/topnav.component';
import { NavMenuComponent } from './containers/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkInProgressComponent,
    TopnavComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
