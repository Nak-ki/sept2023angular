import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces/car.interface";
import {CarComponent} from "../car/car.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarComponent,
    NgForOf
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{

  cars: ICar[]

  constructor(private carService:CarService) {
  }

  ngOnInit(): void {
    this.carService.getTriggerStatus().subscribe(() =>{
      this.carService.getAll().subscribe(value => this.cars = value)
    })

  }

}
