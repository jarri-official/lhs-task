import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule {
}
