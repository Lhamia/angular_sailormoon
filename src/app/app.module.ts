import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { SailorsComponent } from './pages/sailors/sailors.component';
import { SailorsDetailComponent } from './pages/sailors-detail/sailors-detail.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { BlackmoonComponent } from './pages/blackmoon/blackmoon.component';
import { BlackmoonDetailsComponent } from './pages/blackmoon/blackmoon-details/blackmoon-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SailorsComponent,
    SailorsDetailComponent,
    NavigatorComponent,
    BlackmoonComponent,
    BlackmoonDetailsComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
