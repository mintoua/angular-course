import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SidebarComponent } from './laylout/sidebar/sidebar.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import { InscriptionListComponent } from './backoffice/inscription-list/inscription-list.component';
import { SessionListComponent } from './backoffice/session-list/session-list.component';
import { FormateurListComponent } from './backoffice/formateur-list/formateur-list.component';
import { CoursListComponent } from './backoffice/cours-list/cours-list.component';
import { HomeComponent } from './backoffice/home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InscriptionListComponent,
    SessionListComponent,
    FormateurListComponent,
    CoursListComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterOutlet,
        RouterLink
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
