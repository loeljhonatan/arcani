import { Route } from '@angular/router';
import { ShellComponent } from './layout/shell.component';

export const appRoutes: Route[] = [
  {
    // RUTA MAESTRA: El Shell envuelve a todas las páginas para mantener Header/Footer fijos
    path: '',
    component: ShellComponent,
    children: [
      // 1. Portal de Inicio (Landing Page)
      {
        path: 'home',
        loadComponent: () =>
          import('./features/home/home.page').then(m => m.HomePage)
      },

      // 2. Multiverso Dinámico: Captura el Nicho (ej: /anime, /kpop)
      {
        path: ':nichoSlug',
        children: [
          {
            path: '',
            // Vista principal del Fandom (Activa la sintonía)
            loadComponent: () =>
              import('./features/nicho-view/nicho-view.page').then(m => m.NichoViewPage)
          },
          {
            path: ':productSlug',
            // Detalle de la pieza de colección
            loadComponent: () =>
              import('./features/product-detail/product-detail.page').then(m => m.ProductDetailPage)
          }
        ]
      },

      // 3. Redirección Automática: Si el usuario entra a la raíz, lo enviamos al home
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  // RUTA DE EMERGENCIA: Si la URL no existe, podrías redirigir a un 404 o al home
  {
    path: '**',
    redirectTo: 'home'
  }
];
