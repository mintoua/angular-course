import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import {InscriptionListComponent} from "./inscription-list/inscription-list.component";
import {SessionListComponent} from "./session-list/session-list.component";
import {FormateurListComponent} from "./formateur-list/formateur-list.component";
import {CoursListComponent} from "./cours-list/cours-list.component";
import { AdminComponent } from './admin/admin.component';
import {AppModule} from "../app.module";
import {SidebarComponent} from "../layouts/sidebar/sidebar.component";
import { CoursComponent } from './cours/cours.component';
import { AddCoursComponent } from './add-cours/add-cours.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddFormateurComponent } from './add-formateur/add-formateur.component';


@NgModule({
  declarations: [
    InscriptionListComponent,
    SessionListComponent,
    FormateurListComponent,
    CoursListComponent,
    AdminComponent,
    SidebarComponent,
    CoursComponent,
    AddCoursComponent,
    AddFormateurComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class BackofficeModule { }
