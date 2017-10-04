import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CroodenModule } from "./crooden/crooden.module";
import { HttpClientModule } from "@angular/common/http";
import { CroodenComponent } from './crooden/crooden.component';
import { CroodenPagingDirective } from './crooden-paging.directive';
import { CroodenGridDirective } from './crooden-grid.directive';
import { CroodenGridComponent } from './crooden-grid/crooden-grid.component';
import { CroodenPagingComponent } from './crooden-paging/crooden-paging.component';

@NgModule({
  declarations: [
    AppComponent,
    CroodenComponent,
    CroodenPagingDirective,
    CroodenGridDirective,
    CroodenGridComponent,
    CroodenPagingComponent
  ],
  imports: [
    BrowserModule,
    CroodenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
