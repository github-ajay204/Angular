import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NsService {
  private apiUrl = 'https://localhost:44365/api/EmployeeApi'; // API URL for POST
  private getApiUrl = 'https://localhost:44365/api/GetAllEmployee'; // API URL for GET

  constructor(private http: HttpClient) { }

  // Submit data to API
  SubmitData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // Get all employees
  getAllEmployee(): Observable<any> {
    return this.http.get<any>(this.getApiUrl);
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Emp } from './Emp';


// @Injectable({
//   providedIn: 'root'
// })
// export class NsService {

//   private apiUrl = 'https://localhost:44365/Api/EmployeeApi'; // Replace with your API URL
//   private GetapiUrl = 'https://localhost:44365/Api/GetAllEmployee';

//   constructor(private http: HttpClient) { }

//   // getData(): Observable<any> {
//   //   debugger;
//   //   return this.http.get<any>(this.apiUrl);
//   // }

//   SubmitData(data: any): Observable<any> {
//     debugger;
//     return this.http.post<any>(this.apiUrl, data);
//   }

//   // constructor() { }
//   getMsg(){
//     return "Welcome ajay yadav";
//   }

//   getAllEmployee(): Observable<any> {
//     debugger;
//     return this.http.get<any>(this.apiUrl);
//   }

  
// }
