import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import {AppModule} from "../app.module";
import {HeaderComponent} from "../layouts/header/header.component";
import {FooterComponent} from "../layouts/footer/footer.component";
import { FormationsComponent } from './formations/formations.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    FormationsComponent,
    SessionsComponent,
    ContactComponent
  ],
  exports: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
  ]
})
export class FrontofficeModule { }
