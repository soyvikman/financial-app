import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizationComponentComponent } from './components/visualization-component/visualization-component.component';
import { VisualizationFormComponent } from './components/visualization-form/visualization-form.component';
import { VisualizationFormEditComponent } from './components/visualization-form-edit/visualization-form-edit.component';

const routes: Routes = [
  { path: '', component: VisualizationComponentComponent },
  { path: 'add', component: VisualizationFormComponent },
  { path: 'edit/:id', component: VisualizationFormEditComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizationRoutingModule {}
