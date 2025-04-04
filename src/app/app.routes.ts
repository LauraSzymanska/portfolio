import { Routes } from '@angular/router';
import { HomepageComponent } from '../views/homepage/homepage.component';
import { PortfolioComponent } from '../views/portfolio/portfolio.component';


export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
    },          
    {
        path: 'portfolio',
        component: PortfolioComponent
    }
];
