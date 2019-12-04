import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';



const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "clients", component: ClientsComponent},
  
  // To redirect the app to automatically launch from the home page
  { path: '', redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
