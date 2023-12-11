import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VisualizationTableComponent } from './components/visualization-table/visualization-table.component';
import { SharedModule } from 'shared/shared.module';
import { VisualizationBodyComponent } from './components/visualization-body/visualization-body.component';
import { VisualizationComponentComponent } from './components/visualization-component/visualization-component.component';

@NgModule({
  declarations: [
    VisualizationTableComponent,
    VisualizationBodyComponent,
    VisualizationComponentComponent,
  ],
  imports: [CommonModule, VisualizationRoutingModule, SharedModule],
})
export class VisualizationModule {}
