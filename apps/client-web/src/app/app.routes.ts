import { Route } from '@angular/router';
import { sintoniaGuard } from '@arcani/data-access-api-client';

export const appRoutes: Route[] = [


  {
    // Esta ruta captura el nombre del nicho
    path: ':nichoSlug',
    canActivate: [sintoniaGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/nicho-view/nicho-view').then(m => m.NichoView)
      },
      {
        path: ':productSlug',
        loadComponent: () => import('./features/product-detail/product-detail').then(m => m.ProductDetail)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home', // O el slug de tu nicho por defecto
    pathMatch: 'full'
  }


];

