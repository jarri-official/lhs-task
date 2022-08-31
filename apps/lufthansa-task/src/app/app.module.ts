import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TitleStrategy } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { LayoutModule } from '@lufthansa-task/layout';
import { ApiService } from '@lufthansa-task/api';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ApiMoviesDataService } from './services/api-movies-data.service';
import { AppTitleStrategy } from './strategies/app-title.strategy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    LayoutModule,
    PagesModule,
    StoreRouterConnectingModule.forRoot()
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {
      provide: ApiService,
      useClass: ApiMoviesDataService
    },
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy
    }
  ]
})
export class AppModule {
}
