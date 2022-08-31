import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { movieDetailsRouterParamKey } from '../features/movie-details';
import { urls } from '../shared/constants/urls.constant';

const routes: Routes = [
  {
    path: ``,
    pathMatch: 'full',
    loadComponent: () => import('./movie-list/movie-list.page').then(page => page.MovieListPage),
    title: 'Movie list'
  },
  {
    path: `movie/:${movieDetailsRouterParamKey}`,
    loadComponent: () => import('./movie-details/movie-details.page').then(page => page.MovieDetailsPage),
    title: 'Movie details'
  },
  {
    path: `${urls.notFound}`,
    loadComponent: () => import('./not-found/not-found.page').then(page => page.NotFoundPage),
    title: 'Page not found'
  },
  {
    path: `**`,
    redirectTo: `${urls.notFound}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
