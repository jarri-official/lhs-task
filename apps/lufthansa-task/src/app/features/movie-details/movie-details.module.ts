import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MovieDetailsComponent } from './components/movie-details.component';
import { featureReducerKey } from './store/feature-reducer-key.constant';
import { reducer } from './store/reducer';
import { MovieDetailsStoreFacade } from './store/facade';
import { MovieDetailsStoreEffects } from './store/effects';
import { MovieDetailsDataService } from './services/movie-details-data.service';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature(featureReducerKey, reducer),
    EffectsModule.forFeature([MovieDetailsStoreEffects])
  ],
  exports: [
    MovieDetailsComponent
  ],
  providers: [
    MovieDetailsStoreFacade,
    MovieDetailsStoreEffects,
    MovieDetailsDataService
  ]
})
export class MovieDetailsModule {
}
