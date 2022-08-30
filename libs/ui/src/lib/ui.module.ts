import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { PosterComponent } from './poster/poster.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  imports: [
    CommonModule,
    LoaderComponent,
    PosterComponent,
    ButtonComponent
  ],
  exports: [
    LoaderComponent,
    PosterComponent,
    ButtonComponent
  ]
})
export class UiModule {
}
