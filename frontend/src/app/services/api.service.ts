/* Api service is going to facilitate Products Method calls */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Options } from "../../types";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(
    private httpClient: HttpClient // HttpClient service can make api calls to specific URLs
  ) {}

  /* <T> represents a generic type parameter. It means 
  that the function can handle data of any type, and the specific
  type will be determined when the function is called.
  For example, you might call get <string>(url) to indicate
  that you expect a sting response. */

  /*  Observables are a powerful feature used extensively 
  in reactive programming to handle asynchronous operations
   and data streams.*/

  get<T>(url: string, options?: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
