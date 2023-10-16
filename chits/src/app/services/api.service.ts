// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataService } from '../users-data.service';
// interface outstandbrnh {
//   type: string;
// }
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // branchdata : outstandbrnh = {
  //   type:"branch"
  // }

  private apiUrl = 'YOUR_API_URL'; // Replace this with your API endpoint
  

  constructor(private http: HttpClient,private userData:UserDataService) { }

  postData(data: any): Observable<any> {
    return this.http.post<any>(this.userData.outstandingreport, data); // Provide the data as the second argument
  }
}
