import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./movie-list/movie-list.page').then(page => page.MovieListPage)
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./movie-details/movie-details.page').then(page => page.MovieDetailsPage)
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.page').then(page => page.NotFoundPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
