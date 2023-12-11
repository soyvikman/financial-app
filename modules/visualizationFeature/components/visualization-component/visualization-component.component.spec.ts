import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationComponentComponent } from './visualization-component.component';

describe('VisualizationComponentComponent', () => {
  let component: VisualizationComponentComponent;
  let fixture: ComponentFixture<VisualizationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizationComponentComponent]
    });
    fixture = TestBed.createComponent(VisualizationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
