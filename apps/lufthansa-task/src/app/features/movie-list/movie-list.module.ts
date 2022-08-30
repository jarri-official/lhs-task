import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MovieListComponent } from './components/movie-list.component';
import { MovieListStoreFacade } from './store/facade';
import { MovieListDataService } from './services/movie-list-data.service';
import { MovieListStoreEffects } from './store/effects';
import { featureReducerKey } from './store/feature-reducer-key.constant';
import { reducer } from './store/reducer';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(featureReducerKey, reducer),
    EffectsModule.forFeature([MovieListStoreEffects])
  ],
  exports: [
    MovieListComponent
  ],
  providers: [
    MovieListStoreFacade,
    MovieListDataService,
    MovieListStoreEffects
  ]
})
export class MovieListModule {
}
