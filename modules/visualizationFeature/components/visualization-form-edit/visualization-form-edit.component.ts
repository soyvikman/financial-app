import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VisualizationService } from 'modules/visualizationFeature/services/visualization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { dateValidator } from 'modules/visualizationFeature/validators/dateRelease.validator';
import { dateRevisionValidator } from 'modules/visualizationFeature/validators/dateRevision.validator';

@Component({
  selector: 'app-visualization-form-edit',
  templateUrl: './visualization-form-edit.component.html',
  styleUrls: ['./visualization-form-edit.component.scss'],
})
export class VisualizationFormEditComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  id: string | null = '';

  constructor(
    private visualizationService: VisualizationService,
    private router: Router,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      id: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
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
    this.fillValues();
  }

  fillValues() {
    this._Activatedroute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('id');
    });
    this.visualizationService.getFinancialProducts().subscribe((data) => {
      let dataFiltered = data.filter((item: any) => item.id == this.id);

      this.addForm.setValue({
        id: dataFiltered[0].id,
        name: dataFiltered[0].name,
        description: dataFiltered[0].description,
        logo: dataFiltered[0].logo,
        date_release: this.formatDate(dataFiltered[0].date_release),
        date_revision: this.formatDate(dataFiltered[0].date_revision),
      });
      this.addForm['controls']['id'].disable();
    });
  }

  onSubmitForm() {
    this.visualizationService
      .editFinancialProductsById(this.id, {
        id: this.id,
        ...this.addForm.value,
      })
      .subscribe(
        (response) => {
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  private formatDate(date: any) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
