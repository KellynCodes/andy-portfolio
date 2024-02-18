import { Routes } from '@angular/router';
import { PortfolioDetail } from './pages/portfolio-detail/portfolio-detail';
import { Home } from './pages/home';
import { NotFound } from './components/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Andy',
    children: [
      {
        path: 'portfolio/:id',
        component: PortfolioDetail,
        title: 'Portfolio Detail',
      },
      {
        path: '**',
        component: NotFound,
        pathMatch: 'full',
      },
    ],
  },
];
