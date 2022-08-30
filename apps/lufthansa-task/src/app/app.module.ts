import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { LayoutModule } from '@lufthansa-task/layout';
import { ApiService } from '@lufthansa-task/api';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ApiMoviesDataService } from './services/api-movies-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    LayoutModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: ApiService,
      useClass: ApiMoviesDataService
    }
  ]
})
export class AppModule {
}
