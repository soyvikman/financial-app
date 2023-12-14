import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VisualizationService } from '../../services/visualization.service';
import { Router } from '@angular/router';
import { dateValidator } from 'modules/visualizationFeature/validators/dateRelease.validator';
import { dateRevisionValidator } from 'modules/visualizationFeature/validators/dateRevision.validator';

@Component({
  selector: 'app-visualization-form',
  templateUrl: './visualization-form.component.html',
  styleUrls: ['./visualization-form.component.scss'],
})
export class VisualizationFormComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  constructor(
    private visualizationService: VisualizationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
        asyncValidators: [this.visualizationService.uniqueIdValidator()],
      }),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(200),
      ]),
      logo: new FormControl('', Validators.required),
      date_release: new FormControl('', [Validators.required, dateValidator]),
      date_revision: new FormControl('', [
        Validators.required,
        dateRevisionValidator,
      ]),
    });
  }
  onSubmitForm() {
    this.visualizationService
      .postFinancialProducts(this.addForm.value)
      .subscribe(
        (response) => {
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
