import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './Emp';


@Injectable({
  providedIn: 'root'
})
export class NsService {

  private apiUrl = 'https://localhost:44365/Api/EmployeeApi'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    debugger;
    return this.http.get<any>(this.apiUrl);
  }

  SubmitData(data: any): Observable<any> {
    debugger;
    alert('Service submit method');
    return this.http.post<any>(this.apiUrl, data);
  }

  // constructor() { }
  getMsg(){
    return "Welcome ajay yadav";
  }
}
