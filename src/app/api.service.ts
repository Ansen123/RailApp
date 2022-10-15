import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewTrain=()=>{
    return this.http.get("https://mocki.io/v1/1b278478-78f3-4b6e-bc6a-4c1281c9a414")
  }
}
