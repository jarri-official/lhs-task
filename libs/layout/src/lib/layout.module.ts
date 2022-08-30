import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MainContentComponent,
    HeaderComponent,
  ],
  exports: [
    MainContentComponent,
    HeaderComponent,
  ]
})
export class LayoutModule {
}
