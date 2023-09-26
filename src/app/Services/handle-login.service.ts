import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class HandleLoginService {
  url: string = "https://localhost:8443/api/auth";
  endpointLogin: string = "login"; // API endpoint

  constructor(private httpClient: HttpClient) {}

  postLogin(username: string, password: string): Observable<Login> {
    // Sends the username and password as an object
    const loginData = { username, password };
    

    // Sends a POST request to the API with the specified headers
    return this.httpClient.post<Login>(`${this.url}/${this.endpointLogin}`, loginData);
  }
}
