import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
import { CarService } from 'src/app/Services/car.service';
import { Car } from 'src/app/Interfaces/car'; 

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  CarForm!: FormGroup;
  cars: Car[] = []; // Initialize an empty array to hold cars

  constructor(private formBuilder: FormBuilder, private carService: CarService) {}

  ngOnInit(): void {
    this.CarForm = this.formBuilder.group({
      Model: ['', Validators.required],
      Antal: ['', Validators.required],
      AEndringAntal: ['', Validators.required]
    });

    // Fetch and display the list of cars when the component initializes
    this.fetchCars();
  }

  onSubmit() {
    if (this.CarForm.invalid) {
      return;
    }

    const Model = this.CarForm.controls['Model'].value;
    const Antal = this.CarForm.controls['Antal'].value;
    const AEndringAntal = this.CarForm.controls['AEndringAntal'].value;

    const observer: Observer<Car> =({
      next: (response: Car) => {
        // Handle successful car addition response here
        console.log('Car successful', response);
        // After adding a car, refresh the list of cars
        this.fetchCars();
      },
      error: (error: any) => {
        // Handle car addition error here
        console.error('Car error', error);
      },
      complete: () => {
        // Handle completion if needed
      }
    });

    this.carService.postCar(Model, Antal, AEndringAntal).subscribe(observer);
  }

// Fetch the list of cars and assign it to the 'cars' array
fetchCars() {
  const carsObserver: Observer<Car[]> =({
    next: (data: Car[]) => {
      // Update the 'cars' array with the fetched data
      this.cars = data;
      console.log('Fetched cars:', this.cars); // Add this line for debugging
    },
    error: (error: any) => {
      console.error('Error fetching cars', error);
    },
    complete: () => {
      // Handle completion if needed
    }
  });

  this.carService.getCars().subscribe(carsObserver);
}

}
