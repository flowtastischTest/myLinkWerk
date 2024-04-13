import { Routes } from '@angular/router';
import { LinksComponent } from './links/links.component';

export const routes: Routes = [
    { path: ':name', component: LinksComponent },
];
