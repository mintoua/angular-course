import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InscriptionListComponent} from "./backoffice/inscription-list/inscription-list.component";
import {SessionListComponent} from "./backoffice/session-list/session-list.component";
import {FormateurListComponent} from "./backoffice/formateur-list/formateur-list.component";
import {CoursListComponent} from "./backoffice/cours-list/cours-list.component";
import {HomeComponent} from "./backoffice/home/home.component";

const routes: Routes =[
  { path: 'inscriptions',  component: InscriptionListComponent },
  { path: 'sessions',  component: SessionListComponent },
  { path: 'formateurs',  component: FormateurListComponent },
  { path: 'cours',  component: CoursListComponent },
  { path: 'home',  component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
