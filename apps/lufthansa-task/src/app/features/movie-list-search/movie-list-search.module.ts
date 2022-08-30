import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppFormsModule } from '@lufthansa-task/forms';
import { UiModule } from '@lufthansa-task/ui';

import { MovieListSearchComponent } from './components/movie-list-search.component';
import { featureReducerKey } from './store/feature-reducer-key.constant';
import { reducer } from './store/reducer';
import { MovieListSearchStoreFacade } from './store/facade';

@NgModule({
  declarations: [
    MovieListSearchComponent
  ],
  imports: [
    CommonModule,
    AppFormsModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(featureReducerKey, reducer),
    UiModule
  ],
  exports: [
    MovieListSearchComponent
  ],
  providers: [
    MovieListSearchStoreFacade
  ]
})
export class MovieListSearchModule {
}
