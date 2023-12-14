import { Component, OnInit } from '@angular/core';
import { VisualizationService } from '../../services/visualization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualization-table',
  templateUrl: './visualization-table.component.html',
  styleUrls: ['./visualization-table.component.scss'],
})
export class VisualizationTableComponent implements OnInit {
  idProduct: string = '';
  nameProduct: string = '';
  data: any[] = [];
  showMenu: boolean = false;
  editButtons: boolean = true;
  constructor(
    private visualizationService: VisualizationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.visualizationService.getFinancialProducts().subscribe((data) => {
      this.data = data;
    });
  }

  //Add button
  addProduct() {
    this.router.navigate(['/add']);
  }

  //Other functions
  clickKebab($event: any) {
    this.idProduct = $event;
    let id: any = document.getElementsByClassName(`button${$event}`)[0];
    if (id['style'].visibility == 'hidden') {
      id['style'].visibility = 'visible';
    } else {
      id['style'].visibility = 'hidden';
    }
  }

  editProduct($event: any) {
    let id: any = document.getElementsByClassName(`button${$event}`)[0];
    if (id['style'].visibility == 'hidden') {
      id['style'].visibility = 'visible';
    } else {
      id['style'].visibility = 'hidden';
    }

    this.router.navigate([`/edit/${$event}`]);
  }

  deleteProduct($event: any) {
    this.idProduct = $event.id;
    this.nameProduct = $event.name;
    let id: any = document.getElementsByClassName(`button${$event.id}`)[0];
    if (id['style'].visibility == 'hidden') {
      id['style'].visibility = 'visible';
    } else {
      id['style'].visibility = 'hidden';
    }

    let modal: any = document.getElementsByClassName(`modal`)[0];
    modal['style'].display = 'block';
  }

  clickOutside() {
    let id: any = document.getElementsByClassName(`edit-buttons`)[0];
    id['style'].visibility = 'hidden';
  }

  onCancel() {
    this.idProduct = '';
    this.nameProduct = '';
    let modal: any = document.getElementsByClassName(`modal`)[0];
    modal['style'].display = 'none';
  }

  onDelete() {
    let modal: any = document.getElementsByClassName(`modal`)[0];
    modal['style'].display = 'none';
    this.visualizationService
      .deleteFinancialProducts(this.idProduct)
      .subscribe((data) => {
        this.idProduct = '';
        this.nameProduct = '';
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  }
}
