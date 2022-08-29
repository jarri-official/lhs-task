import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { MovieDetailsComponent } from './components/movie-details.component';
import { featureReducerKey } from './store/feature-reducer-key.constant';
import { reducer } from './store/reducer';
import { MovieDetailsStoreFacade } from './store/facade';
import { MovieDetailsStoreEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(featureReducerKey, reducer),
    EffectsModule.forFeature([MovieDetailsStoreEffects])
  ],
  exports: [
    MovieDetailsComponent
  ],
  providers: [
    MovieDetailsStoreFacade,
    MovieDetailsStoreEffects
  ]
})
export class MovieDetailsModule {
}
