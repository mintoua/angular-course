import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BackofficeModule} from "./backoffice/backoffice.module";
import {AccueilComponent} from "./frontoffice/accueil/accueil.component";

const routes: Routes =[
  {
    path: 'admin',
    loadChildren:  () => BackofficeModule,
  },
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: '**', redirectTo: 'accueil', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
