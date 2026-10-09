import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { ContactUs } from './Components/contact-us/contact-us';
import { About } from './Components/about/about';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'contact-us',
        component: ContactUs,
    }
];
