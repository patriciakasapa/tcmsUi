import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { CInterface } from './cInterface';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application.json'
    })
  };
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
postClient(client: CInterface): Observable<CInterface> {
  return this.httpClient.post<CInterface>(this.apiURL, client, httpOptions);
}
getClientById(id: string): Observable<CInterface> {
  return this.httpClient.get<CInterface>(this.apiURL + id);
  }
}
