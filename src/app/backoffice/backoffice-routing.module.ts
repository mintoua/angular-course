import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InscriptionListComponent} from "./inscription-list/inscription-list.component";
import {SessionListComponent} from "./session-list/session-list.component";
import {FormateurListComponent} from "./formateur-list/formateur-list.component";
import {CoursListComponent} from "./cours-list/cours-list.component";
import {AdminComponent} from "./admin/admin.component";
import {AddCoursComponent} from "./add-cours/add-cours.component";

const routes: Routes = [
  { path: 'inscriptions',  component: InscriptionListComponent },
  { path: 'sessions',  component: SessionListComponent },
  { path: 'formateurs',  component: FormateurListComponent },
  { path: 'cours',  component: CoursListComponent },
  { path: 'add-cours', component: AddCoursComponent},
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
