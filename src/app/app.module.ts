import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports : [
    CatalogueComponent // un autre module pourra l'utiliser
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
