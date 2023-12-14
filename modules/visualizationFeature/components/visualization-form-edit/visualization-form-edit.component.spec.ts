import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationFormEditComponent } from './visualization-form-edit.component';

describe('VisualizationFormEditComponent', () => {
  let component: VisualizationFormEditComponent;
  let fixture: ComponentFixture<VisualizationFormEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationFormEditComponent]
    });
    fixture = TestBed.createComponent(VisualizationFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
