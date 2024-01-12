import { Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
  {path: '', title: 'Home page', component: HomeComponent},
  {path: 'about', title: 'About page', component: AboutComponent}
];
