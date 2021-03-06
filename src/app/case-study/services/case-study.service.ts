import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Constants } from '@shared';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CaseStudyService {
  private API_URL = environment.workbenchUrl;
  private NODE_URL = environment.nodeRedUrl;

  constructor(private _http: HttpClient) { }

  getAllUseCases(): Observable<any> {
    return this._http.get(this.API_URL + '/api/dynamicfields');
  } 

  createUsecase(request: any): Observable<any> {
    return this._http.post(this.API_URL + '/api/dynamicfields', request);
  }

  createRunWorkflow(request: any): Observable<any> {
    return this._http.post(this.NODE_URL + 'documentClassification', request);
  }
  
}
