import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VisualizationTableComponent } from './components/visualization-table/visualization-table.component';
import { SharedModule } from 'shared/shared.module';
import { VisualizationBodyComponent } from './components/visualization-body/visualization-body.component';
import { VisualizationComponentComponent } from './components/visualization-component/visualization-component.component';
import { VisualizationFormComponent } from './components/visualization-form/visualization-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VisualizationFormEditComponent } from './components/visualization-form-edit/visualization-form-edit.component';

@NgModule({
  declarations: [
    VisualizationTableComponent,
    VisualizationBodyComponent,
    VisualizationComponentComponent,
    VisualizationFormComponent,
    VisualizationFormEditComponent,
  ],
  imports: [
    CommonModule,
    VisualizationRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class VisualizationModule {}
