import {Component, Input} from '@angular/core';
import {ICar} from "../../interfaces/car.interface";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

  @Input()
  car:ICar

  constructor(private carService:CarService) {
  }

  deleteCar() {
    this.carService.deleteById(this.car.id).subscribe(() => {
      this.carService.setTrigger()
    })
  }

  updateCar() {
    this.carService.setCarForUpdate(this.car)
  }
}
