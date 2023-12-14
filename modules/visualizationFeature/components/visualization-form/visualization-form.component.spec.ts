import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationFormComponent } from './visualization-form.component';

describe('VisualizationFormComponent', () => {
  let component: VisualizationFormComponent;
  let fixture: ComponentFixture<VisualizationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationFormComponent]
    });
    fixture = TestBed.createComponent(VisualizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
