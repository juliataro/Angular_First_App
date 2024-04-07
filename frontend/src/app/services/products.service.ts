/* This method will be included in the 
Home component to fetch list of products */

import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private apiService: ApiService) {

  getProducts = (url: string, params:any): Observable<any> => {
    return this.apiService.get<any>(url, params);
  }
}
