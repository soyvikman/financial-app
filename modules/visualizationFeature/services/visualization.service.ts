import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AsyncValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class VisualizationService {
  private rootUrl =
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';
  constructor(private http: HttpClient) {}

  getFinancialProducts(): Observable<any> {
    const url = `${this.rootUrl}/bp/products`;
    const headers = new HttpHeaders().set('authorId', '499');
    return this.http.get<any>(url, { headers });
  }

  getFinancialProductsById(id: any): Observable<any> {
    const url = `${this.rootUrl}/bp/products?id=${id}`;
    const headers = new HttpHeaders().set('authorId', '499');
    return this.http.get<any>(url, { headers });
  }

  postFinancialProducts(data: any): Observable<any> {
    const url = `${this.rootUrl}/bp/products`;
    const headers = new HttpHeaders().set('authorId', '499');
    return this.http.post<any>(url, data, { headers });
  }
  //https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=trj-mnd-7

  deleteFinancialProducts(id: any): Observable<any> {
    const url = `${this.rootUrl}/bp/products?id=${id}`;
    const headers = new HttpHeaders().set('authorId', '499');
    return this.http.delete<any>(url, { headers });
  }

  editFinancialProductsById(id: any, data: any): Observable<any> {
    const url = `${this.rootUrl}/bp/products?id=${id}`;
    const headers = new HttpHeaders().set('authorId', '499');
    return this.http.put<any>(url, data, { headers });
  }

  idValidation(id: any): Observable<any> {
    const url = `${this.rootUrl}/bp/products/verification?id=${id}`;
    const headers = new HttpHeaders().set('authorId', '499');
    return this.http.get<any>(url, { headers });
  }

  uniqueIdValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.idValidation(control.value).pipe(
        map((res) => {
          return res ? { idExists: true } : null;
        })
      );
    };
  }
}
