import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizationModule } from 'modules/visualizationFeature/visualization.module';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, VisualizationModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
