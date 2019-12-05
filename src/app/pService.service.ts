import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PInterface } from './pInterface';

const httpOption = {
  headers: new HttpHeaders ({
    'Content-Type': 'application.json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PServiceService {
  private apiURL = 'https://desolate-reaches-15540.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }
  
  getProjects(): Observable<PInterface[]>{
    return this.httpClient.get<PInterface[]>(this.apiURL);
  }

  postProject(project: PInterface): Observable<PInterface>{
    return this.httpClient.post<PInterface>(this.apiURL, project, httpOption);
  }

  getProjectById(id: string): Observable<PInterface> {
    return this.httpClient.get<PInterface>(this.apiURL + id);

  }

}
