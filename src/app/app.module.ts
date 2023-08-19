import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from "@angular/forms";
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { CoursListComponent } from './cours-list/cours-list.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    CoursDetailsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PostComponent,
    BlogComponent,
    HomeComponent,
    CoursListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
