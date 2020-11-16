import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path : 'home', component: HomepageComponent
  },
  {
    path : 'search/:word', component: SearchComponent
  },
  {
    path : 'about', component: AboutComponent
  },
  {
    path : '**' , pathMatch: "full", redirectTo : "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
