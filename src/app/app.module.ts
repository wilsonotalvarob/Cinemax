import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Landingpage/landing-page.component';
import { NavbarSocialComponent } from './Landingpage/navbar-social/navbar-social.component';
import { NavbarMenuComponent } from './Landingpage/navbar-menu/navbar-menu.component';
import { MoviesFilterComponent } from './Landingpage/movies-filter/movies-filter.component';
import { SlidesComponent } from './Landingpage/slides/slides.component';
import { WeeklyBilboardsComponent } from './Landingpage/weekly-bilboards/weekly-bilboards.component';
import { PremieresComponent } from './Landingpage/premieres/premieres.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent,
    MoviesFilterComponent,
    SlidesComponent,
    WeeklyBilboardsComponent,
    PremieresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
