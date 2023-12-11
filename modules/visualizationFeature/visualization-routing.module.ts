import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizationTableComponent } from './components/visualization-table/visualization-table.component';
import { VisualizationComponentComponent } from './components/visualization-component/visualization-component.component';

const routes: Routes = [
  { path: '', component: VisualizationComponentComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizationRoutingModule {}
