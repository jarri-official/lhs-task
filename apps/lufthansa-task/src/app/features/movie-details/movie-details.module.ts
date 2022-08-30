import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UiModule } from '@lufthansa-task/ui';

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
    StoreModule.forFeature(featureReducerKey, reducer),
    EffectsModule.forFeature([MovieDetailsStoreEffects]),
    UiModule
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
