import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationTableComponent } from './visualization-table.component';

describe('VisualizationTableComponent', () => {
  let component: VisualizationTableComponent;
  let fixture: ComponentFixture<VisualizationTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationTableComponent]
    });
    fixture = TestBed.createComponent(VisualizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
