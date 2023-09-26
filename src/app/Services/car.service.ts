import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../Interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url: string = "https://localhost:8443/api/Cars";
  endpointAddCar: string = "addCar"; // API endpoint to add a car
  endpointGetCars: string = "getAllCars"; // API endpoint to get all cars

  constructor(private httpClient: HttpClient) {}

  postCar(Model: string, Antal: number, AEndringAntal: number): Observable<Car> {
    const CarData = { Model, Antal, AEndringAntal };
    return this.httpClient.post<Car>(`${this.url}/${this.endpointAddCar}`, CarData);
  }

  // Fetch the list of all cars
  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.url}/${this.endpointGetCars}`);
  }
}
