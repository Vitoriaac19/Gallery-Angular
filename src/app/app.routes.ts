import { Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AboutComponent } from './components/page/about/about.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'about', component: AboutComponent}
];
