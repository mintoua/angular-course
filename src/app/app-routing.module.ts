import {PostComponent} from "./post/post.component";
import {RouterModule, Routes} from "@angular/router";
import {CoursDetailsComponent} from "./cours-details/cours-details.component";
import {BlogComponent} from "./blog/blog.component";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";

const mesRoutes: Routes  = [
    { path: 'posts', component: PostComponent},
    { path: 'cours', component: CoursDetailsComponent},
    { path: 'blog', component: BlogComponent},
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(mesRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}
