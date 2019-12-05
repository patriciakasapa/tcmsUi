import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { CInterface } from './cInterface';

@Injectable({
  providedIn: 'root'
})
export class cServiceService {
  private apiURL = 'https://mysterious-peak-14776.herokuapp.com/customer/';

  constructor(private httpClient: HttpClient) { }

// functions to access the data online

//To get all client details
getClients(): Observable<CInterface[]>{
  return this.httpClient.get<CInterface[]>(this.apiURL);
}
// postClient(client: Customer): Observable<Customer> {
//   return this.httpClient.post<Customer>(this.apiURL, customer, httpOptions);
// }
// getCustomerById(id: string): Observable<Customer> {
//   return this.httpClient.get<Customer>(this.apiURL + id);
//   }
}
