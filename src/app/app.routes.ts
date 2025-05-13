import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'homepage', pathMatch: 'full'
    },
    {
        path: 'homepage', loadComponent: () => import('./pages/homepage/homepage.component').then((c) => c.HomepageComponent)
    },
    {
        path: 'menu', loadComponent: () => import('./pages/menu/menu.component').then((c) => c.MenuComponent)
    }, // menu deve essere una rotta figlia di homepage?
    
    {
        path: 'about', loadComponent: () => import('./pages/about/about.component').then((c) => c.AboutComponent)
    },
    {
        path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then((c) => c.ProjectsComponent)
    },
    {
        path: 'contacts', loadComponent: () => import('./pages/contacts/contacts.component').then((c) => c.ContactsComponent)
    },
    {
        path: '**', redirectTo: 'homepage' // redirect to homepage for any unknown route
    }
];
